<template>

  <!-- Header -->
  <Header/>

  <div class="main bg-white text-black font-sans">
    <!-- 头部 -->
    <div class="ml-0 md:ml-16 p-4 md:p-6 bg-white border-b border-gray-200">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 class="text-xl md:text-2xl font-semibold flex items-center">
            交易中心
            <i class="text-blue-500 ml-1 text-base md:text-lg inline-flex items-center" data-fa-i2svg="">
              <svg class="svg-inline--fa fa-circle-check w-4 h-4 md:w-5 md:h-5" aria-hidden="true" focusable="false"
                   data-prefix="fas"
                   data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                   data-fa-i2svg="">
                <path fill="currentColor"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
              </svg>
            </i>
          </h1>
          <p class="text-gray-600 text-sm">
            {{ currentDate }}
          </p>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
          <div class="relative w-full md:w-64">
            <input type="text" placeholder="搜索股票、债券、基金..."
                   class="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            <i class="absolute left-3 top-3 text-gray-500" data-fa-i2svg="">
              <svg class="svg-inline--fa fa-magnifying-glass w-4 h-4" aria-hidden="true" focusable="false"
                   data-prefix="fas"
                   data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                   data-fa-i2svg="">
                <path fill="currentColor"
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
              </svg>
            </i>
          </div>
          <button
              class="bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 flex items-center w-full md:w-auto justify-center">
            <i class="mr-2" data-fa-i2svg="">
              <svg class="svg-inline--fa fa-plus w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas"
                   data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                   data-fa-i2svg="">
                <path fill="currentColor"
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
              </svg>
            </i>
            <span class="">搜索</span>
          </button>
        </div>
      </div>
    </div>

    <div id="main-content" class="ml-0 md:ml-16 px-4 md:px-6 py-6 bg-white text-black">
      <!-- 交易界面 -->
      <div id="trading-interface" class="flex flex-col lg:flex-row gap-6">
        <!-- 交易区 -->
        <div id="trading-left" class="w-full">
          <!-- 交易选项卡 -->
          <div id="trading-tabs" class="mb-6">
            <div class="flex border-b border-gray-200">
              <button class="py-3 px-6 text-blue-500 border-b-2 border-blue-500 font-medium">股票</button>
              <button class="py-3 px-6 text-gray-500 hover:text-black">债券</button>
              <button class="py-3 px-6 text-gray-500 hover:text-black">ETF</button>
              <button class="py-3 px-6 text-gray-500 hover:text-black">基金</button>
            </div>
          </div>

          <!-- 交易表单 -->
          <div id="trading-form" class="bg-white border border-gray-200 rounded-lg p-4 md:p-6 mb-6 shadow-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 mb-2">交易类型</label>
                <div class="flex mb-4">
                  <button class="flex-1 bg-blue-600 text-white py-2 rounded-l-lg">买入</button>
                  <button class="flex-1 bg-gray-200 text-gray-700 py-2 rounded-r-lg">卖出</button>
                </div>

                <label class="block text-gray-700 mb-2">股票代码</label>
                <div class="relative mb-4">
                  <input type="text" value="BABA.NYSE"
                         class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <i class="fa-solid fa-search absolute right-3 top-3 text-gray-400"></i>
                </div>

                <div class="flex justify-between text-sm mb-4">
                  <span class="text-gray-600">股票名称：</span>
                  <span class="text-black">阿里巴巴</span>
                </div>

                <div class="flex justify-between text-sm mb-4">
                  <span class="text-gray-600">当前价格：</span>
                  <span class="text-black">$92.76</span>
                </div>

                <div class="flex justify-between text-sm mb-4">
                  <span class="text-gray-600">涨跌幅：</span>
                  <span class="text-green-600">+2.71%</span>
                </div>
              </div>

              <div>
                <label class="block text-gray-700 mb-2">委托价格</label>
                <div class="flex mb-4">
                  <button class="flex-1 bg-blue-600 text-white py-2 rounded-l-lg">市价</button>
                  <button class="flex-1 bg-gray-200 text-gray-700 py-2 rounded-r-lg">限价</button>
                </div>

                <label class="block text-gray-700 mb-2">委托数量</label>
                <div class="relative mb-4">
                  <input type="number" value="100"
                         class="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <span class="absolute right-3 top-2.5 text-gray-500">股</span>
                </div>

                <label class="block text-gray-700 mb-2">交易金额</label>
                <div class="relative mb-4">
                  <input type="text" value="9,276.00" disabled=""
                         class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none">
                  <span class="absolute right-3 top-2.5 text-gray-500">USD</span>
                </div>

                <div class="flex justify-between text-sm mb-4">
                  <span class="text-gray-600">可用资金：</span>
                  <span class="text-black">￥85,421.36</span>
                </div>
              </div>
            </div>

            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-4 font-medium">
              确认下单
            </button>
          </div>

          <!-- 股票详情图表 -->
          <div id="stock-chart" class="bg-white border border-gray-200 rounded-lg p-4 md:p-6 mb-6 shadow-sm">
            <div class="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-4">
              <div>
                <h3 class="text-lg font-medium">阿里巴巴 (BABA.NYSE)</h3>
                <div class="flex items-center mt-1">
                  <span class="text-2xl font-semibold mr-3">$92.76</span>
                  <span class="text-green-600 flex items-center">
                    <i class="fa-solid fa-caret-up mr-1"></i>
                    +$2.45 (+2.71%)
                  </span>
                </div>
              </div>
              <div class="flex space-x-2">
                <button class="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg">
                  <i class="fa-solid fa-star text-gray-600"></i>
                </button>
                <button class="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg">
                  <i class="fa-solid fa-share text-gray-600"></i>
                </button>
              </div>
            </div>

            <div id="alibaba-detail-chart" class="h-64 w-full">
              <canvas ref="chartCanvas"></canvas>
            </div>

            <div class="flex flex-wrap justify-between mt-4 gap-2">
              <div class="flex flex-wrap gap-2">
                <button
                    v-for="period in chartPeriods"
                    :key="period"
                    @click="changePeriod(period)"
                    :class="[
                    'text-sm pb-1 px-1',
                    currentPeriod === period
                      ? 'text-blue-500 border-b-2 border-blue-500'
                      : 'text-gray-500 hover:text-black'
                  ]"
                >
                  {{ period }}
                </button>
              </div>
              <div class="flex space-x-2">
                <button
                    @click="changeChartType('line')"
                    :class="[
                    'p-1 rounded',
                    chartType === 'line'
                      ? 'bg-blue-100'
                      : 'bg-gray-100 hover:bg-gray-200'
                  ]"
                >
                  <i class="fa-solid fa-chart-line text-gray-600 text-sm"></i>
                </button>
                <button
                    @click="changeChartType('bar')"
                    :class="[
                    'p-1 rounded',
                    chartType === 'bar'
                      ? 'bg-blue-100'
                      : 'bg-gray-100 hover:bg-gray-200'
                  ]"
                >
                  <i class="fa-solid fa-chart-bar text-gray-600 text-sm"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useCurrentDate} from "@/composables/composable.js";

const {currentDate} = useCurrentDate()
import Header from "@/components/client/Header.vue";
import {ref, onMounted} from 'vue';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// 注册Chart.js组件
Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    BarController,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// 图表相关数据
const chartCanvas = ref(null);
const chartInstance = ref(null);
const currentPeriod = ref('1天');
const chartType = ref('line');

const chartPeriods = ['1天', '5天', '1月', '3月', '1年', '5年'];

// Mock数据
const generateMockData = () => {
  const data = [];
  const labels = [];
  let baseValue = 90;

  // 根据不同时间段生成不同数量的数据点
  let dataPoints = 20;
  if (currentPeriod.value === '5天') dataPoints = 25;
  if (currentPeriod.value === '1月') dataPoints = 30;
  if (currentPeriod.value === '3月') dataPoints = 120;
  if (currentPeriod.value === '1年') dataPoints = 250;
  if (currentPeriod.value === '5年') dataPoints = 1250;

  for (let i = 0; i < dataPoints; i++) {
    // 生成随机波动值
    const change = (Math.random() - 0.5) * 2;
    baseValue += change;

    // 确保价格不会低于0
    if (baseValue < 0) baseValue = Math.abs(change);

    data.push(parseFloat(baseValue.toFixed(2)));

    // 生成标签
    if (currentPeriod.value === '1天') {
      const hour = Math.floor(i * (24 / dataPoints));
      const minute = Math.floor((i * (24 / dataPoints) - hour) * 60);
      labels.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
    } else if (currentPeriod.value === '5天') {
      labels.push(`第${i + 1}天`);
    } else {
      labels.push(`第${i + 1}单位`);
    }
  }

  return {data, labels};
};

// 创建图表
const createChart = () => {
  if (chartInstance.value) {
    chartInstance.value.destroy();
  }

  const ctx = chartCanvas.value.getContext('2d');
  const {data, labels} = generateMockData();

  chartInstance.value = new Chart(ctx, {
    type: chartType.value,
    data: {
      labels: labels,
      datasets: [{
        label: '股价',
        data: data,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 5,
        fill: chartType.value === 'line',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    }
  });
};

// 更改时间周期
const changePeriod = (period) => {
  currentPeriod.value = period;
  createChart();
};

// 更改图表类型
const changeChartType = (type) => {
  chartType.value = type;
  createChart();
};

// 组件挂载后初始化图表
onMounted(() => {
  createChart();
});
</script>

<style scoped>
.main {
  font-family: 'Inter', sans-serif !important;
}

#alibaba-detail-chart {
  position: relative;
}
</style>
