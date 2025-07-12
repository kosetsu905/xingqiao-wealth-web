
// @/store/index.js
import { defineStore } from 'pinia';

  //  0:未认证，1：个人信息认证，2：资质认证，3：审核中，4：审核通过，5：审核失败
export const ekycAuthStore = defineStore('ekycAuth', {
  state: () => ({
    ekycAuthenticated: 0
  }),
  actions: {
    setAuthenticated(status) {
      this.ekycAuthenticated = status;
      // 将认证状态存储到 localStorage
      localStorage.setItem('ekycAuthenticated', status);
    },
    // 初始化时从 localStorage 获取认证状态
    init() {
      const status = localStorage.getItem('ekycAuthenticated');
      if (status !== null) {
        this.ekycAuthenticated = parseInt(status);
      }
    }
  }
});