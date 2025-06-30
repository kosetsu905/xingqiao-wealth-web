<template>
  <div id="login-page" class="flex min-h-[800px] items-center justify-center p-4">
    <div id="login-container" class="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="flex flex-col md:flex-row">
        <BrandSection />
        <LoginFormSection />
      </div>
    </div>
  </div>
</template>

<script>
import BrandSection from './Login/BrandSection.vue'
import LoginFormSection from './Login/LoginFormSection.vue'

export default {
  components: {
    BrandSection,
    LoginFormSection
  }
}
</script>
