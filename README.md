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
