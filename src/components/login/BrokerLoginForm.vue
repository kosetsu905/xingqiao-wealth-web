<template>
  <!-- Broker Login Form (Hidden by default) -->
  <div id="broker-login-form">
    <form>
      <div class="mb-4">
        <label class="broker-label" for="client-email">
          电子邮箱
        </label>
        <div class="relative">
          <div class="cli-icon">
            <i class="fa-regular fa-envelope text-gray-400"></i>
          </div>
          <input id="client-email" type="email" class="email-input" placeholder="请输入您的电子邮箱">
        </div>
      </div>

      <div class="mb-6">
        <div class="broker-class2">
          <label class="broker-class3" for="broker-password">
            密码
          </label>
          <span class="broker-class4">
            忘记密码?
          </span>
        </div>
        <div class="relative">
          <div class="broker-class5">
            <i class="fa-solid fa-lock text-gray-400"></i>
          </div>
          <input id="broker-password"
                 :type="showPassword ? 'text' : 'password'"
                 class="broker-class6" placeholder="请输入您的密码">
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
            <i class="fa-regular text-gray-400 cursor-pointer"
               :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
               @click.prevent="togglePasswordVisibility"
            ></i>
          </div>
        </div>
      </div>

      <div class="flex items-center mb-6">
        <input id="remember-broker" type="checkbox" class="broker-class7">
        <label for="remember-broker" class="ml-2 text-sm text-gray-600">
          记住我的登录状态
        </label>
      </div>

      <button type="submit" class="broker-class8">
        <i class="fa-solid fa-right-to-bracket mr-2"></i>
        登录
      </button>
    </form>

    <div id="broker-new-account" class="broker-new-account">
      <div class="flex items-start">
        <div class="flex-shrink-0 mt-0.5">
          <i class="fa-solid fa-sack-dollar text-wealth-dark"></i>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-gray-800">
            经纪人注册奖励
          </h3>
          <p class="text-xs text-gray-600 mt-1">
            注册成为新经纪人，即可获得
            <span class="font-bold text-wealth-dark">500 港币</span>
            奖励
          </p>
          <span class="broker-class9">
             申请成为经纪人
            <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      showPassword: false
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    }
  }
}
</script>

<style scoped>
  .broker-label {
    @apply block text-sm font-medium text-gray-700 mb-2;
  }
  .cli-icon{
    @apply absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none;
  }
  .email-input{
    @apply w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary;
  }
  .broker-class2 {
    @apply flex justify-between items-center mb-2;
  }
  .broker-class3 {
    @apply block text-sm font-medium text-gray-700;
  }
  .broker-class4 {
    @apply text-sm font-medium text-primary hover:text-primary-dark cursor-pointer;
  }
  .broker-class5 {
    @apply absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none;
  }
  .broker-class6 {
    @apply w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary;
  }
  .broker-class7 {
    @apply w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary;
  }
  .broker-class8 {
    @apply w-full bg-primary hover:bg-primary-dark text-white font-medium py-2.5 px-4 rounded-lg transition duration-200;
  }
  .broker-new-account {
    @apply mt-6 p-4 bg-wealth-light rounded-lg border border-wealth/20;
  }
  .broker-class9 {
    @apply inline-flex items-center mt-2 text-sm font-medium text-primary hover:text-primary-dark cursor-pointer;
  }
</style>