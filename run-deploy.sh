#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 提交项目源码
git init
git add -A
git commit -m 'commit code'

# 发布到 https://<USERNAME>.github.io master
git push -f git@github.com:hengguao/hengguao.git master

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy docs'

# 发布到 https://<USERNAME>.github.io master:gh-pages
git push -f git@gitee.com:hengguao/hengguao.git master

cd -