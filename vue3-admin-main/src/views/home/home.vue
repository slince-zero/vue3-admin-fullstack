<template>
  <div class="container">
    <div class="banner">
      <el-row>
        <el-col :span="12">
          <div class="banner-board">
            <div class="banner-left">
              <span>{{ currentUser }}</span>
              <span>欢迎来到vue3-admin, 这里是主页,点击其他页面浏览吧</span>
              <el-button color="#00a76f">Go Now</el-button>
            </div>
            <div class="banner-right">
              <img src="../../assets/airplane.png" alt="" />
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="banner-card">
            <el-card shadow="always" class="card-conversion">
              <el-progress
                type="circle"
                :percentage="60"
                :width="90"
                :color="circleColors[0].color"
                class="progress-conversion" />
              <div class="text-conversion">
                <span class="span-number">78,888</span>
                <span class="span-text">对话</span>
              </div>
              <el-icon class="grid-con-icon"> <User /> </el-icon>
            </el-card>
            <el-card shadow="always" class="card-application">
              <el-progress
                type="circle"
                :percentage="55"
                :width="90"
                :color="circleColors[1].color"
                class="progress-conversion" />
              <div class="text-conversion">
                <span class="span-number">28,458</span>
                <span class="span-text">申请</span>
              </div>
              <el-icon class="grid-con-icon"> <Shop /> </el-icon>
            </el-card>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="banner-progress">
            <div class="title">语言详情</div>
            <div class="progress-list">
              Vue
              <el-progress :percentage="79.4" color="#42b983"></el-progress>
              TypeScript
              <el-progress :percentage="55.3" color="#f1e05a"></el-progress>
              CSS
              <el-progress :percentage="66.6"></el-progress>
              HTML
              <el-progress :percentage="88.5" color="#f56c6c"></el-progress>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="rateCard">
      <el-row>
        <el-col :span="8">
          <div class="card-user">
            <div class="left">
              <div>总活跃用户量</div>
              <div class="rise">
                <img src="../../assets/rise.svg" alt="" />
                <span>+ 2.6%</span>
              </div>
              <div class="number">18,685</div>
            </div>
            <div class="right">
              <img src="../../assets/curve.svg" alt="" />
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card-install">
            <div class="left">
              <div>总安装量</div>
              <div class="rise">
                <img src="../../assets/rise.svg" alt="" />
                <span>+ 8.6%</span>
              </div>
              <div class="number">4,685</div>
            </div>
            <div class="right">
              <img src="../../assets/install.svg" alt="" />
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card-download">
            <div class="left">
              <div>总下载量</div>
              <div class="rise">
                <img src="../../assets/fall.svg" alt="" />
                <span>+ 2.6%</span>
              </div>
              <div class="number">685</div>
            </div>
            <div class="right">
              <img src="../../assets/download.svg" alt="" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="currentData">
      <el-row>
        <el-col :span="8">
          <div class="pipeChart" ref="pipeChart"></div>
        </el-col>
        <el-col :span="16">
          <div class="lineChart" ref="lineChart"></div>
        </el-col>
      </el-row>
    </div>
    <div class="tableShow">
      <el-row>
        <el-col :span="16">
          <div class="tableX">
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="num" label="序列号" width="180" />
              <el-table-column prop="country" label="国家" width="180" />
              <el-table-column prop="price" label="价格" width="180" />
              <el-table-column prop="status" label="状态" width="180">
                <template #default="scoped">
                  <el-tag
                    :type="scoped.row.status === '成功' ? 'success' : 'danger'"
                    >{{ scoped.row.status }}</el-tag
                  >
                </template>
              </el-table-column>
              <el-table-column prop="year" label="时间" width="180" />
              <el-table-column prop="version" label="版本" width="180" />
              <el-table-column prop="warranty" label="保修年限" width="180" />
              <el-table-column prop="action" label="操作" />
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="1" />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="formY">
            <div
              class="form-item"
              v-for="(item, index) in softData"
              :key="index">
              <div class="form-item-left">
                <div class="img-list">
                  <img :src="item.logo" alt="" />
                </div>
                <div class="title">
                  <div>{{ item.title }}</div>
                  <div class="icon">
                    <img
                      :src="item.paltform === 'Mac' ? MacIcon : WindowsIcon"
                      alt="" />
                    <span>{{ item.paltform }}</span>
                    <el-tag
                      size="small"
                      :type="item.type == 'free' ? 'success' : 'danger'">
                      {{ item.type }}
                    </el-tag>
                  </div>
                </div>
              </div>
              <div class="rate">
                <el-rate v-model="item.star" disabled text-color="#ff9900" />
                <span>{{ item.reviews }}</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup>
import { User, Shop } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import Chrome from '../../assets/chrome.svg'
import Bilibili from '../../assets/bilibili.svg'
import Telegram from '../../assets/telegram.svg'
import Youtube from '../../assets/youtube.svg'
import Discord from '../../assets/discord.svg'
import Drive from '../../assets/drive.svg'
import Mac from '../../assets/mac.svg'
import Windows from '../../assets/windows.svg'
import MacB from '../../assets/macB.svg'
import WindowsB from '../../assets/windowsB.svg'
import { useAppStore } from '../../store/app'
import { watchEffect } from 'vue'
import * as echarts from 'echarts'
import { getCurrentUserInfo } from '../../api/user'

const currentUser = ref('')

const circleColors = [{ color: '#62cc9e' }, { color: '#7af8ff' }]

const store = useAppStore()

// 判断是否是黑暗模式，用于切换Mac、Windows图标
const MacIcon = ref('')
const WindowsIcon = ref('')
watchEffect(() => {
  const isDarkMode = store.darkMode
  MacIcon.value = isDarkMode ? MacB : Mac
  WindowsIcon.value = isDarkMode ? WindowsB : Windows
})

const pipeChart = ref(null)
const lineChart = ref(null)
onMounted(() => {
  // pipeChart
  const myChart = echarts.init(pipeChart.value)
  const option = {
    title: {
      text: '访问来源',
      left: 'center',
      top: '10',
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['Mac', 'Windows', 'IOS', 'Android'],
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center',
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          label: {
            normal: {
              show: false,
              position: 'center',
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
          },
        },
        data: [
          { value: 335, name: 'Mac' },
          { value: 310, name: 'Windows' },
          { value: 234, name: 'IOS' },
          { value: 135, name: 'Android' },
        ],
      },
    ],
  }
  myChart.setOption(option)

  // lineChart
  const myChart_line = echarts.init(lineChart.value)
  const option_line = {
    title: {
      text: 'Monthly Sales',
      left: 'center',
      top: '10',
    },
    legend: {
      data: ['China', 'Japan'],
      orient: 'vertical',
      icon: 'roundRect',
      right: 10,
      top: 10,
    },
    xAxis: {
      type: 'category',
      data: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'China',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 880, 680, 458, 820, 932],
        type: 'line',
        smooth: true,
        symbol: 'none',
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 0, 255, 0.3)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(0, 0, 255, 0)', // 100% 处的颜色
              },
            ],
          },
        },
      },
      {
        name: 'Japan',
        data: [500, 300, 566, 453, 654, 456, 787, 676, 789, 887, 890, 765],
        type: 'line',
        smooth: true,
        symbol: 'none',
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(255, 0, 0, 0.3)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(255, 0, 0, 0)', // 100% 处的颜色
              },
            ],
          },
        },
      },
    ],
  }
  myChart_line.setOption(option_line)

  // 获取当前用户信息
  const currentUserInfo = getCurrentUserInfo().then((res) => {
    currentUser.value = res.user.username
  })
  currentUserInfo
})

const tableData = ref([
  {
    num: 'VL-001',
    country: '中国',
    year: '2019-02-23',
    price: '￥223',
    status: '成功',
    version: '1.0',
    warranty: '1年',
    action: '查看',
  },
  {
    num: 'VL-002',
    country: '日本',
    year: '2019-12-23',
    price: '￥23',
    status: '成功',
    version: '1.0',
    warranty: '3年',
    action: '查看',
  },
  {
    num: 'VL-003',
    country: '加拿大',
    year: '2019-04-13',
    price: '￥133',
    status: '失败',
    version: '1.2',
    warranty: '0年',
    action: '查看',
  },
  {
    num: 'VL-004',
    country: '美国',
    year: '2018-08-20',
    price: '￥163',
    status: '成功',
    version: '1.2',
    warranty: '3年',
    action: '查看',
  },
  {
    num: 'VL-005',
    country: '澳大利亚',
    year: '2022-12-21',
    price: '￥153',
    status: '成功',
    version: '1.1',
    warranty: '2年',
    action: '查看',
  },
  {
    num: 'VL-006',
    country: '韩国',
    year: '2020-03-23',
    price: '￥125',
    status: '成功',
    version: '1.1',
    warranty: '2年',
    action: '查看',
  },
  {
    num: 'VL-007',
    country: '韩国',
    year: '2020-03-23',
    price: '￥125',
    status: '成功',
    version: '1.1',
    warranty: '2年',
    action: '查看',
  },
  {
    num: 'VL-008',
    country: '印度',
    year: '2020-03-23',
    price: '￥335',
    status: '失败',
    version: '1.1',
    warranty: '0年',
    action: '查看',
  },
  {
    num: 'VL-009',
    country: '朝鲜',
    year: '2020-03-23',
    price: '￥225',
    status: '成功',
    version: '1.1',
    warranty: '2年',
    action: '查看',
  },
  {
    num: 'VL-010',
    country: '埃及',
    year: '2020-02-13',
    price: '￥525',
    status: '成功',
    version: '1.1',
    warranty: '2年',
    action: '查看',
  },
])

const softData = [
  {
    logo: Chrome,
    title: 'Chrome',
    paltform: 'Mac',
    type: 'free',
    star: 4,
    reviews: '9.91k',
  },
  {
    logo: Telegram,
    title: 'Telegram',
    paltform: 'Mac',
    type: 'free',
    star: 3,
    reviews: '9.91k',
  },
  {
    logo: Discord,
    title: 'Discord',
    paltform: 'Windows',
    type: '$9.99',
    star: 3.5,
    reviews: '9.91k',
  },
  {
    logo: Bilibili,
    title: 'Bilibili',
    paltform: 'Mac',
    type: 'free',
    star: 2,
    reviews: '9.91k',
  },
  {
    logo: Drive,
    title: 'Drive',
    paltform: 'Windows',
    type: '$6.99',
    star: 4,
    reviews: '9.91k',
  },
  {
    logo: Youtube,
    title: 'Youtube',
    paltform: 'Mac',
    type: 'free',
    star: 4.5,
    reviews: '9.91k',
  },
]
</script>
<style scoped lang="scss">
.container {
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid #ebeef5;
  .banner {
    .banner-board {
      display: flex;
      border-radius: 10px;
      justify-content: space-between;
      background-color: rgb(207, 238, 227);
      .banner-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          margin: 10px;
          color: #008059;
        }
      }
      .banner-right {
        width: 400px;
        height: 300px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .banner-card {
      display: flex;
      height: 300px;
      margin: 0 10px;
      flex-direction: column;
      justify-content: space-between;
      .el-card {
        height: 120px;
        border-radius: 10px;
        :deep(.el-card__body) {
          display: flex;
        }
      }
      .card-conversion {
        display: flex;
        align-items: center;
        background-color: #008059;
        .el-progress {
          :deep(.el-progress__text span) {
            color: #fff;
            font-size: 18px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
              sans-serif;
          }
        }
        .text-conversion {
          display: flex;
          margin: 0 5px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .span-number {
            color: #fff;
          }
          .span-text {
            margin: 5px 0;
            color: #80c0ac;
          }
        }
        .grid-con-icon {
          display: flex;
          margin-left: calc(100% - 60px);
          color: #fff;
          font-size: 90px;
          opacity: 0.6;
        }
      }
      .card-application {
        display: flex;
        align-items: center;
        background-color: #0092b3;
        .el-progress {
          :deep(.el-progress__text span) {
            color: #fff;
            font-size: 18px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
              sans-serif;
          }
        }
        .text-conversion {
          display: flex;
          margin: 0 5px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .span-number {
            color: #fff;
          }
          .span-text {
            margin: 5px 0;
            color: #80c0ac;
          }
        }
        .grid-con-icon {
          display: flex;
          margin-left: calc(100% - 60px);
          color: #fff;
          font-size: 90px;
          opacity: 0.6;
        }
      }
    }
    .banner-progress {
      height: 300px;
      box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
        rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
      border-radius: 10px;
      .title {
        font-size: 18px;
        margin: 0 5px;
        padding-top: 5px;
        margin-bottom: 10px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial;
      }
      .progress-list {
        display: flex;
        margin: 5px;
        padding: 25px 0;
        flex-direction: column;
        .el-progress {
          margin: 5px 0;
        }
      }
    }
  }

  .rateCard {
    margin: 10px 0;
    .card-user,
    .card-install,
    .card-download {
      display: flex;
      height: 150px;
      align-items: center;
      justify-content: space-between;
      box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
        rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial;
        .rise {
          display: flex;
          align-items: center;
          margin: 10px 0;
          font-family: 'Times New Roman', Times, serif;
          img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
          }
        }
        .number {
          font-size: 30px;
        }
      }
      .right {
        height: 80px;
        img {
          width: 80px;
          height: 80px;
        }
      }
    }

    .card-install {
      margin: 0 10px;
    }
  }

  .currentData {
    .pipeChart {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 400px;
      box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
        rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
      border-radius: 10px;
    }
    .lineChart {
      margin-left: 10px;
      height: 400px;
      box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
        rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
      border-radius: 10px;
    }
  }

  .tableShow {
    .tableX {
      margin: 10px 0;
      border-radius: 10px;
      box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
        rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;

      .el-pagination {
        margin: 5px;
        float: right;
        :deep(.is-active) {
          background-color: #f0f9eb;
          color: #0092b3;
          border-radius: 5px;
        }
      }
    }
    .formY {
      margin: 10px 0;
      margin-left: 10px;
      border-radius: 10px;
      box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
        rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;

      .form-item {
        display: flex;
        justify-content: space-between;
        .form-item-left {
          display: flex;
          .img-list {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            margin: 15px;
            border-radius: 10px;
            background-color: #f0f0f0;
            img {
              width: 40px;
              height: 40px;
            }
          }
          .title {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 15px;
            .icon {
              display: flex;
              align-items: flex-end;
              img {
                width: 15px;
                height: 15px;
              }
              span {
                margin: 0 5px;
                font-size: 10px;
              }
              .el-tag {
                margin: 1px 5px;
              }
            }
          }
        }
        .rate {
          display: flex;
          flex-direction: column;
          justify-content: center;
          span {
            color: #c4cdd5;
          }
        }
      }
    }
  }
}
</style>
