<!-- 验证弹框 -->
<template>
  <div class="relative bg-white rounded-2xl w-full max-w-md shadow-lg overflow-hidden transform transition-all duration-300">
    <!-- 导航栏 -->
    <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
      <a href="#" @click.prevent="goBack" class="text-secondary hover:text-primary transition-colors flex items-center gap-2">
        <i class="fa fa-arrow-left"></i>
        <span>返回注册页面</span>
      </a>
      <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">
        <i class="fa fa-times"></i>
      </button>
    </div>

    <!-- 弹框内容 -->
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-6 text-center">验证您的身份</h2>

      <!-- Tab导航 -->
      <div class="flex border-b border-gray-200 mb-6">
        <button
            id="sms-tab"
            :class="['py-3 px-1 w-1/2 text-center border-b-2 transition-all duration-200',
                  activeTab === 'sms' ? 'tab-active border-primary text-primary' : 'border-transparent text-secondary']"
            @click="switchTab('sms')">
          短信验证
        </button>
        <button
            id="email-tab"
            :class="['py-3 px-1 w-1/2 text-center border-b-2 transition-all duration-200',
                  activeTab === 'email' ? 'tab-active border-primary text-primary' : 'border-transparent text-secondary']"
            @click="switchTab('email')">
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
                   class="w-full h-full object-cover rounded-lg border border-gray-200 bg-white shadow-sm" />
            </div>
          </div>
        </div>


        <!-- 手机号输入区域 -->
        <div class="space-y-2">
          <label class="block text-sm font-medium text-gray-700">手机号</label>
          <div class="input-group">
            <i class="fa fa-mobile input-icon px-3 py-3"></i>
            <div class="w-1/5">
              <!-- 国家区号选择框 -->
              <select
                  v-model="smsForm.countryCode"
                  class="w-full border-r-gray-100">
                <option value="+86"> +86&nbsp;&nbsp;&nbsp;(中国)</option>
                <option value="+852">+852 (香港)</option>
                <option value="+853">+853 (澳门)</option>
                <option value="+886">+886 (台湾)</option>
              </select>
            </div>
            <div class="w-4/5">
              <input
                  v-model="smsForm.phone"
                  type="tel"
                  class="py-3 border-0 focus:ring-0 outline-none"
                  placeholder="请输入手机号">
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
                class="flex-1 px-4 py-3 border-0 focus:ring-0 outline-none"
                placeholder="请输入图形验证码">
            <div class="w-32 bg-neutral flex items-center justify-center">
              <img v-if="codeUrl" :src="codeUrl" @click="getCode" class="w-full h-full object-cover" alt="图形验证码"/>
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
                class="flex-1 px-4 py-3 border-0 focus:ring-0 outline-none"
                placeholder="请输入邮箱地址">
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
</template>

<script setup >
import { ref, onMounted, reactive,defineEmits } from 'vue'
import {getCodeImg, sendCode} from '@/api/login'
import { useToast } from '@/composables/useToast'
const { successToast, errorToast } = useToast()
let codeUrl = ref("")
// 定义 emits
const emit = defineEmits(['close'])
// 当前激活的Tab
const activeTab = ref('sms')
const { userType } =defineProps(['userType']);

// 表单数据
const smsForm = reactive({
  captcha: '',
  phone: '',
  uuid: '',
  countryCode: '+86'
})

const emailForm = reactive({
  captcha: '',
  email: '',
  uuid: ''
})

// 验证码按钮状态
const smsCodeDisabled = ref(false)
const emailCodeDisabled = ref(false)
const smsCodeButtonText = ref('获取验证码')
const emailCodeButtonText = ref('获取验证码')

// 验证码倒计时时间
const smsCountdown = ref(0)
const emailCountdown = ref(0)


// 切换Tab
const switchTab = (tab) => {
  activeTab.value = tab
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
    if(activeTab.value === 'sms'){
      smsForm.uuid = res.uuid
    }
    if(activeTab.value === 'email'){
      emailForm.uuid = res.uuid
    }
  } catch (error) {
    errorToast("获取验证码失败")
    console.error('获取验证码失败:', error)
  }
}

// 组件挂载时获取验证码
onMounted(() => {
  getCode()
})

// 发送短信验证码
const sendSmsCode = async ()=>   {
  if (!smsForm.phone) {
    alert('请输入手机号')
    return
  }

  if (!smsForm.captcha) {
    alert('请输入图形验证码')
    return
  }


  // 构造请求参数
  const params = {
    phone: smsForm.phone,
    code: smsForm.captcha,
    uuid: smsForm.uuid,
    userType: userType,
    step:'2'
  }

  // 调用登录接口
  const res = await sendCode(params)
  // 登录成功处理
  if (res.code === 200) {
    successToast("发送成功");
    startEmailCountdown()
  }else{
    errorToast(res.msg||"发送失败" );
  }

  // 模拟发送验证码
  startSmsCountdown()
}

// 发送邮件验证码
const sendEmailCode = async ()=>  {
  if (!emailForm.email) {
    alert('请输入邮箱地址')
    return
  }

  if (!emailForm.captcha) {
    alert('请输入图形验证码')
    return
  }

  // 构造请求参数
  const params = {
    email: emailForm.email,
    code: emailForm.captcha,
    uuid: emailForm.uuid,
    userType: userType,
    step:'2'
  }

  // 调用登录接口
  const res = await sendCode(params)
  // 登录成功处理
  if (res.code === 200) {
    successToast("发送成功");
    startEmailCountdown()
  }else{
    errorToast(res.msg||"发送失败" );
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

// 返回注册页面
const goBack = () => {
  emit('close');
}
</script>

<style scoped>
.tab-active {
  border-color: #3b82f6;
  color: #3b82f6;
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
