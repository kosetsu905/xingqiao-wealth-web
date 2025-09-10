<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  createChart,
  type IChartApi,
  type ISeriesApi,
  type UTCTimestamp,
  LineSeries,
  CandlestickSeries,
  HistogramSeries
} from "lightweight-charts";

const mainContainer = ref<HTMLDivElement | null>(null);
const volumeContainer = ref<HTMLDivElement | null>(null);
const kdjContainer = ref<HTMLDivElement | null>(null);

let mainChart: IChartApi | null = null;
let volumeChart: IChartApi | null = null;
let kdjChart: IChartApi | null = null;

let lineSeries: ISeriesApi<"Line"> | null = null;
let candleSeries: ISeriesApi<"Candlestick"> | null = null;
let vwapSeries: ISeriesApi<"Line"> | null = null;

let volSeries: ISeriesApi<"Histogram"> | null = null;
let volRatioSeries: ISeriesApi<"Line"> | null = null;

let kLine: ISeriesApi<"Line"> | null = null;
let dLine: ISeriesApi<"Line"> | null = null;
let jLine: ISeriesApi<"Line"> | null = null;

const stockInput = ref("AAPL");
const intervalSelect = ref("5min");
const chartType = ref<"Line" | "Candlestick">("Line");

type StockPoint = {
  time: UTCTimestamp;
  value: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

const stockInfo = ref({
  symbol: "",
  name: "",
  lastPrice: 0,
  lastPriceUp: true,
  change: 0,
  changePercent: 0,
  high: 0,
  highUp: true,
  low: 0,
  lowUp: true,
  volume: 0,
  turnover: 0,
  lastUpdated: "",
  preMarketPrice: 0,
  preMarketPriceUp: true,
  preMarketChange: 0,
  preMarketChangePercent: 0,
  preMarketHigh: 0,
  preMarketLow: 0,
  preMarketVolume: 0,
  preMarketTurnover: 0
});

// 获取股票数据
import { getStockData } from "@/api/coin";

// -------------------- 指标计算函数 --------------------
function calcVWAP(data: any[]) {
  let cumulativePV = 0;
  let cumulativeVol = 0;
  return data.map((d) => {
    cumulativePV += d.close * d.volume;
    cumulativeVol += d.volume;
    const vwap = cumulativeVol > 0 ? cumulativePV / cumulativeVol : d.close;
    return { time: d.time, value: vwap };
  });
}

function calcVOL(data: any[]) {
  return data.map((d, i) => {
    const prevClose = i > 0 ? data[i - 1].close : d.close;
    const up = d.close >= prevClose;
    return {
      time: d.time,
      value: d.volume,
      color: up ? "green" : "red"
    };
  });
}

function calcVolRatio(data: any[], period = 5) {
  return data.map((d, i) => {
    if (i < period) return { time: d.time, value: 1 };
    const avg =
      data.slice(i - period, i).reduce((sum, x) => sum + x.volume, 0) / period;
    return {
      time: d.time,
      value: avg > 0 ? d.volume / avg : 1
    };
  });
}

function calcKDJ(
  data: any[],
  period = 9,
  kSmoothing = 3,
  dSmoothing = 3
): { K: any[]; D: any[]; J: any[] } {
  let K = 50;
  let D = 50;
  const result = { K: [] as any[], D: [] as any[], J: [] as any[] };

  data.forEach((d, i) => {
    const start = Math.max(0, i - period + 1);
    const slice = data.slice(start, i + 1);
    const low = Math.min(...slice.map((x) => x.low));
    const high = Math.max(...slice.map((x) => x.high));

    const RSV = high !== low ? ((d.close - low) / (high - low)) * 100 : 50;
    K = (2 / 3) * K + (1 / 3) * RSV;
    D = (2 / 3) * D + (1 / 3) * K;
    const J = 3 * K - 2 * D;

    result.K.push({ time: d.time, value: K });
    result.D.push({ time: d.time, value: D });
    result.J.push({ time: d.time, value: J });
  });

  return result;
}

// 获取股票行情和公司名
async function fetchStockInfo(symbol: string, interval: string) {
  try {
    const result = await getStockData(symbol, interval);
    const stockArray = result?.data?.data;
    if (!stockArray || !Array.isArray(stockArray)) return null;

    const data = stockArray.map((d: any) => ({
      time: Math.floor(new Date(d.time).getTime() / 1000),
      value: parseFloat(d.close),
      open: parseFloat(d.open),
      high: parseFloat(d.high),
      low: parseFloat(d.low),
      close: parseFloat(d.close),
      volume: Number(d.volume) || 0
    }));

    return {
      symbol: result.data.symbol,
      companyName: result.data.companyName,
      data,
      preMarketLatest: result.data.preMarketLatest || {}
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}

// 更新图表和行情
async function updateChart() {
  if (!mainChart) return;

  const info = await fetchStockInfo(stockInput.value, intervalSelect.value);
  if (!info) return;

  const data = info.data;
  if (!data.length) return;

  data.sort((a, b) => a.time - b.time);

  if (chartType.value === "Line") {
    lineSeries?.setData(data.map((d) => ({ time: d.time, value: d.value })));
    candleSeries?.setData([]);
  } else {
    candleSeries?.setData(
      data.map((d) => ({
        time: d.time,
        open: d.open,
        high: d.high,
        low: d.low,
        close: d.close
      }))
    );
    lineSeries?.setData([]);
  }

  // ===== 指标计算 =====
  const vwapData = calcVWAP(data);
  const volData = calcVOL(data);
  const volRatioData = calcVolRatio(data, 5);
  const kdjData = calcKDJ(data, 9);

  vwapSeries?.setData(vwapData);
  volSeries?.setData(volData);
  volRatioSeries?.setData(volRatioData);
  kLine?.setData(kdjData.K);
  dLine?.setData(kdjData.D);
  jLine?.setData(kdjData.J);

  // 最新价和涨跌
  const latest = data[data.length - 1];
  const prev = data.length > 1 ? data[data.length - 2] : latest;
  const change = latest.close - prev.close;
  const changePercent = prev.close ? (change / prev.close) * 100 : 0;

  const high = Math.max(...data.map((d) => d.high));
  const low = Math.min(...data.map((d) => d.low));
  const volume = data.reduce((sum, d) => sum + (d.volume || 0), 0);
  const turnover = data.reduce(
    (sum, d) => sum + (d.close || 0) * (d.volume || 0),
    0
  );

  const d = new Date(latest.time * 1000);
  const formattedTime = `${d.toLocaleString("en-US", {
    month: "short"
  })} ${d.getDate()} ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ET`;

  // --- 使用后端返回的 preMarketLatest ---
  const preMarket = info.preMarketLatest || {};

  stockInfo.value = {
    symbol: info.symbol,
    name: info.companyName,
    lastPrice: latest.close.toFixed(3),
    lastPriceUp: change >= 0,
    change: change.toFixed(3),
    changePercent: changePercent.toFixed(2),
    high: high.toFixed(3),
    highUp: high >= latest.close,
    low: low.toFixed(3),
    lowUp: low >= latest.close,
    volume,
    turnover,
    lastUpdated: formattedTime,
    preMarketPrice: preMarket.close?.toFixed(3) || 0,
    preMarketPriceUp:
      preMarket.close && preMarket.open
        ? preMarket.close >= preMarket.open
        : true,
    preMarketChange:
      preMarket.close && preMarket.open
        ? (preMarket.close - preMarket.open).toFixed(3)
        : 0,
    preMarketChangePercent:
      preMarket.close && preMarket.open
        ? (((preMarket.close - preMarket.open) / preMarket.open) * 100).toFixed(
            2
          )
        : 0,
    preMarketHigh: preMarket.high?.toFixed(3) || 0,
    preMarketLow: preMarket.low?.toFixed(3) || 0,
    preMarketVolume: preMarket.volume || 0,
    preMarketTurnover:
      preMarket.close && preMarket.volume
        ? preMarket.close * preMarket.volume
        : 0
  };
}

onMounted(() => {
  if (!mainContainer.value || !volumeContainer.value || !kdjContainer.value)
    return;

  // --- 主图 ---
  mainChart = createChart(mainContainer.value, {
    width: mainContainer.value.clientWidth,
    height: mainContainer.value.clientHeight,
    layout: { background: { color: "#fff" }, textColor: "#000" }
  });
  lineSeries = mainChart.addSeries(LineSeries, { color: "blue", lineWidth: 2 });
  candleSeries = mainChart.addSeries(CandlestickSeries, {
    upColor: "green",
    downColor: "red",
    borderUpColor: "green",
    borderDownColor: "red",
    wickUpColor: "green",
    wickDownColor: "red"
  });
  vwapSeries = mainChart.addSeries(LineSeries, {
    color: "orange",
    lineWidth: 1
  });

  // --- 成交量图 ---
  volumeChart = createChart(volumeContainer.value, {
    width: volumeContainer.value.clientWidth,
    height: volumeContainer.value.clientHeight,
    layout: { background: { color: "#fff" }, textColor: "#000" }
  });
  volSeries = volumeChart.addSeries(HistogramSeries);
  volRatioSeries = volumeChart.addSeries(LineSeries, { color: "blue" });

  // --- KDJ 图 ---
  kdjChart = createChart(kdjContainer.value, {
    width: kdjContainer.value.clientWidth,
    height: kdjContainer.value.clientHeight,
    layout: { background: { color: "#fff" }, textColor: "#000" }
  });
  kLine = kdjChart.addSeries(LineSeries, { color: "green" });
  dLine = kdjChart.addSeries(LineSeries, { color: "red" });
  jLine = kdjChart.addSeries(LineSeries, { color: "purple" });

  updateChart();

  // --- 自动适应窗口大小 ---
  const handleResize = () => {
    if (!mainChart || !volumeChart || !kdjChart) return;
    mainChart.resize(
      mainContainer.value!.clientWidth,
      mainContainer.value!.clientHeight
    );
    volumeChart.resize(
      volumeContainer.value!.clientWidth,
      volumeContainer.value!.clientHeight
    );
    kdjChart.resize(
      kdjContainer.value!.clientWidth,
      kdjContainer.value!.clientHeight
    );
  };
  window.addEventListener("resize", handleResize);

  // 在组件卸载时移除监听
  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
    mainChart?.remove();
    volumeChart?.remove();
    kdjChart?.remove();
  });
});
</script>

<template>
  <div style="display: flex; flex-direction: column; height: 100vh">
    <!-- 控制栏 -->
    <div id="controls" style="padding: 10px; background: #f5f5f5">
      <label>
        Symbol:
        <input type="text" v-model="stockInput" placeholder="e.g. AAPL, ETH" />
      </label>
      <label style="margin-left: 10px">
        Interval:
        <select v-model="intervalSelect">
          <option value="5min">5 min</option>
          <option value="15min">15 min</option>
          <option value="60min">60 min</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>
      <label style="margin-left: 10px">
        Chart Type:
        <select v-model="chartType">
          <option value="Line">Line</option>
          <option value="Candlestick">Candlestick</option>
        </select>
      </label>
      <button style="margin-left: 10px" @click="updateChart">
        Refresh Chart
      </button>
    </div>

    <!-- 行情信息栏 -->
    <div
      id="stock-info"
      style="padding: 10px; background: #fff; border-bottom: 1px solid #ddd"
    >
      <div style="font-size: 18px; font-weight: bold">
        {{ stockInfo.symbol }} {{ stockInfo.name }}
      </div>
      <div style="color: gray; font-size: 12px">
        {{ stockInfo.lastUpdated }}
      </div>
      <div style="margin-top: 5px; font-size: 20px; font-weight: bold">
        <span :style="{ color: stockInfo.lastPriceUp ? 'green' : 'red' }">
          {{ stockInfo.lastPrice }}
          {{ stockInfo.lastPriceUp ? "↑" : "↓" }}
        </span>
      </div>
      <div style="margin-top: 5px; font-size: 14px">
        <span :style="{ color: stockInfo.change >= 0 ? 'green' : 'red' }">{{
          stockInfo.change
        }}</span>
        <span :style="{ color: stockInfo.change >= 0 ? 'green' : 'red' }"
          >({{ stockInfo.changePercent }}%)</span
        >
      </div>
      <div style="margin-top: 5px; font-size: 12px">
        <span :style="{ color: stockInfo.highUp ? 'green' : 'red' }"
          >High {{ stockInfo.high }}</span
        >
        &nbsp;&nbsp;
        <span :style="{ color: stockInfo.lowUp ? 'green' : 'red' }"
          >Low {{ stockInfo.low }}</span
        >
        &nbsp;&nbsp; Volume {{ (stockInfo.volume / 1e6).toFixed(2) }}M
      </div>
      <div style="margin-top: 5px; font-size: 12px; color: gray">
        Pre-Mkt
        <span :style="{ color: stockInfo.preMarketPriceUp ? 'green' : 'red' }">
          {{ stockInfo.preMarketPrice }} </span
        >&nbsp;&nbsp;
        <span
          :style="{ color: stockInfo.preMarketChange >= 0 ? 'green' : 'red' }"
        >
          {{ stockInfo.preMarketChange }} </span
        >&nbsp;&nbsp;
        <span
          :style="{ color: stockInfo.preMarketChange >= 0 ? 'green' : 'red' }"
        >
          ({{ stockInfo.preMarketChangePercent }}%)
        </span>
        &nbsp;&nbsp; {{ stockInfo.lastUpdated }} &nbsp;&nbsp; High
        <span style="color: green">{{ stockInfo.preMarketHigh }}</span> Turnover
        {{ (stockInfo.preMarketTurnover / 1e6).toFixed(2) }}M &nbsp;&nbsp; Low
        <span style="color: red">{{ stockInfo.preMarketLow }}</span> Volume
        {{ (stockInfo.preMarketVolume / 1e6).toFixed(2) }}M
      </div>
    </div>

    <!-- 上方主图 -->
    <div style="flex: 3; border-bottom: 1px solid #ddd">
      <div ref="mainContainer" style="height: 100%"></div>
    </div>

    <!-- 下方横向容器，放两个副图 -->
    <div style="flex: 1; display: flex; gap: 8px; padding: 4px">
      <!-- 左：成交量 -->
      <div style="flex: 1; border: 1px solid #ddd; border-radius: 6px">
        <div
          style="
            padding: 4px;
            font-size: 12px;
            font-weight: bold;
            background: #fafafa;
            border-bottom: 1px solid #eee;
          "
        >
          Volume + Volume Ratio
        </div>
        <div ref="volumeContainer" style="height: calc(100% - 22px)"></div>
      </div>

      <!-- 右：KDJ -->
      <div style="flex: 1; border: 1px solid #ddd; border-radius: 6px">
        <div
          style="
            padding: 4px;
            font-size: 12px;
            font-weight: bold;
            background: #fafafa;
            border-bottom: 1px solid #eee;
          "
        >
          KDJ Indicator
        </div>
        <div ref="kdjContainer" style="height: calc(100% - 22px)"></div>
      </div>
    </div>
  </div>
</template>
