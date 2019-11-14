<template>
  <div class="work">
    <div class="worktop">
      <img src="../img/back.png" class="workback" @click="workbackjump" />
      <span>商务合作</span>
    </div>

    <img src="../img/join1.png" class="join" />
    <img src="../img/join2.png" class="join" />
    <img src="../img/join3.png" class="join" />
    <img src="../img/join4.png" class="join" />
    <img src="../img/join5.png" class="join" />
    <img src="../img/join6.png" class="join" />
    <img src="../img/join7.png" class="join" />
    <img src="../img/join8.png" class="join" />
    <img src="../img/join9.png" class="join" />
    <img src="../img/join10.png" class="join" />
    <section>
      <img src="../img/telephone.png" alt class="telephone" />
      <el-button type="primary" @click="submitForm">立即入驻</el-button>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    workbackjump() {
      this.$router.push("/Home");
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
.work {
  .worktop {
    height: vw(80);
    border-bottom: 1px solid red;
    .workback {
      float: left;
      width: vw(50);
      height: vw(50);
      line-height: vw(80);
      margin-top: vw(19);
    }
    span {
      float: left;
      text-align: center;
      height: vw(80);
      line-height: vw(80);
      margin-left: vw(260);
    }
  }

  .join {
    width: 100%;
  }
  section {
    width: 100%;
    height: vw(100);
    position: fixed;
    background: #eee;
    bottom: 0;
    .telephone {
      margin-top: vw(20);
      float: left;
      width: vw(60);
      height: vw(60);
      margin-left: vw(40);
    }
    .el-button {
      float: left;
      margin-top: vw(10);
      margin-left: vw(60);
      width: vw(560);
      background-color: #ff3250;
      border-radius: vw(40);
      font-size: vw(35);
      font-weight: bold;
      border: none;
      color: white;
    }
  }
}
</style>