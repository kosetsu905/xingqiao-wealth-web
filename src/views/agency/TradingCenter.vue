<template>
  <div class="trading-center">
    <!-- Header -->
    <Header :from="cdbc" :currentTabActive="4" />

    <!-- 主内容区 -->
    <main class="container mx-auto px-4 py-6">
      <!-- 交易对选择器 -->
      <section class="mb-6">
        <div class="flex flex-wrap items-center gap-3 bg-dark-light p-3 rounded-xl">
          <div class="flex border border-gray-700 rounded-lg overflow-hidden">
            <button
                v-for="tab in tradeTabs"
                :key="tab.key"
                :class="[
                'px-4 py-2 text-sm transition-colors',
                activeTradeTab === tab.key 
                  ? 'bg-primary text-white' 
                  : 'bg-transparent hover:bg-dark-lighter text-gray-500'
              ]"
                @click="setActiveTradeTab(tab.key)"
            >
              {{ tab.label }}
            </button>
          </div>

          <div class="relative flex-grow max-w-md">
            <select
                v-model="selectedPair"
                class="w-full bg-dark-lighter border border-gray-700 rounded-lg px-4 py-2 pr-8 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary"
                @change="updateTradingViewPair"
            >
              <option
                  v-for="pair in tradingPairs"
                  :key="pair.symbol"
                  :value="pair.symbol"
              >
                {{ pair.label }}
              </option>
            </select>
            <i class="fa fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
          </div>

          <div class="flex flex-wrap gap-2">
            <button
                v-for="pair in quickPairs"
                :key="pair"
                :class="[
                'px-3 py-1.5 rounded text-xs transition-colors',
                selectedPair.startsWith(pair) 
                  ? 'bg-primary text-white' 
                  : 'bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500'
              ]"
                @click="selectQuickPair(pair)"
            >
              {{ pair }}
            </button>
            <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-3 py-1.5 rounded text-xs transition-colors">
              <i class="fa fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
      </section>

      <!-- 价格信息和快捷操作 -->
      <section class="mb-6">
        <div class="bg-dark-light rounded-xl p-4">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-3">
                <h2 class="text-xl font-bold">{{ getCurrentPairInfo().name }}</h2>
                <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                  {{ selectedPair }}
                </span>
              </div>
              <div class="mt-2 flex flex-wrap items-baseline gap-4">
                <div class="text-2xl font-bold">${{ formatPrice(currentPrice) }}</div>
                <div :class="[
                  'flex items-center',
                  priceChange >= 0 ? 'text-success' : 'text-danger'
                ]">
                  <i :class="[
                    'fa mr-1',
                    priceChange >= 0 ? 'fa-arrow-up' : 'fa-arrow-down'
                  ]"></i>
                  <span>{{ formatPercentage(priceChange) }}%</span>
                </div>
                <div class="text-gray-400 text-sm">≈ ¥{{ formatCNYPrice(currentPrice * 7.0) }}</div>
              </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
              <div>
                <div class="text-gray-400 text-xs">24h高</div>
                <div class="text-white text-sm font-medium">${{ formatPrice(high24h) }}</div>
              </div>
              <div>
                <div class="text-gray-400 text-xs">24h低</div>
                <div class="text-white text-sm font-medium">${{ formatPrice(low24h) }}</div>
              </div>
              <div>
                <div class="text-gray-400 text-xs">24h成交量</div>
                <div class="text-white text-sm font-medium">${{ formatVolume(volume24h) }}</div>
              </div>
              <div>
                <div class="text-gray-400 text-xs">市值</div>
                <div class="text-white text-sm font-medium">${{ formatMarketCap(marketCap) }}</div>
              </div>
            </div>

            <div class="flex gap-2 w-full md:w-auto">
              <button class="flex-1 md:flex-none md:px-4 bg-success hover:bg-success/90 text-white py-2 rounded-lg transition-colors text-sm">
                <i class="fa fa-plus mr-1"></i> 买入
              </button>
              <button class="flex-1 md:flex-none md:px-4 bg-danger hover:bg-danger/90 text-white py-2 rounded-lg transition-colors text-sm">
                <i class="fa fa-minus mr-1"></i> 卖出
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- K线图表和交易区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- K线图表区域 - 占据2/3宽度 -->
        <div class="lg:col-span-2 space-y-6">
          <!-- K线图表 -->
          <div class="bg-dark-light rounded-xl p-4 card-hover">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div class="flex flex-wrap gap-2">
                <button
                    v-for="interval in timeIntervals"
                    :key="interval.value"
                    :class="[
                    'px-3 py-1 rounded text-xs transition-colors',
                    selectedInterval === interval.value 
                      ? 'bg-primary text-white' 
                      : 'bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500'
                  ]"
                    @click="setTimeInterval(interval.value)"
                >
                  {{ interval.label }}
                </button>
              </div>

              <div class="flex gap-2">
                <button
                    v-for="tool in chartTools"
                    :key="tool.action"
                    class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 p-1.5 rounded text-xs transition-colors"
                    :title="tool.title"
                    @click="activateChartTool(tool.action)"
                >
                  <i :class="tool.icon"></i>
                </button>
              </div>
            </div>

            <!-- K线图容器 -->
            <div class="h-[400px] w-full relative">
              <div
                  id="tradingview-chart"
                  class="w-full h-full"
                  :class="{ 'opacity-0': !tradingViewLoaded }"
              ></div>
              <div
                  v-if="!tradingViewLoaded"
                  class="absolute inset-0 flex items-center justify-center bg-dark-lighter rounded-lg"
              >
                <div class="text-center">
                  <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                  <p class="text-gray-400">加载图表中...</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 最近成交记录 -->
          <div class="bg-dark-light rounded-xl p-4 card-hover">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold">最近成交</h3>
              <button class="text-primary text-sm hover:underline">查看全部</button>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                <tr class="text-gray-400 border-b border-gray-700">
                  <th class="py-2 text-left">价格(USDT)</th>
                  <th class="py-2 text-right">数量(BTC)</th>
                  <th class="py-2 text-right">总额(USDT)</th>
                  <th class="py-2 text-right">时间</th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="(trade, index) in recentTrades"
                    :key="index"
                    class="border-b border-gray-800 hover:bg-dark-lighter/30 transition-colors"
                >
                  <td :class="[
                      'py-2.5 text-left',
                      trade.type === 'buy' ? 'text-success' : 'text-danger'
                    ]">
                    ${{ formatPrice(trade.price) }}
                  </td>
                  <td class="py-2.5 text-right">{{ trade.amount }}</td>
                  <td class="py-2.5 text-right">${{ formatPrice(trade.total) }}</td>
                  <td class="py-2.5 text-right text-gray-500">{{ trade.time }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- 交易表单和订单簿 - 占据1/3宽度 -->
        <div class="space-y-6">
          <!-- 买入表单 -->
          <div class="bg-dark-light rounded-xl p-4 card-hover">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold text-success">买入 {{ getCurrentPairInfo().base }}</h3>
              <div class="flex gap-1">
                <button
                    v-for="percent in [25, 50, 75, 100]"
                    :key="percent"
                    class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-500 px-2 py-1 rounded text-xs transition-colors"
                    @click="setBuyPercentage(percent)"
                >
                  {{ percent }}%
                </button>
              </div>
            </div>

            <div class="space-y-3">
              <div>
                <label class="block text-gray-400 text-xs mb-1">价格 (USDT)</label>
                <input
                    type="text"
                    :value="currentPrice"
                    class="w-full bg-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-success"
                    readonly
                >
              </div>

              <div>
                <label class="block text-gray-400 text-xs mb-1">数量 ({{ getCurrentPairInfo().base }})</label>
                <input
                    v-model="buyAmount"
                    type="text"
                    placeholder="0.00"
                    class="w-full bg-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-success"
                >
              </div>

              <div>
                <label class="block text-gray-400 text-xs mb-1">总额 (USDT)</label>
                <input
                    v-model="buyTotal"
                    type="text"
                    placeholder="0.00"
                    class="w-full bg-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-success"
                >
              </div>

              <div class="text-xs text-gray-400 mt-1">
                <p>可用 USDT: {{ formatPrice(availableUSDT) }}</p>
              </div>

              <button class="w-full bg-success hover:bg-success/90 text-white py-3 rounded-lg transition-colors font-medium">
                买入 {{ getCurrentPairInfo().base }}
              </button>
            </div>
          </div>

          <!-- 卖出表单 -->
          <div class="bg-dark-light rounded-xl p-4 card-hover">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold text-danger">卖出 {{ getCurrentPairInfo().base }}</h3>
              <div class="flex gap-1">
                <button
                    v-for="percent in [25, 50, 75, 100]"
                    :key="percent"
                    class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 px-2 py-1 rounded text-xs transition-colors"
                    @click="setSellPercentage(percent)"
                >
                  {{ percent }}%
                </button>
              </div>
            </div>

            <div class="space-y-3">
              <div>
                <label class="block text-gray-400 text-xs mb-1">价格 (USDT)</label>
                <input
                    type="text"
                    :value="currentPrice"
                    class="w-full bg-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-danger"
                    readonly
                >
              </div>

              <div>
                <label class="block text-gray-400 text-xs mb-1">数量 ({{ getCurrentPairInfo().base }})</label>
                <input
                    v-model="sellAmount"
                    type="text"
                    placeholder="0.00"
                    class="w-full bg-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-danger"
                >
              </div>

              <div>
                <label class="block text-gray-400 text-xs mb-1">总额 (USDT)</label>
                <input
                    v-model="sellTotal"
                    type="text"
                    placeholder="0.00"
                    class="w-full bg-white border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-danger"
                >
              </div>

              <div class="text-xs text-gray-400 mt-1">
                <p>可用 {{ getCurrentPairInfo().base }}: {{ formatPrice(availableBase) }}</p>
              </div>

              <button class="w-full bg-danger hover:bg-danger/90 text-white py-3 rounded-lg transition-colors font-medium">
                卖出 {{ getCurrentPairInfo().base }}
              </button>
            </div>
          </div>

          <!-- 订单簿 -->
          <div class="bg-dark-light rounded-xl p-4 card-hover">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold">订单簿</h3>
              <div class="flex items-center gap-2">
                <button
                    v-for="precision in [0.1, 0.01, 0.001]"
                    :key="precision"
                    :class="[
                    'px-2 py-1 rounded text-xs transition-colors',
                    orderbookPrecision === precision 
                      ? 'bg-primary text-white' 
                      : 'bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300'
                  ]"
                    @click="setOrderbookPrecision(precision)"
                >
                  {{ precision }}
                </button>
                <button
                    class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 p-1 rounded text-xs transition-colors"
                    title="刷新"
                    @click="refreshOrderbook"
                >
                  <i class="fa fa-refresh"></i>
                </button>
              </div>
            </div>

            <!-- 卖单 (asks) -->
            <div class="space-y-1 max-h-[200px] overflow-y-auto scrollbar-hide">
              <div class="grid grid-cols-3 gap-2 text-xs text-gray-400 pb-1 border-b border-gray-700">
                <div class="text-right">价格(USDT)</div>
                <div class="text-right">数量({{ getCurrentPairInfo().base }})</div>
                <div class="text-right">总额(USDT)</div>
              </div>

              <div
                  v-for="(ask, index) in orderbook.asks"
                  :key="index"
                  class="grid grid-cols-3 gap-2 text-sm py-1.5 px-1 rounded order-book-ask cursor-pointer hover:bg-danger/10 transition-colors"
                  @click="fillSellOrder(ask.price)"
              >
                <div class="text-middle text-danger">${{ formatPrice(ask.price) }}</div>
                <div class="text-middle">{{ ask.amount }}</div>
                <div class="text-middle">${{ formatPrice(ask.total) }}</div>
              </div>
            </div>

            <!-- 当前价格 -->
            <div class="py-2 text-center">
              <div :class="[
                'font-bold',
                priceChange >= 0 ? 'text-success' : 'text-danger'
              ]">
                ${{ formatPrice(currentPrice) }}
              </div>
            </div>

            <!-- 买单 (bids) -->
            <div class="space-y-1 max-h-[200px] overflow-y-auto scrollbar-hide mt-2">
              <div
                  v-for="(bid, index) in orderbook.bids"
                  :key="index"
                  class="grid grid-cols-3 gap-2 text-sm py-1.5 px-1 rounded order-book-bid cursor-pointer hover:bg-success/10 transition-colors"
                  @click="fillBuyOrder(bid.price)"
              >
                <div class="text-middle text-success">${{ formatPrice(bid.price) }}</div>
                <div class="text-middle">{{ bid.amount }}</div>
                <div class="text-middle">${{ formatPrice(bid.total) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 我的订单 -->
      <section class="mt-6 mb-12">
        <div class="bg-dark-light rounded-xl p-4 card-hover">
          <div class="flex flex-wrap justify-between items-center mb-6 gap-4">
            <h2 class="text-xl font-bold">我的订单</h2>

            <div class="flex border border-gray-700 rounded-lg overflow-hidden">
              <button
                  v-for="tab in orderTabs"
                  :key="tab.key"
                  :class="[
                  'px-4 py-2 text-sm transition-colors',
                  activeOrderTab === tab.key 
                    ? 'bg-primary text-white' 
                    : 'bg-transparent hover:bg-dark-lighter text-gray-300'
                ]"
                  @click="setActiveOrderTab(tab.key)"
              >
                {{ tab.label }}
              </button>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
              <tr class="text-gray-400 border-b border-gray-700">
                <th class="py-3 text-left">订单号</th>
                <th class="py-3 text-left">交易对</th>
                <th class="py-3 text-left">类型</th>
                <th class="py-3 text-right">价格(USDT)</th>
                <th class="py-3 text-right">数量({{ getCurrentPairInfo().base }})</th>
                <th class="py-3 text-right">总额(USDT)</th>
                <th class="py-3 text-right">状态</th>
                <th class="py-3 text-right">时间</th>
                <th class="py-3 text-right">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="(order, index) in myOrders"
                  :key="index"
                  class="border-b border-gray-800 hover:bg-dark-lighter/30 transition-colors"
              >
                <td class="py-3 text-left text-gray-400">{{ order.id }}</td>
                <td class="py-3 text-left">{{ order.pair }}</td>
                <td class="py-3 text-left">
                    <span :class="[
                      'px-2 py-0.5 rounded-full text-xs',
                      order.type === 'buy' 
                        ? 'bg-success/10 text-success' 
                        : 'bg-danger/10 text-danger'
                    ]">
                      {{ order.type === 'buy' ? '买入' : '卖出' }}
                    </span>
                </td>
                <td class="py-3 text-right">${{ formatPrice(order.price) }}</td>
                <td class="py-3 text-right">{{ order.amount }}</td>
                <td class="py-3 text-right">${{ formatPrice(order.total) }}</td>
                <td class="py-3 text-right">
                    <span :class="[
                      'px-2 py-0.5 rounded-full text-xs',
                      getOrderStatusClass(order.status)
                    ]">
                      {{ getOrderStatusText(order.status) }}
                    </span>
                </td>
                <td class="py-3 text-right text-gray-400">{{ order.time }}</td>
                <td class="py-3 text-right">
                  <button
                      v-if="order.status === 'pending'"
                      class="text-danger text-xs hover:underline"
                      @click="cancelOrder(order.id)"
                  >
                    取消
                  </button>
                  <button
                      v-else
                      class="text-primary text-xs hover:underline"
                  >
                    详情
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-4 flex justify-between items-center">
            <div class="text-sm text-gray-400">显示 {{ ordersPagination.start }}-{{ ordersPagination.end }} 条，共 {{ ordersPagination.total }} 条</div>
            <div class="flex items-center space-x-1">
              <button
                  class="w-8 h-8 flex items-center justify-center rounded-lg bg-dark-lighter text-gray-400 hover:bg-primary hover:text-white transition-colors disabled:opacity-50"
                  :disabled="ordersPagination.currentPage === 1"
                  @click="prevPage"
              >
                <i class="fa fa-angle-left"></i>
              </button>
              <button
                  v-for="page in ordersPagination.pages"
                  :key="page"
                  :class="[
                  'w-8 h-8 flex items-center justify-center rounded-lg transition-colors',
                  page === ordersPagination.currentPage 
                    ? 'bg-primary text-white' 
                    : 'bg-dark-lighter hover:bg-primary hover:text-white'
                ]"
              >
                {{ page }}
              </button>
              <button
                  class="w-8 h-8 flex items-center justify-center rounded-lg bg-dark-lighter text-gray-400 hover:bg-primary hover:text-white transition-colors disabled:opacity-50"
                  :disabled="ordersPagination.currentPage === ordersPagination.totalPages"
                  @click="nextPage"
              >
                <i class="fa fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/agency/Header.vue";
import { ref, onMounted, watch } from 'vue';
import { useTradingView } from '@/plugins/tradingview';

const cdbc = 'cbdc';

// 交易标签页
const tradeTabs = [
  { key: 'spot', label: '币币交易' },
  { key: 'margin', label: '杠杆交易' },
  { key: 'futures', label: '合约交易' }
];
const activeTradeTab = ref('spot');

// 交易对
const tradingPairs = [
  { symbol: 'BINANCE:BTCUSDT', label: 'BTC/USDT', name: 'Bitcoin' },
  { symbol: 'BINANCE:ETHUSDT', label: 'ETH/USDT', name: 'Ethereum' },
  { symbol: 'BINANCE:BNBUSDT', label: 'BNB/USDT', name: 'Binance Coin' },
  { symbol: 'BINANCE:XRPUSDT', label: 'XRP/USDT', name: 'Ripple' },
  { symbol: 'BINANCE:ADAUSDT', label: 'ADA/USDT', name: 'Cardano' },
  { symbol: 'BINANCE:DOGEUSDT', label: 'DOGE/USDT', name: 'Dogecoin' }
];
const selectedPair = ref('BINANCE:BTCUSDT');

// 快捷交易对
const quickPairs = ['BTC', 'ETH', 'BNB', 'XRP', 'ADA', 'DOGE'];

// 时间间隔
const timeIntervals = [
  { label: '分时', value: '1' },
  { label: '15分', value: '15' },
  { label: '1小时', value: '60' },
  { label: '4小时', value: '240' },
  { label: '1天', value: 'D' },
  { label: '1周', value: 'W' }
];
const selectedInterval = ref('60');

// 图表工具
const chartTools = [
  { action: 'draw', title: '画线工具', icon: 'fa fa-pencil' },
  { action: 'indicators', title: '指标', icon: 'fa fa-line-chart' },
  { action: 'fullscreen', title: '全屏', icon: 'fa fa-expand' }
];

// 价格数据
const currentPrice = ref(42856.32);
const priceChange = ref(2.36);
const high24h = ref(44218.56);
const low24h = ref(41982.31);
const volume24h = ref(28400000000);
const marketCap = ref(823600000000);
const availableUSDT = ref(12548.25);
const availableBase = ref(0.5241);

// 交易表单数据
const buyAmount = ref('');
const buyTotal = ref('');
const sellAmount = ref('');
const sellTotal = ref('');

// 订单簿精度
const orderbookPrecision = ref(0.001);

// 订单簿数据
const orderbook = ref({
  asks: [
    { price: 42865.21, amount: 0.3245, total: 13910.76 },
    { price: 42860.54, amount: 0.1521, total: 6519.19 },
    { price: 42858.77, amount: 0.0876, total: 3754.43 },
    { price: 42856.32, amount: 0.2154, total: 9231.25 },
    { price: 42852.18, amount: 0.4782, total: 20592.91 }
  ],
  bids: [
    { price: 42849.75, amount: 0.3562, total: 15262.18 },
    { price: 42845.32, amount: 0.1875, total: 8033.50 },
    { price: 42841.56, amount: 0.0982, total: 4207.04 },
    { price: 42838.21, amount: 0.5214, total: 22335.84 },
    { price: 42832.75, amount: 0.2458, total: 10528.39 }
  ]
});

// 最近成交记录
const recentTrades = ref([
  { price: 42856.32, amount: 0.0245, total: 1050.00, time: '14:32:45', type: 'buy' },
  { price: 42841.56, amount: 0.1020, total: 4369.84, time: '14:32:18', type: 'sell' },
  { price: 42838.21, amount: 0.0512, total: 2193.31, time: '14:31:52', type: 'buy' },
  { price: 42835.78, amount: 0.0087, total: 372.67, time: '14:31:25', type: 'buy' },
  { price: 42829.45, amount: 0.2451, total: 10497.50, time: '14:30:48', type: 'sell' }
]);

// 我的订单
const orderTabs = [
  { key: 'open', label: '当前订单' },
  { key: 'history', label: '历史订单' },
  { key: 'deposits', label: '充值记录' },
  { key: 'withdrawals', label: '提现记录' }
];
const activeOrderTab = ref('open');

const myOrders = ref([
  { id: '8726458921', pair: 'BTC/USDT', type: 'buy', price: 42750.00, amount: 0.0500, total: 2137.50, status: 'partial', time: '2023-06-15 14:25:18' },
  { id: '8726457193', pair: 'BTC/USDT', type: 'sell', price: 43200.00, amount: 0.1000, total: 4320.00, status: 'pending', time: '2023-06-15 13:48:32' },
  { id: '8726451085', pair: 'ETH/USDT', type: 'sell', price: 2430.00, amount: 2.5000, total: 6075.00, status: 'filled', time: '2023-06-15 11:15:47' }
]);

// 订单分页
const ordersPagination = ref({
  currentPage: 1,
  totalPages: 3,
  total: 12,
  start: 1,
  end: 3,
  pages: [1, 2, 3]
});

// TradingView 加载状态
const tradingViewLoaded = ref(false);

// 使用 TradingView composable
const { chart, updateChart } = useTradingView({
  symbol: selectedPair.value,
  interval: selectedInterval.value,
  containerId: 'tradingview-chart',
  width: '100%',
  height: '100%',
  theme: 'dark'
});

// 格式化函数
const formatPrice = (price: number): string => {
  return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatPercentage = (value: number): string => {
  return value.toFixed(2);
};

const formatCNYPrice = (price: number): string => {
  return (price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatVolume = (volume: number): string => {
  if (volume >= 1000000000) {
    return (volume / 1000000000).toFixed(2) + 'B';
  } else if (volume >= 1000000) {
    return (volume / 1000000).toFixed(2) + 'M';
  } else if (volume >= 1000) {
    return (volume / 1000).toFixed(2) + 'K';
  }
  return volume.toString();
};

const formatMarketCap = (marketCap: number): string => {
  return formatVolume(marketCap);
};

// 获取当前交易对信息
const getCurrentPairInfo = () => {
  const pair = tradingPairs.find(p => p.symbol === selectedPair.value);
  if (pair) {
    const [base] = pair.label.split('/');
    return {
      ...pair,
      base
    };
  }
  return {
    symbol: 'BINANCE:BTCUSDT',
    label: 'BTC/USDT',
    name: 'Bitcoin',
    base: 'BTC'
  };
};

// 设置活动交易标签页
const setActiveTradeTab = (tab: string) => {
  activeTradeTab.value = tab;
};

// 更新 TradingView 交易对
const updateTradingViewPair = () => {
  updateChart({
    symbol: selectedPair.value,
    interval: selectedInterval.value
  });
  tradingViewLoaded.value = false;
  setTimeout(() => {
    tradingViewLoaded.value = true;
  }, 500);
};

// 选择快捷交易对
const selectQuickPair = (pair: string) => {
  const foundPair = tradingPairs.find(p => p.label.startsWith(pair));
  if (foundPair) {
    selectedPair.value = foundPair.symbol;
    updateTradingViewPair();
  }
};

// 设置时间间隔
const setTimeInterval = (interval: string) => {
  selectedInterval.value = interval;
  updateChart({ interval });
};

// 激活图表工具
const activateChartTool = (tool: string) => {
  console.log('Activating chart tool:', tool);
  // 这里可以实现具体的图表工具功能
};

// 设置买入百分比
const setBuyPercentage = (percent: number) => {
  const amount = (availableUSDT.value * percent / 100) / currentPrice.value;
  buyAmount.value = amount.toFixed(6);
  buyTotal.value = (amount * currentPrice.value).toFixed(2);
};

// 设置卖出百分比
const setSellPercentage = (percent: number) => {
  const amount = availableBase.value * percent / 100;
  sellAmount.value = amount.toFixed(6);
  sellTotal.value = (amount * currentPrice.value).toFixed(2);
};

// 设置订单簿精度
const setOrderbookPrecision = (precision: number) => {
  orderbookPrecision.value = precision;
};

// 刷新订单簿
const refreshOrderbook = () => {
  console.log('Refreshing orderbook');
  // 这里可以实现订单簿刷新逻辑
};

// 填充卖出订单
const fillSellOrder = (price: number) => {
  sellAmount.value = '';
  // 这里可以实现根据价格填充订单的逻辑
};

// 填充买入订单
const fillBuyOrder = (price: number) => {
  buyAmount.value = '';
  // 这里可以实现根据价格填充订单的逻辑
};

// 设置活动订单标签页
const setActiveOrderTab = (tab: string) => {
  activeOrderTab.value = tab;
};

// 获取订单状态类
const getOrderStatusClass = (status: string) => {
  switch (status) {
    case 'partial': return 'bg-yellow-500/10 text-yellow-500';
    case 'pending': return 'bg-blue-500/10 text-blue-500';
    case 'filled': return 'bg-success/10 text-success';
    default: return 'bg-gray-500/10 text-gray-500';
  }
};

// 获取订单状态文本
const getOrderStatusText = (status: string) => {
  switch (status) {
    case 'partial': return '部分成交';
    case 'pending': return '未成交';
    case 'filled': return '已成交';
    default: return '未知';
  }
};

// 取消订单
const cancelOrder = (orderId: string) => {
  console.log('Cancelling order:', orderId);
  // 这里可以实现取消订单的逻辑
};

// 分页操作
const prevPage = () => {
  if (ordersPagination.value.currentPage > 1) {
    ordersPagination.value.currentPage--;
  }
};

const nextPage = () => {
  if (ordersPagination.value.currentPage < ordersPagination.value.totalPages) {
    ordersPagination.value.currentPage++;
  }
};

// 监听交易对和时间间隔变化
watch([selectedPair, selectedInterval], () => {
  updateTradingViewPair();
});

// 组件挂载后
onMounted(() => {
  // 模拟 TradingView 加载完成
  setTimeout(() => {
    tradingViewLoaded.value = true;
  }, 1000);
});
</script>

<style scoped>
.order-book-ask:hover {
  background-color: rgba(239, 68, 68, 0.1) !important;
}

.order-book-bid:hover {
  background-color: rgba(34, 197, 94, 0.1) !important;
}

/* 添加加载动画 */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
