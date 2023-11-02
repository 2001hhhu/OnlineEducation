# online_education_platform

基于Vue3+pinia+Element-plus的线上教育平台。

## 1、描述

​	在线教育平台，提供各种在线课程，用户可以浏览、搜索、购买课程。网站还提供用户注册、登录、学习进度管理、评价课程等功能。模块分为用户模块，包括用户注册、登录、个人信息管理（如修改密码、查看学习进度等）；课程展示模块，展示所有可购买的课程，包括课程封面、课程名、教师名、价格等信息。用户可以通过搜索框搜索课程；购物车模块，用户可以将课程添加到购物车，也可以从购物车中移除课程，购物车中的课程可以结算；学习模块用户可以在线观看课程视频，完成课后作业，参与在线讨论；订单模块，用户可以查看自己的所有订单，包括订单状态（如待支付、已支付、已完成等）；订单详情（如购买的课程、数量、总价等）。评价模块，用户可以对已完成的课程进行评价，包括评分和文字评论；报表模块，用户活跃度报表、资源使用报表、学习进度报表和学习进度报表。

# 2、演示

![demo_home](.\demo\demo_home.png)

# 3、技术栈

Vue3+Pinia+Vue router+websocket+ECharts+Vite+Element-plus

暂用JSON-server模拟后端数据

## 4、构建

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
