<template>
  <div class="dashboard">
    <!-- 引入Header组件 -->
    <Header/>

    <div class="ml-0  p-4 md:p-6 bg-gray-200 border-b border-gray-200">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 class="text-xl md:text-2xl font-semibold flex items-center">
            您好，{{ userName }}
            <i class="text-blue-500 ml-1 text-base md:text-lg inline-flex items-center" data-fa-i2svg="">
              <svg class="svg-inline--fa fa-circle-check w-4 h-4 md:w-5 md:h-5" aria-hidden="true" focusable="false"
                   data-prefix="fas"
                   data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                   data-fa-i2svg="">
                <path fill="currentColor"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
              </svg>
            </i>
          </h1>
          <p class="text-gray-600 text-sm">
            {{ currentDate }}
          </p>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
          <StockSearch/>
        </div>
      </div>
    </div>
    <div class="flex min-h-screen home-wrapper">
      <section class="grid w-full gap-8 home-section">
        <div class="md:col-span-2 xl:col-span-3 p-4">
          <TradingViewWidget
              title="市场概况"
              :script-url="`${scriptUrl}market-overview.js`"
              :config="MARKET_OVERVIEW_WIDGET_CONFIG"
              class="custom-chart"
          />
        </div>
      </section>
      <section class="grid w-full gap-4 home-section">
        <div class="md:col-span-2 xl:col-span-3 p-4">
          <TradingViewWidget
              title="股票热图"
              :script-url="`${scriptUrl}stock-heatmap.js`"
              :config="HEATMAP_WIDGET_CONFIG"
          />
        </div>
      </section>
      <section class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8 home-section">
        <div class="md:col-span-2 xl:col-span-1 p-4">
          <TradingViewWidget
              title="全球市场"
              :script-url="`${scriptUrl}market-quotes.js`"
              :config="MARKET_DATA_WIDGET_CONFIG"
          />
        </div>
        <div class="md:col-span-1 xl:col-span-2 p-4">
          <TradingViewWidget
              :script-url="`${scriptUrl}timeline.js`"
              :config="TOP_STORIES_WIDGET_CONFIG"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/client/Header.vue'
import TradingViewWidget from '@/components/common/TradingViewWidget.vue'
import {
  MARKET_OVERVIEW_WIDGET_CONFIG,
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from '@/composables/Constants'
import {onMounted, ref, watch} from "vue";
import {useCurrentDate} from "@/composables/Composable.js";
import {useRouter} from "vue-router";
import StockSearch from "@/views/client/StockSearch.vue";

const scriptUrl = 'https://s3.tradingview.com/external-embedding/embed-widget-'
const userName = ref('')
const {currentDate} = useCurrentDate()
const router = useRouter()

onMounted(async () => {
  // 设置账号名
  userName.value = localStorage.getItem('userName') || '用户';
});
</script>

<style scoped>

@keyframes shimmer {
  0% {
    background-position: -100% 0, 0 0;
  }
  100% {
    background-position: 100% 0, 0 0;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.tradingview-error button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.tradingview-error button:hover {
  background-color: #5a67d8;
}

/* 确保搜索框在focus时有正确的样式 */
input:focus {
  border-color: #3b82f6 !important;
}
</style>
