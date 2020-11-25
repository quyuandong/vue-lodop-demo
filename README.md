> ### 铁建通用-管理系统 运行步骤:

1. ### 开发环境运行
   ```bash
   yarn
   ```
2. ### 修改文件

- `src/libs/urls` 中 地址切换为实际开发环境服务器地址, pro 的值，更换为生产环境（在线环境）的后端服务地址。

3. ### 运行项目

   ```bash
   yarn serve
   ```

4. ### 自动格式化代码

   ```bash
   yarn eslint
   yarn tslint
   ```

5. ### 编译打包
   ```bash
   # 普通打包
   yarn build
   # 现代浏览器优化
   yarn build:modern
   ```

> ### 模板使用提示:
>
> 目录含义:

```bash
-src
  |__components
           |__base    #基础公共组件
  |__libs           #常用工具函数,项目开发时 urls 配置
  |__mock           #开发时使用的 mock 数据及方法
  |__plugins        #项目插件 如axios,element-ui
  |__types          #ts的类型定义文件 index.d.ts
  |__views
       |__common    #项目公共组件 如 Error.vue,Login.vue
       |__home      #项目首页
```

1. 本模板路由权限根据菜单管理中的 path 和 name 控制，按钮权限和新页面权限由 actionCode 控制。

2. 所有接口调用成功判断已在 axios 里完成,使用时采用

```javaScript
   api()
   .then(res=>{
     // 接口成功执行
   })
   .catch(e=>{
     // 接口失败执行
   })
   .finally(e=>{
     //可选 成功/失败后执行
   })
```

3. 接口调用尽量在 vuex 的 actions 中调用,进行数据-视图分类,集中管理数据.

4. 规范代码风格的配置文件:

- **.prettierrc** .prettier 格式化配置文件
- **.eslintrc.js** eslint 代码检查配置文件
- **tslint.json** ts 格式化检查配置文件
- **tsconfig.json** 当前项目 ts 配置文件
