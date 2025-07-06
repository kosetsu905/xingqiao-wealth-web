
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
          <h1 class="ml-3 text-xl font-bold text-gray-800">财富管理 - 投资组合</h1>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <button class="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-full transition-colors relative">
              <i class="fa fa-bell-o text-xl"></i>
              <span class="absolute top-0 right-0 h-4 w-4 bg-danger rounded-full flex items-center justify-center text-white text-xs badge-pulse">3</span>
            </button>
          </div>
          <div class="relative">
            <button id="profile-menu-button"
                    @click="toggleMenu"
                    class="flex items-center space-x-2 focus:outline-none">
              <img src="https://picsum.photos/id/64/40/40" alt="用户头像"
                   class="w-8 h-8 rounded-full object-cover border-2 border-primary/20">
              <span class="md:inline font-medium">张先生</span>
              <i class="fa fa-angle-down text-gray-500"></i>
            </button>

            <!-- 个人菜单下拉框 -->
            <div id="profile-menu"
                 ref="dropdownRef"
                 class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                 v-show="isMenuOpen">
              <div
                  @click.prevent="goToPersonalInfo()"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <i class="fa-solid fa-user mr-2"></i>
                个人信息
              </div>
              <div
                  @click.prevent="goToAccountManagement()"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <i class="fa-solid fa-gear mr-2"></i>
                账户设置
              </div>
              <div class="border-t border-gray-100 my-1"></div>
              <div
                  @click.prevent="logout()"
                  class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                <i class="fa-solid fa-right-from-bracket mr-2"></i>
                退出登录
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// 响应式状态控制
import {onBeforeUnmount, onMounted, ref} from "vue";

function goToPersonalInfo () {
  console.log('个人信息页')
  router.push({
    path: '/client/userInfo'
  })
}

function goToIndex () {
  console.log('首页')
  router.push({
    path: '/client/index'
  })
}

function goToAccountManagement () {
  console.log('账户设置')
  router.push({
    path: '/client/account'
  })
}

function logout () {
  console.log('logout')
  router.push({
    path: '/client/logout'
  })
}

const isMenuOpen = ref(false)
const dropdownRef = ref(null)

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