<script setup lang="ts" name="Main">
import useLayoutStore from '@/store/modules/layout'
import { nextTick, ref, watch } from 'vue'

const layoutStore = useLayoutStore()
let refreshFlag = ref(true)

// 监听 layoutStore.refresh 来控制刷新
watch(
  () => layoutStore.refresh,
  () => {
    // 刷新视图
    refreshFlag.value = false
    nextTick(() => {
      refreshFlag.value = true
    })
  }
)
</script>

<template>
  <router-view v-slot="{ Component }">
    <Transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 -->
      <component :is="Component" v-if="refreshFlag" />
    </Transition>
  </router-view>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.5s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
