<script setup lang="ts" name="MenuItem">
import SvgIcons from '@/components/icons/SvgIcons.vue'
import { useRoute, useRouter } from 'vue-router'
// 接收prop参数
defineProps(['menuList'])

const $router = useRouter()
const $route = useRoute()
// 激活类
const isActive = (curPath: string) => {
  return $route.path === curPath ? 'active' : 'normal'
}
let a

// 路由跳转
const goRoute = (toRoutePath: string) => {
  $router.push(toRoutePath)
}
</script>

<template>
  <div class="menu-item-main">
    <template v-for="menu in menuList" :key="menu.path">
      <template v-if="!menu.children">
        <!--    一级路由（无子路由）    -->
        <el-menu-item v-if="!menu.meta.hidden" :index="menu.path" @click="goRoute(menu.path)">
          <template #title>
            <svg-icons class="icon" :name="menu.meta.icon" :class="isActive(menu.path)" />
            <span>{{ menu.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <template v-if="menu.children && menu.children.length == 1">
        <!-- 有且仅有一个子路由 -->
        <el-menu-item
          v-if="!menu.children[0].meta.hidden"
          :index="menu.children[0].path"
          @click="goRoute(menu.path)"
        >
          <svg-icons
            class="icon"
            :name="menu.children[0].meta.icon"
            :class="isActive(menu.children[0].path)"
          />
          <template #title>
            <span>{{ menu.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 有子路由且个数大于1 -->
      <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length > 1">
        <template #title>
          <svg-icons class="icon" :name="menu.meta.icon" :class="isActive(menu.path)" />
          <span>{{ menu.meta.title }}</span>
        </template>
        <!--    递归创建子路由      -->
        <MenuItem :menuList="menu.children" />
      </el-sub-menu>
    </template>
  </div>
</template>

<style scoped lang="scss">
.menu-item-main {
  .icon {
    margin-right: 10px;
  }

  .active {
    fill: var($base-svg-icon-active-color) !important;
  }

  .normal {
    fill: $base-svg-icon-color;
  }
}
</style>
