import { defineStore } from 'pinia';
import { finnhubService } from '@/plugins/FinnhubService.js';

export const ekycAuthStore = defineStore('ekycAuth', {
  state: () => ({
    ekycAuthenticated: 0
  }),

  actions: {
    setEkycAuthenticated(status) {
      this.ekycAuthenticated = status;
    }
  }
});

export const useStocksStore = defineStore('stocks', {
  state: () => ({
    popularStocks: [],
    searchResults: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchPopularStocks() {
      this.loading = true
      try {
        this.popularStocks = await finnhubService.searchStocks()
        this.error = null
      } catch (err) {
        this.error = 'Failed to fetch popular stocks'
        console.error(err)
      } finally {
        this.loading = false
      }
    },

    async searchStocks(query) {
      this.loading = true
      try {
        this.searchResults = await finnhubService.searchStocks(query)
        this.error = null
      } catch (err) {
        this.error = 'Search failed'
        console.error(err)
      } finally {
        this.loading = false
      }
    }
  }
})
