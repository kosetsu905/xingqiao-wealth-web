<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">{{ title }}</h2>
      <p class="text-white/80 text-lg max-w-2xl mx-auto mb-8">
        {{ description }}
      </p>
      <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          class="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          @click="$emit('register')"
        >
          {{ primaryButtonText }}
        </button>
        <button
          class="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md text-lg font-semibold transition-all"
          @click="$emit('login')"
        >
          {{ secondaryButtonText }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '立即注册，开启全球投资之旅'
  },
  description: {
    type: String,
    default: '注册环球金融账户，享受一站式跨境金融服务，轻松管理您的全球资产'
  },
  primaryButtonText: {
    type: String,
    default: '免费注册'
  },
  secondaryButtonText: {
    type: String,
    default: '已有账户？立即登录'
  }
})

defineEmits(['register', 'login'])
</script>
