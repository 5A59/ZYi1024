<template>
  <div>
    <!-- 页面内容 -->
    <slot />
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const availableLocales = computed(() => locales.value.map(l => ({
  code: l.code,
  name: l.name
})))
</script> 