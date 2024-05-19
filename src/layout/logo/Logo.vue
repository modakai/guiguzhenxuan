<script setup lang="ts" name="Logo"></script>

<template>
  <div class="logo_container">
    <img src="../../../public/logo.png" alt="硅谷甄选LOGO" />
    <p>硅谷甄选运营平台</p>
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
