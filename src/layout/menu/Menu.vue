<template>
  <template v-for="item in menuList" :key="item.path">
    <!--没有子路由-->
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goRoute">
        <svg-icons
          class="icon"
          :name="item.meta.icon"
          :class="{ active: $route.path === item.path }"
        />
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由但是只有一个子路由 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        :index="item.children[0].path"
        v-if="!item.children[0].meta.hidden"
        @click="goRoute"
      >
        <svg-icons
          class="icon"
          :name="item.children[0].meta.icon"
          :class="{ active: $route.path === item.children[0].path }"
        />
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且个数大于一个1 -->
    <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
      <template #title>
        <svg-icons class="icon" :name="item.meta.icon" />
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import SvgIcons from '@/components/icons/SvgIcons.vue'
//获取父组件传递过来的全部路由数组
defineProps(['menuList'])

//获取路由器对象
let $router = useRouter()
let $route = useRoute()
//点击菜单的回调
const goRoute = (vc: any) => {
  //路由跳转
  $router.push(vc.index)
}
// 激活类 返回字符串的方式是无效的
const isActive = (curPath: string) => {
  return { active: $route.path === curPath }
}
</script>
<style scoped lang="scss">
.icon {
  margin-right: 10px;
  fill: $base-svg-icon-color;
}

.active {
  fill: var($base-svg-icon-active-color) !important;
}
</style>
