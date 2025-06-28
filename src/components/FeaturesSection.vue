<template>
  <section id="features" class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">{{ title }}</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">{{ subtitle }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- 动态生成特点卡片 -->
        <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <i :class="`${feature.icon} text-primary text-xl`"></i>
          </div>
          <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '为什么选择我们的跨境金融服务'
  },
  subtitle: {
    type: String,
    default: '我们提供全方位的跨境金融解决方案，满足您的多元化需求'
  },
  features: {
    type: Array,
    default: () => [
        //默认值
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
