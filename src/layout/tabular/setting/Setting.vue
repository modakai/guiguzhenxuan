<script setup lang="ts" name="Setting">
import { ArrowDown, FullScreen, Refresh, Setting } from '@element-plus/icons-vue'
</script>

<template>
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
</template>

<style scoped lang="scss">
.el-dropdown {
  margin-right: 10px;
}

.avatar {
  width: 24px;
  height: 24px;
  margin: 0 10px;
  border-radius: 50%;
}
</style>
