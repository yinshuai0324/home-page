#!/bin/sh
# 放弃所有更改 防止拉取不成功
git reset --hard
# 拉取最新代码
git pull
# 给脚本执行权限 防止下次启动不了
chmod +x start.sh
# 安装依赖
cnpm i
# 编译
npm run build
# 启动服务
npm run start
