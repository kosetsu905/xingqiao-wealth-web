
<template>
  <!-- Header -->
  <Header/>
  <!-- Main Content -->
  <main id="commission-calculator" class="max-w-4xl mx-auto px-6 py-8">

    <!-- Calculator Form -->
    <section id="calculator-form" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
      <div class="flex items-center mb-6">
        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <i class="fas fa-calculator text-green-600 text-xl"></i>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 ml-4">佣金计算</h2>
      </div>

      <form id="commission-form" class="space-y-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Product Type -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">产品类型</label>
            <select id="product-type" onchange="updateCommissionRate()" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">选择产品类型</option>
              <option value="life-insurance">人寿保险</option>
              <option value="investment-fund">投资基金</option>
              <option value="etf">ETF</option>
              <option value="saving-cash">储蓄和现金产品</option>
              <option value="alternative">另类产品</option>
            </select>
          </div>

          <!-- Commission Rate -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">佣金率 (%)</label>
            <input type="number" id="commission-rate" step="0.01" min="0" max="100" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="0.00">
          </div>

          <!-- Investment Amount -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">投资金额 (¥)</label>
            <input type="number" id="investment-amount" step="0.01" min="0" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="0.00">
          </div>

          <!-- Payment Type -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">付款方式</label>
            <select id="payment-type" onchange="toggleInstallments()" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="lump-sum">一次性付款</option>
              <option value="installment">分期付款</option>
            </select>
          </div>

          <!-- Installment Number -->
          <div id="installment-section" class="hidden">
            <label class="block text-sm font-medium text-gray-700 mb-2">分期数量</label>
            <select id="installment-number" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="3">3期</option>
              <option value="6">6期</option>
              <option value="12">12期</option>
              <option value="24">24期</option>
              <option value="36">36期</option>
            </select>
          </div>

          <!-- Client Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">客户姓名</label>
            <input type="text" id="client-name" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="输入客户姓名">
          </div>
        </div>

        <div class="flex justify-center pt-6">
          <button type="button" onclick="calculateCommission()" class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
            <i class="fas fa-calculator mr-2"></i>
            计算佣金
          </button>
        </div>
      </form>
    </section>

    <!-- Results Section -->
    <section id="results-section" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hidden">
      <div class="flex items-center mb-6">
        <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
          <i class="fas fa-chart-pie text-yellow-600 text-xl"></i>
        </div>
        <h2 class="text-2xl font-bold text-gray-900 ml-4">计算结果</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-blue-50 rounded-lg p-6">
          <div class="flex items-center">
            <i class="fas fa-dollar-sign text-blue-600 text-2xl"></i>
            <div class="ml-4">
              <p class="text-sm text-gray-600">总佣金</p>
              <p id="total-commission" class="text-2xl font-bold text-blue-600">¥0.00</p>
            </div>
          </div>
        </div>

        <div class="bg-green-50 rounded-lg p-6">
          <div class="flex items-center">
            <i class="fas fa-calendar text-green-600 text-2xl"></i>
            <div class="ml-4">
              <p class="text-sm text-gray-600">每期佣金</p>
              <p id="per-installment" class="text-2xl font-bold text-green-600">¥0.00</p>
            </div>
          </div>
        </div>

        <div class="bg-purple-50 rounded-lg p-6">
          <div class="flex items-center">
            <i class="fas fa-percentage text-purple-600 text-2xl"></i>
            <div class="ml-4">
              <p class="text-sm text-gray-600">佣金率</p>
              <p id="display-rate" class="text-2xl font-bold text-purple-600">0.00%</p>
            </div>
          </div>
        </div>

        <div class="bg-orange-50 rounded-lg p-6">
          <div class="flex items-center">
            <i class="fas fa-coins text-orange-600 text-2xl"></i>
            <div class="ml-4">
              <p class="text-sm text-gray-600">投资金额</p>
              <p id="display-amount" class="text-2xl font-bold text-orange-600">¥0.00</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Schedule -->
      <div id="payment-schedule" class="hidden">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">佣金支付计划</h3>
        <div class="overflow-x-auto">
          <table class="w-full border border-gray-200 rounded-lg">
            <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">期数</th>
              <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">支付日期</th>
              <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">佣金金额</th>
              <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">状态</th>
            </tr>
            </thead>
            <tbody id="schedule-body" class="divide-y divide-gray-200">
            </tbody>
          </table>
        </div>
      </div>

      <div class="flex justify-center space-x-4 pt-6">
        <button onclick="saveCalculation()" class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          <i class="fas fa-save mr-2"></i>
          保存计算
        </button>
        <button onclick="resetCalculator()" class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
          <i class="fas fa-refresh mr-2"></i>
          重新计算
        </button>
      </div>
    </section>

    <!-- Commission Rates Reference -->
    <section id="rates-reference" class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">标准佣金率参考</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="p-4 border border-gray-200 rounded-lg">
          <div class="flex items-center mb-2">
            <i class="fas fa-heart text-red-600 mr-2"></i>
            <span class="font-medium">人寿保险</span>
          </div>
          <p class="text-sm text-gray-600">首年: 3.5% - 5.0%</p>
          <p class="text-sm text-gray-600">续年: 0.5% - 1.0%</p>
        </div>
        <div class="p-4 border border-gray-200 rounded-lg">
          <div class="flex items-center mb-2">
            <i class="fas fa-chart-line text-blue-600 mr-2"></i>
            <span class="font-medium">投资基金</span>
          </div>
          <p class="text-sm text-gray-600">前端: 1.0% - 3.0%</p>
          <p class="text-sm text-gray-600">后端: 0.25% - 0.75%</p>
        </div>
        <div class="p-4 border border-gray-200 rounded-lg">
          <div class="flex items-center mb-2">
            <i class="fas fa-chart-bar text-green-600 mr-2"></i>
            <span class="font-medium">ETF</span>
          </div>
          <p class="text-sm text-gray-600">标准: 0.1% - 0.5%</p>
        </div>
        <div class="p-4 border border-gray-200 rounded-lg">
          <div class="flex items-center mb-2">
            <i class="fas fa-piggy-bank text-yellow-600 mr-2"></i>
            <span class="font-medium">储蓄产品</span>
          </div>
          <p class="text-sm text-gray-600">标准: 0.25% - 1.0%</p>
        </div>
        <div class="p-4 border border-gray-200 rounded-lg">
          <div class="flex items-center mb-2">
            <i class="fas fa-building text-purple-600 mr-2"></i>
            <span class="font-medium">另类产品</span>
          </div>
          <p class="text-sm text-gray-600">标准: 1.0% - 2.5%</p>
        </div>
      </div>
    </section>
  </main>

</template>

<script setup lang="ts">
import Header from "@/components/agency/Header.vue";
</script>


<style scoped>

</style>