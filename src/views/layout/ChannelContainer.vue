<script setup>
import image1 from '@/assets/home_carousel.jpg'

const imgurl = [{ url: image1 }, { url: image1 }, { url: image1 }, { url: image1 }]
imgurl.forEach((item) => {
  console.log(item)
})
</script>

<template>
  <router-view></router-view>
  <div class="wrapper">
    <div class="carousel">
      <div class="carousel_left">
        <ul>
          <li><div>1</div></li>
          <li><div>1</div></li>
          <li><div>1</div></li>
          <li><div>1</div></li>
          <li><div>1</div></li>
          <li><div>1</div></li>
          <li><div>1</div></li>
          <li><div>1</div></li>
          <li><div>1</div></li>
        </ul>
      </div>
      <div class="carousel_middle">
        <el-carousel>
          <el-carousel-item v-for="item in imgurl" :key="item">
            <!-- <a href="#" class="carousel_img" target="_blank"></a> -->
            <img :src="item.url" class="carousel_img" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="carousel_right">展示</div>
    </div>
    <div class="coorperation">
      <ul>
        <a href="#" target="_blank" class="coorperation_1">查看所有合作方</a>
        <li><a href="#">XX高校</a></li>
        <li><a href="#">XX高校</a></li>
        <li><a href="#">XX高校</a></li>
        <li><a href="#">XX高校</a></li>
        <li><a href="#">XX高校</a></li>
      </ul>
    </div>
    <div class="history">
      <h2>观看历史</h2>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>
    </div>
    <div class="recommend">
      <h2 class="">推荐</h2>
    </div>
    <div class="end">
      <h2>开启学习之旅</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  margin: 10px auto;
  .carousel {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .carousel_left {
      display: flex;
      flex: 1;
      border-radius: 8px;
      margin-right: 10px;
      background-color: black;

      ul {
        color: white;

        flex-wrap: wrap;
        li {
          display: block;
        }
      }
    }
    .carousel_middle {
      flex: 5;
      .carousel_img {
        width: 100%;
        border-radius: 8px;
        background-size: cover;
      }
    }
    .carousel_right {
      flex: 1;
      border-radius: 8px;
      margin-left: 10px;
      background-color: black;
    }
  }
  .coorperation {
    height: 60px;
    border-radius: 8px;
    background-color: #fff;
    padding-right: 20px;
    margin-bottom: 50px;
    ul {
      display: flex;
      justify-content: space-between;
      line-height: 60px;
      .coorperation_1 {
        background: url('@/assets/more.png') no-repeat right center;
        padding-right: 20px;
        // &:after {
        //   content: '';
        //   display: block;
        //   position: a;
        //   width: 20px;
        //   height: 20px;
        //   background: url('@/assets/more.png') no-repeat;
        //   margin: 0 auto;
        //   color: black;
        // }
      }
    }
  }
  .history {
    margin-bottom: 50px;
  }
  .recommend {
    margin-bottom: 50px;
  }
  .end {
    margin-bottom: 50px;
  }
}
</style>
