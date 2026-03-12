
<template>
  <!-- Header -->
  <Header/>

  <!-- Main Content -->
  <main id="etf-products-main" class="max-w-7xl mx-auto px-6 py-8">

    <!-- Product Categories -->
    <section id="product-categories" class="mb-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-blue-300 cursor-pointer transition-colors">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-chart-line text-blue-600 text-xl"></i>
            </div>
            <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">热门</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">全球ETF</h3>
          <p class="text-sm text-gray-600 mb-3">多元化投资组合，低成本，高流动性</p>
          <div class="text-2xl font-bold text-gray-900">268</div>
          <div class="text-xs text-gray-500">可选产品</div>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-green-300 cursor-pointer transition-colors">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-building text-green-600 text-xl"></i>
            </div>
            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">稳定</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">全球股票</h3>
          <p class="text-sm text-gray-600 mb-3">蓝筹股，成长股，价值投资机会</p>
          <div class="text-2xl font-bold text-gray-900">1,245</div>
          <div class="text-xs text-gray-500">可选股票</div>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-yellow-300 cursor-pointer transition-colors">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-shield-alt text-yellow-600 text-xl"></i>
            </div>
            <span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">安全</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">全球债券</h3>
          <p class="text-sm text-gray-600 mb-3">政府债券，企业债券，稳定收益</p>
          <div class="text-2xl font-bold text-gray-900">456</div>
          <div class="text-xs text-gray-500">可选债券</div>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-purple-300 cursor-pointer transition-colors">
          <router-link to="/agency/digitalcurrency">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i class="fas fa-coins text-purple-600 text-xl"></i>
              </div>
              <span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">新兴</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">数字货币</h3>
            <p class="text-sm text-gray-600 mb-3">比特币，以太坊，加密货币投资</p>
            <div class="text-2xl font-bold text-gray-900">89</div>
            <div class="text-xs text-gray-500">可选币种</div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section id="featured-products" class="mb-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-900">推荐产品</h2>
        <div class="flex space-x-2">
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">全部</button>
          <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">ETF</button>
          <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">股票</button>
          <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50">债券</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-semibold text-gray-900">SPDR S&amp;P 500 ETF</h3>
              <p class="text-sm text-gray-600">SPY</p>
            </div>
            <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">+2.4%</span>
          </div>
          <div class="mb-4">
            <div class="text-2xl font-bold text-gray-900">$428.56</div>
            <div class="text-sm text-gray-600">净值</div>
          </div>
          <div class="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <div class="text-gray-600">年化收益</div>
              <div class="font-semibold text-green-600">+12.8%</div>
            </div>
            <div>
              <div class="text-gray-600">管理费用</div>
              <div class="font-semibold">0.09%</div>
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">查看详情</button>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-semibold text-gray-900">苹果公司</h3>
              <p class="text-sm text-gray-600">AAPL</p>
            </div>
            <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">-1.2%</span>
          </div>
          <div class="mb-4">
            <div class="text-2xl font-bold text-gray-900">$189.43</div>
            <div class="text-sm text-gray-600">股价</div>
          </div>
          <div class="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <div class="text-gray-600">市盈率</div>
              <div class="font-semibold">28.5</div>
            </div>
            <div>
              <div class="text-gray-600">股息率</div>
              <div class="font-semibold">0.52%</div>
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">查看详情</button>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-semibold text-gray-900">美国10年期国债</h3>
              <p class="text-sm text-gray-600">US10Y</p>
            </div>
            <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">+0.8%</span>
          </div>
          <div class="mb-4">
            <div class="text-2xl font-bold text-gray-900">4.25%</div>
            <div class="text-sm text-gray-600">收益率</div>
          </div>
          <div class="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <div class="text-gray-600">评级</div>
              <div class="font-semibold">AAA</div>
            </div>
            <div>
              <div class="text-gray-600">到期时间</div>
              <div class="font-semibold">10年</div>
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">查看详情</button>
        </div>
      </div>
    </section>

    <!-- Market Overview -->
    <section id="market-overview" class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">市场概览</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">主要指数表现</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-chart-line text-blue-600 text-sm"></i>
                </div>
                <div>
                  <div class="font-medium text-gray-900">标普500</div>
                  <div class="text-sm text-gray-600">4,567.89</div>
                </div>
              </div>
              <div class="text-right">
                <div class="font-semibold text-green-600">+1.24%</div>
                <div class="text-sm text-gray-600">+56.78</div>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-chart-area text-green-600 text-sm"></i>
                </div>
                <div>
                  <div class="font-medium text-gray-900">纳斯达克</div>
                  <div class="text-sm text-gray-600">14,234.56</div>
                </div>
              </div>
              <div class="text-right">
                <div class="font-semibold text-red-600">-0.86%</div>
                <div class="text-sm text-gray-600">-123.45</div>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-chart-bar text-yellow-600 text-sm"></i>
                </div>
                <div>
                  <div class="font-medium text-gray-900">道琼斯</div>
                  <div class="text-sm text-gray-600">34,567.12</div>
                </div>
              </div>
              <div class="text-right">
                <div class="font-semibold text-green-600">+0.45%</div>
                <div class="text-sm text-gray-600">+154.32</div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">热门板块</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-microchip text-purple-600 text-sm"></i>
                </div>
                <span class="font-medium text-gray-900">科技股</span>
              </div>
              <div class="flex items-center">
                <div class="w-24 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-green-500 h-2 rounded-full" style="width: 78%"></div>
                </div>
                <span class="text-sm font-semibold text-green-600">+2.8%</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-heartbeat text-blue-600 text-sm"></i>
                </div>
                <span class="font-medium text-gray-900">医疗保健</span>
              </div>
              <div class="flex items-center">
                <div class="w-24 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-green-500 h-2 rounded-full" style="width: 65%"></div>
                </div>
                <span class="text-sm font-semibold text-green-600">+1.5%</span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-bolt text-orange-600 text-sm"></i>
                </div>
                <span class="font-medium text-gray-900">能源</span>
              </div>
              <div class="flex items-center">
                <div class="w-24 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-red-500 h-2 rounded-full" style="width: 45%"></div>
                </div>
                <span class="text-sm font-semibold text-red-600">-1.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Actions -->
    <section id="quick-actions" class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">快速操作</h3>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button class="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
          <i class="fas fa-plus text-blue-600 mr-2"></i>
          <span class="font-medium text-gray-900">添加到观察列表</span>
        </button>

        <button class="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors">
          <i class="fas fa-shopping-cart text-green-600 mr-2"></i>
          <span class="font-medium text-gray-900">购买推荐</span>
        </button>

        <button class="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors">
          <i class="fas fa-chart-pie text-purple-600 mr-2"></i>
          <span class="font-medium text-gray-900">投资组合分析</span>
        </button>

        <button class="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors">
          <i class="fas fa-file-alt text-orange-600 mr-2"></i>
          <span class="font-medium text-gray-900">生成报告</span>
        </button>
      </div>
    </section>
  </main>

</template>

<script setup lang="ts">
import Header from "@/components/agency/Header.vue";

</script>


<style scoped>

</style>