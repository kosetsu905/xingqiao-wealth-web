<template>
  <div class="heatmap-container">
    <div class="tradingview-widget-container">
      <div id="tradingview-heatmap"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'StockHeatmap',
  setup() {
    onMounted(() => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbol": "NASDAQ:AAPL",
        "chartOnly": false,
        "dateRange": "12M",
        "noTimeScale": false,
        "colorTheme": "light",
        "isTransparent": false,
        "locale": "en",
        "width": "100%",
        "autosize": true,
        "height": "100%"
      });

      const container = document.getElementById('tradingview-heatmap');
      if (container) {
        container.appendChild(script);
      }
    });
  }
}
</script>

<style scoped>
.heatmap-container {
  width: 100%;
  height: 600px;
  margin: 20px 0;
}

.tradingview-widget-container {
  width: 100%;
  height: 100%;
}
</style>
