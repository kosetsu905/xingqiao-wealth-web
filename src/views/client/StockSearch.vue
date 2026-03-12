<template>
  <div class="stock-search relative">
    <div class="relative">
      <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索股票代码或名称..."
          class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          @input="handleSearch"
          @focus="showDropdown = true"
          @blur="handleBlur"
          @keyup.enter="performSearch"
      >

      <!-- 加载指示器 -->
      <div v-if="loading" class="absolute right-8 top-1/2 transform -translate-y-1/2">
        <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
      </div>

      <!-- 搜索按钮 -->
      <button
          v-else
          @click="performSearch"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 focus:outline-none"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>

    <!-- 下拉列表 -->
    <div
        v-show="showDropdown && (searchResults.length > 0 || loading)"
        class="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
    >
      <!-- 加载状态 -->
      <div v-if="loading" class="py-4 flex justify-center">
        <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
      </div>

      <!-- 搜索结果 -->
      <div v-else>
        <div
            v-for="(stock, index) in searchResults"
            :key="index"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
            @mousedown="selectStock(stock)"
        >
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <span class="text-xs font-medium text-blue-800">{{ getInitials(stock.name) }}</span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-medium text-gray-900 truncate">{{ stock.name }}</div>
            <div class="text-xs text-gray-500">{{ stock.symbol }} | {{ stock.exchange }}</div>
          </div>
        </div>

        <!-- 无结果状态 -->
        <div
            v-if="searchResults.length === 0 && searchQuery.trim()"
            class="px-4 py-4 text-center text-gray-500"
        >
          未找到相关股票
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { finnhubService } from '@/plugins/FinnhubService.js'

// 定义响应式数据
const searchQuery = ref('')
const searchResults = ref([])
const showDropdown = ref(false)
const loading = ref(false)
const router = useRouter()

// 定义事件
const emit = defineEmits(['stock-selected'])

// 获取股票名称首字母
const getInitials = (name) => {
  if (!name) return ''
  return name.substring(0, 2).toUpperCase()
}

// 处理搜索
const handleSearch = () => {
  if (searchQuery.value.length >= 1) {
    // 添加防抖处理，避免输入过快导致请求过多
    clearTimeout(handleSearch.timeout)
    handleSearch.timeout = setTimeout(() => {
      performSearch()
    }, 300)
  } else {
    searchResults.value = []
  }
}

// 为防抖设置超时ID属性
handleSearch.timeout = null

// 执行搜索
const performSearch = async () => {
  if (!searchQuery.value.trim()) return

  loading.value = true

  try {
    const results = await finnhubService.searchStocks(searchQuery.value)
    searchResults.value = results
    showDropdown.value = true
  } catch (error) {
    console.error('搜索股票失败:', error)
    searchResults.value = []
  } finally {
    loading.value = false
  }
}

// 选择股票
const selectStock = (stock) => {
  searchQuery.value = stock.name
  showDropdown.value = false
  emit('stock-selected', stock)

  // 跳转到股票详情页面
  router.push({
    path: '/client/stockDetailView',
    query: {
      symbol: stock.symbol
    }
  })
}

// 处理失去焦点
const handleBlur = () => {
  // 使用setTimeout确保点击选项时能正确触发
  setTimeout(() => {
    showDropdown.value = false
  }, 200)
}
</script>

<style scoped>
.stock-search {
  position: relative;
}
</style>
