
<template>
  <!-- Header -->
  <Header/>

  <!-- Main Content -->
  <main id="digital-currency-page" class="max-w-7xl mx-auto px-6 py-8">

    <!-- Page Header -->
    <section id="page-header" class="mb-8">
      <div class="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl p-8 text-white">
        <h2 class="text-3xl font-bold mb-4">数字货币投资</h2>
        <p class="text-orange-100 text-lg">探索数字资产投资机会，包括加密货币、数字货币ETF和稳定币</p>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div class="bg-white bg-opacity-10 rounded-lg p-4">
            <div class="flex items-center">
              <i class="fab fa-bitcoin text-2xl mr-3"></i>
              <div>
                <p class="text-sm opacity-90">比特币价格</p>
                <p class="text-xl font-bold">$43,250</p>
              </div>
            </div>
          </div>
          <div class="bg-white bg-opacity-10 rounded-lg p-4">
            <div class="flex items-center">
              <i class="fab fa-ethereum text-2xl mr-3"></i>
              <div>
                <p class="text-sm opacity-90">以太坊价格</p>
                <p class="text-xl font-bold">$2,680</p>
              </div>
            </div>
          </div>
          <div class="bg-white bg-opacity-10 rounded-lg p-4">
            <div class="flex items-center">
              <i class="fas fa-chart-line text-2xl mr-3"></i>
              <div>
                <p class="text-sm opacity-90">市场总值</p>
                <p class="text-xl font-bold">$1.7T</p>
              </div>
            </div>
          </div>
          <div class="bg-white bg-opacity-10 rounded-lg p-4">
            <div class="flex items-center">
              <i class="fas fa-coins text-2xl mr-3"></i>
              <div>
                <p class="text-sm opacity-90">可投资币种</p>
                <p class="text-xl font-bold">150+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Investment Categories -->
    <section id="investment-categories" class="mb-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">投资类别</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div class="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
            <i class="fab fa-bitcoin text-orange-600 text-2xl"></i>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">主流数字货币</h4>
          <p class="text-sm text-gray-600 mb-4">比特币、以太坊等主流加密货币直接投资</p>
          <div class="text-sm text-gray-500">
            <span class="font-medium">包含：</span>BTC, ETH, BNB, ADA, SOL
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <i class="fas fa-chart-pie text-blue-600 text-2xl"></i>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">数字货币ETF</h4>
          <p class="text-sm text-gray-600 mb-4">通过ETF间接投资数字货币市场</p>
          <div class="text-sm text-gray-500">
            <span class="font-medium">包含：</span>比特币ETF, 以太坊ETF, 区块链ETF
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
          <div class="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <i class="fas fa-coins text-green-600 text-2xl"></i>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">稳定币投资</h4>
          <p class="text-sm text-gray-600 mb-4">低风险稳定币投资和理财产品</p>
          <div class="text-sm text-gray-500">
            <span class="font-medium">包含：</span>USDT, USDC, BUSD, DAI
          </div>
        </div>
      </div>
    </section>

    <!-- Hot Cryptocurrencies -->
    <section id="hot-cryptos" class="mb-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">热门数字货币</h3>
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">货币</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">当前价格</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h涨跌</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">市值</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">风险等级</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <i class="fab fa-bitcoin text-orange-600 text-sm"></i>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">比特币</div>
                    <div class="text-sm text-gray-500">BTC</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$43,250.00</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">+2.45%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$847B</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">高风险</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">详情</button>
                <button class="text-green-600 hover:text-green-900">投资</button>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <i class="fab fa-ethereum text-blue-600 text-sm"></i>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">以太坊</div>
                    <div class="text-sm text-gray-500">ETH</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$2,680.00</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">+1.82%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$322B</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">高风险</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">详情</button>
                <button class="text-green-600 hover:text-green-900">投资</button>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <i class="fas fa-coins text-yellow-600 text-sm"></i>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">币安币</div>
                    <div class="text-sm text-gray-500">BNB</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">$315.00</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">-0.65%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$47B</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">中高风险</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">详情</button>
                <button class="text-green-600 hover:text-green-900">投资</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Digital Currency ETFs -->
    <section id="crypto-etfs" class="mb-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">数字货币ETF</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <i class="fab fa-bitcoin text-orange-600 text-xl"></i>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">ETF</span>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">ProShares比特币ETF</h4>
          <p class="text-sm text-gray-600 mb-4">追踪比特币期货价格表现的ETF产品</p>
          <div class="space-y-2 mb-4">
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">净值</span>
              <span class="text-sm font-medium">$28.45</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">年化费率</span>
              <span class="text-sm font-medium">0.95%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">最低投资</span>
              <span class="text-sm font-medium">¥1,000</span>
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            立即投资
          </button>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <i class="fab fa-ethereum text-blue-600 text-xl"></i>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">ETF</span>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">VanEck以太坊ETF</h4>
          <p class="text-sm text-gray-600 mb-4">专注于以太坊投资的交易所基金</p>
          <div class="space-y-2 mb-4">
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">净值</span>
              <span class="text-sm font-medium">$18.92</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">年化费率</span>
              <span class="text-sm font-medium">0.85%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">最低投资</span>
              <span class="text-sm font-medium">¥1,000</span>
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            立即投资
          </button>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-cubes text-purple-600 text-xl"></i>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">ETF</span>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">Amplify区块链ETF</h4>
          <p class="text-sm text-gray-600 mb-4">投资区块链技术相关企业的ETF</p>
          <div class="space-y-2 mb-4">
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">净值</span>
              <span class="text-sm font-medium">$22.18</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">年化费率</span>
              <span class="text-sm font-medium">0.71%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">最低投资</span>
              <span class="text-sm font-medium">¥1,000</span>
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            立即投资
          </button>
        </div>
      </div>
    </section>

    <!-- Stablecoins -->
    <section id="stablecoins" class="mb-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">稳定币投资</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h4 class="text-lg font-semibold text-gray-900 mb-4">稳定币理财产品</h4>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <i class="fas fa-dollar-sign text-green-600"></i>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-900">USDT活期理财</div>
                  <div class="text-sm text-gray-500">年化收益 4.5%</div>
                </div>
              </div>
              <button class="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                申购</button></div></div></div></div></section></main>
</template>

<script setup lang="ts">
import Header from "@/components/agency/Header.vue";
</script>


<style scoped>

</style>