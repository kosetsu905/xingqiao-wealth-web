
<template>
  <!-- Header -->
  <div id="header" class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div
            @click.prevent="goToIndex()"
            class="flex items-center" >
          <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <i class="fa-solid fa-chart-line text-white text-sm"></i>
          </div>
          <h1 class="ml-3 text-xl font-bold text-gray-800">财富管理</h1>
        </div>
        <div class="hidden md:block">
          <!-- 修改后的导航结构 -->
          <div class="ml-10 flex items-center space-x-4">
            <a
                v-for="item in navItems"
                :key="item.activeIndex"
                @click="item.handler"
                :class="[
        'py-2 rounded-md text-sm font-medium transition-custom',
        currentTabActive === item.activeIndex
          ? 'bg-primary hover:bg-primary/90 text-white px-4'
          : 'text-gray-600 hover:text-primary px-3']"
                :style="{ cursor: item.handler ? 'pointer' : 'default' }">
              {{ item.label }}
            </a>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div @click.prevent="toggleMessage" class="relative">
            <button class="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-full transition-colors relative">
              <i class="fa-solid fa-bell"></i>
              <span class="absolute top-0 right-0 h-4 w-4 bg-danger bg-red-500 rounded-full flex items-center justify-center text-white text-xs badge-pulse">3</span>
            </button>
          </div>
          <div class="relative">
            <button id="profile-menu-button"
                    class="flex items-center space-x-2 focus:outline-none">
              <img src="https://picsum.photos/id/64/40/40" alt="用户头像"
                   class="w-8 h-8 rounded-full object-cover border-2 border-primary/20">
              <span class="md:inline font-medium">张先生</span>
            </button>

          </div>
          <div class="md:hidden">
            <button id="menu-toggle"
                    @click="toggleMenu"
                    class="text-gray-600 hover:text-primary focus:outline-none">
              <i class="fa fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- 移动端菜单 -->
      <div id="mobile-menu"
           :class="{ 'hidden': !isMenuOpen }"
           class="md:hidden bg-white shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
              v-for="item in navItems"
              :key="item.activeIndex"
              @click.stop.prevent="item.handler"
              :class="[
              'py-2 rounded-md text-base font-medium',
              currentTabActive === item.activeIndex
                ? 'bg-primary hover:bg-primary/90 text-white block px-4 text-center'
                : 'text-gray-600 hover:text-primary block px-3'
            ]"
              :style="{ cursor: item.handler ? 'pointer' : 'default' }"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { useRouter,useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
// 响应式状态控制
import {onBeforeUnmount, onMounted, ref, watch} from "vue";

const isMenuOpen = ref(false)
const dropdownRef = ref(null)
const currentTabActive = ref(0)


// 在脚本部分添加导航配置
const navItems = ref([
  { label: '首页', activeIndex: 0, handler: goToIndex },
  { label: '个人信息', activeIndex: 1, handler: goToPersonalInfo },
  { label: '账户设置', activeIndex: 2, handler: goToAccountManagement },
  { label: '投资产品', activeIndex: 3, handler: goToProductManagement },
  { label: '风险评估', activeIndex: 4, handler: toggleRiskAssessment },
  { label: '投资分析', activeIndex: 5, handler: goToAnalysis },
  { label: '交易记录', activeIndex: 6, handler: goToTransaction },
  { label: 'ekyc认证', activeIndex: 7, handler: goToEkyc },
  { label: '退出', activeIndex: 8, handler: goToLogin }
]);


// 改进后的路由监听
const routeMapping = [
  { path: '/client/index', index: 0 },
  { path: '/client/userInfo', index: 1 },
  { path: '/client/account', index: 2 },
  { path: '/client/product', index: 3 },
  { path: '/client/risk', index: 4 },
  { path: '/client/analysis', index: 5 }, // 新增投资分析路由
  { path: '/client/transaction', index: 6}, // 新增交易记录路由
  { path: '/logout', index: 7 }
];

watch(() => route.path, (newPath) => {
  console.log('路由变化:', newPath)
  // 通过遍历映射表简化判断逻辑
  const matchedRoute = routeMapping.find(r => newPath.startsWith(r.path))
  if (matchedRoute) {
    currentTabActive.value = matchedRoute.index
  }
}, { immediate: true })

function goToEkyc () {
  console.log('ekyc认证')
  currentTabActive.value =2;
  router.push({
    path: '/client/ekycClientIndex'
  })
}

function goToIndex () {
  console.log('首页')
  currentTabActive.value =0;
  router.push({
    path: '/client/index'
  })
}

function goToLogin () {
  console.log('登录页')
  currentTabActive.value =0;
  localStorage.removeItem('client-token')
  router.push({
    path: '/login'
  })
}


function goToPersonalInfo () {
  console.log('个人信息')
  currentTabActive.value =1;
  router.push({
    path: '/client/userInfo'
  })
}


function toggleMessage () {
  console.log('消息页')
  router.push({
    path: '/client/message'
  })
}


function goToAnalysis () {
  currentTabActive.value =5;
  router.push({
    path: '/client/analysis'
  })
}


function goToTransaction () {
  currentTabActive.value =6;
  router.push({
    path: '/client/transaction'
  })
}

function goToAccountManagement () {
  console.log('账户设置')
  currentTabActive.value =2;
  router.push({
    path: '/client/account'
  })
}

function goToProductManagement () {
  console.log('投资产品')
  currentTabActive.value =3;
  router.push({
    path: '/client/product'
  })
}

function toggleRiskAssessment () {
  console.log('风险评估管理')
  currentTabActive.value =4;
  router.push({
    path: '/client/risk'
  })
}

function logout () {
  console.log('logout')
  currentTabActive.value =7;
  router.push({
    path: '/client/login'
  })
}


// 切换菜单显示状态
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  console.log(isMenuOpen.value)
}

// 点击外部关闭菜单
const closeMenuOnOutsideClick = (event) => {
  const button = document.getElementById('profile-menu-button')
  if (dropdownRef.value &&
      !dropdownRef.value.contains(event.target) &&
      !button.contains(event.target)) {  // 增加按钮判断
    isMenuOpen.value = false
  }
}

onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenuOnOutsideClick)
})

onMounted(() => {
  document.addEventListener('click', closeMenuOnOutsideClick)
})
</script>


<style scoped>

</style>