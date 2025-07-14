
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
            <p class="text-gray-600 mt-1">管理您的个人信息和联系方式</p>
          </div>

          <!-- 个人信息卡片 -->
          <div class="bg-white rounded-xl shadow-sm p-5 mb-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div class="flex items-center mb-4 md:mb-0">
                <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src="https://picsum.photos/id/64/200/200" alt="用户头像" class="w-full h-full object-cover">
                </div>
                <div>
                  <h3 class="font-semibold text-lg text-gray-800">张先生</h3>
                  <p class="text-sm text-gray-500">高级财富管理客户</p>
                  <p class="text-xs text-gray-500 mt-1">加入时间: 2023-05-12</p>
                </div>
              </div>
              <button id="edit-profile" @click.prevent="toggleEditMode"
                      class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <i class="fa fa-pencil mr-1"></i> 编辑信息
              </button>
            </div>

            <!-- 个人基本信息 -->
            <div id="profile-view" v-show="!isEditMode" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                  <p class="text-gray-900">张先生</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">年龄</label>
                  <p class="text-gray-900">35岁</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">手机号码</label>
                  <p class="text-gray-900">138****6789</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
                  <p class="text-gray-900">example@email.com</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">身份证号码</label>
                  <p class="text-gray-900">310************123</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">出生日期</label>
                  <p class="text-gray-900">1990-05-15</p>
                </div>
              </div>

              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">联系地址</label>
                <p class="text-gray-900">上海市浦东新区张江高科技园区博云路2号浦软大厦12层</p>
              </div>

              <div class="mt-4">
                <h4 class="font-medium text-gray-800 mb-3">紧急联系人</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">联系人姓名</label>
                    <p class="text-gray-900">李女士</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">关系</label>
                    <p class="text-gray-900">配偶</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">联系电话</label>
                    <p class="text-gray-900">139****1234</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
                    <p class="text-gray-900">emergency@email.com</p>
                  </div>
                </div>
              </div>

              <!-- 家庭状况信息 -->
              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="font-medium text-gray-800 mb-3">家庭状况信息</h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">婚姻状况</label>
                    <p class="text-gray-900">已婚</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">子女数量</label>
                    <p class="text-gray-900">2个</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">父母是否需要赡养</label>
                    <p class="text-gray-900">是</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">兄弟姊妹数量</label>
                    <p class="text-gray-900">2人（包括本人）</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">子女教育支出情况</label>
                    <p class="text-gray-900">每月约¥10,000</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">是否有房贷</label>
                    <p class="text-gray-900">是</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">房贷月供</label>
                    <p class="text-gray-900">¥15,000/月</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">家庭主要经济来源</label>
                    <p class="text-gray-900">夫妻双方工资收入</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 编辑个人信息表单 -->
            <div id="profile-edit" v-show="isEditMode" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                  <input type="text" value="张先生" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">年龄</label>
                  <input type="number" value="35" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">手机号码</label>
                  <input type="tel" value="13812346789" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
                  <input type="email" value="example@email.com" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">身份证号码</label>
                  <input type="text" value="310123199005151234" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">出生日期</label>
                  <input type="date" value="1990-05-15" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                </div>
              </div>

              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">联系地址</label>
                <textarea rows="3" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">上海市浦东新区张江高科技园区博云路2号浦软大厦12层</textarea>
              </div>

              <div class="mt-4">
                <h4 class="font-medium text-gray-800 mb-3">紧急联系人</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">联系人姓名</label>
                    <input type="text" value="李女士" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">关系</label>
                    <select class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                      <option value="spouse">配偶</option>
                      <option value="parent">父母</option>
                      <option value="child">子女</option>
                      <option value="friend">朋友</option>
                      <option value="other">其他</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">联系电话</label>
                    <input type="tel" value="13912341234" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">电子邮箱</label>
                    <input type="email" value="emergency@email.com" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                  </div>
                </div>
              </div>

              <!-- 家庭状况信息表单 -->
              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="font-medium text-gray-800 mb-3">家庭状况信息</h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">婚姻状况</label>
                    <select class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                      <option value="single">未婚</option>
                      <option value="married" selected>已婚</option>
                      <option value="divorced">离异</option>
                      <option value="widowed">丧偶</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">子女数量</label>
                    <input type="number" value="2" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">父母是否需要赡养</label>
                    <div class="flex space-x-4">
                      <label class="inline-flex items-center">
                        <input type="radio" name="supportParents" value="yes" checked class="form-radio h-5 w-5 text-primary focus:ring-primary">
                        <span class="ml-2">是</span>
                      </label>
                      <label class="inline-flex items-center">
                        <input type="radio" name="supportParents" value="no" class="form-radio h-5 w-5 text-primary focus:ring-primary">
                        <span class="ml-2">否</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">兄弟姊妹数量</label>
                    <input type="number" value="2" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">子女教育支出情况</label>
                    <input type="text" value="10000" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                    <p class="text-xs text-gray-500 mt-1">单位：元/月</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">是否有房贷</label>
                    <div class="flex space-x-4">
                      <label class="inline-flex items-center">
                        <input type="radio" name="hasMortgage" value="yes" checked class="form-radio h-5 w-5 text-primary focus:ring-primary">
                        <span class="ml-2">是</span>
                      </label>
                      <label class="inline-flex items-center">
                        <input type="radio" name="hasMortgage" value="no" class="form-radio h-5 w-5 text-primary focus:ring-primary">
                        <span class="ml-2">否</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">房贷月供</label>
                    <input type="text" value="15000" class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                    <p class="text-xs text-gray-500 mt-1">单位：元/月</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">家庭主要经济来源</label>
                    <select class="w-full rounded-lg border-gray-300 shadow-sm focus:ring-primary focus:border-primary form-input-focus">
                      <option value="salary">工资收入</option>
                      <option value="business" selected>经营收入</option>
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
                        class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  取消
                </button>
                <button id="save-profile"
                        @click.prevent="saveProfile"
                        class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  保存更改
                </button>
              </div>
            </div>

            <!-- 安全设置 -->
            <div class="bg-white rounded-xl shadow-sm p-5 mb-6">
              <h3 class="font-semibold text-gray-800 mb-4">安全设置</h3>

              <div class="space-y-4">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-gray-200 rounded-lg hover:border-primary/50 transition-colors">
                  <div>
                    <h4 class="font-medium text-gray-800">登录密码</h4>
                    <p class="text-sm text-gray-500 mt-1">最后修改: 2025-05-20</p>
                  </div>
                  <button class="mt-2 md:mt-0 px-4 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                    修改密码
                  </button>
                </div>

                <div class="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-gray-200 rounded-lg hover:border-primary/50 transition-colors">
                  <div>
                    <h4 class="font-medium text-gray-800">支付密码</h4>
                    <p class="text-sm text-gray-500 mt-1">已设置 · 最后修改: 2025-05-20</p>
                  </div>
                  <button class="mt-2 md:mt-0 px-4 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                    修改支付密码
                  </button>
                </div>

                <div class="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-gray-200 rounded-lg hover:border-primary/50 transition-colors">
                  <div>
                    <h4 class="font-medium text-gray-800">绑定手机号</h4>
                    <p class="text-sm text-gray-500 mt-1">已绑定: 138****6789</p>
                  </div>
                  <button class="mt-2 md:mt-0 px-4 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                    更换手机号
                  </button>
                </div>

                <div class="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-gray-200 rounded-lg hover:border-primary/50 transition-colors">
                  <div>
                    <h4 class="font-medium text-gray-800">邮箱验证</h4>
                    <p class="text-sm text-gray-500 mt-1">已验证: example@email.com</p>
                  </div>
                  <button class="mt-2 md:mt-0 px-4 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                    更换邮箱
                  </button>
                </div>

                <div class="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-gray-200 rounded-lg hover:border-primary/50 transition-colors">
                  <div>
                    <h4 class="font-medium text-gray-800">实名认证</h4>
                    <p class="text-sm text-gray-500 mt-1">已认证 · 姓名: 张先生 · 身份证: 310************123</p>
                  </div>
                  <button class="mt-2 md:mt-0 px-4 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                    查看详情
                  </button>
                </div>
              </div>
            </div>
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


<script setup lang="ts">
import Header from '@/components/client/Header.vue'
import { ref } from 'vue'
// 响应式状态
const isEditMode = ref(false)

// 编辑模式切换
const toggleEditMode = () => {
  console.log('编辑模式切换！')
  isEditMode.value = !isEditMode.value
}

// 保存个人信息
const saveProfile = () => {
  // 这里可以添加保存逻辑
  console.log('个人信息已保存！')
  isEditMode.value = false
}

</script>


<style scoped>

</style>