<template>
  <div id="deng">
    <section class="topbar">
      <div class="manhead">
        <div class="man">
          <img src="../img/default_avatar.png" class="pepole" />
        </div>
        <div class="manmsg">
          <p class="msgnum">{{userName}}</p>
          <p class="shangcheng">
            <i class="el-icon-sunny"></i>
            <span class="yiti">全民家具建材一体商城</span>
          </p>
        </div>
      </div>

      <div class="second">
        <el-row :gutter="12">
          <el-col :span="4.2" v-for="ele in toplist" :key="ele.title">
            <div class="grid-content bg-purple">
              <i :class="ele.i" style=" color:red;"></i>
              <p class="ff">{{ele.title}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
    <div class="third">
      <div>
        <el-row class="fenqi">
          <el-col :span="24" v-for="item in mylist" :key="item.title">
            <div class="grid-content bg-purple-dark">
              <i :class="item.i" style="color:black"></i>
              {{item.title}}
            </div>
          </el-col>
        </el-row>
      </div>
      <el-button round @click="loginout">
        <span>退出当前账户</span>
      </el-button>
    </div>
    <section id="footernav">
      <footernav />
    </section>
  </div>
</template>
<script>
import footernav from "../pages/footernav.vue";
export default {
  data(){
    return{
        userName:"",
        mylist:[
          {
            title:'我的分期审核',
            i:'el-icon-tickets'
          },
          {
            title:'我的贷款',
            i:'el-icon-brush'
          },
          {
            title:'收货地址',
            i:'el-icon-location-information'
          },{
            title:'账号安全',
            i:'el-icon-lock'
          }
          ,{
            title:'分店管理',
            i:'el-icon-potato-strips'
          }
        ],
        toplist:[
          {
            title:"待付款",
            i:"el-icon-goods"
          },
         {
            title:"待收货",
            i:"el-icon-suitcase-1"
          }, {
            title:"待评价",
            i:"el-icon-chat-dot-square"
          }, {
            title:"退货/售后",
            i:"el-icon-coin"
          }, {
            title:"全部订单",
            i:"el-icon-bank-card"
          },
        ]
    }
  },
  components: {
    footernav
  },
  methods: {
   
    loginout() {
      this.$router.push("/Login");
       this.$store.commit("logout");
    }
  },created(){
    let $store = this.$router.app.$store
    this.userName=$store.state.common.user.username
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}

.manhead {
  width: 100%;
  height: vw(400);
  background: url(../img/bg-content.png);
  .man {
    width: vw(200);
    height: vw(200);
    margin: vw(45);
    float: left;
    .pepole {
      width: vw(200);
      height: vw(200);
      border-radius: 50%;
    }
  }
  .manmsg {
    margin-top: vw(70);
    height: vw(100);
    color: white;
    float: left;
    .msgnum {
      font-weight: 1000;
      font-size: vw(40);
    }
    .shangcheng {
      i {
        margin-right: vw(20);
        font-size: vw(70);
      }
    }
  }
}
.topbar {
  position: relative;
  width: 100%;
}
.second {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 2;
  position: absolute;
  bottom: -30%;
  left: 50%;
  height: vw(200);
  width: 86.6%;
  border-radius: vw(20);
  margin-left: -43.3%;
  background: white;
  overflow: hidden;
  i {
    // margin-left: vw(23);
    // text-align: center;
    font-size: vw(70);
  }
  .el-col {
    align-self: center;
    margin-top: vw(46);
  }
}
.secondbox {
  position: relative;
}
.third {
  position: absolute;
  display: flex;
  width: 100%;

  height: 70%;
  background: #f5f5f5;
  .fenqi {
    position: absolute;
    top: vw(170);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: vw(10);
    background: white;
    height: vw(400);
    margin-left: vw(80);
    width: 80%;
  }
  i {
    color: #0000;
    font-size: vw(40);
  }
  .el-button {
    text-align: center;
    margin-left: vw(40);
    width: 80%;
    background: #f5f5f5;
    border: 1px solid red;
    color: red;
    display: flex;
    position: absolute;
    top: vw(650);
    left: vw(30);
    span {
      margin: auto;
    }
  }
}
</style>