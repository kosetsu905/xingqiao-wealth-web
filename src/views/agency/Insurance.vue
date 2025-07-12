

<template>
  <!-- Header -->
  <Header/>
  <!-- Main Content -->
  <main id="life-insurance-main" class="max-w-7xl mx-auto px-6 py-8">

    <!-- Hero Section -->
    <section id="hero-section" class="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 mb-8 text-white h-[300px] flex items-center">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold mb-4">全球人寿保险产品</h2>
        <p class="text-lg mb-6 opacity-90">为您和家人提供全方位的生命保障，涵盖全球顶级保险公司的优质产品</p>
        <div class="flex space-x-4">
          <button class="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            立即咨询
          </button>
          <button class="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600">
            产品对比
          </button>
        </div>
      </div>
      <div class="flex-1 flex justify-end">
        <img class="w-64 h-48 rounded-lg object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3b75d78b04-539ea431cad3fdbbd6f6.png" alt="happy family with insurance protection umbrella illustration">
      </div>
    </section>

    <!-- Product Categories -->
    <section id="product-categories" class="mb-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">产品分类</h3>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <i class="fas fa-shield-alt text-blue-600 text-xl"></i>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">定期寿险</h4>
          <p class="text-sm text-gray-600">灵活保障期限，经济实惠的生命保障</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <i class="fas fa-infinity text-green-600 text-xl"></i>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">终身寿险</h4>
          <p class="text-sm text-gray-600">终身保障，具备储蓄和投资功能</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <i class="fas fa-chart-line text-purple-600 text-xl"></i>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">投资连结险</h4>
          <p class="text-sm text-gray-600">保障与投资并重，资产增值潜力</p>
        </div>
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <i class="fas fa-users text-orange-600 text-xl"></i>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">万能险</h4>
          <p class="text-sm text-gray-600">灵活保费，可调整保障额度</p>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section id="featured-products" class="mb-8">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-2xl font-bold text-gray-900">精选产品</h3>
        <button class="text-blue-600 hover:text-blue-700 font-medium">查看全部</button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div id="product-card-1" class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h4 class="text-xl font-semibold text-gray-900 mb-2">友邦全佑至珍旗舰版</h4>
                <p class="text-sm text-gray-600">AIA 友邦保险</p>
              </div>
              <span class="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">热销</span>
            </div>
            <div class="space-y-3 mb-6">
              <div class="flex items-center">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                <span class="text-sm text-gray-700">最高保障额度：1000万港币</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                <span class="text-sm text-gray-700">保证现金价值回报</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                <span class="text-sm text-gray-700">灵活提取，资金周转便利</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-2xl font-bold text-gray-900">3.5%</span>
                <span class="text-sm text-gray-600 ml-1">预期年回报率</span>
              </div>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                了解详情
              </button>
            </div>
          </div>
        </div>

        <div id="product-card-2" class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h4 class="text-xl font-semibold text-gray-900 mb-2">保诚隽升储蓄计划</h4>
                <p class="text-sm text-gray-600">Prudential 英国保诚</p>
              </div>
              <span class="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">推荐</span>
            </div>
            <div class="space-y-3 mb-6">
              <div class="flex items-center">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                <span class="text-sm text-gray-700">长期储蓄，复利增长</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                <span class="text-sm text-gray-700">多元化投资组合</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-check-circle text-green-500 mr-2"></i>
                <span class="text-sm text-gray-700">传承财富给下一代</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-2xl font-bold text-gray-900">4.2%</span>
                <span class="text-sm text-gray-600 ml-1">预期年回报率</span>
              </div>
              <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                了解详情
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Insurance Companies -->
    <section id="insurance-companies" class="mb-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">合作保险公司</h3>
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div class="flex flex-col items-center text-center">
            <img class="w-16 h-16 rounded-lg mb-2" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3c12e6fc21-89a2f85760c2ffe8f039.png" alt="AIA insurance company logo">
            <span class="text-sm font-medium text-gray-900">友邦保险</span>
            <span class="text-xs text-gray-500">AIA</span>
          </div>
          <div class="flex flex-col items-center text-center">
            <img class="w-16 h-16 rounded-lg mb-2" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5b32421d00-49ab5f46db93f3079290.png" alt="Prudential insurance company logo">
            <span class="text-sm font-medium text-gray-900">英国保诚</span>
            <span class="text-xs text-gray-500">Prudential</span>
          </div>
          <div class="flex flex-col items-center text-center">
            <img class="w-16 h-16 rounded-lg mb-2" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/03e7f0b325-33ff98d3fbf7299b514f.png" alt="MetLife insurance company logo">
            <span class="text-sm font-medium text-gray-900">美国大都会</span>
            <span class="text-xs text-gray-500">MetLife</span>
          </div>
          <div class="flex flex-col items-center text-center">
            <img class="w-16 h-16 rounded-lg mb-2" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/61def440d9-b40f9fe5b307e7b622af.png" alt="Zurich insurance company logo">
            <span class="text-sm font-medium text-gray-900">苏黎世保险</span>
            <span class="text-xs text-gray-500">Zurich</span>
          </div>
          <div class="flex flex-col items-center text-center">
            <img class="w-16 h-16 rounded-lg mb-2" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9483318f93-322b215df7ca74671a7c.png" alt="Manulife insurance company logo">
            <span class="text-sm font-medium text-gray-900">宏利保险</span>
            <span class="text-xs text-gray-500">Manulife</span>
          </div>
          <div class="flex flex-col items-center text-center">
            <img class="w-16 h-16 rounded-lg mb-2" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/25990871b3-796084c617f7f061de9d.png" alt="Sun Life insurance company logo">
            <span class="text-sm font-medium text-gray-900">永明金融</span>
            <span class="text-xs text-gray-500">Sun Life</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Comparison Tool -->
    <section id="comparison-tool" class="mb-8">
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">产品对比工具</h3>
            <p class="text-gray-600">选择多个产品进行详细对比，找到最适合您的保险方案</p>
          </div>
          <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
            开始对比
          </button>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits-section" class="mb-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">为什么选择我们</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-award text-blue-600 text-2xl"></i>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">专业顾问</h4>
          <p class="text-gray-600">持证金融顾问，提供专业保险规划建议</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-globe text-green-600 text-2xl"></i>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">全球覆盖</h4>
          <p class="text-gray-600">与全球顶级保险公司合作，产品选择丰富</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-headset text-purple-600 text-2xl"></i>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">贴心服务</h4>
          <p class="text-gray-600">全程跟进服务，理赔协助，让您无后顾之忧</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact-section" class="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
      <div class="text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">需要专业建议？</h3>
        <p class="text-gray-600 mb-6">我们的保险专家随时为您提供免费咨询服务</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 font-semibold">
            <i class="fas fa-phone mr-2"></i>
            立即致电
          </button>
          <button class="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 font-semibold">
            <i class="fas fa-calendar mr-2"></i>
            预约咨询
          </button>
        </div>
      </div>
    </section>
  </main>

</template>

<script setup lang="ts">
import Header from '@/components/agency/Header.vue'

</script>


<style scoped>

</style>