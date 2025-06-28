<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
    <div class="relative">
      <img :src="image" :alt="title" class="w-full h-48 object-cover" />
      <div v-if="tag" class="absolute top-4 right-4 text-white text-xs font-semibold px-2 py-1 rounded" :class="tagClass">
        {{ tag }}
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <div class="flex items-center text-sm text-gray-500 mb-4">
        <div v-for="(feature, index) in features" :key="index" :class="{ 'mr-4': index < features.length - 1 }">
          <i :class="feature.icon"></i> {{ feature.text }}
        </div>
      </div>
      <button class="w-full bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-md text-sm font-medium transition-colors" disabled>
        登录后查看详情
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  tag: String,
  tagClass: {
    type: String,
    default: 'bg-primary'
  },
  features: {
    type: Array,
    required: true
  }
})
</script>
