
<template>
  <!-- Header -->
  <Header :from="cdbc" :currentTabActive="3"/>
  <main>
    <!-- 英雄区域 -->
    <section class="bg-gradient-to-br from-blue-600 to-primary text-white py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-shadow mb-4">
              探索数字货币<br>的未来世界
            </h1>
            <p class="text-[clamp(1rem,2vw,1.25rem)] text-white/90 mb-8 max-w-lg">
              实时掌握全球加密货币市场动态，获取专业分析与交易工具，开启您的数字资产之旅。
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button class="px-6 py-3 rounded-lg bg-white text-primary font-medium hover:bg-gray-100 transition-colors shadow-lg">
                开始交易
              </button>
              <button class="px-6 py-3 rounded-lg bg-transparent border-2 border-white text-white font-medium hover:bg-white/10 transition-colors">
                了解更多 <i class="fa fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
          <div class="md:w-1/2">
            <div class="relative">
              <div class="absolute inset-0 bg-white/10 rounded-2xl blur-xl"></div>
              <img src="https://picsum.photos/id/180/600/400" alt="数字货币交易可视化" class="relative z-10 rounded-2xl shadow-2xl w-full">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 市场概览 -->
    <section class="py-8 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold">市场概览</h2>
          <div class="flex items-center space-x-2 text-sm text-gray-500">
            <span>最后更新：</span>
            <span id="last-update">2023-06-15 14:30:00</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- 总市值 -->
          <div class="bg-gray-100 rounded-xl p-6 shadow-sm card-hover">
            <div class="text-gray-500 mb-2">总市值</div>
            <div class="text-2xl font-bold mb-2">$1.87T</div>
            <div class="flex items-center text-success">
              <i class="fa fa-arrow-up mr-1"></i>
              <span>2.4%</span>
            </div>
          </div>

          <!-- 24小时交易量 -->
          <div class="bg-gray-100  rounded-xl p-6 shadow-sm card-hover">
            <div class="text-gray-500 mb-2">24小时交易量</div>
            <div class="text-2xl font-bold mb-2">$87.5B</div>
            <div class="flex items-center text-danger">
              <i class="fa fa-arrow-down mr-1"></i>
              <span>1.2%</span>
            </div>
          </div>

          <!-- 比特币占比 -->
          <div class="bg-gray-100  rounded-xl p-6 shadow-sm card-hover">
            <div class="text-gray-500 mb-2">比特币占比</div>
            <div class="text-2xl font-bold mb-2">42.3%</div>
            <div class="flex items-center text-success">
              <i class="fa fa-arrow-up mr-1"></i>
              <span>0.8%</span>
            </div>
          </div>

          <!-- 活跃加密货币 -->
          <div class="bg-gray-100  rounded-xl p-6 shadow-sm card-hover">
            <div class="text-gray-500 mb-2">活跃加密货币</div>
            <div class="text-2xl font-bold mb-2">9,876</div>
            <div class="flex items-center text-success">
              <i class="fa fa-arrow-up mr-1"></i>
              <span>124</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 概念币板块 -->
    <section class="py-8 bg-white">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold">概念币板块</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

          <!-- 稳定币 -->
          <div class="bg-gray-100 rounded-xl p-5 card-hover">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold">稳定币</h3>
              <span class="text-danger flex items-center">
                            <i class="fa fa-arrow-down mr-1"></i>1.67%
                        </span>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span class="font-bold">B</span>
                  </div>
                  <span>BUSD</span>
                </div>
                <span class="text-success">+13.25%</span>
              </div>
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                    <span class="font-bold">E</span>
                  </div>
                  <span>EURS</span>
                </div>
                <span class="text-success">+3.23%</span>
              </div>
            </div>
            <button class="w-full mt-4 text-primary text-sm hover:text-primary/80 transition-colors">
              查看全部 <i class="fa fa-angle-right ml-1"></i>
            </button>
          </div>

          <!-- Rollups概念币 -->
          <div class="bg-gray-100 rounded-xl p-5 card-hover">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold">Rollups概念币</h3>
              <span class="text-danger flex items-center">
                            <i class="fa fa-arrow-down mr-1"></i>1.67%
                        </span>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span class="font-bold">H</span>
                  </div>
                  <span>HEZ</span>
                </div>
                <span class="text-success">+13.25%</span>
              </div>
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                    <span class="font-bold">O</span>
                  </div>
                  <span>OMG</span>
                </div>
                <span class="text-success">+3.23%</span>
              </div>
            </div>
            <button class="w-full mt-4 text-primary text-sm hover:text-primary/80 transition-colors">
              查看全部 <i class="fa fa-angle-right ml-1"></i>
            </button>
          </div>

          <!-- 美元稳定概念币 -->
          <div class="bg-gray-100 rounded-xl p-5 card-hover">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold">美元稳定概念币</h3>
              <span class="text-success flex items-center">
                            <i class="fa fa-arrow-up mr-1"></i>0.74%
                        </span>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                    <span class="font-bold">F</span>
                  </div>
                  <span>FRAX</span>
                </div>
                <span class="text-success">+12.48%</span>
              </div>
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                    <span class="font-bold">F</span>
                  </div>
                  <span>FXD</span>
                </div>
                <span class="text-success">+2.19%</span>
              </div>
            </div>
            <button class="w-full mt-4 text-primary text-sm hover:text-primary/80 transition-colors">
              查看全部 <i class="fa fa-angle-right ml-1"></i>
            </button>
          </div>

          <!-- 人工智能模因概念币 -->
          <div class="bg-gray-100 rounded-xl p-5 card-hover">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold">人工智能模因概念币</h3>
              <span class="text-success flex items-center">
                            <i class="fa fa-arrow-up mr-1"></i>2.44%
                        </span>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                    <span class="font-bold">A</span>
                  </div>
                  <span>AI</span>
                </div>
                <span class="text-success">+13.84%</span>
              </div>
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
                    <span class="font-bold">K</span>
                  </div>
                  <span>KIBSHI</span>
                </div>
                <span class="text-success">+10.01%</span>
              </div>
            </div>
            <button class="w-full mt-4 text-primary text-sm hover:text-primary/80 transition-colors">
              查看全部 <i class="fa fa-angle-right ml-1"></i>
            </button>
          </div>

          <!-- DAO概念币 -->
          <div class="bg-gray-100 rounded-xl p-5 card-hover">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold">DAO概念币</h3>
              <span class="text-danger flex items-center">
                            <i class="fa fa-arrow-down mr-1"></i>1.75%
                        </span>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                    <span class="font-bold">J</span>
                  </div>
                  <span>JUSTICE</span>
                </div>
                <span class="text-success">+7.44%</span>
              </div>
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                    <span class="font-bold">P</span>
                  </div>
                  <span>PNK</span>
                </div>
                <span class="text-success">+2.6%</span>
              </div>
            </div>
            <button class="w-full mt-4 text-primary text-sm hover:text-primary/80 transition-colors">
              查看全部 <i class="fa fa-angle-right ml-1"></i>
            </button>
          </div>

          <!-- 文件共享 -->
          <div class="bg-gray-100 rounded-xl p-5 card-hover">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold">文件共享</h3>
              <span class="text-danger flex items-center">
                            <i class="fa fa-arrow-down mr-1"></i>2.22%
                        </span>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center mr-3">
                    <span class="font-bold">E</span>
                  </div>
                  <span>ETHO</span>
                </div>
                <span class="text-success">+5.88%</span>
              </div>
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mr-3">
                    <span class="font-bold">S</span>
                  </div>
                  <span>SCP</span>
                </div>
                <span class="text-success">+1.62%</span>
              </div>
            </div>
            <button class="w-full mt-4 text-primary text-sm hover:text-primary/80 transition-colors">
              查看全部 <i class="fa fa-angle-right ml-1"></i>
            </button>
          </div>

          <!-- Presale Memes概念币 -->
          <div class="bg-gray-100 rounded-xl p-5 card-hover">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold">Presale Memes概念币</h3>
              <span class="text-danger flex items-center">
                            <i class="fa fa-arrow-down mr-1"></i>6.27%
                        </span>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                    <span class="font-bold">P</span>
                  </div>
                  <span>PUNDU</span>
                </div>
                <span class="text-danger">-4.06%</span>
              </div>
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-gray-500/20 flex items-center justify-center mr-3">
                    <span class="font-bold">S</span>
                  </div>
                  <span>SLERF</span>
                </div>
                <span class="text-danger">-8.48%</span>
              </div>
            </div>
            <button class="w-full mt-4 text-primary text-sm hover:text-primary/80 transition-colors">
              查看全部 <i class="fa fa-angle-right ml-1"></i>
            </button>
          </div>

          <!-- Moonriver Ecosystem概念币 -->
          <div class="bg-gray-100 rounded-xl p-5 card-hover">
            <div class="flex justify-between items-center mb-4">
              <h3 class="font-semibold">Moonriver Ecosystem概念币</h3>
              <span class="text-danger flex items-center">
                            <i class="fa fa-arrow-down mr-1"></i>2.89%
                        </span>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                    <span class="font-bold">M</span>
                  </div>
                  <span>MOVR</span>
                </div>
                <span class="text-danger">-3.21%</span>
              </div>
              <div class="flex justify-between items-center p-2 hover:bg-dark-lighter/50 rounded-lg transition-colors">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                    <span class="font-bold">S</span>
                  </div>
                  <span>STAKE</span>
                </div>
                <span class="text-success">+1.56%</span>
              </div>
            </div>
            <button class="w-full mt-4 text-primary text-sm hover:text-primary/80 transition-colors">
              查看全部 <i class="fa fa-angle-right ml-1"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 价格图表 -->
    <section class="py-8 bg-white">
      <div class="container mx-auto px-4">
        <div class="mb-8">
          <h2 class="text-2xl md:text-3xl font-bold mb-2">比特币价格走势</h2>
          <p class="text-gray-500">BTC/USD 实时价格图表</p>
        </div>
        <div class="bg-gray-100 rounded-xl shadow-sm p-4 md:p-6 mb-6">
          <!-- 时间范围选择器 -->
          <div class="flex flex-wrap gap-2 mb-6">
            <button class="px-4 py-2 rounded-lg bg-primary text-white text-sm">24小时</button>
            <button class="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors">7天</button>
            <button class="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors">1个月</button>
            <button class="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors">3个月</button>
            <button class="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors">1年</button>
            <button class="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm hover:bg-gray-200 transition-colors">全部</button>
          </div>

          <!-- 图表容器 -->
          <div id="bitcoinChart" class="h-[300px] md:h-[400px]"></div>
        </div>
        <!-- 比特币基本信息 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <div class="text-gray-500 mb-1">当前价格</div>
            <div class="text-2xl font-bold">$42,583.76</div>
            <div class="flex items-center text-success mt-2">
              <i class="fa fa-arrow-up mr-1"></i>
              <span>3.2%</span>
              <span class="text-gray-500 ml-2 text-sm">今日</span>
            </div>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-sm">
            <div class="text-gray-500 mb-1">24小时高低</div>
            <div class="text-lg font-semibold">
              <span class="text-danger">$41,205.32</span>
              <span class="mx-2 text-gray-400">/</span>
              <span class="text-success">$42,897.15</span>
            </div>
            <div class="mt-2 text-sm text-gray-500">
              市值: $812.5B
            </div>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-sm">
            <div class="text-gray-500 mb-1">流通供应量</div>
            <div class="text-lg font-semibold">18.96M BTC</div>
            <div class="mt-2 text-sm text-gray-500">
              最大供应量: 21M BTC
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 热门币种 -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold">热门币种</h2>
          <a href="#" class="text-primary font-medium hover:underline flex items-center">
            查看全部 <i class="fa fa-chevron-right ml-1 text-sm"></i>
          </a>
        </div>

        <div class="overflow-x-auto scrollbar-hide">
          <table class="w-full min-w-[768px]">
            <thead>
            <tr class="border-b">
              <th class="py-4 px-2 text-left text-gray-500 font-medium">排名</th>
              <th class="py-4 px-2 text-left text-gray-500 font-medium">名称</th>
              <th class="py-4 px-2 text-right text-gray-500 font-medium">价格</th>
              <th class="py-4 px-2 text-right text-gray-500 font-medium">24小时</th>
              <th class="py-4 px-2 text-right text-gray-500 font-medium">7天</th>
              <th class="py-4 px-2 text-right text-gray-500 font-medium">市值</th>
              <th class="py-4 px-2 text-right text-gray-500 font-medium">操作</th>
            </tr>
            </thead>
            <tbody>
            <!-- 比特币 -->
            <tr class="border-b hover:bg-gray-50 transition-colors">
              <td class="py-4 px-2 font-medium">1</td>
              <td class="py-4 px-2">
                <div class="flex items-center">
                  <img src="https://picsum.photos/id/237/40/40" alt="比特币" class="w-8 h-8 rounded-full mr-3">
                  <div>
                    <div class="font-medium">比特币</div>
                    <div class="text-gray-500 text-sm">BTC</div>
                  </div>
                </div>
              </td>
              <td class="py-4 px-2 text-right font-medium">$42,583.76</td>
              <td class="py-4 px-2 text-right text-success">+3.2%</td>
              <td class="py-4 px-2 text-right text-success">+5.7%</td>
              <td class="py-4 px-2 text-right">$812.5B</td>
              <td class="py-4 px-2 text-right">
                <button class="px-3 py-1 rounded bg-primary text-white text-sm hover:bg-primary/90 transition-colors">交易</button>
              </td>
            </tr>

            <!-- 以太坊 -->
            <tr class="border-b hover:bg-gray-50 transition-colors">
              <td class="py-4 px-2 font-medium">2</td>
              <td class="py-4 px-2">
                <div class="flex items-center">
                  <img src="https://picsum.photos/id/238/40/40" alt="以太坊" class="w-8 h-8 rounded-full mr-3">
                  <div>
                    <div class="font-medium">以太坊</div>
                    <div class="text-gray-500 text-sm">ETH</div>
                  </div>
                </div>
              </td>
              <td class="py-4 px-2 text-right font-medium">$2,845.32</td>
              <td class="py-4 px-2 text-right text-success">+2.1%</td>
              <td class="py-4 px-2 text-right text-danger">-1.3%</td>
              <td class="py-4 px-2 text-right">$341.2B</td>
              <td class="py-4 px-2 text-right">
                <button class="px-3 py-1 rounded bg-primary text-white text-sm hover:bg-primary/90 transition-colors">交易</button>
              </td>
            </tr>

            <!-- 币安币 -->
            <tr class="border-b hover:bg-gray-50 transition-colors">
              <td class="py-4 px-2 font-medium">3</td>
              <td class="py-4 px-2">
                <div class="flex items-center">
                  <img src="https://picsum.photos/id/239/40/40" alt="币安币" class="w-8 h-8 rounded-full mr-3">
                  <div>
                    <div class="font-medium">币安币</div>
                    <div class="text-gray-500 text-sm">BNB</div>
                  </div>
                </div>
              </td>
              <td class="py-4 px-2 text-right font-medium">$387.65</td>
              <td class="py-4 px-2 text-right text-danger">-0.8%</td>
              <td class="py-4 px-2 text-right text-success">+2.4%</td>
              <td class="py-4 px-2 text-right">$65.3B</td>
              <td class="py-4 px-2 text-right">
                <button class="px-3 py-1 rounded bg-primary text-white text-sm hover:bg-primary/90 transition-colors">交易</button>
              </td>
            </tr>

            <!-- 瑞波币 -->
            <tr class="border-b hover:bg-gray-50 transition-colors">
              <td class="py-4 px-2 font-medium">4</td>
              <td class="py-4 px-2">
                <div class="flex items-center">
                  <img src="https://picsum.photos/id/240/40/40" alt="瑞波币" class="w-8 h-8 rounded-full mr-3">
                  <div>
                    <div class="font-medium">瑞波币</div>
                    <div class="text-gray-500 text-sm">XRP</div>
                  </div>
                </div>
              </td>
              <td class="py-4 px-2 text-right font-medium">$0.7832</td>
              <td class="py-4 px-2 text-right text-success">+5.3%</td>
              <td class="py-4 px-2 text-right text-success">+8.9%</td>
              <td class="py-4 px-2 text-right">$36.7B</td>
              <td class="py-4 px-2 text-right">
                <button class="px-3 py-1 rounded bg-primary text-white text-sm hover:bg-primary/90 transition-colors">交易</button>
              </td>
            </tr>

            <!-- 莱特币 -->
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="py-4 px-2 font-medium">5</td>
              <td class="py-4 px-2">
                <div class="flex items-center">
                  <img src="https://picsum.photos/id/241/40/40" alt="莱特币" class="w-8 h-8 rounded-full mr-3">
                  <div>
                    <div class="font-medium">莱特币</div>
                    <div class="text-gray-500 text-sm">LTC</div>
                  </div>
                </div>
              </td>
              <td class="py-4 px-2 text-right font-medium">$98.45</td>
              <td class="py-4 px-2 text-right text-danger">-1.2%</td>
              <td class="py-4 px-2 text-right text-danger">-3.1%</td>
              <td class="py-4 px-2 text-right">$7.2B</td>
              <td class="py-4 px-2 text-right">
                <button class="px-3 py-1 rounded bg-primary text-white text-sm hover:bg-primary/90 transition-colors">交易</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 最新资讯 -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold">最新资讯</h2>
          <a href="#" class="text-primary font-medium hover:underline flex items-center">
            更多资讯 <i class="fa fa-chevron-right ml-1 text-sm"></i>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- 资讯卡片1 -->
          <article class="bg-white rounded-xl overflow-hidden shadow-sm card-hover">
            <img src="https://picsum.photos/id/1/600/400" alt="比特币突破4万美元大关" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <span>2小时前</span>
                <span class="mx-2">•</span>
                <span>市场动态</span>
              </div>
              <h3 class="text-xl font-bold mb-3">比特币突破4万美元大关，创下三个月来新高</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">受美联储货币政策调整预期影响，比特币价格今日突破4万美元，为近三个月来首次，市场情绪明显回暖...</p>
              <a href="#" class="text-primary font-medium hover:underline flex items-center">
                阅读全文 <i class="fa fa-arrow-right ml-1"></i>
              </a>
            </div>
          </article>

          <!-- 资讯卡片2 -->
          <article class="bg-white rounded-xl overflow-hidden shadow-sm card-hover">
            <img src="https://picsum.photos/id/2/600/400" alt="以太坊2.0升级进展" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <span>5小时前</span>
                <span class="mx-2">•</span>
                <span>技术发展</span>
              </div>
              <h3 class="text-xl font-bold mb-3">以太坊2.0升级进入最后阶段，预计下月完成合并</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">以太坊核心开发者宣布，以太坊2.0升级已进入最后准备阶段，预计下月完成从工作量证明到权益证明的合并...</p>
              <a href="#" class="text-primary font-medium hover:underline flex items-center">
                阅读全文 <i class="fa fa-arrow-right ml-1"></i>
              </a>
            </div>
          </article>

          <!-- 资讯卡片3 -->
          <article class="bg-white rounded-xl overflow-hidden shadow-sm card-hover">
            <img src="https://picsum.photos/id/3/600/400" alt="多国监管政策" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-3">
                <span>昨天</span>
                <span class="mx-2">•</span>
                <span>监管动态</span>
              </div>
              <h3 class="text-xl font-bold mb-3">欧盟通过加密资产市场监管法案，将于明年正式实施</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">欧盟议会正式通过了加密资产市场监管法案(MiCA)，该法案将为加密资产在欧盟范围内的运营提供统一的监管框架...</p>
              <a href="#" class="text-primary font-medium hover:underline flex items-center">
                阅读全文 <i class="fa fa-arrow-right ml-1"></i>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup >
import Header from "@/components/agency/Header.vue";
import { onMounted, onBeforeUnmount } from "vue";

// 定义变量类型
const cdbc = 'cbdc';
let chart = null;
import Highcharts from 'highcharts';

// 在 onMounted 中初始化图表
onMounted(() => {
  // 生成模拟数据
  const generateData = () => {
    const hours = 24;
    const data = [];
    let price = 41200;

    for (let i = 0; i < hours; i++) {
      // 随机波动，模拟价格变化
      const change = (Math.random() - 0.45) * 200;
      price += change;
      data.push(parseFloat(price.toFixed(2)));
    }

    return data;
  };

  const bitcoinData = generateData();
  const labels = Array.from({length: 24}, (_, i) => `${i}:00`);

  // 销毁之前的图表实例（如果存在）
  if (chart) {
    chart.destroy();
  }

  // 创建 Highcharts 图表
  chart = Highcharts.chart('bitcoinChart', {
    chart: {
      type: 'line',
      backgroundColor: 'transparent'
    },
    title: {
      text: null
    },
    xAxis: {
      categories: labels,
      labels: {
        style: {
          color: '#6B7280'
        }
      }
    },
    yAxis: {
      title: {
        text: '价格 (USD)',
        style: {
          color: '#6B7280'
        }
      },
      labels: {
        style: {
          color: '#6B7280'
        },
        formatter: function() {
          return '$' + this.value.toLocaleString();
        }
      }
    },
    series: [{
      name: '比特币价格 (USD)',
      data: bitcoinData,
      color: '#165DFF'
    }],
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(29, 33, 41, 0.9)',
      style: {
        color: '#FFFFFF'
      },
      formatter: function() {
        return `<b>${this.series.name}</b><br/>${this.x}: $${this.y}`;
      }
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  });
});

// 在组件销毁前清理图表
onBeforeUnmount(() => {
  if (chart) {
    chart.destroy();
    chart = null;
  }
});

</script>


<style scoped>

</style>