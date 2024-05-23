<script setup lang="ts" name="Layout">
import Logo from '@/layout/logo/Logo.vue'
import Menu from '@/layout/menu/Menu.vue'
import useUserStore from '@/store/modules/user'
import Main from '@/layout/main/Main.vue'
import Tabular from '@/layout/tabular/Tabular.vue'
import useLayoutStore from '@/store/modules/layout'
// layout状态库
const layoutStore = useLayoutStore()
// 用户状态库
let userStore = useUserStore()

const isCollapseClass = () => {
  return { collapse: layoutStore.isCollapse }
}
</script>

<template>
  <div class="layout_container">
    <!--  左侧菜单  -->
    <div class="layout_slider" :class="isCollapseClass()">
      <!--  logo区域   -->
      <Logo />
      <!--  菜单区域  -->
      <el-scrollbar class="menu_scrollbar">
        <el-menu
          :collapse="layoutStore.isCollapse"
          :default-active="$route.path"
          background-color="#001529"
          text-color="white"
          active-text-color="yellowgreen"
        >
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!--  顶部导航  -->
    <header class="layout_tabular" :class="isCollapseClass()">
      <tabular />
    </header>
    <!--  内容区域  -->
    <main class="layout_main" :class="isCollapseClass()">
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
    height: 100vh;
    background-color: $base-menu-background;
    transition: all 0.3s ease-in-out;

    .menu_scrollbar {
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
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
    transition: all 0.3s ease-in-out;

    &.collapse {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
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
    transition: all 0.3s ease-in-out;

    &.collapse {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
