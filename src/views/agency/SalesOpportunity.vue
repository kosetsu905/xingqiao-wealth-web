<template>
  <!-- Header -->
  <Header/>

  <main id="main-content" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div id="page-header" class="mb-8">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-3xl font-bold text-gray-900">{{ isEditMode ? '编辑销售机会' : '创建销售机会' }}</h2>
          <p class="text-gray-600 mt-2">{{ isEditMode ? '编辑现有销售机会信息' : '填写客户信息和投资意向，创建新的销售机会' }}</p>
        </div>
        <button class="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center space-x-2 text-gray-700"
                @click="goBack">
          <i class="fa-solid fa-arrow-left"></i>
          <span>返回列表</span>
        </button>
      </div>
    </div>

    <div id="opportunity-form" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <form class="space-y-8" @submit.prevent="submitOpportunity">
        <div id="client-info-section" class="space-y-6">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <i class="fa-solid fa-user text-white text-sm"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-900">客户信息</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
                v-model="opportunityData.id"
                type="text"
                hidden="hidden"
            />
            <input
                v-model="opportunityData.userTempId"
                type="text"
                hidden="hidden"
            />
            <div id="client-name-field">
              <label class="block text-sm font-medium text-gray-700 mb-2">客户姓名 *</label>
              <input
                  v-model="opportunityData.fullName"
                  type="text"
                  placeholder="请输入客户姓名"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  :disabled="loading"
                  required
              >
            </div>
            <div id="contact-field">
              <label class="block text-sm font-medium text-gray-700 mb-2">手机号码</label>
              <input
                  v-model="opportunityData.phoneNumber"
                  type="text"
                  placeholder="手机号码"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  :disabled="loading"
              >
            </div>
            <div id="contact-field">
              <label class="block text-sm font-medium text-gray-700 mb-2">邮箱地址</label>
              <input
                  v-model="opportunityData.email"
                  type="text"
                  placeholder="邮箱地址"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  :disabled="loading"
              >
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
                <input
                    v-model.number="opportunityData.investmentAmount"
                    type="number"
                    placeholder="0.00"
                    class="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    :disabled="loading"
                    required
                    min="0"
                    step="0.01"
                >
              </div>
            </div>
            <div id="intent-time-field">
              <label class="block text-sm font-medium text-gray-700 mb-2">投资时间意向 *</label>
              <select
                  v-model="opportunityData.investmentTimeIntent"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  :disabled="loading"
                  required
              >
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
              <label
                  v-for="product in productOptions"
                  :key="product.value"
                  class="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
                  :class="{'bg-blue-50 border-blue-300': opportunityData.interestedProducts.includes(product.value)}"
              >
                <input
                    v-model="opportunityData.interestedProducts"
                    type="checkbox"
                    :value="product.value"
                    class="text-primary focus:ring-primary"
                    :disabled="loading"
                >
                <span class="text-sm">{{ product.label }}</span>
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
            <textarea
                v-model="opportunityData.remark"
                rows="4"
                placeholder="请输入相关备注信息，如客户特殊需求、风险偏好、投资经验等..."
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                :disabled="loading"
            ></textarea>
          </div>
        </div>

        <div id="form-actions" class="flex items-center justify-between pt-6 border-t border-gray-200">
          <div class="flex items-center space-x-2 text-sm text-gray-500">
            <i class="fa-solid fa-info-circle"></i>
            <span>带 * 号的字段为必填项</span>
          </div>
          <div class="flex items-center space-x-4">
            <button
                type="button"
                class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                :disabled="loading"
                @click="goBack"
            >
              取消
            </button>
            <button
                type="button"
                class="px-6 py-3 bg-gray-200 text-gray-500 rounded-lg"
                :disabled="loading"
                @click="saveDraft"
            >
              保存草稿
            </button>
            <button
                type="submit"
                class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 disabled:opacity-50"
                :disabled="loading || isSubmitting"
            >
              <i v-if="isSubmitting" class="fa-solid fa-spinner fa-spin"></i>
              <i v-else class="fa-solid fa-plus"></i>
              <span>{{ isSubmitting ? '提交中...' : (isEditMode ? '更新机会' : '创建机会') }}</span>
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- Loading遮罩 -->
    <div v-if="loading" class="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-xl">
      <div class="text-center">
        <i class="fas fa-spinner fa-spin text-2xl text-blue-600"></i>
        <p class="mt-2 text-gray-600">加载中...</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from "@/components/agency/Header.vue";
import { useRouter, useRoute } from "vue-router";
import { useToast } from '@/composables/useToast'
import { createSalesOpportunity, getSalesOpportunityDetail, updateSalesOpportunity } from '@/api/customer'

const router = useRouter();
const route = useRoute();
const { successToast, errorToast } = useToast();

// 检查是否为编辑模式
const isEditMode = ref(false);
const opportunityId = ref(null);

// 表单数据
const opportunityData = ref({
  id: null,
  userTempId: null,
  fullName: '',
  phoneNumber: '',
  email: '',
  investmentAmount: null,
  investmentTimeIntent: '',
  interestedProducts: [],
  remark: ''
});

// 状态管理
const loading = ref(false);
const isSubmitting = ref(false);

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

// 缓存键名
const DRAFT_CACHE_KEY = 'salesOpportunityDraft';

// 返回上一页
function goBack() {
  router.push("/agency/salesOpportunityList");
}

// 保存草稿到缓存
const saveDraftToCache = () => {
  try {
    const draftData = {
      opportunityData: opportunityData.value,
      timestamp: new Date().getTime()
    };
    localStorage.setItem(DRAFT_CACHE_KEY, JSON.stringify(draftData));
  } catch (error) {
    console.error('保存草稿到缓存失败:', error);
  }
};

// 从缓存中恢复草稿
const loadDraftFromCache = () => {
  try {
    const cachedData = localStorage.getItem(DRAFT_CACHE_KEY);
    if (cachedData) {
      const draftData = JSON.parse(cachedData);

      // 检查缓存是否过期（例如超过24小时视为过期）
      const now = new Date().getTime();
      const oneDay = 24 * 60 * 60 * 1000;
      if (now - draftData.timestamp < oneDay) {
        // 恢复数据
        opportunityData.value = {...opportunityData.value, ...draftData.opportunityData};
      } else {
        // 缓存过期，清除缓存
        localStorage.removeItem(DRAFT_CACHE_KEY);
      }
    }
  } catch (error) {
    console.error('从缓存恢复草稿失败:', error);
  }
};

// 清除缓存中的草稿
const clearDraftCache = () => {
  localStorage.removeItem(DRAFT_CACHE_KEY);
};

// 保存草稿
const saveDraft = async () => {
  try {
    loading.value = true;

    // 保存到本地缓存
    saveDraftToCache();

    successToast('草稿已保存');
  } catch (error) {
    console.error('保存草稿失败:', error);
    errorToast('保存草稿失败');
  } finally {
    loading.value = false;
  }
};

// 获取销售机会详情
const fetchOpportunityDetail = async (id) => {
  try {
    loading.value = true;

    const response = await getSalesOpportunityDetail(id);

    if (response.code === 200) {
      const data = response.data;

      // 填充表单数据
      opportunityData.value = {
        id: data.id,
        userTempId: data.userTempId,
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        investmentAmount: data.investmentAmount,
        investmentTimeIntent: data.investmentTimeIntent,
        interestedProducts: data.investmentPreferences ?
            data.investmentPreferences.map(pref => pref.productType) : [],
        remark: data.remark
      };
    } else {
      errorToast(response.msg || '获取销售机会详情失败');
    }
  } catch (error) {
    console.error('获取销售机会详情失败:', error);
    errorToast('获取销售机会详情失败');
  } finally {
    loading.value = false;
  }
};

// 提交销售机会
const submitOpportunity = async () => {
  // 基本验证
  if (!opportunityData.value.fullName) {
    errorToast('请输入客户姓名');
    return;
  }

  if (!opportunityData.value.investmentAmount || opportunityData.value.investmentAmount <= 0) {
    errorToast('请输入有效的投资金额');
    return;
  }

  if (!opportunityData.value.investmentTimeIntent) {
    errorToast('请选择投资时间意向');
    return;
  }

  if (opportunityData.value.interestedProducts.length === 0) {
    errorToast('请选择感兴趣的金融产品');
    return;
  }

  try {
    isSubmitting.value = true;

    // 构造提交数据
    const submitData = {
      ...opportunityData.value,
      interestedProducts: opportunityData.value.interestedProducts.map(productType => ({
        productType: productType
      }))
    };

    let response;

    if (isEditMode.value) {
      // 编辑模式 - 更新销售机会
      response = await updateSalesOpportunity(submitData);
    } else {
      // 创建模式 - 创建销售机会
      response = await createSalesOpportunity(submitData);
    }

    if (response.code === 200) {
      // 提交成功后清除缓存
      clearDraftCache();
      successToast(isEditMode.value ? '销售机会更新成功' : '销售机会创建成功');
      // 返回列表页面
      await router.push('/agency/salesOpportunityList');
    } else {
      errorToast(response.msg || (isEditMode.value ? '更新销售机会失败' : '创建销售机会失败'));
    }
  } catch (error) {
    console.error('提交销售机会失败:', error);
    errorToast('提交失败，请重试');
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  // 检查是否为编辑模式 (通过查询参数)
  const id = route.query.id;
  if (id) {
    isEditMode.value = true;
    opportunityId.value = id;
    // 获取销售机会详情
    fetchOpportunityDetail(id);
  } else {
    // 页面加载时先尝试从缓存恢复数据
    loadDraftFromCache();
  }
});
</script>

<style scoped>
</style>
