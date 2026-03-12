
<template>

  <!-- Header -->
  <Header :from="etf" :currentTabActive="3"/>

  <main id="main-content" class="max-w-7xl mx-auto px-4 py-6">
    <section id="hero-banner" class="bg-gradient-to-r from-primary to-blue-600 rounded-lg p-8 text-white mb-8 h-70">
      <div class="max-w-4xl">
        <h1 class="text-3xl font-bold mb-4">RWA支持的稳定币平台</h1>
        <p class="text-lg mb-6 opacity-90">基于真实世界资产支持的稳定币，提供透明、合规和潜在收益的数字资产解决方案</p>
        <div class="flex space-x-4">
          <button class="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            立即购买
          </button>
          <button class="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors">
            了解更多
          </button>
        </div>
      </div>
    </section>

    <section id="supported-stablecoins" class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">支持的稳定币</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div id="usdr-card" class="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <i class="fas fa-dollar-sign text-white text-lg"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">USDR</h3>
                <p class="text-sm text-gray-600">美元房地产稳定币</p>
              </div>
            </div>
            <span class="text-accent text-sm font-medium">+0.15%</span>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p class="text-xs text-gray-500">当前价格</p>
              <p class="font-semibold text-gray-900">$1.002</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">年化收益</p>
              <p class="font-semibold text-accent">4.8%</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">市值</p>
              <p class="font-semibold text-gray-900">$45M</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">抵押率</p>
              <p class="font-semibold text-gray-900">120%</p>
            </div>
          </div>
          <button class="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            交易
          </button>
        </div>

        <div id="eurr-card" class="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <i class="fas fa-euro-sign text-white text-lg"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">EURR</h3>
                <p class="text-sm text-gray-600">欧元房地产稳定币</p>
              </div>
            </div>
            <span class="text-accent text-sm font-medium">+0.08%</span>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p class="text-xs text-gray-500">当前价格</p>
              <p class="font-semibold text-gray-900">€0.998</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">年化收益</p>
              <p class="font-semibold text-accent">3.9%</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">市值</p>
              <p class="font-semibold text-gray-900">€32M</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">抵押率</p>
              <p class="font-semibold text-gray-900">115%</p>
            </div>
          </div>
          <button class="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
            交易
          </button>
        </div>

        <div id="cnyr-card" class="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <i class="fas fa-yen-sign text-white text-lg"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">CNYR</h3>
                <p class="text-sm text-gray-600">人民币房地产稳定币</p>
              </div>
            </div>
            <span class="text-accent text-sm font-medium">+0.12%</span>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p class="text-xs text-gray-500">当前价格</p>
              <p class="font-semibold text-gray-900">¥1.001</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">年化收益</p>
              <p class="font-semibold text-accent">4.2%</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">市值</p>
              <p class="font-semibold text-gray-900">¥158M</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">抵押率</p>
              <p class="font-semibold text-gray-900">125%</p>
            </div>
          </div>
          <button class="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition-colors">
            交易
          </button>
        </div>
      </div>
    </section>

    <section id="key-features" class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">关键特点</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div id="transparency-feature" class="bg-white rounded-lg border border-border p-6 text-center">
          <div class="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-eye text-primary text-xl"></i>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">透明度</h3>
          <p class="text-sm text-gray-600">实时查看底层资产组合，确保每个稳定币都有真实资产支持</p>
        </div>

        <div id="compliance-feature" class="bg-white rounded-lg border border-border p-6 text-center">
          <div class="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-shield-alt text-accent text-xl"></i>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">合规性</h3>
          <p class="text-sm text-gray-600">严格遵守各国监管要求，定期接受第三方审计</p>
        </div>

        <div id="yield-feature" class="bg-white rounded-lg border border-border p-6 text-center">
          <div class="w-16 h-16 bg-yellow-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-chart-line text-yellow-500 text-xl"></i>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">收益潜力</h3>
          <p class="text-sm text-gray-600">通过房地产租金收入获得稳定的年化收益</p>
        </div>

        <div id="liquidity-feature" class="bg-white rounded-lg border border-border p-6 text-center">
          <div class="w-16 h-16 bg-purple-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-exchange-alt text-purple-500 text-xl"></i>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">流动性</h3>
          <p class="text-sm text-gray-600">24/7全天候交易，即时买卖和转账</p>
        </div>
      </div>
    </section>

    <section id="real-time-data" class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">实时数据</h2>
      <div class="bg-white rounded-lg border border-border p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div id="total-supply" class="text-center">
            <p class="text-sm text-gray-600 mb-1">总供应量</p>
            <p class="text-2xl font-bold text-gray-900">235M</p>
            <p class="text-xs text-accent">+2.3% 本月</p>
          </div>
          <div id="total-value" class="text-center">
            <p class="text-sm text-gray-600 mb-1">总价值锁定</p>
            <p class="text-2xl font-bold text-gray-900">$235M</p>
            <p class="text-xs text-accent">+1.8% 本月</p>
          </div>
          <div id="avg-yield" class="text-center">
            <p class="text-sm text-gray-600 mb-1">平均年化收益</p>
            <p class="text-2xl font-bold text-accent">4.3%</p>
            <p class="text-xs text-gray-600">稳定增长</p>
          </div>
          <div id="active-users" class="text-center">
            <p class="text-sm text-gray-600 mb-1">活跃用户</p>
            <p class="text-2xl font-bold text-gray-900">12.4K</p>
            <p class="text-xs text-accent">+5.7% 本周</p>
          </div>
          <div id="daily-volume" class="text-center">
            <p class="text-sm text-gray-600 mb-1">24h交易量</p>
            <p class="text-2xl font-bold text-gray-900">$4.2M</p>
            <p class="text-xs text-accent">+12.5% 今日</p>
          </div>
        </div>
      </div>
    </section>

    <section id="market-overview" class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">市场概览</h2>
      <div class="bg-white rounded-lg border border-border p-6">
        <div id="market-chart-container" class="h-80"></div>
      </div>
    </section>

    <section id="asset-backing" class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">资产支持组合</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div id="asset-breakdown" class="bg-white rounded-lg border border-border p-6">
          <h3 class="font-semibold text-gray-900 mb-4">资产分布</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-4 h-4 bg-primary rounded"></div>
                <span class="text-sm text-gray-700">商业地产</span>
              </div>
              <span class="text-sm font-medium text-gray-900">45%</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-4 h-4 bg-accent rounded"></div>
                <span class="text-sm text-gray-700">住宅地产</span>
              </div>
              <span class="text-sm font-medium text-gray-900">35%</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-4 h-4 bg-yellow-500 rounded"></div>
                <span class="text-sm text-gray-700">工业地产</span>
              </div>
              <span class="text-sm font-medium text-gray-900">20%</span>
            </div>
          </div>
        </div>

        <div id="geographic-distribution" class="bg-white rounded-lg border border-border p-6">
          <h3 class="font-semibold text-gray-900 mb-4">地理分布</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-700">北美</span>
              <span class="text-sm font-medium text-gray-900">40%</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-700">欧洲</span>
              <span class="text-sm font-medium text-gray-900">35%</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-700">亚太</span>
              <span class="text-sm font-medium text-gray-900">25%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>


<script setup lang="ts">
const etf = 'etf';

import Header from "@/components/agency/Header.vue";
</script>


<style scoped>

</style>