<template>
  <footer class="bg-dark text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- 品牌信息 -->
        <div>
          <div class="flex items-center mb-4">
            <i class="fa fa-globe text-primary text-2xl mr-2"></i>
            <span class="text-xl font-bold">{{ brandName }}</span>
          </div>
          <p class="text-gray-400 mb-4">{{ brandDescription }}</p>
          <div class="flex space-x-4">
            <a v-for="(social, index) in socialLinks"
               :key="index"
               :href="social.url"
               class="text-gray-400 hover:text-white transition-colors">
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

        <!-- 其他栏目 -->
        <FooterColumn v-for="(column, index) in columns"
                     :key="index"
                     :title="column.title"
                     :links="column.links" />
      </div>

      <!-- 版权信息 -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {{ copyrightText }}
          </p>
          <div class="flex space-x-6">
            <a v-for="(legal, index) in legalLinks"
               :key="index"
               :href="legal.url"
               class="text-gray-400 hover:text-white text-sm transition-colors">
              {{ legal.text }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterColumn from './FooterColumn.vue'

defineProps({
  brandName: {
    type: String,
    default: '环球金融'
  },
  brandDescription: {
    type: String,
    default: '让全球金融服务更加便捷、透明和普惠'
  },
  socialLinks: {
    type: Array,
    required: true
  },
  columns: {
    type: Array,
    required: true
  },
  copyrightText: {
    type: String,
    default: '2025 环球金融. 保留所有权利.'
  },
  legalLinks: {
    type: Array,
    required: true
  }
})
</script>
