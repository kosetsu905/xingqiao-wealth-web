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