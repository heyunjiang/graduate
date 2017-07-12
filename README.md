# 基于dva+thinkphp实现的dcp项目管理系统

## 描述

单页应用，取消之前使用mock数据；

整体采用 `dva1.1` + `thinkphp3.2` 架构，代码 `es6` 书写；

前端服务器使用 `dora` (port:8111)，后台使用 `wamp` (port:8090)集成开发环境；

>这是我的毕业设计，刚开始，项目刚好可以启动，内容很少；

>是将 `ant-admin` 进行修改成的项目


## 运行方式

1. `git clone https://github.com/heyunjiang/graduate.git`
2. `npm install`
3. 创建数据库 `dcp`，并导入 `dcp.sql`
4. 将 apache 服务器端口修改为 `8090`
5. `npm run dev`
6. 浏览器输入 `localhost:8111/graduate` 

