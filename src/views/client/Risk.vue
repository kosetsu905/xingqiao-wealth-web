

<template>
  <!-- 顶部导航栏 -->
  <Header/>

  <!-- 风险评估 -->
  <div class="bg-white rounded-xl shadow-sm p-5 mb-6">
    <div class="flex justify-between items-center mb-4">
      <h3 class="font-semibold text-gray-800">风险评估</h3>
      <button
          @click.prevent="toggleToRiskTest"
          class="px-3 py-1 text-sm rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
        <i class="fa fa-pencil mr-1"></i>
        重新测试
      </button>
    </div>

    <div class="flex flex-col md:flex-row items-start md:items-center justify-between">
      <div class="mb-4 md:mb-0">
        <h4 class="font-medium text-gray-800">您的风险承受能力</h4>
        <div class="flex items-center mt-2">
          <div class="w-64 bg-gray-200 rounded-full h-2.5">
            <div class="bg-primary h-2.5 rounded-full" style="width: 55%"></div>
          </div>
          <span class="ml-3 font-medium">平衡型</span>
        </div>
        <p class="text-sm text-gray-600 mt-2">您适合中等风险投资，能够承受一定的市场波动，追求长期资本增值。</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
        <div class="bg-gray-50 rounded-lg p-3 text-center">
          <p class="text-xs text-gray-500">风险承受</p>
          <p class="text-lg font-bold mt-1 text-primary">55%</p>
        </div>
        <div class="bg-gray-50 rounded-lg p-3 text-center">
          <p class="text-xs text-gray-500">投资经验</p>
          <p class="text-lg font-bold mt-1 text-primary">4年</p>
        </div>
        <div class="bg-gray-50 rounded-lg p-3 text-center">
          <p class="text-xs text-gray-500">测试日期</p>
          <p class="text-lg font-bold mt-1 text-primary">2025-06-15</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import Header from "@/components/client/Header.vue";
import { useRouter } from 'vue-router'
const router = useRouter()

const toggleToRiskTest  = () =>{
  router.push({
    path: '/client/riskTest'
  })
}

</script>
<style scoped>

</style>