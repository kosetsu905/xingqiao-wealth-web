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
            <h2 class="text-2xl font-bold text-gray-900">{{  '新客户信息' }}</h2>
            <p class="text-sm text-gray-600">请填写完整的客户信息以建立客户档案</p>
          </div>
        </div>
      </div>

      <!-- Form Content -->
      <form id="customer-form" class="p-6" @submit.prevent="submitCustomerInfo">
        <!-- Personal Information Section -->
        <section id="personal-info-section" class="mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <i class="fas fa-user text-blue-600 mr-2"></i>
            个人基本信息
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">客户姓名 *</label>
              <input
                  v-model="customerInfo.fullName"
                  type="text"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请输入客户姓名"
                  :disabled="loading"
                  required
              >
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">年龄 *</label>
              <input
                  v-model="customerInfo.age"
                  type="number"
                  min="18"
                  max="100"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请输入年龄"
                  :disabled="loading"
                  required
              >
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">性别 *</label>
              <select
                  v-model="customerInfo.gender"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :disabled="loading"
                  required
              >
                <option value="">请选择性别</option>
                <option value="1">男</option>
                <option value="2">女</option>
              </select>
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">手机号码 *</label>
              <input
                  v-model="customerInfo.phoneNumber"
                  type="tel"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请输入手机号码"
                  :disabled="loading"
                  required
              >
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">电子邮箱</label>
              <input
                  v-model="customerInfo.email"
                  type="email"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请输入电子邮箱"
                  :disabled="loading"
              >
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">婚姻状况</label>
              <select
                  v-model="customerInfo.maritalStatus"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :disabled="loading"
              >
                <option value="">请选择婚姻状况</option>
                <option value="MARRIED">已婚</option>
                <option value="SINGLE">未婚</option>
                <option value="DIVORCED">离异</option>
                <option value="WIDOWED">丧偶</option>
              </select>
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">子女数量</label>
              <input
                  v-model="customerInfo.childCount"
                  type="number"
                  min="0"
                  max="10"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请输入子女数量"
                  :disabled="loading"
              >
            </div>
            <div class="col-span-1 md:col-span-2 lg:col-span-3">
              <label class="block text-sm font-medium text-gray-700 mb-2">地址</label>
              <textarea
                  v-model="customerInfo.address"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20"
                  placeholder="请输入详细地址"
                  :disabled="loading"
              ></textarea>
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
              <input
                  v-model.number="customerFinancial.familyTotalAsset"
                  type="number"
                  step="0.01"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请输入家庭总资产"
                  :disabled="loading"
              >
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">家庭负债 (万元)</label>
              <input
                  v-model.number="customerFinancial.familyDebt"
                  type="number"
                  step="0.01"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请输入家庭负债"
                  :disabled="loading"
              >
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">家庭年收入 (万元)</label>
              <input
                  v-model.number="customerFinancial.familyAnnualIncome"
                  type="number"
                  step="0.01"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请输入家庭年收入"
                  :disabled="loading"
              >
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">新投资额度 (万元)</label>
              <input
                  v-model.number="customerFinancial.newInvestmentAmount"
                  type="number"
                  step="0.01"
                  class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="请输入新投资额度"
                  :disabled="loading"
              >
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
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <label
                  v-for="product in productOptions"
                  :key="product.value"
                  class="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
                  :class="{'bg-blue-50 border-blue-300': interestedProducts.includes(product.value)}"
              >
                <input
                    v-model="interestedProducts"
                    type="checkbox"
                    :value="product.value"
                    class="text-primary focus:ring-primary"
                    :disabled="loading"
                >
                <span class="text-sm">{{ product.label }}</span>
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
            <textarea
                v-model="customerInfo.remark"
                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24"
                placeholder="请输入客户相关备注信息..."
                :disabled="loading"
            ></textarea>
          </div>
        </section>

        <!-- Form Actions -->
        <div id="form-actions" class="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
              type="button"
              @click="goBack()"
              class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              :disabled="loading"
          >
            <i class="fas fa-times mr-2"></i>
            取消
          </button>
          <button
              type="button"
              @click="saveDraft"
              class="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              :disabled="loading"
          >
            <i class="fas fa-save mr-2"></i>
            保存草稿
          </button>
          <button
              type="submit"
              :disabled="isSubmitting || loading"
              class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <i class="fas fa-check mr-2"></i>
            {{ isSubmitting ? '提交中...' : '提交客户信息' }}
          </button>
        </div>
      </form>

      <!-- Loading遮罩 -->
      <div v-if="loading" class="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-xl">
        <div class="text-center">
          <i class="fas fa-spinner fa-spin text-2xl text-blue-600"></i>
          <p class="mt-2 text-gray-600">加载中...</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import Header from "@/components/agency/Header.vue"
import {useToast} from '@/composables/useToast'
import {saveCustomerInfo, getCustomerInfo, updateCustomerInfo} from '@/api/employee.js'
const router = useRouter()
const route = useRoute()
const {successToast, errorToast} = useToast()


// 客户基本信息
const customerInfo = ref({
  fullName: '',
  age: '',
  gender: '',
  phoneNumber: '',
  email: '',
  maritalStatus: '',
  childCount: 0,
  address: '',
  remark: ''
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


// 产品选项
const productOptions = [
  { value: 'fund', label: '基金投资' },
  { value: 'stock', label: '股票投资' },
  { value: 'bond', label: '债券投资' },
  { value: 'insurance', label: '保险产品' },
  { value: 'finance', label: '理财产品' },
  { value: 'trust', label: '信托产品' },
  { value: 'private', label: '私募基金' },
  { value: 'other', label: '其他产品' }
];

// 提交状态
const isSubmitting = ref(false)
const loading = ref(false)

// 缓存键名
const DRAFT_CACHE_KEY = 'customerInfoDraft'


// 监听表单数据变化，自动保存到缓存
watch([customerInfo, customerFinancial, interestedProducts], () => {
  saveDraftToCache()
}, { deep: true })

// 返回上一页
const goBack = () => {
  router.go(-1)
}

// 保存草稿到缓存
const saveDraftToCache = () => {
  try {
    const draftData = {
      customerInfo: customerInfo.value,
      customerFinancial: customerFinancial.value,
      interestedProducts: interestedProducts.value,
      timestamp: new Date().getTime()
    }
    localStorage.setItem(DRAFT_CACHE_KEY, JSON.stringify(draftData))
  } catch (error) {
    console.error('保存草稿到缓存失败:', error)
  }
}

// 从缓存中恢复草稿
const loadDraftFromCache = () => {
  try {
    const cachedData = localStorage.getItem(DRAFT_CACHE_KEY)
    if (cachedData) {
      const draftData = JSON.parse(cachedData)

      // 检查缓存是否过期（例如超过24小时视为过期）
      const now = new Date().getTime()
      const oneDay = 24 * 60 * 60 * 1000
      if (now - draftData.timestamp < oneDay) {
        // 恢复数据
        customerInfo.value = { ...customerInfo.value, ...draftData.customerInfo }
        customerFinancial.value = { ...customerFinancial.value, ...draftData.customerFinancial }
        interestedProducts.value = [...draftData.interestedProducts]

      } else {
        // 缓存过期，清除缓存
        localStorage.removeItem(DRAFT_CACHE_KEY)
      }
    }
  } catch (error) {
    console.error('从缓存恢复草稿失败:', error)
  }
}

// 清除缓存中的草稿
const clearDraftCache = () => {
  localStorage.removeItem(DRAFT_CACHE_KEY)
}

// 保存草稿
const saveDraft = () => {
  saveDraftToCache()
  successToast('草稿已保存')
}

// 提交客户信息
const submitCustomerInfo = async () => {
  // 基本验证
  if (!customerInfo.value.fullName) {
    errorToast('请输入客户姓名')
    return
  }

  if (!customerInfo.value.age) {
    errorToast('请输入客户年龄')
    return
  }

  if (!customerInfo.value.gender) {
    errorToast('请选择客户性别')
    return
  }

  if (!customerInfo.value.phoneNumber) {
    errorToast('请输入客户手机号码')
    return
  }

  try {
    isSubmitting.value = true

    // 构造提交数据
    const submitData = {
      customerInfo: customerInfo.value,
      customerFinancial: customerFinancial.value,
      investmentPreferences: interestedProducts.value.map(productId => ({
        productType: productId
      }))
    }
    // 新增模式 - 保存客户信息
    let response= await saveCustomerInfo(submitData)
    if (response.code === 200) {
      // 提交成功后清除缓存
      clearDraftCache()
      successToast('客户信息提交成功')
    } else {
      errorToast(response.msg || ( '提交失败'))
    }
  } catch (error) {
    console.error('提交客户信息失败:', error)
    errorToast('提交失败，请重试')
  } finally {
    isSubmitting.value = false
  }
}

// 获取客户信息用于编辑
const fetchCustomerInfo = async (id) => {
  try {
    const response = await getCustomerInfo(id)
    if (response.code === 200) {
      customerInfo.value  = response.data.customerInfo
      customerFinancial.value = response.data.customerFinancial
      interestedProducts.value = response.data.investmentPreferences.map(pref => pref.productType)
    }
  } catch (error) {
    console.error('获取客户信息失败:', error)
  }
}


onMounted(() => {
  // 检查是否有传入的客户ID
  if (route.query.id) {
    fetchCustomerInfo(route.query.id)
  }else{
    // 页面加载时先尝试从缓存恢复数据
    loadDraftFromCache()
  }
})
</script>

<style scoped>
</style>
