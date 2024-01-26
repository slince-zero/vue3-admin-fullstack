<template>
  <div class="container">
    <div class="content">markdown 编辑器</div>
    <MdEditor v-model="text" :theme="theme_change" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MdEditor } from 'md-editor-v3'
import { useAppStore } from '../../store/app'
import { watchEffect } from 'vue'
import 'md-editor-v3/lib/style.css'

const store = useAppStore()
const theme_change = ref('')
watchEffect(() => {
  theme_change.value = store.darkMode == true ? 'dark' : 'light'
})

const text = ref('# Hello Editor')
</script>
<style scoped lang="scss">
.container {
  padding: 20px;
  border: 2px solid #ebeef5;
  border-radius: 10px;
  margin: 10px;
  .content {
    font-size: 30px;
    margin: 10px;
  }
}
</style>
