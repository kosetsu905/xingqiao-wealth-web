
<template>


  <!-- Header -->
  <Header/>
  <main id="main-content" class="max-w-7xl mx-auto px-4 py-6">

    <section id="portfolio-header" class="mb-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold text-gray-900">我的投资组合</h1>
        <div class="flex items-center space-x-3">
          <span class="text-sm text-gray-600">最后更新: 2024-01-15 15:30</span>
          <button class="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-600">
            <i class="fas fa-sync-alt mr-2"></i>刷新
          </button>
        </div>
      </div>
    </section>

    <section id="total-assets" class="mb-6">
      <div class="bg-white rounded-lg border border-border p-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="md:col-span-2">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">总资产概览</h2>
            <div class="flex items-end space-x-4">
              <div>
                <p class="text-3xl font-bold text-gray-900">¥24,567.89</p>
                <div class="flex items-center mt-2">
                  <i class="fas fa-arrow-up text-accent mr-1"></i>
                  <span class="text-accent font-medium">+¥1,234.56 (+5.29%)</span>
                  <span class="text-gray-600 text-sm ml-2">24小时</span>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 md:col-span-2">
            <div class="bg-secondary1 rounded-lg p-4">
              <p class="text-sm text-gray-600">今日收益</p>
              <p class="text-xl font-bold text-accent">+¥156.78</p>
            </div>
            <div class="bg-secondary1 rounded-lg p-4">
              <p class="text-sm text-gray-600">累计收益</p>
              <p class="text-xl font-bold text-accent">+¥2,567.89</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <section id="holdings" class="bg-white rounded-lg border border-border p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">持有资产</h3>
            <button class="text-primary hover:text-blue-600 text-sm font-medium">
              查看全部
            </button>
          </div>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-secondary1 rounded-lg">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <i class="fas fa-coins text-white"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">RWA稳定币</h4>
                  <p class="text-sm text-gray-600">3,500 RWA</p>
                </div>
              </div>
              <div class="text-right">
                <p class="font-semibold text-gray-900">¥23,975.00</p>
                <div class="flex items-center">
                  <i class="fas fa-arrow-up text-accent text-xs mr-1"></i>
                  <span class="text-accent text-sm">+2.1%</span>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 bg-secondary1 rounded-lg">
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <i class="fas fa-dollar-sign text-white"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">USDT</h4>
                  <p class="text-sm text-gray-600">85.67 USDT</p>
                </div>
              </div>
              <div class="text-right">
                <p class="font-semibold text-gray-900">¥592.89</p>
                <div class="flex items-center">
                  <span class="text-gray-500 text-sm">0.0%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="yield-overview" class="bg-white rounded-lg border border-border p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">收益详情</h3>
          <div id="yield-chart" class="h-64"></div>
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="text-center">
              <p class="text-sm text-gray-600">7天收益</p>
              <p class="text-lg font-bold text-accent">+¥89.45</p>
            </div>
            <div class="text-center">
              <p class="text-sm text-gray-600">30天收益</p>
              <p class="text-lg font-bold text-accent">+¥567.23</p>
            </div>
            <div class="text-center">
              <p class="text-sm text-gray-600">年化收益率</p>
              <p class="text-lg font-bold text-accent">4.2%</p>
            </div>
          </div>
        </section>
      </div>

      <div class="lg:col-span-1">
        <section id="quick-actions" class="bg-white rounded-lg border border-border p-6 mb-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">快速操作</h3>
          <div class="space-y-3">
            <button class="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-600 flex items-center justify-center">
              <i class="fas fa-plus mr-2"></i>
              购买稳定币
            </button>
            <button class="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 flex items-center justify-center">
              <i class="fas fa-exchange-alt mr-2"></i>
              兑换资产
            </button>
            <button class="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 flex items-center justify-center">
              <i class="fas fa-arrow-up mr-2"></i>
              提取收益
            </button>
          </div>
        </section>

        <section id="recent-transactions" class="bg-white rounded-lg border border-border p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">最近交易</h3>
            <button class="text-primary hover:text-blue-600 text-sm font-medium">
              查看全部
            </button>
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between py-2 border-b border-gray-100">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <i class="fas fa-plus text-white text-xs"></i>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900">买入</p>
                  <p class="text-xs text-gray-600">15:30</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm font-medium text-gray-900">+1,000 RWA</p>
                <p class="text-xs text-gray-600">¥6,830</p>
              </div>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-gray-100">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <i class="fas fa-arrow-up text-white text-xs"></i>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900">收益</p>
                  <p class="text-xs text-gray-600">14:15</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm font-medium text-accent">+¥12.45</p>
                <p class="text-xs text-gray-600">日收益</p>
              </div>
            </div>
            <div class="flex items-center justify-between py-2">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <i class="fas fa-minus text-white text-xs"></i>
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900">卖出</p>
                  <p class="text-xs text-gray-600">12:30</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm font-medium text-gray-900">-500 RWA</p>
                <p class="text-xs text-gray-600">¥3,405</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>

</template>


<script setup>
import Header from "@/components/agency/Header.vue";
import {onMounted,onBeforeUnmount } from "vue";
let chart = null;
import Highcharts from 'highcharts';

onMounted(() => {
  chart = Highcharts.chart('yield-chart', {
    chart: {
      type: 'column',
      backgroundColor: 'transparent'
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['1月', '2月', '3月', '4月', '5月', '6月'],
      labels: {
        style: {
          color: '#6B7280'
        }
      }
    },
    yAxis: {
      title: {
        text: '收益 (CNY)',
        style: {
          color: '#6B7280'
        }
      },
      labels: {
        style: {
          color: '#6B7280'
        }
      }
    },
    series: [{
      name: '月收益',
      data: [420, 380, 450, 520, 480, 567],
      color: '#28A745'
    }],
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  });
});

onBeforeUnmount(() => {
  if (chart) {
    chart.destroy();
  }
});


</script>


<style scoped>

</style>