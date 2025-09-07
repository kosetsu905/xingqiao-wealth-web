<template>
  <div class="auth-container">
    <div v-if="loading" class="loading">
      <p>正在加载认证SDK并初始化...</p>
    </div>

    <div v-else-if="sdkLoaded && error" class="error">
      <p>{{ error }}</p>
      <button @click="retry">重试</button>
    </div>

    <div v-else-if="sdkLoaded && certifyUrl" class="success">
      <p>认证初始化成功，即将跳转到认证页面...</p>
      <button @click="redirectToAuth" class="redirect-btn">立即跳转</button>
    </div>

    <div v-else-if="sdkLoaded && !certifyUrl && !error" class="initiating">
      <p>SDK已加载，正在初始化认证...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {getEkycReturnUrlDemo} from "@/api/clientEkyc.js";

// 响应式数据
const loading = ref(true)
const sdkLoaded = ref(false)
const error = ref(null)
const certifyUrl = ref(null)
const metaInfo = ref(null)

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
    }
  } catch (err) {
    error.value = '获取 MetaInfo 失败: ' + err.message
    console.error('获取 MetaInfo 错误:', err)
    throw err
  }
}

const fetchCertifyUrl = async () => {
  try {
    if (!metaInfo.value) {
      metaInfo.value = getMetaInfo()
    }

    console.log('发送认证初始化请求，MetaInfo:', metaInfo.value)

    const response = await getEkycReturnUrlDemo(JSON.stringify(metaInfo.value));
    if (response.code===200) {
      const data=response.data;
      console.log('认证初始化数据:', data)
      certifyUrl.value = response.data;
    }

  } catch (err) {
    error.value = '获取认证链接失败: ' + err.message
    console.error('获取认证链接错误:', err)
  } finally {
    loading.value = false
  }
}
// 请求认证业务接口获取 CertifyUrl

// 跳转到认证页面
const redirectToAuth = () => {
  if (certifyUrl.value) {
    console.log('跳转到认证页面:', certifyUrl.value)
    window.location.href = certifyUrl.value
  }
}

// 重试
const retry = () => {
  error.value = null
  certifyUrl.value = null
  loading.value = true
  fetchCertifyUrl()
}

// 组件挂载时执行
onMounted(async () => {
  try {
    console.log('开始加载阿里云认证SDK...')
    await loadAliyunAuthSDK()
    sdkLoaded.value = true
    loading.value = false

    // SDK加载成功后初始化认证
    if (sdkLoaded.value) {
      await fetchCertifyUrl()
    }
  } catch (err) {
    sdkLoaded.value = true
    loading.value = false
    error.value = 'SDK加载失败: ' + err.message
    console.error('SDK加载错误:', err)
  }
})
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  padding: 20px;
}

.loading, .error, .success, .initiating {
  text-align: center;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.loading {
  background-color: #e3f2fd;
  color: #1976d2;
}

.error {
  background-color: #ffebee;
  color: #c62828;
}

.success {
  background-color: #e8f5e8;
  color: #2e7d32;
}

.initiating {
  background-color: #fff3e0;
  color: #f57c00;
}

button {
  margin-top: 15px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}

.redirect-btn {
  background-color: #4caf50;
  color: white;
}

.redirect-btn:hover {
  background-color: #45a049;
}

button[type="button"] {
  background-color: #2196f3;
  color: white;
}

button[type="button"]:hover {
  background-color: #1976d2;
}

/* 响应式设计 */
@media (max-width: 480px) {
  .auth-container {
    padding: 10px;
  }

  .loading, .error, .success, .initiating {
    padding: 20px;
  }
}
</style>