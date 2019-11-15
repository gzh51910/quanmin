<template>
  <div class="serch">
    <el-row type="flex" class="row-bg">
      <el-col :span="4">
        <img src="../img/back.png" @click="backhome" />
      </el-col>
      <el-col :span="37">
        <el-input v-model="input" placeholder="请输入关键词"></el-input>
      </el-col>
      <el-col :span="6">
        <span>搜索</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    backhome() {
      this.$router.push("/Home");
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
.row-bg {
  margin-left: vw(40);
  // position: fixed;
  top: vw(10);
  img {
    width: vw(50);
    height: vw(50);
    line-height: vw(80);
    margin-top: vw(19);
  }
  .el-input {
    line-height: vw(80);
    height: vw(80);
  }
  span {
    font-size: vw(35);
    height: vw(80);
    line-height: vw(80);
    margin-left: vw(10);
  }
}
</style>
