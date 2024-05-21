<script setup lang="ts" name="Tabular">
import { Fold, ArrowRight, Refresh, FullScreen, Setting, ArrowDown } from '@element-plus/icons-vue'
</script>

<template>
  <div class="tabular">
    <!--  左边部分  -->
    <div class="tabular_left">
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
    </div>
    <!--  右边部分  -->
    <div class="tabular_right">
      <!--   功能按钮区   -->
      <el-button circle :icon="Refresh" />
      <el-button circle :icon="FullScreen" />
      <el-button circle :icon="Setting" />
      <!--   头像区   -->
      <img src="/logo.png" class="avatar" alt="admin" />
      <!-- 下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabular {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  //  左边部分
  .tabular_left {
    display: flex;
    align-items: center;
    margin-left: 20px;

    // 折叠图标
    .fold_icon_box {
      margin-right: 10px;
    }
  }

  // 右边部分
  .tabular_right {
    display: flex;
    align-items: center;

    .el-dropdown {
      margin-right: 10px;
    }

    .avatar {
      width: 24px;
      height: 24px;
      margin: 0 10px;
      border-radius: 50%;
    }
  }
}
</style>
