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
          @click="switchTab('02')"
          class="client-tab"
          :class="{
          'border-primary text-primary': userType === '02',
          'border-transparent text-gray-500 hover:text-gray-700': userType  !== '02'
        }"
      >
        <i class="fa-solid fa-user mr-2"></i>
        客户登录
      </button>
      <button
          id="broker-tab"
          @click="switchTab('01')"
          class="client-tab"
          :class="{
          'border-primary text-primary': userType === '01',
          'border-transparent text-gray-500 hover:text-gray-700': userType !== '01'
        }"
      >
        <i class="fa-solid fa-briefcase mr-2"></i>
        经纪人登录
      </button>
    </div>
    <CommonLoginForm :login-object="currentLoginObject" />
    <ThirdPartyLogin @change-login-type="changeLoginType"/>
  </div>
</template>

<script setup>
  import CommonLoginForm from './CommonLoginForm.vue'
  import ThirdPartyLogin from './ThirdPartyLogin.vue'
  import { ref,computed } from 'vue';

  const userType = ref("02")
  const loginType = ref("0")

  // 切换登录类型的方法
  function switchTab(tab) {
    console.log(`切换到 ${tab} 登录`)
    userType.value = tab
  }

  // 账号密码登录对象
  const accountLoginObject = ref({
    userType: userType.value,
    loginTypeName: '账号',
    loginType: '0',
    placeholder: '请输入您的登录账号',
    type: 'text'
  })

  const emailLoginObject = ref({
    userType: userType.value,
    loginTypeName: '邮箱',
    loginType: '1',
    placeholder: '请输入您的邮箱',
    type: 'text'
  })

  // 手机登录对象
  const phoneLoginObject = ref({
    userType: userType.value,
    loginTypeName: '手机号码',
    loginType: '2',
    placeholder: '请输入您的手机号码',
    type: 'phone'
  })

  // 新增计算属性获取当前登录对象
  const currentLoginObject = computed(() => ({
    ...(loginType.value === '0' ? accountLoginObject.value :
        loginType.value === '1' ? emailLoginObject.value :
            phoneLoginObject.value),
    userType: userType.value // 确保 userType 是响应式更新的
  }))


  const changeLoginType = (params) => {
    console.log('更改其他登录方式触发', params);
    loginType.value = params
  };
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