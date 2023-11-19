import * as echarts from 'echarts/core'
// 引入要用到的图表
import { LineChart, BarChart, PieChart } from 'echarts/charts'
// 引入提示框、数据集等组件
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent
} from 'echarts/components'
// 引入标签自动布局、全局过滤动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入Canvas渲染器，必须
import { CanvasRenderer } from 'echarts/renderers'

/**
 * title 标题
 * legend 图例
 * tooltip 提示
 * xAxis x轴线
 * yAxis y轴线
 * series 系列
 * data 数据
 * 官网：https://echarts.apache.org/zh/option.html#title
 * bar 柱状图
 * line 折线图
 *  (1)曲线图
 *   加上smooth:true;就会变成曲线图
 *  (2)面积图
 *   加上areaStyle:{fill:“#f70”} 会变成面积图
 * pie 饼形图
 *   加上radius:[80,50] 会变成环形图
 */

// 注册必须组件
echarts.use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  CanvasRenderer,
  BarChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  LegendComponent
])

export default echarts
