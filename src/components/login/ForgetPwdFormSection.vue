<template>
  <div id="login-form-container" class="login-form-container">
    <div id="login-header" class="mb-8 text-center">
      <h2 class="text-2xl font-bold text-gray-800">密码重置</h2>
      <p class="text-gray-500 mt-2">请选择您的账户类型进行密码重置</p>
    </div>
    <!-- Tab Switching -->
    <div id="login-tabs" class="login-tabs">
      <button
          id="client-tab"
          @click="switchTab('02')"
          class="client-tab"
          :class="{
          'border-primary text-primary': pwdType === '02',
          'border-transparent text-gray-500 hover:text-gray-700': pwdType  !== '02'
        }"
      >
        <i class="fa-solid fa-user mr-2"></i>
        手机
      </button>
      <button
          id="broker-tab"
          @click="switchTab('01')"
          class="client-tab"
          :class="{
          'border-primary text-primary': pwdType === '01',
          'border-transparent text-gray-500 hover:text-gray-700': pwdType !== '01'
        }"
      >
        <i class="fa-solid fa-briefcase mr-2"></i>
        邮箱
      </button>
    </div>
    <CommonPwdForm :current-object="currentPwdObject" />
  </div>
</template>

<script setup>
  import CommonPwdForm from './CommonPwdForm.vue'
  import { ref,computed } from 'vue';
  import { useRoute } from 'vue-router' // 新增路由引入
  const route = useRoute()
  const userType = ref(route.query.userType || "02") // 接收路由参数
  const pwdType = ref('02') // 接收路由参数

  // 注册对象
  const currentObject = ref({
    userType: userType.value,
    pwdType: pwdType.value
  })


  // 新增计算属性获取当前登录对象
  const currentPwdObject = computed(() => ({
    ...(currentObject.value),
    pwdType: pwdType.value // 动态注入当前用户类型
  }))

  // 切换登录类型的方法
  function switchTab(tab) {
    console.log(`切换到 ${tab} 注册`)
    pwdType.value = tab
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