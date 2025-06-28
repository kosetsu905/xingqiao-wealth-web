<template>
  <section id="about" class="py-16 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-12 md:mb-0 md:pr-12">
          <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">{{ title }}</h2>
          <p v-for="(paragraph, index) in description" :key="index" class="text-gray-600 mb-6">
            {{ paragraph }}
          </p>
          <div class="grid grid-cols-2 gap-4 mb-8">
            <CompanyFeature v-for="(feature, index) in features" :key="index" v-bind="feature" />
          </div>
          <a href="#" class="inline-flex items-center text-primary hover:text-primary/80 font-medium">
            {{ linkText }}
            <i class="fa fa-arrow-right ml-2"></i>
          </a>
        </div>
        <div class="md:w-1/2">
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(item, index) in galleryItems" :key="index"
                 class="bg-gray-50 rounded-lg overflow-hidden shadow-md transform transition-all duration-500 hover:scale-105">
              <img :src="item.image" :alt="item.alt" class="w-full h-48 object-cover" />
              <div class="p-4">
                <h3 class="font-semibold">{{ item.title }}</h3>
                <p class="text-sm text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CompanyFeature from './CompanyFeature.vue'

defineProps({
  title: {
    type: String,
    default: '关于环球金融'
  },
  description: {
    type: Array,
    default: () => [
      '环球金融成立于2015年，是一家专注于为个人和企业提供跨境金融服务的创新型金融科技公司。我们的使命是打破金融国界，让全球金融服务更加便捷、透明和普惠。',
      '凭借专业的金融团队和先进的技术平台，我们为客户提供包括国际基金投资、海外保险、跨境支付、离岸账户等在内的一站式跨境金融解决方案。'
    ]
  },
  features: {
    type: Array,
    required: true
  },
  linkText: {
    type: String,
    default: '了解更多公司信息'
  },
  galleryItems: {
    type: Array,
    required: true
  }
})
</script>
