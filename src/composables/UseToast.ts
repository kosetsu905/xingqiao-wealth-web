import { createApp, h, ref } from 'vue'
import Toast from '@/components/common/Toast.vue'

const toasts
    = ref<Array<{ id: number; component: any }>>([])
let toastId = 0

export function useToast() {
    const showToast = (message: string,
                       type: 'success' | 'info' |
                           'warning' | 'error' = 'info',
                       duration = 3000) => {
        const id = toastId++
        const toastContainer = document.createElement('div')
        document.body.appendChild(toastContainer)

        const toastApp = createApp({
            render() {
                return h(Toast, {
                    message,
                    type,
                    duration,
                    onVnodeUnmounted: () => {
                        setTimeout(() => {
                            toastApp.unmount()
                            document.body.removeChild(toastContainer)
                            toasts.value = toasts.value.filter(t => t.id !== id)
                        }, 500) // 等待动画结束
                    }
                })
            }
        })

        toastApp.mount(toastContainer)
        toasts.value.push({ id, component: toastApp })
    }

    return {
        showToast,
        successToast: (message: string, duration?: number) => showToast(message, 'success', duration),
        infoToast: (message: string, duration?: number) => showToast(message, 'info', duration),
        warningToast: (message: string, duration?: number) => showToast(message, 'warning', duration),
        errorToast: (message: string, duration?: number) => showToast(message, 'error', duration)
    }
}