<template>
  <section id="products" class="py-16 md:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">跨境金融产品</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">登录后即可访问全部金融产品，开始您的全球资产配置之旅</p>
      </div>

      <div id="products-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard v-for="(product, index) in products" :key="index" v-bind="product" />
      </div>

      <div class="text-center mt-12">
        <button class="bg-white hover:bg-gray-50 text-primary border border-primary px-6 py-3 rounded-md text-base font-medium transition-colors shadow-md hover:shadow-lg">
          查看更多产品
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>
