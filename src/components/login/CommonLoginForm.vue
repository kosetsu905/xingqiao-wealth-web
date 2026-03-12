<template>
  <div>
    <!--  Login Form (Hidden by default) -->
    <div id="login-form">
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="login-label" for="client-email">
            {{ loginObject.loginTypeName }}<span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <div class="cli-icon">
              <!-- 账号登录时显示图标 -->
              <i v-if="loginObject.loginType === '0'"
                 class="text-gray-400 fa-regular fa-user-circle"></i>
              <i
                  v-if="loginObject.loginType === '1'"
                  class="text-gray-400 fa-regular fa-envelope"
              ></i>
              <!-- 区号选择只在手机号登录时显示 -->
              <select
                  v-if="loginObject.loginType === '2'"
                  v-model="formData.countryCode"
                  class="country-code-select"
              >
                <option value="+86">+86</option>
                <option value="+852">+852</option>
              </select>
            </div>

            <input id="client-account"
                   :type="loginObject.type"
                   v-model="formData.userName"
                   class="account-input"
                   :class="loginObject.loginType === '2' ? 'pl-20' : 'pl-10'"
                   :placeholder="loginObject.placeholder">
          </div>
        </div>
        <!-- 账号密码登录区域 -->
        <div v-if="props.loginObject.loginType === '0'" class="mb-6">
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
        <div v-if="props.loginObject.loginType === '1'||props.loginObject.loginType === '2'" class="mb-6">
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
         v-show="loginObject.userType === '02'">
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

    <!-- 弹框遮罩层 -->
    <div v-if="showVerificationModal"
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold text-gray-800">验证您的身份</h2>
            <button @click="closeVerificationModal" class="text-gray-500 hover:text-gray-700">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <!-- Tab导航 -->
          <div class="flex border-b border-gray-200 mb-6">
            <button
                id="sms-tab"
                :class="['py-3 px-1 w-1/2 text-center border-b-2 transition-all duration-200',
                      activeTab === 'sms' ? 'tab-active border-primary text-primary' : 'border-transparent text-secondary']"
                @click="switchTab('sms')"
                :disabled="autoSelectedTab !== 'sms'">
              短信验证
            </button>
            <button
                id="email-tab"
                :class="['py-3 px-1 w-1/2 text-center border-b-2 transition-all duration-200',
                      activeTab === 'email' ? 'tab-active border-primary text-primary' : 'border-transparent text-secondary']"
                @click="switchTab('email')"
                :disabled="autoSelectedTab !== 'email'">
              邮件验证
            </button>
          </div>

          <!-- 短信验证内容 -->
          <div v-show="activeTab === 'sms'" id="sms-content" class="space-y-5">
            <!-- 图形验证码区域 -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">图形验证码</label>
              <div class="input-group">
                <!-- 盾牌图标 - 图形验证码 -->
                <i class="fa fa-shield input-icon px-3 py-3"></i>
                <input
                    v-model="smsForm.captcha"
                    type="text"
                    class="w-2/3 px-4 py-3 border-0 focus:ring-0 outline-none"
                    placeholder="请输入图形验证码">
                <div class="w-1/3 bg-neutral flex items-center justify-center">
                  <img v-if="codeUrl" :src="codeUrl" @click="getCode"
                       class="w-full h-full object-cover rounded-lg border border-gray-200 bg-white shadow-sm" alt=""/>
                </div>
              </div>
            </div>


            <!-- 手机号输入区域 -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">手机号</label>
              <div class="input-group">
                <i class="fa fa-mobile input-icon px-3 py-3"></i>
                <div class="w-3/12">
                  <!-- 国家区号选择框 -->
                  <select
                      v-model="smsForm.countryCode"
                      class="w-full border-r-gray-100"
                      disabled>
                    <option value="+86"> +86</option>
                    <option value="+852">+852</option>
                  </select>
                </div>
                <div class="w-9/12">
                  <input
                      v-model="smsForm.phoneNumber"
                      type="tel"
                      class="py-3 border-0 focus:ring-0 outline-none bg-gray-100"
                      placeholder="请输入手机号"
                      disabled>
                </div>
              </div>
            </div>


            <!-- 获取验证码按钮 -->
            <button
                id="sms-get-code"
                :disabled="smsCodeDisabled"
                :class="['w-full bg-primary text-white py-3 rounded-lg font-medium transition-all duration-200 mt-4',
                      smsCodeDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90 active:bg-primary/80']"
                @click="sendSmsCode">
              {{ smsCodeButtonText }}
            </button>
          </div>

          <!-- 邮件验证内容 (默认隐藏) -->
          <div v-show="activeTab === 'email'" id="email-content" class="space-y-5">
            <!-- 图形验证码区域 -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">图形验证码</label>
              <div class="input-group">
                <!-- 盾牌图标 - 图形验证码 -->
                <i class="fa fa-shield input-icon px-3 py-3"></i>
                <input
                    v-model="emailForm.captcha"
                    type="text"
                    class="w-2/3 px-4 py-3 border-0 focus:ring-0 outline-none"
                    placeholder="请输入图形验证码">
                <div class="w-1/3 bg-neutral flex items-center justify-center">
                  <img v-if="codeUrl" :src="codeUrl" @click="getCode"
                       class="w-full h-full object-cover rounded-lg border border-gray-200 bg-white shadow-sm" alt=""/>
                </div>
              </div>
            </div>

            <!-- 邮箱输入区域 -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">邮箱</label>
              <div class="input-group">
                <!-- 邮件图标 - 邮箱输入 -->
                <i class="fa fa-envelope input-icon px-3 py-3"></i>
                <input
                    v-model="emailForm.email"
                    type="email"
                    class="flex-1 px-4 py-3 border-0 focus:ring-0 outline-none bg-gray-100"
                    placeholder="请输入邮箱地址"
                    disabled>
              </div>
            </div>

            <!-- 获取验证码按钮 -->
            <button
                id="email-get-code"
                :disabled="emailCodeDisabled"
                :class="['w-full bg-primary text-white py-3 rounded-lg font-medium transition-all duration-200 mt-4',
                      emailCodeDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90 active:bg-primary/80']"
                @click="sendEmailCode">
              {{ emailCodeButtonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted, watch} from 'vue'
import {getCodeImg, login, sendCode} from '@/api/login'
import {useRouter} from 'vue-router'

const router = useRouter()
import {useToast} from '@/composables/UseToast.js'
import {setToken} from "@/utils/auth.js"
import tradeWebSocket from '@/plugins/websocket.js'

const {successToast, errorToast} = useToast()
// 当前激活的Tab
const activeTab = ref('sms')
// 自动选择的Tab
const autoSelectedTab = ref('sms')

// 定义 props
const props = defineProps({
  loginObject: {
    type: Object,
    default: () => ({
      userType: '00',
      loginTypeName: '邮箱/手机号',
      loginType: '0',
      placeholder: '请输入您的邮箱或者手机号',
      type: 'text'
    })
  }
})

// 弹框显示控制
const showVerificationModal = ref(false)

// 响应式数据
const showPassword = ref(false)

// 方法：切换密码可见性
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}

// 倒计时功能
const countdown = ref(0)
let timer = null

// 显示验证弹框
const showVerificationModalFunc = () => {
  // 根据表单输入自动选择Tab
  determineAutoTab()

  showVerificationModal.value = true
  getCode() // 显示弹框时刷新验证码
}

// 根据表单输入自动选择Tab
const determineAutoTab = () => {
  const phoneNumberRegex = /^1(3[0-9]|4[5789]|5[0-35-9]|6[257]|7[0-25-8]|8[0-9]|9[189])\d{8}$/
  const emailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

  // 如果是手机号登录类型
  if (props.loginObject.loginType === '2') {
    autoSelectedTab.value = 'sms'
    activeTab.value = 'sms'

    // 填充手机号信息
    smsForm.value.phoneNumber = formData.value.userName
    smsForm.value.countryCode = formData.value.countryCode
    return
  }

  // 其他登录类型根据输入内容判断
  if (phoneNumberRegex.test(formData.value.userName)) {
    autoSelectedTab.value = 'sms'
    activeTab.value = 'sms'

    // 填充手机号信息
    smsForm.value.phoneNumber = formData.value.userName
    smsForm.value.countryCode = formData.value.countryCode
  } else if (emailRegex.test(formData.value.userName)) {
    autoSelectedTab.value = 'email'
    activeTab.value = 'email'

    // 填充邮箱信息
    emailForm.value.email = formData.value.userName
  } else {
    // 默认显示短信验证
    autoSelectedTab.value = 'sms'
    activeTab.value = 'sms'
  }
}

// 关闭验证弹框
const closeVerificationModal = () => {
  showVerificationModal.value = false
}

const handleGetCaptcha = async () => {
  if (countdown.value > 0) {
    return;
  }

  // 显示验证身份弹框
  showVerificationModalFunc()
}

// 组件卸载时清除定时器
onUnmounted(() => {
  if (timer) clearInterval(timer)
})

// 表单数据
const formData = ref({
  userName: '',
  password: '',
  code: '',
  countryCode: '+86',
  loginType: props.loginObject.loginType,
  userType: props.loginObject.userType
})

// 监听 loginType 变化并同步到 formData
watch(
    () => props.loginObject.loginType,
    (newVal) => {
      formData.value.loginType = newVal
    },
    {immediate: true} // 立即触发一次同步
)

// 监听 loginObject.userType 变化并同步到 formData
watch(
    () => props.loginObject.userType,
    (newVal) => {
      formData.value.userType = newVal
    },
    {immediate: true} // 立即触发一次同步
)

// 处理表单提交
const handleSubmit = async () => {
  try {
    // 构造请求参数
    const params = {
      userName: formData.value.userName,
      countryCode: formData.value.countryCode,
      password: formData.value.password,
      code: formData.value.code,
      loginType: formData.value.loginType,
      userType: props.loginObject.userType
    }

    // 调用登录接口
    const res = await login(params)
    // 登录成功处理
    if (res.code === 200) {
      console.log('登录成功')
      console.log(res.data.access_token)
      setToken(res.data.access_token)
      localStorage.setItem('access_token', res.data.access_token)
      localStorage.setItem('avatar', res.data.avatar)
      localStorage.setItem('userName', res.data.userName)
      localStorage.setItem('phoneNumber', res.data.phoneNumber)
      localStorage.setItem('email', res.data.email)
      // 从响应数据中提取用户ID或构造用户标识
      const userId = res.data.userId;
      // 保存用户ID到localStorage
      localStorage.setItem('userId', userId);

      // 连接股票WebSocket
      try {
        // 确保userId存在，避免连接时出现undefined
        if (!userId) {
          console.warn('用户ID不存在，跳过WebSocket连接');
        } else {
          console.log('WebSocket认证开始');
          // 设置WebSocket认证信息
          const authSuccess = tradeWebSocket.setAuthInfo(res.data.access_token, userId);
          console.log('WebSocket认证结果:', authSuccess);

          if (authSuccess) {
            // 连接WebSocket
            tradeWebSocket.connect();

            // 添加WebSocket事件监听
            tradeWebSocket.onOpen(() => {
              console.log('股票WebSocket连接成功，等待认证响应');
              // 这里可以添加连接成功后的初始化逻辑，如订阅默认行情
            });

            tradeWebSocket.onMessage((data) => {
              // 处理认证响应
              if (data && data.type === 'auth_response') {
                if (data.success) {
                  console.log('股票WebSocket认证成功');
                  // 认证成功后可以执行订阅操作
                  // 例如：tradeWebSocket.subscribe(['stock1', 'stock2'], 'ticker');
                } else {
                  console.error('股票WebSocket认证失败:', data.message || '未知错误');
                }
              } else {
                // 处理其他业务消息
                console.log('收到WebSocket业务消息:', data);
              }
            });

            tradeWebSocket.onError((error) => {
              console.error('股票WebSocket连接错误:', error);
              // 可以添加连接错误的用户提示
            });

            tradeWebSocket.onClose((event) => {
              console.log('股票WebSocket连接已关闭，关闭代码:', event?.code);
              // 这里可以添加重连机制或用户提示
            });
          } else {
            console.error('WebSocket认证信息设置失败');
          }
        }
      } catch (wsError) {
        console.error('WebSocket连接失败:', wsError);
        // WebSocket连接失败不影响登录流程
      }

      if (props.loginObject.userType === '02') {
        await router.push('/client/index')
      }
      if (props.loginObject.userType === '01') {
        await router.push('/agency/index')
      }
    }
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

// 表单数据
const smsForm = ref({
  captcha: '',
  phoneNumber: '',
  uuid: '',
  userType: '',
  countryCode: '+86'
})

const emailForm = ref({
  captcha: '',
  email: '',
  uuid: '',
  userType: '',
})

// 验证码按钮状态
const smsCodeDisabled = ref(false)
const emailCodeDisabled = ref(false)
const smsCodeButtonText = ref('获取验证码')
const emailCodeButtonText = ref('获取验证码')
const codeUrl = ref("")
// 验证码倒计时时间
const smsCountdown = ref(0)
const emailCountdown = ref(0)

// 切换Tab
const switchTab = (tab) => {
  // 只有当tab是自动选择的tab时才能切换
  if (autoSelectedTab.value === tab) {
    activeTab.value = tab
  }
}

const getCode = async () => {
  try {
    const res = await getCodeImg()
    // 检查返回的数据是否是 base64 格式
    if (res.img.startsWith('data:image')) {
      codeUrl.value = res.img
    } else {
      // 如果不是 base64 格式，则按原格式处理
      codeUrl.value = "data:image/gif;base64," + res.img
    }
    if (activeTab.value === 'sms') {
      smsForm.value.uuid = res.uuid
    }
    if (activeTab.value === 'email') {
      emailForm.value.uuid = res.uuid
    }
  } catch (error) {
    errorToast("获取验证码失败")
    console.error('获取验证码失败:', error)
  }
}

// 发送短信验证码
const sendSmsCode = async () => {
  if (!smsForm.value.phoneNumber) {
    errorToast("请输入手机号")
    return
  }

  //校验手机号码格式，17665319189我的手机，报请输入正确的手机号码
  const phoneRegex = /^1(3[0-9]|4[5789]|5[0-35-9]|6[257]|7[0-25-8]|8[0-9]|9[189])\d{8}$/;
  if (!phoneRegex.test(smsForm.value.phoneNumber)) {
    errorToast("请输入正确的手机号码")
    return
  }

  if (!smsForm.value.captcha) {
    errorToast("请输入图形验证码")
    return
  }
  // 构造请求参数
  const params = {
    phoneNumber: smsForm.value.phoneNumber,
    countryCode: smsForm.value.countryCode,
    code: smsForm.value.captcha,
    uuid: smsForm.value.uuid,
    userType: formData.value.userType, // 使用主表单的userType
    step: '3'
  }
  // 调用登录接口
  const res = await sendCode(params)

  // 登录成功处理
  if (res.code === 200) {
    successToast("发送成功");
    formData.value.phoneNumber = smsForm.value.phoneNumber; // 将手机号同步到主表单
    startSmsCountdown()
    closeVerificationModal() // 关闭弹框
  } else {
    errorToast(res.msg || "发送失败");
    await getCode() // 刷新验证码
  }
};

// 发送邮件验证码
const sendEmailCode = async () => {
  if (!emailForm.value.email) {
    errorToast('请输入邮箱地址')
    return
  }
  //校验邮箱号码格式
  const emailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  if (!emailRegex.test(emailForm.value.email)) {
    errorToast('请输入正确的邮箱地址')
    return
  }

  if (!emailForm.value.captcha) {
    errorToast('请输入图形验证码')
    return
  }

  // 构造请求参数
  const params = {
    email: emailForm.value.email,
    code: emailForm.value.captcha,
    uuid: emailForm.value.uuid,
    userType: formData.value.userType, // 使用主表单的userType
    step: '4'
  }

  // 调用登录接口
  const res = await sendCode(params)
  // 登录成功处理
  if (res.code === 200) {
    successToast("发送成功");
    formData.value.email = emailForm.value.email; // 将邮箱同步到主表单
    startEmailCountdown()
    closeVerificationModal() // 关闭弹框
  } else {
    errorToast(res.msg || "发送失败");
    await getCode() // 刷新验证码
  }
}

// 开始短信倒计时
const startSmsCountdown = () => {
  smsCodeDisabled.value = true
  smsCountdown.value = 60

  const timer = setInterval(() => {
    smsCountdown.value--
    smsCodeButtonText.value = `${smsCountdown.value}秒后重新获取`

    if (smsCountdown.value <= 0) {
      clearInterval(timer)
      smsCodeDisabled.value = false
      smsCodeButtonText.value = '获取验证码'
    }
  }, 1000)
}

// 开始邮件倒计时
const startEmailCountdown = () => {
  emailCodeDisabled.value = true
  emailCountdown.value = 60

  const timer = setInterval(() => {
    emailCountdown.value--
    emailCodeButtonText.value = `${emailCountdown.value}秒后重新获取`

    if (emailCountdown.value <= 0) {
      clearInterval(timer)
      emailCodeDisabled.value = false
      emailCodeButtonText.value = '获取验证码'
    }
  }, 1000)
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

.client-new-account {
  @apply mt-6 p-4 bg-primary-light rounded-lg border border-primary/20;
}

.register-class {
  @apply inline-flex items-center mt-2 text-sm font-medium text-primary hover:text-primary-dark cursor-pointer;
}

/* 禁用状态的Tab样式 */
button:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.input-group {
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  transition: border-color 0.2s;
}

.input-group:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.input-icon {
  color: #6b7280;
}
</style>
