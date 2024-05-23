<script setup lang="ts" name="Home">
import { onMounted } from 'vue'
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()

// 登入成功后 跳转对应的home
onMounted(() => {
  // 发起获取用户信息
  userStore.getUserInfo()
})
</script>

<template>
  <div class="Home">
    <h1>欢迎 {{ userStore.username }} 回来！！！</h1>
  </div>
</template>

<style scoped lang="scss"></style>
