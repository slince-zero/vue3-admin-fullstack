<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-upload
          :limit="1"
          accept=".xlsx, .xls"
          :show-file-list="false"
          :before-upload="beforeUpload"
          :http-request="() => {}">
          <el-button :icon="Upload" type="success"> 批量导入</el-button>
        </el-upload>
        <el-link href="/template.xlsx" target="_blank" :underline="false"
          >下载模板</el-link
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
        <el-table-column prop="sex" label="性别"></el-table-column
      ></el-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Upload } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import * as XLSX from 'xlsx'

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
const beforeUpload = (file) => {
  if (
    file.type !==
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ) {
    ElMessage.error('文件格式不正确')
    return false
  }
  const reader = new FileReader()
  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result)
    const workbook = XLSX.read(data, { type: 'array' })
    const wsname = workbook.SheetNames[0] // 取第一张表
    const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[wsname])
    tableData.value.push(...jsonData)
  }
  reader.readAsArrayBuffer(file)
  console.log(tableData.value, '222222222')

  ElMessage.success('文件上传成功')
  return false
}
</script>

<style scoped lang="scss">
.container {
  padding: 20px;
  border: 2px solid #ebeef5;
  border-radius: 10px;
  margin: 10px;
  .handle-box {
    display: flex;
    .el-link {
      margin: 0 5px;
    }
  }
  .el-table {
    margin: 10px 0;
  }
}
</style>
