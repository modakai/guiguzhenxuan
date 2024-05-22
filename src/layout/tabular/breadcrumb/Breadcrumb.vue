<script setup lang="ts" name="Breadcrumb">
import { ArrowRight, Expand, Fold } from '@element-plus/icons-vue'
import useSettingStore from '@/store/modules/setting'
// 设置组件的状态仓库
const settingStore = useSettingStore()
// 修改menu菜单的折叠图标
const changeFoldIcon = () => {
  settingStore.isCollapse = !settingStore.isCollapse
}
</script>

<template>
  <!--  折叠图标  -->
  <div class="fold_icon_box">
    <el-icon @click="changeFoldIcon">
      <Expand v-if="settingStore.isCollapse" />
      <Fold v-else />
    </el-icon>
  </div>
  <!--  面包屑导航  -->
  <div class="left_breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色管理</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
// 折叠图标
.fold_icon_box {
  margin-right: 10px;
}
</style>
