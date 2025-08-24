<template>
  <!-- Header -->
  <Header/>

  <main id="main-content" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Page Header -->
    <div id="page-header" class="mb-8">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-3xl font-bold text-gray-900">销售机会管理</h2>
          <p class="text-gray-600 mt-2">查看和管理所有销售机会</p>
        </div>
        <button
            @click="createNewOpportunity"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <i class="fa-solid fa-plus"></i>
          <span>创建销售机会</span>
        </button>
      </div>
    </div>

    <!-- Search and Filter Bar -->
    <div id="search-filter-bar" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <!-- 客户姓名搜索 -->
          <div class="relative">
            <label class="block text-sm font-medium text-gray-700 mb-1">客户姓名</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-user text-gray-400"></i>
              </div>
              <input
                  v-model="searchParams.fullName"
                  type="text"
                  placeholder="请输入客户姓名"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
          </div>

          <!-- 手机号搜索 -->
          <div class="relative">
            <label class="block text-sm font-medium text-gray-700 mb-1">手机号</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-mobile-alt text-gray-400"></i>
              </div>
              <input
                  v-model="searchParams.phoneNumber"
                  type="text"
                  placeholder="请输入手机号"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
          </div>

          <!-- 邮箱搜索 -->
          <div class="relative">
            <label class="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-mobile-alt text-gray-400"></i>
              </div>
              <input
                  v-model="searchParams.email"
                  type="text"
                  placeholder="请输入手机号"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
            </div>
          </div>

        </div>

        <div class="flex items-end justify-end space-x-3">
          <button
              @click="resetSearch"
              class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            重置
          </button>
          <button
              @click="searchOpportunities"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <i class="fas fa-search mr-2"></i>
            查询
          </button>
        </div>
      </div>
    </div>

    <!-- Opportunities Table -->
    <div id="opportunities-table" class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">客户信息</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">手机号</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">投资金额</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">投资时间意向</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">感兴趣产品</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="opportunity in opportunityList" :key="opportunity.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <img :src=opportunity.avatar alt="Customer Avatar" class="rounded-full">
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-900">{{ opportunity.fullName }}</div>
                  <div class="text-sm text-gray-500">{{ opportunity.age }}岁</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ opportunity.phoneNumber }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">{{ opportunity.email }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">
                ¥{{ formatCurrency(opportunity.investmentAmount) }}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">
                {{ getInvestmentTimeLabel(opportunity.investmentTimeIntent) }}
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex flex-wrap gap-2">
                  <span
                      v-for="preference in opportunity.investmentPreferences"
                      :key="preference.productType"
                      class="inline-flex items-center px-2 py-1 rounded text-xs font-medium"
                      :class="getProductTypeClass(preference.productType)"
                  >
                    {{ getProductTypeName(preference.productType) }}
                  </span>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ formatDate(opportunity.createTime) }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  待跟进
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button
                  @click="viewOpportunity(opportunity.id)"
                  class="text-blue-600 hover:text-blue-900 mr-3"
                  title="查看详情"
              >
                <i class="fas fa-eye"></i>
              </button>
              <button
                  @click="editOpportunity(opportunity.id)"
                  class="text-green-600 hover:text-green-900 mr-3"
                  title="编辑"
              >
                <i class="fas fa-edit"></i>
              </button>
              <button
                  @click="deleteOpportunity(opportunity.id)"
                  class="text-red-600 hover:text-red-900"
                  title="删除"
              >
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
          </tbody>
        </table>

        <!-- Empty state -->
        <div v-if="opportunityList.length === 0 && !loading" class="text-center py-12">
          <i class="fas fa-list text-gray-300 text-4xl mb-4"></i>
          <p class="text-gray-500">暂无销售机会数据</p>
        </div>

        <!-- Loading state -->
        <div v-if="loading" class="text-center py-12">
          <i class="fas fa-spinner fa-spin text-blue-600 text-2xl"></i>
          <p class="text-gray-500 mt-2">加载中...</p>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div id="pagination" class="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 p-4">
      <div class="flex items-center justify-between">
        <div class="text-sm text-gray-700">
          显示 <span class="font-medium">{{ (currentPage - 1) * pageSize + 1 }}</span> 到
          <span class="font-medium">{{ Math.min(currentPage * pageSize, total) }}</span> 条，
          共 <span class="font-medium">{{ total }}</span> 条记录
        </div>
        <div class="flex space-x-2">
          <button
              @click="changePage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="px-3 py-2 text-sm border border-gray-300 rounded-lg flex items-center"
              :class="currentPage === 1 ? 'text-gray-500 bg-gray-100 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'"
          >
            <i class="fas fa-chevron-left mr-1"></i>
            上一页
          </button>

          <button
              v-for="page in pageNumbers"
              :key="page"
              @click="changePage(page)"
              class="px-3 py-2 text-sm border border-gray-300 rounded-lg"
              :class="page === currentPage ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-50'"
          >
            {{ page }}
          </button>

          <button
              @click="changePage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="px-3 py-2 text-sm border border-gray-300 rounded-lg flex items-center"
              :class="currentPage === totalPages ? 'text-gray-500 bg-gray-100 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'"
          >
            下一页
            <i class="fas fa-chevron-right ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from "@/components/agency/Header.vue";
import { useRouter } from "vue-router";
import { useToast } from '@/composables/useToast'
import { getSalesOpportunities, deleteSalesOpportunity } from '@/api/customer'

const router = useRouter();
const { successToast, errorToast } = useToast();

// 数据状态
const opportunityList = ref([])
const loading = ref(false)
const total = ref(0)

// 分页参数
const currentPage = ref(1)
const pageSize = ref(10)
const totalPages = ref(0)

// 搜索参数
const searchParams = ref({
  customerName: '',
  phoneNumber: '',
  productType: ''
})

// 产品类型映射
const productTypeMap = {
  fund: { name: '基金投资', class: 'bg-blue-100 text-blue-800' },
  stock: { name: '股票投资', class: 'bg-purple-100 text-purple-800' },
  bond: { name: '债券投资', class: 'bg-red-100 text-red-800' },
  insurance: { name: '保险产品', class: 'bg-pink-100 text-pink-800' },
  finance: { name: '理财产品', class: 'bg-yellow-100 text-yellow-800' },
  trust: { name: '信托产品', class: 'bg-indigo-100 text-indigo-800' },
  private: { name: '私募基金', class: 'bg-indigo-100 text-indigo-800' },
  other: { name: '其他产品', class: 'bg-indigo-100 text-indigo-800' }
}

// 投资时间意向映射
const investmentTimeMap = {
  'immediate': '立即投资',
  '1week': '1周内',
  '1month': '1个月内',
  '3months': '3个月内',
  '6months': '6个月内',
  '1year': '1年内'
}

// 创建新销售机会
const createNewOpportunity = () => {
  router.push('/agency/salesOpportunity')
}

// 查看销售机会详情
const viewOpportunity = (id) => {
  // 跳转到详情页面，并通过查询参数传递ID
  router.push(`/agency/salesOpportunityDetail?id=${id}`);
};

// 编辑销售机会
const editOpportunity = (id) => {
  // 跳转到编辑页面，并通过查询参数传递ID
  router.push(`/agency/salesOpportunity?id=${id}`);
};

// 删除销售机会
const deleteOpportunity = async (id) => {
  if (!confirm('确定要删除这个销售机会吗？')) return

  try {
    const response = await deleteSalesOpportunity(id)
    if (response.code === 200) {
      successToast('删除成功')
      fetchOpportunities() // 重新加载列表
    } else {
      errorToast(response.msg || '删除失败')
    }
  } catch (error) {
    console.error('删除销售机会失败:', error)
    errorToast('删除失败，请重试')
  }
}

// 重置搜索条件
const resetSearch = () => {
  searchParams.value = {
    fullName: '',
    email: '',
    phoneNumber: '',
    productType: ''
  }
  currentPage.value = 1
  fetchOpportunities()
}

// 搜索销售机会
const searchOpportunities = () => {
  currentPage.value = 1
  fetchOpportunities()
}

// 获取产品类型名称
const getProductTypeName = (productTypeId) => {
  return productTypeMap[productTypeId]?.name || '未知产品'
}

// 获取产品类型样式类
const getProductTypeClass = (productTypeId) => {
  return productTypeMap[productTypeId]?.class || 'bg-gray-100 text-gray-800'
}

// 获取投资时间意向标签
const getInvestmentTimeLabel = (timeValue) => {
  return investmentTimeMap[timeValue] || timeValue
}

// 格式化金额
const formatCurrency = (amount) => {
  if (!amount) return '0.00'
  return parseFloat(amount).toFixed(2)
}

// 格式化日期
const formatDate = (dateString) => {
  if (!dateString) return '-'
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN')
}

// 获取分页数组
const pageNumbers = () => {
  const pages = []
  const maxVisiblePages = 5
  let startPage = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2))
  let endPage = startPage + maxVisiblePages - 1

  if (endPage > totalPages.value) {
    endPage = totalPages.value
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return pages
}

// 改变页码
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  fetchOpportunities()
}

// 获取销售机会列表
const fetchOpportunities = async () => {
  try {
    loading.value = true

    const params = {
      pageNum: currentPage.value,
      pageSize: pageSize.value,
      customerName: searchParams.value.customerName,
      phoneNumber: searchParams.value.phoneNumber,
      productType: searchParams.value.productType
    }

    const response = await getSalesOpportunities(params)

    if (response.code === 200) {
      opportunityList.value = response.rows || response.data.records || []
      total.value = response.total || 0
      totalPages.value = Math.ceil(total.value / pageSize.value)
    } else {
      errorToast(response.msg || '获取销售机会列表失败')
    }
  } catch (error) {
    console.error('获取销售机会列表失败:', error)
    errorToast('获取销售机会列表失败')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchOpportunities()
})
</script>

<style scoped>
</style>
