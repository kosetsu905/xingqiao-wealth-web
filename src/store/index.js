import { defineStore } from 'pinia'



// demo 1使用组合式 API 风格
export const useUserStore = defineStore('user', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  async function fetchData() {
    const response = await fetch('https://api.example.com/data')
    name.value = await response.json()
  }
  
  return { count, name, doubleCount, increment, fetchData }
})