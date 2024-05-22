<script setup lang="ts" name="Breadcrumb">
import { ArrowRight, Fold } from '@element-plus/icons-vue'
</script>

<template>
  <!--  折叠图标  -->
  <div class="fold_icon_box">
    <el-icon>
      <Fold />
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
