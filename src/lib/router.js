//路由组件
import Vue from "vue";
import VueRouter from "vue-router";

//导入组件
import index from '../components/index.vue'
import cart from '../components/cart.vue'

//注册路由
Vue.use(VueRouter);
//写路由规则
let routes = [
    {
        path:"/",
        redirect:"/index"
    }
    ,{
    path:"/index",
    component:index
},{
    path:"/cart",
    component:cart
}
]

//实例化路由对象
let router = new VueRouter({
    routes
})

//将数据暴露出去
export default router;