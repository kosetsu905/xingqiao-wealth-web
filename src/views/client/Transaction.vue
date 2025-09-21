<template>

  <!-- Header -->
  <Header/>

  <div class="main bg-white text-black font-sans">
    <!-- 主内容区 -->
    <div class="ml-16 flex-1 px-6 pb-6">
      <header class="p-6 bg-white border-b border-gray-200">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="flex items-center">
            <button @click="goBack" class="mr-4 p-2 rounded-lg hover:bg-gray-100">
              <i class="text-gray-600" data-fa-i2svg="">
                <svg class="svg-inline--fa fa-arrow-left w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                  <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                </svg>
              </i>
            </button>
            <div>
              <h1 class="text-2xl font-semibold">
                交易中心
                <i class="text-blue-500 ml-1 fas fa-circle-check"></i>
              </h1>
              <p class="text-gray-500">
                {{ currentDate }}
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="relative mr-4">
              <input type="text" placeholder="搜索资产..."
                     class="bg-white border border-gray-300 rounded-lg px-4 py-2 pl-10 w-64
                                                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <i class="absolute left-3 top-3 text-gray-400 fas fa-magnifying-glass"></i>
            </div>
            <button class="bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 flex items-center text-white">
              <i class="mr-2 fas fa-plus"></i>
              <span>添加资产</span>
            </button>
          </div>
        </div>
      </header>
    </div>

    <!-- 主内容区 -->
    <div id="main-content" class="ml-16 px-6 pb-6 bg-gray-50 flex pt-6">
      <!-- 左侧内容 -->
      <div id="left-content" class="w-2/3 pr-6">
        <!-- 交易产品选择卡片 -->
        <div id="trade-selection" class="card-white rounded-lg p-6 mb-8">
          <h2 class="text-xl font-semibold mb-6 text-gray-800">选择交易产品</h2>

          <div class="grid grid-cols-4 gap-4 mb-6">
            <div @click="selectTab('stocks')" :class="{'bg-blue-100 text-blue-700': activeTab === 'stocks', 'bg-gray-100 text-gray-700 hover:bg-gray-200': activeTab !== 'stocks'}" class="p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors hover-lift">
              <i class="fa-solid fa-chart-line text-2xl mb-2"></i>
              <span class="font-medium">股票</span>
            </div>
            <div @click="selectTab('bonds')" :class="{'bg-blue-100 text-blue-700': activeTab === 'bonds', 'bg-gray-100 text-gray-700 hover:bg-gray-200': activeTab !== 'bonds'}" class="p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors hover-lift">
              <i class="fa-solid fa-file-contract text-2xl mb-2"></i>
              <span class="font-medium">债券</span>
            </div>
            <div @click="selectTab('etfs')" :class="{'bg-blue-100 text-blue-700': activeTab === 'etfs', 'bg-gray-100 text-gray-700 hover:bg-gray-200': activeTab !== 'etfs'}" class="p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors hover-lift">
              <i class="fa-solid fa-layer-group text-2xl mb-2"></i>
              <span class="font-medium">ETF</span>
            </div>
            <div @click="selectTab('funds')" :class="{'bg-blue-100 text-blue-700': activeTab === 'funds', 'bg-gray-100 text-gray-700 hover:bg-gray-200': activeTab !== 'funds'}" class="p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors hover-lift">
              <i class="fa-solid fa-piggy-bank text-2xl mb-2"></i>
              <span class="font-medium">基金</span>
            </div>
          </div>

          <!-- 搜索和地区筛选 -->
          <div class="flex mb-6 space-x-4">
            <div class="relative flex-1">
              <input type="text" placeholder="搜索股票代码或名称..." v-model="searchQuery" class="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <i class="fa-solid fa-search absolute left-3 top-3.5 text-gray-400"></i>
            </div>
            <div class="relative w-48">
              <select v-model="selectedMarket" class="appearance-none w-full bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700">
                <option>全球市场</option>
                <option>中国市场</option>
                <option>美国市场</option>
                <option>香港市场</option>
                <option>欧洲市场</option>
              </select>
              <i class="fa-solid fa-chevron-down absolute right-3 top-3.5 text-gray-400 pointer-events-none"></i>
            </div>
          </div>

          <!-- 热门股票列表 -->
          <!-- 热门股票列表 -->
          <div id="stock-list" class="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table class="w-full text-sm">
              <thead>
              <tr class="bg-gray-50">
                <th class="text-left p-4 font-medium text-muted">名称</th>
                <th class="text-left p-4 font-medium text-muted">代码</th>
                <th class="text-right p-4 font-medium text-muted">最新价</th>
                <th class="text-right p-4 font-medium text-muted">涨跌幅</th>
                <th class="text-center p-4 font-medium text-muted">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="stock in paginatedStocks" :key="stock.code" class="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors" @click="selectStock(stock)">
                <td class="p-4 flex items-center">
                  <div :class="stock.bgColor" class="w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    <span v-if="stock.text" class="text-xs font-bold text-white">{{ stock.text }}</span>
                    <i v-if="stock.icon" :class="stock.icon" class="text-white text-sm"></i>
                  </div>
                  <span class="text-gray-800">{{ stock.name }}</span>
                </td>
                <td class="p-4 text-muted">{{ stock.code }}</td>
                <td class="p-4 text-right font-medium text-gray-800">{{ stock.price }}</td>
                <td class="p-4 text-right" :class="stock.change >= 0 ? 'text-green-600' : 'text-red-600'">
                  {{ stock.change >= 0 ? '+' : '' }}{{ stock.change }}%
                </td>
                <td class="p-4 text-center">
                  <button class="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-xs text-white transition-colors" @click.stop="selectStock(stock)">选择</button>
                </td>
              </tr>
              </tbody>
            </table>

            <!-- 分页控件 -->
            <div class="flex justify-between items-center p-4 border-t border-gray-200">
              <div class="text-sm text-gray-500">
                显示第 {{ (currentPage - 1) * itemsPerPage + 1 }} - {{ Math.min(currentPage * itemsPerPage, filteredStocks.length) }} 条，
                共 {{ filteredStocks.length }} 条记录
              </div>
              <div class="flex space-x-2">
                <button
                    @click="prevPage"
                    :disabled="currentPage === 1"
                    class="px-3 py-1 border border-gray-300 rounded-md text-sm"
                    :class="currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'"
                >
                  上一页
                </button>
                <button
                    v-for="page in visiblePages"
                    :key="page"
                    @click="goToPage(page)"
                    class="px-3 py-1 text-sm rounded-md"
                    :class="currentPage === page ? 'bg-blue-500 text-white' : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'"
                >
                  {{ page }}
                </button>
                <button
                    @click="nextPage"
                    :disabled="currentPage === totalPages"
                    class="px-3 py-1 border border-gray-300 rounded-md text-sm"
                    :class="currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'"
                >
                  下一页
                </button>
              </div>
            </div>
          </div>

        </div>

        <!-- 交易详情卡片 -->
        <div id="trade-details" class="card-white rounded-lg p-6 mb-8" v-if="selectedStock">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-800">交易详情</h2>
            <div class="flex items-center space-x-4">
              <button :class="{'bg-blue-500 text-white': orderType === 'buy', 'bg-gray-100 text-gray-700': orderType !== 'buy'}" class="px-4 py-2 rounded-lg font-medium transition-colors" @click="orderType = 'buy'">买入</button>
              <button :class="{'bg-blue-500 text-white': orderType === 'sell', 'bg-gray-100 text-gray-700': orderType !== 'sell'}" class="px-4 py-2 rounded-lg font-medium transition-colors" @click="orderType = 'sell'">卖出</button>
            </div>
          </div>

          <!-- 选中的股票信息 -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <div :class="selectedStock.bgColor" class="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <span v-if="selectedStock.text" class="text-sm font-bold text-white">{{ selectedStock.text }}</span>
                <i v-if="selectedStock.icon" :class="selectedStock.icon" class="text-white"></i>
              </div>
              <div>
                <div class="font-medium text-lg text-gray-800">{{ selectedStock.name }}</div>
                <div class="text-muted">{{ selectedStock.code }}</div>
              </div>
            </div>
            <div class="text-right">
              <div class="font-medium text-lg text-gray-800">{{ selectedStock.price }}</div>
              <div :class="selectedStock.change >= 0 ? 'text-green-600' : 'text-red-600'">
                {{ selectedStock.change >= 0 ? '+' : '' }}{{ selectedStock.change }}%
              </div>
            </div>
          </div>

          <!-- 交易表单 -->
          <div class="space-y-4">
            <div>
              <label class="block text-muted mb-2">交易类型</label>
              <div class="flex space-x-3">
                <div class="flex items-center">
                  <input type="radio" id="market-order" value="market" v-model="orderMode" class="mr-2 text-blue-500">
                  <label for="market-order" class="text-gray-700">市价单</label>
                </div>
                <div class="flex items-center">
                  <input type="radio" id="limit-order" value="limit" v-model="orderMode" class="mr-2 text-blue-500">
                  <label for="limit-order" class="text-gray-700">限价单</label>
                </div>
                <div class="flex items-center">
                  <input type="radio" id="stop-order" value="stop" v-model="orderMode" class="mr-2 text-blue-500">
                  <label for="stop-order" class="text-gray-700">止损单</label>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-muted mb-2">数量</label>
                <div class="flex items-center">
                  <input
                      type="number"
                      v-model="quantity"
                      class="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      min="1"
                  >
                </div>
              </div>



              <div v-if="orderMode !== 'market'">
                <label class="block text-muted mb-2">{{ orderMode === 'limit' ? '限价' : '止损价' }}</label>
                <div class="flex items-center">
                  <input
                      type="number"
                      v-model="limitPrice"
                      class="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                      min="0"
                      step="0.01"
                  >
                </div>
              </div>

            </div>

            <div>
              <label class="block text-muted mb-2">有效期</label>
              <div class="relative">
                <select v-model="orderValidity" class="appearance-none w-full bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700">
                  <option>当日有效</option>
                  <option>撤单前有效</option>
                  <option>指定日期前有效</option>
                </select>
                <i class="fa-solid fa-chevron-down absolute right-3 top-3.5 text-gray-400 pointer-events-none"></i>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div class="flex justify-between mb-2">
                <span class="text-muted">预估交易金额</span>
                <span class="text-gray-800">{{ calculatedAmount }}</span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="text-muted">交易费用</span>
                <span class="text-gray-800">$4.99</span>
              </div>
              <div class="flex justify-between font-medium pt-2 border-t border-gray-200">
                <span class="text-gray-800">预估总额</span>
                <span class="text-gray-800">{{ calculatedTotal }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 交易确认按钮 -->
        <div class="flex justify-end space-x-4" v-if="selectedStock">
          <button class="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-gray-700 transition-colors">取消</button>
          <button class="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium text-white transition-colors">确认交易</button>
        </div>
      </div>

      <!-- 右侧内容 -->
      <div id="right-content" class="w-1/3">

        <!-- 账户信息卡片 -->
        <div id="account-info" class="card-white rounded-lg p-6 mb-8">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">账户信息</h3>
          <div class="space-y-4">
            <div class="flex justify-between items-center pb-3 border-b border-gray-100">
              <span class="text-muted">可用资金</span>
              <span class="font-medium text-lg text-gray-800">¥{{ mockAccountInfo.availableFunds.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</span>
            </div>
            <div class="flex justify-between items-center pb-3 border-b border-gray-100">
              <span class="text-muted">总资产</span>
              <span class="font-medium text-lg text-gray-800">¥{{ mockAccountInfo.totalAssets.toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-muted">今日盈亏</span>
              <span class="font-medium text-lg" :class="mockAccountInfo.todayProfit >= 0 ? 'text-green-600' : 'text-red-600'">
                {{ mockAccountInfo.todayProfit >= 0 ? '+' : '' }}¥{{ Math.abs(mockAccountInfo.todayProfit).toLocaleString('zh-CN', { minimumFractionDigits: 2 }) }}
              </span>
            </div>
          </div>
        </div>

        <!-- 股票图表 -->
        <div id="stock-chart" class="card-white rounded-lg p-6 mb-8" v-if="selectedStock">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold text-gray-800">{{ selectedStock.name }} ({{ selectedStock.code }})</h3>
            <div class="text-sm text-muted">
              <i class="fa-solid fa-clock mr-1"></i>
              美东时间
            </div>
          </div>

          <div id="price-chart" class="h-64 w-full"></div>

          <div class="flex justify-between mt-4 text-sm">
            <button v-for="period in chartPeriods" :key="period"
                    :class="{'bg-blue-500 text-white': selectedPeriod === period, 'bg-gray-100 text-gray-700 hover:bg-gray-200': selectedPeriod !== period}"
                    class="px-3 py-1 rounded-md transition-colors"
                    @click="handlePeriodChange(period)">
              {{ period }}
            </button>
          </div>
        </div>

        <!-- 交易提示 -->
        <div id="trading-tips" class="card-white rounded-lg p-6 mb-8">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">交易提示</h3>
          <div class="space-y-4 text-sm">
            <div v-for="tip in tradingTips" :key="tip.id" class="flex items-start">
              <i class="fa-solid fa-circle-info text-blue-500 mt-1 mr-2"></i>
              <p class="text-muted">{{ tip.content }}</p>
            </div>
          </div>
        </div>

        <!-- 相关推荐 -->
        <div id="recommendations" class="card-white rounded-lg p-6">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">相关推荐</h3>
          <div class="space-y-3">
            <div v-for="rec in recommendedStocks" :key="rec.code"
                 class="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                 @click="selectStock(rec)">
              <div class="flex items-center">
                <div :class="rec.bgColor" class="w-8 h-8 rounded-full flex items-center justify-center mr-2">
                  <span class="text-xs font-bold text-white">{{ rec.text }}</span>
                </div>
                <div>
                  <div class="font-medium text-gray-800">{{ rec.name }}</div>
                  <div class="text-xs text-muted">{{ rec.code }}</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-gray-800">{{ rec.price }}</div>
                <div class="text-green-600 text-sm">+{{ rec.change }}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/client/Header.vue";

import {goBack, useCurrentDate} from "@/composables/Composable.js";
import {computed, onMounted, ref, watch} from 'vue';
import Highcharts from 'highcharts';
import {parseFloatFixed} from "@/composables/NumberUtils.js";
const { currentDate } = useCurrentDate()
// 状态管理
const activeTab = ref('stocks');
const searchQuery = ref('');
const selectedMarket = ref('全球市场');
const selectedStock = ref(null);
const orderType = ref('buy');
const orderMode = ref('market');
const quantity = ref(10);
const limitPrice = ref(92.76);
const orderValidity = ref('当日有效');
const selectedPeriod = ref('1日');
const chartPeriods = ['1日', '1周', '1月', '3月', '1年', '5年'];
// 交易提示
const tradingTips = ref([]);
// 分页相关数据
const currentPage = ref(1);
const itemsPerPage = ref(5);


// 加载状态
const loading = ref({
  stocks: false,
  recommended: false,
  account: false,
  chart: false
});




// 加载交易提示
const loadTradingTips = async () => {
  try {
    // 模拟从后端获取交易提示数据
    // 在实际项目中，这里应该替换为真实的API调用，例如:
    // const response = await getTradingTips()

    // 模拟API延迟

    // 模拟从服务器获取的数据
    tradingTips.value = [
      {
        id: 1,
        content: '美股交易时间为美东时间9:30-16:00，请注意时差。'
      },
      {
        id: 2,
        content: '交易美股需缴纳一定的交易费用和税费，详情请查看费率说明。'
      },
      {
        id: 3,
        content: '投资有风险，交易需谨慎。过往业绩不代表未来表现。'
      },
      {
        id: 4,
        content: '交易前请确保您已充分了解相关产品的风险。'
      },
      {
        id: 5,
        content: '请注意市场波动可能带来的风险，合理分配资产。'
      }
    ];
  } catch (error) {
    console.error('加载交易提示失败:', error);
    // 出错时使用默认提示
    tradingTips.value = [
      {
        id: 1,
        content: '美股交易时间为美东时间9:30-16:00，请注意时差。'
      },
      {
        id: 2,
        content: '交易美股需缴纳一定的交易费用和税费，详情请查看费率说明。'
      },
      {
        id: 3,
        content: '投资有风险，交易需谨慎。过往业绩不代表未来表现。'
      }
    ];
  }
};

// 股票数据
const stocks = ref([
  {
    name: '阿里巴巴',
    code: 'BABA.NYSE',
    price: '$92.76',
    change: 2.71,
    bgColor: 'bg-blue-600',
    text: '阿'
  },
  {
    name: '腾讯控股',
    code: '0700.HK',
    price: '¥342.60',
    change: 2.03,
    bgColor: 'bg-green-600',
    text: '腾'
  },
  {
    name: '苹果公司',
    code: 'AAPL.NASDAQ',
    price: '$182.31',
    change: -0.84,
    bgColor: 'bg-red-600',
    icon: 'fa-brands fa-apple text-white text-sm'
  },
  {
    name: '贵州茅台',
    code: '600519.SH',
    price: '¥1,792.00',
    change: 1.35,
    bgColor: 'bg-blue-800',
    text: '茅'
  },
  {
    name: '美团',
    code: '3690.HK',
    price: '¥124.50',
    change: 2.14,
    bgColor: 'bg-purple-600',
    text: '美'
  }
]);

const recommendedStocks = ref([
  {
    name: '京东',
    code: 'JD.NASDAQ',
    price: '$34.25',
    change: 1.85,
    bgColor: 'bg-yellow-500',
    text: '京'
  },
  {
    name: '拼多多',
    code: 'PDD.NASDAQ',
    price: '$142.68',
    change: 3.24,
    bgColor: 'bg-red-600',
    text: '拼'
  },
  {
    name: '百度',
    code: 'BIDU.NASDAQ',
    price: '$105.32',
    change: 2.16,
    bgColor: 'bg-blue-600',
    text: '百'
  }
]);

// 计算属性
const filteredStocks = computed(() => {
  return stocks.value.filter(stock => {
    return stock.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        stock.code.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

// 分页计算属性
const paginatedStocks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredStocks.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredStocks.value.length / itemsPerPage.value);
});

// 计算可见页码（最多显示5个页码按钮）
const visiblePages = computed(() => {
  const pages = [];
  const total = totalPages.value;
  const current = currentPage.value;

  if (total <= 5) {
    // 如果总页数小于等于5，显示所有页码
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    // 如果总页数大于5，显示部分页码
    if (current <= 3) {
      // 当前页在前3页内
      pages.push(1, 2, 3, 4, 5);
    } else if (current >= total - 2) {
      // 当前页在后3页内
      pages.push(total - 4, total - 3, total - 2, total - 1, total);
    } else {
      // 当前页在中间
      pages.push(current - 2, current - 1, current, current + 1, current + 2);
    }
  }

  return pages;
});

// 分页方法
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};


const calculatedAmount = computed(() => {
  if (!selectedStock.value) return '$0.00';
  const price = parseFloat(selectedStock.value.price.replace(/[^\d.]/g, ''));
  return `$${(price * quantity.value).toFixed(2)}`;
});

const calculatedTotal = computed(() => {
  if (!selectedStock.value) return '$0.00';
  const price = parseFloat(selectedStock.value.price.replace(/[^\d.]/g, ''));
  return `$${(price * quantity.value + 4.99).toFixed(2)}`;
});

// 方法
const selectTab = (tab) => {
  activeTab.value = tab;
};

const selectStock = (stock) => {
  selectedStock.value = stock;
  limitPrice.value = parseFloat(stock.price.replace(/[^\d.]/g, ''));
};

// 添加处理周期选择变化的方法
const handlePeriodChange = (period) => {
  selectedPeriod.value = period;
  // 延迟一点时间确保DOM更新后再初始化图表
  setTimeout(() => {
    initChart();
  }, 50);
};

const initChart = () => {
  // 确保DOM元素存在
  const chartContainer = document.getElementById('price-chart');
  if (!chartContainer) {
    console.warn('Chart container not found');
    return;
  }

  // 根据选中的周期生成不同的数据点数量
  const generateMockPriceData = () => {
    const basePrice = selectedStock.value ?
        parseFloat(selectedStock.value.price.replace(/[^\d.]/g, '')) : 92.76;

    let dataPoints = 14; // 默认1日的数据点
    let timeLabels = [];

    // 根据选中的周期设置数据点数量和时间标签
    switch(selectedPeriod.value) {
      case '1日':
        dataPoints = 14;
        timeLabels = ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'];
        break;
      case '1周':
        dataPoints = 7;
        timeLabels = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        break;
      case '1月':
        dataPoints = 30;
        // 简化显示，实际应该是30天的数据
        timeLabels = Array.from({length: 30}, (_, i) => `${i+1}日`);
        break;
      case '3月':
        dataPoints = 12;
        timeLabels = ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周', '第8周', '第9周', '第10周', '第11周', '第12周'];
        break;
      case '1年':
        dataPoints = 12;
        timeLabels = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        break;
      case '5年':
        dataPoints = 5;
        timeLabels = ['2020年', '2021年', '2022年', '2023年', '2024年'];
        break;
      default:
        dataPoints = 14;
        timeLabels = ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'];
    }

    // 生成价格数据
    const data = [];
    let currentPrice = basePrice;

    // 对于不同周期使用不同的波动率
    let volatility = 0.02;
    switch(selectedPeriod.value) {
      case '5日':
        volatility = 0.03;
        break;
      case '1月':
        volatility = 0.05;
        break;
      case '3月':
        volatility = 0.08;
        break;
      case '1年':
        volatility = 0.12;
        break;
      case '5年':
        volatility = 0.15;
        break;
    }

    for (let i = 0; i < dataPoints; i++) {
      // 添加一些随机波动
      const change = (Math.random() - 0.5) * basePrice * volatility;
      currentPrice = currentPrice + change;
      // 确保价格不会变成负数
      currentPrice = Math.max(currentPrice, basePrice * 0.5);
      data.push(parseFloat(currentPrice.toFixed(2)));
    }

    return { data, timeLabels };
  };

  const { data: priceData, timeLabels } = generateMockPriceData();

  Highcharts.chart('price-chart', {
    chart: {
      type: 'area',
      backgroundColor: 'transparent',
      height: 256
    },
    title: { text: null },
    xAxis: {
      categories: timeLabels,
      labels: {
        style: {
          color: '#64748b',
          fontSize: '12px'
        }
      },
      lineColor: '#cbd5e1',
      tickColor: '#cbd5e1'
    },
    yAxis: {
      title: { text: null },
      labels: {
        style: {
          color: '#64748b',
          fontSize: '12px'
        }
      },
      gridLineColor: '#e2e8f0'
    },
    legend: { enabled: false },
    credits: { enabled: false },
    tooltip: {
      backgroundColor: '#ffffff',
      borderColor: '#e2e8f0',
      style: {
        color: '#334155'
      },
      formatter: function() {
        return `<b>时间: ${this.x}</b><br/>价格: $${this.y}`;
      }
    },
    plotOptions: {
      area: {
        marker: {
          enabled: true,
          radius: 3,
          symbol: 'circle'
        },
        lineWidth: 2,
        lineColor: '#3B82F6',
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(59, 130, 246, 0.3)'],
            [1, 'rgba(59, 130, 246, 0)']
          ]
        }
      }
    },
    series: [{
      name: '价格',
      data: priceData
    }]
  });
};


// 生命周期
onMounted(() => {
  // 默认选择第一个股票
  if (stocks.value.length > 0) {
    selectStock(stocks.value[0]);
  }
  // 加载交易提示
  loadTradingTips();
  // 初始化图表
  setTimeout(() => {
    if (selectedStock.value) {
      initChart();
    }
  }, 100);
  loadAccountInfo();
});

// 监听器
watch(selectedStock, () => {
  // 确保在DOM更新后再初始化图表
  setTimeout(() => {
    if (selectedStock.value) {
      initChart();
    }
  }, 100);
});

// 加载账户信息
const loadAccountInfo = async () => {
  try {
    loading.account = true;
    //
  } catch (error) {
    console.error('加载账户信息失败:', error);
  } finally {
    loading.account = false;
  }
};

// 模拟账户信息
const mockAccountInfo = {
  availableFunds: 245689.25,
  totalAssets: 1245689.25,
  todayProfit: 12458.63
}

</script>

<style scoped>

</style>
