<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import {
  createChart,
  LineSeries,
  CandlestickSeries,
  HistogramSeries
} from "lightweight-charts";

// ===== 新增：指标 tab =====
const indicatorTabs = [
  "Volume",
  "KDJ",
  "SMA",
  "EMA",
  "WMA",
  "VWAP",
  "MACD",
  "Stoch",
  "CCI",
  "ROC"
];
const activeTab = ref("Volume"); // 默认显示成交量

const mainContainer = ref(null);
const indicatorContainer = ref(null);

let mainChart = null;
let indicatorChart = null;

let lineSeries = null;
let candleSeries = null;
let vwapSeries = null;

let indicatorSeries = {};

const stockInput = ref("AAPL");
const intervalSelect = ref("5min");
const chartType = ref("Line");

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
import { getStockData } from "@/api/order";

// -------------------- 指标计算函数 --------------------
function calcVWAP(data) {
  let cumulativePV = 0;
  let cumulativeVol = 0;
  return data.map((d) => {
    cumulativePV += d.close * d.volume;
    cumulativeVol += d.volume;
    const vwap = cumulativeVol > 0 ? cumulativePV / cumulativeVol : d.close;
    return { time: d.time, value: vwap };
  });
}

function calcVOL(data) {
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

function calcVolRatio(data, period = 5) {
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

function calcKDJ(data, period = 9) {
  let K = 50;
  let D = 50;
  const result = { K: [], D: [], J: [] };

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

// 简单移动平均 (SMA)
function calcSMA(data, period = 20) {
  const sma = [];
  for (let i = 0; i < data.length; i++) {
    if (i + 1 < period) {
      sma.push({ time: data[i].time, value: null }); // null 可以让图表跳过
      continue;
    }
    const slice = data.slice(i + 1 - period, i + 1);
    const sum = slice.reduce((acc, d) => acc + d.close, 0); // close 是数字
    const value = sum / period;
    sma.push({ time: data[i].time, value });
  }
  return sma;
}

// 指数移动平均 (EMA)
function calcEMA(data, period = 14) {
  const k = 2 / (period + 1);
  let ema = data[0].close;
  return data.map((d, i) => {
    if (i === 0) return { time: d.time, value: ema };
    ema = d.close * k + ema * (1 - k);
    return { time: d.time, value: ema };
  });
}

// 加权移动平均 (WMA)
function calcWMA(data, period = 14) {
  const denom = (period * (period + 1)) / 2;
  const result = [];

  for (let i = period - 1; i < data.length; i++) {
    let num = 0;
    for (let j = 0; j < period; j++) {
      num += data[i - j].close * (period - j);
    }
    result.push({ time: data[i].time, value: num / denom });
  }

  return result;
}

// MACD (标准: 12,26,9)
function calcMACD(data, fast = 12, slow = 26, signal = 9) {
  const emaFast = calcEMA(data, fast).map((d) => d.value);
  const emaSlow = calcEMA(data, slow).map((d) => d.value);
  let macdLine = [];
  for (let i = 0; i < data.length; i++) {
    if (emaFast[i] == null || emaSlow[i] == null) macdLine.push(null);
    else macdLine.push(emaFast[i] - emaSlow[i]);
  }
  const signalLine = calcEMA(
      macdLine.map((v, i) => ({ time: data[i].time, close: v ?? 0 })),
      signal
  ).map((d) => d.value);
  const histogram = macdLine.map((v, i) =>
      v != null && signalLine[i] != null ? v - signalLine[i] : null
  );

  return {
    macd: data.map((d, i) => ({ time: d.time, value: macdLine[i] })),
    signal: data.map((d, i) => ({ time: d.time, value: signalLine[i] })),
    hist: data.map((d, i) => ({ time: d.time, value: histogram[i] }))
  };
}

// 随机指标 Stochastic Oscillator (Stoch)
function calcStoch(data, kPeriod = 14, dPeriod = 3) {
  const K = [];
  const D = [];

  for (let i = kPeriod - 1; i < data.length; i++) {
    const slice = data.slice(i - kPeriod + 1, i + 1);
    const low = Math.min(...slice.map((x) => x.low));
    const high = Math.max(...slice.map((x) => x.high));
    const RSV =
        high !== low ? ((data[i].close - low) / (high - low)) * 100 : 50;
    K.push({ time: data[i].time, value: RSV });

    if (i < kPeriod - 1 + dPeriod - 1) {
      D.push({ time: data[i].time, value: RSV }); // 用 K 替代 null
    } else {
      const dVal =
          K.slice(K.length - dPeriod, K.length).reduce((s, x) => s + x.value, 0) /
          dPeriod;
      D.push({ time: data[i].time, value: dVal });
    }
  }

  return { K, D };
}

// 商品通道指数 CCI
function calcCCI(data, period = 20) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const slice = data.slice(Math.max(0, i - period + 1), i + 1);
    const typicalPrice = slice.map((x) => (x.high + x.low + x.close) / 3);
    const tp = typicalPrice[typicalPrice.length - 1];
    const ma = typicalPrice.reduce((s, v) => s + v, 0) / typicalPrice.length;
    const md =
        typicalPrice.reduce((s, v) => s + Math.abs(v - ma), 0) /
        typicalPrice.length;
    const cci = md !== 0 ? (tp - ma) / (0.015 * md) : 0;
    result.push({ time: data[i].time, value: cci });
  }
  return result;
}

// 变动率 ROC
function calcROC(data, period = 12) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const pastIndex = i - period;
    let roc;
    if (pastIndex >= 0) {
      roc =
          ((data[i].close - data[pastIndex].close) / data[pastIndex].close) * 100;
    } else {
      // 前期不足时，用 0 或者收盘价差值代替
      roc = 0;
    }
    result.push({ time: data[i].time, value: roc });
  }
  return result;
}

async function fetchStockInfo(symbol, interval) {
  try {
    const result = await getStockData(symbol, interval);
    const stockArray = result?.data?.data;
    if (!stockArray || !Array.isArray(stockArray)) return null;
    const data = stockArray.map((d) => ({
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

// === 副图指标渲染 ===
function renderIndicator(data) {
  if (!indicatorContainer.value) return;
  indicatorChart?.remove();
  indicatorChart = createChart(indicatorContainer.value, {
    width: indicatorContainer.value.clientWidth,
    height: indicatorContainer.value.clientHeight,
    layout: { background: { color: "#fff" }, textColor: "#000" }
  });

  indicatorSeries = {};

  switch (activeTab.value) {
    case "Volume": {
      const vol = indicatorChart.addSeries(HistogramSeries);
      const ratio = indicatorChart.addSeries(LineSeries, { color: "blue" });
      vol.setData(calcVOL(data));
      ratio.setData(calcVolRatio(data));
      indicatorSeries["Volume"] = [vol, ratio];
      break;
    }
    case "KDJ": {
      const k = indicatorChart.addSeries(LineSeries, { color: "green" });
      const d = indicatorChart.addSeries(LineSeries, { color: "red" });
      const j = indicatorChart.addSeries(LineSeries, { color: "purple" });
      const kdjData = calcKDJ(data, 9);
      k.setData(kdjData.K);
      d.setData(kdjData.D);
      j.setData(kdjData.J);
      indicatorSeries["KDJ"] = [k, d, j];
      break;
    }
    case "SMA": {
      const smaLine = indicatorChart.addSeries(LineSeries, { color: "orange" });
      const smaData = calcSMA(data, 20).filter(
          (d) => typeof d.value === "number"
      );
      smaLine.setData(smaData);
      indicatorSeries["SMA"] = [smaLine];
      break;
    }
    case "EMA": {
      const emaLine = indicatorChart.addSeries(LineSeries, { color: "orange" });
      emaLine.setData(calcEMA(data, 20));
      indicatorSeries["EMA"] = [emaLine];
      break;
    }
    case "WMA": {
      const wmaLine = indicatorChart.addSeries(LineSeries, { color: "purple" });
      const wmaData = calcWMA(data, 14); // 已经过滤掉前期 null
      wmaLine.setData(wmaData);
      indicatorSeries["WMA"] = [wmaLine];
      break;
    }

    case "VWAP": {
      const vwapLine = indicatorChart.addSeries(LineSeries, { color: "blue" });
      vwapLine.setData(calcVWAP(data));
      indicatorSeries["VWAP"] = [vwapLine];
      break;
    }
    case "MACD": {
      const macdData = calcMACD(data);
      const macdLine = indicatorChart.addSeries(LineSeries, { color: "blue" });
      const macdSignal = indicatorChart.addSeries(LineSeries, { color: "red" });
      const macdHist = indicatorChart.addSeries(HistogramSeries, {
        color: "green"
      });
      macdLine.setData(macdData.macd);
      macdSignal.setData(macdData.signal);
      macdHist.setData(macdData.hist);
      indicatorSeries["MACD"] = [macdLine, macdSignal, macdHist];
      break;
    }
    case "Stoch": {
      const stochData = calcStoch(data);
      const kLine = indicatorChart.addSeries(LineSeries, { color: "green" });
      const dLine = indicatorChart.addSeries(LineSeries, { color: "red" });
      kLine.setData(stochData.K);
      dLine.setData(stochData.D);
      indicatorSeries["Stoch"] = [kLine, dLine];
      break;
    }
    case "CCI": {
      const cciLine = indicatorChart.addSeries(LineSeries, { color: "orange" });
      cciLine.setData(calcCCI(data));
      indicatorSeries["CCI"] = [cciLine];
      break;
    }
    case "ROC": {
      const rocLine = indicatorChart.addSeries(LineSeries, { color: "purple" });
      rocLine.setData(calcROC(data));
      indicatorSeries["ROC"] = [rocLine];
      break;
    }
  }
}

// === 更新主图和副图 ===
async function updateChart() {
  if (!mainChart) return;
  const info = await fetchStockInfo(stockInput.value, intervalSelect.value);
  if (!info) return;
  const data = info.data;
  if (!data.length) return;

  data.sort((a, b) => a.time - b.time);

  // 主图
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

  // 主图 VWAP
  const vwapData = calcVWAP(data);
  vwapSeries?.setData(vwapData);

  // 副图指标
  renderIndicator(data);

  // 更新行情信息
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

  const dTime = new Date(latest.time * 1000);
  const formattedTime = `${dTime.toLocaleString("en-US", {
    month: "short"
  })} ${dTime.getDate()} ${dTime.getFullYear()} ${dTime.getHours()}:${dTime.getMinutes()}:${dTime.getSeconds()} ET`;

  stockInfo.value = {
    symbol: info.symbol,
    name: info.companyName,
    lastPrice: parseFloat(latest.close.toFixed(3)),
    lastPriceUp: change >= 0,
    change: parseFloat(change.toFixed(3)),
    changePercent: parseFloat(changePercent.toFixed(2)),
    high: parseFloat(high.toFixed(3)),
    highUp: high >= latest.close,
    low: parseFloat(low.toFixed(3)),
    lowUp: low >= latest.close,
    volume,
    turnover,
    lastUpdated: formattedTime,
    preMarketPrice: info.preMarketLatest.close ? parseFloat(info.preMarketLatest.close.toFixed(3)) : 0,
    preMarketPriceUp:
        info.preMarketLatest.close && info.preMarketLatest.open
            ? info.preMarketLatest.close >= info.preMarketLatest.open
            : true,
    preMarketChange:
        info.preMarketLatest.close && info.preMarketLatest.open
            ? parseFloat((info.preMarketLatest.close - info.preMarketLatest.open).toFixed(3))
            : 0,
    preMarketChangePercent:
        info.preMarketLatest.close && info.preMarketLatest.open
            ? parseFloat((
                ((info.preMarketLatest.close - info.preMarketLatest.open) /
                    info.preMarketLatest.open) *
                100
            ).toFixed(2))
            : 0,
    preMarketHigh: info.preMarketLatest.high ? parseFloat(info.preMarketLatest.high.toFixed(3)) : 0,
    preMarketLow: info.preMarketLatest.low ? parseFloat(info.preMarketLatest.low.toFixed(3)) : 0,
    preMarketVolume: info.preMarketLatest.volume || 0,
    preMarketTurnover:
        info.preMarketLatest.close && info.preMarketLatest.volume
            ? info.preMarketLatest.close * info.preMarketLatest.volume
            : 0
  };
}

// === 主图初始化 ===
onMounted(async () => {
  if (
      !mainContainer.value ||
      !indicatorContainer.value
  )
    return;

  // 主图
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
    lineWidth: 2
  }); // 新增 VWAP

  await updateChart();

  // 自动适应窗口
  const handleResize = () => {
    mainChart?.resize(
        mainContainer.value.clientWidth,
        mainContainer.value.clientHeight
    );
    indicatorChart?.resize(
        indicatorContainer.value.clientWidth,
        indicatorContainer.value.clientHeight
    );
  };
  window.addEventListener("resize", handleResize);

  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
    mainChart?.remove();
    indicatorChart?.remove();
  });
});

watch(activeTab, async () => {
  await nextTick();
  await updateChart();
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

    <!-- 主图 -->
    <div ref="mainContainer" class="chart-main"></div>

    <!-- 指标 tab -->
    <div class="indicator-tabs">
      <button
          v-for="tab in indicatorTabs"
          :key="tab"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div ref="indicatorContainer" class="chart-indicator"></div>
  </div>
</template>

<style scoped>
.stock-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.chart-main {
  width: 100%;
  height: 400px;
}
.chart-sub-wrapper {
  display: flex;
  gap: 10px;
}
.chart-sub {
  flex: 1;
  height: 200px;
}
.chart-indicator {
  height: 200px;
}
.indicator-tabs {
  display: flex;
  gap: 5px;
  margin-bottom: 5px;
}
.indicator-tabs button {
  padding: 4px 8px;
  cursor: pointer;
}
.indicator-tabs button.active {
  background-color: #007bff;
  color: #fff;
}
.stock-info span.up {
  color: green;
}
.stock-info span.down {
  color: red;
}
</style>
