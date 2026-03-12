# 步骤1：清理全局缓存
npm cache clean --force

# 步骤2：删除项目本地依赖
rm -rf node_modules

# 步骤3：重新安装依赖
npm install

# 步骤4：验证缓存状态（可选）
npm cache verify


#打包

npm run build:test

#环境依赖
node 版本
v22.17.0

图标库使用
npm i @iconify/json @iconify/tailwind -D
https://yesicon.app/


