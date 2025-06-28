<template>
  <div>
    <h3 v-if="title" class="text-lg font-semibold mb-4">{{ title }}</h3>
    <ul class="space-y-2">
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.url" class="text-gray-400 hover:text-white transition-colors">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  links: {
    type: Array,
    default: () => []
  }
})
</script>
