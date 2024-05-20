<script setup lang="ts" name="MenuItem">
import SvgIcons from '@/components/icons/SvgIcons.vue'

defineProps(['menuList'])
</script>

<template>
  <div class="menu-item-main">
    <template v-for="menu in menuList" :key="menu.path">
      <template v-if="!menu.children">
        <!--    一级路由（无子路由）    -->
        <el-menu-item v-if="!menu.meta.hidden" :index="menu.path">
          <template #title>
            <el-icon>
              <component :is="menu.meta.icon"></component>
            </el-icon>
            <span>{{ menu.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <template v-if="menu.children && menu.children.length == 1">
        <!-- 有且仅有一个子路由 -->
        <el-menu-item v-if="!menu.children[0].meta.hidden" :index="menu.children[0].path">
          <el-icon>
            <component :is="menu.children[0].meta.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ menu.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- 有子路由且个数大于1 -->
      <el-sub-menu :index="menu.path" v-if="menu.children && menu.children.length > 1">
        <template #title>
          <el-icon>
            <component :is="menu.meta.icon"></component>
          </el-icon>
          <span>{{ menu.meta.title }}</span>
        </template>
        <!--    递归创建子路由      -->
        <MenuItem :menuList="menu.children" />
      </el-sub-menu>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
