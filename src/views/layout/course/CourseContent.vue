<script setup>
import { ref, toRaw } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCourseStore } from '@/stores'

// 判断是文档还是视频
const isVideo = ref(true)

// 获取课程信息并渲染到页面
const route = useRoute()
const courseId = route.query.id
const courseStore = useCourseStore()
// 获取课程信息
courseStore.getCourseInfo(courseId)
const courseInfo = ref({})
courseInfo.value = courseStore.courseInfo
// 获取课程的章节信息
const chapterList = toRaw(courseInfo.value.chapter)
const chapter = ref({})
chapter.value = chapterList[courseId - 1]

//处理选择器
const value1 = ref('')
const options = []
chapterList.forEach((item) => {
  options.push({ value: `${item.id}`, label: `${item.id} ${item.name}` })
})
value1.value = `${chapter.value.id} ${chapter.value.name}`
const value2 = ref('')
const options2 = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
const router = useRouter()
const handleSelect = (item) => {
  router.push({ path: '/course/content', query: { id: item.value } })
}
</script>

<template>
  <div class="course-content">
    <div class="course-video" v-if="isVideo">
      <div class="video-head">
        <span>课件</span>
        <div class="icon">
          <el-icon><i-ep-ArrowRight /></el-icon>
        </div>

        <el-select v-model="value1" class="m-2" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @click="handleSelect(item)"
          />
        </el-select>
        <div class="icon">
          <el-icon><i-ep-ArrowRight /></el-icon>
        </div>

        <el-select v-model="value2" class="m-2" placeholder="Select">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @click="handleSelect(item)"
          />
        </el-select>
      </div>
      <div class="video-container">
        <MyVideo :src="chapter.video"></MyVideo>
        <!-- <video src="https://media.w3.org/2010/05/sintel/trailer.mp4"></video> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.course-content {
  padding: 24px 32px;
  background-color: #fff;
  .course-video {
    .video-head {
      display: flex;
      margin-bottom: 50px;
      span {
        line-height: 32px;
      }
      .icon {
        display: flex;
        align-items: center;
      }
    }
    .video-container {
      height: 800px;
      width: 1200px;
      margin: 0 auto;
      background-color: #fff;
    }
  }
}
</style>
