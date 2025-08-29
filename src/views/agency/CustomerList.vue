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
            <span class="text-sm text-blue-700 font-medium">总客户数: {{ total }}</span>
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
                  v-model="fullName"
                  type="text"
                  placeholder="请输入客户姓名"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  @keyup.enter="searchCustomers"
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
                  v-model="phoneNumber"
                  type="text"
                  placeholder="请输入手机号"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  @keyup.enter="searchCustomers"
              >
            </div>
          </div>

          <!-- 邮箱搜索 -->
          <div class="relative">
            <label class="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fas fa-envelope text-gray-400"></i>
              </div>
              <input
                  v-model="email"
                  type="text"
                  placeholder="请输入邮箱"
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  @keyup.enter="searchCustomers"
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
              @click="searchCustomers"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <i class="fas fa-search mr-2"></i>
            查询
          </button>
          <!-- 新增的邀请按钮 -->
          <button
              @click="sendEmailInvitation"
              :disabled="selectedCustomers.length === 0"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i class="fas fa-envelope mr-2"></i>
            邮件邀请
          </button>
          <button
              @click="sendSmsInvitation"
              :disabled="selectedCustomers.length === 0"
              class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i class="fas fa-sms mr-2"></i>
            短信邀请
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
            <!-- 添加复选框列 -->
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input
                  type="checkbox"
                  :checked="selectedCustomers.length > 0 && selectedCustomers.length === customerList.length"
                  @change="toggleSelectAll"
                  class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              >
            </th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">客户信息</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">联系方式</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">婚姻状况</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">兴趣产品</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">已购产品</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
            <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="customer in customerList" :key="customer.id" class="hover:bg-gray-50">
            <!-- 添加复选框 -->
            <td class="px-6 py-4 whitespace-nowrap">
              <input
                  type="checkbox"
                  :checked="selectedCustomers.includes(customer.userTempId)"
                  @change="toggleCustomerSelection(customer.id)"
                  class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              >
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <i class="fas fa-user text-gray-500"></i>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-900">{{ customer.fullName }}</div>
                  <div class="text-sm text-gray-500">{{ customer.age }}岁 / {{ customer.gender === '1' ? '男' : '女' }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ customer.phoneNumber }}</div>
              <div class="text-sm text-gray-500">{{ customer.email }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  :class="getMaritalStatusClass(customer.maritalStatus)"
              >
                {{ getMaritalStatusLabel(customer.maritalStatus) }}
              </span>
            </td>
            <td class="px-6 py-4">
              <div class="flex flex-wrap gap-1">
                <span
                    v-for="preference in customer.investmentPreferences"
                    :key="preference.productType"
                    class="inline-flex items-center px-2 py-1 rounded text-xs font-medium"
                    :class="getProductTypeClass(preference.productType)"
                >
                  {{ getProductTypeName(preference.productType) }}
                </span>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-500">暂无购买</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ formatDate(customer.createTime) }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button @click="viewClient(customer.id)" class="text-blue-600 hover:text-blue-900 mr-3">
                <i class="fas fa-eye"></i>
              </button>
              <button @click="editClient(customer.id)" class="text-green-600 hover:text-green-900 mr-3">
                <i class="fas fa-edit"></i>
              </button>
              <button @click="deleteClient(String(customer.userTempId))" class="text-red-600 hover:text-red-900">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
          </tbody>
        </table>

        <!-- Empty state -->
        <div v-if="customerList.length === 0 && !loading" class="text-center py-12">
          <i class="fas fa-users text-gray-300 text-4xl mb-4"></i>
          <p class="text-gray-500">暂无客户数据</p>
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
          显示 <span class="font-medium">{{ (currentPage - 1) * pageSize + 1 }}</span> 到 <span class="font-medium">{{ Math.min(currentPage * pageSize, total) }}</span> 条，共 <span class="font-medium">{{ total }}</span> 条记录
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
import { useRouter } from 'vue-router';
import { useToast } from '@/composables/useToast'
import {deleteCustomerInfo, getCustomerList} from '@/api/customer'
import {sendInviteMessageBatch} from "@/api/message.js";

const router = useRouter();
const { successToast,errorToast } = useToast()

// 数据状态
const customerList = ref([])
const loading = ref(false)
const total = ref(0)

// 分页参数
const currentPage = ref(1)
const pageSize = ref(10)
const totalPages = ref(0)
const fullName = ref('')

// 搜索条件
const email = ref('')
const phoneNumber = ref('')

// 选中的客户
const selectedCustomers = ref([])

// 重置搜索条件
const resetSearch = () => {
  fullName.value = ''
  phoneNumber.value = ''
  email.value = ''
  currentPage.value = 1
}

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


// 婚姻状况映射
const maritalStatusMap = {
  'MARRIED': { label: '已婚', class: 'bg-green-100 text-green-800' },
  'SINGLE': { label: '未婚', class: 'bg-gray-100 text-gray-800' },
  'DIVORCED': { label: '离异', class: 'bg-orange-100 text-orange-800' },
  'WIDOWED': { label: '丧偶', class: 'bg-purple-100 text-purple-800' }
}

const addNewClient = () => {
  router.push({
    path: '/agency/customerInfo'
  })
}

const viewClient = (id) => {
  console.log('viewClient', id)
  // 实现查看客户详情逻辑
  router.push({
    path: '/agency/customerDetail',
    query: { id: id }
  })
}

const editClient = (id) => {
  console.log('editClient', id)
  // 实现编辑客户逻辑
  router.push({
    path: '/agency/customerInfo',
    query: { id: id }
  })
}

const deleteClient = async (userTempId) =>  {
  console.log('deleteClient', userTempId)
  // 实现删除客户逻辑
  if (!confirm('确定要删除该客户吗？')) return

  try {
    const response = await deleteCustomerInfo(userTempId)
    if (response.code === 200) {
      successToast('删除成功')
      await fetchCustomerList() // 重新加载列表
    } else {
      errorToast(response.msg || '删除失败')
    }
  } catch (error) {
    console.error('删除销售机会失败:', error)
    errorToast('删除失败，请重试')
  }
}

// 发送邮件邀请
const sendEmailInvitation = async () => {
  if (selectedCustomers.value.length === 0) return;
  // 这里添加发送邮件邀请的逻辑
  console.log('发送邮件邀请给:', selectedCustomers.value);
  const inviteList={
    idList:selectedCustomers.value,
    type: "2"
  }
  // alert(`将向 ${selectedCustomers.value.length} 位客户发送邮件邀请`);
  // 实际项目中应该调用相应的API sendInviteMessageBatch
  const response = await  sendInviteMessageBatch(inviteList)
  if (response.code === 200) {
    successToast('发送成功')
  }
}

// 发送短信邀请
const sendSmsInvitation = async () => {
  if (selectedCustomers.value.length === 0) return;
  // 这里添加发送短信邀请的逻辑
  console.log('发送短信邀请给:', selectedCustomers.value);
  alert(`将向 ${selectedCustomers.value.length} 位客户发送短信邀请`);
  const inviteList={
    idList:selectedCustomers.value,
    type: "1"
  }
  const response = await  sendInviteMessageBatch(inviteList)
  if (response.code === 200) {
    successToast('发送成功')
  }
}

// 切换客户选择
const toggleCustomerSelection = (id) => {
  const index = selectedCustomers.value.indexOf(id);
  if (index === -1) {
    selectedCustomers.value.push(id);
  } else {
    selectedCustomers.value.splice(index, 1);
  }
}

// 全选/取消全选
const toggleSelectAll = () => {
  if (selectedCustomers.value.length === customerList.value.length) {
    // 如果已经全选，则取消全选
    selectedCustomers.value = [];
  } else {
    // 否则全选所有客户
    selectedCustomers.value = customerList.value.map(customer => customer.userTempId);
  }
}

// 获取产品类型名称
const getProductTypeName = (productTypeId) => {
  return productTypeMap[productTypeId]?.name || '未知产品'
}

// 获取产品类型样式类
const getProductTypeClass = (productTypeId) => {
  return productTypeMap[productTypeId]?.class || 'bg-gray-100 text-gray-800'
}

// 获取婚姻状况标签
const getMaritalStatusLabel = (status) => {
  return maritalStatusMap[status]?.label || '未知'
}

// 获取婚姻状况样式类
const getMaritalStatusClass = (status) => {
  return maritalStatusMap[status]?.class || 'bg-gray-100 text-gray-800'
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
  fetchCustomerList()
}

// 搜索客户
const searchCustomers = () => {
  currentPage.value = 1
  fetchCustomerList()
}

// 获取客户列表
const fetchCustomerList = async () => {
  try {
    loading.value = true
    const params = {
      pageNum: currentPage.value,
      pageSize: pageSize.value,
      fullName: fullName.value,
      email: email.value,
      phoneNumber: phoneNumber.value
    }

    const response = await getCustomerList(params)

    if (response.code === 200) {
      customerList.value = response.rows
      total.value = response.total
      totalPages.value = Math.ceil(total.value / pageSize.value)
      loading.value = false
    } else {
      errorToast(response.msg || '获取客户列表失败')
    }
  } catch (error) {
    console.error('获取客户列表失败:', error)
    errorToast('获取客户列表失败')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchCustomerList()
})
</script>

<style scoped>
</style>
