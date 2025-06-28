<template>
  <div  class="min-h-screen w-screen overflow-x-hidden">
  <!-- 导航栏 -->
    <Navbar
     @login-clicked="handleLogin"
      @register-clicked="handleRegister"
    />

  <!-- 主内容区 -->
  <main class="w-full">
    <!-- 英雄区域 -->
    <HeroSection
      @login="handleLogin"
      @register="handleRegister"
      title-part2="定制化资产配置"
      user-count="50,000+"
      main-image="/custom-image.jpg"
    />

    <!-- 产品特点 -->
    <FeaturesSection
      title="我们的核心优势"
      subtitle="专业可靠的跨境金融解决方案"
      :features="customFeatures"
    />

    <!-- 数据统计 -->
    <StatsSection />


    <!-- 金融产品 -->
    <ProductsSection :products="products" />


    <!-- 服务流程 -->
    <ProcessSection :steps="steps" />


    <!-- 用户评价 -->
    <TestimonialsSection :testimonials="testimonials" />


    <!-- 关于我们 -->
    <AboutSection
        :features="features"
        :galleryItems="galleryItems"
    />

    <!-- 注册/登录区域 -->
    <CTASection
        @register="handleRegister"
        @login="handleLogin"
    />
  </main>

  <!-- 页脚 -->
    <FooterSection
        :social-links="socialLinks"
        :columns="footerColumns"
        :legal-links="legalLinks"
    />

  <!-- 登录模态框 -->
    <LoginModal
        :show="showLoginModal"
        :title="'用户登录'"
        :buttonText="'登录'"
        @close="showLoginModal = false"
        @login="handleActualLogin"
        @toggle-auth="switchToRegister"
    />

  <!-- 注册模态框 -->
    <RegisterModal
        :show="showRegisterModal"
        :title="'用户注册'"
        :buttonText="'立即注册'"
        @close="showRegisterModal = false"
        @register="handleRegister"
        @toggle-auth="switchToLogin"
    />
</div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import HeroSection from './components/HeroSection.vue'
  import FeaturesSection from './components/FeaturesSection.vue'
  import StatsSection from './components/StatsSection.vue'
  import ProductsSection from './components/ProductsSection.vue'
  import ProcessSection from './components/ProcessSection.vue'
  import TestimonialsSection from './components/TestimonialsSection.vue'
  import AboutSection from './components/AboutSection.vue'
  import CTASection from './components/CTASection.vue'
  import FooterSection from './components/FooterSection.vue'
  import LoginModal from './components/LoginModal.vue'
  import RegisterModal from './components/RegisterModal.vue'

  export default {
    components: {
      Navbar,
      HeroSection,
      FeaturesSection,
      StatsSection,
      ProductsSection,
      ProcessSection,
      TestimonialsSection,
      AboutSection,
      CTASection,
      FooterSection,
      LoginModal,
      RegisterModal
    },
  data() {
    return {
      username: '',
      submitted: false,
      showLoginModal: false,
      showRegisterModal: false,
      products: [
        {
          title: '国际基金组合',
          description: '精选全球顶尖基金，专业团队管理，分散投资风险，获取稳定回报。',
          image: 'https://picsum.photos/id/237/600/400',
          tag: '热门',
          features: [
            { icon: 'fa fa-calendar-o mr-1', text: '灵活期限' },
            { icon: 'fa fa-line-chart mr-1', text: '预期年化收益 6-8%' }
          ]
        },
        {
          title: '海外保险产品',
          description: '提供全球医疗保险、人寿保险和财富保障计划，为您和家人的未来保驾护航。',
          image: 'https://picsum.photos/id/180/600/400',
          tag: '',
          features: [
            { icon: 'fa fa-calendar-o mr-1', text: '多重保障' },
            { icon: 'fa fa-line-chart mr-1', text: '全球理赔' }
          ]
        },
        {
          title: '智能外汇交易',
          description: '先进的AI算法辅助交易，提供实时汇率分析，低手续费，高效执行您的外汇交易策略。',
          image: 'https://picsum.photos/id/28/600/400',
          tag: '新品',
          features: [
            { icon: 'fa fa-calendar-o mr-1', text: '实时汇率' },
            { icon: 'fa fa-line-chart mr-1', text: 'AI智能分析' }
          ]
        },
        {
          title: '海外房产投资',
          description: '精选全球优质房产项目，提供一站式投资服务，包括法律咨询、税务规划和物业管理。',
          image: 'https://picsum.photos/id/49/600/400',
          tag: '',
          features: [
            { icon: 'fa fa-calendar-o mr-1', text: '产权清晰' },
            { icon: 'fa fa-line-chart mr-1', text: '热门城市' }
          ]
        },
        {
          title: '跨境支付解决方案',
          description: '为企业和个人提供快速、安全、低成本的跨境支付服务，支持多种货币和支付方式。',
          image: 'https://picsum.photos/id/119/600/400',
          tag: '',
          features: [
            { icon: 'fa fa-calendar-o mr-1', text: '多种支付方式' },
            { icon: 'fa fa-line-chart mr-1', text: '快速到账' }
          ]
        },
        {
          title: '离岸账户服务',
          description: '提供香港、新加坡、美国等地区的离岸账户开设服务，满足您的国际业务需求。',
          image: 'https://picsum.photos/id/160/600/400',
          tag: '',
          features: [
            { icon: 'fa fa-calendar-o mr-1', text: '多国银行选择' },
            { icon: 'fa fa-line-chart mr-1', text: '快速开户' }
          ]
        }
      ],
      steps: [
        {
          number: 1,
          title: '注册账户',
          description: '填写基本信息，完成实名认证，轻松创建您的环球金融账户。'
        },
        {
          number: 2,
          title: '风险评估',
          description: '完成风险承受能力评估，我们将根据您的情况提供个性化的投资建议。'
        },
        {
          number: 3,
          title: '资金存入',
          description: '通过多种安全渠道存入资金，支持多种货币，实时到账。'
        },
        {
          number: 4,
          title: '开始投资',
          description: '浏览并选择适合您的金融产品，开始您的全球资产配置之旅。'
        }
      ],
      testimonials: [
        {
          name: '张先生',
          title: '企业创始人',
          avatar: 'https://picsum.photos/id/1005/200/200',
          rating: 5,
          comment: '环球金融的跨境支付解决方案帮助我们公司节省了大量的时间和成本，国际转账变得如此简单。他们的客户服务也非常专业，总是能及时解答我的问题。'
        },
        {
          name: '李女士',
          title: '投资顾问',
          avatar: 'https://picsum.photos/id/1011/200/200',
          rating: 4.5,
          comment: '作为一名投资顾问，我推荐我的客户使用环球金融的服务。他们的国际基金组合非常多样化，风险控制也很到位。平台界面简洁易用，数据分析工具对我的工作帮助很大。'
        },
        {
          name: '王先生',
          title: '高净值投资者',
          avatar: 'https://picsum.photos/id/1025/200/200',
          rating: 5,
          comment: '环球金融的海外房产投资服务让我轻松实现了资产的国际化配置。他们的团队提供了从选房到后期管理的一站式服务，让我省去了很多麻烦。投资回报也超出了我的预期。'
        }
      ],
      features: [
        { text: '持牌金融机构' },
        { text: '多重安全保障' },
        { text: '专业监管合规' },
        { text: '7×24小时客户服务' }
      ],
      galleryItems: [
        {
          image: 'https://picsum.photos/id/180/400/300',
          alt: '公司办公环境',
          title: '全球总部',
          description: '香港中环金融中心'
        },
        {
          image: 'https://picsum.photos/id/160/400/300',
          alt: '公司团队',
          title: '专业团队',
          description: '金融专家与技术精英'
        },
        {
          image: 'https://picsum.photos/id/28/400/300',
          alt: '公司会议',
          title: '战略会议',
          description: '持续优化服务体验'
        },
        {
          image: 'https://picsum.photos/id/237/400/300',
          alt: '客户活动',
          title: '客户活动',
          description: '与客户共同成长'
        }
      ],
      socialLinks: [
        { url: "#", icon: "fa fa-facebook" },
        { url: "#", icon: "fa fa-twitter" },
        { url: "#", icon: "fa fa-linkedin" },
        { url: "#", icon: "fa fa-instagram" }
      ],
      footerColumns: [
        {
          title: "产品服务",
          links: [
            { text: "国际基金组合", url: "#" },
            { text: "海外保险计划", url: "#" },
            { text: "智能外汇交易", url: "#" },
            { text: "海外房产投资", url: "#" },
            { text: "跨境支付解决方案", url: "#" },
            { text: "离岸账户服务", url: "#" }
          ]
        },
        {
          title: "关于我们",
          links: [
            { text: "公司简介", url: "#" },
            { text: "管理团队", url: "#" },
            { text: "新闻中心", url: "#" },
            { text: "加入我们", url: "#" },
            { text: "联系我们", url: "#" }
          ]
        },
        {
          title: "客户支持",
          links: [
            { text: "帮助中心", url: "#" },
            { text: "常见问题", url: "#" },
            { text: "投资者教育", url: "#" },
            { text: "隐私政策", url: "#" },
            { text: "服务条款", url: "#" }
          ]
        }
      ],
      legalLinks: [
        { text: "隐私政策", url: "#" },
        { text: "服务条款", url: "#" },
        { text: "法律声明", url: "#" }
      ],
      customFeatures:[
        {
          icon: 'fa-shield',
          title: '安全可靠',
          description: '采用银行级安全技术，多重加密保障您的资金和信息安全，让您的跨境交易无忧。'
        },
        {
          icon: 'fa-globe',
          title: '全球覆盖',
          description: '覆盖全球主要金融市场，支持多币种交易，为您提供全球化的投资机会和资金管理。'
        },
        {
          icon: 'fa-line-chart',
          title: '智能风控',
          description: 'AI驱动的智能风控系统，实时监控市场变化，为您提供风险预警和资产配置建议。'
        },
        {
          icon: 'fa-clock-o',
          title: '实时交易',
          description: '7×24小时全球市场监控，实时交易执行，助您把握最佳投资时机，实现资产快速配置。'
        },
        {
          icon: 'fa-users',
          title: '专业团队',
          description: '由资深金融专家和技术精英组成的专业团队，为您提供一对一的跨境金融咨询服务。'
        },
        {
          icon: 'fa-calculator',
          title: '低费率',
          description: '透明的费用结构，行业领先的低费率，降低您的跨境金融服务成本，提高投资回报。'
        }
      ]
    };
  },
  created() {
    console.log("页面已加载，执行初始化操作")

  },
  methods: {
    handleLogin() {
      // 处理登录逻辑
      console.log('登录成功！');
      this.showLoginModal = true
    },
    handleActualLogin() {
      // 添加实际登录逻辑
      console.log('执行登录操作')
      this.showLoginModal = false
    },
    handleRegister() {
      // 处理注册逻辑
      console.log('注册成功！');
      this.showRegisterModal = true
    },
    switchToLogin() {
      this.showRegisterModal = false
      this.showLoginModal = true
    },
    switchToRegister() {
      this.showRegisterModal = true
      this.showLoginModal = false
    },
  }
};

</script>

<style scoped>
/* 这里的样式是自定义的，如果需要的话 */
</style>