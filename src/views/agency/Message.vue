<template>
  <!-- Header -->
  <Header/>
  <!-- 主要内容区域 -->
  <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <!-- 页面标题 -->
    <div class="mb-8">
      <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-800">消息中心</h1>
      <p class="text-gray-500 mt-2">查看所有通知和提醒</p>
    </div>

    <!-- 消息筛选和搜索 -->
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="flex space-x-2 overflow-x-auto pb-2">
          <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium flex items-center whitespace-nowrap">
            <i class="fa fa-inbox mr-2"></i>全部消息
          </button>
          <button class="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium flex items-center whitespace-nowrap transition-colors">
            <i class="fa fa-bell-o mr-2"></i>系统通知
          </button>
          <button class="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium flex items-center whitespace-nowrap transition-colors">
            <i class="fa fa-comment-o mr-2"></i>客户消息
          </button>
          <button class="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium flex items-center whitespace-nowrap transition-colors">
            <i class="fa fa-exclamation-circle mr-2"></i>风险提示
          </button>
          <button class="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-sm font-medium flex items-center whitespace-nowrap transition-colors">
            <i class="fa fa-calendar-o mr-2"></i>待办事项
          </button>
        </div>

        <div class="relative w-full md:w-64">
          <input type="text" placeholder="搜索消息..." class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
          <i class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-gray-100">
        <div class="flex items-center space-x-4">
          <label class="inline-flex items-center">
            <input type="checkbox" class="rounded text-primary focus:ring-primary/30">
            <span class="ml-2 text-sm text-gray-600">全选</span>
          </label>
          <button class="text-sm text-gray-600 hover:text-red-600 flex items-center">
            <i class="fa fa-trash-o mr-1"></i>删除选中
          </button>
          <button class="text-sm text-gray-600 hover:text-primary flex items-center">
            <i class="fa fa-check-square-o mr-1"></i>标记已读
          </button>
        </div>

      </div>
    </div>

    <!-- 消息列表 -->
    <div class="space-y-4">
      <!-- 未读消息 - 客户消息 -->
      <div class="message-card p-5 animate-fade-in">
        <div class="flex items-start">
          <div class="flex-shrink-0 mr-4">
            <img src="https://picsum.photos/seed/client1/64/64" alt="客户头像" class="h-12 w-12 rounded-full object-cover">
          </div>
          <div class="flex-grow">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-medium text-gray-900">林小明</h3>
              <span class="text-xs text-gray-500">10分钟前</span>
            </div>
            <p class="text-gray-700 text-sm mb-2">陈经理，我想咨询一下关于新能源基金的投资建议，什么时候方便电话沟通？</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    客户咨询
                                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    待回复
                                </span>
              </div>
              <button class="text-primary text-sm hover:underline">查看详情</button>
            </div>
          </div>
          <div class="flex-shrink-0 ml-2">
            <label class="inline-flex items-center">
              <input type="checkbox" class="rounded text-primary focus:ring-primary/30">
            </label>
            <span class="badge-unread"></span>
          </div>
        </div>
      </div>

      <!-- 未读消息 - 系统通知 -->
      <div class="message-card p-5 animate-fade-in">
        <div class="flex items-start">
          <div class="flex-shrink-0 mr-4">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <i class="fa fa-bullhorn text-primary text-xl"></i>
            </div>
          </div>
          <div class="flex-grow">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-medium text-gray-900">系统通知</h3>
              <span class="text-xs text-gray-500">1小时前</span>
            </div>
            <p class="text-gray-700 text-sm mb-2">新版本QuantPro系统将于本周六凌晨2点进行维护升级，预计维护时间为4小时，请提前做好准备。</p>
            <div class="flex items-center justify-between">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                系统维护
                            </span>
              <button class="text-primary text-sm hover:underline">查看详情</button>
            </div>
          </div>
          <div class="flex-shrink-0 ml-2">
            <label class="inline-flex items-center">
              <input type="checkbox" class="rounded text-primary focus:ring-primary/30">
            </label>
            <span class="badge-unread"></span>
          </div>
        </div>
      </div>

      <!-- 未读消息 - 风险提示 -->
      <div class="message-card p-5 animate-fade-in">
        <div class="flex items-start">
          <div class="flex-shrink-0 mr-4">
            <div class="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
              <i class="fa fa-exclamation-triangle text-red-500 text-xl"></i>
            </div>
          </div>
          <div class="flex-grow">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-medium text-gray-900">风险提示</h3>
              <span class="text-xs text-gray-500">2小时前</span>
            </div>
            <p class="text-gray-700 text-sm mb-2">您客户王芳的投资组合中，科技类股票占比达到72%，超过了风险承受能力评估的上限，请及时调整。</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    高风险
                                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    需处理
                                </span>
              </div>
              <button class="text-primary text-sm hover:underline">查看详情</button>
            </div>
          </div>
          <div class="flex-shrink-0 ml-2">
            <label class="inline-flex items-center">
              <input type="checkbox" class="rounded text-primary focus:ring-primary/30">
            </label>
            <span class="badge-unread"></span>
          </div>
        </div>
      </div>

      <!-- 已读消息 - 待办事项 -->
      <div class="message-card p-5 bg-gray-50/50">
        <div class="flex items-start">
          <div class="flex-shrink-0 mr-4">
            <div class="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <i class="fa fa-calendar-check-o text-yellow-500 text-xl"></i>
            </div>
          </div>
          <div class="flex-grow">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-medium text-gray-700">待办事项</h3>
              <span class="text-xs text-gray-500">昨天</span>
            </div>
            <p class="text-gray-600 text-sm mb-2">您与客户张伟的季度投资回顾会议将于明天上午10:00举行，请提前准备相关资料。</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                    会议提醒
                                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    明天
                                </span>
              </div>
              <button class="text-primary text-sm hover:underline">查看详情</button>
            </div>
          </div>
          <div class="flex-shrink-0 ml-2">
            <label class="inline-flex items-center">
              <input type="checkbox" class="rounded text-primary focus:ring-primary/30">
            </label>
          </div>
        </div>
      </div>

      <!-- 已读消息 - 客户消息 -->
      <div class="message-card p-5 bg-gray-50/50">
        <div class="flex items-start">
          <div class="flex-shrink-0 mr-4">
            <img src="https://picsum.photos/seed/client2/64/64" alt="客户头像" class="h-12 w-12 rounded-full object-cover">
          </div>
          <div class="flex-grow">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-medium text-gray-700">赵丽娜</h3>
              <span class="text-xs text-gray-500">3天前</span>
            </div>
            <p class="text-gray-600 text-sm mb-2">陈经理，感谢您上周的投资建议，我已经按照您的指导调整了投资组合，期待后续的收益表现。</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    客户反馈
                                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    已回复
                                </span>
              </div>
              <button class="text-primary text-sm hover:underline">查看详情</button>
            </div>
          </div>
          <div class="flex-shrink-0 ml-2">
            <label class="inline-flex items-center">
              <input type="checkbox" class="rounded text-primary focus:ring-primary/30">
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页控件 -->
    <div class="mt-8 flex justify-between items-center">
      <span class="text-sm text-gray-500">显示 1-5 条，共 24 条</span>
      <div class="flex space-x-1">
        <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
          <i class="fa fa-angle-left"></i>
        </button>
        <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white">1</button>
        <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">2</button>
        <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">3</button>
        <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">4</button>
        <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">
          <i class="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  </main>

</template>

<script setup>
import Header from '@/components/agency/Header.vue'


</script>

<style scoped>

</style>
