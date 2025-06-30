<template>

<!--登录页-->
  <LoginPage />
</template>

<script>
import LoginPage from './components/LoginPage.vue'


  export default {
    components: {
      LoginPage
    },
  data() {
    return {

    };
  },
  created() {
    console.log("页面已加载，执行初始化操作")

  },
  methods: {

  }
};

</script>

<style scoped>

</style>