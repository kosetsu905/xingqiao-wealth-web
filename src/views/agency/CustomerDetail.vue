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
            <i class="fas fa-user-circle text-blue-600 text-xl"></i>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-900">客户详情</h2>
            <p class="text-sm text-gray-600">查看客户详细信息</p>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <button
              @click="goBack"
              class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            返回
          </button>
          <button
              @click="editClient"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            编辑客户
          </button>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
      <i class="fas fa-spinner fa-spin text-blue-600 text-2xl"></i>
      <p class="text-gray-500 mt-2">加载中...</p>
    </div>

    <!-- Customer Detail Content -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column - Basic Info -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Basic Information -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">基本信息</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-500">姓名</label>
              <p class="mt-1 text-sm text-gray-900">{{ customerInfo.fullName || '-' }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-500">年龄</label>
              <p class="mt-1 text-sm text-gray-900">{{ customerInfo.age ? customerInfo.age + '岁' : '-' }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-500">性别</label>
              <p class="mt-1 text-sm text-gray-900">{{ customerInfo.gender === '1' ? '男' : customerInfo.gender === '2' ? '女' : '-' }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-500">手机号</label>
              <p class="mt-1 text-sm text-gray-900">{{ customerInfo.phoneNumber || '-' }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-500">邮箱</label>
              <p class="mt-1 text-sm text-gray-900">{{ customerInfo.email || '-' }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-500">婚姻状况</label>
              <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1"
                  :class="getMaritalStatusClass(customerInfo.maritalStatus)"
              >
                {{ getMaritalStatusLabel(customerInfo.maritalStatus) }}
              </span>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-500">子女数量</label>
              <p class="mt-1 text-sm text-gray-900">{{ customerInfo.childCount || '-' }}</p>
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-500">地址</label>
              <p class="mt-1 text-sm text-gray-900">{{ customerInfo.address || '-' }}</p>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">财务信息</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-500">家庭总资产 (万元)</label>
              <p class="mt-1 text-sm text-gray-900">{{ customerFinancial.familyTotalAsset || '-' }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-500">家庭负债 (万元)</label>
              <p class="mt-1 text-sm text-gray-900">{{ customerFinancial.familyDebt || '-' }}</p>
            </div>
            <div >
              <label class="block text-sm font-medium text-gray-500">家庭年收入 (万元)</label>
              <p class="mt-1 text-sm text-gray-900">{{ customerFinancial.familyAnnualIncome || '-' }}</p>
            </div>
            <div >
              <label class="block text-sm font-medium text-gray-500">新投资额度 (万元)</label>
              <p class="mt-1 text-sm text-gray-900">{{ customerFinancial.newInvestmentAmount || '-' }}</p>
            </div>
          </div>
        </div>

        <!-- Investment Preferences -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">投资偏好</h3>
          <div class="flex flex-wrap gap-2">
            <span
                v-for="preference in interestedProducts"
                :key="preference.productType"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                :class="getProductTypeClass(preference.productType)"
            >
              {{ getProductTypeName(preference.productType) }}
            </span>
            <p v-if="!interestedProducts || interestedProducts.length === 0" class="text-gray-500 text-sm">
              暂无投资偏好信息
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column - Additional Info -->
      <div class="space-y-6">
        <!-- System Info -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">系统信息</h3>
          <div class="space-y-3">
            <div>
              <label class="block text-sm font-medium text-gray-500">客户ID</label>
              <p class="mt-1 text-sm text-gray-900">{{ customerInfo.id || '-' }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-500">创建时间</label>
              <p class="mt-1 text-sm text-gray-900">{{ formatDate(customerInfo.createTime) }}</p>
            </div>
          </div>
        </div>

        <!-- Notes -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">备注</h3>
          <div class="text-sm text-gray-900 whitespace-pre-wrap">
            {{ customerInfo.remark || '暂无备注信息' }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from "@/components/agency/Header.vue"
import { useToast } from '@/composables/useToast'
import { getCustomerInfo } from '@/api/customer'

const route = useRoute()
const router = useRouter()
const { errorToast } = useToast()


// 客户基本信息
const customerInfo = ref({
  id: null,
  fullName: '',
  age: '',
  gender: '',
  phoneNumber: '',
  email: '',
  maritalStatus: '',
  childCount: 0,
  address: '',
  remark: '',
  createTime:null
})

// 客户财务信息
const customerFinancial = ref({
  familyTotalAsset: 0,
  familyDebt: 0,
  familyAnnualIncome: 0,
  newInvestmentAmount: 0
})

// 感兴趣的产品类型（数组）
const interestedProducts = ref([])

const loading = ref(false)

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
  return date.toLocaleDateString('zh-CN') + ' ' + date.toLocaleTimeString('zh-CN')
}

// 返回上一页
const goBack = () => {
  router.go(-1)
}

// 编辑客户
const editClient = () => {
  router.push({
    path: '/agency/customerInfo',
    query: { id: customerInfo.value.id }
  })
}

// 获取客户详情
const fetchCustomerInfo = async (id) => {
  try {
    loading.value = true
    const response = await getCustomerInfo(id)
    if (response.code === 200) {
      customerInfo.value  = response.data.customerInfo
      customerFinancial.value = response.data.customerFinancial
      interestedProducts.value = response.data.investmentPreferences
    } else {
      errorToast(response.msg || '获取客户详情失败')
    }
  } catch (error) {
    console.error('获取客户详情失败:', error)
    errorToast('获取客户详情失败')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (route.query.id) {
    fetchCustomerInfo(route.query.id)
  } else {
    errorToast('缺少客户ID参数')
    router.push('/agency/customerList')
  }
})
</script>

<style scoped>
</style>
