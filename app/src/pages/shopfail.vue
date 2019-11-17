<template>
  <div id="ss">
    <section id="shopselect">
      <shopselect />
    </section>
    <div class="aa">
      <img src="../img/mescroll-empty.png" class="bigeyes" />
      <p>亲,没有您要找的商品~</p>
    </div>
  </div>
</template>
<script>
import shopselect from "../pages/shopselect.vue";
export default {
  components: {
    shopselect
  },
  methods: {}
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
#ss {
  width: 100%;

  .aa {
    width: 100%;
    height: vw(1130);
    background: #f2f2f2;

    .bigeyes {
      width: vw(400);
      height: vw(400);
      margin-left: vw(160);
      margin-top: vw(80);
    }
    p {
      text-align: center;
    }
  }
}
</style>