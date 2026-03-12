
<template>

  <!-- Header -->
  <Header/>

  <main id="global-funds-page" class="max-w-7xl mx-auto px-6 py-8">

    <!-- Page Header -->
    <section id="page-header" class="mb-8">
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
        <h2 class="text-3xl font-bold mb-4">全球投资基金</h2>
        <p class="text-blue-100 text-lg">为您精选全球优质投资基金，助您实现财富增值目标</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div class="bg-white bg-opacity-10 rounded-lg p-4">
            <div class="flex items-center">
              <i class="fas fa-globe text-2xl mr-3"></i>
              <div>
                <p class="text-sm opacity-90">全球基金数量</p>
                <p class="text-xl font-bold">1,250+</p>
              </div>
            </div>
          </div>
          <div class="bg-white bg-opacity-10 rounded-lg p-4">
            <div class="flex items-center">
              <i class="fas fa-chart-line text-2xl mr-3"></i>
              <div>
                <p class="text-sm opacity-90">平均年化收益</p>
                <p class="text-xl font-bold">8.5%</p>
              </div>
            </div>
          </div>
          <div class="bg-white bg-opacity-10 rounded-lg p-4">
            <div class="flex items-center">
              <i class="fas fa-shield-alt text-2xl mr-3"></i>
              <div>
                <p class="text-sm opacity-90">风险评级</p>
                <p class="text-xl font-bold">A级</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section id="filter-section" class="mb-8">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">筛选条件</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">基金类型</label>
            <select class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500">
              <option>全部类型</option>
              <option>股票型</option>
              <option>债券型</option>
              <option>混合型</option>
              <option>货币型</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">风险等级</label>
            <select class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500">
              <option>全部等级</option>
              <option>低风险</option>
              <option>中低风险</option>
              <option>中风险</option>
              <option>中高风险</option>
              <option>高风险</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">地区</label>
            <select class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500">
              <option>全球</option>
              <option>亚太地区</option>
              <option>欧洲</option>
              <option>北美</option>
              <option>新兴市场</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">最低投资额</label>
            <select class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500">
              <option>不限</option>
              <option>1万以下</option>
              <option>1-5万</option>
              <option>5-10万</option>
              <option>10万以上</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Funds -->
    <section id="featured-funds" class="mb-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">热门推荐</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-chart-line text-blue-600 text-xl"></i>
            </div>
            <span class="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">推荐</span>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">摩根亚洲成长基金</h4>
          <p class="text-sm text-gray-600 mb-4">专注于亚太地区高成长性企业投资</p>
          <div class="space-y-2 mb-4">
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">年化收益率</span>
              <span class="text-sm font-medium text-green-600">+12.3%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">风险等级</span>
              <span class="text-sm font-medium">中高风险</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">最低投资</span>
              <span class="text-sm font-medium">¥50,000</span>
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            查看详情
          </button>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-globe text-green-600 text-xl"></i>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">稳健</span>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">富达全球债券基金</h4>
          <p class="text-sm text-gray-600 mb-4">全球优质债券投资组合，稳健收益</p>
          <div class="space-y-2 mb-4">
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">年化收益率</span>
              <span class="text-sm font-medium text-green-600">+6.8%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">风险等级</span>
              <span class="text-sm font-medium">中低风险</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">最低投资</span>
              <span class="text-sm font-medium">¥30,000</span>
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            查看详情
          </button>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-rocket text-purple-600 text-xl"></i>
            </div>
            <span class="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">成长</span>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">贝莱德科技创新基金</h4>
          <p class="text-sm text-gray-600 mb-4">投资全球领先科技创新企业</p>
          <div class="space-y-2 mb-4">
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">年化收益率</span>
              <span class="text-sm font-medium text-green-600">+15.6%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">风险等级</span>
              <span class="text-sm font-medium">高风险</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">最低投资</span>
              <span class="text-sm font-medium">¥100,000</span>
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            查看详情
          </button>
        </div>
      </div>
    </section>

    <!-- All Funds List -->
    <section id="all-funds" class="mb-8">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-2xl font-bold text-gray-900">全部基金</h3>
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-600">排序：</span>
          <select class="border border-gray-300 rounded-lg px-3 py-1 text-sm">
            <option>收益率（高到低）</option>
            <option>收益率（低到高）</option>
            <option>风险等级</option>
            <option>最低投资额</option>
          </select>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">基金名称</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">年化收益</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">风险等级</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">最低投资</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-chart-line text-blue-600 text-sm"></i>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">景顺亚洲机会基金</div>
                    <div class="text-sm text-gray-500">Invesco Asia Opportunities Fund</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">股票型</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">+11.2%</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">中高风险</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">¥50,000</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">详情</button>
                <button class="text-green-600 hover:text-green-900">购买</button>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-shield-alt text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">施罗德环球债券基金</div>
                    <div class="text-sm text-gray-500">Schroder Global Bond Fund</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">债券型</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">+5.8%</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">低风险</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">¥20,000</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">详情</button>
                <button class="text-green-600 hover:text-green-900">购买</button>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-rocket text-purple-600 text-sm"></i>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">瑞银新兴市场基金</div>
                    <div class="text-sm text-gray-500">UBS Emerging Markets Fund</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">混合型</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">+13.7%</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">高风险</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">¥80,000</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">详情</button>
                <button class="text-green-600 hover:text-green-900">购买</button>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-globe text-indigo-600 text-sm"></i>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">安联欧洲价值基金</div>
                    <div class="text-sm text-gray-500">Allianz European Value Fund</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">股票型</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">+9.4%</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">中风险</span>
              </td>
            </tr></tbody></table></div></div></section></main>
</template>
<script setup lang="ts">
import Header from "@/components/agency/Header.vue";
</script>

<style scoped>

</style>