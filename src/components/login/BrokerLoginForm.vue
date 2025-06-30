<template>
  <!-- Broker Login Form (Hidden by default) -->
  <div id="broker-login-form" class="hidden">
    <form>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2" for="broker-id">
          经纪人ID
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fa-solid fa-id-card text-gray-400"></i>
          </div>
          <input id="broker-id" type="text" class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="请输入您的经纪人ID">
        </div>
      </div>

      <div class="mb-6">
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700" for="broker-password">
            密码
          </label>
          <span class="text-sm font-medium text-primary hover:text-primary-dark cursor-pointer">
            忘记密码?
          </span>
        </div>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i class="fa-solid fa-lock text-gray-400"></i>
          </div>
          <input id="broker-password" type="password" class="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="请输入您的密码">
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
            <i class="fa-regular fa-eye text-gray-400 cursor-pointer"></i>
          </div>
        </div>
      </div>

      <div class="flex items-center mb-6">
        <input id="remember-broker" type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary">
        <label for="remember-broker" class="ml-2 text-sm text-gray-600">
          记住我的登录状态
        </label>
      </div>

      <button type="submit" class="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2.5 px-4 rounded-lg transition duration-200">
        <i class="fa-solid fa-right-to-bracket mr-2"></i>登录
      </button>
    </form>

    <div id="broker-new-account" class="mt-6 p-4 bg-wealth-light rounded-lg border border-wealth/20">
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
          <span class="inline-flex items-center mt-2 text-sm font-medium text-primary hover:text-primary-dark cursor-pointer">
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
  }
}
</script>