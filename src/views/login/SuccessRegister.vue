<template>
  <div id="login-page" class="login-page">
    <div id="login-container" class="login-container items-center justify-center">  <!-- 新增居中属性 -->
      <!-- 左侧栏-->
      <BrandSection :brand-data="brandData"/>
      <!-- 右侧栏-->
      <div class="success-container text-center py-8">
        <div class="success-icon mb-6">
          <i class="fa-solid fa-circle-check text-6xl text-green-500 animate-bounce"></i>
        </div>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">注册成功！</h2>
        <p class="text-gray-600 mb-8">您的账户已成功创建，现在可以返回登录</p>
        <button
            @click="goToLogin"
            class="bg-primary hover:bg-primary-dark text-white font-medium py-2.5 px-8 rounded-lg transition duration-200"
        >
          <i class="fa-solid fa-arrow-left mr-2"></i>
          返回登录
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import BrandSection from '../../components/login/BrandSection.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const brandData = ref({
  name: '账户安全保护',
  value: '我们致力于保护您的账户安全，确保资金安全可靠',
  image: '/images/45a7e2715c-f1858b4d9da69dbba506.png'
});

const goToLogin = () => {
   router.push('/client/login')
}
</script>


<style scoped>
.login-container {
  @apply w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row;
}
.login-page{
  @apply flex min-h-[800px] items-center justify-center p-4;
}
.success-container {
  @apply max-w-md mx-auto;
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>