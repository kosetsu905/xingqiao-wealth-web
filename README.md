# Vue 3 + TypeScript + Vite




#对接websocket
# 如果使用原生WebSocket，无需额外依赖
# 如果使用Socket.IO
npm install socket.io-client
# 或者使用ws库
npm install ws

npm install axios chart.js tradingview-widget


nginx

在前端项目部署中，Nginx 匹配规则与前端路由的优先级问题是常见的坑点，尤其是 SPA（单页应用）场景下。本文结合 Nginx 官方文档和前端路由原理，系统梳理两者的匹配逻辑及协同配置方法。
一、Nginx 匹配规则核心逻辑
Nginx 的 location 块用于定义 URL 匹配规则，其匹配优先级（从高到低）如下：

匹配类型	语法示例	说明	优先级
精确匹配	location = /path	完全匹配 URL 路径（包括查询参数），匹配成功后立即停止搜索其他规则。	最高
前缀匹配	location ^~ /path	匹配以 /path 开头的最长路径（^~ 表示“优先前缀匹配”），匹配成功后停止搜索正则规则。	次高
正则匹配	location ~ /path	正则匹配（区分大小写）；~* 表示不区分大小写。按配置文件中出现的顺序匹配，匹配到第一个正则后停止。	中
通用匹配	location /path	匹配所有未被上述规则覆盖的路径（类似通配符），优先级最低。	最低
关键特性补充：
匹配停止条件：一旦匹配到规则（精确/前缀带 ^~/正则），后续规则不再检查（除非使用 include 或 rewrite 二次跳转）。
正则匹配顺序：正则规则按 nginx.conf 中定义的顺序逐个匹配，因此需将更具体的正则放在前面（例如 /user/123 应放在 /user/\d+ 前）。
路径标准化：Nginx 会自动标准化 URL（如去除重复 /、解析 . 和 ..），例如 /foo//bar/../baz 会被标准化为 /foo/baz。
二、前端路由的两种模式与 Nginx 配置
前端路由（如 Vue Router、React Router）本质是通过 JS 拦截 URL 变化，动态渲染页面，而非向服务器发起新请求。根据实现方式分为两种模式，对 Nginx 的要求不同：

1. Hash 模式（# 路由）
   原理：URL 中的 # 后内容（如 https://example.com/#/user）不会被发送到服务器，仅由前端 JS 处理。
   Nginx 配置：无需特殊处理，所有请求（无论路径如何）均返回 index.html 即可。
   nginx
   复制
   location / {
   root /path/to/frontend/dist;
   index index.html;
   try_files $uri $uri/ /index.html;  # 关键：尝试访问真实文件，不存在则返回 index.html
   }
2. History 模式（HTML5 pushState）
   原理：通过 history.pushState() 修改 URL（如 https://example.com/user），但不会触发页面刷新。此时若用户直接访问该 URL，服务器需返回 index.html，否则会报 404。
   Nginx 配置：必须通过 try_files 将所有前端路由路径重定向到 index.html。
   nginx
   复制
   location / {
   root /path/to/frontend/dist;
   index index.html;
   try_files $uri $uri/ /index.html;  # 核心配置
   }
   $uri：尝试访问用户请求的真实文件/目录（如 /static/js/main.js）。
   $uri/：尝试访问目录（如 /images/，若存在 index.html 则自动加载）。
   /index.html：若前两者不存在（即用户访问的是前端路由路径），返回 index.html。
   三、Nginx 与前端路由的优先级冲突场景
   实际部署中，若 Nginx 规则配置不当，可能导致前端路由失效（返回 404）。常见冲突场景及解决方案：

场景 1：Nginx 正则规则拦截前端路由路径
问题：若 Nginx 配置了正则规则匹配 /user/*，且未设置 ^~，则前端路由的 /user/123 会被正则拦截，无法转发到 index.html。
示例错误配置：

nginx
复制
location ~ /user/.* {  # 正则匹配所有 /user/ 开头的路径
return 403;  # 错误：拦截了前端路由的 /user 路径
}
解决方案：

若需保护特定路径（如 /api/user），将正则规则的优先级调低（去掉 ^~），或调整匹配范围。
前端路由路径（如 /user/*）应放在通用匹配或 try_files 之后。
场景 2：静态资源路径与前端路由路径重叠
问题：若前端路由路径（如 /about）与静态资源路径（如 /about.html）重叠，Nginx 可能优先返回静态资源，导致前端路由失效。
示例：
用户访问 /about，Nginx 发现存在 /about.html（静态文件），直接返回该文件，而非 index.html 中的前端路由。
解决方案：

确保静态资源存放于独立目录（如 /static/about.html），避免与前端路由路径重叠。
在 try_files 中优先检查 $uri（真实文件），若不存在则返回 index.html（前端路由）。
四、最佳实践总结
**SPA 必须配置 try_files**：无论 Hash 还是 History 模式，try_files $uri $uri/ /index.html 是通用解决方案，确保前端路由路径被正确转发。
正则规则谨慎使用：若需匹配特定路径（如 API 接口 /api/*），使用 location /api/ { ... } 前缀匹配，避免正则干扰前端路由。
静态资源路径隔离：静态资源（JS/CSS/图片）建议存放在 /static 或 /assets 目录，避免与前端路由路径（如 /user）重叠。
验证配置有效性：部署后通过 curl -I https://example.com/user 检查响应头，确认是否返回 index.html（状态码 200）而非 404。
总结
Nginx 匹配规则的核心是“最长前缀优先，正则按序匹配”，而前端路由的优先级依赖于服务器对 index.html 的转发能力。通过合理配置 try_files 和避免规则冲突，可确保前端路由在各种场景下正常工作。


