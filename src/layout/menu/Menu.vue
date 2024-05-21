<script setup lang="ts" name="Menu">
// 接收props参数
import MenuItem from '@/layout/menu/MenuItem.vue'

defineProps(['menuList'])
</script>

<template>
  <div class="menu_main">
    <el-menu
      class="menus"
      :default-active="$route.path"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#3e957e"
    >
      <MenuItem :menu-list="menuList" />
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.el-menu {
  border-right: 0;
}
</style>
