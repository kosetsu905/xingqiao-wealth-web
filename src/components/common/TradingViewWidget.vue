<template>
    <div class="w-full">
        <h3 v-if="title" class="font-semibold text-2xl text-blue-500 mb-5">{{ title }}</h3>
        <div
                :class="['tradingview-widget-container', className]"
                ref="containerRef"
        >
            <div class="tradingview-widget-container__widget" :style="{ height, width: '100%' }"></div>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted, onUnmounted, watch } from 'vue'

    const props = defineProps({
        title: {
            type: String,
            required: false
        },
        scriptUrl: {
            type: String,
            required: true
        },
        config: {
            type: Object,
            required: true
        },
        height: {
            type: Number,
            default: 600
        },
        className: {
            type: String,
            default: ''
        }
    })

    const containerRef = ref(null)
    let isLoaded = false

    const loadWidget = () => {
        if (!containerRef.value || isLoaded) return

        containerRef.value.innerHTML = `<div class="tradingview-widget-container__widget" style="width: 100%; height: ${props.height}px;"></div>`

        const script = document.createElement("script")
        script.src = props.scriptUrl
        script.async = true
        script.innerHTML = JSON.stringify(props.config)

        containerRef.value.appendChild(script)
        isLoaded = true
    }

    const cleanupWidget = () => {
        if (containerRef.value) {
            containerRef.value.innerHTML = ''
            isLoaded = false
        }
    }

    onMounted(() => {
        loadWidget()
    })

    onUnmounted(() => {
        cleanupWidget()
    })

    // 监听配置变化，重新加载组件
    watch(
        () => [props.scriptUrl, props.config, props.height],
        () => {
            cleanupWidget()
            loadWidget()
        },
        { deep: true }
    )
</script>