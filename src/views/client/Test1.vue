<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { createChart } from "lightweight-charts";
import type {
  IChartApi,
  ISeriesApi,
  LineData,
  CandlestickData,
  UTCTimestamp,
} from "lightweight-charts";

// DOM 容器
const container = ref<HTMLDivElement | null>(null);
let chart: IChartApi | null = null;

// 分开声明 Line 和 Candlestick 系列
let lineSeries: ISeriesApi<"Line"> | null = null;
let candleSeries: ISeriesApi<"Candlestick"> | null = null;

// 控件绑定
const stockInput = ref("AAPL");
const intervalSelect = ref("5min");
const chartType = ref<"Line" | "Candlestick">("Line");

// 数据请求函数
async function fetchStockData(symbol: string, interval: string) {
  try {
    const response = await fetch(`/api/stock_data/${symbol}?interval=${interval}`);
    const data = await response.json();

    if (!Array.isArray(data)) {
      console.error("Invalid data format", data);
      return [];
    }

    return data.map((item: any) => ({
      time: Math.floor(
        new Date(item.date || item.datetime.replace(" ", "T")).getTime() / 1000
      ) as UTCTimestamp,
      value: parseFloat(item.close),
      open: parseFloat(item.open),
      high: parseFloat(item.high),
      low: parseFloat(item.low),
      close: parseFloat(item.close),
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

// 更新图表函数
async function updateChart() {
  if (!container.value) return;

  // 清空旧图表
  container.value.innerHTML = "";
  chart = createChart(container.value, {
    width: container.value.offsetWidth,
    height: container.value.offsetHeight,
    layout: {
      background: { color: "#ffffff" },
      textColor: "#000000"
    }
    ,
    grid: { vertLines: { color: "#eee" }, horzLines: { color: "#eee" } },
    timeScale: { timeVisible: true, secondsVisible: false },
  });

  const data = await fetchStockData(stockInput.value, intervalSelect.value);

  if (chartType.value === "Line") {
    lineSeries = chart.addSeries({
      type: "Line",
      color: "blue",
      lineWidth: 2,
      priceLineVisible: true, // 你可以加默认值
      crossHairMarkerVisible: true,
    } as any); // 临时用 any 避开 TS 严格检查

    const lineData: LineData<UTCTimestamp>[] = data.map(d => ({
      time: d.time,
      value: d.value,
    }));
    lineSeries.setData(lineData);
    candleSeries = null;
  } else {
    candleSeries = chart.addSeries({
      type: "Candlestick",
      priceLineVisible: true,
      crossHairMarkerVisible: true,
    } as any);

    const candleData: CandlestickData<UTCTimestamp>[] = data.map(d => ({
      time: d.time,
      open: d.open,
      high: d.high,
      low: d.low,
      close: d.close,
    }));
    candleSeries.setData(candleData);
    lineSeries = null;
  }
}

// 生命周期
onMounted(async () => {
  await nextTick();
  updateChart();

  window.addEventListener("resize", () => {
    if (chart && container.value) {
      chart.applyOptions({
        width: container.value.offsetWidth,
        height: container.value.offsetHeight,
      });
    }
  });
});

onBeforeUnmount(() => {
  if (chart) {
    chart.remove();
    chart = null;
    lineSeries = null;
    candleSeries = null;
  }
});
</script>

<template>
  <div>
    <div id="controls">
      <label>
        Symbol:
        <input v-model="stockInput" type="text" placeholder="e.g. AAPL, ETH" />
      </label>

      <label>
        Time Interval:
        <select v-model="intervalSelect">
          <option value="5min">5 min</option>
          <option value="15min">15 min</option>
          <option value="60min">60 min</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>

      <label>
        Chart Type:
        <select v-model="chartType">
          <option value="Line">Line</option>
          <option value="Candlestick">Candlestick</option>
        </select>
      </label>

      <button @click="updateChart">Refresh Chart</button>
    </div>

    <div ref="container" id="stockChart"></div>
  </div>
</template>

<style scoped>
#controls {
  padding: 10px;
  background: #f2f2f2;
  display: flex;
  gap: 10px;
  align-items: center;
}

#stockChart {
  width: 100%;
  height: calc(100vh - 60px);
}

input[type="text"] {
  width: 120px;
  padding: 4px;
}
</style>
