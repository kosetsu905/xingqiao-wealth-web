
<template>

  <!-- Header -->
  <Header/>

  <main id="main-content" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div id="page-header" class="mb-8">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-3xl font-bold text-gray-900">创建销售机会</h2>
          <p class="text-gray-600 mt-2">填写客户信息和投资意向，创建新的销售机会</p>
        </div>
        <button class="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center space-x-2 text-gray-700"
         @click="goBack">
          <i class="fa-solid fa-arrow-left"></i>
          <span>返回列表</span>
        </button>
      </div>
    </div>

    <div id="opportunity-form" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <form class="space-y-8">
        <div id="client-info-section" class="space-y-6">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <i class="fa-solid fa-user text-white text-sm"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">客户信息</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div id="client-name-field">
              <label class="block text-sm font-medium text-gray-700 mb-2">客户姓名 *</label>
              <input type="text" placeholder="请输入客户姓名" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
            </div>
            <div id="contact-field">
              <label class="block text-sm font-medium text-gray-700 mb-2">联系方式</label>
              <input type="text" placeholder="手机号码或邮箱" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
            </div>
          </div>
        </div>

        <div id="investment-info-section" class="space-y-6">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-8 h-8 bg-secondary1 rounded-full flex items-center justify-center">
              <i class="fa-solid fa-coins text-white text-sm"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">投资信息</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div id="investment-amount-field">
              <label class="block text-sm font-medium text-gray-700 mb-2">投资金额 *</label>
              <div class="relative">
                <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">¥</span>
                <input type="number" placeholder="0.00" class="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
              </div>
            </div>
            <div id="intent-time-field">
              <label class="block text-sm font-medium text-gray-700 mb-2">投资时间意向 *</label>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                <option value="">请选择时间</option>
                <option value="immediate">立即投资</option>
                <option value="1week">1周内</option>
                <option value="1month">1个月内</option>
                <option value="3months">3个月内</option>
                <option value="6months">6个月内</option>
                <option value="1year">1年内</option>
              </select>
            </div>
          </div>
        </div>

        <div id="product-info-section" class="space-y-6">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <i class="fa-solid fa-briefcase text-white text-sm"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">产品信息</h3>
          </div>

          <div id="financial-product-field">
            <label class="block text-sm font-medium text-gray-700 mb-2">感兴趣的金融产品 *</label>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <label class="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" class="text-primary focus:ring-primary">
                <span class="text-sm">基金投资</span>
              </label>
              <label class="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" class="text-primary focus:ring-primary">
                <span class="text-sm">股票投资</span>
              </label>
              <label class="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" class="text-primary focus:ring-primary">
                <span class="text-sm">债券投资</span>
              </label>
              <label class="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" class="text-primary focus:ring-primary">
                <span class="text-sm">保险产品</span>
              </label>
              <label class="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" class="text-primary focus:ring-primary">
                <span class="text-sm">理财产品</span>
              </label>
              <label class="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" class="text-primary focus:ring-primary">
                <span class="text-sm">信托产品</span>
              </label>
              <label class="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" class="text-primary focus:ring-primary">
                <span class="text-sm">私募基金</span>
              </label>
              <label class="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" class="text-primary focus:ring-primary">
                <span class="text-sm">其他产品</span>
              </label>
            </div>
          </div>
        </div>

        <div id="notes-section" class="space-y-6">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <i class="fa-solid fa-note-sticky text-white text-sm"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">备注信息</h3>
          </div>

          <div id="notes-field">
            <label class="block text-sm font-medium text-gray-700 mb-2">备注</label>
            <textarea rows="4" placeholder="请输入相关备注信息，如客户特殊需求、风险偏好、投资经验等..." class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"></textarea>
          </div>
        </div>

        <div id="form-actions" class="flex items-center justify-between pt-6 border-t border-gray-200">
          <div class="flex items-center space-x-2 text-sm text-gray-500">
            <i class="fa-solid fa-info-circle"></i>
            <span>带 * 号的字段为必填项</span>
          </div>
          <div class="flex items-center space-x-4">
            <button type="button" class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              取消
            </button>
            <button type="button" class="px-6 py-3 bg-gray-200 text-gray-500 rounded-lg">
              保存草稿
            </button>
            <button type="submit" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <i class="fa-solid fa-plus"></i>
              <span>创建机会</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </main>

</template>

<script setup lang="ts">
import Header from "@/components/agency/Header.vue";
import { useRouter } from "vue-router";
const router = useRouter();
//返回上一页
function goBack() {
  //跳转首页
  router.push("/agency/index");
}

</script>


<style scoped>

</style>