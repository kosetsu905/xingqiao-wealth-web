
<template>
  <!-- Header -->
  <div id="header" class="bg-white shadow-sm border-b border-gray-200">
    <div class="ml-0 md:ml-16 p-4 md:p-6 bg-white border-b border-gray-200">
      <div class="flex justify-between items-center h-16">
        <div
            @click.prevent="goToIndex()"
            class="flex items-center" >
          <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <i class="fa-solid fa-chart-line text-white text-sm"></i>
          </div>
          <h1 class="ml-3 text-xl font-bold text-gray-800">OTC交易平台</h1>
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
                :style="{ cursor: 'pointer' }">
              {{ item.label }}
            </a>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div @click.prevent="toggleMessage" class="relative">
            <button class="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-full transition-colors relative">
              <i class="fa-solid fa-bell"></i>
              <span class="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs badge-pulse">3</span>
            </button>
          </div>
          <div
              @click.prevent="goToUserInfo()"
              class="relative cursor-pointer">
            <button id="profile-menu-button"
                    class="flex items-center space-x-2 focus:outline-none">
              <img v-if="userAvatar" :src="userAvatar" alt="用户头像" class="w-8 h-8 rounded-full object-cover border-2 border-primary/20" />
              <span v-if="userName" class="username">{{ userName }}</span>
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
              @click.prevent="handleNavClick(item)"
              :class="[
              'py-2 rounded-md text-base font-medium',
              currentTabActive === item.activeIndex
                ? 'bg-primary hover:bg-primary/90 text-white block px-4 text-center'
                : 'text-gray-600 hover:text-primary block px-3'
            ]"
              :style="{ cursor: 'default'  }"
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
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue";
const localCurrentTabActive = ref(0)
const isMenuOpen = ref(false)
const dropdownRef = ref(null)
const userName = ref('')
// 定义响应式数据
const userAvatar = ref('')

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

// 在脚本部分添加导航配置
const navItems = ref([
  { label: '首页', activeIndex: 0, path: '/client/index' },
  { label: '个人中心', activeIndex: 1, path: '/client/userInfo'},
  { label: 'KYC认证', activeIndex: 2, path: '/client/ekycClientIndex'},
  { label: '交易中心', activeIndex: 3, path: "/client/transaction" },
  { label: '持仓', activeIndex: 4, path: "/client/holdings" },
  { label: '资金管理', activeIndex: 5, path: "/client/transaction3" },
  { label: '行情Demo', activeIndex: 6, path: "/client/hangingDemo" },
  { label: '退出', activeIndex: 7, path: '/logout' }
]);


// 处理菜单点击事件
function handleNavClick(item) {
  // 更新本地状态
  localCurrentTabActive.value = item.activeIndex
  //判断是包含/logout
  if(item.path.includes('/logout')){
    localStorage.removeItem('access_token')
    router.push('/login')
    return;
  }

  if (item.path) {
    router.push(item.path)
  }
}


// 计算当前激活的tab，优先使用传入的props，否则使用本地状态
const currentTabActive = computed(() => {
  return props.currentTabActive !== null ? props.currentTabActive : localCurrentTabActive.value
})


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
  currentTabActive.value =0;
  router.push({
    path: '/client/index'
  })
}

function goToUserInfo () {
  console.log('个人中心')
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
  const avatar = localStorage.getItem('avatar')
  const name = localStorage.getItem('userName')

  if (avatar) {
    userAvatar.value = avatar
  }

  if (name) {
    userName.value = name
  }
})
</script>


<style scoped>

</style>