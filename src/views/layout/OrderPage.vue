<script setup>
import { ref } from 'vue'
import { useUserStore, useCourseStore } from '@/stores'
import { getImageUrl } from '@/utils/getphoto'

// 获取用户信息
const userStore = useUserStore()
userStore.getUser()
const userInfo = userStore.user
const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'

// 获取课程信息
const courseStore = useCourseStore()
courseStore.getCourseInfo(1)
const courseInfo = courseStore.courseInfo
console.log(courseInfo)

// 输入的手机号
const phoneInput = ref()

// 选择支付方式
const paymentRadio = ref()

// 是否已阅读同意书
const readChecked = ref(true)
</script>

<template>
  <div class="wrapper">
    <div class="title">
      <h2>请确认订单信息</h2>
      <span>请在X分钟内完成支付</span>
    </div>

    <div class="order-detail">
      <strong>购买账户</strong>
      <div class="user-detail">
        <div class="user-avatar">
          <el-avatar :size="50" :src="userInfo.avatar || circleUrl" />
        </div>
        <div class="user-info">
          <p>{{ userInfo.nickname }}</p>
          <span>请填写联系方式</span>
          <div class="user-input">
            <label>手机号</label>
            <el-input v-model="phoneInput" size="small" placeholder="请输入手机号" />
            <el-button type="primary">保存</el-button>
          </div>
        </div>
      </div>
      <strong>购买商品</strong>
      <div class="commodity-detail">
        <div class="commodity-course">
          <div class="course">
            <el-image
              :src="getImageUrl(courseInfo.url)"
              style="height: 63px; width: 100px"
              fit="fit"
            ></el-image>
            <div class="course-left">
              <span>{{ courseInfo.name }}</span>
            </div>
            <div class="course-right">
              <span>{{ courseInfo.price || 0.0 }}</span>
            </div>
          </div>
        </div>
        <div class="commodity-price">
          <div class="price">
            <span>总计：￥{{}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="order-payment">
      <div class="payment-title">
        <strong>支付方式</strong>
      </div>
      <div class="payment-method">
        <el-radio-group v-model="paymentRadio" class="ml-4">
          <el-radio label="1" size="large">微信支付</el-radio>
          <el-radio label="2" size="large">支付宝支付</el-radio>
          <el-radio label="3" size="large">花呗分期</el-radio>
        </el-radio-group>
      </div>
      <div class="payment-info">
        <div class="info">
          <div class="info-first"><p>实付金额：￥{{}}</p></div>
          <div class="info-second">
            <el-checkbox v-model="readChecked" label="已阅读" size="large" />
          </div>
          <div class="info-third">
            <el-button type="success" round>立即支付</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  margin-bottom: 15px;
  h2 {
    margin-bottom: 0;
  }
}

.order-detail {
  background-color: #fff;
  padding: 24px 32px;
  margin-bottom: 30px;
  .user-detail {
    display: flex;
    margin-top: 20px;
    margin-bottom: 30px;
    .user-avatar {
      margin-right: 15px;
    }
    .user-info {
      display: flex;
      flex: 1;
      font-size: 14px;
      flex-direction: column;
      p {
        margin-top: 0;
        margin-bottom: 5px;
        color: #333333;
      }
      span {
        margin-bottom: 10px;
        color: #999999;
      }
      .user-input {
        display: flex;
        width: 100%;
        label {
          min-width: 3vw;
          line-height: 32px;
          margin-right: 10px;
        }
        .el-input {
          max-width: 20vw;
          margin-right: 10px;
        }
      }
    }
  }
  .commodity-detail {
    background-color: rgba(64, 175, 255, 0.04);
    margin-top: 20px;
    .commodity-course {
      border-bottom: 1px solid rgb(238, 238, 238);
      padding: 20px 24px;
      .course {
        position: relative;
        .course-left {
          position: absolute;
          top: 0;
          left: 10%;
        }
        .course-right {
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }
    .commodity-price {
      overflow: hidden;
      padding: 14px 0;
      .price {
        float: right;
        margin-right: 3vw;
      }
    }
  }
  strong {
    font-size: 18px;
  }
}

.order-payment {
  background-color: #fff;
  padding: 24px 32px;
  margin-bottom: 30px;
  .payment-title {
    strong {
      font-size: 18px;
    }
  }
  .payment-method {
    .ml-4 {
      display: flex;
      flex-direction: column;
      .el-radio {
        width: 100%;
        border-bottom: 1px solid rgb(238, 238, 238);
      }
    }
  }
  .payment-info {
    background-color: rgba(64, 175, 255, 0.04);

    overflow: hidden;
    .info {
      float: right;
      overflow: hidden;
      margin-right: 50px;
      .info-first {
        margin-top: 20px;
        p {
          margin: 0;
        }
      }
      .info-second {
      }
      .info-third {
      }
    }
  }
}
</style>
