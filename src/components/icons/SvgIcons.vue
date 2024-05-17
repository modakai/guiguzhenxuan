<script setup lang="ts" name="SvgIcons">
// 类型约束
interface SvgIconsInter {
  prefix?: string
  name: string
  color?: string
  width?: string
  height?: string
}

withDefaults(defineProps<SvgIconsInter>(), {
  prefix: '#icon-',
  name: '',
  color: '',
  width: '16px',
  height: '16px'
})
</script>

<template>
  <div>
    <svg :style="{ width: width, height: height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>
