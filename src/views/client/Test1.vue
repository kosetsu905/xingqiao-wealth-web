<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  createChart,
  type IChartApi,
  type ISeriesApi,
  type UTCTimestamp,
  LineSeries,
  CandlestickSeries
} from "lightweight-charts";

const container = ref<HTMLDivElement | null>(null);

let chart: IChartApi | null = null;
let lineSeries: ISeriesApi<"Line"> | null = null;
let candleSeries: ISeriesApi<"Candlestick"> | null = null;

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
};

// 获取股票数据
import { getStockData } from '@/api/coin'

async function fetchStockData(symbol: string, interval: string): Promise<StockPoint[]> {
  try {
    const result = await getStockData(symbol, interval)
    if (!result?.data || !Array.isArray(result.data)) return []
    return result.data.map((d: any) => ({
      time: Math.floor(new Date(d.time).getTime() / 1000),
      value: parseFloat(d.close),
      open: parseFloat(d.open),
      high: parseFloat(d.high),
      low: parseFloat(d.low),
      close: parseFloat(d.close)
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}


// 更新图表
async function updateChart() {
  if (!chart) return;

  const data = await fetchStockData(stockInput.value, intervalSelect.value);

  // 按时间升序排序
  data.sort((a, b) => a.time - b.time);

  if (!data.length) return;

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
}

onMounted(() => {
  if (!container.value) return;

  chart = createChart(container.value, {
    width: container.value.clientWidth,
    height: container.value.clientHeight, // 使用容器当前高度
    layout: {
      background: { color: "#ffffff" },
      textColor: "#000000"
    },
    rightPriceScale: { borderVisible: false },
    timeScale: { borderVisible: false }
  });

  lineSeries = chart.addSeries(LineSeries, { color: "blue", lineWidth: 2 });
  candleSeries = chart.addSeries(CandlestickSeries, {
    upColor: "green",
    downColor: "red",
    borderUpColor: "green",
    borderDownColor: "red",
    wickUpColor: "green",
    wickDownColor: "red",
    borderVisible: true,
    wickVisible: true
  });

  updateChart();

  // --- 自动适应窗口大小 ---
  const handleResize = () => {
    if (!chart || !container.value) return;
    chart.resize(container.value.clientWidth, container.value.clientHeight);
  };
  window.addEventListener("resize", handleResize);

  // 在组件卸载时移除监听
  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
    chart?.remove();
    chart = null;
    lineSeries = null;
    candleSeries = null;
  });
});

onBeforeUnmount(() => {
  chart?.remove();
  chart = null;
  lineSeries = null;
  candleSeries = null;
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

    <!-- 图表容器 -->
    <div ref="container" style="flex: 1"></div>
  </div>
</template>
