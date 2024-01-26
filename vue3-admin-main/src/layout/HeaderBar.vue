<template>
  <div class="header">
    <div class="header-left">
      <!-- 收缩按钮 -->
      <el-button link @click="store.toggleAsideCollapse">
        <el-icon :size="22" v-if="store.asideCollapse">
          <expand />
        </el-icon>
        <el-icon :size="22" v-else>
          <Fold />
        </el-icon>
      </el-button>
      <!-- 面包屑 -->
      <BreadCrumb></BreadCrumb> 
    </div>
    <div class="header-right">
      <!-- 全屏组件 -->
      <FullScreen></FullScreen>
      <!-- 黑暗模式 -->
      <DarkMode></DarkMode>
      <!-- 头像下拉框 -->
      <el-dropdown trigger="click">
        <img class="avator" src="../assets/avator.png" alt="" />
        <template #dropdown>
          <el-dropdown-menu>
            <!-- command 是点击时触发的回调 -->
            <el-dropdown-item @click="people_center">个人中心</el-dropdown-item>
            <el-dropdown-item @click="handel_exit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '../store/app'
import BreadCrumb from './components/BreadCrumb.vue'
import FullScreen from './components/FullScreen.vue'
import DarkMode from './components/darkmode.vue'
import { useRouter } from 'vue-router'
import { markRaw } from 'vue' // 用于渲染图标
import { ElMessageBox } from 'element-plus'
import { Delete } from '@element-plus/icons-vue'
import { logout } from '../api/user'
import { ElMessage } from 'element-plus'
const router = useRouter()

const store = useAppStore()

// 个人中心
const people_center = () => {
  ElMessageBox.alert('个人中心', '个人中心', {
    type: 'success',
    icon: markRaw(Delete),
  })
}

//  退出
const handel_exit = async () => {
  const res = await logout()
  if (res.success) {
    localStorage.removeItem('token')
    router.push('/login')
    ElMessage.success(res.data.message)
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;

  align-items: center;
  .header-left {
    margin: 0 20px;
    display: flex;
    align-items: center;
    .el-breadcrumb {
      margin-left: 10px;
    }
  }
  .header-right {
    display: flex;
    margin: 0 20px;
    align-items: center;
    .avator {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
