<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300"
         :class="show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold">{{ title }}</h3>
          <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
            <i class="fa fa-times text-xl"></i>
          </button>
        </div>
        <form @submit.prevent="$emit('register', formData)">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
            <input v-model="formData.name" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
            <input v-model="formData.email" type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">设置密码</label>
            <input v-model="formData.password" type="password" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
          </div>
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-1">确认密码</label>
            <input v-model="formData.confirmPassword" type="password" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary">
          </div>
          <div class="flex items-center mb-6">
            <input v-model="formData.agreement" type="checkbox" required class="h-4 w-4 text-primary focus:ring-primary/50 border-gray-300 rounded">
            <label class="ml-2 block text-sm text-gray-700">
              我已阅读并同意 <a href="#" class="text-primary hover:text-primary/80">用户协议</a> 和 <a href="#" class="text-primary hover:text-primary/80">隐私政策</a>
            </label>
          </div>
          <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors">
            {{ buttonText }}
          </button>
        </form>
        <div class="mt-4 text-center">
          <p class="text-sm text-gray-600">
            已有账户？ <a href="#" @click.prevent="$emit('toggle-auth')" class="text-primary hover:text-primary/80">立即登录</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

defineProps({
  show: true,
  title: {
    type: String,
    default: '用户注册'
  },
  buttonText: {
    type: String,
    default: '立即注册'
  }
})

defineEmits(['close', 'register', 'toggle-auth'])

const formData = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreement: false
})
</script>
