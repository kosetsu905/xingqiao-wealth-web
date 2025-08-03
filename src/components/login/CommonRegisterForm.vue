
<template>
  <!--  Login Form (Hidden by default) -->
  <div id="login-form">
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="login-label" for="">
          登录账号<span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="cli-icon">
            <i class="text-gray-400 fa-regular fa-envelope"></i>
          </div>
          <input id="bror-reset-account"
                 type="text"
                 :class="'pl-10'"
                 v-model="formData.userName"
                 class="account-input" placeholder="请输入登录账号">
        </div>
      </div>
      <div class="mb-4">
        <label class="login-label" for="">
          注册邮箱<span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="cli-icon">
            <i class="text-gray-400 fa-regular fa-envelope"></i>
          </div>
          <input id="bror-reset-email"
                 type="email"
                 :class="'pl-10'"
                 v-model="formData.email"
                 class="account-input" placeholder="请输入您的注册邮箱">
        </div>
      </div>

      <div class="mb-4">
        <label class="login-label" for="">
          手机号码<span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="cli-icon">
            <!-- 区号选择只在手机号登录时显示 -->
            <select
                v-model="formData.countryCode"
                class="country-code-select"
            >
              <option value="+86">+86</option>
              <option value="+852">+852</option>
            </select>
          </div>
          <input id="broker-phone"
                 type="tel"
                 v-model="formData.phoneNumber"
                 class="account-input pl-20"
                 placeholder="请输入您的注册手机号">
        </div>
      </div>

      <!-- 新增验证码登录区域 -->
      <div  class="mb-6">
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

      <div class="mb-4">
        <label class="login-label" for="">
          密码<span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="broker-class5">
            <i class="fa-solid fa-lock text-gray-400"></i>
          </div>
          <input
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

      <div class="mb-4">
        <label class="login-label" for="">
          确认密码<span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <div class="broker-class5">
            <i class="fa-solid fa-lock text-gray-400"></i>
          </div>
          <input
              :type="showComfirmPassword ? 'text' : 'password'"
              v-model="formData.comfirmPassword"
              class="broker-class6"
              autocomplete="new-password"
              placeholder="请确认您的密码">
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
            <i class="fa-regular text-gray-400 cursor-pointer"
               :class="showComfirmPassword ? 'fa-eye-slash' : 'fa-eye'"
               @click.prevent="toggleComfirmPasswordVisibility"
            ></i>
          </div>
        </div>
      </div>


      <div class="flex items-start mb-12">
        <input id="remember-broker" type="checkbox" class="broker-class7 mt-1" v-model="agreed">
        <label for="remember-broker"  class="ml-2 text-sm text-gray-600 leading-relaxed flex items-baseline flex-wrap">
          已阅读并同意
          <a href="#"
             class="text-primary hover:text-primary-dark hover:underline whitespace-nowrap">
            《财富平台服务协议》
          </a>
        </label>
      </div>

      <button type="submit" class="broker-class8">
        <i class="fa-solid fa-right-to-bracket mr-2"></i>
        注册
      </button>
      <button type="button"
              class="w-full border border-gray-300 text-gray-700 font-medium py-2.5 px-4 rounded-lg hover:bg-gray-50 transition duration-200 mt-4"
              @click="handleBack">
        <i class="fa-solid fa-arrow-left mr-2"></i>返回登录
      </button>
    </form>

  </div>


</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router' // 新增路由引入
const router = useRouter()
import { useToast } from '@/composables/useToast'
const { successToast, errorToast } = useToast()
const agreed = ref(false)
import {register, sendCode} from '@/api/login'
// 定义 props
const props = defineProps({
  loginObject: {
    type: Object,
    default: () => ({
      userType: '00'
    })
  }
})

// 响应式数据
const showPassword = ref(false)
const showComfirmPassword = ref(false)



// 方法：切换密码可见性
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}
function toggleComfirmPasswordVisibility() {
  showComfirmPassword.value = !showComfirmPassword.value
}
// 倒计时功能
const countdown = ref(0)
let timer = null

const handleGetCaptcha = async () => {
  if (countdown.value > 0) {
    return;
  }
  console.log('获取验证码逻辑')

  // 构造请求参数
  const params = {
    phoneNumber: formData.value.phoneNumber,
    countryCode: formData.value.countryCode,
    userType: formData.value.userType,
    step:'1'
  }

  // 调用登录接口
  const res = await sendCode(params)
  // 登录成功处理
  if (res.code === 200) {
    successToast("发送成功");
    // 开始倒计时
    countdown.value = 60
    timer = setInterval(() => {
      countdown.value--
      if (countdown.value <= 0) {
        clearInterval(timer)
      }
    }, 1000)
  }else{
    successToast("发送失败" );
  }
}

// 组件卸载时清除定时器
onUnmounted(() => {
  if(timer) clearInterval(timer)
})

// 表单数据
const formData = ref({
  userName: '',
  email: '',
  phoneNumber: '',
  password: '',
  comfirmPassword: '',
  code: '',
  countryCode: '+86',
  userType: props.loginObject.userType
})
// 处理表单提交
const handleSubmit = async () => {
  console.log("注册开始")
  if (!agreed.value) {
    errorToast('请勾选“已阅读并同意”选项')
    return
  }
  try {
    // 构造请求参数
    const params = {
      userName: formData.value.userName,
      email: formData.value.email,
      phoneNumber: formData.value.phoneNumber,
      password: formData.value.password,
      comfirmPassword: formData.value.comfirmPassword,
      countryCode: formData.value.countryCode,
      code: formData.value.code,
      userType: formData.value.userType,
      registerType:'COMMON'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.value.email)) {
      errorToast('请输入有效的邮箱地址')
      return
    }
    //两次密码校验
    if (formData.value.password !== formData.value.comfirmPassword) {
      errorToast('两次输入的密码不一致')
      return
    }
    const phoneRegexMap = {
      '+86': /^1[3-9]\d{9}$/, // 中国大陆
      '+852': /^([5|6|8|9])\d{7}$/ // 中国香港
    }
    const countryCode = formData.value.countryCode
    const phoneNumber = formData.value.phoneNumber

    const phoneRegex = phoneRegexMap[countryCode]
    if (!phoneRegex || !phoneRegex.test(phoneNumber)) {
      errorToast('请输入有效的手机号码')
      return
    }
    router.push({
      path: '/login'
    })
    // 调用注册接口
    // const res = await register(params)
    // 登录注册处理
    // if (res.code === 200) {
    //   router.push({
    //     path: '/login'
    //   })
    // }
  } catch (e) {
    console.log('登录失败:', e)
    // 增强错误处理逻辑
    const errorMessage = e.response?.data?.msg ||
        e.message ||
        e.response?.statusText ||
        '请求失败，请检查网络连接'

    //添加状态码判断
    if (e.response?.status === 404) {
      errorToast('资源不存在，请联系管理员!')
    } else {
      errorToast(errorMessage)
    }

  }

}

const handleBack = async () => {
  await router.push('/login')
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