<template>
 <div class="main-body">
  <el-container class="main">
   <el-aside :width="asideCollapse ? '60px' : '200px'">
    <AsideMenu></AsideMenu>
   </el-aside>
   <el-container>
    <el-header class="header" style="padding: 0">
     <HeaderBar></HeaderBar>
    </el-header>
    <!-- 切换页面 -->
    <TabsChrome></TabsChrome>
    <el-main>
     <router-view></router-view>
    </el-main>
   </el-container>
  </el-container>
  <!-- 由于是异步组件,所以需要用Suspense，因此单独抽离了一个组件包裹在 Suspense 中 -->
  <!-- <Suspense> <MessageBox /> </Suspense>         -->
 </div>
</template>

<script setup>
 import AsideMenu from './AsideMenu.vue'
 import HeaderBar from './HeaderBar.vue'
 import TabsChrome from './TabsChrome.vue'
 import { storeToRefs } from 'pinia'
 import { useAppStore } from '../store/app'
//  import MessageBox from './components/MessageBox.vue'
 const store = useAppStore()
 const { asideCollapse } = storeToRefs(store)
</script>

<style scoped>
 .main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .el-aside {
   transition: 0.3s;
  }
  .header {
   padding: 0;
  }

  .el-main {
   padding: 0;
  }
 }
</style>
