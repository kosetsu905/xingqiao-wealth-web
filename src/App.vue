<template>

<!--登录页-->
  <div id="login-page" class="flex min-h-[800px] items-center justify-center p-4">
    <div id="login-container" class="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="flex flex-col md:flex-row">
        <!-- Left Side - Image and Brand -->
        <div id="login-branding" class="w-full md:w-5/12 bg-gradient-to-br from-primary-dark to-primary p-8 text-white flex flex-col justify-between">
          <div id="brand-logo" class="mb-8">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-chart-line text-primary text-2xl"></i>
              </div>
              <h1 class="ml-3 text-2xl font-bold">财富管理</h1>
            </div>
          </div>

          <div id="brand-image" class="flex-grow flex items-center justify-center py-8">
            <img class="w-full h-auto rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1e58e4c6eb-272e2ec5c6e717c81391.png" alt="financial wealth management illustration with charts, coins, and growth symbols, Chinese style, blue gradient background">
          </div>

          <div id="brand-text" class="mt-8">
            <h2 class="text-xl font-bold mb-2">专业财富管理</h2>
            <p class="text-sm opacity-80">为您的未来提供安全可靠的财务规划和投资解决方案</p>
          </div>
        </div>

        <!-- Right Side - Login Form -->
        <div id="login-form-container" class="w-full md:w-7/12 p-8">
          <div id="login-header" class="mb-8 text-center">
            <h2 class="text-2xl font-bold text-gray-800">欢迎登录</h2>
            <p class="text-gray-500 mt-2">请选择您的账户类型进行登录</p>
          </div>

          <!-- Tab Switching -->
          <div id="login-tabs" class="flex border-b border-gray-200 mb-6">
            <button id="client-tab" class="flex-1 py-3 font-medium text-center border-b-2 border-primary text-primary">
              <i class="fa-solid fa-user mr-2"></i>客户登录
            </button>
            <button id="broker-tab" class="flex-1 py-3 font-medium text-center border-b-2 border-transparent text-gray-500 hover:text-gray-700">
              <i class="fa-solid fa-briefcase mr-2"></i>经纪人登录
            </button>
          </div>

          <!-- Client Login Form -->
          <div id="client-login-form">
            <form>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-2" for="client-email">
                  电子邮箱
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i class="fa-regular fa-envelope text-gray-400"></i>
                  </div>
                  <input id="client-email" type="email" class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="请输入您的电子邮箱">
                </div>
              </div>

              <div class="mb-6">
                <div class="flex justify-between items-center mb-2">
                  <label class="block text-sm font-medium text-gray-700" for="client-password">
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
                  <input id="client-password" type="password" class="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="请输入您的密码">
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <i class="fa-regular fa-eye text-gray-400 cursor-pointer"></i>
                  </div>
                </div>
              </div>

              <div class="flex items-center mb-6">
                <input id="remember-client" type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary">
                <label for="remember-client" class="ml-2 text-sm text-gray-600">
                  记住我的登录状态
                </label>
              </div>

              <button type="submit" class="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2.5 px-4 rounded-lg transition duration-200">
                <i class="fa-solid fa-right-to-bracket mr-2"></i>登录
              </button>
            </form>

            <div id="client-new-account" class="mt-6 p-4 bg-primary-light rounded-lg border border-primary/20">
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-0.5">
                  <i class="fa-solid fa-gift text-secondary-dark"></i>
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-gray-800">新客户注册奖励</h3>
                  <p class="text-xs text-gray-600 mt-1">注册成为新客户，即可获得 <span class="font-bold text-secondary-dark">50 港币</span> 奖励</p>
                  <span class="inline-flex items-center mt-2 text-sm font-medium text-primary hover:text-primary-dark cursor-pointer">
                                        立即注册 <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
                                    </span>
                </div>
              </div>
            </div>
          </div>

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
                  <h3 class="text-sm font-medium text-gray-800">经纪人注册奖励</h3>
                  <p class="text-xs text-gray-600 mt-1">注册成为新经纪人，即可获得 <span class="font-bold text-wealth-dark">500 港币</span> 奖励</p>
                  <span class="inline-flex items-center mt-2 text-sm font-medium text-primary hover:text-primary-dark cursor-pointer">
                                        申请成为经纪人 <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
                                    </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Other Login Options -->
          <div id="other-login-options" class="mt-8">
            <div class="relative flex items-center justify-center">
              <div class="border-t border-gray-200 absolute w-full"></div>
              <div class="bg-white px-4 relative z-10">
                <span class="text-sm text-gray-500">其他登录方式</span>
              </div>
            </div>

            <div class="flex justify-center space-x-4 mt-4">
              <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <i class="fa-brands fa-weixin text-green-600"></i>
              </button>
              <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <i class="fa-brands fa-qq text-blue-500"></i>
              </button>
              <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <i class="fa-solid fa-mobile-screen-button text-gray-700"></i>
              </button>
            </div>
          </div>
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

    };
  },
  created() {
    console.log("页面已加载，执行初始化操作")

  },
  methods: {

  }
};

</script>

<style scoped>

</style>