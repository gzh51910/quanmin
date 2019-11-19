<template>
  <el-table :data="userList" stripe style="max-width:80vw;margin-bottom:20px">
    <el-table-column prop="id" label="用户id"></el-table-column>
    <el-table-column prop="name" label="用户名称"></el-table-column>
    <el-table-column prop="sex" label="性别"></el-table-column>
    <el-table-column prop="date" label="注册日期"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
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
          sex: "男",
          date: "2010-11-11",
          address: "上海市普陀区金沙江路 1518 弄",
          remarks: "无"
        },
        {
          id: "1160",
          name: "王小虎",
          sex: "男",
          date: "2010-11-11",
          address: "上海市普陀区金沙江路 1518 弄",
          remarks: "无"
        },
        {
          id: "6564",
          name: "王小虎",
          sex: "男",
          date: "2010-11-11",
          address: "上海市普陀区金沙江路 1518 弄",
          remarks: "无"
        },
        {
          id: "9897",
          name: "王小虎",
          sex: "男",
          date: "2010-11-11",
          address: "上海市普陀区金沙江路 1518 弄",
          remarks: "无"
        },
        {
          id: "4556",
          name: "王小虎",
          sex: "男",
          date: "2010-11-11",
          address: "上海市普陀区金沙江路 1518 弄",
          remarks: "无"
        }
      ]
    };
  }
};
</script>

<style>
</style>