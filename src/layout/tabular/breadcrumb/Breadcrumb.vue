<script setup lang="ts" name="Breadcrumb">
import { ArrowRight, Expand, Fold } from '@element-plus/icons-vue'
import useLayoutStore from '@/store/modules/layout'
import SvgIcons from '@/components/icons/SvgIcons.vue'
// 设置组件的状态仓库
const settingStore = useLayoutStore()
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
      <el-breadcrumb-item
        v-for="route in $route.matched"
        :key="route.path"
        v-show="route.meta.title"
        :to="route.path"
      >
        <svg-icons class="icon" :name="route.meta.icon as string" />
        <span style="margin-left: 5px">{{ route.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
// 折叠图标
.fold_icon_box {
  margin-right: 10px;
}
.icon {
  vertical-align: middle;
  fill: #000;
}
</style>
