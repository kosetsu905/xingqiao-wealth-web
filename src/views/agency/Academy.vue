
<template>
  <!-- Header -->
  <Header :from="cdbc" :currentTabActive="6"/>
  <!-- 主内容区 -->
  <main class="container mx-auto px-4 py-6">
    <!-- 页面标题和介绍 -->
    <section class="mb-10 text-center">
      <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">加密货币学院</h2>
      <p class="text-gray-400 max-w-3xl mx-auto text-balance">从入门到精通，系统化学习加密货币知识。无论您是初学者还是资深用户，这里都有适合您的学习资源，助您掌握区块链技术和数字资产投资。</p>
    </section>

    <!-- 学习路径 -->
    <section class="mb-12">
      <h3 class="text-xl font-bold mb-6 flex items-center">
        <i class="fa fa-road text-primary mr-2"></i> 学习路径
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 初学者路径 -->
        <div class="bg-dark-light rounded-xl p-6 card-hover border border-primary/20">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <i class="fa fa-paper-plane text-primary text-xl"></i>
          </div>
          <h4 class="text-lg font-semibold mb-2">初学者路径</h4>
          <p class="text-gray-400 text-sm mb-4">适合加密货币新手，从基础知识开始，逐步了解区块链和数字货币。</p>
          <div class="mb-4">
            <div class="flex justify-between text-sm mb-1">
              <span>课程进度</span>
              <span>12/15 课程</span>
            </div>
            <div class="progress-bar">
              <div class="progress-value" style="width: 80%"></div>
            </div>
          </div>
          <a href="#" class="block w-full text-center bg-primary/10 hover:bg-primary/20 text-primary py-2 rounded-lg transition-colors text-sm font-medium">
            继续学习
          </a>
        </div>

        <!-- 投资者路径 -->
        <div class="bg-dark-light rounded-xl p-6 card-hover">
          <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
            <i class="fa fa-line-chart text-secondary text-xl"></i>
          </div>
          <h4 class="text-lg font-semibold mb-2">投资者路径</h4>
          <p class="text-gray-400 text-sm mb-4">专注于加密货币投资策略、市场分析和风险管理，适合希望提升投资技能的用户。</p>
          <div class="mb-4">
            <div class="flex justify-between text-sm mb-1">
              <span>课程进度</span>
              <span>3/20 课程</span>
            </div>
            <div class="progress-bar">
              <div class="progress-value" style="width: 15%"></div>
            </div>
          </div>
          <a href="#" class="block w-full text-center bg-secondary/10 hover:bg-secondary/20 text-secondary py-2 rounded-lg transition-colors text-sm font-medium">
            开始学习
          </a>
        </div>

        <!-- 开发者路径 -->
        <div class="bg-dark-light rounded-xl p-6 card-hover">
          <div class="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-4">
            <i class="fa fa-code text-success text-xl"></i>
          </div>
          <h4 class="text-lg font-semibold mb-2">开发者路径</h4>
          <p class="text-gray-400 text-sm mb-4">深入区块链技术开发，学习智能合约、DApp开发和区块链集成等专业技能。</p>
          <div class="mb-4">
            <div class="flex justify-between text-sm mb-1">
              <span>课程进度</span>
              <span>0/25 课程</span>
            </div>
            <div class="progress-bar">
              <div class="progress-value" style="width: 0%"></div>
            </div>
          </div>
          <a href="#" class="block w-full text-center bg-success/10 hover:bg-success/20 text-success py-2 rounded-lg transition-colors text-sm font-medium">
            开始学习
          </a>
        </div>
      </div>
    </section>

    <!-- 课程分类 -->
    <section class="mb-12">
      <h3 class="text-xl font-bold mb-6 flex items-center">
        <i class="fa fa-th-large text-primary mr-2"></i> 课程分类
      </h3>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <a href="#" class="bg-dark-light rounded-xl p-4 text-center card-hover">
          <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <i class="fa fa-book text-primary"></i>
          </div>
          <span class="text-sm">基础知识</span>
        </a>

        <a href="#" class="bg-dark-light rounded-xl p-4 text-center card-hover">
          <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <i class="fa fa-btc text-primary"></i>
          </div>
          <span class="text-sm">数字货币</span>
        </a>

        <a href="#" class="bg-dark-light rounded-xl p-4 text-center card-hover">
          <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <i class="fa fa-exchange text-primary"></i>
          </div>
          <span class="text-sm">交易指南</span>
        </a>

        <a href="#" class="bg-dark-light rounded-xl p-4 text-center card-hover">
          <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <i class="fa fa-shield text-primary"></i>
          </div>
          <span class="text-sm">安全防护</span>
        </a>

        <a href="#" class="bg-dark-light rounded-xl p-4 text-center card-hover">
          <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <i class="fa fa-sitemap text-primary"></i>
          </div>
          <span class="text-sm">区块链技术</span>
        </a>

        <a href="#" class="bg-dark-light rounded-xl p-4 text-center card-hover">
          <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <i class="fa fa-lightbulb-o text-primary"></i>
          </div>
          <span class="text-sm">前沿趋势</span>
        </a>
      </div>
    </section>

    <!-- 主要内容区和侧边栏 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 左侧：热门课程 -->
      <div class="lg:col-span-2 space-y-6">
        <h3 class="text-xl font-bold flex items-center">
          <i class="fa fa-fire text-danger mr-2"></i> 热门课程
        </h3>

        <!-- 课程列表 -->
        <div class="space-y-6">
          <!-- 课程项 1 -->
          <article class="bg-dark-light rounded-xl overflow-hidden card-hover">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="relative h-40 md:h-auto overflow-hidden">
                <img src="https://picsum.photos/id/180/400/300" alt="比特币基础知识与投资指南" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                <div class="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                  热门
                </div>
              </div>
              <div class="p-4 md:col-span-3 flex flex-col">
                <div class="flex items-center text-sm text-gray-400 mb-2">
                  <span class="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs mr-3">基础知识</span>
                  <span><i class="fa fa-user mr-1"></i> 李教授</span>
                  <span class="mx-2">•</span>
                  <span><i class="fa fa-clock-o mr-1"></i> 6小时课程</span>
                </div>
                <h3 class="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                  <a href="#">比特币基础知识与投资指南</a>
                </h3>
                <p class="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">从零开始学习比特币的工作原理、区块链技术基础以及投资策略，适合加密货币初学者快速入门。</p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <div class="flex text-yellow-500 mr-2">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                    </div>
                    <span class="text-xs text-gray-500">4.8 (2,345人评价)</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-primary font-medium mr-2">免费</span>
                    <button class="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-lg text-sm transition-colors">
                      立即学习
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- 课程项 2 -->
          <article class="bg-dark-light rounded-xl overflow-hidden card-hover">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="relative h-40 md:h-auto overflow-hidden">
                <img src="https://picsum.photos/id/160/400/300" alt="以太坊与智能合约开发实战" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                <div class="absolute top-2 right-2 bg-secondary text-white text-xs px-2 py-1 rounded">
                  进阶
                </div>
              </div>
              <div class="p-4 md:col-span-3 flex flex-col">
                <div class="flex items-center text-sm text-gray-400 mb-2">
                  <span class="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full text-xs mr-3">开发者</span>
                  <span><i class="fa fa-user mr-1"></i> 王工程师</span>
                  <span class="mx-2">•</span>
                  <span><i class="fa fa-clock-o mr-1"></i> 24小时课程</span>
                </div>
                <h3 class="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                  <a href="#">以太坊与智能合约开发实战</a>
                </h3>
                <p class="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">深入学习以太坊生态系统，掌握Solidity编程语言和智能合约开发，从零开始构建去中心化应用(DApp)。</p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <div class="flex text-yellow-500 mr-2">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-o"></i>
                    </div>
                    <span class="text-xs text-gray-500">4.2 (1,876人评价)</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-primary font-medium mr-2">¥199</span>
                    <button class="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                      立即购买
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- 课程项 3 -->
          <article class="bg-dark-light rounded-xl overflow-hidden card-hover">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="relative h-40 md:h-auto overflow-hidden">
                <img src="https://picsum.photos/id/201/400/300" alt="加密货币技术分析与交易策略" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
              </div>
              <div class="p-4 md:col-span-3 flex flex-col">
                <div class="flex items-center text-sm text-gray-400 mb-2">
                  <span class="bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full text-xs mr-3">投资</span>
                  <span><i class="fa fa-user mr-1"></i> 张分析师</span>
                  <span class="mx-2">•</span>
                  <span><i class="fa fa-clock-o mr-1"></i> 12小时课程</span>
                </div>
                <h3 class="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                  <a href="#">加密货币技术分析与交易策略</a>
                </h3>
                <p class="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">学习K线分析、技术指标应用和交易策略制定，掌握加密货币市场的投资技巧和风险管理方法。</p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <div class="flex text-yellow-500 mr-2">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <span class="text-xs text-gray-500">4.9 (3,120人评价)</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-primary font-medium mr-2">¥99</span>
                    <button class="bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                      立即购买
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- 课程项 4 -->
          <article class="bg-dark-light rounded-xl overflow-hidden card-hover">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="relative h-40 md:h-auto overflow-hidden">
                <img src="https://picsum.photos/id/119/400/300" alt="区块链安全与隐私保护指南" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
              </div>
              <div class="p-4 md:col-span-3 flex flex-col">
                <div class="flex items-center text-sm text-gray-400 mb-2">
                  <span class="bg-red-500/10 text-red-500 px-2 py-0.5 rounded-full text-xs mr-3">安全</span>
                  <span><i class="fa fa-user mr-1"></i> 刘安全专家</span>
                  <span class="mx-2">•</span>
                  <span><i class="fa fa-clock-o mr-1"></i> 8小时课程</span>
                </div>
                <h3 class="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                  <a href="#">区块链安全与隐私保护指南</a>
                </h3>
                <p class="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">全面了解区块链安全风险，学习私钥管理、钱包安全和交易隐私保护的实用技巧，防范常见的加密货币诈骗。</p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <div class="flex text-yellow-500 mr-2">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                      <i class="fa fa-star-o"></i>
                    </div>
                    <span class="text-xs text-gray-500">3.7 (986人评价)</span>
                  </div>
                  <div class="flex items-center">
                    <span class="text-primary font-medium mr-2">免费</span>
                    <button class="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-lg text-sm transition-colors">
                      立即学习
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- 加载更多按钮 -->
        <div class="text-center mt-8">
          <button class="bg-dark-light hover:bg-dark-lighter text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center">
            <span>查看更多课程</span>
            <i class="fa fa-angle-down ml-2"></i>
          </button>
        </div>
      </div>

      <!-- 右侧：学习资源和讲师 -->
      <div class="space-y-6">
        <!-- 学习进度 -->
        <div class="bg-dark-light rounded-xl p-5 card-hover">
          <h3 class="text-lg font-bold mb-4 flex items-center">
            <i class="fa fa-tasks text-primary mr-2"></i> 我的学习进度
          </h3>

          <div class="space-y-4">
            <div>
              <div class="flex justify-between text-sm mb-1">
                <span>比特币基础知识与投资指南</span>
                <span>75%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-value" style="width: 75%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-sm mb-1">
                <span>区块链技术入门</span>
                <span>40%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-value" style="width: 40%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-sm mb-1">
                <span>加密货币钱包使用指南</span>
                <span>100%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-value" style="width: 100%"></div>
              </div>
            </div>
          </div>

          <a href="#" class="text-primary text-sm hover:underline mt-4 block text-center">查看全部课程进度</a>
        </div>

        <!-- 最新文章 -->
        <div class="bg-dark-light rounded-xl p-5 card-hover">
          <h3 class="text-lg font-bold mb-4 flex items-center">
            <i class="fa fa-file-text-o text-primary mr-2"></i> 最新学习文章
          </h3>
          <div class="space-y-4">
            <a href="#" class="block group">
              <h4 class="text-sm font-medium mb-1 group-hover:text-primary transition-colors">2023年最值得关注的5个区块链项目</h4>
              <p class="text-xs text-gray-500"><i class="fa fa-calendar mr-1"></i> 3天前</p>
            </a>

            <a href="#" class="block group">
              <h4 class="text-sm font-medium mb-1 group-hover:text-primary transition-colors">如何识别加密货币诈骗和 Ponzi  scheme</h4>
              <p class="text-xs text-gray-500"><i class="fa fa-calendar mr-1"></i> 1周前</p>
            </a>

            <a href="#" class="block group">
              <h4 class="text-sm font-medium mb-1 group-hover:text-primary transition-colors">Layer 2解决方案如何解决以太坊拥堵问题</h4>
              <p class="text-xs text-gray-500"><i class="fa fa-calendar mr-1"></i> 2周前</p>
            </a>

            <a href="#" class="block group">
              <h4 class="text-sm font-medium mb-1 group-hover:text-primary transition-colors">NFT基础知识：从概念到投资</h4>
              <p class="text-xs text-gray-500"><i class="fa fa-calendar mr-1"></i> 3周前</p>
            </a>
          </div>
          <a href="#" class="text-primary text-sm hover:underline mt-4 block text-center">查看更多文章</a>
        </div>

        <!-- 推荐讲师 -->
        <div class="bg-dark-light rounded-xl p-5 card-hover">
          <h3 class="text-lg font-bold mb-4 flex items-center">
            <i class="fa fa-users text-primary mr-2"></i> 推荐讲师
          </h3>
          <div class="space-y-4">
            <div class="flex items-center">
              <img src="https://picsum.photos/id/1005/48/48" alt="李教授" class="w-12 h-12 rounded-full mr-3">
              <div>
                <h4 class="font-medium text-sm">李教授</h4>
                <p class="text-xs text-gray-500">区块链研究员 | 15门课程</p>
              </div>
            </div>

            <div class="flex items-center">
              <img src="https://picsum.photos/id/1012/48/48" alt="王工程师" class="w-12 h-12 rounded-full mr-3">
              <div>
                <h4 class="font-medium text-sm">王工程师</h4>
                <p class="text-xs text-gray-500">智能合约开发者 | 8门课程</p>
              </div>
            </div>

            <div class="flex items-center">
              <img src="https://picsum.photos/id/1025/48/48" alt="张分析师" class="w-12 h-12 rounded-full mr-3">
              <div>
                <h4 class="font-medium text-sm">张分析师</h4>
                <p class="text-xs text-gray-500">加密货币投资专家 | 12门课程</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 学习社区 -->
        <div class="bg-gradient-to-br from-primary to-secondary rounded-xl p-5 text-center card-hover">
          <h3 class="text-lg font-bold mb-2">加入学习社区</h3>
          <p class="text-sm text-gray-200 mb-4">与 thousands 名学习者一起交流，解决问题，共同进步</p>
          <button class="bg-white text-primary hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors text-sm w-full">
            立即加入 <i class="fa fa-arrow-right ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const cdbc = 'cbdc';
import Header from "@/components/agency/Header.vue";
</script>


<style scoped>

</style>