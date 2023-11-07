<script setup>
import { ref } from 'vue'

//处理折叠面板
const activeNames = ref([''])
</script>

<template>
  <div>我是课程学习页</div>
  <div class="learn">
    <div class="learn-head">
      <h3>总课程</h3>
    </div>
    <div class="learn-collapse">
      <el-collapse v-model="activeNames">
        <el-collapse-item v-for="item in 7" :key="item" :name="item">
          <template #title>
            <div class="collapse-item">{{ `第${item}章` }}</div>
          </template>
          <div>
            <el-button text>第一节</el-button>
          </div>
          <div>
            <el-button text>第二节</el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.learn {
  padding: 24px 32px;
  background-color: #fff;
  .learn-head {
    margin-bottom: 30px;
  }
  .learn-collapse {
    .el-collapse {
      .el-collapse-item {
        margin: 10px 0px;
        background-color: #e3e0e0;
        .collapse-item {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
