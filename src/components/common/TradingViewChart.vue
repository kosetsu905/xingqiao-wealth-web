<!-- src/common/TradingViewChart.vue -->
<template>
  <div ref="chartContainer" class="trading-view-chart"></div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';

export default {
  name: 'TradingViewChart',
  props: {
    symbol: {
      type: String,
      default: 'NASDAQ:AAPL'
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  setup(props) {
    const chartContainer = ref(null);
    let widget = null;

    const initChart = () => {
      if (window.TradingView) {
        widget = new window.TradingView.widget({
          autosize: true,
          symbol: props.symbol,
          theme: props.theme,
          container_id: chartContainer.value.id,
          // 其他配置...
        });
      }
    };

    onMounted(() => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.onload = initChart;
      document.head.appendChild(script);
    });

    onUnmounted(() => {
      if (widget) {
        // 清理逻辑
      }
    });

    return { chartContainer };
  }
}
</script>

<style scoped>
.trading-view-chart {
  width: 100%;
  height: 500px;
}
</style>
