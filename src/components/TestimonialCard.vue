<template>
  <div class="bg-white rounded-xl shadow-lg p-6 card-hover">
    <div class="flex items-center mb-4">
      <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4">
      <div>
        <h4 class="font-semibold">{{ testimonial.name }}</h4>
        <p class="text-sm text-gray-500">{{ testimonial.title }}</p>
      </div>
    </div>
    <div class="text-yellow-400 mb-3">
      <i v-for="star in 5" :key="star"
         :class="star <= testimonial.rating ? 'fa fa-star' : testimonial.rating + 0.5 >= star ? 'fa fa-star-half-o' : 'fa fa-star-o'">
      </i>
    </div>
    <p class="text-gray-600">"{{ testimonial.comment }}"</p>
  </div>
</template>

<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true
  }
})
</script>
