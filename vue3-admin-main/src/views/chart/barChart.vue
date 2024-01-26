<template>
  <div class="container">
    <div class="barChart-basic" ref="barChart_basic"></div>
    <div class="barChart-dynamic" ref="barChart_dynamic"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const barChart_basic = ref(null)
const barChart_dynamic = ref(null)
onMounted(() => {
  // 基础柱状图
  const myChart = echarts.init(barChart_basic.value)
  const option = {
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E'],
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [23, 24, 18, 25, 18],
        barGap: '20%',
        barCategoryGap: '40%',
      },
      {
        type: 'bar',
        data: [12, 14, 9, 9, 11],
      },
    ],
  }
  myChart.setOption(option)

  // 动态柱状图
  const myChart_dynamic = echarts.init(barChart_dynamic.value)
  const data = []
  for (var i = 0; i < 5; i++) {
    data.push(Math.round(Math.random() * 200))
  }
  const option_dynamic = {
    xAxis: {
      max: 'dataMax',
    },
    yAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 2, // only the largest 3 bars will be displayed
    },
    series: [
      {
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: data,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true,
        },
      },
    ],
    legend: {
      show: true,
    },
    animationDuration: 3000,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear',
  }

  function update() {
    const data = option.series[0].data
    for (var i = 0; i < data.length; ++i) {
      if (Math.random() > 0.9) {
        data[i] += Math.round(Math.random() * 2000)
      } else {
        data[i] += Math.round(Math.random() * 200)
      }
    }
  }
  setInterval(function () {
    update()
  }, 5000)
  myChart_dynamic.setOption(option_dynamic)
})
</script>
<style scoped>
.container {
  display: flex;
  padding: 20px;
  border: 2px solid #ebeef5;
  border-radius: 10px;
  margin: 10px;
  .barChart-basic {
    width: 50%;
    height: 600px;
  }
  .barChart-dynamic {
    width: 50%;
    height: 600px;
  }
}
</style>
