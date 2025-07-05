<template>
  <!--  Login Form (Hidden by default) -->
  <div id="login-form">
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="login-label" for="client-email">
          {{ loginObject.loginTypeName }}<span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="cli-icon">
            <!-- 邮箱登录时和账号登录时显示图标 -->
            <i
                v-if="loginObject.loginType === '00'|| loginObject.loginType === '01'"
                class="text-gray-400 fa-regular fa-envelope"
            ></i>

            <!-- 区号选择只在手机号登录时显示 -->
            <select
                v-if="loginObject.loginType === '02'"
                v-model="formData.countryCode"
                class="country-code-select"
            >
              <option value="+86">+86</option>
              <option value="+852">+852</option>
            </select>
          </div>

          <input id="client-account"
                 :type="loginObject.type"
                 v-model="formData.account"
                 class="account-input"
                 :class="loginObject.loginType === '02' ? 'pl-20' : 'pl-10'"
                 :placeholder="loginObject.placeholder">
        </div>
      </div>
      <!-- 账号密码登录区域 -->
      <div v-if="props.loginObject.loginType === '00'"  class="mb-6">
        <div class="broker-class2">
          <label class="broker-class3" for="broker-password">
            密码<span class="text-red-500">*</span>
          </label>
          <span class="broker-class4" @click.prevent="goToEditPwd()">
            忘记密码?
          </span>
        </div>
        <div class="relative">
          <div class="broker-class5">
            <i class="fa-solid fa-lock text-gray-400"></i>
          </div>
          <input id="broker-password"
                 :type="showPassword ? 'text' : 'password'"
                 v-model="formData.password"
                 class="broker-class6"
                 autocomplete="new-password"
                 placeholder="请输入您的密码">
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
            <i class="fa-regular text-gray-400 cursor-pointer"
               :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
               @click.prevent="togglePasswordVisibility"
            ></i>
          </div>
        </div>
      </div>

      <!-- 新增验证码登录区域 -->
      <div v-if="props.loginObject.loginType === '01'||props.loginObject.loginType === '02'" class="mb-6">
        <div class="broker-class2">
          <label class="broker-class3">
            验证码<span class="text-red-500">*</span>
          </label>
        </div>
        <div class="relative flex gap-2">
          <div class="broker-class5">
            <i class="fas fa-shield-alt text-gray-400"></i>
          </div>
          <input
              class="broker-class6 flex-1"
              v-model="formData.code"
              placeholder="请输入验证码"
              type="text"
          >
          <button
              class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
              @click.prevent="handleGetCaptcha"
              :disabled="countdown > 0"
          >
            获取验证码{{ countdown > 0 ? `(${countdown})` : '' }}
          </button>
        </div>
      </div>

      <div class="flex items-center mb-6">
        <input id="remember-broker" type="checkbox" class="broker-class7">
        <label for="remember-broker" class="ml-2 text-sm text-gray-600">
          记住我的登录状态
        </label>
      </div>

      <button type="submit" class="broker-class8">
        <i class="fa-solid fa-right-to-bracket mr-2"></i>
        登录
      </button>
    </form>

    <div id="broker-new-account" class="broker-new-account"
         v-show="loginObject.userType  === '01'">
      <div class="flex items-start">
        <div class="flex-shrink-0 mt-0.5">
          <i class="fa-solid fa-sack-dollar text-wealth-dark"></i>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-gray-800">
            经纪人注册奖励
          </h3>
          <p class="text-xs text-gray-600 mt-1">
            注册成为新经纪人，即可获得
            <span class="font-bold text-wealth-dark">500 港币</span>
            奖励
          </p>
          <span class="register-class" @click.prevent="goToRegister()">
             申请成为经纪人
            <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
          </span>
        </div>
      </div>
    </div>
  </div>

  <div id="client-new-account" class="client-new-account"
       v-show="loginObject.userType === '02'" >
    <div class="flex items-start">
      <div class="flex-shrink-0 mt-0.5">
        <i class="fa-solid fa-gift text-secondary-dark"></i>
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-gray-800">
          新客户注册奖励
        </h3>
        <p class="text-xs text-gray-600 mt-1">
          注册成为新客户，即可获得
          <span class="font-bold text-secondary-dark">
              50 港币
            </span>
          奖励
        </p>
        <span class="register-class" @click.prevent="goToRegister()">
            立即注册
            <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
        </span>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { login } from '@/api/login'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useToast } from '@/composables/useToast'
const { successToast, errorToast } = useToast()

// 定义 props
const props = defineProps({
  loginObject: {
    type: Object,
    default: () => ({
      userType: '00',
      loginTypeName: '邮箱/手机号',
      loginType: '00',
      placeholder: '请输入您的邮箱或者手机号',
      type: 'text'
    })
  }
})


// 响应式数据
const showPassword = ref(false)


// 方法：切换密码可见性
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}

// 倒计时功能
const countdown = ref(0)
let timer = null


function handleGetCaptcha() {
  if (countdown.value > 0) return

  // 开始倒计时
  countdown.value = 60
  timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)

  console.log('获取验证码逻辑')
}

// 组件卸载时清除定时器
onUnmounted(() => {
  if(timer) clearInterval(timer)
})

// 表单数据
const formData = ref({
  account: '',
  password: '',
  code: '',
  countryCode: '+86',
  loginType: props.loginObject.loginType,
  userType: props.loginObject.userType
})
// 处理表单提交
const handleSubmit = async () => {
  try {
    // 构造请求参数
    const params = {
      [props.loginObject.type === 'email' ? 'email' : 'phone']: formData.value.account,
      countryCode: formData.value.countryCode,
      password: formData.value.password,
      code: formData.value.code,
      loginType: formData.value.loginType,
      userType: formData.value.userType
    }
    // 调用登录接口
    const res = await login(params)
    // 登录成功处理
    if (res.code === 200) {
      localStorage.setItem('token', res.token)
      await router.push('/index')
    }
  } catch (e) {
    console.log('登录失败:', e)
    // 增强错误处理逻辑
    const errorMessage = e.response?.data?.msg ||
        e.message ||
        e.response?.statusText ||
        '请求失败，请检查网络连接'

    // 添加状态码判断
    // if (e.response?.status === 404) {
    //   errorToast('资源不存在，请联系管理员!')
    // } else {
    //   errorToast(errorMessage)
    // }
    //todo
    //暂时成功
    await router.push('/index')
  }
}

function goToRegister() {
  router.push({
    path: '/register',
    query: {
      userType: props.loginObject.userType
    }
  })
}

function goToEditPwd() {
  router.push({
    path: '/forgetPwdPage',
    query: {
      userType: props.loginObject.userType
    }
  })
}

</script>

<style scoped>
.login-label {
  @apply block text-sm font-medium text-gray-700 mb-2;
}

.country-code-select {
  @apply rounded-md text-sm text-gray-700 focus:outline-none;
}

.cli-icon {
  @apply absolute inset-y-0 left-0 pl-3 flex items-center z-20;
}

.account-input {
  @apply w-full pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary;
}

.broker-class2 {
  @apply flex justify-between items-center mb-2;
}

.broker-class3 {
  @apply block text-sm font-medium text-gray-700;
}

.broker-class4 {
  @apply text-sm font-medium text-primary hover:text-primary-dark cursor-pointer;
}

.broker-class5 {
  @apply absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none;
}

.broker-class6 {
  @apply w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary;
}

.broker-class7 {
  @apply w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary;
}

.broker-class8 {
  @apply w-full bg-primary hover:bg-primary-dark text-white font-medium py-2.5 px-4 rounded-lg transition duration-200;
}

.broker-new-account {
  @apply mt-6 p-4 bg-wealth-light rounded-lg border border-wealth/20;
}

.broker-class9 {
  @apply inline-flex items-center mt-2 text-sm font-medium text-primary hover:text-primary-dark cursor-pointer;
}

.client-new-account{
  @apply mt-6 p-4 bg-primary-light rounded-lg border border-primary/20;
}
.register-class{
  @apply inline-flex items-center mt-2 text-sm font-medium text-primary hover:text-primary-dark cursor-pointer;
}

</style>