<template>
  <!-- Header -->
  <Header/>
  <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
    <!-- EKYC认证状态 -->
    <div class="bg-white rounded-xl shadow-md p-8 mb-12">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 class="text-xl font-bold mb-2">EKYC身份认证</h2>
          <p class="text-gray-600">完成身份认证，为客户提供更专业的服务</p>
        </div>
        <div class="mt-4 md:mt-0" v-if="authStatusInfo">
          <span :class="['inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
          authStatusInfo.bgClass, authStatusInfo.textClass]">
            <i :class="authStatusInfo .icon + ' mr-2'"></i>
            {{ authStatusInfo.text }}
          </span>
        </div>
      </div>

      <!-- 认证步骤进度条 -->
      <div class="grid grid-cols-7 gap-4">
        <div class="progress-step" @click="goToEkycView('personal')">
          <div :class="[
        'progress-circle',
        isPersonalStepCompleted ? 'bg-success text-white' : 'bg-gray-200 text-gray-500'
      ]">1
          </div>
          <span :class="[
        'text-sm font-medium',
        isPersonalStepCompleted ? 'text-success' : 'text-gray-400'
      ]">个人信息</span>
        </div>
        <div :class="[
      'progress-line',
      isPersonalStepCompleted ? 'bg-success' : 'bg-gray-200'
    ]"></div>
        <div class="progress-step" @click="goToEkycView('identity')">
          <div :class="[
        'progress-circle',
        isIdentityStepCompleted ? 'bg-success text-white' :
        (currentSection === 'identity' || currentSection === 'professional' ||  currentSection === 'authIng')
          ? 'bg-success text-white' : 'bg-gray-200 text-gray-500'
      ]">2
          </div>
          <span :class="[
        'text-sm font-medium',
        isIdentityStepCompleted ? 'text-success' :
        (currentSection === 'identity' || currentSection === 'professional' || currentSection === 'authIng' )
          ? 'text-success' : 'text-gray-400'
      ]">身份验证</span>
        </div>
        <div :class="[
      'progress-line',
      (isPersonalStepCompleted && isIdentityStepCompleted) ? 'bg-success' : 'bg-gray-200'
    ]"></div>
        <div class="progress-step" @click="goToEkycView('professional')">
          <div :class="[
        'progress-circle',
        isProfessionalStepCompleted ? 'bg-success text-white' :
        (currentSection === 'professional' ||  currentSection === 'authIng')
          ? 'bg-success text-white' : 'bg-gray-200 text-gray-500'
      ]">3
          </div>
          <span :class="[
        'text-sm font-medium',
        isProfessionalStepCompleted ? 'text-success' :
        (currentSection === 'professional' ||  currentSection === 'authIng')
          ? 'text-success' : 'text-gray-400'
      ]">资质验证</span>
        </div>
        <div :class="[
      'progress-line',
      (isPersonalStepCompleted && isIdentityStepCompleted && isProfessionalStepCompleted) ? 'bg-success' : 'bg-gray-200'
    ]"></div>
        <div class="progress-step" @click="goToEkycView('authIng')">
          <div :class="['progress-circle',
        ( currentSection === 'authIng'||status === '1') ? 'bg-success text-white' : 'bg-gray-200 text-gray-500'
      ]">4
          </div>
          <span :class="['text-sm font-medium',
        ( currentSection === 'authIng'||status === '1') ? 'text-success' : 'text-gray-400'
      ]">审核步骤</span>
        </div>
      </div>

      <!-- 表单部分 -->
      <div class="lg:col-span-2 py-6">
        <!-- 个人信息部分 -->
        <div v-show="currentSection === 'personal'" class="form-section">
          <h2 class="text-lg font-semibold text-dark mb-6">个人信息</h2>
          <form class="space-y-6">
            <!-- 个人信息 -->
            <div class="bg-light-2/50 p-4 rounded-lg">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    姓名
                    <span class="text-red-500">*</span>
                  </label>
                  <input type="text" v-model="form.fullName"
                         :readonly="!isEditingAllowed"
                         ref="fullNameRef"
                         class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom"
                         placeholder="请输入姓名">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    年龄
                    <span class="text-red-500">*</span>
                  </label>
                  <input type="number" v-model="form.age"
                         :readonly="!isEditingAllowed"
                         ref="ageRef"
                         class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom"
                         placeholder="请输入年龄" min="0">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    手机号码
                    <span class="text-red-500">*</span>
                  </label>
                  <input type="tel" v-model="form.phoneNumber"
                         :readonly="!isEditingAllowed"
                         ref="phoneNumberRef"
                         class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom"
                         placeholder="请输入手机号码">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    电子邮箱
                    <span class="text-red-500">*</span>
                  </label>
                  <input type="email" v-model="form.email"
                         :readonly="!isEditingAllowed"
                         ref="emailRef"
                         class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom"
                         placeholder="请输入电子邮箱">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    上级经理
                    <span class="text-red-500">*</span>
                  </label>
                  <input type="text" v-model="form.manager"
                         :readonly="!isEditingAllowed"
                         ref="managerRef"
                         class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom"
                         placeholder="请输入上级经理姓名">
                </div>
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    地址
                    <span class="text-red-500">*</span>
                  </label>
                  <input type="text" v-model="form.address"
                         :readonly="!isEditingAllowed"
                         ref="addressRef"
                         class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom"
                         placeholder="请输入地址">
                </div>
              </div>
            </div>
            <!-- 提交按钮 -->
            <div class="flex justify-between">
              <button type="button" @click="goToIdentity"
                      :class="['px-6 py-2 rounded-lg transition-custom', 'bg-blue-500 text-white hover:bg-blue-600']">
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
                          :disabled="!isEditingAllowed"
                          ref="idTypeRef"
                          class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom">
                    <option value="passport">护照</option>
                    <option value="id_card">身份证</option>
                    <option value="driver_license">驾照</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    证件号码
                    <span class="text-red-500">*</span>
                  </label>
                  <input type="text" v-model="form.idNumber"
                         :readonly="!isEditingAllowed"
                         ref="idNumberRef"
                         class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom"
                         placeholder="请输入证件号码">
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    颁发日期
                    <span class="text-red-500">*</span>
                  </label>
                  <input type="date" v-model="form.issueDate"
                         :readonly="!isEditingAllowed"
                         ref="issueDateRef"
                         class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom">
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    有效期至
                    <span class="text-red-500">*</span>
                  </label>
                  <input type="date" v-model="form.expiryDate"
                         :readonly="!isEditingAllowed"
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
                <!-- 证件正面照部分 -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    证件正面照
                    <span class="text-red-500">*</span>
                  </label>
                  <input type="file" class="hidden" id="front-id-upload"
                         @change="handleFrontIdUpload"
                         :readonly="!isEditingAllowed"
                         ref="frontIdFileRef"
                         accept="image/*">
                  <div
                      class="border-2 border-dashed border-light-1 rounded-lg p-4 text-center hover:border-primary transition-custom">
                    <label for="front-id-upload" class="cursor-pointer" v-if="!form.frontIdFileUrl">
                      <i class="fa fa-cloud-upload text-2xl text-dark-3 mb-2"></i>
                      <p class="text-sm text-dark-3">点击上传或拖拽文件到此处</p>
                      <p class="text-xs text-dark-3 mt-1">支持 JPG, PNG 格式，最大 5MB</p>
                    </label>
                    <!-- 回显图片 -->
                    <div v-else class="relative">
                      <img :src="form.frontIdFileUrl" alt="证件正面照" class="max-h-40 mx-auto rounded">
                      <button v-if="isEditingAllowed" @click="removeFrontIdFile"
                              class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <i class="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- 证件反面照部分 -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    证件反面照
                    <span class="text-red-500">*</span>
                  </label>
                  <input type="file" class="hidden"
                         id="back-id-upload"
                         ref="backIdFileRef"
                         @change="handleBackIdUpload"
                         accept="image/*"/>

                  <div
                      class="border-2 border-dashed border-light-1 rounded-lg p-4 text-center hover:border-primary transition-custom">
                    <label for="back-id-upload" class="cursor-pointer" v-if="!form.backIdFileUrl">
                      <i class="fa fa-cloud-upload text-2xl text-dark-3 mb-2"></i>
                      <p class="text-sm text-dark-3">点击上传或拖拽文件到此处</p>
                      <p class="text-xs text-dark-3 mt-1">支持 JPG, PNG 格式，最大 5MB</p>
                    </label>
                    <!-- 回显图片 -->
                    <div v-else class="relative">
                      <img v-if="form.backIdFileUrl" :src="form.backIdFileUrl" alt="证件反面照"
                           class="max-h-40 mx-auto rounded">
                      <button v-if="isEditingAllowed" type="button" @click="removeBackIdFile"
                              class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <i class="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="identity-confirmation"
                           v-model="form.identityConfirmed"
                           :readonly="!isEditingAllowed"
                           ref="identityConfirmedRef"
                           type="checkbox" class="w-4 h-4 border border-light-1 rounded focus:ring-primary">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="identity-confirmation"
                           class="text-dark-3">我确认上传的证件照片真实有效，与本人身份一致</label>
                  </div>
                </div>
              </div>
            </div>

            <!-- 提交按钮 -->
            <div class="flex justify-between">
              <button type="button" @click="backToPersonal"
                      class="px-6 py-2 bg-light-2 text-dark-2 rounded-lg hover:bg-light-1 transition-custom">
                <i class="fa fa-arrow-left mr-2"></i>
                上一步
              </button>
              <button type="button" @click="goToProfessional"
                      :class="['px-6 py-2 rounded-lg transition-custom', 'bg-blue-500 text-white hover:bg-blue-600' ]">
                下一步<i class="fa fa-arrow-right ml-2"></i>
              </button>
            </div>
          </form>
        </div>

        <!-- 专业资质部分 -->
        <div v-show="currentSection === 'professional'" class="form-section">
          <h2 class="text-lg font-semibold text-dark mb-6">专业资质认证</h2>
          <form class="space-y-6">
            <!-- 认证类型管理 -->
            <div class="bg-light-2/50 p-4 rounded-lg">
              <div class="flex justify-between items-center mb-4">
                <h3 class="font-medium text-dark">认证类型管理</h3>
                <button type="button"
                        @click="addQualification"
                        v-show="isEditingAllowed"
                        class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-custom">
                  添加认证类型
                </button>
              </div>

              <!-- 每个认证类型的信息 -->
              <div v-for="(qualification, index) in form.qualifications" :key="index"
                   class="border border-light-1 rounded-lg p-4 mb-4">
                <div class="flex justify-between items-center mb-3">
                  <button v-if="form.qualifications.length > 1"
                          type="button"
                          @click="removeQualification(index)"
                          class="text-red-500 hover:text-red-700">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                      资质类型
                      <span class="text-red-500">*</span>
                    </label>
                    <select v-model="qualification.qualificationType"
                            :disabled="!isEditingAllowed"
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
                    <input type="text" v-model="qualification.certificateNumber"
                           :readonly="!isEditingAllowed"
                           class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom"
                           placeholder="请输入证书编号">
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                      颁发机构
                      <span class="text-red-500">*</span>
                    </label>
                    <input type="text" v-model="qualification.issuingAuthority"
                           :readonly="!isEditingAllowed"
                           class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom"
                           placeholder="请输入颁发机构名称">
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                      颁发日期
                      <span class="text-red-500">*</span>
                    </label>
                    <input type="date" v-model="qualification.certificateIssueDate"
                           :readonly="!isEditingAllowed"
                           class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom">
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                      有效期至
                      <span class="text-red-500">*</span>
                    </label>
                    <input type="date" v-model="qualification.certificateExpiryDate"
                           :readonly="!isEditingAllowed"
                           class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom">
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                      执业年限
                      <span class="text-red-500">*</span>
                    </label>
                    <input type="number" v-model="qualification.yearsOfPractice"
                           :readonly="!isEditingAllowed"
                           class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom"
                           placeholder="请输入执业年限" min="0">
                  </div>
                </div>

                <!-- 资质证书上传 -->
                <div class="mt-4">
                  <h4 class="font-medium text-dark mb-2">资质证书上传</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- 资质证书照片部分 -->
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        资质证书照片
                        <span class="text-red-500">*</span>
                      </label>
                      <div
                          class="border-2 border-dashed border-light-1 rounded-lg p-4 text-center hover:border-primary transition-custom">
                        <input type="file" class="hidden"
                               :id="'certificate-upload-' + index"
                               @change="handleCertificateUpload($event, index)"
                               accept="image/*,.pdf"
                               multiple>
                        <label :for="'certificate-upload-' + index" class="cursor-pointer"
                               v-if="qualification.certificateFileUrls.length === 0">
                          <i class="fa fa-cloud-upload text-2xl text-dark-3 mb-2"></i>
                          <p class="text-sm text-dark-3">点击上传或拖拽文件到此处</p>
                          <p class="text-xs text-dark-3 mt-1">支持 JPG, PNG, PDF 格式，最多5个文件，每个文件最大 10MB</p>
                        </label>
                        <!-- 回显文件 -->
                        <div v-else class="space-y-2">
                          <div v-for="(url, fileIndex) in qualification.certificateFileUrls" :key="fileIndex"
                               class="relative border rounded p-2">
                            <div v-if="isImageFile(url)" class="mb-2">
                              <img :src="url" alt="资质证书" class="max-h-40 mx-auto rounded">
                            </div>
                            <div v-else class="max-h-40 mx-auto flex items-center justify-center mb-2">
                              <i class="fa fa-file-pdf-o text-4xl text-red-500"></i>
                            </div>
                            <button v-if="isEditingAllowed" type="button"
                                    @click="removeCertificateFile(index, fileIndex)"
                                    class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                              <i class="fa fa-times"></i>
                            </button>
                          </div>
                          <button v-if="isEditingAllowed && qualification.certificateFileUrls.length < 5"
                                  type="button"
                                  @click="triggerFileInput('certificate', index)"
                                  class="w-full py-2 text-primary hover:bg-primary/10 rounded border border-dashed border-primary flex items-center justify-center">
                            <i class="fa fa-plus mr-1"></i> 继续添加
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">
                        执业证明文件
                        <span class="text-red-500">*</span>
                      </label>
                      <div
                          class="border-2 border-dashed border-light-1 rounded-lg p-4 text-center hover:border-primary transition-custom">
                        <input type="file" class="hidden"
                               :id="'practice-certificate-upload-' + index"
                               @change="handlePracticeCertificateUpload($event, index)"
                               :readonly="!isEditingAllowed"
                               accept="image/*,.pdf"
                               multiple>
                        <label :for="'practice-certificate-upload-' + index" class="cursor-pointer"
                               v-if="qualification.practiceCertificateFileUrls.length === 0">
                          <i class="fa fa-cloud-upload text-2xl text-dark-3 mb-2"></i>
                          <p class="text-sm text-dark-3">点击上传或拖拽文件到此处</p>
                          <p class="text-xs text-dark-3 mt-1">支持 JPG, PNG, PDF 格式，最多5个文件，每个文件最大 10MB</p>
                        </label>
                        <!-- 回显文件 -->
                        <div v-else class="space-y-2">
                          <div v-for="(url, fileIndex) in qualification.practiceCertificateFileUrls" :key="fileIndex"
                               class="relative border rounded p-2">
                            <div v-if="isImageFile(url)" class="mb-2">
                              <img :src="url" alt="执业证明" class="max-h-40 mx-auto rounded">
                            </div>
                            <div v-else class="max-h-40 mx-auto flex items-center justify-center mb-2">
                              <i class="fa fa-file-pdf-o text-4xl text-red-500"></i>
                            </div>
                            <!-- 显示文件名 -->
                            <a :href="url"
                               :download="getFileName(url)"
                               class="text-xs text-center truncate px-2 text-primary hover:underline block">
                              {{ getFileName(url) }}
                            </a>

                            <button v-if="isEditingAllowed" type="button"
                                    @click="removePracticeCertificateFile(index, fileIndex)"
                                    class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                              <i class="fa fa-times"></i>
                            </button>
                          </div>
                          <button v-if="isEditingAllowed && qualification.practiceCertificateFileUrls.length < 5"
                                  type="button"
                                  @click="triggerFileInput('practiceCertificate', index)"
                                  class="w-full py-2 text-primary hover:bg-primary/10 rounded border border-dashed border-primary flex items-center justify-center">
                            <i class="fa fa-plus mr-1"></i> 继续添加
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 专业经验描述 -->
            <div class="bg-light-2/50 p-4 rounded-lg">
              <h3 class="font-medium text-dark mb-4">专业经验描述</h3>
              <div>
                <label
                    class="block text-sm font-medium text-dark-3 mb-1">请简要描述您的金融行业从业经验和专业特长</label>
                <textarea rows="4" v-model="form.professionalExperience"
                          class="w-full px-4 py-2 rounded-lg border border-light-1 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-custom"
                          placeholder="请输入您的专业经验描述（至少100字）"></textarea>
              </div>
            </div>

            <!-- 提交按钮 -->
            <div class="flex justify-between">
              <button type="button" @click="backToIdentity"
                      class="px-6 py-2 bg-light-2 text-dark-2 rounded-lg hover:bg-light-1 transition-custom">
                <i class="fa fa-arrow-left mr-2"></i>
                上一步
              </button>
              <button type="button" @click="goToAuth"
                      :class="['px-6 py-2 rounded-lg transition-custom', 'bg-blue-500 text-white hover:bg-blue-600' ]">
                下一步<i class="fa fa-arrow-right ml-2"></i>
              </button>
            </div>
          </form>
        </div>

        <!-- 认证中 -->
        <div v-show="currentSection === 'authIng' && (!status || status === '0')" class="form-section">
          <div class="text-center py-12">
            <div class="w-20 h-20 bg-inherit/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fa fa-check text-3xl text-success"></i>
            </div>
            <h2 class="text-xl font-semibold text-dark mb-3">认证资料准备中</h2>
            <p class="text-dark-3 mb-8">请认证检查认证数据和资料，确保准确无误！</p>
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
            <button type="button" @click="backToProfessional"
                    class="px-6 py-2 bg-light-2 text-dark-2 rounded-lg hover:bg-light-1 transition-custom">
              <i class="fa fa-arrow-left mr-2"></i>
              上一步
            </button>
            <button type="button" @click="submitAuth"
                    class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-custom">
              提交审核
            </button>
          </div>
        </div>

        <!-- 成功提交审核 -->
        <div v-show="currentSection === 'authIng' && status === '1'" class="form-section">
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
            <button type="button" @click="backToProfessional"
                    class="px-6 py-2 bg-light-2 text-dark-2 rounded-lg hover:bg-light-1 transition-custom">
              <i class="fa fa-arrow-left mr-2"></i>
              上一步
            </button>
            <button type="button" @click="submitAuth"
                    class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-custom">
              提交审核
            </button>
          </div>
        </div>

        <!-- 成功审核 -->
        <div v-show="currentSection === 'authIng' && status === '2'" class="form-section">
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
            <button type="button" @click="backToProfessional"
                    class="px-6 py-2 bg-light-2 text-dark-2 rounded-lg hover:bg-light-1 transition-custom">
              <i class="fa fa-arrow-left mr-2"></i>
              上一步
            </button>
            <button type="button" @click="submitAuth"
                    class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-custom">
              提交审核
            </button>
          </div>
        </div>

        <!-- 审核失败 -->
        <!-- 审核失败 -->
        <div v-show="currentSection === 'authIng' && status === '-1'" class="form-section">
          <div class="text-center py-8">
            <div class="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fa fa-times text-3xl text-red-500"></i>
            </div>
            <h2 class="text-xl font-semibold text-dark mb-3">审核失败</h2>
            <p class="text-dark-3 mb-8">您的EKYC审核未通过，请根据以下备注提示信息修改后重新提交</p>

            <!-- 审核备注展示 -->
            <div v-if="form.auditInfoRespList && form.auditInfoRespList.length > 0"
                 class="bg-red-500/5 border border-red-500/20 rounded-lg p-4 max-w-2xl mx-auto mb-8 text-left">
              <h3 class="font-medium text-dark mb-3 flex items-center">
                <i class="fa fa-info-circle text-red-500 mr-2"></i>审核备注
              </h3>
              <ul class="space-y-2">
                <li v-for="(item, index) in form.auditInfoRespList"
                    :key="index"
                    class="flex items-start">
                  <i v-if="item.remark" class="fa fa-circle text-red-500 text-xs mt-1.5 mr-2 flex-shrink-0"></i>
                  <span  v-if="item.remark" class="text-dark-3 text-sm">{{ item.remark }}</span>
                </li>
              </ul>
            </div>

            <div class="flex justify-center gap-4">
              <button type="button" @click="backToProfessional"
                      class="px-6 py-2 bg-light-2 text-dark-2 rounded-lg hover:bg-light-1 transition-custom">
                <i class="fa fa-arrow-left mr-2"></i>
                上一步
              </button>
              <button type="button" @click="submitAuth"
                      class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-custom">
                重新提交审核
              </button>
            </div>
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
            <button
                class="w-full py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-custom text-sm font-medium">
              <i class="fa fa-comments mr-2"></i>在线咨询
            </button>
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
</template>


<script setup>
import {computed, onMounted, reactive, ref, watch} from 'vue';
import Header from "@/components/agency/Header.vue";
import {useRouter} from 'vue-router'
import {useToast} from "@/composables/UseToast.ts";
import {uploadFile} from "@/api/file.js";
import {ekycAuthStore} from '@/store/index.ts';
import cache from "@/plugins/cache.js";
import {getEkycData, submitEkycData} from "@/api/ekyc.js";
// 引入认证状态 store
const ekycAuth = ekycAuthStore();
const router = useRouter()
const {successToast, errorToast} = useToast()
const status = ref('0')

// 当前表单部分
const currentSection = ref('');
// 当前表单部分
if (currentSection.value === '' && status.value !== '2') {
  currentSection.value = 'personal';
}


const goToEkycView = (step) => {

  currentSection.value = step;

};


// 计算认证状态提示信息
const authStatusInfo = computed(() => {
  // 根据后端AuditStatusEnums: 0-待审核(INIT), 1-审核通过(ON), 2-审核失败(FAIL)
  let result = {
    text: '未认证',
    bgClass: 'bg-warning/10',
    textClass: 'text-warning',
    icon: 'fa fa-exclamation-circle'
  };

  if (status.value === '1') {
    result = {
      text: '待审核',
      bgClass: 'bg-primary/10',
      textClass: 'text-primary',
      icon: 'fa fa-hourglass-half'
    };
  } else if (status.value === '2') {
    result = {
      text: '审核通过',
      bgClass: 'bg-success/10',
      textClass: 'text-success',
      icon: 'fa fa-check-circle'
    };
  } else if (status.value === '-1') {
    result = {
      text: '审核失败',
      bgClass: 'bg-red-500/10',
      textClass: 'text-red-500',
      icon: 'fa fa-times-circle'
    };
  }
  return result;
});


// 组件挂载后执行认证检查
// 组件挂载后执行认证检查
onMounted(async () => {
  try {
    ekycAuth.init();
    // 先尝试从后端获取用户数据
    const response = await getEkycData();

    // 检查后端返回的数据是否有效（判断关键字段是否为null）
    const hasValidBackendData = response.code === 200 && response.data &&
        (response.data.status !== null ||
            response.data.fullName !== null ||
            response.data.idNumber !== null ||
            response.data.qualifications !== null);

    if (hasValidBackendData) {
      // 将后端数据填充到表单中
      populateFormData(response.data);
      // 更新认证状态
      if (response.data.status !== null) {
        status.value = response.data.status.toString();  // 确保转换为字符串
      }

      // 如果后端返回了有效数据，清除本地缓存（以避免数据不一致）
      cache.local.remove('ekycFormData');
    } else {
      // 如果后端没有有效数据（所有字段都是null），则尝试从本地缓存恢复
      const cachedFormData = cache.local.getJSON('ekycFormData');
      if (cachedFormData) {
        Object.assign(form, cachedFormData);
        // 如果缓存中有状态信息，使用缓存的状态
        if (cachedFormData.status !== undefined && cachedFormData.status !== null) {
          status.value = cachedFormData.status.toString();  // 确保转换为字符串
        }
      } else {
        // 如果既没有后端有效数据也没有缓存数据，默认status为'0'
        status.value = '0';
      }
    }
  } catch (error) {
    console.error('获取用户EKYC数据失败:', error);
    // 出错时仍然尝试从本地缓存恢复
    const cachedFormData = cache.local.getJSON('ekycFormData');
    if (cachedFormData) {
      Object.assign(form, cachedFormData);
      // 如果缓存中有状态信息，使用缓存的状态
      if (cachedFormData.status !== undefined && cachedFormData.status !== null) {
        status.value = cachedFormData.status.toString();  // 确保转换为字符串
      }
    } else {
      // 如果既没有后端有效数据也没有缓存数据，默认status为'0'
      status.value = '0';
    }
  }
  // 设置默认的当前步骤
  if (currentSection.value === '' && status.value !== '2') {
    currentSection.value = 'personal';
  }
});


// 添加日期格式化函数
const formatDateForInput = (dateString) => {
  if (!dateString) return '';
  // 如果是 ISO 格式的日期字符串，提取 YYYY-MM-DD 部分
  if (dateString.includes('T')) {
    return dateString.split('T')[0];
  }
  return dateString;
};

// 添加填充表单数据的函数
const populateFormData = (data) => {
  // 只有当字段不为null时才填充数据
  // 填充个人信息
  if (data.fullName !== null) form.fullName = data.fullName;
  if (data.age !== null) form.age = data.age;
  if (data.phoneNumber !== null) form.phoneNumber = data.phoneNumber;
  if (data.email !== null) form.email = data.email;
  if (data.manager !== null) form.manager = data.manager;
  if (data.address !== null) form.address = data.address;

  // 填充身份验证信息
  if (data.idType !== null) form.idType = data.idType || 'passport';
  if (data.idNumber !== null) form.idNumber = data.idNumber;
  if (data.issueDate !== null) form.issueDate = formatDateForInput(data.issueDate);
  if (data.expiryDate !== null) form.expiryDate = formatDateForInput(data.expiryDate);
  if (data.frontIdFileUrl !== null) form.frontIdFileUrl = data.frontIdFileUrl;
  if (data.backIdFileUrl !== null) form.backIdFileUrl = data.backIdFileUrl;
  if (data.identityConfirmed !== null) form.identityConfirmed = data.identityConfirmed;

  // 填充专业资质信息
  if (data.qualifications !== null && data.qualifications && data.qualifications.length > 0) {
    form.qualifications = data.qualifications.map(qual => ({
      qualificationType: qual.qualificationType || 'cfp',
      certificateNumber: qual.certificateNumber || '',
      issuingAuthority: qual.issuingAuthority || '',
      certificateIssueDate: qual.certificateIssueDate ? formatDateForInput(qual.certificateIssueDate) : '',
      certificateExpiryDate: qual.certificateExpiryDate ? formatDateForInput(qual.certificateExpiryDate) : '',
      yearsOfPractice: qual.yearsOfPractice || '',
      certificateFileUrls: qual.certificateFileUrls || [],
      practiceCertificateFileUrls: qual.practiceCertificateFileUrls || []
    }));
  }

  if (data.professionalExperience !== null) form.professionalExperience = data.professionalExperience;

  if (data.auditInfoRespList !== null){
    form.auditInfoRespList = data.auditInfoRespList;
  }


  // 更新状态值（只在data.status不为null时更新）
  if (data.status !== undefined && data.status !== null) {
    status.value = data.status.toString();  // 确保转换为字符串
  }
  console.log('认证状态:', status.value);
};



// 为每个必填输入项创建 ref
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


// 修改表单数据结构以支持多个认证类型
const form = reactive({
  idType: 'passport',
  idNumber: '',
  issueDate: '',
  expiryDate: '',
  frontIdFileUrl: null,
  backIdFileUrl: null,
  identityConfirmed: false,
  // 修改为资质数组
  qualifications: [
    {
      qualificationType: 'cfp',
      certificateNumber: '',
      issuingAuthority: '',
      certificateIssueDate: '',
      certificateExpiryDate: '',
      yearsOfPractice: '',
      certificateFileUrls: [],
      practiceCertificateFileUrls: []
    }
  ],
  professionalConfirmed: false,
  professionalExperience: '',
  // 新增个人信息字段
  fullName: '',
  age: '',
  countryCode: '+86',
  phoneNumber: '',
  email: '',
  manager: '',
  address: '',
  auditInfoRespList: []
});

// 添加新的认证类型
const addQualification = () => {
  form.qualifications.push({
    qualificationType: 'cfp',
    certificateNumber: '',
    issuingAuthority: '',
    certificateIssueDate: '',
    certificateExpiryDate: '',
    yearsOfPractice: '',
    certificateFileUrls: [],
    practiceCertificateFileUrls: []
  });
};

// 移除认证类型
const removeQualification = (index) => {
  if (form.qualifications.length > 1) {
    form.qualifications.splice(index, 1);
  } else {
    errorToast('至少需要保留一个认证类型');
  }
};

// 导航到身份验证部分
const goToIdentity = () => {
  if (validatePersonalForm()) {
    currentSection.value = 'identity';
  }
};

// 导航到专业资质部分
const goToProfessional = () => {
  if (validateIdentityForm()) {
    currentSection.value = 'professional';
  }
};


const goToAuth = () => {
  if (validateProfessionalForm()) {
    // 调转审核页面
    console.log('提交表单数据:', form);
    currentSection.value = 'authIng';
  }
};


// 返回到个人信息页
const backToPersonal = () => {
  currentSection.value = 'personal';
};

// 返回到身份验证部分
const backToIdentity = () => {
  currentSection.value = 'identity';
};

// 返回到专业资质部分
const backToProfessional = () => {
  currentSection.value = 'professional';
};

// 文件上传处理
// 处理证件正面照上传
const handleFrontIdUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      // 上传到OSS并获取URL
      form.frontIdFileUrl = await uploadFileToOSS(file);
      successToast('证件正面照上传成功');
    } catch (error) {
      console.error('上传证件正面照失败:', error);
      errorToast('上传证件正面照失败，请重试');
    }
  }
};

// 上传文件到OSS
const uploadFileToOSS = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    // 调用后端上传接口
    const response = await uploadFile(formData);

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


// 处理证件反面照上传
const handleBackIdUpload = async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      // 上传到OSS并获取URL
      form.backIdFileUrl = await uploadFileToOSS(file);
      successToast('证件反面照上传成功');
    } catch (error) {
      console.error('上传证件反面照失败:', error);
      errorToast('上传证件反面照失败，请重试');
    }
  }
};

// 修改文件上传处理函数以支持多组认证
const handleCertificateUpload = async (event, index) => {
  const files = Array.from(event.target.files);
  if (files.length === 0) return;

  const qualification = form.qualifications[index];

  // 限制最多上传5个文件
  if (qualification.certificateFileUrls.length + files.length > 5) {
    errorToast('最多只能上传5个资质证书文件');
    return;
  }

  for (const file of files) {
    try {
      // 上传到OSS并获取URL
      const fileUrl = await uploadFileToOSS(file);
      qualification.certificateFileUrls.push(fileUrl);
      successToast(`${file.name} 上传成功`);
    } catch (error) {
      console.error('上传资质证书失败:', error);
      errorToast(`上传 ${file.name} 失败，请重试`);
    }
  }
};


// 处理执业证明文件上传
const handlePracticeCertificateUpload = async (event, index) => {
  const files = Array.from(event.target.files);
  if (files.length === 0) return;

  const qualification = form.qualifications[index];

  // 限制最多上传5个文件
  if (qualification.practiceCertificateFileUrls.length + files.length > 5) {
    errorToast('最多只能上传5个执业证明文件');
    return;
  }

  for (const file of files) {
    try {
      // 上传到OSS并获取URL
      const fileUrl = await uploadFileToOSS(file);
      qualification.practiceCertificateFileUrls.push(fileUrl);
      successToast(`上传成功`);
    } catch (error) {
      console.error('上传执业证明文件失败:', error);
      errorToast(`上传失败，请重试`);
    }
  }
};


// 修改进度条状态计算逻辑
const isPersonalStepCompleted = computed(() => {
  // 审核通过状态下也应显示为完成
  return (form.fullName && form.age && form.phoneNumber && form.email && form.manager && form.address) ||
      status.value === '1';
});

const isIdentityStepCompleted = computed(() => {
  return (form.idNumber && form.issueDate && form.expiryDate && form.frontIdFileUrl && form.backIdFileUrl) ||
      status.value === '1';
});

const isProfessionalStepCompleted = computed(() => {
  // 检查每个认证类型是否都填写完整
  const isAllQualificationsComplete = form.qualifications.length > 0 &&
      form.qualifications.every(qual =>
          qual.certificateNumber &&
          qual.issuingAuthority &&
          qual.certificateIssueDate &&
          qual.certificateExpiryDate &&
          qual.yearsOfPractice &&
          qual.certificateFileUrls.length > 0 &&
          qual.practiceCertificateFileUrls.length > 0
      );

  return isAllQualificationsComplete || status.value === '1';
});


const isEditingAllowed = computed(() => {
  // 只有在认证中(0)和认证失败(3)状态下才允许编辑
  return !status.value || status.value === '0' || status.value === '-1';
  // return true;
});

// 验证个人信息表单
const validatePersonalForm = () => {
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
  if (!form.frontIdFileUrl) {
    errorToast('请上传身份正面照片！');
    return false;
  }
  if (!form.backIdFileUrl) {
    errorToast('请上传身份背面照片！');
    return false;
  }
  if (!form.identityConfirmed) {
    // 可以添加提示信息，这里简单处理
    errorToast('请勾选确认按钮！');
    return false;
  }
  return true;
};

// 修改验证专业资质表单函数
const validateProfessionalForm = () => {
  // 检查每个认证类型
  for (let i = 0; i < form.qualifications.length; i++) {
    const qual = form.qualifications[i];

    if (!qual.certificateNumber) {
      errorToast(`第${i + 1}个认证类型的证书编号不能为空`);
      return false;
    }
    if (!qual.issuingAuthority) {
      errorToast(`第${i + 1}个认证类型的颁发机构不能为空`);
      return false;
    }
    if (!qual.certificateIssueDate) {
      errorToast(`第${i + 1}个认证类型的颁发日期不能为空`);
      return false;
    }
    if (!qual.certificateExpiryDate) {
      errorToast(`第${i + 1}个认证类型的有效期不能为空`);
      return false;
    }
    if (!qual.yearsOfPractice) {
      errorToast(`第${i + 1}个认证类型的执业年限不能为空`);
      return false;
    }
    if (qual.certificateFileUrls.length === 0) {
      errorToast(`第${i + 1}个认证类型请上传至少一个资质证书照片`);
      return false;
    }
    if (qual.practiceCertificateFileUrls.length === 0) {
      errorToast(`第${i + 1}个认证类型请上传至少一个执业证明文件`);
      return false;
    }
  }
  return true;
};

// 判断是否为图片文件
const isImageFile = (url) => {
  if (!url) return false;
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
  let urls = url.split("?");
  const isImage = imageExtensions.some(ext => urls[0].toLowerCase().endsWith(ext));
  console.log('isImage:', isImage)
  return isImage;
};

// 获取文件名
const getFileName = (url) => {
  if (!url) return '';
  // 从URL中提取文件名
  const fileName = url.split('?')[0];
  console.log('fileName:', fileName)
  const urlParts = fileName.split('/');
  // 移除查询参数（如果有的话）
  return urlParts[urlParts.length - 1];
};


// 监听表单数据变化，实时缓存
watch(form, (newFormData) => {
  const formDataToCache = {...newFormData};
  cache.local.setJSON('ekycFormData', formDataToCache);
}, {deep: true});


// 移除证件正面照
const removeFrontIdFile = () => {
  form.frontIdFileUrl = '';
  // 重置文件输入框
  if (frontIdFileRef.value) {
    frontIdFileRef.value.value = '';
  }
};

// 移除证件反面照
const removeBackIdFile = () => {
  form.backIdFileUrl = '';
  // 重置文件输入框
  if (backIdFileRef.value) {
    backIdFileRef.value.value = '';
  }
};


// 修改移除文件的函数
const removeCertificateFile = (qualIndex, fileIndex) => {
  form.qualifications[qualIndex].certificateFileUrls.splice(fileIndex, 1);
};

const removePracticeCertificateFile = (qualIndex, fileIndex) => {
  form.qualifications[qualIndex].practiceCertificateFileUrls.splice(fileIndex, 1);
};


// 修改触发文件输入的函数
const triggerFileInput = (type, index) => {
  const elementId = type === 'certificate'
      ? `certificate-upload-${index}`
      : `practice-certificate-upload-${index}`;

  const element = document.getElementById(elementId);
  if (element) {
    element.click();
  }
};

const submitAuth = async () => {
  try {
    // 创建一个不包含文件对象的表单数据副本
    const formDataToSubmit = {...form};
    // 添加当前步骤信息
    formDataToSubmit.step = currentSection.value;
    // 添加状态信息
    formDataToSubmit.status = 1; // 提交后状态变为审核中

    // 发送数据到后端
    const response = await submitEkycData(formDataToSubmit);

    if (response.code === 200) {
      successToast('认证申请提交成功');

      // 更新认证状态为"审核中"
      status.value = '1';  // 修复这里，应该是赋值操作符 = 而不是比较操作符 ===

      // 跳转到审核中页面
      currentSection.value = 'authIng';

      //审核中
      ekycAuth.setAuthenticated(1);

      // 清除缓存的数据
      cache.local.remove('ekycFormData');
    } else {
      errorToast('提交失败，请重试');
    }
  } catch (error) {
    console.error('提交认证申请失败:', error);
    errorToast('提交失败，请检查网络后重试');
  }
};


</script>

<style scoped>
.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.progress-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.progress-line {
  height: 2px;
  align-self: center;
  transition: all 0.3s ease;
}
</style>