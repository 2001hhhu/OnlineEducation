<script setup>
import { ref } from 'vue'
import { courseCategoryService, courseListService } from '@/api/course.js'
import { useRouter } from 'vue-router'

//引入本地图片
function getImageUrl(url) {
  return new URL(url, import.meta.url).href
}

// 处理骨架屏, loading为flase显示内容
const loading = ref(true)

//处理课程学期单选框
const radioGroup1 = ref('全部')
const terms = [
  '全部',
  '2023-2024学年 第一学期',
  '2022-2023学年 第二学期',
  '2022-2023学年 第一学期',
  '2021-2022学年 第二学期',
  '2021-2022学年 第一学期'
]

// 路由跳转
const router = useRouter()
const routerPush = (id) => {
  router.push({ path: '/course/detail', query: { id: id } })
}

//处理课课程分类多选框
const checkboxGroup2 = ref('全部')
const categories = ref([])
const getCategory = async () => {
  const res = await courseCategoryService()
  categories.value = res.data.category
}
getCategory()

//处理开课状态单选框
const radioGroup2 = ref('全部')
const status = ['全部', '即将开课', '开课中', '已结课']

// 处理分类事件
// @change="handleCategory(radioGroup1, checkboxGroup2, radioGroup2)"
// 处理课程信息
const courseList = ref([])
const getCourseList = async () => {
  const res = await courseListService('全部', '全部', '全部')
  courseList.value = res.data
  loading.value = false
}
getCourseList()
const isEmpty = ref(false)
const handleCategory = async (term, category, state) => {
  loading.value = true
  const res = await courseListService(term, category, state)
  courseList.value = res.data
  if (courseList.value.length === 0) isEmpty.value = true
  else isEmpty.value = false
  loading.value = false
}
</script>

<template>
  <div class="wrapper">
    <div>
      <span class="title">课程筛选</span>
      <div class="category">
        <div class="term">
          <span>课程学期：</span>
          <el-radio-group
            v-model="radioGroup1"
            size="large"
            @change="handleCategory(radioGroup1, checkboxGroup2, radioGroup2)"
          >
            <el-radio-button v-for="term in terms" :key="term" :label="term">
              {{ term }}
            </el-radio-button>
          </el-radio-group>
        </div>
        <div class="classification">
          <span>课程分类：</span>
          <el-radio-group
            v-model="checkboxGroup2"
            size="large"
            @change="handleCategory(radioGroup1, checkboxGroup2, radioGroup2)"
          >
            <el-radio-button
              v-for="category in categories"
              :key="category"
              :label="category"
            >
              {{ category }}
            </el-radio-button>
          </el-radio-group>
        </div>
        <div class="status">
          <span>开课状态：</span>
          <el-radio-group
            v-model="radioGroup2"
            size="large"
            @change="handleCategory(radioGroup1, checkboxGroup2, radioGroup2)"
          >
            <el-radio-button v-for="state in status" :key="state" :label="state">
              {{ state }}
            </el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </div>
    <span class="title">课程</span>
    <!-- <el-button type="primary" @click="loading = !loading"></el-button> -->
    <div class="body">
      <el-skeleton :loading="loading" animated>
        <template #template>
          <div class="loading-body">
            <div class="loading-img">
              <el-skeleton-item class="img" variant="image" />
            </div>
            <div class="loading-introduce">
              <div>
                <el-skeleton-item variant="text" style="margin: 5px; width: 10%" />
                <br />
                <el-skeleton-item
                  variant="text"
                  style="margin: 5px; width: 25%; margin-bottom: 10px"
                />
                <el-skeleton-item variant="text" style="margin: 5px" />
              </div>
            </div>
          </div>
        </template>
        <template #default>
          <ul v-if="!isEmpty">
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
        </template>
      </el-skeleton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
span {
  font-size: 14px;
  color: #656a72;
}
.title {
  font-size: 20px;
  line-height: 20px;
  color: #69a1e9;
  margin-left: 5px;
  margin-bottom: 10px;
  &::before {
    // display: block;
    float: left;
    margin-right: 5px;
    content: '';
    width: 5px;
    height: 20px;
    background-color: #428cf0;
  }
}
.category {
  width: 100%;
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 50px;
  overflow: hidden;
  .term {
    display: flex;
    margin: 20px 20px;
    span {
      line-height: 47px;
    }
  }
  .classification {
    display: flex;
    margin: 0 20px;
    margin-bottom: 20px;
    span {
      line-height: 39px;
    }
  }
  .status {
    display: flex;
    margin: 0 20px;
    margin-bottom: 20px;
    span {
      line-height: 47px;
    }
  }
}
.body {
  width: 100%;
  // background-color: #fff;
  margin-top: 30px;
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
  .el-skeleton {
    width: 100%;
    .loading-body {
      display: flex;
      margin-bottom: 10px;
      background-color: #fff;
      .loading-img {
        .img {
          height: 144px;
          width: 266px;
        }
      }
      .loading-introduce {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 20px;
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
