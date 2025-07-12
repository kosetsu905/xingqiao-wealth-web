
<template>

  <!-- Header -->
  <Header/>

  <!-- Main Content -->
  <main id="main-content" class="max-w-4xl mx-auto px-6 py-8">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
      <!-- Form Header -->
      <div id="form-header" class="p-6 border-b border-gray-200">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-user-plus text-blue-600 text-xl"></i>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-900">新客户信息</h2>
            <p class="text-sm text-gray-600">请填写完整的客户信息以建立客户档案</p>
          </div>
        </div>
      </div>

      <!-- Form Content -->
      <form id="customer-form" class="p-6">
        <!-- Personal Information Section -->
        <section id="personal-info-section" class="mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <i class="fas fa-user text-blue-600 mr-2"></i>
            个人基本信息
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">客户姓名 *</label>
              <input type="text"  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入客户姓名">
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">年龄 *</label>
              <input type="number"  min="18" max="100" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入年龄">
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">性别 *</label>
              <select  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">请选择性别</option>
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">手机号码 *</label>
              <input type="tel"  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入手机号码">
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">电子邮箱</label>
              <input type="email" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入电子邮箱">
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">婚姻状况</label>
              <select class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">请选择婚姻状况</option>
                <option value="已婚">已婚</option>
                <option value="未婚">未婚</option>
                <option value="离异">离异</option>
                <option value="丧偶">丧偶</option>
              </select>
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">子女数量</label>
              <input type="number" min="0" max="10" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入子女数量">
            </div>
            <div class="col-span-1 md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">地址</label>
              <textarea class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20" placeholder="请输入详细地址"></textarea>
            </div>
          </div>
        </section>

        <!-- Financial Information Section -->
        <section id="financial-info-section" class="mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <i class="fas fa-dollar-sign text-green-600 mr-2"></i>
            财务信息
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">家庭总资产 (万元)</label>
              <input type="number" step="0.01" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入家庭总资产">
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">家庭负债 (万元)</label>
              <input type="number" step="0.01" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入家庭负债">
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">家庭年收入 (万元)</label>
              <input type="number" step="0.01" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入家庭年收入">
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">新投资额度 (万元)</label>
              <input type="number" step="0.01" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入新投资额度">
            </div>
          </div>
        </section>

        <!-- Investment Preferences Section -->
        <section id="investment-preferences-section" class="mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <i class="fas fa-chart-pie text-purple-600 mr-2"></i>
            投资偏好
          </h3>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3">感兴趣的产品类型 (可多选)</label>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
                <input type="checkbox" name="interested_products" value="investment_fund" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                <div class="ml-3">
                  <div class="flex items-center">
                    <i class="fas fa-chart-line text-blue-600 mr-2"></i>
                    <span class="text-sm font-medium text-gray-900">投资基金</span>
                  </div>
                  <p class="text-xs text-gray-500">全球投资基金产品</p>
                </div>
              </label>

              <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
                <input type="checkbox" name="interested_products" value="etf" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                <div class="ml-3">
                  <div class="flex items-center">
                    <i class="fas fa-chart-bar text-green-600 mr-2"></i>
                    <span class="text-sm font-medium text-gray-900">ETF</span>
                  </div>
                  <p class="text-xs text-gray-500">交易所交易基金</p>
                </div>
              </label>

              <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
                <input type="checkbox" name="interested_products" value="equity" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                <div class="ml-3">
                  <div class="flex items-center">
                    <i class="fas fa-trending-up text-red-600 mr-2"></i>
                    <span class="text-sm font-medium text-gray-900">股票</span>
                  </div>
                  <p class="text-xs text-gray-500">股权投资产品</p>
                </div>
              </label>

              <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
                <input type="checkbox" name="interested_products" value="life_insurance" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                <div class="ml-3">
                  <div class="flex items-center">
                    <i class="fas fa-heart text-pink-600 mr-2"></i>
                    <span class="text-sm font-medium text-gray-900">人寿保险</span>
                  </div>
                  <p class="text-xs text-gray-500">人寿投资保险</p>
                </div>
              </label>

              <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
                <input type="checkbox" name="interested_products" value="fixed_income" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                <div class="ml-3">
                  <div class="flex items-center">
                    <i class="fas fa-piggy-bank text-yellow-600 mr-2"></i>
                    <span class="text-sm font-medium text-gray-900">固定收益</span>
                  </div>
                  <p class="text-xs text-gray-500">债券及储蓄产品</p>
                </div>
              </label>

              <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
                <input type="checkbox" name="interested_products" value="alternative_asset" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
                <div class="ml-3">
                  <div class="flex items-center">
                    <i class="fas fa-building text-purple-600 mr-2"></i>
                    <span class="text-sm font-medium text-gray-900">另类资产</span>
                  </div>
                  <p class="text-xs text-gray-500">REITs、黄金等</p>
                </div>
              </label>
            </div>
          </div>
        </section>

        <!-- Additional Notes Section -->
        <section id="notes-section" class="mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <i class="fas fa-sticky-note text-orange-600 mr-2"></i>
            备注信息
          </h3>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">客户备注</label>
            <textarea class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24" placeholder="请输入客户相关备注信息..."></textarea>
          </div>
        </section>

        <!-- Form Actions -->
        <div id="form-actions" class="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button type="button" onclick="goBack()" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <i class="fas fa-times mr-2"></i>
            取消
          </button>
          <button type="button" class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <i class="fas fa-save mr-2"></i>
            保存草稿
          </button>
          <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <i class="fas fa-check mr-2"></i>
            提交客户信息
          </button>
        </div>
      </form>
    </div>
  </main>

</template>


<script setup lang="ts">
import Header from "@/components/agency/Header.vue";

</script>


<style scoped>

</style>