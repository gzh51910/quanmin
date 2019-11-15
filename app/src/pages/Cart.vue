<template>
  <div>
    <div class="cartheader">
      <h1 class="cartitle">购物车</h1>
      <p>
        共
        <span class="num">0</span> 件宝贝
      </p>
      <ul class="stepMent">
        <li class="cur">全部宝贝</li>
        <li class="fenqi">分期宝贝</li>
      </ul>
    </div>
    <section class="cartcontain">
      <img src="../img/emptyCart.png" class="emptycar" />
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
.cartheader {
  .cartitle {
    font-size: vw(40);
    // color: azure;
  }
  p {
    font-size: vw(33);
    float: left;
  }
  .stepMent {
    float: left;
    font-size: vw(28);
    li {
      float: left;
    }
  }
}
.cartcontain {
  width: vw(600);
  height: vw(600);
  .emptycar {
    width: 100%;
    height: 100%;
  }
}
</style>