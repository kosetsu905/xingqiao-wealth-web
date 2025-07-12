
<template>
  <!-- Header -->
  <Header/>
  <!-- Main Content -->
  <main id="main-content" class="max-w-7xl mx-auto px-6 py-8">
    <!-- Page Header -->
    <div id="page-header" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-users text-blue-600 text-xl"></i>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-900">客户管理</h2>
            <p class="text-sm text-gray-600">查看和管理所有客户信息</p>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <div class="bg-blue-50 px-4 py-2 rounded-lg">
            <span class="text-sm text-blue-700 font-medium">总客户数: 156</span>
          </div>
          <button @click="addNewClient" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <i class="fas fa-plus mr-2"></i>
            添加新客户
          </button>
        </div>
      </div>
    </div>

    <!-- Search and Filter Bar -->
    <div id="search-filter-bar" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
        <div class="flex-1 max-w-md">
          <div class="relative">
            <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input type="text" placeholder="搜索客户姓名、手机号..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          </div>
        </div>
        <div class="flex flex-wrap gap-3">
          <select class="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">所有产品兴趣</option>
            <option value="investment_fund">投资基金</option>
            <option value="etf">ETF</option>
            <option value="equity">股票</option>
            <option value="life_insurance">人寿保险</option>
            <option value="fixed_income">固定收益</option>
            <option value="alternative_asset">另类资产</option>
          </select>
          <select class="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">所有婚姻状况</option>
            <option value="已婚">已婚</option>
            <option value="未婚">未婚</option>
            <option value="离异">离异</option>
            <option value="丧偶">丧偶</option>
          </select>
          <button class="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            <i class="fas fa-filter mr-2"></i>
            筛选
          </button>
        </div>
      </div>
    </div>

    <!-- Client List Table -->
    <div id="client-list-table" class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">客户信息</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">联系方式</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">婚姻状况</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">兴趣产品</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">已购产品</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">未来机会</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">还款日期</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          <tr id="client-row-1" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" class="w-10 h-10 rounded-full mr-3">
                <div>
                  <div class="text-sm font-medium text-gray-900">李小红</div>
                  <div class="text-sm text-gray-500">35岁 / 女</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">138-0000-1234</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">已婚</span>
            </td>
            <td class="px-6 py-4">
              <div class="flex flex-wrap gap-1">
                <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">投资基金</span>
                <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-100 text-purple-800">ETF</span>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">全球股票基金</div>
              <div class="text-sm text-gray-500">50万元</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">人寿保险</div>
              <div class="text-sm text-gray-500">预计30万元</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">2024-12-15</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button onclick="viewClient(1)" class="text-blue-600 hover:text-blue-900 mr-3">
                <i class="fas fa-eye"></i>
              </button>
              <button onclick="editClient(1)" class="text-green-600 hover:text-green-900 mr-3">
                <i class="fas fa-edit"></i>
              </button>
              <button onclick="deleteClient(1)" class="text-red-600 hover:text-red-900">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>

          <tr id="client-row-2" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" class="w-10 h-10 rounded-full mr-3">
                <div>
                  <div class="text-sm font-medium text-gray-900">王大明</div>
                  <div class="text-sm text-gray-500">42岁 / 男</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">139-1111-5678</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">已婚</span>
            </td>
            <td class="px-6 py-4">
              <div class="flex flex-wrap gap-1">
                <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">固定收益</span>
                <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800">股票</span>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">债券基金</div>
              <div class="text-sm text-gray-500">80万元</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">另类资产</div>
              <div class="text-sm text-gray-500">预计100万元</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">2025-01-20</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button onclick="viewClient(2)" class="text-blue-600 hover:text-blue-900 mr-3">
                <i class="fas fa-eye"></i>
              </button>
              <button onclick="editClient(2)" class="text-green-600 hover:text-green-900 mr-3">
                <i class="fas fa-edit"></i>
              </button>
              <button onclick="deleteClient(2)" class="text-red-600 hover:text-red-900">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>

          <tr id="client-row-3" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" class="w-10 h-10 rounded-full mr-3">
                <div>
                  <div class="text-sm font-medium text-gray-900">张美丽</div>
                  <div class="text-sm text-gray-500">28岁 / 女</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">136-2222-9876</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">未婚</span>
            </td>
            <td class="px-6 py-4">
              <div class="flex flex-wrap gap-1">
                <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-pink-100 text-pink-800">人寿保险</span>
                <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">投资基金</span>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">-</div>
              <div class="text-sm text-gray-500">暂无购买</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">ETF产品</div>
              <div class="text-sm text-gray-500">预计20万元</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">-</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button onclick="viewClient(3)" class="text-blue-600 hover:text-blue-900 mr-3">
                <i class="fas fa-eye"></i>
              </button>
              <button onclick="editClient(3)" class="text-green-600 hover:text-green-900 mr-3">
                <i class="fas fa-edit"></i>
              </button>
              <button onclick="deleteClient(3)" class="text-red-600 hover:text-red-900">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>

          <tr id="client-row-4" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" class="w-10 h-10 rounded-full mr-3">
                <div>
                  <div class="text-sm font-medium text-gray-900">陈建国</div>
                  <div class="text-sm text-gray-500">55岁 / 男</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">135-3333-4567</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">离异</span>
            </td>
            <td class="px-6 py-4">
              <div class="flex flex-wrap gap-1">
                <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-indigo-100 text-indigo-800">另类资产</span>
                <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">固定收益</span>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">REITs基金</div>
              <div class="text-sm text-gray-500">120万元</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900">黄金投资</div>
              <div class="text-sm text-gray-500">预计50万元</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">2024-11-30</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button onclick="viewClient(4)" class="text-blue-600 hover:text-blue-900 mr-3">
                <i class="fas fa-eye"></i>
              </button>
              <button onclick="editClient(4)" class="text-green-600 hover:text-green-900 mr-3">
                <i class="fas fa-edit"></i>
              </button>
              <button onclick="deleteClient(4)" class="text-red-600 hover:text-red-900">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pagination -->
    <div id="pagination" class="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 p-4">
      <div class="flex items-center justify-between">
        <div class="text-sm text-gray-700">
          显示 <span class="font-medium">1</span> 到 <span class="font-medium">4</span> 条，共 <span class="font-medium">156</span> 条记录
        </div>
        <div class="flex space-x-2">
          <button class="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-500 bg-gray-100 cursor-not-allowed">
            <i class="fas fa-chevron-left mr-1"></i>
            上一页
          </button>
          <button class="px-3 py-2 text-sm border border-gray-300 rounded-lg bg-blue-600 text-white">1</button>
          <button class="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">2</button>
          <button class="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">3</button>
          <button class="px-3 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            下一页
            <i class="fas fa-chevron-right ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  </main>

</template>

<script setup lang="ts">
import Header from "@/components/agency/Header.vue";
import { useRouter } from 'vue-router';
const router = useRouter();


const  addNewClient = () => {
  console.log('addNewClient')
  router.push({
    path: '/agency/customerInfo'
  })
}

</script>


<style scoped>

</style>