<!--佣金历史-->
<template>
  <div class="bg-light-3 font-inter text-dark min-h-screen flex flex-col">
    <!-- 顶部导航栏 -->
    <Header/>
    <!-- 主内容区 -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <!-- 页面标题和面包屑 -->
      <div class="mb-8 animate-fade-in">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-[clamp(1.5rem,3vw,2rem)] font-bold">佣金历史</h2>
          <div class="flex space-x-2">
            <button class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center">
              <i class="fa fa-download mr-2"></i>导出报表
            </button>
            <button class="bg-white hover:bg-light-2 text-dark border border-light-1 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center">
              <i class="fa fa-refresh mr-2"></i>刷新
            </button>
          </div>
        </div>
      </div>

      <!-- 统计卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-up" style="animation-delay: 0.1s">
        <CommissionStatCard
            title="累计佣金"
            value="¥156,800"
            icon="line-chart"
            iconColor="primary"
            trend="up"
            trendValue="12.5%"
            trendText="较上季度"
        />

        <CommissionStatCard
            title="本季度佣金"
            value="¥42,600"
            icon="calendar-check-o"
            iconColor="secondary"
            trend="up"
            trendValue="8.3%"
            trendText="较上季度"
        />

        <CommissionStatCard
            title="本月佣金"
            value="¥15,800"
            icon="clock-o"
            iconColor="warning"
            trend="down"
            trendValue="3.1%"
            trendText="较上月"
        />

        <CommissionStatCard
            title="待结算佣金"
            value="¥8,250"
            icon="hourglass-half"
            iconColor="primary"
            trend="up"
            trendValue="5.7%"
            trendText="较上周"
        />
      </div>

      <!-- 图表和表格区域 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- 佣金趋势图 -->
        <div class="bg-white rounded-xl p-6 card-shadow lg:col-span-2 animate-slide-up" style="animation-delay: 0.2s">
          <div class="flex justify-between items-center mb-6">
            <h3 class="font-semibold text-lg">佣金趋势</h3>
            <div class="flex space-x-2">
              <button
                  v-for="(tab, index) in trendTabs"
                  :key="index"
                  @click="activeTrendTab = tab"
                  :class="[
                  'px-3 py-1 text-xs rounded-full transition-colors duration-200',
                  activeTrendTab === tab
                    ? 'bg-primary text-white'
                    : 'bg-light-2 text-dark-2 hover:bg-light-1'
                ]"
              >
                {{ tab }}
              </button>
            </div>
          </div>
          <div class="h-[300px]">
            <canvas ref="commissionChart"></canvas>
          </div>
        </div>

        <!-- 佣金构成 -->
        <div class="bg-white rounded-xl p-6 card-shadow animate-slide-up" style="animation-delay: 0.3s">
          <div class="flex justify-between items-center mb-6">
            <h3 class="font-semibold text-lg">佣金构成</h3>
            <button class="text-primary text-sm hover:underline">查看详情</button>
          </div>
          <div class="h-[300px] flex items-center justify-center">
            <canvas ref="commissionBreakdownChart"></canvas>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-4">
            <div v-for="(item, index) in breakdownItems" :key="index" class="flex items-center">
              <div :class="`h-3 w-3 rounded-full bg-${item.color}/10 mr-2`"></div>
              <span class="text-sm">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 佣金明细表格 -->
      <div class="bg-white rounded-xl card-shadow p-6 animate-slide-up" style="animation-delay: 0.4s">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h3 class="font-semibold text-lg mb-4 sm:mb-0">佣金明细</h3>
          <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
            <div class="relative">
              <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="搜索交易ID/客户名称"
                  class="pl-10 pr-4 py-2 border border-light-1 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
              >
              <i class="fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-dark-2"></i>
            </div>

            <div class="relative">
              <select
                  v-model="selectedProductType"
                  class="pl-4 pr-10 py-2 border border-light-1 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
              >
                <option v-for="type in productTypes" :key="type" :value="type">
                  {{ type }}
                </option>
              </select>
              <i class="fa fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-dark-2 pointer-events-none"></i>
            </div>

            <div class="relative">
              <select
                  v-model="selectedStatus"
                  class="pl-4 pr-10 py-2 border border-light-1 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
              >
                <option v-for="status in statusOptions" :key="status" :value="status">
                  {{ status }}
                </option>
              </select>
              <i class="fa fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-dark-2 pointer-events-none"></i>
            </div>

            <div class="relative">
              <input
                  v-model="selectedMonth"
                  type="month"
                  class="pl-4 pr-2 py-2 border border-light-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
              >
            </div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-light-2">
            <thead>
            <tr>
              <th
                  v-for="(header, index) in tableHeaders"
                  :key="index"
                  scope="col"
                  :class="[
                    'px-6 py-3 text-left text-xs font-medium text-dark-2 uppercase tracking-wider',
                    header.align === 'right' ? 'text-right' : 'text-left'
                  ]"
              >
                {{ header.text }}
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-light-2">
            <tr
                v-for="(transaction, index) in filteredTransactions"
                :key="index"
                class="hover:bg-light-3 transition-colors duration-150"
            >
              <td class="px-6 py-4 whitespace-nowrap text-sm text-dark">{{ transaction.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-dark">{{ transaction.client }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="`px-2 py-1 text-xs rounded-full bg-${transaction.product.color}/10 text-${transaction.product.color}`">
                    {{ transaction.product.type }}
                  </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-dark">{{ transaction.amount }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-dark">{{ transaction.rate }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium" :class="`text-${transaction.status.color}`">
                {{ transaction.commission }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-dark-2">{{ transaction.date }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="`px-2 py-1 text-xs rounded-full bg-${transaction.status.color}/10 text-${transaction.status.color}`">
                    {{ transaction.status.text }}
                  </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-primary hover:text-primary/80">详情</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <!-- 分页 -->
        <div class="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm">
          <div class="text-dark-2 mb-4 sm:mb-0">
            显示 <span class="font-medium">1</span> 到 <span class="font-medium">5</span> 条，共 <span class="font-medium">42</span> 条记录
          </div>
          <div class="flex space-x-1">
            <button
                v-for="(page, index) in pagination"
                :key="index"
                :disabled="page.disabled"
                :class="[
                'px-3 py-1 rounded border transition-colors duration-200',
                page.active
                  ? 'border-primary bg-primary text-white'
                  : 'border-light-1 hover:border-primary hover:text-primary',
                page.disabled ? 'opacity-50 cursor-not-allowed' : ''
              ]"
            >
              <i v-if="page.icon" :class="`fa fa-angle-${page.icon}`"></i>
              <span v-else>{{ page.number }}</span>
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- 页脚 -->
    <Footer/>
    <!-- 悬浮帮助按钮 -->
    <FloatingHelpButton/>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import Chart from 'chart.js/auto'
import Header from "@/components/agency/Header.vue";
import Footer from '@/components/agency/Footer.vue'
import FloatingHelpButton from '@/components/agency/FloatingHelpButton.vue'

// 统计卡片组件
const CommissionStatCard = {
  props: {
    title: String,
    value: String,
    icon: String,
    iconColor: String,
    trend: String,
    trendValue: String,
    trendText: String
  },
  template: `
    <div class="bg-white rounded-xl p-6 card-shadow hover-scale">
      <div class="flex justify-between items-start mb-4">
        <div>
          <p class="text-dark-2 text-sm">{{ title }}</p>
          <h3 class="text-2xl font-bold mt-1">{{ value }}</h3>
        </div>
        <div :class="\`h-10 w-10 rounded-lg bg-\${iconColor}/10 flex items-center justify-center text-\${iconColor}\`">
          <i :class="\`fa fa-\${icon} text-xl\`"></i>
        </div>
      </div>
      <div class="flex items-center text-sm">
        <span :class="\`text-\${trend === 'up' ? 'success' : 'danger'} flex items-center\`">
          <i :class="\`fa fa-arrow-\${trend} mr-1\`"></i>{{ trendValue }}
        </span>
        <span class="text-dark-2 ml-2">{{ trendText }}</span>
      </div>
    </div>
  `
}

// 数据状态
const activeTrendTab = ref('月度')
const trendTabs = ['月度', '季度', '年度']

const breakdownItems = [
  { label: '股票投资', color: 'primary' },
  { label: '基金产品', color: 'secondary' },
  { label: '债券投资', color: 'warning' },
  { label: '其他产品', color: 'danger' }
]

const searchQuery = ref('')
const selectedProductType = ref('全部产品类型')
const productTypes = ['全部产品类型', '股票投资', '基金产品', '债券投资', '其他产品']

const selectedStatus = ref('全部状态')
const statusOptions = ['全部状态', '已结算', '待结算', '已取消']

const selectedMonth = ref('')

const tableHeaders = [
  { text: '交易ID', align: 'left' },
  { text: '客户名称', align: 'left' },
  { text: '产品类型', align: 'left' },
  { text: '交易金额', align: 'left' },
  { text: '佣金比例', align: 'left' },
  { text: '佣金金额', align: 'left' },
  { text: '交易日期', align: 'left' },
  { text: '结算状态', align: 'left' },
  { text: '操作', align: 'right' }
]

const transactions = ref([
  {
    id: 'INV-20230615-001',
    client: '张明',
    product: { type: '股票投资', color: 'primary' },
    amount: '¥50,000.00',
    rate: '2.5%',
    commission: '¥1,250.00',
    date: '2023-06-15',
    status: { text: '已结算', color: 'success' }
  },
  {
    id: 'INV-20230618-002',
    client: '李华',
    product: { type: '基金产品', color: 'secondary' },
    amount: '¥120,000.00',
    rate: '3.0%',
    commission: '¥3,600.00',
    date: '2023-06-18',
    status: { text: '已结算', color: 'success' }
  },
  {
    id: 'INV-20230620-003',
    client: '王芳',
    product: { type: '债券投资', color: 'warning' },
    amount: '¥80,000.00',
    rate: '1.8%',
    commission: '¥1,440.00',
    date: '2023-06-20',
    status: { text: '已结算', color: 'success' }
  },
  {
    id: 'INV-20230705-004',
    client: '赵强',
    product: { type: '股票投资', color: 'primary' },
    amount: '¥150,000.00',
    rate: '2.8%',
    commission: '¥4,200.00',
    date: '2023-07-05',
    status: { text: '待结算', color: 'warning' }
  },
  {
    id: 'INV-20230710-005',
    client: '陈明',
    product: { type: '基金产品', color: 'secondary' },
    amount: '¥200,000.00',
    rate: '3.2%',
    commission: '¥6,400.00',
    date: '2023-07-10',
    status: { text: '待结算', color: 'warning' }
  }
])

const pagination = ref([
  { icon: 'left', disabled: true },
  { number: 1, active: true },
  { number: 2, active: false },
  { number: 3, active: false },
  { number: 4, active: false },
  { number: 5, active: false },
  { icon: 'right', disabled: false }
])

const footerLinks = ['关于我们', '服务条款', '隐私政策', '联系我们', '帮助中心']
const socialMedia = [
  { icon: 'weixin' },
  { icon: 'weibo' },
  { icon: 'linkedin' }
]

// 计算属性
const filteredTransactions = computed(() => {
  return transactions.value.filter(transaction => {
    // 搜索过滤
    const matchesSearch = searchQuery.value === '' ||
        transaction.id.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        transaction.client.toLowerCase().includes(searchQuery.value.toLowerCase())

    // 产品类型过滤
    const matchesProduct = selectedProductType.value === '全部产品类型' ||
        transaction.product.type === selectedProductType.value

    // 状态过滤
    const matchesStatus = selectedStatus.value === '全部状态' ||
        transaction.status.text === selectedStatus.value

    // 月份过滤 (简化处理)
    const matchesMonth = selectedMonth.value === '' ||
        transaction.date.startsWith(selectedMonth.value.substring(0, 7))

    return matchesSearch && matchesProduct && matchesStatus && matchesMonth
  })
})

// 图表引用
const commissionChart = ref(null)
const commissionBreakdownChart = ref(null)

// 初始化图表
const initCharts = () => {
  // 佣金趋势图表
  new Chart(commissionChart.value, {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      datasets: [{
        label: '佣金收入 (元)',
        data: [12500, 14200, 13800, 16500, 15200, 14800, 15800, 17200, 18500, 19200, 20500, 21800],
        borderColor: '#165DFF',
        backgroundColor: 'rgba(22, 93, 255, 0.1)',
        tension: 0.4,
        fill: true
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
          intersect: false,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#1D2129',
          bodyColor: '#4E5969',
          borderColor: '#E5E6EB',
          borderWidth: 1,
          padding: 12,
          boxPadding: 6,
          usePointStyle: true,
          callbacks: {
            label: function(context) {
              return `佣金: ¥${context.parsed.y.toLocaleString()}`
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '¥' + value.toLocaleString()
            }
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      },
      elements: {
        point: {
          radius: 3,
          hoverRadius: 6
        }
      }
    }
  })

  // 佣金构成图表
  new Chart(commissionBreakdownChart.value, {
    type: 'doughnut',
    data: {
      labels: ['股票投资', '基金产品', '债券投资', '其他产品'],
      datasets: [{
        data: [35, 30, 20, 15],
        backgroundColor: [
          '#165DFF',
          '#36CFC9',
          '#FF7D00',
          '#F53F3F'
        ],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          titleColor: '#1D2129',
          bodyColor: '#4E5969',
          borderColor: '#E5E6EB',
          borderWidth: 1,
          padding: 12,
          boxPadding: 6,
          usePointStyle: true,
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.parsed}%`
            }
          }
        }
      }
    }
  })
}

// 导航栏滚动效果
const setupHeaderScroll = () => {
  const header = document.getElementById('main-header')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('shadow-md')
      header.classList.remove('shadow-sm')
    } else {
      header.classList.remove('shadow-md')
      header.classList.add('shadow-sm')
    }
  })
}

// 平滑滚动
const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
}

// 组件挂载后初始化
onMounted(() => {
  initCharts()
  setupHeaderScroll()
  setupSmoothScroll()

  // 为元素添加淡入动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.animate-fade-in, .animate-slide-up').forEach(el => {
    if (!el.classList.contains('animate-fade-in') && !el.classList.contains('animate-slide-up')) {
      observer.observe(el)
    }
  })
})
</script>

<style>


@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
</style>