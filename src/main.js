import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import 'muse-ui/lib/styles/base.less';
import { Button, BottomNav,AppBar } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';


Vue.use(Button)
Vue.use(BottomNav)
Vue.use(AppBar)
// 阻止启动生产消息
Vue.config.productionTip = false
// 将axios加入全局的作用域
Vue.prototype.$axios=axios
new Vue({ // eslint-disable-line no-unused-vars
  // 配置路由
  router,
  // 将App.vue 渲染进去
  render: h => h(App)
}).$mount('#app')//el #app
