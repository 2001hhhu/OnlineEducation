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
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
      </div>
      <div class="carousel_middle">
        <el-carousel>
          <el-carousel-item v-for="item in imgurl" :key="item">
            <img :src="item.url" class="carousel_img" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="carousel_left">展示</div>
    </div>
  </div>

  <div>我是课程展示</div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  .carousel {
    display: flex;
    justify-content: space-between;
    .carousel_left {
      flex: 1;
      background-color: black;
      ul {
        display: flex;
        color: white;
        li {
          display: block;
        }
      }
    }
    .carousel_middle {
      flex: 3;
    }
    .carousel_right {
      flex: 1;
      background-color: black;
    }
  }
}
</style>
