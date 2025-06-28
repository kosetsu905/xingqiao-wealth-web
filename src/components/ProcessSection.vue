<template>
  <section id="process" class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">{{ title }}</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">{{ description }}</p>
      </div>

      <div class="relative">
        <div class="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in steps" :key="index" class="text-center">
            <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              {{ step.number }}
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <div class="mt-16 bg-gray-50 rounded-xl p-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 class="text-2xl font-bold mb-4">{{ analysisTitle }}</h3>
            <p class="text-gray-600 mb-6">{{ analysisDescription }}</p>
            <button class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-base font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {{ buttonText }}
            </button>
          </div>
          <div class="md:w-1/2">
            <canvas id="assetAllocationChart" width="400" height="300"></canvas>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '简单四步，开启全球投资之旅'
  },
  description: {
    type: String,
    default: '我们简化了跨境金融服务流程，让您轻松实现全球资产配置'
  },
  steps: {
    type: Array,
    required: true
  },
  analysisTitle: {
    type: String,
    default: '全球资产配置分析'
  },
  analysisDescription: {
    type: String,
    default: '通过我们的智能分析工具，了解全球资产配置的最新趋势和建议，优化您的投资组合'
  },
  buttonText: {
    type: String,
    default: '免费获取分析报告'
  }
})
</script>
