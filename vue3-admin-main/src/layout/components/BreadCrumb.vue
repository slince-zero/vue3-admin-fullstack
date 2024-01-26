<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in pathList" :key="item.path">
      <router-link v-if="index === 0" :to="{ path: item.path }">
        {{ item.meta.title }}
      </router-link>
      <span v-else>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const pathList = computed(() => {
  return route.matched
})
</script>
