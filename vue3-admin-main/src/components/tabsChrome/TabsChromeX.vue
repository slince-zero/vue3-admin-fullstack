<template>
 <div class="tabs">
  <Tab
   v-for="tab in tabs"
   :key="tab.name"
   :tab="tab"
   :active="activePath === tab.path"
   @click="clickTab(tab)"
   @closeTab="removeTab">
  </Tab>
 </div>
</template>
<script setup>
 import Tab from './Tab.vue'

 const props = defineProps(['tabs', 'activePath'])


 const emit = defineEmits(['clickTab', 'removeTab'])

 const clickTab = (t) => {
  if (t.path == props.activePath) return
  emit('clickTab', t)
 }

 const removeTab = (t) => {
  if (props.tabs.length == 1) return
  emit('removeTab', t)
 }
</script>

<style scoped lang="scss">
 .tabs {
  padding: 8px 10px 0 10px;
  display: flex;
  width: 100%;
 }
</style>
