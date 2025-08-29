
<template>
  <!-- Header -->
  <Header/>
  <!-- 主要内容 -->
  <!-- 主要内容 -->
  <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
    <!-- 页面标题 -->
    <div class="mb-6">
      <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark">个人信息</h1>
    </div>
    <!-- 个人信息卡片 -->
    <div class="bg-white rounded-xl shadow-md overflow-hidden mb-12">
      <div class="grid md:grid-cols-3">
        <!-- 左侧个人信息 -->
        <div class="bg-primary text-white p-10 md:border-r border-gray-200">
          <div class="flex flex-col items-center">
            <!-- 头像上传区域 -->
            <div class="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white/20 group">
              <img
                  :src="userInfo.avatar || defaultAvatar"
                  alt="用户头像"
                  class="w-full h-full object-cover"
              >
              <div
                  v-if="isEditing"
                  class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  @click="triggerAvatarUpload"
              >
                <i class="fa fa-camera text-white text-xl"></i>
              </div>
              <input
                  ref="avatarInput"
                  type="file"
                  class="hidden"
                  accept="image/*"
                  @change="handleAvatarUpload"
              >
            </div>

            <h2 class="text-2xl font-bold mb-2">{{ userInfo.fullName || '未设置姓名' }}</h2>
            <p class="text-white/80 mb-6">{{ userInfo.position || '职位未设置' }}</p>

            <div class="w-full space-y-4">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <i class="fa fa-id-card-o"></i>
                </div>
                <span>员工编号: {{ userInfo.userId || '未设置' }}</span>
              </div>
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <i class="fa fa-calendar"></i>
                </div>
                <span>入职日期: {{ userInfo.hireDate || '未设置' }}</span>
              </div>
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <i class="fa fa-users"></i>
                </div>
                <span>管理客户: {{ userInfo.clientCount || 0 }}</span>
              </div>
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <i class="fa fa-money"></i>
                </div>
                <span>管理资产: {{ formatAsset(userInfo.managedAssets) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧个人详情 -->
        <div class="md:col-span-2 p-8">
          <div class="mb-8">
            <h3 class="text-xl font-bold mb-6 text-dark">基本信息</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-600 mb-2">姓名</label>
                <p class="text-dark font-medium">{{ userInfo.fullName || '未设置' }}</p>
              </div>
              <div>
                <label class="block text-gray-600 mb-2">邮箱</label>
                <p class="text-dark font-medium">{{ userInfo.email || '未设置' }}</p>
              </div>
              <div>
                <label class="block text-gray-600 mb-2">电话</label>
                <p class="text-dark font-medium">{{ userInfo.phoneNumber || '未设置' }}</p>
              </div>
              <div>
                <label class="block text-gray-600 mb-2">部门</label>
                <p class="text-dark font-medium">{{ userInfo.deptName || '未设置' }}</p>
              </div>
              <div>
                <label class="block text-gray-600 mb-2">职级</label>
                <p class="text-dark font-medium">{{ userInfo.level || '未设置' }}</p>
              </div>
            </div>
          </div>

          <div class="mb-8">
            <h3 class="text-xl font-bold mb-6 text-dark">专业资质</h3>
            <div class="space-y-4">
              <div
                  v-for="(qualification, index) in userInfo.qualifications"
                  :key="index"
                  class="flex items-start"
              >
                <img v-if="qualification.certificateFileUrls[0]"
                     :src="qualification.certificateFileUrls[0]" alt="资质证书" class="w-8 h-8 rounded-full object-cover border-2 border-primary/20" />

                <div>
                  <h4 class="font-medium text-dark">{{ qualification.qualificationType }}</h4>
                  <p class="text-gray-600">{{ qualification.certificateNumber }}</p>
                </div>
              </div>

              <!-- 如果没有资质信息，显示提示 -->
              <div v-if="!userInfo.qualifications || userInfo.qualifications.length === 0" class="text-center py-4 text-gray-500">
                暂无专业资质信息
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
  <!-- 使用全局返回顶部组件 -->
  <BackToTop />

</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from "@/components/agency/Header.vue"
import { useToast } from "@/composables/useToast.js"
import {getSystemInfo, uploadAvatar} from "@/api/employ.js"
import {uploadFile} from "@/api/file.js";
import cache from "@/plugins/cache.js";

// 头像上传相关
const avatarInput = ref(null)
const defaultAvatar=ref('https://picsum.photos/seed/idcard/400/250')
// 用户信息数据
const userInfo = ref({
  avatar: '',
  fullName: '',
  position: '',
  userId: '',
  hireDate: '',
  clientCount: 0,
  managedAssets: 0,
  email: '',
  phoneNumber: '',
  deptName: '',
  level: '',
  qualifications: []
});

// 编辑状态（可以根据需要添加编辑功能）
const isEditing = ref(true)

const { successToast, errorToast } = useToast()

// 触发头像上传
const triggerAvatarUpload = () => {
  if (avatarInput.value) {
    avatarInput.value.click()
  }
}


// 处理头像上传
const handleAvatarUpload = async (event) => {
  const file = event.target.files?.[0]

  if (!file) return

  // 验证文件类型
  if (!file.type.startsWith('image/')) {
    errorToast('请选择图片文件')
    // 清空文件输入框
    if (avatarInput.value) {
      avatarInput.value.value = ''
    }
    return
  }

  // 验证文件大小（限制为5MB）
  if (file.size > 5 * 1024 * 1024) {
    errorToast('图片大小不能超过5MB')
    // 清空文件输入框
    if (avatarInput.value) {
      avatarInput.value.value = ''
    }
    return
  }

  try {
    // 上传头像
    const formData = new FormData()
    formData.append('file', file)

    const response = await uploadFile(formData)

    if (response.code === 200) {
      // 更新用户头像
      userInfo.value.avatar = response.data
      defaultAvatar.value = response.data
      //保存路径到后台
      const sysFile={
        url: response.data,
        name: file.name
      }
      const response1 =await uploadAvatar(sysFile);
      if (response1.code === 200) {
        successToast('头像上传成功')
      } else {
        errorToast(response.msg || '头像上传失败')
      }
    } else {
      errorToast(response.msg || '头像上传失败')
    }
  } catch (error) {
    console.error('头像上传失败:', error)
    errorToast('头像上传失败，请重试')
  } finally {
    // 清空文件输入框，以便下次选择同一文件也能触发change事件
    if (avatarInput.value) {
      avatarInput.value.value = ''
    }
  }
}
// 格式化资产管理规模
const formatAsset = (asset) => {
  if (!asset) return '$0'

  if (asset >= 1000000) {
    return `$${(asset / 1000000).toFixed(1)}M`
  } else if (asset >= 1000) {
    return `$${(asset / 1000).toFixed(1)}K`
  }
  return `$${asset}`
}

// 获取用户信息
const fetchUserInfo = async () => {
  try {
    const response = await getSystemInfo()
    if (response.code === 200) {
      if(response.data!=null){
        userInfo.value = {
          ...userInfo.value,
          ...response.data,
          // 特殊处理资质信息
          qualifications: response.data.qualifications || []
        }
      }else{
        successToast('用户消息为空！')
      }

    } else {
      errorToast(response.msg || '获取用户信息失败')
    }
  } catch (error) {
    console.error('获取用户信息失败:', error)
    errorToast('获取用户信息失败，请重试')
  }
}

// 组件挂载时获取用户信息
onMounted(() => {
  fetchUserInfo()
})

</script>

<style scoped>
/* 添加头像上传区域的悬停效果 */
.group:hover .absolute {
  opacity: 1;
}
</style>



<style scoped>/* 添加头像上传区域的悬停效果 */
.group:hover .absolute {
  opacity: 1;
}
</style>