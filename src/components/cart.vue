<template>
    <div class="cart-container">
        <el-table :data="cartList" style="width: 100%">
            <el-table-column prop="name" label="名称" width="180">
            </el-table-column>
            <el-table-column prop="url" label="图片" width="250">
                <template slot-scope="prop">
                    <img class="fruitImg" :src="prop.row.url" alt="">
                </template>
            </el-table-column>
            <el-table-column prop="price" label="单价" width="180">
            </el-table-column>
            <el-table-column prop="num" label="数量" width="180">
            </el-table-column>
            <el-table-column label="价格" width="180">
                <template slot-scope="prop">
                    <span>{{Math.floor(prop.row.num*prop.row.price)}}</span>
                </template>
            </el-table-column>  
            <el-table-column label="操作" width="300">
                <template slot-scope="prop">
                    <el-button @click="delOne(prop.row)" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 计算总价 -->
        <p>总价:{{totalPrice}}</p>
        <el-button type="primary" @click="payMoney">提交订单</el-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      cartList: []
    };
  },
  computed: {
      totalPrice(){
          //计算数据的总价格
        let sum= 0;
        //遍历数据 获取数据中的数量以及价格
        this.cartList.forEach(v => {
            sum += v.num * v.price
        });
        return sum;
      }
  },
  methods: {
    //点击删除 将列表中的数据删除掉
    delOne(data) {
      //提示用户是否真的要删除
      this.$confirm("你真的要删除这个商品吗, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
            //删除数据 先获取当你点击数据的下标
            let index = this.cartList.indexOf(data);
            this.cartList.splice(index,1)
            //删除vuex中的数据
            this.$store.commit("removeCart",data)
        })
        .catch(() => {
            this.$message.error("谢谢主人手下留情")
        });
    },
    payMoney(){
        //提交订单则清除购物车 则删除cartlist中的所有数据
        for(var i=this.cartList.length-1;i>=0;i--){
            
        //在删除vuex中的数据
        this.$store.commit("removeCart",this.cartList[i])
            //清除本地中的数据
            this.cartList.splice(i,1)
        }
    }
  },
  //页面打开时，获取数据
  created() {
    let cartData = this.$store.state.cartData;
    for (const key in cartData) {
      this.cartList.push(cartData[key]);
    }
  }
};
</script>
<style>
.fruitImg {
  width: 200px;
}
</style>
