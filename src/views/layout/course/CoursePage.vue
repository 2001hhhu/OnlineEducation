<script setup>
import { ref, onMounted } from 'vue'
import { getImageUrl } from '@/utils/getphoto'
import { useRouter } from 'vue-router'

//处理菜单的菜单栏选中
const activeIndex = ref('/course/detail')
const router = useRouter()
onMounted(() => {
  activeIndex.value = router.currentRoute.value.path
})
</script>

<template>
  <div class="course-head">
    <el-image
      :src="getImageUrl('/images/course/course-photo-1.jpg')"
      fit="fit"
    ></el-image>
    <div>
      <p>课程名字</p>
      <span>老师</span>
    </div>
    <div class="duration">
      <el-icon size="large"><i-ep-PieChart /></el-icon>
      <span>学习时长</span>
    </div>
  </div>
  <div class="course-menu">
    <el-menu
      v-model="activeIndex"
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      router="true"
    >
      <el-menu-item index="/course/detail">
        <el-icon><i-ep-Bell /></el-icon>
        <span>课程介绍</span>
      </el-menu-item>
      <el-menu-item index="/course/learn">
        <el-icon><i-ep-VideoPlay /></el-icon>
        <span>课程学习</span>
      </el-menu-item>
      <el-menu-item index="/course/discuss">
        <el-icon><i-ep-ChatLineSquare /></el-icon>
        <span>课程讨论</span>
      </el-menu-item>
      <el-menu-item index="/course/evaluate">
        <el-icon><i-ep-ChatDotRound /></el-icon>
        <span>课程评价</span>
      </el-menu-item>
    </el-menu>
  </div>

  <router-view></router-view>
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
  }
  p {
    margin: 0;
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
  }
}
.course-menu {
  max-width: 250px;
  border-radius: 8px;
  margin: 20px;
  margin-top: 30px;
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
</style>
