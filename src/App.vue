<template>
  <div id="app">
      <h2 class="title">黑马买买买-商城
        <p>
            <router-link to="/index">首页</router-link>
            <router-link to="/cart">购物车<span>({{$store.getters.totalNum}})</span></router-link>
        </p>
      </h2>
      <router-view></router-view>
     
  </div>
</template>

<script>
//导入组件
export default {
  name: 'app',
 
}
</script>

<style>
.title {
  font-size: 50px;
  color: white;
  background-color: hotpink;
  height: 100px;
}
.title p {
  font-size: 20px;
}
.title p a{
  margin-right: 20px;
}

</style>
