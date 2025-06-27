<template>
  <section id="features" class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">为什么选择我们的跨境金融服务</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">我们提供全方位的跨境金融解决方案，满足您的多元化需求</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 特点卡片 1 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-shield text-primary text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">安全可靠</h3>
            <p class="text-gray-600">采用银行级安全技术，多重加密保障您的资金和信息安全，让您的跨境交易无忧。</p>
          </div>

          <!-- 特点卡片 2 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-globe text-primary text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">全球覆盖</h3>
            <p class="text-gray-600">覆盖全球主要金融市场，支持多币种交易，为您提供全球化的投资机会和资金管理。</p>
          </div>

          <!-- 特点卡片 3 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-line-chart text-primary text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">智能风控</h3>
            <p class="text-gray-600">AI驱动的智能风控系统，实时监控市场变化，为您提供风险预警和资产配置建议。</p>
          </div>

          <!-- 特点卡片 4 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-clock-o text-primary text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">实时交易</h3>
            <p class="text-gray-600">7×24小时全球市场监控，实时交易执行，助您把握最佳投资时机，实现资产快速配置。</p>
          </div>

          <!-- 特点卡片 5 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-users text-primary text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">专业团队</h3>
            <p class="text-gray-600">由资深金融专家和技术精英组成的专业团队，为您提供一对一的跨境金融咨询服务。</p>
          </div>

          <!-- 特点卡片 6 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-calculator text-primary text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">低费率</h3>
            <p class="text-gray-600">透明的费用结构，行业领先的低费率，降低您的跨境金融服务成本，提高投资回报。</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
// 配置化props接收功能数据
const props = defineProps({
  features: {
    type: Array,
    default: () => [
      {
        icon: 'fa-shield',
        title: '安全可靠',
        description: '采用银行级安全技术，多重加密保障您的资金和信息安全，让您的跨境交易无忧。'
      },
      {
        icon: 'fa-globe',
        title: '全球覆盖',
        description: '覆盖全球主要金融市场，支持多币种交易，为您提供全球化的投资机会和资金管理。'
      },
      {
        icon: 'fa-line-chart',
        title: '智能风控',
        description: 'AI驱动的智能风控系统，实时监控市场变化，为您提供风险预警和资产配置建议。'
      },
      {
        icon: 'fa-clock-o',
        title: '实时交易',
        description: '7×24小时全球市场监控，实时交易执行，助您把握最佳投资时机，实现资产快速配置。'
      },
      {
        icon: 'fa-users',
        title: '专业团队',
        description: '由资深金融专家和技术精英组成的专业团队，为您提供一对一的跨境金融咨询服务。'
      },
      {
        icon: 'fa-calculator',
        title: '低费率',
        description: '透明的费用结构，行业领先的低费率，降低您的跨境金融服务成本，提高投资回报。'
      }
    ]
  }
})
</script>

<style scoped>
/* 提取的卡片动画样式 */
.card-hover {
  @apply transition-all duration-300 hover:-translate-y-2;
}
</style>