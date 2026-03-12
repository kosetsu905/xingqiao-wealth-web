<template>
  <!-- Header -->
  <Header/>

  <main id="main-content" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div id="page-header" class="mb-8">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-3xl font-bold text-gray-900">销售机会详情</h2>
          <p class="text-gray-600 mt-2">查看销售机会的详细信息</p>
        </div>
        <button class="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center space-x-2 text-gray-700"
                @click="goBack">
          <i class="fa-solid fa-arrow-left"></i>
          <span>返回列表</span>
        </button>
      </div>
    </div>

    <div id="opportunity-detail" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <!-- Loading遮罩 -->
      <div v-if="loading" class="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-xl">
        <div class="text-center">
          <i class="fas fa-spinner fa-spin text-2xl text-blue-600"></i>
          <p class="mt-2 text-gray-600">加载中...</p>
        </div>
      </div>

      <!-- 客户信息部分 -->
      <div id="client-info-section" class="space-y-6 mb-8">
        <div class="flex items-center space-x-3 mb-6">
          <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <i class="fa-solid fa-user text-white text-sm"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900">客户信息</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div id="client-name-field">
            <label class="block text-sm font-medium text-gray-700 mb-2">客户姓名</label>
            <div class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50">
              {{ opportunityData.fullName || '-' }}
            </div>
          </div>
          <div id="contact-field">
            <label class="block text-sm font-medium text-gray-700 mb-2">手机号码</label>
            <div class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50">
              {{ opportunityData.phoneNumber || '-' }}
            </div>
          </div>
          <div id="contact-field">
            <label class="block text-sm font-medium text-gray-700 mb-2">邮箱地址</label>
            <div class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50">
              {{ opportunityData.email || '-' }}
            </div>
          </div>
        </div>
      </div>

      <!-- 投资信息部分 -->
      <div id="investment-info-section" class="space-y-6 mb-8">
        <div class="flex items-center space-x-3 mb-6">
          <div class="w-8 h-8 bg-secondary1 rounded-full flex items-center justify-center">
            <i class="fa-solid fa-coins text-white text-sm"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900">投资信息</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div id="investment-amount-field">
            <label class="block text-sm font-medium text-gray-700 mb-2">投资金额</label>
            <div class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50">
              ¥{{ formatCurrency(opportunityData.investmentAmount) }}
            </div>
          </div>
          <div id="intent-time-field">
            <label class="block text-sm font-medium text-gray-700 mb-2">投资时间意向</label>
            <div class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50">
              {{ getInvestmentTimeLabel(opportunityData.investmentTimeIntent) }}
            </div>
          </div>
        </div>
      </div>

      <!-- 产品信息部分 -->
      <div id="product-info-section" class="space-y-6 mb-8">
        <div class="flex items-center space-x-3 mb-6">
          <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <i class="fa-solid fa-briefcase text-white text-sm"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900">产品信息</h3>
        </div>

        <div id="financial-product-field">
          <label class="block text-sm font-medium text-gray-700 mb-2">感兴趣的金融产品</label>
          <div class="flex flex-wrap gap-2">
            <span
                v-for="productType in opportunityData.interestedProducts"
                :key="productType"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                :class="getProductTypeClass(productType)"
            >
              {{ getProductTypeName(productType) }}
            </span>
            <div v-if="!opportunityData.interestedProducts || opportunityData.interestedProducts.length === 0"
                 class="text-gray-500">
              暂无感兴趣的产品
            </div>
          </div>
        </div>
      </div>

      <!-- 备注信息部分 -->
      <div id="notes-section" class="space-y-6">
        <div class="flex items-center space-x-3 mb-6">
          <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <i class="fa-solid fa-note-sticky text-white text-sm"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900">备注信息</h3>
        </div>

        <div id="notes-field">
          <label class="block text-sm font-medium text-gray-700 mb-2">备注</label>
          <div class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 min-h-24">
            {{ opportunityData.remarks || '无备注信息' }}
          </div>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div id="form-actions" class="flex justify-end pt-6 border-t border-gray-200 mt-8">
        <button
            @click="goBack"
            class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          返回列表
        </button>
        <button
            @click="goToEdit"
            class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 ml-4"
        >
          <i class="fas fa-edit"></i>
          <span>编辑</span>
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from "@/components/agency/Header.vue";
import { useRouter, useRoute } from "vue-router";
import { useToast } from '@/composables/UseToast.js'
import { getSalesOpportunityDetail } from '@/api/employee.js'

const router = useRouter();
const route = useRoute();
const { errorToast } = useToast();

// 数据状态
const opportunityData = ref({
  id: null,
  fullName: '',
  phoneNumber: '',
  email: '',
  investmentAmount: null,
  investmentTimeIntent: '',
  interestedProducts: [],
  remarks: ''
});

const loading = ref(false);

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
};

// 投资时间意向映射
const investmentTimeMap = {
  'immediate': '立即投资',
  '1week': '1周内',
  '1month': '1个月内',
  '3months': '3个月内',
  '6months': '6个月内',
  '1year': '1年内'
};

// 返回上一页
function goBack() {
  router.push("/agency/salesOpportunityList");
}

// 跳转到编辑页面
function goToEdit() {
  router.push(`/agency/salesOpportunity?id=${opportunityData.value.id}`);
}

// 获取产品类型名称
const getProductTypeName = (productTypeId) => {
  return productTypeMap[productTypeId]?.name || '未知产品';
};

// 获取产品类型样式类
const getProductTypeClass = (productTypeId) => {
  return productTypeMap[productTypeId]?.class || 'bg-gray-100 text-gray-800';
};

// 获取投资时间意向标签
const getInvestmentTimeLabel = (timeValue) => {
  return investmentTimeMap[timeValue] || timeValue || '-';
};

// 格式化金额
const formatCurrency = (amount) => {
  if (!amount) return '0.00';
  return parseFloat(amount).toFixed(2);
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
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        investmentAmount: data.investmentAmount,
        investmentTimeIntent: data.investmentTimeIntent,
        interestedProducts: data.investmentPreferences ?
            data.investmentPreferences.map(pref => pref.productType) : [],
        remarks: data.remarks
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

onMounted(() => {
  // 获取销售机会ID并加载详情
  const id = route.query.id;
  if (id) {
    fetchOpportunityDetail(id);
  } else {
    errorToast('缺少销售机会ID');
    router.push("/agency/salesOpportunityList");
  }
});
</script>

<style scoped>
</style>
