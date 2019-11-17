<template>
  <footer>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#f0f0f0"
      text-color="#323232"
      active-text-color="#d22817"
      router
    >
      <!-- 添加购物车图标 -->
      <el-menu-item :index="item.path" v-for="item in footernav" :key="item.name">
        <el-badge :value="cartlength" v-if="item.name=='cart'">
          <i :class="item.icon"></i>
          {{item.text}}
        </el-badge>
        <template v-else>
          <i :class="item.icon"></i>
          {{item.text}}
        </template>
      </el-menu-item>
    </el-menu>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      activeIndex2: "/home",
      footernav: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon: "iconfont iconshouye"
        },
        {
          name: "sort",
          path: "/sort",
          text: "分类",
          icon: "iconfont iconleimupinleifenleileibie"
        },
        {
          name: "hezuo",
          path: "/hezuo",
          text: "商务合作",
          icon: "iconfont iconhezuo"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车"
          // icon: "iconfont icongouwuche"
        },
        {
          name: "login",
          path: "/login",
          text: "我的",
          icon: "iconfont iconwode"
        }
      ]
    };
  },
  computed: {
    cartlength() {
      return this.$store.state.goodslist.length;
    }
  }
};
</script>

<style lang="scss">
@import "../iconfont/iconfont.css";
@import "../css/base.css";
@function vw($px) {
  @return ($px / 750) * 100vw;
}

footer {
  min-width: 320px;
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  height: vw(100);
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  ul {
    width: 100%;
  }
  li {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: vw(22);
    color: #4d4d4d;
    i {
      height: vw(46);
    }
  }
  .el-menu {
    .el-badge {
      margin-top: vw(40);
      .el-badge__content {
        top: vw(30);
      }
    }
  }
}
</style>