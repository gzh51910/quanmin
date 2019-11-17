<template>
  <div>
    <div class="cartheader">
      <h1 class="cartitle">购物车</h1>
      <p class="sumup">
        共
        <span class="num">0</span> 件宝贝
      </p>
      <ul class="stepMent">
        <li class="cur">全部宝贝</li>
        <li class="fenqi">分期宝贝</li>
      </ul>
    </div>
    <!-- 购物列表 -->

    <!-- <section class="cartcontain">
      <img src="../img/emptyCart.png" class="emptycar" />
      <p>您还没有添加宝贝,快去看看吧~</p>
    </section>-->
    <section id="footernav">
      <footernav />
    </section>
  </div>
</template>
<script>
import footernav from "../pages/footernav.vue";
export default {
  components: {
    footernav
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
.cartheader {
  height: vw(150);
  background: #df443b;
  .cartitle {
    margin-left: vw(50);
    color: white;
    line-height: vw(90);
    height: vw(90);
    font-size: vw(35);
    // color: azure;
  }
  .sumup {
    margin-left: vw(50);
    color: white;
    font-size: vw(33);
    float: left;
  }
  .stepMent {
    float: left;
    font-size: vw(28);
    margin-left: vw(200);
    li {
      float: left;
      color: white;
      margin-right: vw(50);
    }
    .cur {
      color: #df443b;
      background: rgba(255, 255, 255, 0.6);
      border-radius: vw(4);
    }
  }
}
.cartcontain {
  margin-top: vw(200);
  margin-left: vw(60);
  width: vw(450);
  height: vw(450);

  .emptycar {
    width: 100%;
    height: 100%;
    margin-left: vw(70);
  }
  p {
    text-align: center;
    margin-left: vw(50);
    font-size: vw(25);
  }
}
</style>