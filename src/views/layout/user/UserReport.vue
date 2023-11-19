<script setup>
import { nextTick, ref } from 'vue'
import { useUserStore } from '@/stores/modules/user.js'
import { useReportStore } from '@/stores/modules/report.js'

// 引入本地图片
function getImageUrl(url) {
  return new URL(url, import.meta.url).href
}

// 获取用户报表模块的数据
const userStore = useUserStore()
userStore.getUser()
const userInfo = userStore.user
const reportModule = useReportStore()
reportModule.getLearnModule(userInfo.id)

// 导入用户学习进度环形图
const option = {
  title: {
    text: '{a|完成情况}',
    subtext: '{b|共7节}',
    subtextStyle: {
      rich: {
        b: {
          fontSize: '16'
        }
      }
    },
    textStyle: {
      rich: {
        a: {
          fontSize: '18'
        }
      }
    },
    left: 'center',
    top: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['已完成', '未完成']
  },
  series: {
    name: '课程',
    type: 'pie',
    radius: ['40%', '55%'],
    center: ['50%', '50%'],
    data: [
      { value: 3, name: '已完成' },
      { value: 4, name: '未完成' }
    ]
  }
}
// 获取用户学习时间并绘制成option传给echarts
const getOption = (title, data, xdata) => {
  const option = {
    title: {
      text: title
    },
    tooltip: {},
    legend: {
      data: ['小时']
    },
    xAxis: {
      data: xdata
    },
    yAxis: {},
    series: [
      {
        name: '小时',
        type: 'bar',
        data: data
      }
    ]
  }
  return option
}
// 一周每天的学习时间
const weekData = userStore.user.weekDuration
// 一月每天的学习时间
const monthData = userStore.user.monthDuration
// 一年每月的学习时间
const yearData = userStore.user.yearDuration
const dayX = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
const weekX = []
for (let i = 1; i <= 31; i++) {
  weekX.push(i)
}
const yearX = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月'
]

// 处理选择时段的标签页
const activeDate = ref('周')
const isshow1 = ref(true)
const isshow2 = ref(true)
const isshow3 = ref(true)
const handleClick = (tab) => {
  if (tab.props.name === '周') {
    nextTick(() => {
      isshow1.value = true
      isshow2.value = false
      isshow3.value = false
    })
  } else if (tab.props.name === '月') {
    nextTick(() => {
      isshow1.value = false
      isshow2.value = true
      isshow3.value = false
    })
  } else {
    nextTick(() => {
      isshow1.value = false
      isshow2.value = false
      isshow3.value = true
    })
  }
}
</script>

<template>
  <div class="wrapper">
    <el-card class="history-card">
      <template #header>
        <div class="history-card-header">
          <strong>历史记录</strong>
        </div>
      </template>
      <div class="history-card-body">
        <el-scrollbar>
          <div class="scrollbar-content">
            <ul>
              <li v-for="item in 10" :key="item">
                <div class="history-video">
                  <a href="#"
                    ><el-image
                      style="width: 200px; height: 122px"
                      :src="getImageUrl('/images/home/photo_1.jpg')"
                      fit="fit"
                    />
                    <h3>XX课程</h3>
                    <p>XX大学</p>
                    <span>老师</span></a
                  >
                </div>
              </li>
            </ul>
          </div>
        </el-scrollbar>
      </div>
    </el-card>
    <el-card class="report-card">
      <template #header>
        <div class="report-card-header">
          <strong>用户报表</strong>
        </div>
      </template>
      <div class="report-card-body">
        <div class="report-title">
          <strong>总学习时长：{{ userStore.user.sumDuration }}小时</strong>
          <strong>已坚持打卡：{{ userStore.user.keep }}天</strong>
        </div>
        <div class="report-course">
          <ul>
            <li v-for="item in reportModule.learnModule" :key="item.id">
              <div class="report-course-content">
                <span>{{ item.course }}</span>
                <span>完成：{{ item.completion }} </span>
                <span>未完成：{{ item.incomplete }}</span>
                <div class="course_report">
                  <MyCharts :options="option"></MyCharts>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="report-tabs">
          <el-tabs v-model="activeDate" @tab-click="handleClick">
            <el-tab-pane label="周" name="周">
              <div class="tab">
                <MyCharts
                  :options="getOption('每日学习时长', weekData, dayX)"
                  v-if="isshow1"
                ></MyCharts>
              </div>
            </el-tab-pane>
            <el-tab-pane label="月" name="月">
              <div class="tab">
                <MyCharts
                  :options="getOption('每日学习时长', monthData, weekX)"
                  v-if="isshow2"
                ></MyCharts>
              </div>
            </el-tab-pane>
            <el-tab-pane label="年" name="年">
              <div class="tab">
                <MyCharts
                  :options="getOption('每月学习时长', yearData, yearX)"
                  v-if="isshow3"
                ></MyCharts>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.history-card {
  .history-card-header {
    strong {
      font-size: 18px;
    }
  }
  .history-card-body {
    .scrollbar-content {
      ul {
        display: flex;
        li {
          flex: 1;
          margin-right: 10px;
          .history-video {
            height: 232px;
            width: 200px;
            background-color: #fff;

            h3 {
              font-size: 14px;
              margin: 0;
            }
            p {
              font-size: 12px;
              margin: 6px 0 0 0;
            }
            span {
              font-size: 12px;
              margin-top: 6px;
            }
          }
        }
      }
    }
  }
}
.report-card {
  .report-card-header {
    strong {
      font-size: 18px;
    }
  }
  .report-card-body {
    .report-title {
      height: 50px;
      background-color: greenyellow;
      padding-left: 10px;
      margin-bottom: 20px;
      strong {
        line-height: 50px;
        margin-right: 20px;
      }
    }
    .report-course {
      .report-course-content {
        height: 300px;
        span {
          margin: 0px 10px;
        }
        .course_report {
          height: 80%;
        }
      }
    }
    .report-tabs {
      .el-tabs {
        .el-tab-pane {
          .tab {
            height: 50vh;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
