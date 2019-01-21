<template>
    <div class="cart-container">
        <el-table
            :data="cartList"
            style="width: 100%">
            <el-table-column
            label="日期"
            width="180">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            cartList:[]
        }
    },
    //页面打开时，生成数据
}
</script>
<style>

</style>
