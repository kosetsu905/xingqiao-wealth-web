<template>
  <section class="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="(stat, index) in stats" :key="index">
          <div class="text-4xl md:text-5xl font-bold mb-2">{{ stat.value }}</div>
          <p class="text-white/80">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    default: () => [
      { value: '100+', label: '覆盖国家和地区' },
      { value: '50+', label: '支持币种' },
      { value: '100万+', label: '活跃用户' },
      { value: '¥1000亿+', label: '年交易量' }
    ]
  }
})
</script>