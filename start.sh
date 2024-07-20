#!/bin/sh
# 放弃所有更改 防止拉取不成功
git checkout .
# 拉取最新代码
git pull
# 安装依赖
cnpm i
# 编译
npm run build
# 启动服务
npm run start
