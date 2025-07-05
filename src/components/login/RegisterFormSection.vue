<template>
  <div id="login-form-container" class="login-form-container">
    <div id="login-header" class="mb-8 text-center">
      <h2 class="text-2xl font-bold text-gray-800">欢迎注册</h2>
      <p class="text-gray-500 mt-2">请选择您的账户类型进行注册</p>
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
        客户注册
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
        经纪人注册
      </button>
    </div>
    <CommonRegisterForm :login-object="currentPwdObject" />
  </div>
</template>

<script setup>
  import CommonRegisterForm from './CommonRegisterForm.vue'
  import { ref,computed } from 'vue';
  import { useRoute } from 'vue-router' // 新增路由引入
  const route = useRoute()
  const userType = ref(route.query.userType || "02") // 接收路由参数

  // 注册对象
  const currentObject = ref({
    userType: userType.value
  })


  // 新增计算属性获取当前登录对象
  const currentPwdObject = computed(() => ({
    ...(currentObject.value),
    userType: userType.value // 动态注入当前用户类型
  }))

  // 切换登录类型的方法
  function switchTab(tab) {
    console.log(`切换到 ${tab} 注册`)
    userType.value = tab
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