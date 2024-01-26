<template>
  <div class="container">
    <div class="lineChart-basic" ref="lineChart_basic"></div>
    <div class="stacked-lineChart" ref="stacked_lineChart"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const lineChart_basic = ref(null)
const stacked_lineChart = ref(null)

onMounted(() => {
  // 基础折线图
  const myChart = echarts.init(lineChart_basic.value)
  const option = {
    xAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E', 'F'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 400, 340, 600],
        type: 'line',
      },
    ],
  }
  myChart.setOption(option)

  // 堆叠折线图
  const myChart_stacked = echarts.init(stacked_lineChart.value)
  const option_stacked = {
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E'],
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 40, 39],
        type: 'line',
        stack: 'x',
        areaStyle: {},
      },
      {
        data: [5, 4, 3, 5, 3],
        type: 'line',
        stack: 'x',
        areaStyle: {},
      },
    ],
  }
  myChart_stacked.setOption(option_stacked)
})
</script>
<style scoped lang="scss">
.container {
  display: flex;
  padding: 20px;
  border: 2px solid #ebeef5;
  border-radius: 10px;
  margin: 10px;
  .lineChart-basic {
    width: 50%;
    height: 600px;
  }
  .stacked-lineChart {
    width: 50%;
    height: 600px;
  }
}
</style>
