<template>
  <div class="dashboard">
    <!-- 引入Header组件 -->
    <Header />

    <div class="flex min-h-screen home-wrapper">
      <section class="grid w-full gap-8 home-section">
        <div class="md:col-span-1 xl:col-span-1 p-4">
          <TradingViewWidget
                  title="市场概况"
                  :script-url="`${scriptUrl}market-overview.js`"
                  :config="MARKET_OVERVIEW_WIDGET_CONFIG"
                  class="custom-chart"
                  :height="600"
          />
        </div>
        <div class="md-col-span xl:col-span-2 p-4">
          <TradingViewWidget
                  title="股票热图"
                  :script-url="`${scriptUrl}stock-heatmap.js`"
                  :config="HEATMAP_WIDGET_CONFIG"
                  :height="600"
          />
        </div>
      </section>
      <section class="grid w-full gap-8 home-section">
        <div class="md:col-span-1 xl:col-span-1 p-4">
          <TradingViewWidget
                  :script-url="`${scriptUrl}market-quotes.js`"
                  :config="MARKET_DATA_WIDGET_CONFIG"
                  :height="600"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
  import Header from '@/components/client/Header.vue'
  import { ref } from 'vue'
  import TradingViewWidget from '@/components/common/TradingViewWidget.vue'
  import {
    MARKET_OVERVIEW_WIDGET_CONFIG,
    HEATMAP_WIDGET_CONFIG,
  } from '@/composables/Constants'

  const scriptUrl = 'https://s3.tradingview.com/external-embedding/embed-widget-'
</script>

<style scoped>
  /* 样式... */
</style>