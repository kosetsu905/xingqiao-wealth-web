
<template>

  <!-- Header -->
  <Header :from="cdbc" :currentTabActive="5"/>
  <!-- 主内容区 -->
  <main class="container mx-auto px-4 py-6">
    <!-- 页面标题和导航 -->
    <section class="mb-8">
      <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-6">数字货币资讯</h2>

      <!-- 资讯分类导航 -->
      <div class="bg-dark-light rounded-xl p-3 mb-6 overflow-x-auto scrollbar-hide">
        <div class="flex space-x-2 min-w-max">
          <button class="bg-primary text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap">全部资讯</button>
          <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors">市场动态</button>
          <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors">政策法规</button>
          <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors">技术进展</button>
          <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors">项目动态</button>
          <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors">行业研究</button>
          <button class="bg-dark-lighter hover:bg-dark-lighter/80 text-gray-300 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors">大咖观点</button>
        </div>
      </div>

      <!-- 头条新闻 -->
      <div class="bg-dark-light rounded-xl overflow-hidden card-hover mb-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="relative h-64 lg:h-auto overflow-hidden">
            <img src="https://picsum.photos/id/180/800/600" alt="比特币突破45000美元关口，创下三个月来新高" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105">
            <div class="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
              头条
            </div>
          </div>
          <div class="p-6 flex flex-col justify-center">
            <div class="flex items-center text-sm text-gray-400 mb-3">
              <span class="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs mr-3">市场动态</span>
              <span><i class="fa fa-clock-o mr-1"></i> 2小时前</span>
              <span class="ml-3"><i class="fa fa-eye mr-1"></i> 2.5k</span>
              <span class="ml-3"><i class="fa fa-comment mr-1"></i> 42</span>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-balance">比特币突破45000美元关口，创下三个月来新高</h3>
            <p class="text-gray-400 mb-4 flex-grow">受美联储货币政策转向预期和机构资金持续流入影响，比特币价格今日突破45000美元，为三个月来首次。分析师认为，随着宏观经济环境改善，加密货币市场可能迎来新一轮上涨周期...</p>
            <a href="#" class="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors w-fit">
              阅读全文 <i class="fa fa-angle-right ml-1"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 主要内容区和侧边栏 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 左侧：最新资讯列表 -->
      <div class="lg:col-span-2 space-y-6">
        <h3 class="text-xl font-bold flex items-center">
          <i class="fa fa-fire text-danger mr-2"></i> 最新资讯
        </h3>

        <!-- 资讯列表 -->
        <div class="space-y-6">
          <!-- 资讯项 1 -->
          <article class="bg-dark-light rounded-xl overflow-hidden card-hover">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="relative h-40 md:h-auto overflow-hidden">
                <img src="https://picsum.photos/id/239/400/300" alt="以太坊完成上海升级，开启质押提款功能" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
              </div>
              <div class="p-4 md:col-span-2 flex flex-col">
                <div class="flex items-center text-sm text-gray-400 mb-2">
                  <span class="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full text-xs mr-3">技术进展</span>
                  <span><i class="fa fa-clock-o mr-1"></i> 6小时前</span>
                </div>
                <h3 class="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                  <a href="#">以太坊完成上海升级，开启质押提款功能</a>
                </h3>
                <p class="text-gray-400 text-sm mb-3 flex-grow line-clamp-2">以太坊网络今日成功完成上海升级，正式启用ETH质押提款功能。这标志着以太坊从工作量证明彻底转向权益证明的最后一步完成，网络安全性和可持续性得到进一步提升...</p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <img src="https://picsum.photos/id/1005/32/32" alt="作者头像" class="w-6 h-6 rounded-full mr-2">
                    <span class="text-xs text-gray-500">区块链研究员</span>
                  </div>
                  <div class="flex items-center text-xs text-gray-500">
                    <span class="mr-3"><i class="fa fa-eye mr-1"></i> 1.2k</span>
                    <span><i class="fa fa-comment mr-1"></i> 28</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- 资讯项 2 -->
          <article class="bg-dark-light rounded-xl overflow-hidden card-hover">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="relative h-40 md:h-auto overflow-hidden">
                <img src="https://picsum.photos/id/160/400/300" alt="欧盟通过加密资产市场监管法案，将于2024年正式实施" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
              </div>
              <div class="p-4 md:col-span-2 flex flex-col">
                <div class="flex items-center text-sm text-gray-400 mb-2">
                  <span class="bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full text-xs mr-3">政策法规</span>
                  <span><i class="fa fa-clock-o mr-1"></i> 12小时前</span>
                </div>
                <h3 class="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                  <a href="#">欧盟通过加密资产市场监管法案，将于2024年正式实施</a>
                </h3>
                <p class="text-gray-400 text-sm mb-3 flex-grow line-clamp-2">欧盟议会今日正式通过了加密资产市场监管法案(MiCA)，该法案将为加密资产在欧盟范围内的运营建立统一的监管框架。业内人士认为，这将提高加密市场的合法性和投资者保护水平...</p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <img src="https://picsum.photos/id/1012/32/32" alt="作者头像" class="w-6 h-6 rounded-full mr-2">
                    <span class="text-xs text-gray-500">政策分析师</span>
                  </div>
                  <div class="flex items-center text-xs text-gray-500">
                    <span class="mr-3"><i class="fa fa-eye mr-1"></i> 3.7k</span>
                    <span><i class="fa fa-comment mr-1"></i> 89</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- 资讯项 3 -->
          <article class="bg-dark-light rounded-xl overflow-hidden card-hover">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="relative h-40 md:h-auto overflow-hidden">
                <img src="https://picsum.photos/id/201/400/300" alt="大型科技公司宣布推出企业级区块链解决方案" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
              </div>
              <div class="p-4 md:col-span-2 flex flex-col">
                <div class="flex items-center text-sm text-gray-400 mb-2">
                  <span class="bg-green-500/10 text-green-500 px-2 py-0.5 rounded-full text-xs mr-3">行业动态</span>
                  <span><i class="fa fa-clock-o mr-1"></i> 1天前</span>
                </div>
                <h3 class="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                  <a href="#">大型科技公司宣布推出企业级区块链解决方案</a>
                </h3>
                <p class="text-gray-400 text-sm mb-3 flex-grow line-clamp-2">全球领先的科技公司今日发布了其企业级区块链平台，旨在帮助企业更高效地进行供应链管理和数据共享。该平台基于私有区块链技术，强调安全性和可扩展性，已有多家 Fortune 500 公司表示将采用...</p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <img src="https://picsum.photos/id/1025/32/32" alt="作者头像" class="w-6 h-6 rounded-full mr-2">
                    <span class="text-xs text-gray-500">科技记者</span>
                  </div>
                  <div class="flex items-center text-xs text-gray-500">
                    <span class="mr-3"><i class="fa fa-eye mr-1"></i> 2.1k</span>
                    <span><i class="fa fa-comment mr-1"></i> 53</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- 资讯项 4 -->
          <article class="bg-dark-light rounded-xl overflow-hidden card-hover">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="relative h-40 md:h-auto overflow-hidden">
                <img src="https://picsum.photos/id/119/400/300" alt="央行数字货币试点范围扩大，覆盖更多城市和场景" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
              </div>
              <div class="p-4 md:col-span-2 flex flex-col">
                <div class="flex items-center text-sm text-gray-400 mb-2">
                  <span class="bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full text-xs mr-3">政策法规</span>
                  <span><i class="fa fa-clock-o mr-1"></i> 2天前</span>
                </div>
                <h3 class="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                  <a href="#">央行数字货币试点范围扩大，覆盖更多城市和场景</a>
                </h3>
                <p class="text-gray-400 text-sm mb-3 flex-grow line-clamp-2">据官方消息，央行数字货币试点项目将在原有基础上新增10个试点城市，并扩大应用场景至公共服务、零售消费、政务缴费等多个领域。分析认为，这将加速数字货币的普及和应用落地...</p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <img src="https://picsum.photos/id/1074/32/32" alt="作者头像" class="w-6 h-6 rounded-full mr-2">
                    <span class="text-xs text-gray-500">金融分析师</span>
                  </div>
                  <div class="flex items-center text-xs text-gray-500">
                    <span class="mr-3"><i class="fa fa-eye mr-1"></i> 4.3k</span>
                    <span><i class="fa fa-comment mr-1"></i> 124</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- 加载更多按钮 -->
        <div class="text-center mt-8">
          <button class="bg-dark-light hover:bg-dark-lighter text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center">
            <span>加载更多</span>
            <i class="fa fa-refresh ml-2"></i>
          </button>
        </div>
      </div>

      <!-- 右侧：热门资讯和市场指数 -->
      <div class="space-y-6">
        <!-- 热门资讯 -->
        <div class="bg-dark-light rounded-xl p-5 card-hover">
          <h3 class="text-lg font-bold mb-4 flex items-center">
            <i class="fa fa-star text-yellow-500 mr-2"></i> 热门资讯
          </h3>
          <div class="space-y-4">
            <div class="flex gap-3">
              <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img src="https://picsum.photos/id/102/200/200" alt="比特币ETF资金流入创单周新高" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="text-sm font-medium hover:text-primary transition-colors line-clamp-2 mb-1">
                  <a href="#">比特币ETF资金流入创单周新高，机构参与度持续提升</a>
                </h4>
                <p class="text-xs text-gray-500"><i class="fa fa-clock-o mr-1"></i> 3天前</p>
              </div>
            </div>

            <div class="flex gap-3">
              <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img src="https://picsum.photos/id/103/200/200" alt="DeFi协议总锁仓量突破500亿美元" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="text-sm font-medium hover:text-primary transition-colors line-clamp-2 mb-1">
                  <a href="#">DeFi协议总锁仓量突破500亿美元，生态系统持续扩张</a>
                </h4>
                <p class="text-xs text-gray-500"><i class="fa fa-clock-o mr-1"></i> 4天前</p>
              </div>
            </div>

            <div class="flex gap-3">
              <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img src="https://picsum.photos/id/104/200/200" alt="Web3游戏用户数量环比增长30%" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="text-sm font-medium hover:text-primary transition-colors line-clamp-2 mb-1">
                  <a href="#">Web3游戏用户数量环比增长30%，行业迎来爆发期</a>
                </h4>
                <p class="text-xs text-gray-500"><i class="fa fa-clock-o mr-1"></i> 5天前</p>
              </div>
            </div>

            <div class="flex gap-3">
              <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img src="https://picsum.photos/id/105/200/200" alt="大型银行推出加密货币托管服务" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="text-sm font-medium hover:text-primary transition-colors line-clamp-2 mb-1">
                  <a href="#">大型银行推出加密货币托管服务，传统金融加速入场</a>
                </h4>
                <p class="text-xs text-gray-500"><i class="fa fa-clock-o mr-1"></i> 1周前</p>
              </div>
            </div>
          </div>
          <a href="#" class="text-primary text-sm hover:underline mt-4 block text-center">查看更多热门资讯</a>
        </div>

        <!-- 市场指数 -->
        <div class="bg-dark-light rounded-xl p-5 card-hover">
          <h3 class="text-lg font-bold mb-4 flex items-center">
            <i class="fa fa-line-chart text-primary mr-2"></i> 市场指数
          </h3>
          <div class="space-y-3">
            <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
              <div class="flex items-center">
                <img src="https://picsum.photos/id/106/32/32" alt="比特币" class="w-6 h-6 rounded-full mr-2">
                <span>BTC</span>
              </div>
              <div class="text-right">
                <div class="font-medium">$45,218.36</div>
                <div class="text-success text-xs">+3.24%</div>
              </div>
            </div>

            <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
              <div class="flex items-center">
                <img src="https://picsum.photos/id/107/32/32" alt="以太坊" class="w-6 h-6 rounded-full mr-2">
                <span>ETH</span>
              </div>
              <div class="text-right">
                <div class="font-medium">$2,456.78</div>
                <div class="text-success text-xs">+1.87%</div>
              </div>
            </div>

            <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
              <div class="flex items-center">
                <img src="https://picsum.photos/id/108/32/32" alt="莱特币" class="w-6 h-6 rounded-full mr-2">
                <span>LTC</span>
              </div>
              <div class="text-right">
                <div class="font-medium">$98.45</div>
                <div class="text-danger text-xs">-0.56%</div>
              </div>
            </div>

            <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
              <div class="flex items-center">
                <img src="https://picsum.photos/id/109/32/32" alt="瑞波币" class="w-6 h-6 rounded-full mr-2">
                <span>XRP</span>
              </div>
              <div class="text-right">
                <div class="font-medium">$0.6234</div>
                <div class="text-success text-xs">+2.15%</div>
              </div>
            </div>

            <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
              <div class="flex items-center">
                <img src="https://picsum.photos/id/110/32/32" alt="比特币现金" class="w-6 h-6 rounded-full mr-2">
                <span>BCH</span>
              </div>
              <div class="text-right">
                <div class="font-medium">$185.67</div>
                <div class="text-danger text-xs">-1.23%</div>
              </div>
            </div>
          </div>
          <a href="#" class="text-primary text-sm hover:underline mt-4 block text-center">查看全部行情</a>
        </div>

        <!-- 订阅资讯 -->
        <div class="bg-gradient-to-br from-primary to-secondary rounded-xl p-5 text-center card-hover">
          <h3 class="text-lg font-bold mb-2">订阅资讯推送</h3>
          <p class="text-sm text-gray-200 mb-4">第一时间获取最新市场动态和独家分析</p>
          <div class="flex flex-col gap-3">
            <input type="email" placeholder="请输入您的邮箱" class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30">
            <button class="bg-white text-primary hover:bg-gray-100 font-medium py-2 rounded-lg transition-colors">
              立即订阅
            </button>
          </div>
          <p class="text-xs text-gray-300 mt-3">我们尊重您的隐私，不会向第三方分享您的信息</p>
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