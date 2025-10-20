<template>
  <!-- 顶部导航栏 -->
  <Header/>


  <!-- 主要内容 -->
  <main class="container mx-auto px-4 py-8 md:py-12">    <!-- 页面标题 -->
    <div class="text-center mb-12">
      <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-neutral-800 mb-3">KYC身份认证流程</h2>
      <p class="text-neutral-500 max-w-2xl mx-auto text-balance">
        完成KYC认证可以提升您的账户安全性，并解锁更多功能。整个过程仅需几分钟，我们承诺保护您的所有个人信息安全。
      </p>
    </div>
    <!-- 进度指示器 -->
    <div class="max-w-4xl mx-auto mb-16">
      <div class="flex items-center justify-between">
        <!-- 步骤1 -->
        <div class="flex flex-col items-center z-10">
          <div id="step1-icon"
               class="w-12 h-12 rounded-full border-2 step-pending flex items-center justify-center text-lg font-bold mb-2 transition-all duration-500">
            1
          </div>
          <p class="text-sm font-medium text-neutral-500">身份验证</p>
        </div>

        <!-- 进度线1 -->
        <div id="line1" class="progress-line progress-line-pending flex-grow mx-2 h-0.5"></div>

        <!-- 步骤2 -->
        <div class="flex flex-col items-center z-10">
          <div id="step2-icon"
               class="w-12 h-12 rounded-full border-2 step-pending flex items-center justify-center text-lg font-bold mb-2 transition-all duration-500">
            2
          </div>
          <p class="text-sm font-medium text-neutral-500">人脸识别</p>
        </div>

        <!-- 进度线2 -->
        <div id="line2" class="progress-line progress-line-pending flex-grow mx-2 h-0.5"></div>

        <!-- 步骤3 -->
        <div class="flex flex-col items-center z-10">
          <div id="step3-icon"
               class="w-12 h-12 rounded-full border-2 step-pending flex items-center justify-center text-lg font-bold mb-2 transition-all duration-500">
            3
          </div>
          <p class="text-sm font-medium text-neutral-500">完成认证</p>
        </div>
      </div>
    </div>

    <!-- 步骤内容区域 -->
    <div class="max-w-3xl mx-auto">
      <form class="space-y-5">
        <!-- 步骤1: 身份验证 -->
        <div id="step1-content" class="bg-white rounded-xl shadow-card p-6 md:p-8 hidden transition-all duration-500">
          <h3 class="text-xl font-bold mb-6 flex items-center">
            <i class="fa fa-id-card text-primary mr-3"></i>
            身份验证
          </h3>

          <div class="mb-6 bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div class="flex items-start">
              <i class="fa fa-info-circle text-primary mt-0.5 mr-3"></i>
              <p class="text-sm text-neutral-700">
                请提供政府签发的有效身份证件（身份证、护照或驾照）进行验证。我们会加密存储您的信息并仅用于身份验证。
              </p>
            </div>
          </div>

          <!-- 姓名和性别 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">姓名 <span
                  class="text-danger">*</span></label>
              <input
                  v-model="formData.fullName"
                  type="text"
                  :disabled="faseAuth==='T'"
                  class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="请输入真实姓名">
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">性别 <span
                  class="text-danger">*</span></label>
              <div class="flex space-x-4 pt-2">
                <label class="inline-flex items-center">
                  <input
                      v-model="formData.gender"
                      type="radio"
                      name="gender"
                      value="1"
                      :disabled="faseAuth.value==='T'"
                      class="w-4 h-4 text-primary focus:ring-primary"
                      checked>
                  <span class="ml-2 text-neutral-700">男</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                      v-model="formData.gender"
                      type="radio"
                      name="gender"
                      :disabled="faseAuth==='T'"
                      value="2"
                      class="w-4 h-4 text-primary focus:ring-primary">
                  <span class="ml-2 text-neutral-700">女</span>
                </label>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">证件类型 <span
                  class="text-danger">*</span></label>
              <select
                  v-model="formData.idType"
                  :disabled="faseAuth==='T'"
                  class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all">
                <option value="id-card">居民身份证</option>
                <option value="passport">护照</option>
                <option value="driver-license">驾驶证</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">证件号码 <span class="text-danger">*</span></label>
              <input
                  v-model="formData.idNumber"
                  type="text"
                  :disabled="faseAuth==='T'"
                  class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="请输入证件号码">
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">证件有效期 <span
                  class="text-danger">*</span></label>
              <input
                  v-model="formData.expiryDate"
                  type="date"
                  :disabled="faseAuth.value==='T'"
                  class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all">
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">出生日期 <span
                  class="text-danger">*</span></label>
              <input
                  v-model="formData.birthDay"
                  type="date"
                  :disabled="faseAuth.value==='T'"
                  class="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all">
            </div>

            <div>
              <h3 class=" block text-sm font-medium text-neutral-700 mb-3">证件照片 <span
                  class="text-danger">*</span></h3>
            </div>
            <div>
              <h3></h3>
            </div>
            <!-- 证件正面上传区域 -->
            <div>
              <p class="text-sm mb-2">证件正面</p>
              <div
                  class="border-2 border-dashed border-neutral-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer bg-neutral-50"
                  v-if="!formData.frontIdFileUrl">
                <input
                    ref="idFrontInput"
                    @change="handleFrontIdUpload"
                    type="file"
                    :disabled="faseAuth.value==='T'"
                    class="hidden"
                    id="id-front"
                    accept="image/jpeg,image/png">
                <label for="id-front" class="cursor-pointer">
                  <div v-if="frontIdUploading" class="flex flex-col items-center justify-center">
                    <div
                        class="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-2"></div>
                    <p class="text-sm text-neutral-500">文件上传中...</p>
                  </div>
                  <div v-else>
                    <i class="fa fa-cloud-upload text-3xl text-neutral-400 mb-2"></i>
                    <p class="text-sm text-neutral-500">点击上传或拖放文件</p>
                    <p class="text-xs text-neutral-400 mt-1">支持JPG、PNG格式，不超过5MB</p>
                  </div>
                </label>
              </div>
              <!-- 证件正面预览 -->
              <div v-else class="mt-2">
                <div class="relative">
                  <img :src="formData.frontIdFileUrl" alt="证件正面" class="w-full h-40 object-contain rounded border">
                  <button
                      @click="removeFile('frontIdFileUrl')"
                      type="button"
                      :disabled="faseAuth.value==='T'"
                      class="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <i class="fa fa-times text-xs"></i>
                  </button>
                </div>
                <p class="text-xs text-neutral-500 mt-1 text-center">证件正面</p>
              </div>
            </div>

            <!-- 证件反面上传区域 -->
            <div>
              <p class="text-sm mb-2">证件反面</p>
              <div
                  class="border-2 border-dashed border-neutral-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer bg-neutral-50"
                  v-if="!formData.backIdFileUrl">
                <input
                    ref="idBackInput"
                    @change="handleBackIdUpload"
                    type="file"
                    :disabled="faseAuth.value==='T'"
                    class="hidden"
                    id="id-back"
                    accept="image/jpeg,image/png">
                <label for="id-back" class="cursor-pointer">
                  <div v-if="backIdUploading" class="flex flex-col items-center justify-center">
                    <div
                        class="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-2"></div>
                    <p class="text-sm text-neutral-500">文件上传中...</p>
                  </div>
                  <div v-else>
                    <i class="fa fa-cloud-upload text-3xl text-neutral-400 mb-2"></i>
                    <p class="text-sm text-neutral-500">点击上传或拖放文件</p>
                    <p class="text-xs text-neutral-400 mt-1">支持JPG、PNG格式，不超过5MB</p>
                  </div>
                </label>
              </div>
              <!-- 证件反面预览 -->
              <div v-else class="mt-2">
                <div class="relative">
                  <img :src="formData.backIdFileUrl" alt="证件反面" class="w-full h-40 object-contain rounded border">
                  <button
                      @click="removeFile('backIdFileUrl')"
                      type="button"
                      :disabled="faseAuth.value==='T'"
                      class="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <i class="fa fa-times text-xs"></i>
                  </button>
                </div>
                <p class="text-xs text-neutral-500 mt-1 text-center">证件反面</p>
              </div>
            </div>
            <!-- 协议同意 -->
            <div class="pt-4 w-full">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                      v-model="formData.agreeTerms"
                      type="checkbox"
                      :disabled="faseAuth.value==='T'"
                      class="w-4 h-4 text-primary focus:ring-primary border-neutral-300 rounded"
                      id="agree-terms">
                </div>
                <div class="ml-3 text-sm">
                  <label for="agree-terms" class="text-neutral-700">
                    我已阅读并同意
                    <a href="#" class="text-primary hover:underline">用户服务协议</a>
                    和
                    <a href="#" class="text-primary hover:underline">隐私政策</a>
                    <span class="text-danger">*</span>
                  </label>
                </div>
              </div>
            </div>

          </div>

          <div class="pt-2 flex space-x-4">
            <button
                v-if="currentStep > 1"
                @click="prevStep"
                type="button"
                class="flex-1 bg-white text-neutral-700 border border-neutral-300 py-3 px-6 rounded-lg font-medium hover:bg-neutral-50 transition-colors">
              <i class="fa fa-arrow-left mr-1"></i> 上一步
            </button>
            <button
                @click="nextStep"
                type="button"
                class="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300">
              下一步 <i class="fa fa-arrow-right ml-1"></i>
            </button>
          </div>

          <!-- 常见问题 -->
          <div class="space-y-4">
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <button type="button"
                      class="faq-toggle w-full flex justify-between items-center p-5 text-left focus:outline-none">
                <span class="font-medium">为什么需要进行KYC认证？</span>
                <i class="fa fa-chevron-down text-neutral-400 transition-transform duration-300"></i>
              </button>
              <div class="faq-content hidden px-5 pb-5 text-neutral-600 border-t border-neutral-100">
                <p>
                  KYC（了解你的客户）是金融和互联网服务行业的标准流程，旨在防止身份盗窃、欺诈、洗钱等非法活动。完成KYC认证后，您可以解锁更多账户功能，提高账户安全性，并符合监管要求。</p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <button type="button"
                      class="faq-toggle w-full flex justify-between items-center p-5 text-left focus:outline-none">
                <span class="font-medium">我的个人信息会被安全保护吗？</span>
                <i class="fa fa-chevron-down text-neutral-400 transition-transform duration-300"></i>
              </button>
              <div class="faq-content hidden px-5 pb-5 text-neutral-600 border-t border-neutral-100">
                <p>
                  是的，我们非常重视您的个人信息安全。所有提交的资料都会经过加密处理并严格保密，仅用于身份验证目的，不会向第三方泄露您的信息，除非法律要求或获得您的明确许可。</p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <button type="button"
                      class="faq-toggle w-full flex justify-between items-center p-5 text-left focus:outline-none">
                <span class="font-medium">审核需要多长时间？</span>
                <i class="fa fa-chevron-down text-neutral-400 transition-transform duration-300"></i>
              </button>
              <div class="faq-content hidden px-5 pb-5 text-neutral-600 border-t border-neutral-100">
                <p>
                  一般情况下，我们会在1-3个工作日内完成审核。如果遇到审核高峰期或需要补充资料，可能会延长审核时间。您可以随时登录账户查看审核进度。</p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <button type="button"
                      class="faq-toggle w-full flex justify-between items-center p-5 text-left focus:outline-none">
                <span class="font-medium">如果认证失败，我可以重新提交吗？</span>
                <i class="fa fa-chevron-down text-neutral-400 transition-transform duration-300"></i>
              </button>
              <div class="faq-content hidden px-5 pb-5 text-neutral-600 border-t border-neutral-100">
                <p>
                  是的，如果认证失败，我们会告知您具体原因，您可以根据提示修改信息并重新提交。请注意，频繁提交不合格的资料可能会导致账户限制，请确保提供的信息真实有效。</p>
              </div>
            </div>
          </div>

        </div>

        <!-- 步骤2: 人脸验证 -->
        <div id="step2-content" class="bg-white rounded-xl shadow-card p-6 md:p-8 hidden transition-all duration-500">
          <div>
            <h3 class="text-xl font-bold mb-6 flex items-center">
              <i class="fa fa-map-marker text-primary mr-3"></i>
              人脸验证
            </h3>
            <div class="mb-6">
              <p class="text-sm text-neutral-600 mb-4">
                请完成人脸识别验证。
              </p>
            </div>
            <div>
              <div class="border border-neutral-300 rounded-lg overflow-hidden">
                <div class="bg-neutral-100 p-8 text-center">
                  <i class="fa fa-camera text-4xl text-neutral-400 mb-3"></i>
                  <p class="text-neutral-600 mb-4">请完成人脸识别以确认身份</p>
                  <button type="button" @click="startFaceRecognition"
                          class="bg-primary/10 text-primary px-6 py-2 rounded-lg hover:bg-primary/20 transition-colors flex items-center mx-auto"
                          :disabled="faceRecognitionLoading">
                    <i v-if="faceRecognitionLoading" class="fa fa-spinner fa-spin mr-2"></i>
                    {{ faceRecognitionLoading ? '启动中...' : faseAuth && faseAuth === 'T' ? "认证成功" : (faseAuth && faseAuth === 'F' ? "认证失败" : '开始人脸识别') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-2 flex space-x-4">
            <button
                @click="prevStep"
                type="button"
                class="flex-1 bg-white text-neutral-700 border border-neutral-300 py-3 px-6 rounded-lg font-medium hover:bg-neutral-50 transition-colors">
              <i class="fa fa-arrow-left mr-1"></i> 上一步
            </button>
            <button
                @click="nextStep"
                type="button"
                class="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300">
              提交审核 <i class="fa fa-arrow-right ml-1"></i>
            </button>
          </div>
        </div>

        <!-- 步骤3: 完成认证 -->
        <div id="step3-content"
             class="bg-white rounded-xl shadow-card p-6 md:p-8 hidden transition-all duration-500 text-center">
          <div class="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="fa fa-check text-3xl text-success"></i>
          </div>

          <h3 class="text-2xl font-bold mb-3">提交成功！</h3>
          <p class="text-neutral-600 mb-8 max-w-md mx-auto">
            您的KYC认证申请已成功提交，我们将在1-3个工作日内完成审核。审核结果将通过短信和邮件通知您。
          </p>

          <div class="bg-neutral-50 rounded-lg p-5 mb-8 max-w-md mx-auto">
            <h4 class="font-medium text-neutral-800 mb-3">审核期间您可以：</h4>
            <ul class="text-left text-neutral-600 space-y-2">
              <li class="flex items-start">
                <i class="fa fa-angle-right text-primary mt-1 mr-2"></i>
                <span>查看账户当前可用功能</span>
              </li>
              <li class="flex items-start">
                <i class="fa fa-angle-right text-primary mt-1 mr-2"></i>
                <span>了解认证通过后可解锁的高级功能</span>
              </li>
              <li class="flex items-start">
                <i class="fa fa-angle-right text-primary mt-1 mr-2"></i>
                <span>完善您的账户安全设置</span>
              </li>
            </ul>
          </div>

          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button
                @click="router.push('/client/userInfo')"
                class="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg">
              查看账户状态
            </button>
            <button
                @click="router.push('/client/index')"
                class="px-6 py-3 bg-white text-neutral-700 border border-neutral-300 rounded-lg font-medium hover:bg-neutral-50 transition-colors">
              返回首页
            </button>
          </div>
        </div>
      </form>
    </div>


  </main>
</template>

<script setup>
import Header from "@/components/client/Header.vue";
import {nextTick, onMounted, onUnmounted, reactive, ref} from "vue";
import {useRoute, useRouter} from 'vue-router';
import {uploadFile} from "@/api/file.js";
import {useToast} from "@/composables/UseToast.js";
import {getKycInfo, getEkycReturnUrl, saveKycInfo, getEkycResult} from "@/api/customer.js";

const {successToast, errorToast} = useToast()

const loading = ref(true)
const frontIdUploading = ref(false)
const backIdUploading = ref(false)
const sdkLoaded = ref(false)
const faseAuth = ref('')
const error = ref(null)
const metaInfo = ref(null)
const router = useRouter();
const route = useRoute()
const phoneNumberRef = ref('');
const emailRef = ref('');
const currentStep = ref(1);
// 添加文件输入框的引用
const idFrontInput = ref(null);
const idBackInput = ref(null);
const STEP_CACHE_KEY = 'customerInfoStepData'
// 添加loading状态
const faceRecognitionLoading = ref(false)

// 表单数据
const formData = reactive({
  // 步骤1数据
  fullName: '',
  gender: 'male',
  idType: 'id-card',
  idNumber: '',
  expiryDate: null,
  birthDay: null,
  frontIdFileUrl: null,
  backIdFileUrl: null,
  phoneNumber: null,
  email: null,
  faceVerifyStatus: 1,
  // 协议同意
  agreeTerms: false
});


const startFaceRecognition = async () => {
  try {
    console.info('开始人脸识别');
    // 设置加载状态为true，显示加载提示
    faceRecognitionLoading.value = true;
    if (!metaInfo.value) {
      metaInfo.value = getMetaInfo();
    }

    console.log('发送认证初始化请求，MetaInfo:', metaInfo.value);
    // 调用后台接口获取人脸识别URL
    const response = await getEkycReturnUrl(JSON.stringify(metaInfo.value));

    if (response.code === 200 && response.data) {
      successToast('正在启动人脸识别...');
      //调转新页面
      window.open(response.data, '_self');
    } else {
      errorToast(response.msg || '获取人脸识别链接失败');
    }
  } catch (error) {
    console.error('开始人脸识别失败:', error);
    errorToast('开始人脸识别失败，请重试');
  } finally {
    // 无论成功或失败，都结束加载状态
    faceRecognitionLoading.value = false;
  }
}


// 动态加载阿里云认证 SDK
const loadAliyunAuthSDK = () => {
  return new Promise((resolve, reject) => {
    // 检查是否已经加载
    if (window.getMetaInfo) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://o.alicdn.com/yd-cloudauth/cloudauth-cdn/jsvm_all.js'
    script.type = 'text/javascript'
    script.async = true

    script.onload = () => {
      console.log('阿里云认证 SDK 加载成功')
      resolve()
    }
    script.onerror = () => {
      reject(new Error('阿里云认证 SDK 加载失败'))
    }

    document.head.appendChild(script)
  })
}

// 获取 MetaInfo - 现在可以确保 SDK 已加载
const getMetaInfo = () => {
  try {
    if (typeof window.getMetaInfo === 'function') {
      console.log('调用 getMetaInfo 方法')
      const info = window.getMetaInfo()
      console.log('获取到的 MetaInfo:', info)
      metaInfo.value = info
      return info
    } else {
      console.log('getMetaInfo 方法未找到，请检查是否正确加载了阿里云认证 SDK')
      return null
    }
  } catch (err) {
    error.value = '获取 MetaInfo 失败: ' + err.message
    console.error('获取 MetaInfo 错误:', err)
    throw err
  }
}


// 切换步骤
const goToStep = (step) => {
  currentStep.value = step;
  nextTick(() => {
    updateProgress();
  });
};


const loadStepDataFromDb = async () => {
  try {
    const response = await getKycInfo();
    if (response.code === 200) {
      if (response.data) {
        Object.assign(formData, response.data)
        if (response.data.faceVerifyStatus === 2) {
          faseAuth.value = 'T'
          formData.agreeTerms = true
        }
        if (response.data.faceVerifyStatus === 3) {
          faseAuth.value = 'F'
        }
      }
    }
  } catch (error) {
    console.error('获取数据失败:', error)
  }
}


// 更新进度条状态
const updateProgress = () => {
  // 更新步骤图标状态
  for (let i = 1; i <= 3; i++) {
    const stepIcon = document.getElementById(`step${i}-icon`);
    if (stepIcon) {
      stepIcon.classList.remove('step-active', 'step-pending', 'step-completed');
      if (i < currentStep.value) {
        stepIcon.classList.add('step-completed');
      } else if (i === currentStep.value) {
        stepIcon.classList.add('step-active');
      } else {
        stepIcon.classList.add('step-pending');
      }
    }

    // 更新进度线
    if (i > 1) {
      const line = document.getElementById(`line${i - 1}`);
      if (line) {
        line.classList.remove('progress-line-active', 'progress-line-pending');
        if (i <= currentStep.value) {
          line.classList.add('progress-line-active');
        } else {
          line.classList.add('progress-line-pending');
        }
      }
    }
  }

  // 显示当前步骤内容
  for (let i = 1; i <= 3; i++) {
    const stepContent = document.getElementById(`step${i}-content`);
    if (stepContent) {
      stepContent.classList.toggle('hidden', i !== currentStep.value);
    }
  }
};


// 删除已上传的文件
const removeFile = (field) => {
  // 清除表单数据中的URL
  formData[field] = null;

  // 重置对应的文件输入框
  if (field === 'frontIdFileUrl' && idFrontInput.value) {
    idFrontInput.value.value = '';
  } else if (field === 'backIdFileUrl' && idBackInput.value) {
    idBackInput.value.value = '';
  }

  successToast('已删除文件，可重新上传');
};


// 文件上传处理
// 处理证件正面照上传
const handleFrontIdUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      frontIdUploading.value = true;
      // 上传到OSS并获取URL
      formData.frontIdFileUrl = await uploadFileToOSS(file);
      successToast('证件正面照上传成功');
    } catch (error) {
      console.log('上传证件正面照失败:');
      errorToast('上传证件正面照失败，请重试');
    } finally {
      frontIdUploading.value = false;
    }
  }
};


// 处理证件反面照上传
const handleBackIdUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      backIdUploading.value = true;
      // 上传到OSS并获取URL
      formData.backIdFileUrl = await uploadFileToOSS(file);
      successToast('证件反面照上传成功');
    } catch (error) {
      console.error('上传证件反面照失败:', error);
      errorToast('上传证件反面照失败，请重试');
    } finally {
      backIdUploading.value = false;
    }
  }
};

// 上传文件到OSS
const uploadFileToOSS = async (file) => {
  console.log('上传文件到OSS')
  try {

    // 验证文件大小（限制为5MB）
    if (file.size > 5 * 1024 * 1024) {
      errorToast('图片大小不能超过5MB')
      return
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('dir', "ekyc");
    // 调用后端上传接口
    const response = await uploadFile(formData);
    console.log('上传文件到结束')

    if (response.code === 200) {
      return response.data; // 假设后端返回OSS文件访问URL
    } else {
      errorToast(response.msg || '文件上传失败');
    }
  } catch (error) {
    console.log('文件上传失败:', error);
    errorToast(error.message || '文件上传失败');
    throw error;
  }
};


// 表单验证
const validateStep1 = () => {
  if (!formData.idNumber) {
    alert('请输入证件号码');
    return false;
  }
  if (!formData.expiryDate) {
    alert('请选择证件有效期');
    return false;
  }
  if (!formData.frontIdFileUrl) {
    alert('请上传证件正面照片');
    return false;
  }
  if (!formData.backIdFileUrl) {
    alert('请上传证件反面照片');
    return false;
  }
  if (!formData.fullName) {
    alert('请输入姓名');
    return false;
  }
  if (!formData.agreeTerms) {
    alert('请同意用户服务协议和隐私政策');
    return false;
  }
  return true;
};

const validateStep2 = () => {
  return true;
};

const validateStep3 = () => {
  return true;
};

// 下一步
const nextStep = () => {
  console.log('当前步骤:', currentStep.value)
  console.log('当前表单数据:', formData)

  switch (currentStep.value) {
    case 1:
      if (validateStep1()) {
        saveOneStep();
      }
      break;
    case 2:
      if (validateStep2()) {
        goToStep(3);
      }
      break;
    case 3:
      if (validateStep3()) {
        submitKyc();
      }
      break;
    default:
      break;
  }
};

const saveOneStep = async () => {
  const data = {
    ...formData,
    phoneNumber: phoneNumberRef.value,
    email: emailRef.value
  }

  console.log('当前步骤:', currentStep.value);

  if (faseAuth.value !== 'T') {
    // 查询人脸认证结果
    let response0 = await getEkycResult()
    if (response0.code === 200 && response0.data) {
      faseAuth.value = response0.data
    }

    console.log('提交数据:', data)
    let response = await saveKycInfo(data)
    if (response.code === 200) {
      successToast('客户信息提交成功')
    }
  }
  goToStep(2)
};


// 上一步
const prevStep = async () => {
  if (currentStep.value > 1) {
    if (currentStep.value === 2) {
      // 后台查询已经保存的数据
      await loadStepDataFromDb()
    }
    goToStep(currentStep.value - 1);
  }
};

// 提交认证
const submitKyc = () => {
  // 这里应该调用后端API提交数据
  console.log('提交KYC数据:', formData);
  // 提交成功后清除缓存

  successToast('KYC认证申请已提交，我们将在1-3个工作日内完成审核。');
  // 实际项目中应该跳转到成功页面或显示成功状态
};

// FAQ切换
const toggleFaq = (event) => {
  const button = event.target.closest('.faq-toggle');
  if (button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');

    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  }
};


onUnmounted(() => {
  // 移除FAQ事件监听器，防止内存泄漏
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.removeEventListener('click', toggleFaq);
  });
});

// 在onMounted中添加FAQ事件监听
onMounted(async () => {
  console.log('开始加载...')
  const phoneNumber = localStorage.getItem('phoneNumber');
  const email = localStorage.getItem('email');
  console.info('手机号:', phoneNumber)
  // 获取手机号
  phoneNumberRef.value = phoneNumber
  emailRef.value = email

  // 添加FAQ事件监听
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', toggleFaq);
  });

  try {
    console.log('开始加载阿里云认证SDK...')
    await loadAliyunAuthSDK()
    sdkLoaded.value = true
    loading.value = false
  } catch (err) {
    sdkLoaded.value = true
    loading.value = false
    error.value = 'SDK加载失败: ' + err.message
    console.error('SDK加载错误:', err)
  }

  if (route.query.step) {
    const step = parseInt(route.query.step);
    if (step >= 1 && step <= 3) {
      currentStep.value = step;
      await nextTick();
      updateProgress();
    }
  } else {
    currentStep.value = 1;
    await nextTick();
    updateProgress();
  }

  if (currentStep.value === 1) {
    // 后台查询已经保存的数据
    await loadStepDataFromDb()
  }

  console.log('当前步骤:', currentStep.value);
  if (currentStep.value === 2) {
    // 查询人脸认证结果
    const response0 = await getEkycResult()
    if (response0.code === 200 && response0.data) {
      faseAuth.value = response0.data
      formData.faceVerifyStatus = 2
    }
  }


});
</script>


<style scoped>
/* 步骤图标状态 */
.step-active {
  @apply border-primary bg-white text-primary;
}

.step-completed {
  @apply border-primary bg-primary text-white;
}

.step-pending {
  @apply border-neutral-300 bg-white text-neutral-500;
}

/* 进度线状态 */
.progress-line-active {
  @apply bg-primary;
}

.progress-line-pending {
  @apply bg-neutral-300;
}

/* 过渡效果 */
.progress-line {
  transition: all 0.5s ease;
}

.step-icon {
  transition: all 0.3s ease;
}

.hidden {
  display: none !important;
}
</style>