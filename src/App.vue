<template>
  <div class="font-inter bg-light text-dark antialiased">
  <!-- 导航栏 -->
  <header id="navbar" class="fixed w-full top-0 z-50 transition-all duration-300">
    <nav class="bg-white/95 backdrop-blur-sm shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a href="#" class="flex-shrink-0 flex items-center">
              <i class="fa fa-globe text-primary text-2xl mr-2"></i>
              <span class="text-xl font-bold text-primary">环球金融</span>
            </a>
            <div class="hidden sm:ml-8 sm:flex space-x-8">
              <a href="#features" class="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors">产品特点</a>
              <a href="#products" class="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors">金融产品</a>
              <a href="#process" class="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors">服务流程</a>
              <a href="#about" class="text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors">关于我们</a>
            </div>
          </div>
          <div class="flex items-center">
            <button id="login-btn" class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors mr-2">
              登录
            </button>
            <button id="register-btn" class="bg-white hover:bg-gray-50 text-primary border border-primary px-4 py-2 rounded-md text-sm font-medium transition-colors">
              注册
            </button>
            <button   ref="mobileMenuButton" @click="toggleMobileMenu" 
            class="ml-4 block sm:hidden text-gray-500 hover:text-primary focus:outline-none">
              <i class="fa fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      <!-- 移动端菜单 -->
      <div id="mobile-menu" ref="mobileMenu" :class="{ 'hidden': !isMobileMenuOpen }" class="sm:hidden bg-white border-t">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="#features" class="block px-3 py-2 text-base font-medium text-dark hover:bg-gray-50 hover:text-primary rounded-md">产品特点</a>
          <a href="#products" class="block px-3 py-2 text-base font-medium text-dark hover:bg-gray-50 hover:text-primary rounded-md">金融产品</a>
          <a href="#process" class="block px-3 py-2 text-base font-medium text-dark hover:bg-gray-50 hover:text-primary rounded-md">服务流程</a>
          <a href="#about" class="block px-3 py-2 text-base font-medium text-dark hover:bg-gray-50 hover:text-primary rounded-md">关于我们</a>
        </div>
      </div>
    </nav>
  </header>

  <!-- 主内容区 -->
  <main>
    <!-- 英雄区域 -->
    <section class="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary/5 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 md:pr-12">
            <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-dark mb-4">
              智能跨境金融<br><span class="text-primary">全球资产配置</span>
            </h1>
            <p class="text-lg text-gray-600 mb-8">
              环球金融提供一站式跨境金融服务，助您安全、高效地管理全球资产，把握国际投资机遇。
            </p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button id="hero-login-btn" class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-base font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                立即登录
              </button>
              <button id="hero-register-btn" class="bg-white hover:bg-gray-50 text-primary border border-primary px-6 py-3 rounded-md text-base font-medium transition-all shadow-md hover:shadow-lg">
                免费注册
              </button>
            </div>
            <div class="mt-8 flex items-center space-x-4">
              <div class="flex -space-x-2">
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://picsum.photos/id/1005/200/200" alt="用户头像" />
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://picsum.photos/id/1012/200/200" alt="用户头像" />
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://picsum.photos/id/1027/200/200" alt="用户头像" />
              </div>
              <p class="text-sm text-gray-600">
                <span class="font-semibold">10,000+</span> 投资者已选择我们的服务
              </p>
            </div>
          </div>
          <div class="mt-12 md:mt-0 md:w-1/2 relative">
            <div class="relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
              <img src="https://picsum.photos/id/180/800/500" alt="跨境金融服务" class="w-full h-auto" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div class="p-6">
                  <h3 class="text-white text-xl font-semibold mb-2">全球资产配置方案</h3>
                  <p class="text-white/80">多元化投资组合，降低风险，提升回报</p>
                </div>
              </div>
            </div>
            <div class="absolute top-1/4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            <div class="absolute bottom-1/4 -left-4 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品特点 -->
    <section id="features" class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">为什么选择我们的跨境金融服务</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">我们提供全方位的跨境金融解决方案，满足您的多元化需求</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 特点卡片 1 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-shield text-primary text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">安全可靠</h3>
            <p class="text-gray-600">采用银行级安全技术，多重加密保障您的资金和信息安全，让您的跨境交易无忧。</p>
          </div>
          
          <!-- 特点卡片 2 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-globe text-primary text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">全球覆盖</h3>
            <p class="text-gray-600">覆盖全球主要金融市场，支持多币种交易，为您提供全球化的投资机会和资金管理。</p>
          </div>
          
          <!-- 特点卡片 3 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-line-chart text-primary text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">智能风控</h3>
            <p class="text-gray-600">AI驱动的智能风控系统，实时监控市场变化，为您提供风险预警和资产配置建议。</p>
          </div>
          
          <!-- 特点卡片 4 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-clock-o text-primary text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">实时交易</h3>
            <p class="text-gray-600">7×24小时全球市场监控，实时交易执行，助您把握最佳投资时机，实现资产快速配置。</p>
          </div>
          
          <!-- 特点卡片 5 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-users text-primary text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">专业团队</h3>
            <p class="text-gray-600">由资深金融专家和技术精英组成的专业团队，为您提供一对一的跨境金融咨询服务。</p>
          </div>
          
          <!-- 特点卡片 6 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <i class="fa fa-calculator text-primary text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">低费率</h3>
            <p class="text-gray-600">透明的费用结构，行业领先的低费率，降低您的跨境金融服务成本，提高投资回报。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据统计 -->
    <section class="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">100+</div>
            <p class="text-white/80">覆盖国家和地区</p>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">50+</div>
            <p class="text-white/80">支持币种</p>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">100万+</div>
            <p class="text-white/80">活跃用户</p>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold mb-2">¥1000亿+</div>
            <p class="text-white/80">年交易量</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 金融产品 -->
    <section id="products" class="py-16 md:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">跨境金融产品</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">登录后即可访问全部金融产品，开始您的全球资产配置之旅</p>
        </div>
        
        <div id="products-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 产品卡片 1 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
            <div class="relative">
              <img src="https://picsum.photos/id/237/600/400" alt="国际基金产品" class="w-full h-48 object-cover" />
              <div class="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">热门</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">国际基金组合</h3>
              <p class="text-gray-600 mb-4">精选全球顶尖基金，专业团队管理，分散投资风险，获取稳定回报。</p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <div class="mr-4"><i class="fa fa-calendar-o mr-1"></i> 灵活期限</div>
                <div><i class="fa fa-line-chart mr-1"></i> 预期年化收益 6-8%</div>
              </div>
              <button class="w-full bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-md text-sm font-medium transition-colors" disabled>
                登录后查看详情
              </button>
            </div>
          </div>
          
          <!-- 产品卡片 2 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
            <div class="relative">
              <img src="https://picsum.photos/id/180/600/400" alt="海外保险产品" class="w-full h-48 object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">海外保险计划</h3>
              <p class="text-gray-600 mb-4">提供全球医疗保险、人寿保险和财富保障计划，为您和家人的未来保驾护航。</p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <div class="mr-4"><i class="fa fa-shield mr-1"></i> 多重保障</div>
                <div><i class="fa fa-globe mr-1"></i> 全球理赔</div>
              </div>
              <button class="w-full bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-md text-sm font-medium transition-colors" disabled>
                登录后查看详情
              </button>
            </div>
          </div>
          
          <!-- 产品卡片 3 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
            <div class="relative">
              <img src="https://picsum.photos/id/28/600/400" alt="外汇交易服务" class="w-full h-48 object-cover" />
              <div class="absolute top-4 right-4 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded">新品</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">智能外汇交易</h3>
              <p class="text-gray-600 mb-4">先进的AI算法辅助交易，提供实时汇率分析，低手续费，高效执行您的外汇交易策略。</p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <div class="mr-4"><i class="fa fa-refresh mr-1"></i> 实时汇率</div>
                <div><i class="fa fa-cogs mr-1"></i> AI智能分析</div>
              </div>
              <button class="w-full bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-md text-sm font-medium transition-colors" disabled>
                登录后查看详情
              </button>
            </div>
          </div>
          
          <!-- 产品卡片 4 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
            <div class="relative">
              <img src="https://picsum.photos/id/49/600/400" alt="海外房产投资" class="w-full h-48 object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">海外房产投资</h3>
              <p class="text-gray-600 mb-4">精选全球优质房产项目，提供一站式投资服务，包括法律咨询、税务规划和物业管理。</p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <div class="mr-4"><i class="fa fa-home mr-1"></i> 产权清晰</div>
                <div><i class="fa fa-map-marker mr-1"></i> 热门城市</div>
              </div>
              <button class="w-full bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-md text-sm font-medium transition-colors" disabled>
                登录后查看详情
              </button>
            </div>
          </div>
          
          <!-- 产品卡片 5 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
            <div class="relative">
              <img src="https://picsum.photos/id/119/600/400" alt="跨境支付服务" class="w-full h-48 object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">跨境支付解决方案</h3>
              <p class="text-gray-600 mb-4">为企业和个人提供快速、安全、低成本的跨境支付服务，支持多种货币和支付方式。</p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <div class="mr-4"><i class="fa fa-credit-card mr-1"></i> 多种支付方式</div>
                <div><i class="fa fa-bolt mr-1"></i> 快速到账</div>
              </div>
              <button class="w-full bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-md text-sm font-medium transition-colors" disabled>
                登录后查看详情
              </button>
            </div>
          </div>
          
          <!-- 产品卡片 6 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
            <div class="relative">
              <img src="https://picsum.photos/id/160/600/400" alt="离岸账户服务" class="w-full h-48 object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">离岸账户服务</h3>
              <p class="text-gray-600 mb-4">提供香港、新加坡、美国等地区的离岸账户开设服务，满足您的国际业务需求。</p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <div class="mr-4"><i class="fa fa-university mr-1"></i> 多国银行选择</div>
                <div><i class="fa fa-check-circle mr-1"></i> 快速开户</div>
              </div>
              <button class="w-full bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-md text-sm font-medium transition-colors" disabled>
                登录后查看详情
              </button>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <button id="view-more-btn" class="bg-white hover:bg-gray-50 text-primary border border-primary px-6 py-3 rounded-md text-base font-medium transition-colors shadow-md hover:shadow-lg">
            查看更多产品
          </button>
        </div>
      </div>
    </section>

    <!-- 服务流程 -->
    <section id="process" class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">简单四步，开启全球投资之旅</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">我们简化了跨境金融服务流程，让您轻松实现全球资产配置</p>
        </div>
        
        <div class="relative">
          <!-- 连接线 -->
          <div class="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- 步骤 1 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 class="text-xl font-semibold mb-3">注册账户</h3>
              <p class="text-gray-600">填写基本信息，完成实名认证，轻松创建您的环球金融账户。</p>
            </div>
            
            <!-- 步骤 2 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 class="text-xl font-semibold mb-3">风险评估</h3>
              <p class="text-gray-600">完成风险承受能力评估，我们将根据您的情况提供个性化的投资建议。</p>
            </div>
            
            <!-- 步骤 3 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 class="text-xl font-semibold mb-3">资金存入</h3>
              <p class="text-gray-600">通过多种安全渠道存入资金，支持多种货币，实时到账。</p>
            </div>
            
            <!-- 步骤 4 -->
            <div class="text-center">
              <div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 class="text-xl font-semibold mb-3">开始投资</h3>
              <p class="text-gray-600">浏览并选择适合您的金融产品，开始您的全球资产配置之旅。</p>
            </div>
          </div>
        </div>
        
        <div class="mt-16 bg-gray-50 rounded-xl p-8">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 class="text-2xl font-bold mb-4">全球资产配置分析</h3>
              <p class="text-gray-600 mb-6">通过我们的智能分析工具，了解全球资产配置的最新趋势和建议，优化您的投资组合。</p>
              <button id="analysis-btn" class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-base font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                免费获取分析报告
              </button>
            </div>
            <div class="md:w-1/2">
              <canvas id="assetAllocationChart" width="400" height="300"></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 用户评价 -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">用户的真实评价</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">听听我们的客户如何评价环球金融的跨境金融服务</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 评价卡片 1 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover">
            <div class="flex items-center mb-4">
              <img src="https://picsum.photos/id/1005/200/200" alt="用户头像" class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 class="font-semibold">张先生</h4>
                <p class="text-sm text-gray-500">企业创始人</p>
              </div>
            </div>
            <div class="text-yellow-400 mb-3">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <p class="text-gray-600">"环球金融的跨境支付解决方案帮助我们公司节省了大量的时间和成本，国际转账变得如此简单。他们的客户服务也非常专业，总是能及时解答我的问题。"</p>
          </div>
          
          <!-- 评价卡片 2 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover">
            <div class="flex items-center mb-4">
              <img src="https://picsum.photos/id/1011/200/200" alt="用户头像" class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 class="font-semibold">李女士</h4>
                <p class="text-sm text-gray-500">投资顾问</p>
              </div>
            </div>
            <div class="text-yellow-400 mb-3">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
            <p class="text-gray-600">"作为一名投资顾问，我推荐我的客户使用环球金融的服务。他们的国际基金组合非常多样化，风险控制也很到位。平台界面简洁易用，数据分析工具对我的工作帮助很大。"</p>
          </div>
          
          <!-- 评价卡片 3 -->
          <div class="bg-white rounded-xl shadow-lg p-6 card-hover">
            <div class="flex items-center mb-4">
              <img src="https://picsum.photos/id/1025/200/200" alt="用户头像" class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 class="font-semibold">王先生</h4>
                <p class="text-sm text-gray-500">高净值投资者</p>
              </div>
            </div>
            <div class="text-yellow-400 mb-3">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <p class="text-gray-600">"环球金融的海外房产投资服务让我轻松实现了资产的国际化配置。他们的团队提供了从选房到后期管理的一站式服务，让我省去了很多麻烦。投资回报也超出了我的预期。"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我们 -->
    <section id="about" class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark mb-4">关于环球金融</h2>
            <p class="text-gray-600 mb-6">
              环球金融成立于2015年，是一家专注于为个人和企业提供跨境金融服务的创新型金融科技公司。我们的使命是打破金融国界，让全球金融服务更加便捷、透明和普惠。
            </p>
            <p class="text-gray-600 mb-6">
              凭借专业的金融团队和先进的技术平台，我们为客户提供包括国际基金投资、海外保险、跨境支付、离岸账户等在内的一站式跨境金融解决方案。
            </p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="flex items-center">
                <i class="fa fa-check-circle text-primary mr-2"></i>
                <span class="text-gray-600">持牌金融机构</span>
              </div>
              <div class="flex items-center">
                <i class="fa fa-check-circle text-primary mr-2"></i>
                <span class="text-gray-600">多重安全保障</span>
              </div>
              <div class="flex items-center">
                <i class="fa fa-check-circle text-primary mr-2"></i>
                <span class="text-gray-600">专业监管合规</span>
              </div>
              <div class="flex items-center">
                <i class="fa fa-check-circle text-primary mr-2"></i>
                <span class="text-gray-600">7×24小时客户服务</span>
              </div>
            </div>
            <a href="#" class="inline-flex items-center text-primary hover:text-primary/80 font-medium">
              了解更多公司信息
              <i class="fa fa-arrow-right ml-2"></i>
            </a>
          </div>
          <div class="md:w-1/2">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md transform transition-all duration-500 hover:scale-105">
                <img src="https://picsum.photos/id/180/400/300" alt="公司办公环境" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <h3 class="font-semibold">全球总部</h3>
                  <p class="text-sm text-gray-600">香港中环金融中心</p>
                </div>
              </div>
              <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md transform transition-all duration-500 hover:scale-105">
                <img src="https://picsum.photos/id/160/400/300" alt="公司团队" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <h3 class="font-semibold">专业团队</h3>
                  <p class="text-sm text-gray-600">金融专家与技术精英</p>
                </div>
              </div>
              <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md transform transition-all duration-500 hover:scale-105">
                <img src="https://picsum.photos/id/28/400/300" alt="公司会议" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <h3 class="font-semibold">战略会议</h3>
                  <p class="text-sm text-gray-600">持续优化服务体验</p>
                </div>
              </div>
              <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md transform transition-all duration-500 hover:scale-105">
                <img src="https://picsum.photos/id/237/400/300" alt="客户活动" class="w-full h-48 object-cover" />
                <div class="p-4">
                  <h3 class="font-semibold">客户活动</h3>
                  <p class="text-sm text-gray-600">与客户共同成长</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 注册/登录区域 -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4">立即注册，开启全球投资之旅</h2>
        <p class="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          注册环球金融账户，享受一站式跨境金融服务，轻松管理您的全球资产
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button id="cta-register-btn" class="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            免费注册
          </button>
          <button id="cta-login-btn" class="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md text-lg font-semibold transition-all">
            已有账户？立即登录
          </button>
        </div>
      </div>
    </section>
  </main>

  <!-- 页脚 -->
  <footer class="bg-dark text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <div class="flex items-center mb-4">
            <i class="fa fa-globe text-primary text-2xl mr-2"></i>
            <span class="text-xl font-bold">环球金融</span>
          </div>
          <p class="text-gray-400 mb-4">
            让全球金融服务更加便捷、透明和普惠
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">产品服务</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">国际基金组合</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">海外保险计划</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">智能外汇交易</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">海外房产投资</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">跨境支付解决方案</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">离岸账户服务</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">关于我们</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">公司简介</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">管理团队</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">新闻中心</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">加入我们</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">客户支持</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">帮助中心</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">常见问题</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">投资者教育</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">隐私政策</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">服务条款</a></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2025 环球金融. 保留所有权利.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">隐私政策</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">服务条款</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">法律声明</a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- 登录模态框 -->
  <div id="login-modal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center hidden">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 scale-95 opacity-0" id="modal-content">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold">用户登录</h3>
          <button id="close-login-modal" class="text-gray-500 hover:text-gray-700">
            <i class="fa fa-times text-xl"></i>
          </button>
        </div>
        <form id="login-form">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
            <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="请输入您的电子邮箱" required>
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">密码</label>
            <input type="password" id="password" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="请输入您的密码" required>
          </div>
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <input type="checkbox" id="remember-me" class="h-4 w-4 text-primary focus:ring-primary/50 border-gray-300 rounded">
              <label for="remember-me" class="ml-2 block text-sm text-gray-700">记住我</label>
            </div>
            <a href="#" class="text-sm text-primary hover:text-primary/80">忘记密码？</a>
          </div>
          <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors">登录</button>
        </form>
        <div class="mt-4 text-center">
          <p class="text-sm text-gray-600">
            还没有账户？ <a href="#" id="register-link" class="text-primary hover:text-primary/80">立即注册</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- 注册模态框 -->
  <div id="register-modal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center hidden">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 scale-95 opacity-0" id="register-modal-content">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold">用户注册</h3>
          <button id="close-register-modal" class="text-gray-500 hover:text-gray-700">
            <i class="fa fa-times text-xl"></i>
          </button>
        </div>
        <form id="register-form">
          <div class="mb-4">
            <label for="register-name" class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
            <input type="text" id="register-name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="请输入您的姓名" required>
          </div>
          <div class="mb-4">
            <label for="register-email" class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
            <input type="email" id="register-email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="请输入您的电子邮箱" required>
          </div>
          <div class="mb-4">
            <label for="register-password" class="block text-sm font-medium text-gray-700 mb-1">设置密码</label>
            <input type="password" id="register-password" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="请设置密码" required>
          </div>
          <div class="mb-6">
            <label for="register-confirm-password" class="block text-sm font-medium text-gray-700 mb-1">确认密码</label>
            <input type="password" id="register-confirm-password" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="请再次输入密码" required>
          </div>
          <div class="flex items-center mb-6">
            <input type="checkbox" id="agreement" class="h-4 w-4 text-primary focus:ring-primary/50 border-gray-300 rounded" required>
            <label for="agreement" class="ml-2 block text-sm text-gray-700">
              我已阅读并同意 <a href="#" class="text-primary hover:text-primary/80">用户协议</a> 和 <a href="#" class="text-primary hover:text-primary/80">隐私政策</a>
            </label>
          </div>
          <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors">注册</button>
        </form>
        <div class="mt-4 text-center">
          <p class="text-sm text-gray-600">
            已有账户？ <a href="#" id="login-link" class="text-primary hover:text-primary/80">立即登录</a>
          </p>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      submitted: false
    };
  },
  setup() {
    console.log("页面已加载，执行初始化操作");
    fetchData(); 
  },
  methods: {
    submitForm() {
      if (this.username) {
        this.submitted = true;
      } else {
        alert('请输入用户名');
      }
    }
  }
};

function fetchData() {
  // 导航栏滚动效果
  const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('bg-white', 'shadow');
        navbar.classList.add('bg-transparent');
      }
    });
    // 移动端菜单
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    // 模态框
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const modalContent = document.getElementById('modal-content');
    const registerModalContent = document.getElementById('register-modal-content');
    
    // 打开登录模态框
    document.getElementById('login-btn').addEventListener('click', openLoginModal);
    document.getElementById('hero-login-btn').addEventListener('click', openLoginModal);
    document.getElementById('cta-login-btn').addEventListener('click', openLoginModal);
    
    // 打开注册模态框
    document.getElementById('register-btn').addEventListener('click', openRegisterModal);
    document.getElementById('hero-register-btn').addEventListener('click', openRegisterModal);
    document.getElementById('cta-register-btn').addEventListener('click', openRegisterModal);
    document.getElementById('register-link').addEventListener('click', openRegisterModal);
    
    // 关闭模态框
    document.getElementById('close-login-modal').addEventListener('click', closeLoginModal);
    document.getElementById('close-register-modal').addEventListener('click', closeRegisterModal);
    document.getElementById('login-link').addEventListener('click', closeRegisterModal);
    
    // 点击模态框外部关闭
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        closeLoginModal();
      }
    });
    
    registerModal.addEventListener('click', (e) => {
      if (e.target === registerModal) {
        closeRegisterModal();
      }
    });

     // 表单提交
     document.getElementById('login-form').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('登录功能将在您完成注册后启用');
    });
    
    document.getElementById('register-form').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('注册成功！请登录以访问全部金融产品');
      closeRegisterModal();
    });
    
    // 资产配置图表
    const ctx = document.getElementById('assetAllocationChart').getContext('2d');
    const assetAllocationChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['股票', '债券', '房地产', '现金', '其他'],
        datasets: [{
          data: [35, 25, 20, 15, 5],
          backgroundColor: [
            '#165DFF',
            '#36D399',
            '#FF9F43',
            '#FF5252',
            '#9C27B0'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.raw + '%';
              }
            }
          }
        },
        cutout: '65%'
      }
    });
    
    // 查看更多产品按钮
    document.getElementById('view-more-btn').addEventListener('click', () => {
      alert('登录后可查看更多金融产品');
      openLoginModal();
    });
    
    // 免费获取分析报告按钮
    document.getElementById('analysis-btn').addEventListener('click', () => {
      alert('登录后可获取详细的资产配置分析报告');
      openLoginModal();
    });
    
};


// 模态框动画
function openLoginModal() {
      loginModal.classList.remove('hidden');
      setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
      }, 10);
    }
    
    function closeLoginModal() {
      modalContent.classList.remove('scale-100', 'opacity-100');
      modalContent.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        loginModal.classList.add('hidden');
      }, 300);
    }
    
    function openRegisterModal() {
      registerModal.classList.remove('hidden');
      setTimeout(() => {
        registerModalContent.classList.remove('scale-95', 'opacity-0');
        registerModalContent.classList.add('scale-100', 'opacity-100');
      }, 10);
    }
    
    function closeRegisterModal() {
      registerModalContent.classList.remove('scale-100', 'opacity-100');
      registerModalContent.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        registerModal.classList.add('hidden');
      }, 300);
    }
    
</script>

<style scoped>
/* 这里的样式是自定义的，如果需要的话 */
</style>