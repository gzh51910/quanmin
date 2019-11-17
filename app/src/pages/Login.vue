<template>
  <div id="mian-heade">
    <img src="../img/close.png" class="close" @click="imgjump" />

    <h2 style="color: #1a1a1a;" class="quanming">欢迎使用全名网</h2>
    <h4>未注册过的手机号验证后将自动创建账号</h4>

    <div class="root">
      <el-form :model="loginForm" ref="loginForm" label-width="0">
        <el-form-item prop="phone">
          <el-input v-model="loginForm.phone" placeholder="手机号" class="phonenumber"></el-input>
        </el-form-item>
        <el-form-item prop="验证码" class="code">
          <el-input v-model="num" placeholder="手机验证码"></el-input>
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
          <el-button type="primary" @click="submitForm('numberValidateForm')">登录</el-button>
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
import { local } from "../Api";

export default {
  name: "loginForm",
  data() {
    return {
      loginForm: {
        phone: "",
        sendcode: ""
      },
      disabled: false,
      time: 0,
      btntxt: "重新发送",
      nums: "",
      num: ""
    };
  },
  methods: {
    // 获取随机数
    getRandonNum() {
      let res = "";
      for (let i = 0; i < 6; i++) {
        let a = parseInt(Math.random() * 10);
        res += a;
      }
      return res;
    },
   //手机验证发送验证码
    sendcode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.loginForm.phone == "") {
        this.$message({
          message: "手机号不能为空",
          center: true
        });
        return;
      }
      if (!reg.test(this.loginForm.phone)) {
        this.$message({
          message: "请输入正确的手机号",
          center: true
        });
        return;
      } else {
        // console.log(this.loginForm.phone);
        this.$message({
          message: "发送成功",
          type: "success",
          center: true
        });
       
        
        this.time = 60;
        this.disabled = true;
        this.timer();
        this.nums = this.getRandonNum();
         console.log(this.nums);
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
    },
    async submitForm() {
      // this.
      if (this.loginForm.phone == "") {
        this.$message({
          message: "手机号不能为空",
          center: true
        });
        return;
      }
      if (this.num === "") {
        this.$message({
          message: "验证码不能为空",
          center: true
        });
        return;
      }
      if (this.nums === this.num) {
        console.log("ok");
        let username = this.loginForm.phone;
        window.console.log(username);
        let result = await local.post("/login", {
          username
        });
        let { data, headers } = result;
       console.log(headers);
        let message = data.msg;
        this.$message({
          message,
          center: true
        });
        let user = data.data[0];
        
        // 从响应头中获取Authorization
        user.Authorization = headers.authorization;

        this.$store.commit("login", user);
        this.$router.push("/loginsucess");
      } else {
        console.log("no");
      }
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
          display: inline-block;
        }
        .el-button {
          width: 45%;

          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: 0;
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

