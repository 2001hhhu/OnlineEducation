<script setup>
import { ref } from 'vue'
import { courseSearchService } from '@/api/course.js'
import { useRoute, useRouter } from 'vue-router'
import { getImageUrl } from '@/utils/getphoto.js'

// 接收传来的搜索词并发送请求获取课程列表
const route = useRoute()
const str = route.query.input
const courseList = ref([])
const getCourseList = async (str) => {
  const res = await courseSearchService(str)
  courseList.value = res.data
  console.log(courseList.value)
}
const hasData = ref(false)
if (str) {
  getCourseList(str)
}
if (courseList.value) {
  hasData.value = true
}

// 课程路由跳转
const router = useRouter()
const routerPush = (id) => {
  router.push({ path: '/course/detail', query: { id: id } })
}
</script>

<template>
  <div class="wrapper">
    <div class="search-head">
      <h3>共{{ courseList.length }}条搜索结果</h3>
    </div>
    <div class="search-body">
      <ul v-if="hasData">
        <li v-for="item in courseList" :key="item.id" @click="routerPush(item.id)">
          <div class="course">
            <el-image :src="getImageUrl(item.url)" fit="fit"></el-image>
          </div>

          <div class="course-introduce">
            <div>
              <p>{{ item.name }}</p>
              <span>{{ item.lecturer }}</span
              ><span>参加人数：{{ item.participants }}</span
              ><span>学时：{{ item.hour }}</span> <span>学分{{ item.credit }}</span>
            </div>
            <div class="detail-introudce">课程介绍巴拉巴拉...</div>
          </div>
        </li>
      </ul>
      <div class="empty" v-else>没有相关内容</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-head {
  margin-top: 50px;
}
.search-body {
  margin-bottom: 200px;
  ul {
    li {
      display: flex;
      margin-bottom: 10px;
      background-color: #fff;
      .course {
        .el-image {
          height: 144px;
          width: 266px;
        }
      }
      .course-introduce {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        span {
          margin: 5px;
        }
        .detail-introudce {
          margin-top: 10px;
          font-size: 14px;
        }
      }
    }
  }
  .empty {
    height: 100px;
    font-size: 20px;
    line-height: 100px;
    background-color: #fff;
  }
}
</style>
