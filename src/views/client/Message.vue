
<template>
  <!-- 顶部导航栏 -->
  <Header/>
  <main class="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6">
    <div class="max-w-7xl mx-auto">
      <!-- 页面标题 -->
      <div class="mb-6">
        <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-800">消息提醒</h1>
        <p class="text-gray-600 mt-1">查看您的所有通知和消息</p>
      </div>

      <!-- 消息过滤和操作 -->
      <div class="bg-white rounded-xl shadow-sm p-5 mb-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div class="flex flex-wrap gap-2">
            <button class="px-3 py-1.5 bg-primary text-white rounded-lg text-sm">全部</button>
            <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">未读</button>
            <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">系统通知</button>
            <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">投资提醒</button>
            <button class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">活动通知</button>
          </div>

          <div class="flex space-x-2 mt-3 md:mt-0">
            <button class="px-3 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              <i class="fa fa-check-square-o mr-1"></i> 标记全部已读
            </button>
            <button class="px-3 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              <i class="fa fa-trash-o mr-1"></i> 删除已读
            </button>
          </div>
        </div>

        <!-- 搜索栏 -->
        <div class="relative">
          <input type="text" placeholder="搜索消息..." class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors">
          <i class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      <!-- 消息列表 -->
      <div class="space-y-4">
        <!-- 未读消息 -->
        <div class="message-unread rounded-xl p-4 border hover-lift transition-all duration-200">
          <div class="flex justify-between items-start">
            <div class="flex">
              <div class="bg-danger/10 p-3 rounded-lg mr-4">
                <i class="fa fa-exclamation-circle text-danger text-xl"></i>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">账户安全提醒</h4>
                <p class="text-gray-600 mt-1">您的账户于2025年7月5日在新设备上登录，如果不是您本人操作，请立即修改密码。</p>
                <div class="flex items-center mt-2 text-sm text-gray-500">
                  <span>2025-07-05 19:30</span>
                  <span class="mx-2">|</span>
                  <span>系统通知</span>
                </div>
              </div>
            </div>
            <div class="ml-4">
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div class="mt-3 flex space-x-2">
            <button class="px-3 py-1 text-sm bg-danger/10 text-danger rounded-lg hover:bg-danger/20 transition-colors">
              <i class="fa fa-lock mr-1"></i> 立即修改密码
            </button>
            <button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
              <i class="fa fa-check mr-1"></i> 确认是本人操作
            </button>
          </div>
        </div>

        <div class="message-unread rounded-xl p-4 border hover-lift transition-all duration-200">
          <div class="flex justify-between items-start">
            <div class="flex">
              <div class="bg-secondary/10 p-3 rounded-lg mr-4">
                <i class="fa fa-line-chart text-secondary text-xl"></i>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">投资收益到账</h4>
                <p class="text-gray-600 mt-1">您投资的"稳健增长基金"已于2025年7月5日发放季度收益，金额为¥2,450.32元，已存入您的账户。</p>
                <div class="flex items-center mt-2 text-sm text-gray-500">
                  <span>2025-07-05 14:20</span>
                  <span class="mx-2">|</span>
                  <span>投资提醒</span>
                </div>
              </div>
            </div>
            <div class="ml-4">
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div class="mt-3 flex justify-end">
            <button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
              <i class="fa fa-eye mr-1"></i> 查看详情
            </button>
          </div>
        </div>

        <div class="message-unread rounded-xl p-4 border hover-lift transition-all duration-200">
          <div class="flex justify-between items-start">
            <div class="flex">
              <div class="bg-warning/10 p-3 rounded-lg mr-4">
                <i class="fa fa-calendar text-warning text-xl"></i>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">信用卡还款提醒</h4>
                <p class="text-gray-600 mt-1">您的招商银行信用卡(尾号1234)将于2025年7月10日到期还款，本期应还金额为¥5,680.00元。</p>
                <div class="flex items-center mt-2 text-sm text-gray-500">
                  <span>2025-07-04 09:15</span>
                  <span class="mx-2">|</span>
                  <span>还款提醒</span>
                </div>
              </div>
            </div>
            <div class="ml-4">
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div class="mt-3 flex justify-end">
            <button class="px-3 py-1 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              <i class="fa fa-credit-card mr-1"></i> 立即还款
            </button>
          </div>
        </div>

        <!-- 已读消息 -->
        <div class="message-read rounded-xl p-4 border hover-lift transition-all duration-200">
          <div class="flex justify-between items-start">
            <div class="flex">
              <div class="bg-primary/10 p-3 rounded-lg mr-4">
                <i class="fa fa-bullhorn text-primary text-xl"></i>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">平台服务升级通知</h4>
                <p class="text-gray-600 mt-1">我们将于2025年7月10日00:00-06:00进行系统升级维护，期间部分服务可能受到影响，请您提前做好安排。</p>
                <div class="flex items-center mt-2 text-sm text-gray-500">
                  <span>2025-07-02 16:45</span>
                  <span class="mx-2">|</span>
                  <span>系统通知</span>
                </div>
              </div>
            </div>
            <div class="ml-4">
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="message-read rounded-xl p-4 border hover-lift transition-all duration-200">
          <div class="flex justify-between items-start">
            <div class="flex">
              <div class="bg-primary/10 p-3 rounded-lg mr-4">
                <i class="fa fa-gift text-primary text-xl"></i>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">新用户专享活动</h4>
                <p class="text-gray-600 mt-1">恭喜您成为我们的新用户！首次投资满10,000元即可获得¥200元红包奖励，还有更多优惠活动等您参与。</p>
                <div class="flex items-center mt-2 text-sm text-gray-500">
                  <span>2025-06-28 10:30</span>
                  <span class="mx-2">|</span>
                  <span>活动通知</span>
                </div>
              </div>
            </div>
            <div class="ml-4">
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div class="mt-3 flex justify-end">
            <button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
              <i class="fa fa-gift mr-1"></i> 查看活动
            </button>
          </div>
        </div>

        <div class="message-read rounded-xl p-4 border hover-lift transition-all duration-200">
          <div class="flex justify-between items-start">
            <div class="flex">
              <div class="bg-secondary/10 p-3 rounded-lg mr-4">
                <i class="fa fa-line-chart text-secondary text-xl"></i>
              </div>
              <div>
                <h4 class="font-medium text-gray-800">市场动态：科技股板块近期表现</h4>
                <p class="text-gray-600 mt-1">近期科技股板块表现强劲，多家公司发布超预期财报。根据您的投资偏好，建议关注相关行业基金。</p>
                <div class="flex items-center mt-2 text-sm text-gray-500">
                  <span>2025-06-25 08:00</span>
                  <span class="mx-2">|</span>
                  <span>市场动态</span>
                </div>
              </div>
            </div>
            <div class="ml-4">
              <button class="text-gray-400 hover:text-gray-600">
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
          <div class="mt-3 flex justify-end">
            <button class="px-3 py-1 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
              <i class="fa fa-chart-line mr-1"></i> 查看分析
            </button>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <div class="mt-8 flex justify-center">
        <nav class="inline-flex rounded-md shadow-sm" aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">上一页</span>
            <i class="fa fa-chevron-left"></i>
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-primary text-sm font-medium text-white">
            1
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            2
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            3
          </a>
          <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                            ...
                        </span>
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            8
          </a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            9
          </a>
          <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">下一页</span>
            <i class="fa fa-chevron-right"></i>
          </a>
        </nav>
      </div>
    </div>
  </main>

</template>

<script setup lang="ts">

import Header from "@/components/client/Header.vue";
</script>


<style scoped>

</style>