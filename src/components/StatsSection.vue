<template>
  <section class="stats-section">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div 
          v-for="(stat, index) in stats" :key="index"
          class="stat-item"
        >
          <div class="stat-value">{{ stat.value }}</div>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface StatItem {
  value: string
  label: string
}

const props = defineProps<{
  stats: StatItem[]
}>()
</script>

<style scoped>
.stats-section {
  @apply py-16 bg-gradient-to-r from-primary to-primary/80 text-white;
}
.stat-value {
  @apply text-4xl md:text-5xl font-bold mb-2;
}
.stat-label {
  @apply text-white/80;
}
</style>