<template>
  <div class="dashboard">
    <!-- 引入Header组件 -->
    <Header />

    <div class="flex min-h-screen home-wrapper">
      <section class="grid w-full gap-8 home-section">
        <div class="md:col-span-2 xl:col-span-3 p-4">
          <TradingViewWidget
              :script-url="`${scriptUrl}symbol-info.js`"
              :config="SYMBOL_INFO_WIDGET_CONFIG(symbol)"
              :height="600"
          />
        </div>
      </section>
      <section class="grid w-full gap-8 home-section">
        <div class="md:col-span-2 xl:col-span-3 p-4">
          <TradingViewWidget
              :script-url="`${scriptUrl}advanced-chart.js`"
              :config="CANDLE_CHART_WIDGET_CONFIG(symbol)"
              class="custom-chart"
              :height="600"
          />
        </div>
      </section>
      <div class="grid w-full grid-cols-2 gap-4">
        <section class="p-4">
          <div class="md:col-span-1 xl:col-span-1 p-4">
            <TradingViewWidget
                :script-url="`${scriptUrl}financials.js`"
                :config="COMPANY_FINANCIALS_WIDGET_CONFIG(symbol)"
                class="custom-chart"
            />
          </div>
        </section>
        <section class="p-4">
          <div class="md:col-span-1 xl:col-span-1 p-4">
            <TradingViewWidget
                :script-url="`${scriptUrl}technical-analysis.js`"
                :config="TECHNICAL_ANALYSIS_WIDGET_CONFIG(symbol)"
                class="custom-chart"
            />
          </div>
          <!-- 交易操作 -->
          <div class="bg-gray-200 rounded-lg shadow-sm p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">交易操作</h3>
            <div class="flex space-x-4">
              <button
                  @click="goToTransaction('buy')"
                  class="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium"
              >
                买入
              </button>
              <button
                  @click="goToTransaction('sell')"
                  class="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-medium"
              >
                卖出
              </button>
            </div>
          </div>
        </section>
      </div>


    </div>
  </div>

</template>


<script setup>
import Header from '@/components/client/Header.vue'
import TradingViewWidget from '@/components/common/TradingViewWidget.vue'
import {
  CANDLE_CHART_WIDGET_CONFIG,
  SYMBOL_INFO_WIDGET_CONFIG,
  TECHNICAL_ANALYSIS_WIDGET_CONFIG,
  COMPANY_FINANCIALS_WIDGET_CONFIG,
} from '@/composables/Constants'
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref, watch} from "vue";
const scriptUrl = 'https://s3.tradingview.com/external-embedding/embed-widget-'
// 路由相关
const route = useRoute()
const router = useRouter()
// 响应式数据
const symbol = ref('')


// 组件挂载时获取数据
onMounted(() => {
  if (route.query.symbol) {
    symbol.value = route.query.symbol
    console.log(symbol.value)
  }
})

// 跳转到交易页面
const goToTransaction = (type) => {
  router.push({
    path: '/client/transaction',
    query: {
      symbol: symbol.value,
      action: type
    }
  })
}

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
  to { transform: rotate(360deg); }
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
