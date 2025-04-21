<template>
  <div class="min-h-screen bg-white">
    <main class="max-w-6xl mx-auto px-4 sm:px-6 py-3">
      <!-- 语言切换 -->
      <div class="flex justify-end mb-8 sm:mb-12">
        <div class="relative" v-click-outside="() => isLangMenuOpen = false">
          <button 
            @click="isLangMenuOpen = !isLangMenuOpen"
            class="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900">
            <span class="uppercase">{{ currentLocale }}</span>
            <div class="i-heroicons-chevron-down h-4 w-4" :class="{ 'rotate-180': isLangMenuOpen }"></div>
          </button>
          <div v-show="isLangMenuOpen" 
               class="absolute right-0 mt-1 py-1 bg-white rounded-lg shadow-lg border border-gray-100 min-w-[120px] z-10">
            <button v-for="locale in availableLocales"
                    :key="locale.code"
                    @click="changeLocale(locale.code)"
                    class="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2">
              <span class="uppercase">{{ locale.code }}</span>
              <span class="text-gray-500">{{ locale.name }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 个人介绍 -->
      <div class="mb-12 sm:mb-16">
        <div class="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-6 sm:gap-10 mb-6 sm:mb-10">
          <div class="flex-1 text-center sm:text-left">
            <h1 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Hi, I'm {{ config.name[locale] }}</h1>
            <p class="text-base sm:text-lg text-gray-700 font-medium mb-2 sm:mb-3">{{ config.bio[locale] }}</p>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ config.introduction[locale] }}</p>
          </div>
          <div class="relative group w-24 sm:w-32">
            <img src="/public/images/avatar.png" alt="avatar" 
                 class="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover shadow-lg transform group-hover:scale-105 transition-all duration-300" />
            <div class="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      <!-- 项目展示 -->
      <div class="mb-12 sm:mb-16">
        <h2 class="text-lg font-medium mb-4 sm:mb-6">{{ t('sections.projects') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <a v-for="project in config.products" 
             :key="project.name"
             :href="project.link"
             class="group block p-4 sm:p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex items-start justify-between mb-3 sm:mb-4">
              <img :src="getFavicon(project)" :alt="project.name" 
                   class="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gray-50 p-2 transform group-hover:scale-110 transition-transform duration-300" />
              <div class="i-heroicons-arrow-up-right h-5 w-5 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"></div>
            </div>
            <h3 class="font-bold text-base sm:text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">{{ project.name }}</h3>
            <p class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{{ project.description[locale] }}</p>
          </a>
        </div>
      </div>

      <!-- 小项目展示 -->
      <div class="mb-12 sm:mb-16">
        <h2 class="text-lg font-medium mb-4 sm:mb-6">{{ t('sections.smallProjects') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <a v-for="project in config.smallProducts" 
             :key="project.name"
             :href="project.link"
             class="group block p-4 sm:p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div class="flex items-start justify-between mb-3 sm:mb-4">
              <img :src="getFavicon(project)" :alt="project.name" 
                   class="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gray-50 p-2 transform group-hover:scale-110 transition-transform duration-300" />
              <div class="i-heroicons-arrow-up-right h-5 w-5 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"></div>
            </div>
            <h3 class="font-bold text-base sm:text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">{{ project.name }}</h3>
            <p class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{{ project.description[locale] }}</p>
          </a>
        </div>
      </div>

      <!-- 开源项目 -->
      <div class="mb-12 sm:mb-16">
        <h2 class="text-lg font-medium mb-4 sm:mb-6">{{ t('sections.openSource') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <a v-for="project in config.openSource" 
             :key="project.name"
             :href="project.link"
             class="group block p-4 sm:p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
            <div class="flex items-start justify-between mb-3 sm:mb-4">
              <div class="flex items-center gap-2">
                <span class="font-bold text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-300">{{ project.name }}</span>
              </div>
              <div class="i-heroicons-arrow-up-right h-5 w-5 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"></div>
            </div>
            <p class="text-sm text-gray-600 mb-3 sm:mb-4 group-hover:text-gray-900 transition-colors duration-300 flex-1">{{ project.description[locale] }}</p>
            <div class="flex items-center gap-4 text-sm mt-auto">
              <div class="flex items-center gap-1.5 transform group-hover:scale-110 transition-transform duration-300">
                <StarIcon class="h-4 w-4 text-amber-500" />
                <span class="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{{ project.stars }}</span>
              </div>
              <div class="flex items-center gap-1.5 transform group-hover:scale-110 transition-transform duration-300">
                <div class="i-heroicons-code-bracket h-4 w-4 text-indigo-500"></div>
                <span class="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{{ project.language }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- 联系方式 -->
      <div class="mb-12 sm:mb-16">
        <h2 class="text-lg font-medium mb-4 sm:mb-6">{{ t('sections.contact') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <template v-for="contact in config.contactLinks" :key="contact.platform">
            <!-- 对于不需要链接的项使用 div -->
            <div v-if="contact.noLink"
                 class="group relative flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <img :src="getFavicon(contact)" class="w-5 h-5 rounded-full bg-gray-50" />
              <span class="font-medium text-sm text-gray-900">{{ contact.platform }}</span>
              <div class="ml-auto i-heroicons-arrow-up-right h-4 w-4 text-gray-400 group-hover:text-gray-600"></div>
              
              <!-- 二维码悬浮框 -->
              <div v-if="contact.qrcode" 
                   class="absolute left-1/2 bottom-full -translate-x-1/2 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-2">
                <div class="bg-white rounded-lg shadow-xl p-2 border border-gray-100">
                  <img :src="contact.qrcode" :alt="contact.platform" class="w-32 h-32 object-cover" />
                  <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
                </div>
              </div>
            </div>
            
            <!-- 对于需要链接的项使用 a -->
            <a v-else
               :href="contact.url"
               target="_blank"
               class="group relative flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all duration-300">
              <img :src="getFavicon(contact)" class="w-5 h-5 rounded-full bg-gray-50" />
              <span class="font-medium text-sm text-gray-900">{{ contact.platform }}</span>
              <div class="ml-auto i-heroicons-arrow-up-right h-4 w-4 text-gray-400 group-hover:text-gray-600"></div>
              
              <!-- 二维码悬浮框 -->
              <div v-if="contact.qrcode" 
                   class="absolute left-1/2 bottom-full -translate-x-1/2 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:-translate-y-2">
                <div class="bg-white rounded-lg shadow-xl p-2 border border-gray-100">
                  <img :src="contact.qrcode" :alt="contact.platform" class="w-32 h-32 object-cover" />
                  <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
                </div>
              </div>
            </a>
          </template>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { siteConfig } from '~/config/site'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { StarIcon } from '@heroicons/vue/24/solid'
import { useRoute, useRouter } from 'vue-router'

const config = ref(siteConfig)
const isLangMenuOpen = ref(false)
const router = useRouter()
const route = useRoute()

const { locale, t } = useI18n()

// 可用的语言列表
const availableLocales = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
]

// 当前语言
const currentLocale = computed(() => locale.value)

// 切换语言
function changeLocale(newLocale) {
  // 获取当前路径
  const currentPath = route.fullPath
  const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}/, '')
  
  // 构建新的URL路径
  const newPath = newLocale === 'en' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`
  
  // 使用navigateTo进行导航
  navigateTo(newPath)
  isLangMenuOpen.value = false
  
  // 保存语言偏好
  localStorage.setItem('preferred-locale', newLocale)
}

// 自动检测浏览器语言
onMounted(() => {
  // 首先检查是否有保存的语言偏好
  const savedLocale = localStorage.getItem('preferred-locale')
  if (savedLocale && availableLocales.some(l => l.code === savedLocale)) {
    const currentLocale = route.path.split('/')[1] || 'en'
    
    if (savedLocale !== currentLocale) {
      changeLocale(savedLocale)
    }
    return
  }

  // 检测浏览器语言
  const browserLang = navigator.language.split('-')[0]
  if (availableLocales.some(l => l.code === browserLang) && browserLang !== 'en') {
    changeLocale(browserLang)
  }
})

// 点击外部关闭语言菜单
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}

// 获取网站图标的函数
function getFavicon(project) {
  if (project.icon) return project.icon
  try {
    const domain = new URL(project.link || project.url).hostname
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
  } catch (e) {
    return ''
  }
}
</script>

<style>
/* 移除之前的动画样式，采用更简约的过渡效果 */
</style> 