# online_education_platform

基于Vue3+pinia+Element-plus的线上教育平台。

## 1、描述

​	在线教育平台，提供各种在线课程，用户可以浏览、搜索、购买课程。网站还提供用户注册、登录、学习进度管理、评价课程等功能。模块分为用户模块，包括用户注册、登录、个人信息管理（如修改密码、查看学习进度等）；课程展示模块，展示所有可购买的课程，包括课程封面、课程名、教师名、价格等信息。用户可以通过搜索框搜索课程；购物车模块，用户可以将课程添加到购物车，也可以从购物车中移除课程，购物车中的课程可以结算；学习模块用户可以在线观看课程视频，完成课后作业，参与在线讨论；订单模块，用户可以查看自己的所有订单，包括订单状态（如待支付、已支付、已完成等）；订单详情（如购买的课程、数量、总价等）。评价模块，用户可以对已完成的课程进行评价，包括评分和文字评论；报表模块，用户活跃度报表、资源使用报表、学习进度报表和学习进度报表。

# 2、演示

主页

![demo_home](.\demo\demo_home.png)

主页包含顶部的菜单，可以跳转到其它页面、进行课程搜索或者进行登录，只有登录后才能进入个人中心和看到观看历史。主页的下面有一些推荐课程和一些课程的排行榜，点击课程可跳转到课程详细页。

课程分类页

![demo_category](.\demo\demo_category.png)

![demo_category_2](.\demo\demo_category_2.png)

课程分类页可通过点击上面的筛选按钮对下面的课程进行筛选找到自己想要的页面。

个人主页

![demo_user_profile](.\demo\demo_user_profile.png)

![demo_user_profile_2](.\demo\demo_user_profile_2.png)

个人主页可以看到个人详细信息，点击编辑按钮可以编辑个人信息。

用户报表

![demo_user_report](.\demo\demo_user_report.png)

用户报表页可以看到用户的课程学习情况和他的每日学习时长，以图表形式展示。

课程介绍

![demo_course_introduce](.\demo\demo_course_introduce.png)

课程介绍可以看到课程的一些介绍和公告。

课程学习

![demo_course_learn](.\demo\demo_course_learn.png)

课程学习页点击对应的章节面板可以看到对应的视频和文档。

课程讨论

![demo_course_discussion](.\demo\demo_course_discussion.png)

课程评价

![demo_course_evaluate](C:\Users\Mare\Desktop\vue\online_education_platform\demo\demo_course_evaluate.png)

课程评价可以对当前课程进行评价。

课程视频

![demo_course_video](C:\Users\Mare\Desktop\vue\online_education_platform\demo\demo_course_video.png)

课程视频页可以观看相关视频。

# 3、技术栈

Vue3+Element-plus+Pinia+Vue router+video.js+websocket+ECharts+Vite

暂用json-server模拟后端返回数据

## 4、构建

### json-server启动

文件在./json-server-demo/db.json

```
json-server --watch db.json
```

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
