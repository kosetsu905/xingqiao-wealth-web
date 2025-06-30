<template>
  <div id="login-page" class="flex min-h-[800px] items-center justify-center p-4">
    <div id="login-container" class="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="flex flex-col md:flex-row">
         <!-- 左侧栏-->
        <BrandSection />
         <!-- 右侧栏-->
        <LoginFormSection />
      </div>
    </div>
  </div>
</template>

<script>
import BrandSection from './login/BrandSection.vue'
import LoginFormSection from './login/LoginFormSection.vue'

export default {
  components: {
    BrandSection,
    LoginFormSection
  }
}
</script>
