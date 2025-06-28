<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">{{ title }}</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">{{ description }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TestimonialCard from './TestimonialCard.vue'

defineProps({
  title: {
    type: String,
    default: '用户的真实评价'
  },
  description: {
    type: String,
    default: '听听我们的客户如何评价环球金融的跨境金融服务'
  },
  testimonials: {
    type: Array,
    required: true
  }
})
</script>
