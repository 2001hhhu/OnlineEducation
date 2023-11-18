<script setup>
import { ref, onMounted } from 'vue'
import { getImageUrl } from '@/utils/getphoto'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore, useCourseStore, useReportStore } from '@/stores'

// 处理菜单的菜单栏选中
const route = useRoute()
const router = useRouter()
const courseId = route.query.id
const activeIndex = ref(`/course/detail?id=${courseId}`)
onMounted(() => {
  activeIndex.value = router.currentRoute.value.path
})

// 获取用户信息
const userStore = useUserStore()
const userInfo = userStore.user

// 获取课程信息并渲染到页面
const courseStore = useCourseStore()
courseStore.getCourseInfo(courseId)
const courseInfo = ref({})
courseInfo.value = courseStore.courseInfo

// 获取学习时长并以弹窗形式展示
const learnTime = ref(false)
const handleLearn = () => {
  learnTime.value = true
}
const handleClose = () => {
  learnTime.value = false
}
const reportStore = useReportStore()
reportStore.getCourseModule(userInfo.id, courseId)
const reportInfo = reportStore.courseModule[0]
const sum = reportInfo.completion + reportInfo.incomplete
console.log(sum)
console.log(reportInfo)
// 设置报表option
const option = {
  title: {
    text: '{a|完成情况}',
    subtext: `{b|共${sum}}`,
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
      { value: reportInfo.completion, name: '已完成' },
      { value: reportInfo.incomplete, name: '未完成' }
    ]
  }
}
</script>

<template>
  <div class="course-head">
    <el-image :src="getImageUrl(courseInfo.url)" fit="fit"></el-image>
    <div class="head-text">
      <p>{{ courseInfo.name }}</p>
      <span>{{ courseInfo.lecturer }}</span>
    </div>
    <div class="duration" @click="handleLearn">
      <el-icon size="large"><i-ep-PieChart /></el-icon>
      <span>学习时长</span>
    </div>
  </div>
  <div class="course-body">
    <el-row>
      <el-col :span="4">
        <div class="course-menu">
          <el-menu
            v-model="activeIndex"
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            router="true"
          >
            <el-menu-item :index="`/course/detail?id=${courseId}`">
              <el-icon><i-ep-Bell /></el-icon>
              <span>课程介绍</span>
            </el-menu-item>
            <el-menu-item :index="`/course/learn?id=${courseId}`">
              <el-icon><i-ep-VideoPlay /></el-icon>
              <span>课程学习</span>
            </el-menu-item>
            <el-menu-item :index="`/course/discuss?id=${courseId}`">
              <el-icon><i-ep-ChatLineSquare /></el-icon>
              <span>课程讨论</span>
            </el-menu-item>
            <el-menu-item :index="`/course/evaluate?id=${courseId}`">
              <el-icon><i-ep-ChatDotRound /></el-icon>
              <span>课程评价</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
  <el-dialog v-model="learnTime" title="学习时长" width="30%" :before-close="handleClose">
    <div class="learnCharts">
      <MyCharts :options="option"></MyCharts>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="learnTime = false" type="primary" radius>确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.course-head {
  display: flex;
  position: relative;
  padding: 10px 0px;
  background-color: #fff;
  .el-image {
    max-height: 48px;
    max-width: 85px;
    text-align: center;
    margin-left: 100px;
    margin-right: 10px;
  }
  .head-text {
    p {
      margin: 0;
    }
  }

  .duration {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 50px;
    .el-icon {
      margin: 0 auto;
    }
    span {
      font-size: 12px;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
.course-body {
  width: 100%;
  overflow: hidden;
  margin-top: 30px;
  margin-bottom: 50px;
  .course-menu {
    // float: left;
    max-width: 250px;
    min-width: 200px;
    border-radius: 8px;
    margin: 20px;

    .el-menu {
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      .el-menu-item.is-active {
        border-radius: 8px;
        background-color: rgb(156, 225, 247) !important;
      }
    }
  }
}
.el-dialog {
  width: 30vw;
  height: 30vw;
  .learnCharts {
    width: 30vw;
    height: 30vw;
  }
}
</style>
