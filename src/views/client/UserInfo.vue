
<template>
  <div class="font-inter bg-gray-50 text-gray-800 min-h-screen flex flex-col">
    <!-- 顶部导航栏 -->
    <Header/>

    <div class="flex flex-1 overflow-hidden">
      <!-- 主内容区 -->
      <main class="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-6">
        <div class="max-w-7xl mx-auto">
          <!-- 页面标题 -->
          <div class="mb-6">
            <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-800">个人基本信息</h1>
          </div>

          <!-- 个人信息卡片 -->
          <div class="bg-white rounded-xl shadow-sm p-5 mb-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div class="flex items-center mb-4 md:mb-0">
                <div class="w-16 h-16 rounded-full overflow-hidden mr-4" @click="uploadClientAvatar">
                  <img :src="customerInfo.avatar || defaultAvatar" alt="用户头像" class="w-full h-full object-cover">
                  <input
                      ref="avatarInput"
                      type="file"
                      class="hidden"
                      accept="image/*"
                      @change="handleAvatarUpload"
                  >
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-gray-800">{{ customerInfo.fullName || '' }}</h3>
                  <p class="text-xs text-gray-500 mt-1">加入时间: {{ formatDate(customerInfo.createTime) || '' }}</p>
                </div>
              </div>
              <button id="edit-profile" @click.prevent="toggleEditMode"
                      class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <i class="fa fa-pencil mr-1"></i> {{ isEditMode ? '取消编辑' : '编辑信息' }}
              </button>
            </div>

            <!-- 个人基本信息 -->
            <div id="profile-view" v-show="!isEditMode" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                  <p class="text-gray-900">{{ customerInfo.fullName || '' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">年龄</label>
                  <p class="text-gray-900">{{ customerInfo.age ? customerInfo.age + '岁' : '' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">手机号码</label>
                  <p class="text-gray-900">{{ formatPhoneNumber(customerInfo.phoneNumber) || '' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
                  <p class="text-gray-900">{{ customerInfo.email || '' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">身份证号码</label>
                  <p class="text-gray-900">{{ formatIdNumber(customerInfo.idNumber) || '' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">出生日期</label>
                  <p class="text-gray-900">{{ formatDate(customerInfo.birthDay) || '' }}</p>
                </div>
              </div>

              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">联系地址</label>
                <p class="text-gray-900">{{ customerInfo.address || '' }}</p>
              </div>

              <!-- 家庭状况信息 -->
              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="font-medium text-gray-800 mb-3">家庭状况信息</h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">婚姻状况</label>
                    <p class="text-gray-900">{{ formatMaritalStatus(customerInfo.maritalStatus) }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">子女数量</label>
                    <p class="text-gray-900">{{ customerInfo.childCount ? customerInfo.childCount + '个' : '' }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">父母是否需要赡养</label>
                    <p class="text-gray-900">{{ formatSupportStatus(customerInfo.requiresSupport) }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">兄弟姊妹数量</label>
                    <p class="text-gray-900">{{ customerInfo.familyCount ? customerInfo.familyCount + '人（包括本人）' : '' }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">子女教育支出情况</label>
                    <p class="text-gray-900">{{ customerInfo.childrenEducationExpense ? '每月约¥' + formatCurrency(customerInfo.childrenEducationExpense) : '' }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">是否有房贷</label>
                    <p class="text-gray-900">{{ formatMortgageStatus(customerInfo.hasMortgage) }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">房贷月供</label>
                    <p class="text-gray-900">{{ customerInfo.monthlyMortgagePayment ? '¥' + formatCurrency(customerInfo.monthlyMortgagePayment) + '/月' : '' }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">家庭主要经济来源</label>
                    <p class="text-gray-900">{{ formatIncomeSource(customerInfo.primaryIncomeSource) }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 编辑个人信息表单 -->
            <form id="profile-edit" v-show="isEditMode" @submit.prevent="saveProfile" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                  <p class="text-gray-900">{{ customerInfo.fullName || '' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">年龄</label>
                  <p class="text-gray-900">{{ customerInfo.age ? customerInfo.age + '岁' : '' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">手机号码</label>
                  <p class="text-gray-900">{{ formatPhoneNumber(customerInfo.phoneNumber) || '' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
                  <p class="text-gray-900">{{ customerInfo.email || '' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">身份证号码</label>
                  <p class="text-gray-900">{{ formatIdNumber(customerInfo.idNumber) || '' }}</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">出生日期</label>
                  <p class="text-gray-900">{{ formatDate(customerInfo.birthDay) || '' }}</p>
                </div>
              </div>

              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">联系地址</label>
                <textarea v-model="customerInfo.address" rows="3" class="w-full rounded-lg border-2 border-order-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus"></textarea>
              </div>


              <!-- 家庭状况信息表单 -->
              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="font-medium text-gray-800 mb-3">家庭状况信息</h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">婚姻状况</label>
                    <select v-model="customerInfo.maritalStatus" class="w-full rounded-lg border-2 border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                      <option value="">请选择</option>
                      <option value="SINGLE">未婚</option>
                      <option value="MARRIED">已婚</option>
                      <option value="DIVORCED">离异</option>
                      <option value="WIDOWED">丧偶</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">子女数量</label>
                    <input type="number" v-model="customerInfo.childCount" class="w-full rounded-lg border-2 border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">父母是否需要赡养</label>
                    <div class="flex space-x-4">
                      <label class="inline-flex items-center">
                        <input type="radio" v-model="customerInfo.requiresSupport" value="1" class="form-radio h-5 w-5 text-primary focus:ring-primary">
                        <span class="ml-2">是</span>
                      </label>
                      <label class="inline-flex items-center">
                        <input type="radio" v-model="customerInfo.requiresSupport" value="2" class="form-radio h-5 w-5 text-primary focus:ring-primary">
                        <span class="ml-2">否</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">兄弟姊妹数量</label>
                    <input type="number" v-model="customerInfo.familyCount" class="w-full rounded-lg border-2 border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">子女教育支出情况</label>
                    <input type="text" v-model="customerInfo.childrenEducationExpense" class="w-full rounded-lg border-2 border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                    <p class="text-xs text-gray-500 mt-1">单位：元/月</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">是否有房贷</label>
                    <div class="flex space-x-4">
                      <label class="inline-flex items-center">
                        <input type="radio" v-model="customerInfo.hasMortgage" value="1" class="form-radio h-5 w-5 text-primary focus:ring-primary">
                        <span class="ml-2">是</span>
                      </label>
                      <label class="inline-flex items-center">
                        <input type="radio" v-model="customerInfo.hasMortgage" value="2" class="form-radio h-5 w-5 text-primary focus:ring-primary">
                        <span class="ml-2">否</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">房贷月供</label>
                    <input type="text" v-model="customerInfo.monthlyMortgagePayment" class="w-full rounded-lg border-2 border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                    <p class="text-xs text-gray-500 mt-1">单位：元/月</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">家庭主要经济来源</label>
                    <select v-model="customerInfo.primaryIncomeSource" class="w-full rounded-lg border-2 border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                      <option value="">请选择</option>
                      <option value="salary">工资收入</option>
                      <option value="business">经营收入</option>
                      <option value="investment">投资收入</option>
                      <option value="pension">退休金</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="flex justify-end space-x-3 mt-6">
                <button id="cancel-edit"
                        @click.prevent="toggleEditMode"
                        type="button"
                        class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  取消
                </button>
                <button id="save-profile"
                        type="submit"
                        class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  保存更改
                </button>
              </div>
            </form>

          </div>
        </div>
      </main>
    </div>
    <footer class="bg-white border-t border-gray-200 py-4">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-center md:text-left mb-4 md:mb-0">
            <p class="text-sm text-gray-500">© 2025 WealthPulse 财富管理平台. 保留所有权利.</p>
          </div>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-500 hover:text-primary">
              <i class="fa fa-weibo"></i>
            </a>
            <a href="#" class="text-gray-500 hover:text-primary">
              <i class="fa fa-wechat"></i>
            </a>
            <a href="#" class="text-gray-500 hover:text-primary">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Header from '@/components/client/Header.vue'
import {onMounted, ref} from 'vue'
import {getClientCustomerInfo, saveClientCustomerInfo} from '@/api/customer.js'
import {useToast} from '@/composables/useToast.js'
import {uploadFile} from "@/api/file.js";
import {uploadAvatar} from "@/api/employee.js";

const { successToast, errorToast } = useToast()
const avatarInput = ref(null)
const defaultAvatar=ref('https://picsum.photos/seed/idcard/400/250')

// 响应式状态
const isEditMode = ref(false)
const customerInfo = ref({
  fullName: '',
  age: '',
  phoneNumber: '',
  email: '',
  idNumber: '',
  birthDay: '',
  address: '',
  maritalStatus: '',
  childCount: '',
  requiresSupport: '',
  familyCount: '',
  childrenEducationExpense: '',
  hasMortgage: '',
  monthlyMortgagePayment: '',
  primaryIncomeSource: ''
})

// 格式化手机号
const formatPhoneNumber = (phone) => {
  if (!phone) return ''
  // 隐藏中间4位数字
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

// 格式化身份证号
const formatIdNumber = (idNumber) => {
  if (!idNumber) return ''
  // 隐藏中间部分数字
  return idNumber.replace(/(\d{6})\d+(\d{3}[\dXx])/, '$1*********$2')
}

// 格式化日期
const formatDate = (date) => {
  if (!date) return ''
  if (typeof date === 'string') {
    return date.split(' ')[0]
  }
  return date
}

// 格式化金额
const formatCurrency = (amount) => {
  if (!amount) return '0'
  return parseFloat(amount).toLocaleString('zh-CN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
}

// 格式化婚姻状况
const formatMaritalStatus = (status) => {
  const statusMap = {
    'SINGLE': '未婚',
    'MARRIED': '已婚',
    'DIVORCED': '离异',
    'WIDOWED': '丧偶'
  }
  return statusMap[status] || status || ''
}

// 格式化赡养状态
const formatSupportStatus = (status) => {
  const statusMap = {
    '1': '是',
    '2': '否'
  }
  return statusMap[status] || ''
}

// 格式化房贷状态
const formatMortgageStatus = (status) => {
  const statusMap = {
    '1': '是',
    '2': '否'
  }
  return statusMap[status] || ''
}

// 格式化收入来源
const formatIncomeSource = (source) => {
  const sourceMap = {
    'salary': '工资收入',
    'business': '经营收入',
    'investment': '投资收入',
    'pension': '退休金',
    'other': '其他'
  }
  return sourceMap[source] || source || ''
}

// 编辑模式切换
const toggleEditMode = () => {
  console.log('编辑模式切换！')
  isEditMode.value = !isEditMode.value
  // 进入编辑模式时，将当前信息复制到编辑表单
  if (isEditMode.value) {
    // 创建一个副本而不是直接引用
    customerInfo.value = { ...customerInfo.value }
  }
}
const uploadClientAvatar = async () => {
  if (avatarInput.value) {
    avatarInput.value.click()
  }
}
// 保存个人信息
const saveProfile = async () => {
  try {
    const data={
      ... customerInfo.value,
      avatar: customerInfo.value.avatar || defaultAvatar.value
    }
    const response = await saveClientCustomerInfo(data)
    if (response.code === 200) {
      successToast('个人信息保存成功')
      isEditMode.value = false
    } else {
      errorToast(response.msg || '保存失败')
    }
  } catch (error) {
    console.error('保存个人信息异常:', error)
    errorToast('保存个人信息异常')
  }
}

// 获取客户信息
const fetchCustomerInfo = async () => {
  try {
    const response = await getClientCustomerInfo()
    if (response.code === 200 && response.data) {
      customerInfo.value = { ...customerInfo.value, ...response.data }
      console.log('获取客户信息成功:', response.data)
    } else {
      errorToast(response.msg || '获取客户信息失败')
    }
  } catch (error) {
    console.error('获取客户信息异常:', error)
    errorToast('获取客户信息异常')
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

// 组件挂载时获取客户信息
onMounted(() => {
  fetchCustomerInfo()
})

</script>


<style scoped>

</style>