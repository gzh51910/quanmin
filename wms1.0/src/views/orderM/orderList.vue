<template>
  <el-table :data="userList" stripe style="max-width:80vw;margin-bottom:20px">
    <el-table-column prop="id" label="商品编号"></el-table-column>
    <el-table-column prop="name" label="商品名称"></el-table-column>
    <el-table-column prop="price" label="单价"></el-table-column>
    <el-table-column prop="quantity" label="数量"></el-table-column>
    <el-table-column prop="date" label="订单日期"></el-table-column>
    <el-table-column prop="remarks" label="备注"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      userList: [
        {
          id: "9527",
          name: "王小虎",
          price: "男",
          quantity: "男",
          date: "2010-11-11",
          remarks: "无"
        }
      ]
    };
  }
};
</script>

<style>
</style>