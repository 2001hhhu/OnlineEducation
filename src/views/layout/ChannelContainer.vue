<script setup>
import image1 from '@/assets/home_carousel.jpg'
// import image2 from '@/assets/photo_1.jpg'

//引入本地图片
const getImageUrl = (url) => {
  return new URL(url, import.meta.url).href
}

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
          <li>
            <div><a href="#">计算机</a></div>
          </li>
          <li>
            <div><a href="#">外语</a></div>
          </li>
          <li>
            <div><a href="#">理学</a></div>
          </li>
          <li>
            <div><a href="#">工学</a></div>
          </li>
          <li>
            <div><a href="#">四六级</a></div>
          </li>
          <li>
            <div><a href="#">考研</a></div>
          </li>
          <li>
            <div><a href="#">期末突击</a></div>
          </li>
          <li>
            <div><a href="#">更多</a></div>
          </li>
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
        <el-tab-pane label="User" name="first">
          <div>
            <ul class="one">
              <li>
                <div class="channel">
                  <a href="#"
                    ><el-image
                      style="width: 224px; height: 122px"
                      src="@/assets/photo_1.jpg"
                      fit="fit"
                    />
                    <h3>XX课程</h3>
                    <p>XX大学</p>
                    <span>老师</span></a
                  >
                </div>
              </li>
              <li>
                <div class="channel">
                  <a href="#"
                    ><el-image
                      style="width: 224px; height: 122px"
                      src="@/assets/photo_1.jpg"
                      fit="fit"
                    />
                    <h3>XX课程</h3>
                    <p>XX大学</p>
                    <span>老师</span></a
                  >
                </div>
              </li>
              <li>
                <div class="channel">
                  <a href="#"
                    ><el-image
                      style="width: 224px; height: 122px"
                      src="@/assets/photo_1.jpg"
                      fit="fit"
                    />
                    <h3>XX课程</h3>
                    <p>XX大学</p>
                    <span>老师</span></a
                  >
                </div>
              </li>
              <li>
                <div class="channel">
                  <a href="#"
                    ><el-image
                      style="width: 224px; height: 122px"
                      src="@/assets/photo_1.jpg"
                      fit="fit"
                    />
                    <h3>XX课程</h3>
                    <p>XX大学</p>
                    <span>老师</span></a
                  >
                </div>
              </li>
              <li>
                <div class="channel">
                  <a href="#"
                    ><el-image
                      style="width: 224px; height: 122px"
                      src="@/assets/photo_1.jpg"
                      fit="fit"
                    />
                    <h3>XX课程</h3>
                    <p>XX大学</p>
                    <span>老师</span></a
                  >
                </div>
              </li>
              <li>
                <div class="channel">
                  <a href="#"
                    ><el-image
                      style="width: 224px; height: 122px"
                      src="@/assets/photo_2.png"
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
        </el-tab-pane>
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
      <p>有志、有识、有恒、有为</p>
      <el-image
        style="width: 800px; height: 600px"
        :src="getImageUrl('@/assets/photo_2.png')"
        fit="fit"
      />
      <br />
      <el-button type="primary" round>Start to learn</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  display: flex;
  max-height: 400px;
  justify-content: space-between;
  margin-bottom: 20px;
  .carousel_left {
    // display: flex;
    flex: 1;
    padding-bottom: 10px;
    border-radius: 8px;
    margin-right: 10px;
    background-color: #fff;

    ul {
      display: flex;
      color: white;
      flex-wrap: wrap;
      padding-left: 10px;
      flex-direction: column;
      height: 100%;
      li {
        display: block;
        flex: 1;
        width: 100%;
        // height: 0;
        // padding: 4px 0;
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
  .channel {
    height: 252px;
    width: 224px;
    background-color: #fff;

    // img {
    //   background-size: contain;
    // }
    .one {
      display: flex;
      li {
        display: block;
        flex: 1;
      }
    }
  }
}
.recommend {
  margin-bottom: 50px;
}
.end {
  margin-bottom: 50px;
  p {
    font-size: 28px;
    text-align: center;
  }
  .el-image {
    display: block;
    margin: 10px auto;
  }
  .el-button {
    display: block;
    width: 60%;
    height: 50px;
    font-size: 24px;
    margin: 20px auto;
  }
}
</style>
