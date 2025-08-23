
<template>
  <!-- Header -->
  <Header/>
  <!-- 主要内容 -->
  <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
    <!-- 页面标题 -->
    <div class="mb-6">
      <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark">个人信息</h1>
    </div>
    <!-- 个人信息卡片 -->
    <div class="bg-white rounded-xl shadow-md overflow-hidden mb-12">
      <div class="grid md:grid-cols-3">
        <!-- 左侧个人信息 -->
        <div class="bg-primary text-white p-8 md:border-r border-gray-200">
          <div class="flex flex-col items-center">
            <div class="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white/20">
              <img src="https://picsum.photos/seed/advisor/200/200" alt="李明照片" class="w-full h-full object-cover">
            </div>
            <h2 class="text-2xl font-bold mb-2">李明</h2>
            <p class="text-white/80 mb-6">资深投资顾问</p>

            <div class="w-full space-y-4">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <i class="fa fa-id-card-o"></i>
                </div>
                <span>员工编号: EA12345</span>
              </div>
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <i class="fa fa-calendar"></i>
                </div>
                <span>入职日期: 2015-06-15</span>
              </div>
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <i class="fa fa-users"></i>
                </div>
                <span>管理客户: 48</span>
              </div>
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <i class="fa fa-money"></i>
                </div>
                <span>管理资产: $125M</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧个人详情 -->
        <div class="md:col-span-2 p-8">
          <div class="mb-8">
            <h3 class="text-xl font-bold mb-6 text-dark">基本信息</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-600 mb-2">姓名</label>
                <p class="text-dark font-medium">李明</p>
              </div>
              <div>
                <label class="block text-gray-600 mb-2">邮箱</label>
                <p class="text-dark font-medium">liming@example.com</p>
              </div>
              <div>
                <label class="block text-gray-600 mb-2">电话</label>
                <p class="text-dark font-medium">+86 138 1234 5678</p>
              </div>
              <div>
                <label class="block text-gray-600 mb-2">部门</label>
                <p class="text-dark font-medium">私人财富管理部</p>
              </div>
              <div>
                <label class="block text-gray-600 mb-2">职级</label>
                <p class="text-dark font-medium">执行董事</p>
              </div>
              <div>
                <label class="block text-gray-600 mb-2">办公地点</label>
                <p class="text-dark font-medium">上海分公司</p>
              </div>
            </div>
          </div>

          <div class="mb-8">
            <h3 class="text-xl font-bold mb-6 text-dark">专业资质</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                  <i class="fa fa-certificate text-primary"></i>
                </div>
                <div>
                  <h4 class="font-medium text-dark">CFA（特许金融分析师）</h4>
                  <p class="text-gray-600">2008年获得，特许金融分析师协会</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                  <i class="fa fa-certificate text-primary"></i>
                </div>
                <div>
                  <h4 class="font-medium text-dark">CFP（国际金融理财师）</h4>
                  <p class="text-gray-600">2010年获得，国际金融理财标准委员会</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                  <i class="fa fa-graduation-cap text-primary"></i>
                </div>
                <div>
                  <h4 class="font-medium text-dark">清华大学金融学硕士</h4>
                  <p class="text-gray-600">2005年毕业，金融系</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>

  <!-- 使用全局返回顶部组件 -->
  <BackToTop />

</template>

<script setup lang="ts">
import Header from "@/components/agency/Header.vue";


</script>


<style scoped>

</style>