import Vue from 'vue'
import App from './App.vue'

//导入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入实例化仓库
import store from './lib/store'
//导入路由组件
import router from "./lib/router"
//导入基础样式文件
import './assets/base.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //创建 实例化仓库后需要将其挂载
  store,
  //将路由组件挂载
  router,
}).$mount('#app')
