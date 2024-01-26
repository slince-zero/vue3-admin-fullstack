<template>
  <div class="theme-switch">
    <el-icon @click="toggleDark()" v-if="isDark">
      <Moon />
    </el-icon>
    <el-icon @click="toggleDark()" v-else>
      <Sunny />
    </el-icon>
  </div>
</template>
<script setup>
import { useDark } from '@vueuse/core'
import { useAppStore } from '../../store/app'

const store = useAppStore()

const isDark = useDark()
const toggleDark = () => {
  isDark.value = !isDark.value
  store.toggleDarkMode()
}
</script>

<style scoped>
.theme-switch {
  cursor: pointer;
  margin: 0 20px;
}
</style>
