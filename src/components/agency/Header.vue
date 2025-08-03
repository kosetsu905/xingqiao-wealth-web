
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
                @click.prevent="handleNavClick(item)"
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

          <div
              @click.prevent="goToUserInfo()"
              class="relative cursor-pointer">
            <button id="profile-menu-button"
                    class="flex items-center space-x-2 focus:outline-none">
              <img src="https://picsum.photos/id/64/40/40" alt="用户头像"
                   class="w-8 h-8 rounded-full object-cover border-2 border-primary/20">
              <span class="md:inline font-medium">{{userName}}</span>
            </button>
          </div>
        </div>
        <div class="md:hidden">
          <button id="menu-toggle"
                  @click="toggleMenu"
                  class="text-gray-600 hover:text-primary focus:outline-none">
            <i class="fa fa-bars text-xl"></i>
          </button>
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
              @click.prevent="handleNavClick(item)"
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
import {onBeforeUnmount, onMounted, ref, watch, computed} from "vue";

const isMenuOpen = ref(false)
const dropdownRef = ref(null)
const localCurrentTabActive = ref(0)
const userName = ref('张三')

const props = defineProps({
  from: {
    type: String,
    default: ''
  },
  currentTabActive: {
    type: Number,
    default: null
  }
})

// 计算当前激活的tab，优先使用传入的props，否则使用本地状态
const currentTabActive = computed(() => {
  return props.currentTabActive !== null ? props.currentTabActive : localCurrentTabActive.value
})

// 根据from属性计算应该显示的菜单项
const navItems = computed(() => {
  if (props.from === 'cbdc') {
    return [
      { label: '首页',activeIndex: 0,  path: '/agency/index' },
      { label: '个人中心', activeIndex: 1 ,  path: '/agency/userInfo'},
      { label: '账户管理', activeIndex: 2,  path: '/agency/accountInfo' },
      { label: '市场',activeIndex: 3,  path: '/agency/cbdc' },
      { label: '交易', activeIndex: 4, path: '/agency/tradingCenter' },
      { label: '资讯', activeIndex: 5, path: '/agency/news'},
      { label: '学院', activeIndex: 6, path: '/agency/academy' },
      { label: '退出', activeIndex: 7, path: '/logout' }
    ]
  }else if (props.from === 'etf') {
    return [
      { label: '首页',activeIndex: 0,  path: '/agency/index' },
      { label: '个人中心', activeIndex: 1 ,  path: '/agency/userInfo'},
      { label: '账户管理', activeIndex: 2,  path: '/agency/accountInfo' },
      { label: '行情', activeIndex: 3, path: '/agency/stableCoinMainPage'},
      { label: '投资组合', activeIndex: 4, path: '/agency/stableCoinPortfolio'},
      { label: '交易', activeIndex: 5, path: '/agency/stableCoinPurchase' },
      { label: '退出', activeIndex: 6, path: '/logout' }
    ]
  } else {
    return [
      // 默认菜单项
      { label: '首页',activeIndex: 0,  path: '/agency/index' },
      { label: '个人中心', activeIndex: 1 ,  path: '/agency/userInfo'},
      { label: '账户管理', activeIndex: 2,  path: '/agency/accountInfo' },
      { label: '退出', activeIndex: 3, path: '/logout' }
    ]
  }
})

// 处理菜单点击事件
function handleNavClick(item) {
  // 更新本地状态
  localCurrentTabActive.value = item.activeIndex
  //判断是包含/logout
  if(item.path.includes('/logout')){
    localStorage.removeItem('token')
    router.push('/login')
    return;
  }

  if (item.path) {
    router.push(item.path)
  }
}

// 监听路由变化，更新当前激活的菜单项（仅在没有传入currentTabActive时）
watch(
    () => route.path,
    (newPath) => {
      // 只有在没有通过props指定currentTabActive时才自动更新
      if (props.currentTabActive === null) {
        const activeItem = navItems.value.find(item =>
            item.path && newPath.startsWith(item.path)
        )
        if (activeItem) {
          localCurrentTabActive.value = activeItem.activeIndex
        }
      }
    },
    { immediate: true }
)




function goToIndex () {
  console.log('首页')
  router.push({
    path: '/agency/index'
  })
}

function toggleMessage () {
  console.log('消息页')
  router.push({
    path: '/agency/message'
  })
}

function goToUserInfo () {
  console.log('个人中心')
  router.push({
    path: '/agency/userInfo'
  })
}


// 切换菜单显示状态
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
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

  // 如果传入了currentTabActive，则初始化时设置localCurrentTabActive
  if (props.currentTabActive !== null) {
    localCurrentTabActive.value = props.currentTabActive
  }
})

// 在脚本部分添加导航配置
// const allNavItems = ref([
//   { label: '首页', activeIndex: 0, handler: goToIndex },
//   { label: '个人中心', activeIndex: 1, handler: goToUserInfo },
//   { label: '账户', activeIndex: 2, handler: goToAccountManagement },
//   { label: '行情', activeIndex: 3, handler: goToStableCoinMainPage },
//   { label: '投资组合', activeIndex: 4, handler: goToStableCoinPortfolio },
//   { label: '交易', activeIndex: 5, handler: goToStableCoinPurchase },
//   { label: '退出', activeIndex: 6, handler: goToLogin }
// ]);
//



// 在脚本部分添加导航配置
// const cbdcNavItems = ref([
//   { label: '首页', activeIndex: 0, handler: goToIndex },
//   { label: '市场', activeIndex: 1, handler: goToUserInfo },
//   { label: '交易', activeIndex: 2, handler: goToAccountManagement },
//   { label: '资讯', activeIndex: 3, handler: goToStableCoinMainPage },
//   { label: '学院', activeIndex: 4, handler: goToStableCoinPortfolio },
//   { label: '退出', activeIndex: 6, handler: goToLogin }
// ]);


// 修复后的计算属性：根据当前路由决定显示哪些导航项
// const navItems = computed(() => {
//   const stableCoinPaths = ['/agency/stableCoinMainPage', '/agency/stableCoinPortfolio', '/agency/stableCoinPurchase'];
//   const isStableCoinPage = stableCoinPaths.some(path => route.path.startsWith(path));
//
//   if (isStableCoinPage) {
//     // 在稳定币页面显示所有导航项
//     return allNavItems.value; // 使用 .value 访问实际数组
//   } else {
//     // 非稳定币页面隐藏稳定币相关项（行情、投资组合、交易）
//     return allNavItems.value.filter(item => // 使用 .value 访问实际数组
//         ![3, 4, 5].includes(item.activeIndex)
//     );
//   }
// });

// 改进后的路由监听
// const routeMapping = [
//   { path: '/agency/index', index: 0 },
//   { path: '/agency/userInfo', index: 1 },
//   { path: '/agency/accountInfo', index: 2 },
//   { path: '/agency/stableCoinMainPage', index: 3 },
//   { path: '/agency/stableCoinPortfolio', index: 4 },
//   { path: '/agency/stableCoinPurchase', index: 5 },
//   { path: '/logout', index: 6 },
//   { path: '/agency/stableCoinPurchase', index: 7 },
// ];

// watch(() => route.path, (newPath) => {
//   console.log('路由变化:', newPath)
//   // 通过遍历映射表简化判断逻辑
//   const matchedRoute = routeMapping.find(r => newPath.startsWith(r.path))
//   if (matchedRoute) {
//     currentTabActive.value = matchedRoute.index
//   }
// }, { immediate: true })


//
//
// function goToStableCoinPurchase () {
//   console.log('稳定币交易')
//   router.push({
//     path: '/agency/stableCoinPurchase'
//   })
// }
//
// function goToStableCoinMainPage () {
//   console.log('稳定币行情')
//   router.push({
//     path: '/agency/stableCoinMainPage'
//   })
// }
//
// function goToStableCoinPortfolio () {
//   console.log('稳定币投资组合')
//   router.push({
//     path: '/agency/stableCoinPortfolio'
//   })
// }

//
// function goToAccountManagement () {
//   console.log('账户设置')
//   router.push({
//     path: '/agency/accountInfo'
//   })
// }
//
// function goToUserInfo () {
//   console.log('个人中心')
//   router.push({
//     path: '/agency/userInfo'
//   })
// }
//
// function goToLogin () {
//   console.log('登录页')
//   currentTabActive.value =0;
//   router.push({
//     path: '/login'
//   })
// }
//


</script>


<style scoped>

</style>