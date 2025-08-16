<template>
  <div id="login-page" class="login-page">
    <div id="login-container" class="login-container">
      <!-- 左侧栏-->
      <BrandSection :brand-data="brandData"/>
      <!-- 右侧栏-->
      <RegisterFormSection
          :phone-number="formData.phoneNumber"
          :country-code="formData.countryCode"
          :email="formData.email"
          @user-type-changed="changeLoginType"
          @show-register-code="showRegisterCodeSendUpdate"/>

      <!--注册发送短信验证码弹框 -->
      <div v-if="showRegisterCodeSend" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <RegisterCodeSend
            :key="registerCodeKey"
            :login-object="currentPwdObject"
            @close="showRegisterCodeSend = false"
            @update:phone="(value) => updateFormData('phoneNumber', value)"
            @update:countryCode="(value) => updateFormData('countryCode', value)"
            @update:email="(value) => updateFormData('email', value)"/>
      </div>

    </div>
  </div>
</template>


<script setup>
import {computed, ref, watch} from 'vue';
import BrandSection from '../../components/login/BrandSection.vue'
import RegisterFormSection from "@/components/login/RegisterFormSection.vue";
import RegisterCodeSend from "@/components/login/RegisterCodeSend.vue";
const showRegisterCodeSend = ref(false);
const registerCodeKey = ref(Date.now().toString());
const userType = ref("01");


// 共享表单数据
const formData = ref({
  phoneNumber: '',
  countryCode: '+86',
  email: '',
  userType: userType.value
});



// 新增计算属性获取当前登录对象，确保每次都是新对象
const currentPwdObject = computed(() => ({
  phoneNumber: formData.value.phoneNumber,
  countryCode: formData.value.countryCode,
  email: formData.value.email,
  userType: formData.value.userType || userType.value
}));

// 更新表单数据的方法
const updateFormData = (field, value) => {
  console.log('更新表单数据', field, value);
  formData.value[field] = value;
}

// 监听用户类型变化，同步到formData
watch(userType, (newValue) => {
  formData.value.userType = newValue;
});



const showRegisterCodeSendUpdate = (data) => {
  console.log('接收CommonRegisterForm main 组件的数据更新', data);
  // 确保数据正确合并
  if (data) {
    Object.assign(formData.value, data);
  }
  registerCodeKey.value = Date.now().toString();
  console.log('弹框打开，当前key:', registerCodeKey.value);
  showRegisterCodeSend.value = true;
}


// 监听showRegisterCodeSend变化，确保数据同步
watch(showRegisterCodeSend, (newValue) => {
  if (newValue) {
    console.log('弹框打开，当前数据:', currentPwdObject.value);
  }
});


const brandData = ref({
  name: '账户安全保护',
  value: '我们致力于保护您的账户安全，确保资金安全可靠',
  image: '/images/45a7e2715c-f1858b4d9da69dbba506.png'
});


const changeLoginType = (type) => {
  console.log(type)
  // 将子组件传递过来的数据赋值给响应式数据
  userType.value = type;
}
</script>


<style scoped>
.login-container {
  @apply w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row;
}
.login-page{
  @apply flex min-h-[800px] items-center justify-center p-4;
}
</style>