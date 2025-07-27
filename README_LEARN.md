# 步骤1：清理全局缓存
npm cache clean --force

# 步骤2：删除项目本地依赖
rm -rf node_modules

# 步骤3：重新安装依赖
npm install

# 步骤4：验证缓存状态（可选）
npm cache verify


#打包
npm run build   # 或 yarn build
