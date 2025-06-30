<template>
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
    <ClientLoginForm v-show="activeTab === 'client'" />
    <BrokerLoginForm v-show="activeTab === 'broker'" />
    <ThirdPartyLogin />
  </div>
</template>

<script>
import ClientLoginForm from './ClientLoginForm.vue'
import BrokerLoginForm from './BrokerLoginForm.vue'
import ThirdPartyLogin from './ThirdPartyLogin.vue'

export default {
  components: {
    ClientLoginForm,
    BrokerLoginForm,
    ThirdPartyLogin
  },
  data() {
    return {
      activeTab: 'client' // 默认激活客户登录
    }
  }
}
</script>
