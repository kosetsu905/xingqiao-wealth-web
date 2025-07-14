
<template>
  <!-- Header -->
  <Header/>
  <!-- 主要内容 -->
  <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
    <!-- 页面标题 -->
    <div class="mb-6">
      <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark">个人信息</h1>
    </div>

    <!-- EKYC认证状态 -->
    <div class="bg-white rounded-xl shadow-md p-8 mb-12">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 class="text-xl font-bold mb-2">EKYC身份认证</h2>
          <p class="text-gray-600">完成身份认证，为客户提供更专业的服务</p>
        </div>
        <div class="mt-4 md:mt-0" v-if="authStatusInfo">
          <span :class="['inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
          authStatusInfo.bgClass, authStatusInfo.textClass]">
            <i :class="authStatusInfo .icon + ' mr-2'"></i>
            {{ authStatusInfo.text }}
          </span>
        </div>
      </div>

      <!-- 认证步骤进度条 -->
      <div class="grid grid-cols-4 gap-4 mb-8">
        <div class="progress-step" @click="goToEkycView('personal')">
          <div class="progress-circle bg-success text-white">1</div>
          <span class="text-sm font-medium text-success">个人信息</span>
        </div>
        <div class="progress-line bg-success"></div>
        <div class="progress-step" @click="goToEkycView('identity')">
          <div class="progress-circle bg-success text-white">2</div>
          <span class="text-sm font-medium text-success">身份验证</span>
        </div>
        <div class="progress-line bg-success"></div>
        <div class="progress-step" @click="goToEkycView('professional')">
          <div class="progress-circle bg-success text-white">3</div>
          <span class="text-sm font-medium text-success">资质验证</span>
        </div>
        <div class="progress-line bg-success"></div>
        <div class="progress-step" @click="goToEkycView('auth')">
          <div class="progress-circle bg-success text-white">4</div>
          <span class="text-sm font-medium text-success">审核步骤</span>
        </div>
      </div>

      <!-- 认证详情 -->
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-light rounded-lg p-6">
          <h3 class="font-bold mb-4 flex items-center">
            <i class="fa fa-id-card-o text-primary mr-2"></i> 身份证件
          </h3>
          <div class="space-y-4">
            <div>
              <img src="https://picsum.photos/seed/idcard/400/250" alt="身份证正面" class="rounded-lg shadow-md w-full h-40 object-cover">
              <p class="text-sm text-gray-600 mt-2">身份证正面</p>
            </div>
            <div>
              <img src="https://picsum.photos/seed/idcardback/400/250" alt="身份证反面" class="rounded-lg shadow-md w-full h-40 object-cover">
              <p class="text-sm text-gray-600 mt-2">身份证反面</p>
            </div>
          </div>
        </div>

        <div class="bg-light rounded-lg p-6">
          <h3 class="font-bold mb-4 flex items-center">
            <i class="fa fa-certificate text-primary mr-2"></i> 资质证书
          </h3>
          <div class="space-y-4">
            <div>
              <img src="https://picsum.photos/seed/cfa/400/300" alt="CFA证书" class="rounded-lg shadow-md w-full h-40 object-cover">
              <p class="text-sm text-gray-600 mt-2">CFA证书</p>
            </div>
            <div>
              <img src="https://picsum.photos/seed/cfp/400/300" alt="CFP证书" class="rounded-lg shadow-md w-full h-40 object-cover">
              <p class="text-sm text-gray-600 mt-2">CFP证书</p>
            </div>
          </div>
        </div>

        <div class="bg-light rounded-lg p-6">
          <h3 class="font-bold mb-4 flex items-center">
            <i class="fa fa-check-circle text-primary mr-2"></i> 认证信息
          </h3>
          <div class="space-y-4">
            <div>
              <p class="text-gray-600 mb-1">认证编号</p>
              <p class="font-medium">EKY20250712001</p>
            </div>
            <div>
              <p class="text-gray-600 mb-1">认证时间</p>
              <p class="font-medium">2025-07-10 14:30:25</p>
            </div>
            <div>
              <p class="text-gray-600 mb-1">有效期至</p>
              <p class="font-medium">2028-07-09</p>
            </div>
            <div>
              <p class="text-gray-600 mb-1">认证机构</p>
              <p class="font-medium">环球财富认证中心</p>
            </div>
            <div class="mt-6">
              <button class="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg transition-custom flex items-center justify-center">
                <i class="fa fa-download mr-2"></i> 下载认证报告
              </button>
            </div>
          </div>
        </div>
      </div>
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

          <div>
            <h3 class="text-xl font-bold mb-6 text-dark">工作经历</h3>
            <div class="space-y-6">
              <div class="p-4 border-l-4 border-primary bg-primary/5 rounded-r">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-medium text-dark">环球财富管理 - 执行董事</h4>
                  <span class="text-sm text-gray-500">2015年至今</span>
                </div>
                <p class="text-gray-600">负责管理高净值客户的投资组合，提供全方位的财富管理服务</p>
              </div>
              <div class="p-4 border-l-4 border-gray-300 bg-gray-50 rounded-r">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-medium text-dark">摩根士丹利 - 副总裁</h4>
                  <span class="text-sm text-gray-500">2010年 - 2015年</span>
                </div>
                <p class="text-gray-600">负责机构客户的关系管理和投资咨询，专注于多元化投资策略</p>
              </div>
              <div class="p-4 border-l-4 border-gray-300 bg-gray-50 rounded-r">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-medium text-dark">美林证券 - 高级分析师</h4>
                  <span class="text-sm text-gray-500">2006年 - 2010年</span>
                </div>
                <p class="text-gray-600">专注于股票研究和投资组合分析，为投资决策提供支持</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 业绩统计 -->
    <div class="bg-white rounded-xl shadow-md p-8 mb-12">
      <h3 class="text-xl font-bold mb-6 text-dark">业绩统计</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="bg-light rounded-lg p-6 text-center">
          <div class="text-3xl font-bold text-primary mb-2">$125M</div>
          <div class="text-gray-600">管理资产总额</div>
        </div>
        <div class="bg-light rounded-lg p-6 text-center">
          <div class="text-3xl font-bold text-primary mb-2">48</div>
          <div class="text-gray-600">活跃客户数量</div>
        </div>
        <div class="bg-light rounded-lg p-6 text-center">
          <div class="text-3xl font-bold text-primary mb-2">12.3%</div>
          <div class="text-gray-600">年均回报率</div>
        </div>
        <div class="bg-light rounded-lg p-6 text-center">
          <div class="text-3xl font-bold text-primary mb-2">95%</div>
          <div class="text-gray-600">客户满意度</div>
        </div>
      </div>
    </div>

    <!-- 最近活动 -->
    <div class="bg-white rounded-xl shadow-md p-8">
      <h3 class="text-xl font-bold mb-6 text-dark">最近活动</h3>
      <div class="space-y-6">
        <div class="flex">
          <div class="flex-shrink-0 mr-4">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <i class="fa fa-user-plus text-primary"></i>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-1">
              <h4 class="font-medium text-dark">新增客户</h4>
              <span class="text-sm text-gray-500">2小时前</span>
            </div>
            <p class="text-gray-600">成功签约张先生，管理资产$3.5M</p>
          </div>
        </div>
        <div class="flex">
          <div class="flex-shrink-0 mr-4">
            <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <i class="fa fa-file-text-o text-secondary"></i>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-1">
              <h4 class="font-medium text-dark">季度报告更新</h4>
              <span class="text-sm text-gray-500">昨天</span>
            </div>
            <p class="text-gray-600">已为28位客户更新季度投资报告</p>
          </div>
        </div>
        <div class="flex">
          <div class="flex-shrink-0 mr-4">
            <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <i class="fa fa-comments-o text-accent"></i>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-1">
              <h4 class="font-medium text-dark">客户会议</h4>
              <span class="text-sm text-gray-500">2天前</span>
            </div>
            <p class="text-gray-600">与王女士进行季度投资回顾会议</p>
          </div>
        </div>
        <div class="flex">
          <div class="flex-shrink-0 mr-4">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <i class="fa fa-line-chart text-primary"></i>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-1">
              <h4 class="font-medium text-dark">投资组合调整</h4>
              <span class="text-sm text-gray-500">3天前</span>
            </div>
            <p class="text-gray-600">为15位客户调整投资组合，增加国际市场配置</p>
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
import { computed ,onMounted} from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import { ekycAuthStore } from '@/store/index.ts';
// 引入认证状态 store
const ekycAuth = ekycAuthStore();

const goToEkycView = (step: string) => {
  router.push({
    path: '/agency/ekycView',
    query: { step: step }
  });
};

// 计算认证状态提示信息
const authStatusInfo = computed(() => {
  const status = ekycAuth.ekycAuthenticated;
  let result = {
    text: '未认证',
    bgClass: 'bg-warning/10',
    textClass: 'text-warning',
    icon: 'fa fa-exclamation-circle'
  };

  if (status === 3) {
    result = {
      text: '审核中',
      bgClass: 'bg-primary/10',
      textClass: 'text-primary',
      icon: 'fa fa-hourglass-half'
    };
  } else if (status === 4) {
    result = {
      text: '已完成认证',
      bgClass: 'bg-success/10',
      textClass: 'text-success',
      icon: 'fa fa-check-circle'
    };
  } else if (status === 5) {
    result = {
      text: '认证失败',
      bgClass: 'bg-red-500/10',
      textClass: 'text-red-500',
      icon: 'fa fa-times-circle'
    };
  }
  return result;
});


// 组件挂载后执行认证检查
onMounted(() => {
  ekycAuth.init();
});
</script>


<style scoped>

</style>