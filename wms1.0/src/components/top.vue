<template>
  <div
    style="display:flex;justify-content:space-between;border-bottom: 1px solid #C0C4CC;margin-bottom:10px"
  >
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top:10px">
      <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="text" style="padding-right:20px;font-size:20px" @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>