<!-- src/views/client/FaceRecognitionSuccess.vue -->
<template>
  <div class="font-inter bg-gray-50 min-h-screen flex items-center justify-center p-4 text-gray-800">
    <div class="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <!-- 顶部装饰条 -->
      <div class="h-20 bg-gradient-to-r from-primary to-blue-500"></div>

      <!-- 主要内容区 -->
      <div class="p-8">
        <!-- 成功图标 -->
        <div class="flex justify-center mb-6">
          <div class="relative w-24 h-24">
            <div class="absolute inset-0 bg-primary/10 rounded-full pulse-ring"></div>
            <div class="absolute inset-2 bg-primary text-white rounded-full flex items-center justify-center float">
              <i class="fa fa-check text-3xl"></i>
            </div>
          </div>
        </div>

        <!-- 标题和描述 -->
        <div class="text-center mb-8">
          <h1 class="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-800 mb-3">人脸识别提交成功</h1>
          <p class="text-gray-500">身份验证已经成功提交认证，您可以返回继续进行操作</p>
        </div>

        <!-- 人脸信息卡片 -->
        <div class="bg-neutral rounded-xl p-5 mb-8 transform transition-all duration-300 hover:scale-[1.02]">
          <!-- 验证信息 -->
          <div class="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 gap-3 text-sm">
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-primary mr-2"></div>
              <span>验证方式: 活体检测</span>
            </div>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="space-y-3">
          <button
              @click="continueOperation"
              class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
            <i class="fa fa-arrow-right"></i>
            <span>点击返回</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const continueOperation = () => {
  // 继续操作的逻辑，例如跳转到下一步
  router.push('/client/ekycClientIndex?step=2')
}


</script>

<style scoped>

</style>
