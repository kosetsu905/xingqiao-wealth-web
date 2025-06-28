<template>
    <header id="navbar" :class="['fixed w-full top-0 z-50', navbarClasses]" class="navbar-transition">
        <nav class="bg-white/95 backdrop-blur-sm shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a href="#" class="flex-shrink-0 flex items-center">
                            <i class="fa fa-globe text-primary text-2xl mr-2"></i>
                            <span class="text-xl font-bold text-primary">环球金融</span>
                        </a>
                        <div class="hidden sm:ml-8 sm:flex space-x-8">
                            <a href="#features" class="nav-link">产品特点</a>
                            <a href="#products" class="nav-link">金融产品</a>
                            <a href="#process" class="nav-link">服务流程</a>
                            <a href="#about" class="nav-link">关于我们</a>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <button @click="handleLogin" class="btn-primary mr-2">
                            登录
                        </button>
                        <button @click="handleRegister" class="btn-outline">
                            注册
                        </button>
                        <button class="ml-4 block sm:hidden text-gray-500 hover:text-primary focus:outline-none" @click="toggleMobileMenu" >
                            <i class="fa fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- 移动端菜单 -->
            <div id="mobile-menu"  :class="{ 'hidden': !isMobileMenuOpen }" class="sm:hidden bg-white border-t">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="#features" class="mobile-menu-item">产品特点</a>
                    <a href="#products" class="mobile-menu-item">金融产品</a>
                    <a href="#process" class="mobile-menu-item">服务流程</a>
                    <a href="#about" class="mobile-menu-item">关于我们</a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Navbar',
        props: {
            // 可以定义需要的props
        },
        data() {
            return {
                isScrolled: false,
                isMobileMenuOpen: false
            }
        },
        computed: {
            navbarClasses() {
                return {
                    'bg-white shadow': this.isScrolled,
                    'bg-transparent': !this.isScrolled
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.handleScroll)
        },
        created() {
            console.log("页面已加载，执行初始化操作")
        },
        methods: {
            handleScroll() {
                this.isScrolled = window.scrollY > 50
            },
            toggleMobileMenu() {
                this.isMobileMenuOpen = !this.isMobileMenuOpen
            },
            handleLogin() {
                this.$emit('login-clicked')
            },
            handleRegister() {
                this.$emit('register-clicked')
            }
        
        }
    }
</script>

<style scoped>
.navbar-transition {
  @apply transition-all duration-300;
}

.btn-primary {
  @apply bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors;
}

.btn-outline {
  @apply bg-white hover:bg-gray-50 text-primary border border-primary px-4 py-2 rounded-md text-sm font-medium transition-colors;
}

.nav-link {
  @apply text-dark hover:text-primary px-3 py-2 text-sm font-medium transition-colors;
}

.mobile-menu-item {
  @apply block px-3 py-2 text-base font-medium text-dark hover:bg-gray-50 hover:text-primary rounded-md;
}

#mobile-menu {
  @apply sm:hidden bg-white border-t;
}
</style>