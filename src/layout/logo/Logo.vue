<script setup lang="ts" name="Logo">
import setting from '@/setting'
</script>

<template>
  <div class="logo_container" v-if="setting.logoShow">
    <img :src="setting.logoUrl" :alt="setting.title" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<style scoped lang="scss">
.logo_container {
  display: flex;
  align-items: center;
  width: 100%;
  height: $base-menu-logo-height;
  padding: 20px;
  color: #fff;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    margin-left: 10px;
    font-size: $base-logo-title-font-size;
  }
}
</style>
