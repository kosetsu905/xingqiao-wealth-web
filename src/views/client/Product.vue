<template>
  <!-- 顶部导航栏 -->
  <Header/>
  <!-- Investment Portfolio Section -->
  <div id="portfolio-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
    <div class="px-6 py-4 border-b border-gray-200">
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-semibold text-gray-800 flex items-center">
          <i class="fa-solid fa-chart-pie mr-2 text-primary"></i>
          投资产品组合
        </h2>
        <button
            @click="showAddDialog"
            class="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-dark transition">
          <i class="fa-solid fa-plus mr-2"></i>添加产品
        </button>
      </div>
    </div>
    <div class="p-3 md:p-6">
      <div class="overflow-x-auto -mx-2">
        <table class="w-full table-auto min-w-[600px] md:min-w-0">
          <thead>
          <tr class="bg-gray-50">
            <th class="w-32 md:w-48 px-4 py-3 text-left text-sm font-medium text-gray-700">产品类型</th>
            <th class="w-48 md:w-64 px-4 py-3 text-left text-sm font-medium text-gray-700">公司名称</th>
            <th class="w-32 md:w-36 px-4 py-3 text-left text-sm font-medium text-gray-700">投资金额</th>
            <th class="w-36 md:w-40 px-4 py-3 text-left text-sm font-medium text-gray-700">购买日期</th>
            <th class="w-36 md:w-40 px-4 py-3 text-left text-sm font-medium text-gray-700">到期日期</th>
            <th class="w-20 px-4 py-3 text-left text-sm font-medium text-gray-700">操作</th>
          </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
          <!-- Replace static rows with v-for -->
          <tr v-for="product in paginatedProducts" :key="product.id">
            <td class="px-4 py-3">
              <select v-model="product.type" class="w-40 md:w-48  px-2 py-1 border border-gray-300 rounded text-sm">
                <option>人寿保险</option>
                <option>投资基金</option>
                <option>定期存款</option>
                <option>现金产品</option>
                <option>股票债券</option>
              </select>
            </td>
            <td class="px-4 py-3">
              <input v-model="product.company" type="text" class="w-48 md:w-64  px-2 py-1 border border-gray-300 rounded text-sm" placeholder="公司名称">
            </td>
            <td class=" px-4 py-3">
              <input v-model="product.amount" type="number" class="w-32 md:w-36 px-2 py-1 border border-gray-300 rounded text-sm" placeholder="金额">
            </td>
            <td class=" px-4 py-3">
              <input v-model="product.purchaseDate" type="date" class="w-36 md:w-40 px-2 py-1 border border-gray-300 rounded text-sm">
            </td>
            <td class="px-4 py-3">
              <input v-model="product.expiryDate" type="date" class="w-36 md:w-40  px-2 py-1 border border-gray-300 rounded text-sm">
            </td>
            <!-- 表格行添加删除功能 -->
            <td class="w-20 px-4 py-3">
              <button
                  @click="deleteProduct(product.id)"
                  class="text-red-600 hover:text-red-800">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>

          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- 添加分页控件 -->
  <div class="p-4 border-t border-gray-200 flex justify-between items-center">
    <div class="text-sm text-gray-600">
      共 {{ totalProducts }} 条记录
    </div>
    <div class="flex space-x-2">
      <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-3 py-1 border rounded-md text-sm hover:bg-gray-50 disabled:opacity-50"
      >
        上一页
      </button>
      <span class="px-4 py-1 text-sm text-gray-700">
          {{ currentPage }} / {{ totalPages }}
        </span>
      <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-3 py-1 border rounded-md text-sm hover:bg-gray-50 disabled:opacity-50"
      >
        下一页
      </button>
    </div>
  </div>

  <!-- 添加产品弹窗 -->
  <div v-if="dialogVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg w-full max-w-md p-6">
      <h3 class="text-lg font-semibold mb-4">新增投资产品</h3>
      <form @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">产品类型</label>
            <select v-model="newProduct.type" class="w-full px-3 py-2 border rounded-md">
              <option v-for="type in productTypes" :key="type" :value="type">{{ type }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">公司名称</label>
            <input v-model="newProduct.company" type="text" required
                   class="w-full px-3 py-2 border rounded-md">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">投资金额</label>
            <input v-model.number="newProduct.amount" type="number" required
                   class="w-full px-3 py-2 border rounded-md">
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">购买日期</label>
              <input v-model="newProduct.purchaseDate" type="date"
                     class="w-full px-3 py-2 border rounded-md">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">到期日期</label>
              <input v-model="newProduct.expiryDate" type="date"
                     class="w-full px-3 py-2 border rounded-md">
            </div>
          </div>
        </div>
        <div class="mt-6 flex justify-end space-x-3">
          <button type="button" @click="dialogVisible = false"
                  class="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
            取消
          </button>
          <button type="submit"
                  class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
            确认添加
          </button>
        </div>
      </form>
    </div>
  </div>

</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import Header from "@/components/client/Header.vue";

// 添加 products 响应式数组声明
const products = ref<Array<{
  id: number;
  type: string;
  company: string;
  amount: number | null;
  purchaseDate: string;
  expiryDate: string;
}>>([]);

// 分页相关逻辑
const currentPage = ref(1);
const pageSize = ref(5);

const totalProducts = computed(() => products.value.length);
const totalPages = computed(() => Math.ceil(totalProducts.value / pageSize.value));

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return products.value.slice(start, end);
});

function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}

// 在现有代码中添加删除方法
function deleteProduct(productId: number) {
  const index = products.value.findIndex(p => p.id === productId);
  if (index !== -1) {
    products.value.splice(index, 1);
    // 删除后自动调整分页
    if (paginatedProducts.value.length === 0 && currentPage.value > 1) {
      currentPage.value--;
    }
  }
}


// 新增弹窗相关逻辑
const dialogVisible = ref(false);
const productTypes = ['人寿保险', '投资基金', '定期存款', '现金产品', '股票债券'];


const newProduct = ref({
  id: '',
  type: '人寿保险',
  company: '',
  amount: null,
  purchaseDate: '',
  expiryDate: ''
});



function showAddDialog() {
  newProduct.value = {
    id: '',
    type: '人寿保险',
    company: '',
    amount: null,
    purchaseDate: '',
    expiryDate: ''
  };
  dialogVisible.value = true;
}

function handleSubmit() {
  if (!newProduct.value.company || !newProduct.value.amount) {
    alert('请填写必填字段');
    return;
  }
  // 添加 ID 生成逻辑（示例使用时间戳）
  products.value.push({
    ...newProduct.value,
    id: Date.now()
  });
  // 关闭弹窗并重置表单
  dialogVisible.value = false;
  currentPage.value = 1;
}

</script>

<style scoped>

</STYLE>