import { defineStore } from 'pinia';

interface EkycAuthState {
  ekycAuthenticated: number;
}

export const ekycAuthStore = defineStore('ekycAuth', {
  state: (): EkycAuthState => ({
    ekycAuthenticated: 0
  }),
  actions: {
    setAuthenticated(status: number) {
      this.ekycAuthenticated = status;
      localStorage.setItem('ekycAuthenticated', status.toString());
    },
    init() {
      const status = localStorage.getItem('ekycAuthenticated');
      if (status !== null) {
        this.ekycAuthenticated = parseInt(status);
      }
    }
  }
});