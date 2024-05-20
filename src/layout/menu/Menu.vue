<script setup lang="ts" name="Menu">
// 接收props参数
import MenuItem from '@/layout/menu/MenuItem.vue'

defineProps(['menuList'])
</script>

<template>
  <div class="menu_main">
    <el-menu class="menus" background-color="#001529" text-color="#fff">
      <MenuItem :menu-list="menuList" />
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.el-menu {
  border-right: 0;
}
</style>
