<template></template>
<script setup>
 import { getCurrentUserInfo } from '../../api/user'
 import { ElNotification } from 'element-plus'
 // 获取当前用户信息
 const currentUserInfo = await getCurrentUserInfo()
 // 显示成功信息
 ElNotification({
  title: '欢迎',
  message: `欢迎回来，${currentUserInfo.username}`,
  type: 'success',
  offset: 50,
  duration: 2000,
  position: 'bottom-right',
 })
</script>
