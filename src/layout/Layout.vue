<script setup lang="ts" name="Layout">
import Logo from '@/layout/logo/Logo.vue'
import Menu from '@/layout/menu/Menu.vue'
import useUserStore from '@/store/modules/user'
import Main from '@/layout/main/Main.vue'
import Tabular from '@/layout/tabular/Tabular.vue'
let userStore = useUserStore()
</script>

<template>
  <div class="layout_container">
    <!--  左侧菜单  -->
    <div class="layout_slider">
      <!--  logo区域   -->
      <Logo />
      <!--  菜单区域  -->
      <el-scrollbar class="menu_scrollbar">
        <Menu :menuList="userStore.menuRoutes" />
      </el-scrollbar>
    </div>
    <!--  顶部导航  -->
    <header class="layout_tabular">
      <tabular />
    </header>
    <!--  内容区域  -->
    <main class="layout_main">
      <Main />
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  //  左侧菜单样式
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;

    .menu_scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      transition: all 0.3s;

      .el-menu {
        border-right: none;
        background-color: $base-menu-background;
        .el-menu-item {
          color: #fff;
          background-color: #001535; // 一旦设置了 鼠标移上去的过度动画就没了
        }
      }
    }
  }

  // 顶部导航样式
  .layout_tabular {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabular-height;
    color: #000;
  }

  // 主内容区域样式
  .layout_main {
    position: absolute;
    top: $base-tabular-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100% - $base-tabular-height);
    background-color: rebeccapurple;
    padding: 20px;
    overflow: auto; // 防止内容溢出
  }
}
</style>
