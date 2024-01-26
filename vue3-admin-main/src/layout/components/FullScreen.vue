<template>
  <div class="full-screen" :title="isFullscreen ? '退出全屏' : '全屏'">
    <el-icon :size="16" @click="toggle">
      <FullScreen />
    </el-icon>
  </div>
</template>
<script setup>
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()
</script>
<style scoped>
.full-screen {
    cursor: pointer;
    width: 16px;
    height: 16px;
}
</style>
