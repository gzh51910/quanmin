<template>
  <div>
    <!-- <ul>
      <li v-for="item in menu" :key="item.name" @click="goto(item.path)">
        {{item.text}}
      // <router-link :to="item.path" exact-active-class="active">{{item.text}}</router-link> 
      </li>
    </ul>-->
    <header>
      <div class="server">
        <a href="#">
          <img src="http://static.quanmingwang.com/mobile/public/img/ma_logo.png" alt />
        </a>
        <form action>
          <input type="text" placeholder="请输入关键词" class="inputText" />
          <!-- <button type="submit" class="">搜索</button> -->
        </form>
        <i class="iconfont iconleimupinleifenleileibie"></i>
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#f0f0f0"
        text-color="#323232"
        active-text-color="#e0641a"
        route
      >
        <el-menu-item :index="item.path" v-for="item in menu" :key="item.name">{{item.text}}</el-menu-item>
      </el-menu>
      <!-- <nav>
        <li v-for="(item,idx) in menu" v-bind:class="{active:idx===activeIndex}" v-on:click="changeIndex(idx)" :key="item.text">
                <a href="#">{{item.text}}</a></li>
      </nav>-->
    </header>

    <main>
      <el-carousel trigger="click" height="160px">
        <el-carousel-item v-for="item in banner" :key="item.src">
          <img :src="item.src" alt style="width:100%" />
        </el-carousel-item>
      </el-carousel>
      <nav class="navlist1">
        <li v-for="item in navlist1" :key="item.name">
          <img :src="item.src" alt />
          {{item.name}}
        </li>
      </nav>
      <nav class="navlist2">
        <li v-for="item in navlist2" :key="item.src">
          <img :src="item.src" alt />
        </li>
      </nav>
      <section class="navlist3">
        <div class="rTitle"><img src="http://pic1.quanmingwang.com/t/t_L6q2pDbELU_62324.jpg" alt=""></div>
        <div class="rMain">
          <div class="rMainLeft"><img src="http://pic1.quanmingwang.com/shop/fpO6GPgs9a_20190118_!!96139.jpg" alt=""></div>
          <div class="rMainRight">
            <nav class="rnavlist">
              <li><img src="http://pic1.quanmingwang.com/shop/Z3F2RM5LWZ_20180416_!!13036.jpg" alt=""></li>
              <li><img src="http://pic1.quanmingwang.com/shop/VsLFQRgbmf_20180608_!!25108.jpg" alt=""></li>
              <li><img src="http://pic1.quanmingwang.com/shop/MuF4Csag5M_20180416_!!84842.jpg" alt=""></li>
            </nav>
          </div>
        </div>
      </section>
      <section class="navlist3">
        <div class="rTitle"><img src="http://pic1.quanmingwang.com/t/t_Nb7ikU86VU_38987.jpg" alt=""></div>
        <div class="rMain">
          <div class="rMainLeft"><img src="http://pic1.quanmingwang.com/shop/kumEif3dzX_20190118_!!36415.jpg" alt=""></div>
          <div class="rMainRight">
            <nav class="rnavlist">
              <li><img src="http://pic1.quanmingwang.com/shop/eDf0gwFPGN_20180608_!!97384.jpg" alt=""></li>
              <li><img src="http://pic1.quanmingwang.com/shop/27HgQeFemr_20180416_!!50930.jpg" alt=""></li>
              <li><img src="http://pic1.quanmingwang.com/shop/ZdEluvTCnH_20180416_!!67407.jpg" alt=""></li>
            </nav>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#f0f0f0"
        text-color="#323232"
        active-text-color="#d22817"
        router
      >
        <el-menu-item :index="item.path" v-for="item in footernav" :key="item.name">
          <i :class="item.icon"></i>
          {{item.text}}
        </el-menu-item>
      </el-menu>
      <!-- <p>
        <i class="iconfont iconshouye"></i>首页
      </p>
      <p>
        <i class="iconfont iconleimupinleifenleileibie"></i>分类
      </p>
      <p>
        <i class="iconfont iconhezuo"></i>商务合作
      </p>
      <p>
        <i class="iconfont icongouwuche"></i>购物车
      </p>
      <p>
        <i class="iconfont iconwode"></i>我的
      </p>-->
    </footer>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      activeIndex: "/home",
      activeIndex2: "/home",
      menu: [
        {
          name: "home",
          path: "/home",
          text: "推荐",
          icon: "el-icon-s-home"
        },
        {
          name: "list",
          path: "/list",
          text: "墙地材料",
          icon: "el-icon-menu"
        },
        {
          name: "cart",
          path: "/cart",
          text: "卫浴用品",
          icon: "el-icon-shopping-cart-2"
        },
        {
          name: "mine",
          path: "/mine",
          text: "灯饰照明",
          icon: "el-icon-s-custom"
        },
        {
          name: "mine",
          path: "/mine",
          text: "厨房用品",
          icon: "el-icon-s-custom"
        },
        {
          name: "mine",
          path: "/mine",
          text: "门/配件/五金",
          icon: "el-icon-s-custom"
        },
        {
          name: "mine",
          path: "/mine",
          text: "客厅",
          icon: "el-icon-s-custom"
        },
        {
          name: "mine",
          path: "/mine",
          text: "卧室",
          icon: "el-icon-s-custom"
        },
        {
          name: "mine",
          path: "/mine",
          text: "餐厅",
          icon: "el-icon-s-custom"
        },
        {
          name: "mine",
          path: "/mine",
          text: "书房",
          icon: "el-icon-s-custom"
        },
        {
          name: "mine",
          path: "/mine",
          text: "儿童房",
          icon: "el-icon-s-custom"
        },
        {
          name: "mine",
          path: "/mine",
          text: "红木馆",
          icon: "el-icon-s-custom"
        }
      ],
      banner: [
        {
          src:
            "http://pic1.quanmingwang.com/shop/6ioVbuBQTO_20190930_!!45918.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/BPZ7ynVI1a_20190430_!!77958.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/d8gfpgq7fL_20190226_!!43511.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/lLHQatwmje_20190226_!!57103.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/odxlQklEXW_20190226_!!63566.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/D7KxFAQD53_20190117_!!91827.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/hf5BYlpLjK_20181221_!!67782.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/FrlNaxvlxp_20190226_!!69310.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/t1oLTx34rP_20181115_!!53677.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/GHJ9Rrh5nY_20190227_!!29512.jpg"
        }
      ],
      navlist1: [
        {
          name: "分类",
          src: "http://static.quanmingwang.com/mobile/index/images/ten1.png"
        },
        {
          name: "客厅",
          src: "http://static.quanmingwang.com/mobile/index/images/ten2.png"
        },
        {
          name: "卧室",
          src: "http://static.quanmingwang.com/mobile/index/images/ten3.png"
        },
        {
          name: "餐厅",
          src: "http://static.quanmingwang.com/mobile/index/images/ten4.png"
        },
        {
          name: "儿童房",
          src: "http://static.quanmingwang.com/mobile/index/images/ten5.png"
        },
        {
          name: "体验店",
          src: "http://static.quanmingwang.com/mobile/index/images/ten6.png"
        },
        {
          name: "全屋定制",
          src: "http://static.quanmingwang.com/mobile/index/images/ten7.png"
        },
        {
          name: "红木家具",
          src: "http://static.quanmingwang.com/mobile/index/images/ten8.png"
        },
        {
          name: "个人中心",
          src: "http://static.quanmingwang.com/mobile/index/images/ten9.png"
        },
        {
          name: "购物车",
          src: "http://static.quanmingwang.com/mobile/index/images/ten10.png"
        }
      ],
      navlist2: [
        {
          src:
            "http://pic1.quanmingwang.com/shop/DJ54V7Ajbv_20180329_!!85699.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/s8nkNzU0Mc_20180329_!!89315.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/9VqPNQhbvk_20180329_!!79269.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/1OHyOqaKg3_20180329_!!76066.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/3rpwFyMngd_20180416_!!10252.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/iDh9o4H5GX_20180329_!!65102.jpg"
        }
      ],
      footernav: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon: "iconfont iconshouye"
        },
        {
          name: "sort",
          path: "/sort",
          text: "分类",
          icon: "iconfont iconleimupinleifenleileibie"
        },
        {
          name: "hezuo",
          path: "/hezuo",
          text: "商务合作",
          icon: "iconfont iconhezuo"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon: "iconfont icongouwuche"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的",
          icon: "iconfont iconwode"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "../iconfont/iconfont.css";
@import "../css/base.css";
@function vw($px) {
  @return ($px / 750) * 100vw;
}
body {
  display: flex;
  flex-direction: column;
}
* {
  margin: 0;
  padding: 0;
}
header,
main,
footer {
  min-width: 320px;
  max-width: 750px;
  margin: 0 auto;
}
header {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0;
  color: #eee;
  text-align: center;
  background: #d62b17;
  .server {
    display: flex;
    width: 100%;
    white-space: nowrap;
    height: vw(90);
    padding: vw(7);
    overflow: hidden;
    z-index: 66;
    justify-content: space-around;
    align-items: center;
    a {
      height: 100%;
      text-decoration: none;
      img {
        display: block;
        border: 0;
        height: 100%;
      }
    }
    .inputText {
      width: vw(464);
      height: vw(54);
      border-radius: vw(24);
      border: 0;
      text-align: center;
    }
  }
  ul {
    width: 100%;
    height: vw(82);
    // justify-content: space-around;
    // align-items: center;
    overflow: auto;
    display: flex;
    li {
      line-height: vw(82) !important;
      min-width: vw(148);
      flex-shrink: 0;
    }
  }
  ul::-webkit-scrollbar {
    height: 0;
  }
}

main {
  flex: 1;
  overflow: auto;
  width: 100%;
  margin-top: vw(172);
  margin-bottom: vw(100);
  background-color: #f2f2f2;
  .el-carousel__button {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #b2b2b2;
  }
  .is-active .el-carousel__button {
    opacity: 0.5;
  }
  .navlist1 {
    display: flex;
    width: 100%;
    height: vw(306);
    background-color: #f5f5f5;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    li {
      width: 20%;
      height: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      font-size: vw(24);
      img {
        display: block;
        width: vw(74);
      }
    }
  }
  .navlist2 {
    display: flex;
    width: 100%;
    height: vw(398);
    background-color: #efefef;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    li {
      img {
        display: block;
        width: vw(176.5);
        height: vw(194);
        border-right: 2px solid #e1e1e1;
        border-top: 2px solid #e1e1e1;
      }
      &:nth-of-type(1),
      &:nth-of-type(2) {
        img {
          width: vw(356);
        }
      }
      &:nth-of-type(6){
        img{
          border-right: 0;
        }
      }
    }
  }
  .navlist3{
    width: 100%;
    margin-top: vw(16);
    height: vw(468);
    background-color: #f0f0f0;
    .rTitle{
      img{
        display: block;
        width: 100%;
      }
    }
    .rMain{
      width: vw(714);
      height: vw(358);
      margin: vw(10) auto;
      .rMainLeft{
        width: vw(358);
        height: vw(358);
        float: left;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .rMainRight{
        width: vw(356);
        height: 100%;
        background-color: #e1e1e1;
        float: left;
        nav{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content:flex-end; 
          align-items: flex-end;
          flex-wrap: wrap;
          li{
            width: vw(176);
            height: vw(178);
            img{
              width: 100%;
              height: 100%;
            }
            &:nth-of-type(1){
              width: 100%;
            }
          }
        }
      }
    }
  }
}

footer {
  display: flex;
  height: vw(100);
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  li {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: vw(22);
    color: #4d4d4d;
    i {
      display: block;
      height: vw(46);
    }
  }
}
</style>