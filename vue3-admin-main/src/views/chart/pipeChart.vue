<template>
  <div class="container">
    <div class="pipeChart-basic" ref="pipeChart_basic"></div>
    <div class="roseChart" ref="roseChart"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const pipeChart_basic = ref(null)
const roseChart = ref(null)
onMounted(() => {
  // 基础饼状图
  const myChart = echarts.init(pipeChart_basic.value)
  const option = {
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 335,
            name: '联盟战神',
          },
          {
            value: 234,
            name: '国际武林',
          },
          {
            value: 560,
            name: '武林霸主',
          },
          {
            value: 432,
            name: '狂战士',
          },
        ],
      },
    ],
  }
  myChart.setOption(option)

  // 玫瑰图
  const myChart_rose = echarts.init(roseChart.value)
  const option_rose = {
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 100,
            name: 'A',
          },
          {
            value: 200,
            name: 'B',
          },
          {
            value: 300,
            name: 'C',
          },
          {
            value: 400,
            name: 'D',
          },
          {
            value: 500,
            name: 'E',
          },
        ],
        roseType: 'area',
      },
    ],
  }
  myChart_rose.setOption(option_rose)
})
</script>
<style scoped lang="scss">
.container {
  display: flex;
  padding: 20px;
  border: 2px solid #ebeef5;
  border-radius: 10px;
  margin: 10px;
  .pipeChart-basic {
    width: 50%;
    height: 600px;
  }
  .roseChart {
    width: 50%;
    height: 600px;
  }
}
</style>
