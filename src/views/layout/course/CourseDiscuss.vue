<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCourseStore } from '../../../store'

// 处理搜索框
const input = ref('')
const handleSearch = () => {
  console.log(input.value)
}

// 处理主题单选框
const themeRadio = ref('')

// 获取课程信息并渲染到页面
const route = useRoute()
const courseId = route.query.id
const courseStore = useCourseStore()
courseStore.getCourseInfo(courseId)
const courseInfo = ref({})
courseInfo.value = courseStore.courseInfo
</script>

<template>
  <div class="discussion-area">
    <div class="area-head">
      <div class="head-context">
        <h3>讨论区</h3>
        <el-input
          v-model="input"
          placeholder="搜索主题"
          @keyup.enter="handleSearch"
          clearable
          suffix-icon
        >
          <template #append>
            <i-ep-search @click="handleSearch"></i-ep-search>
          </template>
        </el-input>
      </div>
    </div>
    <div class="area-middle">
      <p>欢迎大家来到讨论区！本讨论区供各位同学就课程问题进行交流学习。</p>
      <el-button type="primary">发起主题</el-button>
    </div>
    <div class="area-body">
      <div class="theme-title">
        <span>全部主题</span>
        <div class="button">
          <el-radio-group v-model="themeRadio" size="small">
            <el-radio-button label="最热" />
            <el-radio-button label="最新" />
          </el-radio-group>
        </div>
      </div>
      <ul>
        <li v-for="item in 20" :key="item">
          <div class="theme-context">
            <span>{{ `第${item}章` }}</span>
            <div class="theme-body">
              <span>发表人</span>
              <span>发表日期</span>
              <span>最后回复</span>
            </div>
            <div class="theme-foot">
              <span>浏览</span>
              <span>回复</span>
              <span>投票</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.discussion-area {
  padding: 10px 20px;
  background-color: #fff;

  .area-head {
    border-bottom: 1px solid rgb(238, 238, 238);
    .head-context {
      display: flex;
      position: relative;

      //   justify-content: center;
      .el-input {
        position: absolute;
        right: 0;
        top: 25%;
        width: 300px;
        height: 28px;
      }
    }
  }
  .area-middle {
    margin-bottom: 80px;
    border-bottom: 1px solid rgb(238, 238, 238);
    p {
      font-size: 12px;
      color: #666666;
      margin-bottom: 30px;
    }
    .el-button {
      margin-bottom: 20px;
    }
  }
  .area-body {
    .theme-title {
      display: flex;
      position: relative;
      border-bottom: 1px solid rgb(238, 238, 238);
      padding-bottom: 20px;
      overflow: hidden;
      .button {
        position: absolute;
        right: 0;
      }
    }
  }
  ul {
    padding: 10px 0px;
    overflow: hidden;
    li {
      padding: 20px 0px;
      border-bottom: 1px solid rgb(238, 238, 238);
      position: relative;
      .theme-context {
        margin-bottom: 10px;
        .theme-body {
          span {
            font-size: 12px;
            color: #999999;
            margin-right: 5px;
          }
        }
        .theme-foot {
          position: absolute;
          right: 0;
          span {
            font-size: 12px;
            color: #999999;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
