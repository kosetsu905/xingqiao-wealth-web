<template>
  <section class="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <!-- 左侧内容 -->
        <div class="md:w-1/2 md:pr-12">
          <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-dark mb-4">
            {{ titlePart1 }}<br><span class="text-primary">{{ titlePart2 }}</span>
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            {{ description }}
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
                @click="$emit('login')"
                class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-base font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {{ primaryButtonText }}
            </button>
            <button
                @click="$emit('register')"
                class="bg-white hover:bg-gray-50 text-primary border border-primary px-6 py-3 rounded-md text-base font-medium transition-all shadow-md hover:shadow-lg">
              {{ secondaryButtonText }}
            </button>
          </div>
          <!-- 用户数据 -->
          <div class="mt-8 flex items-center space-x-4">
            <div class="flex -space-x-2">
              <img
                  v-for="(avatar, index) in userAvatars"
                  :key="index"
                  class="w-10 h-10 rounded-full border-2 border-white"
                  :src="avatar"
                  alt="用户头像"
              />
            </div>
            <p class="text-sm text-gray-600">
              <span class="font-semibold">{{ userCount }}</span> {{ userCountText }}
            </p>
          </div>
        </div>

        <!-- 右侧图片 -->
        <div class="mt-12 md:mt-0 md:w-1/2 relative">
          <div class="relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
            <img :src="mainImage" alt="跨境金融服务" class="w-full h-auto" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div class="p-6">
                <h3 class="text-white text-xl font-semibold mb-2">{{ imageTitle }}</h3>
                <p class="text-white/80">{{ imageDescription }}</p>
              </div>
            </div>
          </div>
          <!-- 背景特效 -->
          <div class="absolute top-1/4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
          <div class="absolute bottom-1/4 -left-4 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  titlePart1: {
    type: String,
    default: '智能跨境金融'
  },
  titlePart2: {
    type: String,
    default: '全球资产配置'
  },
  description: {
    type: String,
    default: '环球金融提供一站式跨境金融服务，助您安全、高效地管理全球资产，把握国际投资机遇。'
  },
  primaryButtonText: {
    type: String,
    default: '立即登录'
  },
  secondaryButtonText: {
    type: String,
    default: '免费注册'
  },
  userAvatars: {
    type: Array,
    default: () => [
      'https://picsum.photos/id/1005/200/200',
      'https://picsum.photos/id/1012/200/200',
      'https://picsum.photos/id/1027/200/200'
    ]
  },
  userCount: {
    type: [String, Number],
    default: '10,000+'
  },
  userCountText: {
    type: String,
    default: '投资者已选择我们的服务'
  },
  mainImage: {
    type: String,
    default: 'https://picsum.photos/id/180/800/500'
  },
  imageTitle: {
    type: String,
    default: '全球资产配置方案'
  },
  imageDescription: {
    type: String,
    default: '多元化投资组合，降低风险，提升回报'
  }
})

defineEmits(['login', 'register'])
</script>

<style scoped>
/* 保留原有动画效果 */
.hover\:-translate-y-1 {
  transition: transform 0.3s ease;
}
</style>