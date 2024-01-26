<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" :icon="Download" @click="handleDownload"
          >导出</el-button
        >
      </div>
      <el-table :data="tableData" border class="table">
        <el-table-column
          prop="id"
          label="ID"
          width="55"
          align="center"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sno" label="学号"></el-table-column>
        <el-table-column prop="class" label="班级"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Download } from '@element-plus/icons-vue'
import * as xlsx from 'xlsx'

const tableData = ref([
  {
    id: 1,
    name: '小明',
    sno: 'S001',
    class: '一班',
    age: '10',
    sex: '男',
  },
  {
    id: 2,
    name: '小红',
    sno: 'S002',
    class: '一班',
    age: '9',
    sex: '女',
  },
  {
    id: 3,
    name: '小白',
    sno: 'S003',
    class: '一班',
    age: '6',
    sex: '女',
  },
  {
    id: 4,
    name: '小黑',
    sno: 'S003',
    class: '二班',
    age: '7',
    sex: '女',
  },
  {
    id: 5,
    name: '小蓝',
    sno: 'S003',
    class: '一班',
    age: '6',
    sex: '男',
  },
  {
    id: 6,
    name: '小绿',
    sno: 'S003',
    class: '二班',
    age: '6',
    sex: '女',
  },
  {
    id: 7,
    name: '小黄',
    sno: 'S003',
    class: '一班',
    age: '6',
    sex: '男',
  },
])

const list = [['序号', '姓名', '学号', '班级', '年龄', '性别']]
const handleDownload = () => {
  tableData.value.map((item, index) => {
    list.push([index + 1, item.name, item.sno, item.class, item.age, item.sex])
    return item
  })
  const wb = xlsx.utils.book_new()
  const ws = xlsx.utils.json_to_sheet(list)
  xlsx.utils.book_append_sheet(wb, ws, 'Sheet1')
  xlsx.writeFile(wb, 'table.xlsx')
}
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  border: 2px solid #ebeef5;
  border-radius: 10px;
  margin: 10px;
  
  .el-table {
    margin: 10px 0;
  }
}
</style>
