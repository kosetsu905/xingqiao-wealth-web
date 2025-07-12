<template>
  <footer class="bg-white border-t border-light-2 py-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- 品牌标识 -->
        <div class="flex items-center mb-4 md:mb-0">
          <div class="text-primary text-xl mr-2">
            <i class="fa fa-globe"></i>
          </div>
          <span class="font-bold text-primary">GlobalInvest</span>
        </div>

        <!-- 导航链接 -->
        <div class="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
          <a
              v-for="(link, index) in footerLinks"
              :key="index"
              href="#"
              class="text-dark-2 hover:text-primary transition-colors duration-200"
          >
            {{ link }}
          </a>
        </div>

        <!-- 社交媒体 -->
        <div class="flex space-x-4">
          <a
              v-for="(social, index) in socialMedia"
              :key="index"
              href="#"
              class="h-8 w-8 rounded-full bg-light-2 flex items-center justify-center text-dark-2 hover:bg-primary hover:text-white transition-all duration-200"
          >
            <i :class="`fa fa-${social.icon}`"></i>
          </a>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="mt-6 text-center text-dark-2 text-sm">
        © 2023 GlobalInvest. 保留所有权利。投资有风险，入市需谨慎。
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerLinks = ['关于我们', '服务条款', '隐私政策', '联系我们', '帮助中心']
const socialMedia = [
  {icon: 'weixin'},
  {icon: 'weibo'},
  {icon: 'linkedin'}
]
</script>