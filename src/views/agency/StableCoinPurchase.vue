
<template>


  <!-- Header -->
  <Header :from="etf" :currentTabActive="5"/>

  <main id="main-content" class="max-w-7xl mx-auto px-4 py-6">
    <section id="asset-overview" class="mb-6">
      <div class="bg-white rounded-lg border border-border p-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">RWA稳定币概览</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-secondary1 rounded-lg p-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600">当前价格</p>
                <p class="text-xl font-bold text-gray-900">¥6.85</p>
              </div>
              <div class="text-accent">
                <i class="fas fa-arrow-up"></i>
                <span class="text-sm">+0.12%</span>
              </div>
            </div>
          </div>
          <div class="bg-secondary1 rounded-lg p-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600">24小时交易量</p>
                <p class="text-xl font-bold text-gray-900">¥2.4M</p>
              </div>
              <i class="fas fa-chart-bar text-primary"></i>
            </div>
          </div>
          <div class="bg-secondary1 rounded-lg p-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600">年化收益率</p>
                <p class="text-xl font-bold text-accent">4.2%</p>
              </div>
              <i class="fas fa-percentage text-accent"></i>
            </div>
          </div>
          <div class="bg-secondary1 rounded-lg p-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600">总市值</p>
                <p class="text-xl font-bold text-gray-900">¥158M</p>
              </div>
              <i class="fas fa-globe text-primary"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <section id="price-chart" class="bg-white rounded-lg border border-border p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">价格走势</h3>
            <div class="flex space-x-2">
              <button class="px-3 py-1 text-sm bg-primary text-white rounded">1天</button>
              <button class="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">7天</button>
              <button class="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">30天</button>
            </div>
          </div>
          <div id="priceContainer" class="h-80"></div>
        </section>

        <section id="transaction-history" class="bg-white rounded-lg border border-border p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">交易历史</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead class="bg-secondary1">
              <tr>
                <th class="text-left p-3 text-gray-600">时间</th>
                <th class="text-left p-3 text-gray-600">类型</th>
                <th class="text-left p-3 text-gray-600">数量</th>
                <th class="text-left p-3 text-gray-600">价格</th>
                <th class="text-left p-3 text-gray-600">状态</th>
              </tr>
              </thead>
              <tbody>
              <tr class="border-b border-border">
                <td class="p-3 text-gray-700">2024-01-15 14:30</td>
                <td class="p-3"><span class="text-accent font-medium">买入</span></td>
                <td class="p-3">1,000 RWA</td>
                <td class="p-3">¥6.83</td>
                <td class="p-3"><span class="bg-accent text-white px-2 py-1 rounded text-xs">已完成</span></td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-3 text-gray-700">2024-01-15 12:15</td>
                <td class="p-3"><span class="text-red-500 font-medium">卖出</span></td>
                <td class="p-3">500 RWA</td>
                <td class="p-3">¥6.81</td>
                <td class="p-3"><span class="bg-accent text-white px-2 py-1 rounded text-xs">已完成</span></td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-3 text-gray-700">2024-01-14 16:45</td>
                <td class="p-3"><span class="text-accent font-medium">买入</span></td>
                <td class="p-3">2,000 RWA</td>
                <td class="p-3">¥6.79</td>
                <td class="p-3"><span class="bg-accent text-white px-2 py-1 rounded text-xs">已完成</span></td>
              </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div class="lg:col-span-1">
        <section id="trading-interface" class="bg-white rounded-lg border border-border p-6">
          <div class="flex mb-4">
            <button id="buy-tab" class="flex-1 py-2 px-4 bg-primary text-white rounded-l-lg font-medium">买入</button>
            <button id="sell-tab" class="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-r-lg font-medium">卖出</button>
          </div>

          <div id="buy-form" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">支付方式</label>
              <select class="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option>银行卡</option>
                <option>支付宝</option>
                <option>微信支付</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">购买金额 (CNY)</label>
              <input type="number" placeholder="输入金额" class="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">预计获得 (RWA)</label>
              <input type="text" value="1,460.23"  class="w-full p-3 border border-border rounded-lg bg-gray-50">
            </div>

            <div class="bg-secondary1 rounded-lg p-3">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">手续费</span>
                <span class="text-gray-900">¥0.50</span>
              </div>
              <div class="flex justify-between text-sm mt-1">
                <span class="text-gray-600">预计到账时间</span>
                <span class="text-gray-900">即时</span>
              </div>
            </div>

            <button class="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              确认购买
            </button>
          </div>

          <div id="sell-form" class="space-y-4 hidden">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">可用余额</label>
              <p class="text-sm text-gray-600">3,500 RWA</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">卖出数量 (RWA)</label>
              <input type="number" placeholder="输入数量" class="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">预计收到 (CNY)</label>
              <input type="text" value="¥6,830.50"  class="w-full p-3 border border-border rounded-lg bg-gray-50">
            </div>

            <div class="bg-secondary1 rounded-lg p-3">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">手续费</span>
                <span class="text-gray-900">¥0.50</span>
              </div>
              <div class="flex justify-between text-sm mt-1">
                <span class="text-gray-600">预计到账时间</span>
                <span class="text-gray-900">1-2个工作日</span>
              </div>
            </div>
            <button class="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
              确认卖出
            </button>
          </div>
        </section>
      </div>
    </div>
  </main>

</template>


<script setup >
const etf = 'etf';
import Header from "@/components/agency/Header.vue";
import {onMounted,onBeforeUnmount } from "vue";
import Highcharts from 'highcharts';
let chart = null;
onMounted(() => {
  chart = Highcharts.chart('priceContainer', {
    chart: {
      type: 'line',
      backgroundColor: 'transparent'
    },
    title: {
      text: null
    },
    xAxis: {
      type: 'datetime',
      labels: {
        style: {
          color: '#6B7280'
        }
      }
    },
    yAxis: {
      title: {
        text: '价格 (CNY)',
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
      name: 'RWA稳定币',
      data: [
        [Date.UTC(2024, 0, 1), 6.75],
        [Date.UTC(2024, 0, 2), 6.78],
        [Date.UTC(2024, 0, 3), 6.82],
        [Date.UTC(2024, 0, 4), 6.79],
        [Date.UTC(2024, 0, 5), 6.81],
        [Date.UTC(2024, 0, 6), 6.83],
        [Date.UTC(2024, 0, 7), 6.85]
      ],
      color: '#007BFF'
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