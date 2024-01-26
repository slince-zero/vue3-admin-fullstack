<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-select
          v-model="query.address"
          placeholder="地址"
          class="handle-select mr10">
          <el-option key="1" label="广东省" value="广东省"></el-option>
          <el-option key="2" label="湖南省" value="湖南省"></el-option>
        </el-select>
        <el-input
          v-model="query.name"
          placeholder="用户名"
          class="handle-input mr10"></el-input>
        <el-button type="primary" :icon="Search" @click="handleSearch"
          >搜索</el-button
        >
        <el-button type="primary" :icon="Plus" @click="handleAdd"
          >新增</el-button
        >
      </div>

      <el-table class="handle-table" :data="displayData" stripe border>
        <el-table-column
          prop="id"
          label="ID"
          width="55"
          align="center"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column label="账户余额">
          <template #default="scope">￥{{ scope.row.money }}</template>
        </el-table-column>
        <el-table-column label="头像(查看大图)" align="center">
          <template #default="scope">
            <el-image
              class="table-image"
              :src="scope.row.thumb"
              :preview-src-list="[scope.row.thumb]"
              preview-teleported>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="状态" align="center">
          <template #default="scope">
            <el-tag
              :type="
                scope.row.status === '成功'
                  ? 'success'
                  : scope.row.state === '失败'
                  ? 'danger'
                  : ''
              ">
              {{ scope.row.state }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="注册时间"></el-table-column>
        <el-table-column label="操作" width="220" align="center">
          <template #default="scope">
            <el-button
              color="#00bc7e"
              plain
              :icon="Edit"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-popconfirm
              title="你确定要删除吗?"
              @confirm="handleDelete(scope.$index)">
              <template #reference>
                <el-button color="#e6808a" plain :icon="Delete">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        class="handle-pagination"
        layout="total, prev, pager, next"
        :page-size="query.pageSize"
        :current-page="query.pageIndex"
        :total="tableData.length"
        @current-change="handlePageChange">
      </el-pagination>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { Delete, Edit, Search, Plus } from '@element-plus/icons-vue'
import { getTableData } from '../../api/tableRequest'
import { ElMessage } from 'element-plus'

const query = reactive({
  address: '',
  name: '',
  pageIndex: 1, // 默认在第一页
  pageSize: 10, // 默认每页展示10条
})

// 定义初始表格数据
const tableData = ref([])
// 定义每个页面要展示的数据
const displayData = ref([])
// 获取表格数据
getTableData().then((res) => {
  tableData.value = res.list
  handlePageChange(1)
})

const handleSearch = () => {}

const handleAdd = () => {}

const handleEdit = (index, row) => {}

const handleDelete = (index) => {
  displayData.value.splice(index, 1)
  ElMessage.success('删除成功')
}

const handlePageChange = (newPageIndex) => {
  query.pageIndex = newPageIndex
  const begin = (newPageIndex - 1) * query.pageSize
  const end = newPageIndex * query.pageSize
  displayData.value = tableData.value.slice(begin, end)
}
</script>
<style lang="scss" scoped>
.container {
  padding: 20px;
  border: 2px solid #ebeef5;
  border-radius: 10px;
  margin: 10px;
  .handle-box {
    display: flex;
    .el-select {
      width: 150px;
      margin: 0 10px;
    }
    .el-input {
      width: 250px;
      margin-right: 10px;
    }
  }

  .handle-table {
    margin-top: 20px;
    .table-image {
      width: 40px;
      height: 40px;
      border-radius: 20%;
    }
    .el-button {
      margin: 0 5px;
    }
  }
  .handle-pagination {
    margin-top: 20px;
  }
}
</style>
