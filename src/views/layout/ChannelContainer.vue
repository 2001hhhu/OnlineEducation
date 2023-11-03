<script setup>
import image1 from '@/assets/home_carousel.jpg'
import { ref } from 'vue'
// import image2 from '@/assets/photo_1.jpg'

//引入本地图片
function getImageUrl(url) {
  return new URL(url, import.meta.url).href
}
//处理头像图片
const circleUrl = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
)
// const empty = ref('https://empty') //空头像
//处理轮播图图片
const imgurl = [{ url: image1 }, { url: image1 }, { url: image1 }, { url: image1 }]
//处理观看历史标签页的标签页
const activeName = ref('first')
//处理登录注册按钮
const dialogTableVisible = ref(false)
const handleLogin = () => {
  dialogTableVisible.value = true
}
</script>

<template>
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
            <img :src="item.url" class="carousel_img" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="carousel_right">
        <div class="avatar">
          <el-avatar :size="65" :src="circleUrl" />
          <el-button @click="handleLogin" type="success" round>登录/注册</el-button>
        </div>
      </div>
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
    <div class="view_history">
      <h2>观看历史</h2>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="1" name="first">
          <div>
            <ul class="view">
              <li v-for="item in 5" :key="item">
                <div class="channel">
                  <a href="#"
                    ><el-image
                      style="width: 200px; height: 122px"
                      :src="getImageUrl('/images/home/photo_1.jpg')"
                      fit="fit"
                    />
                    <h3 class="view_title">XX课程</h3>
                    <p>XX大学</p>
                    <span>老师</span></a
                  >
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="2" name="second"></el-tab-pane>

        <el-tab-pane label="3" name="third"></el-tab-pane>

        <el-tab-pane label="4" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="recommend">
      <h2>推荐</h2>
      <div>
        <ul class="column">
          <li v-for="item in 10" :key="item">
            <div class="box">
              <a href="#"
                ><el-image
                  :src="getImageUrl('/images/home/photo_3.jpg')"
                  fit="fit"
                ></el-image>
                <h3>课程名</h3>
                <p>老师</p></a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="rank_list">
      <h2>本周课程排行</h2>
      <div class="list">
        <div v-for="item in 3" :key="item" class="rank">
          <div class="rank_head">
            <div class="title">
              <h3>热门排行</h3>
              <span>Top50</span>
            </div>
          </div>
          <div class="rank_body">
            <ul>
              <li v-for="item in 5" :key="item">
                <a href="#">
                  <div class="rank_item">
                    <div style="font-size: 16px">{{ item }}</div>
                    <el-image
                      :src="getImageUrl('/images/home/photo_3.jpg')"
                      fit="fit"
                    ></el-image>
                    <div class="course_introduction">
                      <p class="course_title">课程名</p>
                      <p>XX大学</p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="end">
      <h2>开启学习之旅</h2>
      <p>有志、有识、有恒、有为</p>
      <el-image :src="getImageUrl('/images/home/photo_2.jpg')" fit="fit" />
      <br />
      <el-button type="primary" round>Start to learn</el-button>
    </div>
    <el-dialog v-model="dialogTableVisible" class="login_dialog">
      <LoginWindow></LoginWindow>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  display: flex;
  max-height: 400px;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
  .carousel_left {
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
    background-color: #fff;
    // position: relative;
    .avatar {
      // position: absolute;
      // margin: 0 auto;
      text-align: center;
      margin-top: 40%;
      .el-button {
        width: 80%;
        margin-top: 10px;
      }
    }
  }
}
.coorperation {
  height: 60px;
  border-radius: 8px;
  background-color: #fff;
  padding-right: 20px;
  margin-bottom: 40px;
  ul {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    .coorperation_1 {
      background: url('@/assets/more.png') no-repeat right center;
      padding-right: 20px;
    }
  }
}
.view_history {
  margin-bottom: 50px;
  .view {
    display: flex;
    justify-content: space-around;
    padding: 0;
    li {
      flex: 1;
      max-width: 224px;
      .channel {
        height: 232px;
        width: 200px;
        background-color: #fff;

        h3 {
          font-size: 14px;
          margin: 0;
        }
        p {
          font-size: 12px;
          margin: 6px 0 0 0;
        }
        span {
          font-size: 12px;
          margin-top: 6px;
        }
      }
    }
  }
}
.recommend {
  margin-bottom: 50px;
  .column {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    // margin-right: 0 0;
    li {
      margin-bottom: 15px;

      .box {
        min-height: 252px;
        border-radius: 8px;
        background-color: #fff;
        a {
          .el-image {
            max-height: 126px;
            max-width: 224px;
          }
          h3 {
            font-size: 14px;
            margin: 0;
          }
          p {
            font-size: 12px;
            margin-top: 6px;
            color: #666666;
          }
        }
      }
    }
  }
}
.rank_list {
  margin-bottom: 50px;

  .list {
    display: flex;
    justify-content: space-around;
    .rank {
      min-height: 496px;
      width: 32%;
      // flex: 1;
      background-color: #fff;
      .rank_head {
        height: 15%;
        background-image: linear-gradient(#f3b573, #fff);
        .title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          h3 {
            display: inline;
            margin: 0;
          }
          span {
            margin-left: 6px;
          }
        }
      }
      .rank_body {
        padding-left: 14px;
        height: 85%;
        ul {
          display: flex;
          height: 100%;
          flex-direction: column;
          justify-content: space-between;
          li {
            flex: 1;
            .rank_item {
              display: flex;
              .el-image {
                height: 63px;
                width: 112px;
                margin-left: 10px;
              }
              .course_introduction {
                margin-left: 10px;
                p {
                  margin: 0px;
                  font-size: 12px;
                }
                .course_title {
                  margin-bottom: 3px;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
}
.end {
  margin-bottom: 50px;
  p {
    font-size: 28px;
    text-align: center;
  }
  .el-image {
    display: block;
    width: 800px;
    height: 600px;
    opacity: 1;
    margin: 10px auto;
    transition: all 1s;
  }
  .el-image:hover {
    display: block;
    width: 1000px;
    height: 750px;
    opacity: 0.8;
    margin: 10px auto;
    transition: all 1s;
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
