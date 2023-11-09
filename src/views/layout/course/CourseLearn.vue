<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCourseStore } from '@/stores'

//处理折叠面板
const activeNames = ref([''])

// 按钮跳转到视频页
const router = useRouter()
const handlePush = (id) => {
  router.push({ path: '/course/content', query: { id } })
}

// 获取课程信息并渲染到页面
const route = useRoute()
const courseId = route.query.id
const courseStore = useCourseStore()
courseStore.getCourseInfo(courseId)
const courseInfo = ref({})
courseInfo.value = courseStore.courseInfo
</script>

<template>
  <div class="learn">
    <div class="learn-head">
      <h3>{{ courseInfo.name }} 总课程</h3>
    </div>
    <div class="learn-collapse">
      <el-collapse v-model="activeNames">
        <el-collapse-item v-for="item in courseInfo.chapter" :key="item.id" :name="item">
          <template #title>
            <div class="collapse-item">{{ `第${item.id}章 ${item.name}` }}</div>
          </template>
          <div>
            <el-button text @click="handlePush(courseInfo.id)">第一节</el-button>
          </div>
          <div>
            <el-button text @click="handlePush(courseInfo.id)">第二节</el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.learn {
  padding: 24px 32px;
  background-color: #fff;
  .learn-head {
    margin-bottom: 30px;
  }
  .learn-collapse {
    .el-collapse {
      .el-collapse-item {
        margin: 10px 0px;
        background-color: #e3e0e0;
        .collapse-item {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
