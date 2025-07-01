<template>
  <div id="login-form-container" class="login-form-container">
    <div id="login-header" class="mb-8 text-center">
      <h2 class="text-2xl font-bold text-gray-800">欢迎登录</h2>
      <p class="text-gray-500 mt-2">请选择您的账户类型进行登录</p>
    </div>
    <!-- Tab Switching -->
    <div id="login-tabs" class="login-tabs">
      <button
          id="client-tab"
          @click="switchTab('client')"
          class="client-tab"
          :class="{
          'border-primary text-primary': activeTab === 'client',
          'border-transparent text-gray-500 hover:text-gray-700': activeTab !== 'client'
        }"
      >
        <i class="fa-solid fa-user mr-2"></i>
        客户登录
      </button>
      <button
          id="broker-tab"
          @click="switchTab('broker')"
          class="client-tab"
          :class="{
          'border-primary text-primary': activeTab === 'broker',
          'border-transparent text-gray-500 hover:text-gray-700': activeTab !== 'broker'
        }"
      >
        <i class="fa-solid fa-briefcase mr-2"></i>
        经纪人登录
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
  },
  methods: {
    switchTab(tab) {
      console.log(`切换到  ${tab} 登录`)
      this.activeTab = tab
    }
  }
}
</script>

<style scoped>

  .login-form-container {
    @apply w-full md:w-7/12 p-8;
  }
  .client-tab{
    @apply flex-1 py-3 font-medium text-center border-b-2;
  }
  .login-tabs {
    @apply flex border-b border-gray-200 mb-6;
  }


</style>