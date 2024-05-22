<script setup lang="ts" name="Tabular">
import Breadcrumb from '@/layout/tabular/breadcrumb/Breadcrumb.vue'
import Setting from '@/layout/tabular/setting/Setting.vue'
</script>

<template>
  <div class="tabular">
    <!--  左边部分  -->
    <div class="tabular_left">
      <Breadcrumb />
    </div>
    <!--  右边部分  -->
    <div class="tabular_right">
      <Setting />
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
  }

  // 右边部分
  .tabular_right {
    display: flex;
    align-items: center;
  }
}
</style>
