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
                个人投资组合
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
      <!-- 投资组合概览 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mb-8">
        <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div class="text-gray-500 text-sm mb-1">总资产价值</div>
          <div class="text-2xl font-bold mb-2">{{ formatCurrency(portfolioData.totalValue) }}</div>
          <div class="flex items-center" :class="portfolioData.dailyChange >= 0 ? 'text-green-500' : 'text-red-500'">
            <i class="mr-1 text-xs fas" :class="portfolioData.dailyChange >= 0 ? 'fa-arrow-up' : 'fa-arrow-down'"></i>
            <span>{{ formatPercent(portfolioData.dailyChange) }}</span>
            <span class="text-gray-400 text-xs ml-2">今日</span>
          </div>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div class="text-gray-500 text-sm mb-1">当月收益</div>
          <div class="text-2xl font-bold mb-2">{{ formatCurrency(portfolioData.monthlyEarnings) }}</div>
          <div class="flex items-center" :class="portfolioData.monthlyChange >= 0 ? 'text-green-500' : 'text-red-500'">
            <i class="mr-1 text-xs fas" :class="portfolioData.monthlyChange >= 0 ? 'fa-arrow-up' : 'fa-arrow-down'"></i>
            <span>{{ formatPercent(portfolioData.monthlyChange) }}</span>
            <span class="text-gray-400 text-xs ml-2">30天</span>
          </div>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div class="text-gray-500 text-sm mb-1">年度收益率</div>
          <div class="text-2xl font-bold mb-2">{{ formatPercent(portfolioData.annualReturn) }}</div>
          <div class="flex items-center" :class="portfolioData.annualChange >= 0 ? 'text-green-500' : 'text-red-500'">
            <i class="mr-1 text-xs fas" :class="portfolioData.annualChange >= 0 ? 'fa-arrow-up' : 'fa-arrow-down'"></i>
            <span>{{ formatPercent(portfolioData.annualChange) }}</span>
            <span class="text-gray-400 text-xs ml-2">较上月</span>
          </div>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div class="text-gray-500 text-sm mb-1">可用现金</div>
          <div class="text-2xl font-bold mb-2">{{ formatCurrency(portfolioData.availableCash) }}</div>
          <div class="flex items-center text-blue-500 text-sm">
            <i class="mr-1 fas fa-circle-plus"></i>
            <span>充值</span>
            <i class="ml-3 mr-1 fas fa-circle-minus"></i>
            <span>提现</span>
          </div>
        </div>
      </div>


      <!-- 资产分配图表 -->
      <div class="flex gap-6 mb-8">
        <div class="w-2/3 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold">投资组合表现</h2>
            <div class="flex space-x-2 text-sm">
              <button
                  v-for="period in chartPeriods"
                  :key="period.value"
                  :class="{
                  'bg-blue-100 text-blue-600 px-3 py-1 rounded-full': selectedPeriod === period.value,
                  'text-gray-500 hover:text-gray-700 px-3 py-1': selectedPeriod !== period.value
                }"
                  @click="changePeriod(period.value)"
              >
                {{ period.label }}
              </button>
            </div>
          </div>
          <div id="portfolio-chart" class="h-[400px]"></div>
        </div>

        <div class="w-1/3 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 class="text-xl font-semibold mb-6">资产分配</h2>
          <div id="allocation-chart" class="h-[250px] mb-4"></div>
          <div class="space-y-3 mt-6">
            <div v-for="(asset, index) in allocationData" :key="index" class="flex items-center justify-between">
              <div class="flex items-center">
                <span class="w-3 h-3 rounded-full mr-2" :style="{ backgroundColor: asset.color }"></span>
                <span class="">{{ asset.name }}</span>
              </div>
              <div class="font-medium">{{ asset.percentage }}%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 持有资产列表 -->
      <div class="mb-8">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">持有资产</h2>
          <div class="flex items-center space-x-4">
            <div class="relative">
              <select class="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8
                                                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>所有资产</option>
                <option>股票</option>
                <option>基金</option>
                <option>债券</option>
                <option>ETF</option>
              </select>
              <i class="absolute right-3 top-3 text-gray-400 pointer-events-none fas fa-chevron-down"></i>
            </div>
            <div class="relative">
              <select class="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8
                                                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>按价值排序</option>
                <option>按表现排序</option>
                <option>按名称排序</option>
              </select>
              <i class="absolute right-3 top-3 text-gray-400 pointer-events-none fas fa-chevron-down"></i>
            </div>
          </div>
        </div>

        <!-- 股票持仓 -->
        <div class="mb-6">
          <div class="bg-gray-100 p-3 rounded-t-lg flex items-center border border-gray-200">
            <i class="mr-2 text-blue-500 fas fa-chart-line"></i>
            <h3 class="font-medium">股票 ({{ holdingsData.stocks ? holdingsData.stocks.length : 0 }})</h3>
          </div>
          <div class="bg-white rounded-b-lg overflow-hidden shadow-sm border border-gray-200 border-t-0">
            <table class="w-full holdings-table">
              <thead>
              <tr class="text-gray-500 text-sm">
                <th class="text-left p-4">名称</th>
                <th class="text-right p-4">最新价格</th>
                <th class="text-right p-4">持有数量</th>
                <th class="text-right p-4">持仓成本</th>
                <th class="text-right p-4">市值</th>
                <th class="text-right p-4">日涨跌</th>
                <th class="text-right p-4">总收益</th>
                <th class="text-center p-4">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(stock, index) in paginatedStocks" :key="index" class="border-b border-gray-200">
                <td class="p-4">
                  <div class="flex items-center">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center mr-2 text-white" :class="stock.bgColor">
                      <span class="text-xs font-bold">{{ stock.abbreviation }}</span>
                    </div>
                    <div>
                      <div class="font-medium">{{ stock.name }}</div>
                      <div class="text-xs text-gray-500">{{ stock.code }}</div>
                    </div>
                  </div>
                </td>
                <td class="p-4 text-right">{{ formatCurrency(stock.price) }}</td>
                <td class="p-4 text-right">{{ stock.quantity }}</td>
                <td class="p-4 text-right">{{ formatCurrency(stock.cost) }}</td>
                <td class="p-4 text-right">{{ formatCurrency(stock.value) }}</td>
                <td class="p-4 text-right" :class="stock.dailyChange >= 0 ? 'text-green-500' : 'text-red-500'">
                  {{ formatPercent(stock.dailyChange) }}
                </td>
                <td class="p-4 text-right" :class="stock.totalReturn >= 0 ? 'text-green-500' : 'text-red-500'">
                  {{ formatPercent(stock.totalReturn) }}
                </td>
                <td class="p-4 text-center">
                  <div class="flex justify-center space-x-2">
                    <button class="text-blue-500 hover:text-blue-700">
                      <i class="fas fa-circle-plus"></i>
                    </button>
                    <button class="text-red-500 hover:text-red-700">
                      <i class="fas fa-circle-minus"></i>
                    </button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>

            <!-- 分页控件 -->
            <div class="flex justify-between items-center p-4 border-t border-gray-200">
              <div class="text-sm text-gray-500">
                显示第 {{ (currentPage - 1) * itemsPerPage + 1 }} - {{ Math.min(currentPage * itemsPerPage, holdingsData.stocks ? holdingsData.stocks.length : 0) }} 条，
                共 {{ holdingsData.stocks ? holdingsData.stocks.length : 0 }} 条记录
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
                    v-for="page in totalPages"
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
      </div>

      <!-- 底部操作栏 -->
      <div class="bg-white rounded-lg p-4 flex justify-between items-center shadow-sm border border-gray-200">
        <div class="text-sm text-gray-500">
          显示 <span class="font-medium text-gray-700">24</span> 个资产中的 <span
            class="font-medium text-gray-700">10</span> 个
        </div>
        <div class="flex space-x-2">
          <button class="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 border border-gray-300">
            <i class="mr-2 fas fa-file-export"></i>
            导出数据
          </button>
          <button class="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700">
            <i class="mr-2 fas fa-plus"></i>
            添加资产
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import Header from "@/components/client/Header.vue";
import {currentDate, goBack} from "@/composables/Composable.js";
import {computed, onMounted, ref} from 'vue';
import Highcharts from 'highcharts';
// 分页相关数据
const currentPage = ref(1);
const itemsPerPage = ref(5);


const initPerformanceData = () => {

}

const portfolioData = ref({});
const performanceData = ref({});
const allocationData = ref([]);
const holdingsData = ref({});


const initHoldingsData = () => {
  holdingsData.value = {
    stocks: [
      {
        name: '阿里巴巴',
        code: 'BABA.NYSE',
        price: 92.76,
        quantity: 150,
        cost: 86.45,
        value: 99412.20,
        dailyChange: 2.71,
        totalReturn: 7.30,
        abbreviation: '阿',
        bgColor: 'bg-blue-900'
      },
      {
        name: '腾讯控股',
        code: '0700.HK',
        price: 342.60,
        quantity: 200,
        cost: 320.15,
        value: 68520.00,
        dailyChange: 2.03,
        totalReturn: 7.01,
        abbreviation: '腾',
        bgColor: 'bg-green-900'
      }
    ],
    funds: [
      {
        name: '易方达蓝筹精选',
        code: '005827',
        price: 1.4563,
        quantity: 85000,
        cost: 1.3245,
        value: 123785.50,
        dailyChange: 1.28,
        totalReturn: 9.95
      }
    ],
    etfs: [
      {
        name: '华夏沪深300ETF',
        code: '510330.SH',
        price: 4.27,
        quantity: 25000,
        cost: 4.05,
        value: 106750.00,
        dailyChange: 1.43,
        totalReturn: 5.43
      }
    ],
    bonds: [
      {
        name: '中国10年期国债',
        code: '190015.SH',
        yield: 2.75,
        faceValue: 100000,
        purchasePrice: 99.85,
        value: 100320.00,
        dailyChange: 0.18,
        maturityDate: '2030-05-15'
      }
    ]
  }

}
const initAllocationData = () => {
  allocationData.value=[
    {name: '股票', percentage: 45, color: '#3B82F6'},
    {name: '基金', percentage: 25, color: '#10B981'},
    {name: '债券', percentage: 15, color: '#F59E0B'},
    {name: 'ETF', percentage: 10, color: '#8B5CF6'},
    {name: '现金', percentage: 5, color: '#6B7280'}
  ]
}


const initPortfolioData = () => {

  //先用mock，后续改成接口
  portfolioData.value = {
    totalValue: 1256892.45,
    dailyChange: 3.45,
    monthlyEarnings: 28645.32,
    monthlyChange: 2.33,
    annualReturn: 12.76,
    annualChange: 0.42,
    availableCash: 125456.78
  };

  performanceData.value={
    categories: ['3月', '4月', '5月', '6月', '7月', '8月'],
    userData: [1.2, 3.5, 5.8, 8.1, 10.5, 12.8],
    benchmarkData: [0.8, 2.1, 3.7, 6.3, 8.2, 9.6]
  };

};

// 计算属性：当前页的股票数据
const paginatedStocks = computed(() => {
  if (!holdingsData.value || !holdingsData.value.stocks) return [];

  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return holdingsData.value.stocks.slice(start, end);
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

// 计算总页数
const totalPages = computed(() => {
  if (!holdingsData.value || !holdingsData.value.stocks) return 0;
  return Math.ceil(holdingsData.value.stocks.length / itemsPerPage.value);
});


// 初始化投资组合表现图表
const initPortfolioChart = () => {
  // 确保Highcharts已加载且DOM元素存在
  if (typeof Highcharts === 'undefined') {
    console.warn('Highcharts is not available');
    return;
  }

  const chartElement = document.getElementById('portfolio-chart');
  if (!chartElement) {
    console.warn('Chart element not found');
    return;
  }

  Highcharts.chart('portfolio-chart', {
    chart: {
      type: 'area',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'Inter, sans-serif'
      }
    },
    title: {
      text: null
    },
    xAxis: {
      categories: performanceData.value.categories,
      labels: {
        style: {
          color: '#6b7280'
        }
      },
      lineColor: '#e5e7eb',
      tickColor: '#e5e7eb'
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function () {
          return this.value + '%';
        },
        style: {
          color: '#6b7280'
        }
      },
      gridLineColor: '#f3f4f6'
    },
    tooltip: {
      backgroundColor: '#ffffff',
      borderColor: '#e5e7eb',
      borderRadius: 8,
      style: {
        color: '#1f2937'
      },
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': ' + this.y + '%';
      }
    },
    legend: {
      enabled: true,
      itemStyle: {
        color: '#4b5563'
      },
      itemHoverStyle: {
        color: '#1f2937'
      }
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      area: {
        marker: {
          enabled: false
        }
      },
      series: {
        marker: {
          radius: 4
        }
      }
    },
    series: [{
      name: '您的投资组合',
      color: '#3B82F6',
      fillColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, 'rgba(59, 130, 246, 0.3)'],
          [1, 'rgba(59, 130, 246, 0.0)']
        ]
      },
      data: performanceData.value.userData
    }, {
      name: '沪深300指数',
      color: '#10B981',
      fillColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, 'rgba(16, 185, 129, 0.3)'],
          [1, 'rgba(16, 185, 129, 0.0)']
        ]
      },
      data: performanceData.value.benchmarkData
    }]
  });
};


// 初始化资产分配图表
const initAllocationChart = () => {
  // 确保Highcharts已加载且DOM元素存在
  if (typeof Highcharts === 'undefined') {
    console.warn('Highcharts is not available');
    return;
  }

  const chartElement = document.getElementById('allocation-chart');
  if (!chartElement) {
    console.warn('Chart element not found');
    return;
  }

  Highcharts.chart('allocation-chart', {
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      style: {
        fontFamily: 'Inter, sans-serif'
      }
    },
    title: {
      text: null
    },
    tooltip: {
      backgroundColor: '#ffffff',
      borderColor: '#e5e7eb',
      borderRadius: 8,
      style: {
        color: '#1f2937'
      },
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: false,
        borderWidth: 0
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: '占比',
      colorByPoint: true,
      innerSize: '60%',
      data: allocationData.value.map(item => ({
        name: item.name,
        y: item.percentage,
        color: item.color
      }))
    }]
  });
};

// 格式化货币显示
const formatCurrency = (value) => {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 2
  }).format(value);
};

// 格式化百分比显示
const formatPercent = (value) => {
  return `${value > 0 ? '+' : ''}${value}%`;
};


// 图表周期选项
const chartPeriods = [
  { label: '1周', value: '1w' },
  { label: '1月', value: '1m' },
  { label: '3月', value: '3m' },
  { label: '6月', value: '6m' },
  { label: '1年', value: '1y' },
  { label: '全部', value: 'all' }
];

// 当前选中的周期
const selectedPeriod = ref('6m');

// 切换图表周期
const changePeriod = (period) => {
  selectedPeriod.value = period;
  console.log('切换到周期:', period);
  // 这里可以添加重新加载数据的逻辑
  initPortfolioData();
};


// 初始化图表
onMounted(() => {
  initPortfolioData();
  initPerformanceData();
  initAllocationData();
  initHoldingsData();
  initPortfolioChart();
  initAllocationChart();
});

</script>

<style scoped>

</style>