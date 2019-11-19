<template>
  <div>
    <!-- 侧边栏 -->
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      :collapse="isCollapse"
      router
    >
      <!-- 开关按钮 -->
      <el-menu-item @click="changeMenu">
        <i class="el-icon-s-unfold"></i>
      </el-menu-item>

      <el-menu-item index="1" route="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span slot="title">商品管理</span>
        </template>
        <el-menu-item index="2-1" route="/goodsList">
          <i class="el-icon-collection"></i>
          商品列表
        </el-menu-item>
        <el-menu-item index="2-2" route="/goodsSort">
          <i class="el-icon-menu"></i>
          商品分类
        </el-menu-item>
        <el-menu-item index="2-3" route="/goodsAdd">
          <i class="el-icon-document-add"></i>
          添加商品
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item index="3-1" route="/userList">
          <i class="el-icon-user"></i>
          用户列表
        </el-menu-item>
        <el-menu-item index="3-2" route="/userAdd">
          <i class="el-icon-circle-plus-outline"></i>
          添加用户
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">订单管理</span>
        </template>
        <el-menu-item index="4-1" route="/orderList">
          <i class="el-icon-shopping-cart-full"></i>
          订单列表
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    changeMenu() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 600px;
}
</style>