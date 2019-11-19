<template>
  <div class="container">
    <div class="content">
      <el-card class="box-card">
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input prefix-icon="el-icon-user" v-model="form.tel" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              prefix-icon="el-icon-lock"
              type="password"
              v-model="form.psw"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" style="width:100%">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { tel: "", psw: "" }
    };
  },
  methods: {
    onSubmit() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #409eff, #fff);
  opacity: 0;
  animation: change 0.5s 0.2s forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 400px;
    // height: 300px;
    background: #fff;
  }
}
@keyframes change {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>