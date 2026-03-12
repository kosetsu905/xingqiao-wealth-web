
<template>
  <!-- Header -->
  <Header/>
  <!-- Main Content -->
  <main id="account-info-main" class="max-w-5xl mx-auto px-6 py-8">

    <!-- Page Header -->
    <section id="page-header" class="mb-8">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">收款账户管理</h2>
          <p class="text-gray-600">管理您的银行账户信息，用于接收佣金和收益</p>
        </div>
        <button onclick="showAddAccountForm()" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <i class="fas fa-plus"></i>
          <span>添加账户</span>
        </button>
      </div>
    </section>

    <!-- Account Cards -->
    <section id="account-cards" class="grid grid-cols-1 md:grid-cols-2 gap-6">

      <!-- Account Card 1 -->
      <div id="account-card-1" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-university text-blue-600 text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">主要收款账户</h3>
              <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">默认</span>
            </div>
          </div>
          <div class="flex space-x-2">
            <button onclick="editAccount(1)" class="text-gray-400 hover:text-blue-600">
              <i class="fas fa-edit"></i>
            </button>
            <button onclick="deleteAccount(1)" class="text-gray-400 hover:text-red-600">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-sm text-gray-600">银行名称</span>
            <span class="text-sm font-medium text-gray-900">中国工商银行</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-600">分行名称</span>
            <span class="text-sm font-medium text-gray-900">上海陆家嘴支行</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-600">账户名称</span>
            <span class="text-sm font-medium text-gray-900">张伟</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-600">账户号码</span>
            <span class="text-sm font-medium text-gray-900">**** **** **** 8888</span>
          </div>
        </div>

        <div class="mt-4 pt-4 border-t border-gray-200">
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-500">添加时间: 2024-01-15</span>
            <button onclick="setDefaultAccount(1)" class="text-xs text-blue-600 hover:text-blue-800">设为默认</button>
          </div>
        </div>
      </div>

      <!-- Account Card 2 -->
      <div id="account-card-2" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-university text-green-600 text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">备用收款账户</h3>
            </div>
          </div>
          <div class="flex space-x-2">
            <button onclick="editAccount(2)" class="text-gray-400 hover:text-blue-600">
              <i class="fas fa-edit"></i>
            </button>
            <button onclick="deleteAccount(2)" class="text-gray-400 hover:text-red-600">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex justify-between">
            <span class="text-sm text-gray-600">银行名称</span>
            <span class="text-sm font-medium text-gray-900">招商银行</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-600">分行名称</span>
            <span class="text-sm font-medium text-gray-900">上海外滩支行</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-600">账户名称</span>
            <span class="text-sm font-medium text-gray-900">张伟</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm text-gray-600">账户号码</span>
            <span class="text-sm font-medium text-gray-900">**** **** **** 6666</span>
          </div>
        </div>

        <div class="mt-4 pt-4 border-t border-gray-200">
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-500">添加时间: 2024-02-20</span>
            <button onclick="setDefaultAccount(2)" class="text-xs text-blue-600 hover:text-blue-800">设为默认</button>
          </div>
        </div>
      </div>

    </section>

    <!-- Account Statistics -->
    <section id="account-stats" class="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">账户统计</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center">
          <div class="text-2xl font-bold text-blue-600">2</div>
          <div class="text-sm text-gray-600">已绑定账户</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-green-600">¥45,680</div>
          <div class="text-sm text-gray-600">本月收入</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-purple-600">¥580,240</div>
          <div class="text-sm text-gray-600">累计收入</div>
        </div>
      </div>
    </section>

  </main>

  <!-- Add/Edit Account Modal -->
  <div id="account-form-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50">
    <div class="flex items-center justify-center min-h-screen p-4">
      <div class="bg-white rounded-xl max-w-lg w-full">
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h3 id="modal-title" class="text-xl font-semibold text-gray-900">添加银行账户</h3>
            <button onclick="hideAccountForm()" class="text-gray-400 hover:text-gray-600">
              <i class="fas fa-xmark text-xl"></i>
            </button>
          </div>
        </div>
        <form class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">银行名称</label>
            <select id="bank-name" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">请选择银行</option>
              <option value="中国工商银行">中国工商银行</option>
              <option value="中国建设银行">中国建设银行</option>
              <option value="中国农业银行">中国农业银行</option>
              <option value="中国银行">中国银行</option>
              <option value="招商银行">招商银行</option>
              <option value="交通银行">交通银行</option>
              <option value="中信银行">中信银行</option>
              <option value="光大银行">光大银行</option>
              <option value="华夏银行">华夏银行</option>
              <option value="民生银行">民生银行</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">分行名称</label>
            <input type="text" id="branch-name" placeholder="例如：上海陆家嘴支行" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">账户名称</label>
            <input type="text" id="account-name" placeholder="请输入账户持有人姓名" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">账户号码</label>
            <input type="text" id="account-number" placeholder="请输入完整的银行账户号码" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="set-default" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500">
            <label for="set-default" class="ml-2 text-sm text-gray-700">设为默认收款账户</label>
          </div>
          <div class="flex justify-end space-x-3 pt-4">
            <button type="button" onclick="hideAccountForm()" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">取消</button>
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">保存账户</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div id="delete-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50">
    <div class="flex items-center justify-center min-h-screen p-4">
      <div class="bg-white rounded-xl max-w-md w-full">
        <div class="p-6">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-exclamation-triangle text-red-600 text-xl"></i>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-gray-900">确认删除</h3>
              <p class="text-sm text-gray-600">您确定要删除这个银行账户吗？</p>
            </div>
          </div>
          <div class="flex justify-end space-x-3">
            <button onclick="hideDeleteModal()" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">取消</button>
            <button onclick="confirmDelete()" class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">删除</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import Header from "@/components/agency/Header.vue";

</script>


<style scoped>

</style>