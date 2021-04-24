import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import 'muse-ui/lib/styles/base.less';
import { Button, BottomNav, AppBar, Grid ,Icon,Card,Avatar} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
import Vant from 'vant';
import 'vant/lib/index.css';
import Helpers from 'muse-ui/lib/Helpers';
import { Toast } from 'vant';

Vue.use(Toast);

Vue.use(Vant)

Vue.use(Button)
Vue.use(BottomNav)
Vue.use(AppBar)
Vue.use(Grid)
Vue.use(Helpers);
Vue.use(Icon)
Vue.use(Card)
Vue.use(Avatar)
// 阻止启动生产消息
Vue.config.productionTip = false
// 将axios加入全局的作用域
Vue.prototype.$axios = axios
new Vue({ // eslint-disable-line no-unused-vars
  // 配置路由
  router,
  // 将App.vue 渲染进去
  render: h => h(App),
  data:function(){
    return{
      name:"老刘",
      id:123243, 
      address:{
        name:"老刘",
        tel:"15069148598",
        bigaddress:["青岛科技大学","崂山校区","北苑"],
        smalladdress:"南苑4号楼103"
      }
    }
  }
}).$mount('#app')//el #app
