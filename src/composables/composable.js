import { computed } from 'vue'

export function useCurrentDate() {
    const currentDate = computed(() => {
        const now = new Date()
        const year = now.getFullYear()
        const month = (now.getMonth() + 1).toString().padStart(2, '0')
        const day = now.getDate().toString().padStart(2, '0')
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        const weekday = weekdays[now.getDay()]
        return `${year}年${month}月${day}日 ${weekday}`
    })

    return {
        currentDate
    }
}
