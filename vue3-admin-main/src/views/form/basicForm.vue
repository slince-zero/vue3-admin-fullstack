<template>
  <div class="container">
    <el-form :model="form" label-width="120px">
      <el-form-item label="表单名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="地域名称">
        <el-select v-model="form.region" placeholder="请设置你的地区">
          <el-option label="上海" value="shanghai" />
          <el-option label="北京" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="时间">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="选择一个日期"
            style="width: 100%" />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.date2"
            placeholder="选择一个时间"
            style="width: 100%" />
        </el-col>
      </el-form-item>
      <el-form-item label="多选框">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="小明" />
          <el-checkbox label="小黑" />
          <el-checkbox label="小白" />
          <el-checkbox label="小红" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="单选框">
        <el-radio-group v-model="form.resource">
          <el-radio label="小白" />
          <el-radio label="小黑" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文本框">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped lang="scss">
.container {
  padding: 20px;
  border: 2px solid #ebeef5;
  border-radius: 10px;
  margin: 10px;
  width: 750px;
  .el-form {
    width: 600px;
  }
}
</style>
