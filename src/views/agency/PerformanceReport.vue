<!--业绩报告-->
<template>
  <div class="font-inter bg-gray-50 text-gray-800 min-h-screen flex flex-col">
    <!-- Header -->
    <Header/>

    <!-- 主要内容区域 -->
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <!-- 页面标题 -->
      <div class="mb-8">
        <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-800">业绩报告</h1>
        <p class="text-gray-500 mt-2">查看您的业绩表现和客户资产状况</p>
      </div>

      <!-- 时间筛选器 -->
      <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex space-x-2">
            <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium flex items-center whitespace-nowrap">
              <i class="fa fa-calendar-o mr-2"></i>最近30天
            </button>
            <button class="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium flex items-center whitespace-nowrap transition-colors">
              <i class="fa fa-calendar mr-2"></i>本季度
            </button>
            <button class="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium flex items-center whitespace-nowrap transition-colors">
              <i class="fa fa-calendar-check-o mr-2"></i>本年度
            </button>
            <button class="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium flex items-center whitespace-nowrap transition-colors">
              <i class="fa fa-sliders mr-2"></i>自定义
            </button>
          </div>

          <div class="flex items-center space-x-4">
            <div class="relative">
              <select v-model="selectedClientType" class="pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm">
                <option>全部客户</option>
                <option>高净值客户</option>
                <option>普通客户</option>
                <option>新客户</option>
              </select>
              <i class="fa fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>

            <button class="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium flex items-center whitespace-nowrap hover:bg-primary/20 transition-colors">
              <i class="fa fa-download mr-2"></i>导出报告
            </button>
          </div>
        </div>
      </div>

      <!-- 关键指标卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- AUM卡片 -->
        <div class="bg-white rounded-xl shadow-sm p-6 card-hover animate-fade-in">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-gray-500 font-medium">管理资产总额</h3>
            <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <i class="fa fa-money text-primary"></i>
            </div>
          </div>
          <div class="flex items-end justify-between">
            <div>
              <p class="text-3xl font-bold">¥12.8<span class="text-xl font-normal">百万</span></p>
              <div class="flex items-center mt-2">
                <span class="text-green-500 text-sm font-medium flex items-center">
                  <i class="fa fa-arrow-up mr-1"></i>8.2%
                </span>
                <span class="text-gray-400 text-xs ml-2">较上季度</span>
              </div>
            </div>
            <div class="h-16 w-16">
              <canvas ref="aumChart"></canvas>
            </div>
          </div>
        </div>

        <!-- 客户数量卡片 -->
        <div class="bg-white rounded-xl shadow-sm p-6 card-hover animate-fade-in" style="animation-delay: 0.1s">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-gray-500 font-medium">客户总数</h3>
            <div class="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <i class="fa fa-users text-secondary"></i>
            </div>
          </div>
          <div class="flex items-end justify-between">
            <div>
              <p class="text-3xl font-bold">128<span class="text-xl font-normal">位</span></p>
              <div class="flex items-center mt-2">
                <span class="text-green-500 text-sm font-medium flex items-center">
                  <i class="fa fa-arrow-up mr-1"></i>12.4%
                </span>
                <span class="text-gray-400 text-xs ml-2">较上季度</span>
              </div>
            </div>
            <div class="h-16 w-16">
              <canvas ref="clientsChart"></canvas>
            </div>
          </div>
        </div>

        <!-- 新增客户卡片 -->
        <div class="bg-white rounded-xl shadow-sm p-6 card-hover animate-fade-in" style="animation-delay: 0.2s">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-gray-500 font-medium">新增客户</h3>
            <div class="h-10 w-10 rounded-full bg-warning/10 flex items-center justify-center">
              <i class="fa fa-user-plus text-warning"></i>
            </div>
          </div>
          <div class="flex items-end justify-between">
            <div>
              <p class="text-3xl font-bold">18<span class="text-xl font-normal">位</span></p>
              <div class="flex items-center mt-2">
                <span class="text-red-500 text-sm font-medium flex items-center">
                  <i class="fa fa-arrow-down mr-1"></i>3.1%
                </span>
                <span class="text-gray-400 text-xs ml-2">较上季度</span>
              </div>
            </div>
            <div class="h-16 w-16">
              <canvas ref="newClientsChart"></canvas>
            </div>
          </div>
        </div>

        <!-- 投资收益卡片 -->
        <div class="bg-white rounded-xl shadow-sm p-6 card-hover animate-fade-in" style="animation-delay: 0.3s">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-gray-500 font-medium">平均投资收益</h3>
            <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <i class="fa fa-line-chart text-primary"></i>
            </div>
          </div>
          <div class="flex items-end justify-between">
            <div>
              <p class="text-3xl font-bold">7.6<span class="text-xl font-normal">%</span></p>
              <div class="flex items-center mt-2">
                <span class="text-green-500 text-sm font-medium flex items-center">
                  <i class="fa fa-arrow-up mr-1"></i>2.3%
                </span>
                <span class="text-gray-400 text-xs ml-2">较上季度</span>
              </div>
            </div>
            <div class="h-16 w-16">
              <canvas ref="roiChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      <!-- 图表和表格区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- 资产管理趋势图 -->
        <div class="bg-white rounded-xl shadow-sm p-6 lg:col-span-2 animate-fade-in">
          <div class="flex items-center justify-between mb-6">
            <h3 class="font-semibold text-lg">资产管理趋势</h3>
            <div class="flex space-x-2">
              <button class="px-3 py-1 text-xs bg-primary/10 text-primary rounded-md">AUM</button>
              <button class="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">客户数</button>
              <button class="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">收益</button>
            </div>
          </div>
          <div class="h-80">
            <canvas ref="aumTrendChart"></canvas>
          </div>
        </div>

        <!-- 客户资产分布 -->
        <div class="bg-white rounded-xl shadow-sm p-6 animate-fade-in" style="animation-delay: 0.2s">
          <div class="flex items-center justify-between mb-6">
            <h3 class="font-semibold text-lg">客户资产分布</h3>
            <button class="text-gray-400 hover:text-gray-600">
              <i class="fa fa-ellipsis-v"></i>
            </button>
          </div>
          <div class="h-80 flex items-center justify-center">
            <canvas ref="assetDistributionChart"></canvas>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="flex items-center">
              <div class="h-3 w-3 rounded-full bg-primary mr-2"></div>
              <span class="text-sm text-gray-600">高净值客户</span>
            </div>
            <div class="flex items-center">
              <div class="h-3 w-3 rounded-full bg-secondary mr-2"></div>
              <span class="text-sm text-gray-600">普通客户</span>
            </div>
            <div class="flex items-center">
              <div class="h-3 w-3 rounded-full bg-warning mr-2"></div>
              <span class="text-sm text-gray-600">新客户</span>
            </div>
            <div class="flex items-center">
              <div class="h-3 w-3 rounded-full bg-gray-300 mr-2"></div>
              <span class="text-sm text-gray-600">流失客户</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 投资产品分布和客户活跃度 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- 投资产品分布 -->
        <div class="bg-white rounded-xl shadow-sm p-6 animate-fade-in">
          <div class="flex items-center justify-between mb-6">
            <h3 class="font-semibold text-lg">投资产品分布</h3>
            <button class="text-gray-400 hover:text-gray-600">
              <i class="fa fa-ellipsis-v"></i>
            </button>
          </div>
          <div class="h-80 flex items-center justify-center">
            <canvas ref="productDistributionChart"></canvas>
          </div>
        </div>

        <!-- 客户活跃度 -->
        <div class="bg-white rounded-xl shadow-sm p-6 lg:col-span-2 animate-fade-in" style="animation-delay: 0.2s">
          <div class="flex items-center justify-between mb-6">
            <h3 class="font-semibold text-lg">客户活跃度</h3>
            <div class="flex items-center space-x-4">
              <div class="relative">
                <select v-model="selectedActivityPeriod" class="pl-4 pr-10 py-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm">
                  <option>近30天</option>
                  <option>近90天</option>
                  <option>近180天</option>
                </select>
                <i class="fa fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              </div>
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fa fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
          <div class="h-80">
            <canvas ref="clientActivityChart"></canvas>
          </div>
        </div>
      </div>

      <!-- 客户排名表格 -->
      <div class="bg-white rounded-xl shadow-sm p-6 mb-8 animate-fade-in">
        <div class="flex items-center justify-between mb-6">
          <h3 class="font-semibold text-lg">客户资产排名</h3>
          <div class="flex items-center space-x-4">
            <div class="relative">
              <select v-model="selectedRankingType" class="pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm">
                <option>按资产规模</option>
                <option>按收益</option>
                <option>按活跃度</option>
                <option>按新增资金</option>
              </select>
              <i class="fa fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <i class="fa fa-download"></i>
            </button>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">排名</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">客户名称</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">资产规模</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">收益</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">风险等级</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">关系时长</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="client in topClients" :key="client.id" class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div :class="`h-8 w-8 rounded-full ${client.rank <= 3 ? 'bg-primary/10 text-primary' : 'bg-gray-200 text-gray-700'} flex items-center justify-center font-medium`">
                    {{ client.rank }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">

                  <div>
                    <div class="text-sm font-medium text-gray-900">{{ client.name }}</div>
                    <div class="text-xs text-gray-500">{{ client.type }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ client.assets }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="text-sm font-medium text-green-600">{{ client.return }}</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskLevelClass(client.risk)}`">
                    {{ client.risk }}
                  </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ client.duration }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-primary hover:text-primary/80">查看详情</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="flex justify-between items-center mt-6">
          <span class="text-sm text-gray-500">显示 1-5 条，共 28 条</span>
          <div class="flex space-x-1">
            <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
              <i class="fa fa-angle-left"></i>
            </button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white">1</button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">2</button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">3</button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup>
import {ref, onMounted, watch, onBeforeUnmount} from 'vue'
import Chart from 'chart.js/auto'
import Header from "@/components/agency/Header.vue";

// 用户菜单状态
const showUserMenu = ref(false)
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

// 关闭用户菜单当点击其他地方
const closeUserMenu = (event) => {
  if (!event.target.closest('.relative')) {
    showUserMenu.value = false
  }
}

// 添加全局点击事件监听
onMounted(() => {
  document.addEventListener('click', closeUserMenu)
})

// 表单数据
const selectedClientType = ref('全部客户')
const selectedActivityPeriod = ref('近30天')
const selectedRankingType = ref('按资产规模')

// 客户数据
const topClients = ref([
  {
    id: 1,
    rank: 1,
    name: '张明',
    type: '高净值客户',
    avatar: 'https://picsum.photos/seed/client10/40/40',
    assets: '¥2,450,000',
    return: '+9.2%',
    risk: '中高风险',
    duration: '3年2个月'
  },
  {
    id: 2,
    rank: 2,
    name: '李婷',
    type: '高净值客户',
    avatar: 'https://picsum.photos/seed/client11/40/40',
    assets: '¥1,875,000',
    return: '+8.7%',
    risk: '中等风险',
    duration: '2年5个月'
  },
  {
    id: 3,
    rank: 3,
    name: '王建国',
    type: '高净值客户',
    avatar: 'https://picsum.photos/seed/client12/40/40',
    assets: '¥1,630,000',
    return: '+7.8%',
    risk: '高风险',
    duration: '4年1个月'
  },
  {
    id: 4,
    rank: 4,
    name: '赵小雨',
    type: '普通客户',
    avatar: 'https://picsum.photos/seed/client13/40/40',
    assets: '¥1,240,000',
    return: '+6.5%',
    risk: '中低风险',
    duration: '1年8个月'
  },
  {
    id: 5,
    rank: 5,
    name: '陈明',
    type: '普通客户',
    avatar: 'https://picsum.photos/seed/client14/40/40',
    assets: '¥980,000',
    return: '+8.1%',
    risk: '中等风险',
    duration: '2年3个月'
  }
])

// 风险等级样式
const getRiskLevelClass = (risk) => {
  switch(risk) {
    case '中高风险':
      return 'bg-yellow-100 text-yellow-800'
    case '中等风险':
      return 'bg-blue-100 text-blue-800'
    case '高风险':
      return 'bg-red-100 text-red-800'
    case '中低风险':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

// 图表引用
const aumChart = ref(null)
const clientsChart = ref(null)
const newClientsChart = ref(null)
const roiChart = ref(null)
const aumTrendChart = ref(null)
const assetDistributionChart = ref(null)
const productDistributionChart = ref(null)
const clientActivityChart = ref(null)

// 初始化图表
const initCharts = () => {
  // 迷你图表 - AUM
  new Chart(aumChart.value, {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [{
        data: [9.8, 10.2, 10.5, 11.2, 12.1, 12.8],
        borderColor: '#165DFF',
        backgroundColor: 'rgba(22, 93, 255, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { display: false }
      },
      elements: {
        line: { borderWidth: 2 }
      }
    }
  })

  // 迷你图表 - 客户数
  new Chart(clientsChart.value, {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [{
        data: [95, 102, 108, 115, 122, 128],
        borderColor: '#36D399',
        backgroundColor: 'rgba(54, 211, 153, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { display: false }
      },
      elements: {
        line: { borderWidth: 2 }
      }
    }
  })

  // 迷你图表 - 新增客户
  new Chart(newClientsChart.value, {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [{
        data: [15, 18, 22, 20, 19, 18],
        borderColor: '#FFAB00',
        backgroundColor: 'rgba(255, 171, 0, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { display: false }
      },
      elements: {
        line: { borderWidth: 2 }
      }
    }
  })

  // 迷你图表 - 投资收益
  new Chart(roiChart.value, {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [{
        data: [5.2, 5.8, 6.1, 6.8, 7.2, 7.6],
        borderColor: '#165DFF',
        backgroundColor: 'rgba(22, 93, 255, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { display: false }
      },
      elements: {
        line: { borderWidth: 2 }
      }
    }
  })

  // AUM趋势图
  new Chart(aumTrendChart.value, {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      datasets: [{
        label: '管理资产总额(百万)',
        data: [9.2, 9.8, 10.2, 10.5, 10.9, 11.5, 11.8, 12.1, 12.3, 12.5, 12.7, 12.8],
        borderColor: '#165DFF',
        backgroundColor: 'rgba(22, 93, 255, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2,
        pointBackgroundColor: '#165DFF',
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#1E293B',
          bodyColor: '#1E293B',
          borderColor: '#E2E8F0',
          borderWidth: 1,
          padding: 12,
          boxPadding: 6,
          usePointStyle: true,
          callbacks: {
            label: function(context) {
              return `管理资产: ${context.raw} 百万`
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#94A3B8' }
        },
        y: {
          beginAtZero: false,
          grid: { color: '#E2E8F0' },
          ticks: { color: '#94A3B8', callback: function(value) {
              return value + 'M'
            }}
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      },
      elements: {
        line: { tension: 0.3 }
      }
    }
  })

  // 客户资产分布图
  new Chart(assetDistributionChart.value, {
    type: 'doughnut',
    data: {
      labels: ['高净值客户', '普通客户', '新客户', '流失客户'],
      datasets: [{
        data: [45, 35, 15, 5],
        backgroundColor: [
          '#165DFF',
          '#36D399',
          '#FFAB00',
          '#E2E8F0'
        ],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#1E293B',
          bodyColor: '#1E293B',
          borderColor: '#E2E8F0',
          borderWidth: 1,
          padding: 12,
          boxPadding: 6,
          usePointStyle: true,
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.raw}%`
            }
          }
        }
      },
      cutout: '70%'
    }
  })

  // 投资产品分布图
  new Chart(productDistributionChart.value, {
    type: 'pie',
    data: {
      labels: ['股票型基金', '债券型基金', '混合型基金', '理财产品', '其他'],
      datasets: [{
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          '#165DFF',
          '#36D399',
          '#FFAB00',
          '#7C3AED',
          '#94A3B8'
        ],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#1E293B',
          bodyColor: '#1E293B',
          borderColor: '#E2E8F0',
          borderWidth: 1,
          padding: 12,
          boxPadding: 6,
          usePointStyle: true,
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.raw}%`
            }
          }
        }
      }
    }
  })

  // 客户活跃度图
  new Chart(clientActivityChart.value, {
    type: 'bar',
    data: {
      labels: ['高活跃度', '中高活跃度', '中等活跃度', '中低活跃度', '低活跃度'],
      datasets: [{
        label: '客户数量',
        data: [25, 35, 40, 20, 8],
        backgroundColor: [
          'rgba(22, 93, 255, 0.8)',
          'rgba(22, 93, 255, 0.6)',
          'rgba(22, 93, 255, 0.4)',
          'rgba(22, 93, 255, 0.3)',
          'rgba(22, 93, 255, 0.2)'
        ],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#1E293B',
          bodyColor: '#1E293B',
          borderColor: '#E2E8F0',
          borderWidth: 1,
          padding: 12,
          boxPadding: 6,
          usePointStyle: true
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#94A3B8' }
        },
        y: {
          beginAtZero: true,
          grid: { color: '#E2E8F0' },
          ticks: { color: '#94A3B8' }
        }
      }
    }
  })
}

// 监听筛选条件变化
watch([selectedClientType, selectedActivityPeriod, selectedRankingType], () => {
  // 这里可以添加筛选逻辑，更新图表数据
  console.log('筛选条件变化:', {
    clientType: selectedClientType.value,
    activityPeriod: selectedActivityPeriod.value,
    rankingType: selectedRankingType.value
  })
})

// 组件挂载后初始化图表
onMounted(() => {
  initCharts()

  // 为元素添加淡入动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.animate-fade-in').forEach(el => {
    if (!el.classList.contains('animate-fade-in')) {
      observer.observe(el)
    }
  })
})

// 组件卸载前清理
onBeforeUnmount(() => {
  document.removeEventListener('click', closeUserMenu)
})
</script>

<style>

</style>