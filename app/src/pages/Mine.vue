<template>
  <div id="mian-heade">
    <img src="../img/close.png" class="close" @click="imgjump" />

    <h2 style="color: #1a1a1a;" class="quanming">欢迎使用全名网</h2>
    <h4>未注册过的手机号验证后将自动创建账号</h4>

    <div class="root">
      <el-form :model="Register" ref="RegisterForm" label-width="0" class="RegisterForm">
        <el-form-item prop="phone">
          <el-input v-model="Register.phone" placeholder="手机号" class="phonenumber"></el-input>
        </el-form-item>
        <el-form-item prop="验证码" class="code">
          <el-input v-model="Register.sendcode" placeholder="手机验证码"></el-input>
          <el-button
            type="button"
            @click="sendcode"
            :disabled="disabled"
            v-if="disabled==false"
          >获取短信验证码</el-button>
          <el-button
            type="button"
            @click="sendcode"
            :disabled="disabled"
            v-if="disabled==true"
          >{{btntxt}}</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="login-tips">
        登录即表示同意
        <a @click="logintipsa">《全名网用户注册协议》</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      Register: {
        phone: "",
        sendcode: ""
      },
      disabled: false,
      time: 0,
      btntxt: "重新发送"
    };
  },
  methods: {
    //手机验证发送验证码
    sendcode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.Register.phone == "") {
        this.$message({
          message: "手机号不能为空",
          center: true
        });
        return;
      }
      if (!reg.test(this.Register.phone)) {
        this.$message({
          message: "请输入正确的手机号",
          center: true
        });
        return;
      } else {
        console.log(this.Register.phone);
        this.$message({
          message: "发送成功",
          type: "success",
          center: true
        });
        this.time = 60;
        this.disabled = true;
        this.timer();
      }
    },
    //60S倒计时
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },
    imgjump() {
      this.$router.push("/Home");
    },
    logintipsa() {
      this.$router.push("/loginagument");
    }
  }
};
</script>
<style  lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
#mian-heade {
  margin-left: vw(50);
  .quanming {
    margin-top: vw(80);
  }
  > h4 {
    margin-top: vw(20);
    color: #92969c;
  }
  .close {
    width: vw(50);
    height: vw(50);
    position: absolute;
    top: vw(10);
    right: vw(20);
  }

  .root {
    // display: table-cell;
    vertical-align: middle;
    form {
      width: 80%;

      .phonenumber {
        margin-top: vw(100);
      }
      .code {
        .el-input {
          width: 55%;
          border-radius: 0;
          background-color: #fafafa;
          float: left;
          display: inline-block;
        }
        .el-button {
          width: 45%;

          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: 0;
          float: left;
          display: inline-block;
        }
      }
      .el-button--primary {
        margin-top: vw(100);
        width: 100%;
        background-color: #ff8793;
        border-radius: vw(40);
        // opacity: 0.5;
        border: none;

        color: white;
      }
    }
    .login-tips {
      margin-left: vw(50);
      margin-top: vw(500);
      color: #92969c;
      font-size: vw(25);
      a {
        color: #323232;
      }
    }
  }
}
</style>

