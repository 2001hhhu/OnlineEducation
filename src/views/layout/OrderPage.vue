<script setup>
const yearX = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月'
]

const yearData = [248, 216, 248, 240, 248, 240, 248, 248, 240, 248, 240, 248]

const option = {
  title: {
    text: '图表测试'
  },
  // 提示栏
  tooltip: {},
  // 图例，对图形解释的那部分
  legend: {
    data: ['小时']
  },
  xAxis: {
    data: yearX
  },
  yAxis: {},
  series: [
    {
      name: '小时',
      type: 'bar',
      data: yearData
    }
  ]
}
</script>

<template>
  <div>我是订单页</div>
  <div class="wrapper">
    <div class="test-container">
      <MyCharts :options="option"></MyCharts>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test-container {
  height: 1000px;
}
</style>
