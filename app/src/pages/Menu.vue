<template>
  <div>
    <div class="others">
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in showMSg.bannerlunbo" :key="item.index">
          <img :src="item.imgsrc" alt style="width:100%" />
        </el-carousel-item>
      </el-carousel>
      <div class="othersImgWrap">
        <nav class="othersTitle">
          <li v-for="item in showMSg.sors" :key="item.index">
            <img :src="item.imgsrc" alt />
            <span>{{item.otitle}}</span>
          </li>
        </nav>
        <div class="listWrap" v-for="(item,idx) in showMSg.list" :key="idx">
          <div class="oTitle1">
            <h2>{{item.otitle}}</h2>
            <span>高品质 低价位</span>
          </div>
          <div class="otherImg">
            <figure v-for="(msg,idx) in item.goodslist" :key="idx">
              <img :src="msg.imgsrc" alt />
              <figcaption>
                <p>{{msg.mtitle}}</p>
                <p>{{msg.pay}}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/base.css";
// import {local} from '../Api'
export default {
  props: ["showMSg"],

  data() {
    return {
    };
  },
  watch: {

  },
  methods: {
    
  },
  created() {
    
    
  }
};
</script>
<style lang="scss">
// @import "../css/base.css";
@function vw($px) {
  @return ($px / 750) * 100vw;
}
body {
  display: flex;
  flex-direction: column;
}
img {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  overflow-y: scroll;
}
html,
body {
  overflow: scroll;
  min-height: 101%;
}
html {
  overflow: -moz-scrollbars-vertical;
}

.others {
  width: 100%;
  height: 100%;
  overflow: scroll;
  flex: 1;
  .el-carousel {
    height: vw(360) !important;
    .el-carousel__item {
      height: vw(360) !important;
    }
    .el-carousel__button {
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background-color: #b2b2b2;
    }
    .is-active .el-carousel__button {
      opacity: 0.5;
    }
    .el-carousel__container {
      height: vw(360) !important;
    }
  }
  .othersImgWrap {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    .othersTitle {
      width: 100%;
      height: vw(228);
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-top: vw(25);
      padding-bottom: vw(15);
      li {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 25%;
        img {
          width: vw(130);
        }
        span {
          font-size: 14px;
        }
      }
    }
    .oTitle1 {
      width: 100%;
      height: vw(108);
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-bottom: vw(10);
      h2 {
        display: inline-block;
        font-weight: 600;
        font-size: vw(30);
        color: #323232;
        position: relative;
        &:before {
          content: "";
          display: inline-block;
          position: absolute;
          width: 23px;
          height: 1px;
          background: #323232;
          top: 0;
          bottom: 0;
          margin: auto;
          left: -30px;
        }
        &:after {
          content: "";
          display: inline-block;
          position: absolute;
          width: 23px;
          height: 1px;
          background: #323232;
          top: 0;
          bottom: 0;
          margin: auto;
          right: -30px;
        }
      }
      span {
        font-size: vw(22);
      }
    }
    .otherImg {
      figure {
        margin-bottom: vw(10);
        // margin-top: vw(10);
        img {
          height: vw(376);
        }
        figcaption {
          p:nth-of-type(1) {
            padding-top: vw(16);
            padding-left: vw(20);
            font-size: vw(26);
            font-weight: bold;
          }
          p:nth-of-type(2) {
            padding-top: vw(10);
            padding-left: vw(70);
            color: #55afb5;
            font-size: vw(22);
            position: relative;
          }
          p:nth-of-type(2):before {
            content: "";
            display: inline-block;
            position: absolute;
            width: vw(32);
            height: vw(32);
            // top: vw(5);
            left: vw(20);
            background: url(http://static.quanmingwang.com/mobile/layouts/img/tuijian.png)
              no-repeat;
            background-size: 100%;
          }
        }
      }
    }
  }
}
</style>