<template>
  <template v-for="menu in routerMenu">
    <el-sub-menu
      v-if="menu.children && menu.children.length"
      :key="menu.name"
      :index="menu.path">
      <template #title>
        <el-icon>
          <component :is="menu.icon"></component>
        </el-icon>
        <span v-cloak>{{ menu.meta.title }}</span>
      </template>
      <!-- 递归调用组件，直到没有子菜单 -->
      <TreeMenu :routerMenu="menu.children"></TreeMenu>
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path" :key="menu.name">
      <el-icon>
        <component :is="menu.icon"></component>
      </el-icon>
      <template #title>{{ menu.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script setup>
defineProps(['routerMenu'])
</script>

<style scoped lang="scss"></style>
