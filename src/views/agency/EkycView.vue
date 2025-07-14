<template>
  <div class="font-inter bg-light-2 text-dark min-h-screen flex flex-col">
    <!-- Header -->
    <Header/>

    <!-- 主内容区 -->
    <main class="flex-1 overflow-y-auto p-6">
      <div class="container mx-auto">
        <!-- 页面标题 -->
        <div class="mb-8">
          <h1 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark">金融顾问电子认证 (EKYC)</h1>
          <p class="text-dark-3 mt-2">完成您的电子身份验证，获取专业金融顾问资格</p>
        </div>

        <!-- 认证进度 -->
        <div class="bg-white rounded-xl p-6 card-shadow mb-8">
          <div class="flex flex-col md:flex-row items-center justify-between mb-6">
            <div>
              <h2 class="text-xl font-semibold text-dark">认证进度</h2>
              <p class="text-dark-3 mt-1">请完成以下步骤以获取认证资格</p>
            </div>
            <div class="mt-4 md:mt-0 flex items-center">
              <span class="text-dark-3 mr-2">当前状态：</span>
              <span class="px-3 py-1 rounded-full bg-warning/10 text-warning text-sm font-medium">
                {{ currentStatus }}
              </span>
            </div>
          </div>

          <div class="relative">
            <!-- 进度条 -->
            <div class="hidden md:block h-1 bg-light-1 rounded-full absolute top-5 left-0 right-0 z-0"></div>
            <div :class="['hidden md:block h-1 rounded-full absolute top-5 left-0 z-10', progressBarClass]"
                 :style="progressBarStyle"></div>

            <!-- 进度点 -->
            <div class="flex flex-wrap justify-between">
              <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center text-center mb-4 md:mb-0">
                <div :class="['w-12 h-12 rounded-full flex items-center justify-center mb-2 relative z-20', step.active ? 'bg-primary text-white' : 'bg-light-1 text-dark-3']">
                  <i :class="step.icon"></i>
                </div>
                <span :class="['text-sm font-medium', step.active ? 'text-primary' : 'text-dark-3']">{{ step.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 认证表单 -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <!-- 表单部分 -->
          <div class="bg-white rounded-xl p-6 card-shadow lg:col-span-2">

            <!-- 个人信息部分 -->
            <div v-show="currentSection === 'personal'" class="form-section">
              <h2 class="text-lg font-semibold text-dark mb-6">个人信息</h2>
              <form class="space-y-6">
                <!-- 个人信息 -->
                <div class="bg-light-2/50 p-4 rounded-lg">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        账户名称
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="text"
                             v-model="form.accountName"
                             ref="accountNameRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom" placeholder="请输入账户名称">
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        全名
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="text" v-model="form.fullName"
                             ref="fullNameRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom" placeholder="请输入全名">
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        年龄
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="number" v-model="form.age"
                             ref="ageRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom" placeholder="请输入年龄" min="0">
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        手机号码
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="tel" v-model="form.phoneNumber"
                             ref="phoneNumberRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom" placeholder="请输入手机号码">
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        电子邮箱
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="email" v-model="form.email"
                             ref="emailRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom" placeholder="请输入电子邮箱">
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        上级经理
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="text" v-model="form.manager"
                             ref="managerRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom" placeholder="请输入上级经理姓名">
                    </div>
                    <div class="md:col-span-2">
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        地址
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="text" v-model="form.address"
                             ref="addressRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom" placeholder="请输入地址">
                    </div>
                  </div>
                </div>
                <!-- 提交按钮 -->
                <div class="flex justify-between">
                  <button type="button" @click="goToIdentity"
                          :class="['px-6 py-2 rounded-lg transition-custom', canProceedToIdentity ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-light-2 text-dark-3 cursor-not-allowed']">
                    下一步<i class="fa fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </form>
            </div>

            <!-- 身份验证部分 -->
            <div v-show="currentSection === 'identity'" class="form-section">
              <h2 class="text-lg font-semibold text-dark mb-6">
                身份验证
              </h2>
              <form class="space-y-6">
                <!-- 身份证件信息 -->
                <div class="bg-light-2/50 p-4 rounded-lg">
                  <h3 class="font-medium text-dark mb-4">
                    身份证件信息
                  </h3>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        证件类型
                        <span class="text-red-500">*</span>
                      </label>
                      <select v-model="form.idType"
                              ref="idTypeRef"
                              class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom">
                        <option value="passport">护照</option>
                        <option value="idCard">身份证</option>
                        <option value="driverLicense">驾照</option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        证件号码
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="text" v-model="form.idNumber"
                             ref="idNumberRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom" placeholder="请输入证件号码">
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        颁发日期
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="date" v-model="form.issueDate"
                             ref="issueDateRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom">
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        有效期至
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="date" v-model="form.expiryDate"
                             ref="expiryDateRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom">
                    </div>
                  </div>
                </div>

                <!-- 证件照片上传 -->
                <div class="bg-light-2/50 p-4 rounded-lg">
                  <h3 class="font-medium text-dark mb-4">
                    证件照片上传
                  </h3>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        证件正面照
                        <span class="text-red-500">*</span>
                      </label>
                      <div class="border-2 border-dashed border-light-1 rounded-lg p-4 text-center hover:border-primary transition-custom cursor-pointer">
                        <input type="file" class="hidden" id="front-id-upload"
                               @change="handleFrontIdUpload"
                               ref="frontIdFileRef">
                        <label for="front-id-upload" class="cursor-pointer">
                          <i class="fa fa-cloud-upload text-2xl text-dark-3 mb-2"></i>
                          <p class="text-sm text-dark-3">点击上传或拖拽文件到此处</p>
                          <p class="text-xs text-dark-3 mt-1">支持 JPG, PNG 格式，最大 5MB</p>
                          <p v-if="form.frontIdFile" class="text-xs text-primary mt-1">{{ form.frontIdFile.name }}</p>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        证件反面照
                        <span class="text-red-500">*</span>
                      </label>
                      <div class="border-2 border-dashed border-light-1 rounded-lg p-4 text-center hover:border-primary transition-custom cursor-pointer">
                        <input type="file" class="hidden"
                               id="back-id-upload"
                               ref="backIdFileRef"
                               @change="handleBackIdUpload">
                        <label for="back-id-upload" class="cursor-pointer">
                          <i class="fa fa-cloud-upload text-2xl text-dark-3 mb-2"></i>
                          <p class="text-sm text-dark-3">点击上传或拖拽文件到此处</p>
                          <p class="text-xs text-dark-3 mt-1">支持 JPG, PNG 格式，最大 5MB</p>
                          <p v-if="form.backIdFile" class="text-xs text-primary mt-1">{{ form.backIdFile.name }}</p>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="identity-confirmation"
                               v-model="form.identityConfirmed"
                               ref="identityConfirmedRef"
                               type="checkbox" class="w-4 h-4 border border-light-1 rounded focus:ring-primary">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="identity-confirmation" class="text-dark-3">我确认上传的证件照片真实有效，与本人身份一致</label>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 提交按钮 -->
                <div class="flex justify-between">
                  <button type="button" @click="backToPersonal" class="px-6 py-2 bg-light-2 text-dark-2 rounded-lg hover:bg-light-1 transition-custom">
                    <i class="fa fa-arrow-left mr-2"></i>
                    上一步
                  </button>
                  <button type="button" @click="goToProfessional"
                          :class="['px-6 py-2 rounded-lg transition-custom', canProceedToProfessional ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-light-2 text-dark-3 cursor-not-allowed']">
                    下一步<i class="fa fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </form>
            </div>

            <!-- 专业资质部分 -->
            <div v-show="currentSection === 'professional'" class="form-section">
              <h2 class="text-lg font-semibold text-dark mb-6">专业资质认证</h2>

              <form class="space-y-6">
                <!-- 专业资质信息 -->
                <div class="bg-light-2/50 p-4 rounded-lg">
                  <h3 class="font-medium text-dark mb-4">专业资质信息</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        资质类型
                        <span class="text-red-500">*</span>
                      </label>
                      <select v-model="form.qualificationType"
                              ref="qualificationTypeRef"
                              class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom">
                        <option value="cfp">金融理财师(CFP)</option>
                        <option value="cfa">注册金融分析师(CFA)</option>
                        <option value="cwc">特许财富顾问(CWC)</option>
                        <option value="cpa">注册会计师(CPA)</option>
                        <option value="other">其他</option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        资质证书编号
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="text" v-model="form.certificateNumber"
                             ref="certificateNumberRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom" placeholder="请输入证书编号">
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        颁发机构
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="text" v-model="form.issuingAuthority"
                             ref="issuingAuthorityRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom" placeholder="请输入颁发机构名称">
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        颁发日期
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="date" v-model="form.certificateIssueDate"
                             ref="certificateIssueDateRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom">
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        有效期至
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="date" v-model="form.certificateExpiryDate"
                             ref="certificateExpiryDateRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom">
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        执业年限
                        <span class="text-red-500">*</span>
                      </label>
                      <input type="number" v-model="form.yearsOfPractice"
                             ref="yearsOfPracticeRef"
                             class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom" placeholder="请输入执业年限" min="0">
                    </div>
                  </div>
                </div>

                <!-- 资质证书上传 -->
                <div class="bg-light-2/50 p-4 rounded-lg">
                  <h3 class="font-medium text-dark mb-4">资质证书上传</h3>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        资质证书照片
                        <span class="text-red-500">*</span>
                      </label>
                      <div class="border-2 border-dashed border-light-1 rounded-lg p-4 text-center hover:border-primary transition-custom cursor-pointer">
                        <input type="file" class="hidden"
                               id="certificate-upload"
                               ref="certificateFileRef"
                               @change="handleCertificateUpload">
                        <label for="certificate-upload" class="cursor-pointer">
                          <i class="fa fa-cloud-upload text-2xl text-dark-3 mb-2"></i>
                          <p class="text-sm text-dark-3">点击上传或拖拽文件到此处</p>
                          <p class="text-xs text-dark-3 mt-1">支持 JPG, PNG, PDF 格式，最大 10MB</p>
                          <p v-if="form.certificateFile" class="text-xs text-primary mt-1">{{ form.certificateFile.name }}</p>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        执业证明文件
                        <span class="text-red-500">*</span>
                      </label>
                      <div class="border-2 border-dashed border-light-1 rounded-lg p-4 text-center hover:border-primary transition-custom cursor-pointer">
                        <input type="file" class="hidden"
                               id="practice-certificate-upload"
                               ref="practiceCertificateFileRef"
                               @change="handlePracticeCertificateUpload">
                        <label for="practice-certificate-upload" class="cursor-pointer">
                          <i class="fa fa-cloud-upload text-2xl text-dark-3 mb-2"></i>
                          <p class="text-sm text-dark-3">点击上传或拖拽文件到此处</p>
                          <p class="text-xs text-dark-3 mt-1">支持 JPG, PNG, PDF 格式，最大 10MB</p>
                          <p v-if="form.practiceCertificateFile" class="text-xs text-primary mt-1">{{ form.practiceCertificateFile.name }}</p>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="professional-confirmation"
                               ref="professionalConfirmedRef"
                               v-model="form.professionalConfirmed"
                               type="checkbox" class="w-4 h-4 border border-light-1 rounded focus:ring-primary">
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="professional-confirmation" class="text-dark-3">我确认上传的专业资质文件真实有效，与本人信息一致</label>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 专业经验描述 -->
                <div class="bg-light-2/50 p-4 rounded-lg">
                  <h3 class="font-medium text-dark mb-4">专业经验描述</h3>
                  <div>
                    <label class="block text-sm font-medium text-dark-3 mb-1">请简要描述您的金融行业从业经验和专业特长</label>
                    <textarea rows="4" v-model="form.professionalExperience"
                              class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom" placeholder="请输入您的专业经验描述（至少100字）"></textarea>
                  </div>
                </div>

                <!-- 提交按钮 -->
                <div class="flex justify-between">
                  <button type="button" @click="backToIdentity" class="px-6 py-2 bg-light-2 text-dark-2 rounded-lg hover:bg-light-1 transition-custom">
                    <i class="fa fa-arrow-left mr-2"></i>
                    上一步
                  </button>
                  <button type="button" @click="submitForm"
                          :class="['px-6 py-2 rounded-lg transition-custom', canSubmit ? 'bg-primary text-white hover:bg-primary/90' : 'bg-light-2 text-dark-3 cursor-not-allowed']">
                    提交审核<i class="fa fa-check ml-2"></i>
                  </button>
                </div>
              </form>
            </div>

            <!-- 成功提交审核 -->
            <div v-show="currentSection === 'authIng'" class="form-section">
              <div class="text-center py-12">
                <div class="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i class="fa fa-check text-3xl text-success"></i>
                </div>
                <h2 class="text-xl font-semibold text-dark mb-3">认证申请已提交成功</h2>
                <p class="text-dark-3 mb-8">我们已收到您的认证申请，将在1-3个工作日内完成审核</p>
                <div class="bg-light-2/50 p-4 rounded-lg max-w-md mx-auto mb-8">
                  <div class="flex items-start">
                    <div class="bg-primary/10 p-2 rounded-full mr-3">
                      <i class="fa fa-info-circle text-primary"></i>
                    </div>
                    <div class="text-left">
                      <h3 class="font-medium text-dark mb-1">审核进度通知</h3>
                      <p class="text-sm text-dark-3">我们将通过短信和系统消息通知您审核结果</p>
                      <p class="text-sm text-dark-3 mt-1">您也可以在"个人信息"页面查看审核状态</p>
                    </div>
                  </div>
                </div>
                <button type="button" @click="backToProfessional" class="px-6 py-2 bg-light-2 text-dark-2 rounded-lg hover:bg-light-1 transition-custom">
                  <i class="fa fa-arrow-left mr-2"></i>
                  上一步
                </button>
                <button type="button" @click="goToDashboard" class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-custom">
                  返回首页
                </button>
              </div>
            </div>
          </div>

          <!-- 帮助与提示 -->
          <div class="bg-white rounded-xl p-6 card-shadow">
            <h2 class="text-lg font-semibold text-dark mb-4">帮助与提示</h2>

            <div class="space-y-4">
              <div class="bg-light-2/50 p-4 rounded-lg">
                <h3 class="font-medium text-dark mb-2 flex items-center">
                  <i class="fa fa-info-circle text-primary mr-2"></i>认证指南
                </h3>
                <ul class="text-sm text-dark-3 space-y-2 pl-6 list-disc">
                  <li>请确保上传的资质证书清晰可见，无遮挡</li>
                  <li>证书必须在有效期内</li>
                  <li>请确保填写的专业经验真实且详细</li>
                  <li>审核结果将通过短信和系统消息通知您</li>
                </ul>
              </div>

              <div class="bg-light-2/50 p-4 rounded-lg">
                <h3 class="font-medium text-dark mb-2 flex items-center">
                  <i class="fa fa-question-circle text-primary mr-2"></i>常见问题
                </h3>
                <div class="space-y-3">
                  <div>
                    <p class="font-medium text-dark-3">需要上传哪些资质证书？</p>
                    <p class="text-sm text-dark-3 mt-1">请上传您的专业金融资质证书，如CFP、CFA、CWC等，以及执业证明文件。</p>
                  </div>
                  <div>
                    <p class="font-medium text-dark-3">审核需要多长时间？</p>
                    <p class="text-sm text-dark-3 mt-1">一般情况下，我们会在1-3个工作日内完成审核。高峰期可能需要更长时间。</p>
                  </div>
                  <div>
                    <p class="font-medium text-dark-3">审核不通过怎么办？</p>
                    <p class="text-sm text-dark-3 mt-1">如果审核不通过，您可以查看拒绝原因并重新提交认证申请。</p>
                  </div>
                </div>
              </div>

              <div class="bg-light-2/50 p-4 rounded-lg">
                <h3 class="font-medium text-dark mb-2 flex items-center">
                  <i class="fa fa-headphones text-primary mr-2"></i>联系客服
                </h3>
                <p class="text-sm text-dark-3 mb-3">如有任何问题，请随时联系我们的客服团队</p>
                <button class="w-full py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-custom text-sm font-medium">
                  <i class="fa fa-comments mr-2"></i>在线咨询
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 认证须知 -->
        <div class="bg-white rounded-xl p-6 card-shadow">
          <h2 class="text-lg font-semibold text-dark mb-4">认证须知</h2>

          <div class="space-y-3 text-sm text-dark-3">
            <p>1. 所有提交的信息和文件必须真实有效，如有虚假信息，您的账户可能会被永久封禁。</p>
            <p>2. 我们严格保护您的个人信息安全，所有上传的文件仅用于认证目的。</p>
            <p>3. 认证成功后，您将获得相应级别的金融顾问资格，可以开展相关业务。</p>
            <p>4. 根据监管要求，我们可能会定期审核您的认证信息。</p>
            <p>5. 如对认证流程有任何疑问，请联系客服获取帮助。</p>
          </div>
        </div>
      </div>
    </main>
    <!-- 页脚 -->
    <footer class="bg-white border-t border-light-1 py-4">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div class="flex items-center justify-center md:justify-start">
            <div class="flex items-center mr-6">
              <div class="w-6 h-6 rounded-md bg-primary flex items-center justify-center mr-2">
                <i class="fa fa-line-chart text-white text-xs"></i>
              </div>
              <span class="text-sm font-medium">WealthGuard</span>
            </div>
            <p class="text-xs text-dark-3">© 2025 WealthGuard. 保留所有权利</p>
          </div>
          <div class="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
            <a href="#" class="text-dark-3 hover:text-dark text-sm transition-custom">隐私政策</a>
            <a href="#" class="text-dark-3 hover:text-dark text-sm transition-custom">服务条款</a>
            <a href="#" class="text-dark-3 hover:text-dark text-sm transition-custom">帮助中心</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import {ref, computed, reactive, onMounted, watch} from 'vue';
import Header from "@/components/agency/Header.vue";
import {useRoute, useRouter} from 'vue-router'
const router = useRouter()
const route = useRoute();
import cache from '@/plugins/cache'
import { ekycAuthStore } from '@/store/index.js';
// 引入认证状态 store
const ekycAuth = ekycAuthStore();
// 认证状态
const authenticatedStep = computed(() =>{
  return ekycAuth.ekycAuthenticated}
);

// 当前表单部分
const currentSection = ref('personal');



// 为每个必填输入项创建 ref
const accountNameRef = ref(null);
const fullNameRef = ref(null);
const ageRef = ref(null);
const phoneNumberRef = ref(null);
const emailRef = ref(null);
const managerRef = ref(null);
const addressRef = ref(null);
const idNumberRef = ref(null);
const issueDateRef = ref(null);
const expiryDateRef = ref(null);
const frontIdFileRef = ref(null);
const backIdFileRef = ref(null);
const certificateNumberRef = ref(null);
const issuingAuthorityRef = ref(null);
const certificateIssueDateRef = ref(null);
const certificateExpiryDateRef = ref(null);
const yearsOfPracticeRef = ref(null);
const certificateFileRef = ref(null);
const practiceCertificateFileRef = ref(null);

// 验证个人信息表单
const validatePersonalForm = () => {
  if (!form.accountName) {
    accountNameRef.value.focus();
    return false;
  }
  if (!form.fullName) {
    fullNameRef.value.focus();
    return false;
  }
  if (!form.age) {
    ageRef.value.focus();
    return false;
  }
  if (!form.phoneNumber) {
    phoneNumberRef.value.focus();
    return false;
  }
  if (!form.email) {
    emailRef.value.focus();
    return false;
  }
  if (!form.manager) {
    managerRef.value.focus();
    return false;
  }
  if (!form.address) {
    addressRef.value.focus();
    return false;
  }
  return true;
};

// 验证身份验证表单
const validateIdentityForm = () => {
  if (!form.idNumber) {
    idNumberRef.value.focus();
    return false;
  }
  if (!form.issueDate) {
    issueDateRef.value.focus();
    return false;
  }
  if (!form.expiryDate) {
    expiryDateRef.value.focus();
    return false;
  }
  if (!form.frontIdFile) {
    frontIdFileRef.value.click(); // 点击文件上传按钮
    return false;
  }
  if (!form.backIdFile) {
    backIdFileRef.value.click(); // 点击文件上传按钮
    return false;
  }
  if (!form.identityConfirmed) {
    // 可以添加提示信息，这里简单处理
    alert('请勾选确认按钮！');
    return false;
  }
  return true;
};

// 验证专业资质表单
const validateProfessionalForm = () => {
  if (!form.certificateNumber) {
    certificateNumberRef.value.focus();
    return false;
  }
  if (!form.issuingAuthority) {
    issuingAuthorityRef.value.focus();
    return false;
  }
  if (!form.certificateIssueDate) {
    certificateIssueDateRef.value.focus();
    return false;
  }
  if (!form.certificateExpiryDate) {
    certificateExpiryDateRef.value.focus();
    return false;
  }
  if (!form.yearsOfPractice) {
    yearsOfPracticeRef.value.focus();
    return false;
  }
  if (!form.certificateFile) {
    certificateFileRef.value.click(); // 点击文件上传按钮
    return false;
  }
  if (!form.practiceCertificateFile) {
    practiceCertificateFileRef.value.click(); // 点击文件上传按钮
    return false;
  }
  if (!form.professionalConfirmed) {
    // 可以添加提示信息，这里简单处理
    alert('请确认上传的专业资质文件真实有效');
    return false;
  }
  return true;
};

// 表单数据
const form = reactive({
  idType: 'passport',
  idNumber: '',
  issueDate: '',
  expiryDate: '',
  frontIdFile: null,
  backIdFile: null,
  identityConfirmed: false,
  qualificationType: 'cfp',
  certificateNumber: '',
  issuingAuthority: '',
  certificateIssueDate: '',
  certificateExpiryDate: '',
  yearsOfPractice: '',
  certificateFile: null,
  practiceCertificateFile: null,
  professionalConfirmed: false,
  professionalExperience: '',
  // 新增个人信息字段
  accountName: '',
  fullName: '',
  age: '',
  phoneNumber: '',
  email: '',
  manager: '', // 新增上级经理字段
  address: '' // 新增地址字段
});



// 认证步骤
const steps = ref([
  { name: '个人信息', icon: 'fa fa-user', active: true },
  { name: '身份验证', icon: 'fa fa-id-card', active: false },
  { name: '专业资质', icon: 'fa fa-briefcase', active: false },
  { name: '审核中', icon: 'fa fa-check-circle', active: false }
]);

// 当前状态
const currentStatus = ref('进行中');
const statusClass = ref('bg-warning/10 text-warning');


// 计算属性
const canProceedToProfessional = computed(() => {
  return form.idNumber && form.issueDate && form.expiryDate && form.frontIdFile
      && form.backIdFile && form.identityConfirmed;
});

const canSubmit = computed(() => {
  return form.certificateNumber && form.issuingAuthority &&
      form.certificateIssueDate && form.yearsOfPractice &&
      form.certificateFile && form.practiceCertificateFile &&
      form.professionalConfirmed ;
});

// 重新计算进度条类名
const progressBarClass = computed(() => {
  return 'bg-primary';
});

// 重新计算进度条样式
const progressBarStyle = computed(() => {
  //审核中或者审核成功，进度条100
  if(authenticatedStep.value===3&&authenticatedStep.value===4) {
    return {
      width: `100%`,
      right: 'auto'
    };
  }
  const stepIndex = steps.value.findIndex(step => step.active);
  const totalSteps = steps.value.length - 1; // 减去最后一个“审核完成”步骤
  const progressPercentage = (stepIndex / totalSteps) * 100;
  return {
    width: `${progressPercentage}%`,
    right: 'auto' // 移除原来的 right 定位
  };
});


// 检查个人信息是否完整
const canProceedToIdentity = computed(() => {
  return form.accountName && form.fullName && form.age && form.phoneNumber && form.email && form.manager && form.address;
});

// 导航到身份验证部分
const goToIdentity = () => {
  if (validatePersonalForm()) {
    currentSection.value = 'identity';
    steps.value[0].active = false;
    steps.value[1].active = true;
    ekycAuth.setAuthenticated(1);
  }
};

// 导航到专业资质部分
const goToProfessional = () => {
  if (validateIdentityForm()) {
    currentSection.value = 'professional';
    //审核中或者审核成功，进度条不再更新
    steps.value[1].active = false;
    steps.value[2].active = true;
    ekycAuth.setAuthenticated(2);
  }
};

const submitForm = () => {
  if (validateProfessionalForm()) {
    // 模拟表单提交
    console.log('提交表单数据:', form);
    // 更新状态
    currentSection.value = 'authIng';
    currentStatus.value = '审核中';
    statusClass.value = 'bg-success/10 text-success';
    //审核中或者审核成功，进度条不再更新
    steps.value[2].active = false;
    steps.value[3].active = true;
    //审核中
    ekycAuth.setAuthenticated(3);
  }
};

// 返回到个人信息页
const backToPersonal = () => {
  currentSection.value = 'personal';
  steps.value[0].active = true;
  steps.value[1].active = false;
};

// 返回到身份验证部分
const backToIdentity = () => {
  currentSection.value = 'identity';
  steps.value[1].active = true;
  steps.value[2].active = false;
};

// 返回到专业资质部分
const backToProfessional = () => {
  currentSection.value = 'professional';
  steps.value[2].active = true;
  steps.value[3].active = false;
};


const goToDashboard = () => {
  // 这里可以添加导航到仪表盘的逻辑
  console.log('导航到首页');
  router.push({
    path: '/agency/index'
  })

};

// 文件上传处理
const handleFrontIdUpload = (event) => {
  form.frontIdFile = event.target.files[0];
};

const handleBackIdUpload = (event) => {
  form.backIdFile = event.target.files[0];
};

const handleCertificateUpload = (event) => {
  form.certificateFile = event.target.files[0];
};

const handlePracticeCertificateUpload = (event) => {
  form.practiceCertificateFile = event.target.files[0];
};



onMounted(() => {

  // 恢复缓存数据
  const cachedFormData = cache.local.getJSON('ekycFormData');
  if (cachedFormData) {
    Object.assign(form, cachedFormData);
  }

  currentSection.value = route.query.step;
  steps.value[0].active = false;
  steps.value[1].active = false;
  steps.value[2].active = false;
  steps.value[3].active = false;

  if(route.query.step === 'personal'){
    steps.value[0].active = true;
  }
  if(route.query.step === 'identity'){
    steps.value[1].active = true;
  }
  if(route.query.step === 'professional'){
    steps.value[2].active = true;
  }
  if(route.query.step === 'auth'){
    if(authenticatedStep.value===3) {
      steps.value[3].active = true;
      steps.value[3].name = '审核中';
      currentSection.value = 'authIng';
    }
    if(authenticatedStep.value===4) {
      steps.value[3].active = true;
      steps.value[3].name = '审核成功';
      currentSection.value = 'authSuccess';
    }
    if(authenticatedStep.value===5) {
      steps.value[3].active = true;
      steps.value[3].name = '审核失败';
      currentSection.value = 'authFail';
    }
  }
});


// 监听表单数据变化，实时缓存
watch(form, (newFormData) => {
  // 过滤掉文件对象，因为文件对象无法直接存储在缓存中
  const formDataToCache = { ...newFormData };
  ['frontIdFile', 'backIdFile', 'certificateFile', 'practiceCertificateFile'].forEach(key => {
    delete formDataToCache[key];
  });
  cache.local.setJSON('ekycFormData', formDataToCache);
}, { deep: true });


</script>


<style>

</style>