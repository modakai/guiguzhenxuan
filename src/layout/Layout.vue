<script setup lang="ts" name="Layout"></script>

<template>
  <div class="layout_container">
    <!--  左侧菜单  -->
    <div class="layout_slider">左侧菜单</div>
    <!--  顶部导航  -->
    <header class="layout_tabular">顶部导航</header>
    <!--  内容区域  -->
    <main class="layout_main">内容区域</main>
  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: skyblue;

  //  左侧菜单样式
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
  }

  // 顶部导航样式
  .layout_tabular {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabular-height;
    background-color: aquamarine;
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
