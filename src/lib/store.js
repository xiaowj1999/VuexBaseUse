
import Vue from 'vue'
//在全局中导入vuex
import Vuex from 'vuex'
//同时注册插件
Vue.use(Vuex)

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
//简单创建一个vuex的实例化仓库
const store = new Vuex.Store({
  state: {
      //购物车数据
      cartData: {}
  },
  //如果数据需要进行计算才可以获取 需要使用Vuex的计算属性
  getters:{
      //计算总数
      totalNum(state){
          let num = 0;
          for (const key in state.cartData) {
              num += state.cartData[key].num
          }
         return num;
      },
  },
  //指将需要修改的数据暴露出去
  mutations: {
    add2Store(state,data){
        //添加到仓库中 
        // console.log(data); //获取点击的数据
        if(state.cartData[data.name]){
            //如果有值 直接累加
            state.cartData[data.name].num++
        }else {
            //购物车中没有 新增一个字段
            //本来没有的属性 根据逻辑动态增加 Vue不会跟踪他的改变 
            //需要通过Vue指定的方法 告诉他 这个数据是我动态增加的
            Vue.set(state.cartData,data.name,data)
            //增加个数
            Vue.set(state.cartData[data.name],"num",1)
            
        }
        
    }
  }
});
// //当关闭浏览器时 保存数据
// window.onbeforeunload = function () {
//     window.localStorage.setItem("cartData",JSON.stringify(store.state.cartData))
// }

export default store;