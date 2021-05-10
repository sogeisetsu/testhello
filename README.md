# testhello

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 关于vue路由
子路由的路由出口在父路由所定义的组件那里，如果父路由没有定义路由出口，那么路由就会失效。如果该路由没有父路由，那么该路由的出口就在`main.js`里面挂载的单文件组件里面（默认是`App.vue`）
另外，`main.js`里挂载的单文件组件是所有路由的父路由，也就是说无论如何，`App.vue`里面必须有路由出口    
**子路由修改父路由的数据可以用`$parent`来实现，具体的实现方式是`this.$parent.msg="home"`**

## Muse-UI Material Design 相关
+ 底部导航的固定
+ Muse-UI 按需引入
+ 水波纹需要的vue等级
+ Muse-UI 默认字体和图标需要翻墙
+ css import的路径 并且不适用@
+ vue 获取当前路由
+ 报错`[Vue warn]: Failed to mount component: template or render function not defined.
found in`的解决方法
+ 报错`vue this.getOptions is not a function     at Object.lessLoader`
[解决方法](https://www.cnblogs.com/webdragon/p/14361754.html)
vue cli computed修改data会被报错`vue/no-side-effects-in-computed-properties`
## 收藏夹

### 前端

- [vue-swipe的使用 - SegmentFault 思否](https://segmentfault.com/a/1190000013909870)
- [GitHub - ElemeFE/vue-swipe: A touch slider for vue.js.](https://github.com/ElemeFE/vue-swipe)
- [vue点击时动态改变样式 ------- 最简单的方法](https://www.shuzhiduo.com/A/QV5ZYGA6Jy/)
- [(7条消息) Vue 点击li动态改变元素样式_xiaoqingqing的博客-CSDN博客](https://blog.csdn.net/qingqing77520/article/details/108637595)
- [介绍 — Vue.js](https://cn.vuejs.org/v2/guide/)
- [Vant - 轻量、可靠的移动端 Vue 组件库](https://vant-contrib.gitee.io/vant/#/zh-CN/notice-bar#zi-ding-yi-yang-shi)
- [exports、module.exports和export、export default到底是咋回事 - SegmentFault 思否](https://segmentfault.com/a/1190000010426778)
- [(2条消息) vue自定义组件实现v-model双向绑定_寻梦无痕-CSDN博客](https://blog.csdn.net/liub37/article/details/83382205)
- [如何写一个双向绑定的VUE组件 - 简书](https://www.jianshu.com/p/ee1a7985592d)
- [组件基础 — Vue.js v-model](https://cn.vuejs.org/v2/guide/components.html#在组件上使用-v-model)
- [vue-单文件组件——创建，引入、注册，应用_viceen的博客-CSDN博客](https://blog.csdn.net/weixin_44867717/article/details/104218102)
- [单文件组件规范 | Vue Loader](https://vue-loader.vuejs.org/zh/spec.html#自定义块)
- [单文件组件规范 | Vue Loader](https://vue-loader.vuejs.org/zh/spec.html#简介)
- [什么是 npm —— 写给初学者的编程教程](https://chinese.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
- [npm- 开发与生产环境 - SegmentFault 思否](https://segmentfault.com/a/1190000010675594)
- [npm详细教程 - 简书](https://www.jianshu.com/p/60ac7fe6edce)
- [package.json 指南](http://nodejs.cn/learn/the-package-json-guide#dependencies)
- [起步 | webpack 中文网](https://www.webpackjs.com/guides/getting-started/)
- [npm scripts 使用指南 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
- [关于vue-cli2和3的那些事 - 简书](https://www.jianshu.com/p/4b594771211b)
- [unipay - uni-app官网](https://uniapp.dcloud.net.cn/uniCloud/unipay)
- [如何使用RSS - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2006/01/rss.html)
- [vue-cli中使用axios - SegmentFault 思否](https://segmentfault.com/a/1190000014703735)
- [MDUI - Material Design 样式的前端框架](https://www.mdui.org/)
- [vue单页面引入CDN链接 - Dreamsqin - 博客园](https://www.cnblogs.com/dreamsqin/p/12002063.html)
- [Muse-UI](https://muse-ui.org/#/zh-CN/usage)
- [vue-cli全集教程-慕课网](https://www.imooc.com/video/20118)
- [Icons - Google Fonts](https://fonts.google.com/icons?selected=Material+Icons)
- [谷歌字体和图标](https://fonts.google.com/)
- [vue 组件单独引入 css 注意事项_Lao_Cai_的博客-CSDN博客](https://blog.csdn.net/Lao_Cai_/article/details/105551473)
- [vue项目中，单独的组件引用对应的css样式_杜鲁阳的博客-CSDN博客](https://blog.csdn.net/AI_U20/article/details/87281307?utm_medium=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-4.control&dist_request_id=1328769.45932.16175471771271909&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromMachineLearnPai2~default-4.control)
- [vue获取当前页面路由_真真的博客-CSDN博客_vue获取当前路由](https://blog.csdn.net/weixin_43292447/article/details/89242307)
- [vue中ref的作用 - 简书](https://www.jianshu.com/p/623c8b009a85)


wwwewe