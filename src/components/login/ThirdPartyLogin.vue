<template>
  <!-- Other Login Options -->
  <div id="other-login-options" class="mt-8">
    <div class="relative flex items-center justify-center">
      <div class="border-t border-gray-200 absolute w-full"></div>
      <div class="bg-white px-4 relative z-10">
        <span class="text-sm text-gray-500">其他登录方式</span>
      </div>
    </div>
    <div class="flex justify-center space-x-4 mt-4">
      <button class="third-party">
        <i class="fa-brands fa-weixin text-green-600"></i>
      </button>
      <button class="third-party">
        <i class="fa-brands fa-qq text-blue-500"></i>
      </button>
      <!-- 账号密码登录按钮 -->
      <button class="third-party" @click="handleClick('0')">
        <i class="fa-solid fa-user text-gray-700"></i>
      </button>
      <!-- 邮箱验验证码按钮 -->
      <button class="third-party" @click="handleClick('1')">
        <i class="fa-regular fa-envelope text-gray-700"></i>
      </button>
      <button class="third-party" @click="handleClick('2')">
        <i class="fa-solid fa-mobile-screen-button text-gray-700"></i>
      </button>
    </div>
  </div>
</template>

<script setup>

    const emit = defineEmits(['changeLoginType']);

    const handleClick = (type) => {
      emit('changeLoginType', type);
    };
</script>

<style scoped>
  .third-party {
    @apply w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200;
  }
</style>