<template>
  <div id="bg-gray-50 font-sans dashboard-page">
    <!-- Header -->
    <Header/>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Welcome Section -->
      <div id="welcome-section" class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold text-gray-800">欢迎回来，张女士</h2>
            <p class="text-gray-600 mt-1">今日市场表现良好，您的投资组合上涨 2.3%</p>
          </div>
          <div class="text-right">
            <div class="text-sm text-gray-500">总资产价值</div>
            <div class="text-2xl font-bold text-wealth">¥2,458,900</div>
            <div class="text-sm text-wealth flex items-center">
              <i class="fa-solid fa-arrow-up mr-1"></i>+¥56,200 (2.3%)
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Stats Cards -->
      <div id="stats-cards" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div id="total-investments-card" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm text-gray-500">总投资金额</div>
              <div class="text-xl font-bold text-gray-800">¥2,200,000</div>
              <div class="text-sm text-wealth">+5.2% 本月</div>
            </div>
            <div class="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-coins text-primary text-xl"></i>
            </div>
          </div>
        </div>

        <div id="profit-loss-card" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm text-gray-500">盈亏金额</div>
              <div class="text-xl font-bold text-wealth">+¥258,900</div>
              <div class="text-sm text-wealth">+11.8% 总收益</div>
            </div>
            <div class="w-12 h-12 bg-wealth-light rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-chart-line text-wealth text-xl"></i>
            </div>
          </div>
        </div>

        <div id="products-count-card" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm text-gray-500">持有产品</div>
              <div class="text-xl font-bold text-gray-800">8 项</div>
              <div class="text-sm text-gray-500">5个类别</div>
            </div>
            <div class="w-12 h-12 bg-secondary-light rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-briefcase text-secondary text-xl"></i>
            </div>
          </div>
        </div>

        <div id="risk-level-card" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-sm text-gray-500">风险等级</div>
              <div class="text-xl font-bold text-gray-800">稳健型</div>
              <div class="text-sm text-primary">适中风险</div>
            </div>
            <div class="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-shield-halved text-primary text-xl"></i>
            </div>
          </div>
        </div>
      </div>



      <!-- Portfolio Overview and Performance -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <!-- Portfolio Distribution -->
        <div id="portfolio-distribution" class="bg-white rounded-lg shadow-sm border border-gray-200">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 flex items-center">
              <i class="fa-solid fa-chart-pie mr-2 text-primary"></i>
              资产配置分布
            </h3>
          </div>
          <div class="p-6">
            <div ref="portfolioContainer" class="h-64"></div>
          </div>
        </div>

        <!-- Performance Chart -->
        <div id="performance-chart-section" class="bg-white rounded-lg shadow-sm border border-gray-200">
          <div class="px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 flex items-center">
              <i class="fa-solid fa-chart-area mr-2 text-primary"></i>
              投资表现趋势
            </h3>
          </div>
          <div class="p-6">
            <div ref="performanceContainer" class="h-64"></div>
          </div>
        </div>
      </div>

      <!-- Investment Products Table -->
      <div id="investments-table" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
        <div class="px-6 py-4 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-semibold text-gray-800 flex items-center">
              <i class="fa-solid fa-list mr-2 text-primary"></i>
              投资产品明细
            </h3>
            <button
                @click.prevent="goToProductManagement"
                class="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-dark transition">
              <i class="fa-solid fa-plus mr-2"></i>查看更多
            </button>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">产品名称</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">类型</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">投资金额</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">当前价值</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">盈亏</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">收益率</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">状态</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
            <tr id="investment-1">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center mr-3">
                    <i class="fa-solid fa-shield text-primary text-sm"></i>
                  </div>
                  <div>
                    <div class="font-medium text-gray-800">友邦人寿保险</div>
                    <div class="text-sm text-gray-500">AIA-LI-2023-001</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">人寿保险</td>
              <td class="px-6 py-4 text-sm text-gray-800">¥500,000</td>
              <td class="px-6 py-4 text-sm text-gray-800">¥535,000</td>
              <td class="px-6 py-4 text-sm text-wealth">+¥35,000</td>
              <td class="px-6 py-4 text-sm text-wealth">+7.0%</td>
              <td class="px-6 py-4">
                <span class="px-2 py-1 text-xs font-medium bg-wealth-light text-wealth rounded-full">活跃</span>
              </td>
            </tr>
            <tr id="investment-2">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-secondary-light rounded-lg flex items-center justify-center mr-3">
                    <i class="fa-solid fa-chart-line text-secondary text-sm"></i>
                  </div>
                  <div>
                    <div class="font-medium text-gray-800">恒生指数基金</div>
                    <div class="text-sm text-gray-500">HSI-FUND-2023-002</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">投资基金</td>
              <td class="px-6 py-4 text-sm text-gray-800">¥800,000</td>
              <td class="px-6 py-4 text-sm text-gray-800">¥892,000</td>
              <td class="px-6 py-4 text-sm text-wealth">+¥92,000</td>
              <td class="px-6 py-4 text-sm text-wealth">+11.5%</td>
              <td class="px-6 py-4">
                <span class="px-2 py-1 text-xs font-medium bg-wealth-light text-wealth rounded-full">活跃</span>
              </td>
            </tr>
            <tr id="investment-3">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center mr-3">
                    <i class="fa-solid fa-piggy-bank text-primary text-sm"></i>
                  </div>
                  <div>
                    <div class="font-medium text-gray-800">汇丰定期存款</div>
                    <div class="text-sm text-gray-500">HSBC-FD-2023-003</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">定期存款</td>
              <td class="px-6 py-4 text-sm text-gray-800">¥300,000</td>
              <td class="px-6 py-4 text-sm text-gray-800">¥315,600</td>
              <td class="px-6 py-4 text-sm text-wealth">+¥15,600</td>
              <td class="px-6 py-4 text-sm text-wealth">+5.2%</td>
              <td class="px-6 py-4">
                <span class="px-2 py-1 text-xs font-medium bg-wealth-light text-wealth rounded-full">活跃</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Alerts Section -->
      <div id="alerts-section" class="bg-white rounded-lg shadow-sm border border-gray-200">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-800 flex items-center">
            <i class="fa-solid fa-exclamation-triangle mr-2 text-secondary"></i>
            重要提醒
          </h3>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <div id="alert-1" class="flex items-start p-4 bg-secondary-light rounded-lg border border-secondary/20">
              <div class="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-3">
                <i class="fa-solid fa-clock text-white text-xs"></i>
              </div>
              <div class="flex-grow">
                <h4 class="font-medium text-gray-800">定期存款即将到期</h4>
                <p class="text-sm text-gray-600 mt-1">您的汇丰定期存款将于 2024年1月15日 到期，请及时续存或转投其他产品。</p>
                <span class="text-xs text-secondary">2024-01-05</span>
              </div>
            </div>

            <div id="alert-2" class="flex items-start p-4 bg-primary-light rounded-lg border border-primary/20">
              <div class="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3">
                <i class="fa-solid fa-info text-white text-xs"></i>
              </div>
              <div class="flex-grow">
                <h4 class="font-medium text-gray-800">新产品推荐</h4>
                <p class="text-sm text-gray-600 mt-1">根据您的风险偏好，我们为您推荐了一款新的平衡型基金产品，预期年收益率8-12%。</p>
                <span class="text-xs text-primary">2024-01-03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="bg-white border-t border-gray-200 py-4">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="text-center md:text-left mb-4 md:mb-0">
          <p class="text-sm text-gray-500">© 2025 WealthPulse 财富管理平台. 保留所有权利.</p>
        </div>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-500 hover:text-primary">
            <i class="fa fa-weibo"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-primary">
            <i class="fa fa-wechat"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-primary">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>


<script setup>
import Header from '@/components/client/Header.vue'
import { useRouter } from 'vue-router'
import {ref,onMounted,onBeforeUnmount } from "vue";
const router = useRouter()
const portfolioContainer = ref(null);
const performanceContainer = ref(null);
let chart = null;
let performanceChart = null;
import Highcharts from 'highcharts';


onMounted(() => {
  chart = Highcharts.chart(portfolioContainer.value, {
    chart: {
      type: 'pie',
      height: 250
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        innerSize: '60%',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%'
        }
      }
    },
    colors: ['#1890FF', '#FAAD14', '#52C41A', '#722ED1', '#13C2C2'],
    series: [{
      name: '资产配置',
      data: [
        { name: '投资基金', y: 36.3 },
        { name: '人寿保险', y: 21.7 },
        { name: '定期存款', y: 12.8 },
        { name: '股票债券', y: 18.2 },
        { name: '现金产品', y: 11.0 }
      ]
    }]
  });

  performanceChart = Highcharts.chart(performanceContainer.value, {
    chart: {
      type: 'areaspline',
      height: 250
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      title: {
        text: '资产价值 (万元)'
      }
    },
    colors: ['#52C41A'],
    series: [{
      name: '总资产价值',
      data: [220, 225, 228, 232, 235, 238, 240, 242, 244, 246, 248, 246]
    }],
    plotOptions: {
      areaspline: {
        fillOpacity: 0.2
      }
    }
  });

});

onBeforeUnmount(() => {
  if (chart) {
    chart.destroy();
  }
});


const toggleRiskAssessment  = () =>{
  router.push({
    path: '/client/risk'
  })
}

const goToPersonalInfo  = () =>{
  console.log('个人信息页')
  router.push('/client/userInfo');
}

const goToAccountManagement = () => {
  console.log('账户设置')
  router.push('/client/account');
}

// 添加产品管理跳转方法
const goToProductManagement= () => {
  router.push('/client/product');
}

</script>


<style scoped>
  .chart-container {
    width: 100%;
  }
</style>