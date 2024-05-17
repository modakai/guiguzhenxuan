<script setup lang="ts" name="App">
import SvgIcons from '@/components/icons/SvgIcons.vue'
</script>

<template>
  <div id="app">
    <h1>测试SVG</h1>
    <SvgIcons :name="'book'" />
  </div>
</template>

<style scoped lang="scss">
#app h1 {
  color: $color-red;
}
</style>
