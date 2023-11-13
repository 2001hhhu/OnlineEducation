<script setup>
import { ref, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import { useUserStore } from '@/stores/modules/user.js'
import { useReportStore } from '@/stores/modules/report.js'
// import { EleResize } from '@/utils/esresize' //图表自适应

// 引入本地图片
function getImageUrl(url) {
  return new URL(url, import.meta.url).href
}

// 获取用户报表模块的数据
const reportModule = useReportStore()
reportModule.getLearnModule(1)

// 导入用户学习进度环形图
let course = ref([])

const init2 = (ref) => {
  // const chart = echarts.init(document.querySelector('.course_report'))
  const chart = echarts.init(ref)
  window.addEventListener(
    'resize',
    () => {
      chart.resize()
    },
    false
  )
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
  chart.setOption(option)
}
// 完成v-for li中的echarts渲染
const chartList = () => {
  nextTick(() => {
    course.value.forEach((item) => {
      init2(item)
    })
  })
}
// 导入Echarts图像
const userStore = useUserStore()
userStore.getUser()
const init = (title, data, xdata, ref) => {
  const chart1 = echarts.init(document.querySelector(ref))

  // 图表自适应
  window.addEventListener(
    'resize',
    () => {
      chart1.resize()
    },
    false
  )
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
  chart1.setOption(option)
}
const weekData = userStore.user.weekDuration
const monthData = userStore.user.monthDuration
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
onMounted(() => {
  nextTick(() => {
    chartList()
  })
  console.log(course)
  // nextTick(() => {
  //   init('每日学习时长', weekData, dayX, '.report-1')
  //   init('每日学习时长', monthData, weekX, '.report-2')
  //   init('每日学习时长', yearData, yearX, '.report-3')
  // })
  init('每日学习时长', weekData, dayX, '.report-1')
  init('每日学习时长', monthData, weekX, '.report-2')
  init('每月学习总时长', yearData, yearX, '.report-3')
  // handleClick()
})

// 处理选择时段的标签页
const activeDate = ref('周')
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
                <div class="course_report" ref="course"></div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 尝试对el-tab里的echart进行修bug -->
        <!-- <div class="report-1" ref="report1"></div>
        <div class="report-2" ref="report2"></div>
        <div class="report-3" ref="report3"></div> -->
        <!-- <el-tabs v-model="activeDate" @click="handleClick">
          <el-tab-pane label="周" name="周" lazy="true">
            <div class="report-1" id="1" ref="report1"></div>
          </el-tab-pane>
          <el-tab-pane label="月" name="月" lazy="true">
            <div class="report-2" id="2" ref="report2"></div>
          </el-tab-pane>
          <el-tab-pane label="年" name="年" lazy="true">
            <div class="report-3" id="3" ref="report3"></div>
          </el-tab-pane>
        </el-tabs> -->
        <!-- <el-tabs v-model="activeDate" @click="handleClick">
          <el-tab-pane label="周" name="周">
            <div v-if="activeDate === '周'" class="report-1" id="1" ref="report1"></div>
          </el-tab-pane>

          <el-tab-pane label="月" name="月">
            <div v-if="activeDate === '月'" class="report-2" id="2" ref="report2"></div>
          </el-tab-pane>
          <el-tab-pane label="年" name="年">
            <div v-if="activeDate === '年'" class="report-3" id="3" ref="report3"></div>
          </el-tab-pane> -->

        <el-tabs v-model="activeDate" @click="handleClick">
          <el-tab-pane label="周" name="周">
            <div class="report-1"></div>
          </el-tab-pane>
          <el-tab-pane label="月" name="月">
            <div class="report-2"></div>
          </el-tab-pane>
          <el-tab-pane label="年" name="年">
            <div class="report-3"></div>
          </el-tab-pane>
        </el-tabs>
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

    .el-tabs {
      .el-tab-pane {
        width: 100%;
        height: 600px;
        .report-1 {
          height: 100%;
        }
        .report-2 {
          height: 100%;
          width: 100%;
        }
        .report-3 {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>
