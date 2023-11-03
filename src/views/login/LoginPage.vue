<script setup>
import LayoutFooter from '../../components/LayoutFooter.vue'
import LoginWindow from '../../components/LoginWindow.vue'
import { useRouter } from 'vue-router'

//处理登录页的轮播图
function getImageUrl(url) {
  return new URL(url, import.meta.url).href
}
const imgurl = [
  { url: getImageUrl('/images/login/STU-photo-1.jpg') },
  { url: getImageUrl('/images/login/STU-photo-2.jpg') },
  { url: getImageUrl('/images/login/STU-photo-3.jpg') }
]

//处理登录后跳转
const router = useRouter()
const updateisLogin = () => {
  router.push('/home')
}
</script>

<template>
  <div class="login_head"></div>
  <el-row class="login-page">
    <el-col :span="12" class="bg">
      <el-carousel>
        <el-carousel-item v-for="item in imgurl" style="600px" :key="item">
          <el-image :src="item.url" fit="fit" />
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span="6" :offset="3" class="form">
      <LoginWindow @updateisLogin="updateisLogin"></LoginWindow>
    </el-col>
  </el-row>
  <LayoutFooter></LayoutFooter>
</template>

<style lang="scss" scoped>
.login_head {
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: #fff;
}
.login-page {
  height: 100vh;
  .bg {
    // background: url('@/assets/STU_bgi.jpg') no-repeat 60% center / 600px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 56px 0 48px;
    .el-carousel {
      // height: 600px;
      width: 100%;
    }
  }
  .form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
