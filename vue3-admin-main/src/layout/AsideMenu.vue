<template>
  <el-scrollbar>
    <div class="aside">
      <div class="logo">
        <img src="../assets/mainLogo.svg" alt="" />
        <span v-if="!asideCollapse"> Vue3-admin </span>
      </div>
      <el-menu
        router
        class="el-menu"
        :collapse="asideCollapse"
        :default-active="route.path">
        <TreeMenu :routerMenu="routerMenu"></TreeMenu>
      </el-menu>
    </div>
  </el-scrollbar>
</template>

<script setup>
import TreeMenu from './TreeMenu.vue'
import { routerMenu } from '../router/routerMenu'
import { useAppStore } from '../store/app'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const store = useAppStore()
const { asideCollapse } = storeToRefs(store)
const route = useRoute()
</script>

<style scoped lang="scss">
.aside {
  height: 100vh;
  .logo {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    span {
      font-size: 20px;
      margin: 0 auto;
    }
    img {
      width: 40px;
      margin: 10px;
    }
  }
  .el-menu {
    height: calc(100vh - 60px);
    border-right: 0;
  }
}
</style>
