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
