<template>
  <div>
    <div v-show="num==0" class="Recommend">
      <section class="bannerWrap">
        <el-carousel trigger="click">
          <el-carousel-item v-for="item in banner" :key="item.src">
            <img :src="item.src" alt style="width:100%" />
          </el-carousel-item>
        </el-carousel>
      </section>
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
        <div class="rTitle">
          <img src="http://pic1.quanmingwang.com/t/t_L6q2pDbELU_62324.jpg" alt />
        </div>
        <div class="rMain">
          <div class="rMainLeft">
            <img src="http://pic1.quanmingwang.com/shop/fpO6GPgs9a_20190118_!!96139.jpg" alt />
          </div>
          <div class="rMainRight">
            <nav class="rnavlist">
              <li>
                <img src="http://pic1.quanmingwang.com/shop/Z3F2RM5LWZ_20180416_!!13036.jpg" alt />
              </li>
              <li>
                <img src="http://pic1.quanmingwang.com/shop/VsLFQRgbmf_20180608_!!25108.jpg" alt />
              </li>
              <li>
                <img src="http://pic1.quanmingwang.com/shop/MuF4Csag5M_20180416_!!84842.jpg" alt />
              </li>
            </nav>
          </div>
        </div>
      </section>
      <section class="navlist3">
        <div class="rTitle">
          <img src="http://pic1.quanmingwang.com/t/t_Nb7ikU86VU_38987.jpg" alt />
        </div>
        <div class="rMain">
          <div class="rMainLeft">
            <img src="http://pic1.quanmingwang.com/shop/kumEif3dzX_20190118_!!36415.jpg" alt />
          </div>
          <div class="rMainRight">
            <nav class="rnavlist">
              <li>
                <img src="http://pic1.quanmingwang.com/shop/eDf0gwFPGN_20180608_!!97384.jpg" alt />
              </li>
              <li>
                <img src="http://pic1.quanmingwang.com/shop/27HgQeFemr_20180416_!!50930.jpg" alt />
              </li>
              <li>
                <img src="http://pic1.quanmingwang.com/shop/ZdEluvTCnH_20180416_!!67407.jpg" alt />
              </li>
            </nav>
          </div>
        </div>
      </section>
      <section class="navlist4">
        <div class="nav4title1">
          <img src="http://pic1.quanmingwang.com/t/t_cSyhaBkGJ9_85689.png" alt />
        </div>
        <!-- 新中式 -->
        <div class="nav4title2">
          <img src="http://pic1.quanmingwang.com/shop/1evY6TQGQB_20190126_!!43996.jpg" alt />
        </div>
        <el-row>
          <el-col :span="12" v-for="o in 4" :key="o" :offset="0">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="http://pic1.quanmingwang.com/vr/vr_AWo98wLahs_20180920_!!70733.jpg"
                class="image"
              />
              <div style="padding: 14px;">
                <span>新经典时尚中式</span>
                <div class="bottom clearfix">
                  <p class="nav4desc">全套新中式家具、建材，宁静安逸新生活</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 美式 -->
        <div class="nav4title2">
          <img src="http://pic1.quanmingwang.com/shop/t1h6Ru7qSa_20190126_!!97159.jpg" alt />
        </div>
        <el-row>
          <el-col :span="12" v-for="o in 4" :key="o" :offset="0">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="http://pic1.quanmingwang.com/vr/vr_AWo98wLahs_20180920_!!70733.jpg"
                class="image"
              />
              <div style="padding: 14px;">
                <span>新经典时尚中式</span>
                <div class="bottom clearfix">
                  <p class="nav4desc">全套新中式家具、建材，宁静安逸新生活</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 欧式 -->
        <div class="nav4title2">
          <img src="http://pic1.quanmingwang.com/shop/KED5KQsg4H_20190126_!!87034.jpg" alt />
        </div>
        <el-row>
          <el-col :span="12" v-for="o in 4" :key="o" :offset="0">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="http://pic1.quanmingwang.com/vr/vr_AWo98wLahs_20180920_!!70733.jpg"
                class="image"
              />
              <div style="padding: 14px;">
                <span>新经典时尚中式</span>
                <div class="bottom clearfix">
                  <p class="nav4desc">全套新中式家具、建材，宁静安逸新生活</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 热卖单品 -->
        <div class="hotgoods">
          <div class="lunbo">
            <div class="lunboImgWrap" :style="lunboShow">
              <div class="lunboImg" v-for="(item,index) in lunboList" :key="index">
                <img :src="item" alt />
                <!-- <img src="http://pic1.quanmingwang.com/shop/snINFwEgIo_20180609_!!87493.jpg" alt /> -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="navlist4">
        <div class="nav4title1">
          <img src="http://pic1.quanmingwang.com/t/t_cSyhaBkGJ9_85689.png" alt />
        </div>
        <!-- 新中式 -->
        <div class="nav4title2">
          <img src="http://pic1.quanmingwang.com/shop/1evY6TQGQB_20190126_!!43996.jpg" alt />
        </div>
        <el-row>
          <el-col :span="12" v-for="o in 4" :key="o" :offset="0">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="http://pic1.quanmingwang.com/vr/vr_AWo98wLahs_20180920_!!70733.jpg"
                class="image"
              />
              <div style="padding: 14px;">
                <span>新经典时尚中式</span>
                <div class="bottom clearfix">
                  <p class="nav4desc">全套新中式家具、建材，宁静安逸新生活</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 美式 -->
        <div class="nav4title2">
          <img src="http://pic1.quanmingwang.com/shop/t1h6Ru7qSa_20190126_!!97159.jpg" alt />
        </div>
        <el-row>
          <el-col :span="12" v-for="o in 4" :key="o" :offset="0">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="http://pic1.quanmingwang.com/vr/vr_AWo98wLahs_20180920_!!70733.jpg"
                class="image"
              />
              <div style="padding: 14px;">
                <span>新经典时尚中式</span>
                <div class="bottom clearfix">
                  <p class="nav4desc">全套新中式家具、建材，宁静安逸新生活</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 欧式 -->
        <div class="nav4title2">
          <img src="http://pic1.quanmingwang.com/shop/KED5KQsg4H_20190126_!!87034.jpg" alt />
        </div>
        <el-row>
          <el-col :span="12" v-for="o in 4" :key="o" :offset="0">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="http://pic1.quanmingwang.com/vr/vr_AWo98wLahs_20180920_!!70733.jpg"
                class="image"
              />
              <div style="padding: 14px;">
                <span>新经典时尚中式</span>
                <div class="bottom clearfix">
                  <p class="nav4desc">全套新中式家具、建材，宁静安逸新生活</p>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </section>
      <section class="menu2" lazy>
        <el-menu
          :default-active="activeIndex3"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#f0f0f0"
          text-color="#323232"
          active-text-color="##d42d25"
          :style="menu2Style"
        >
          <el-menu-item
            :index="item.index"
            v-for="(item,idx) in menu2"
            :key="item.text"
            @click="menu2List(idx)"
          >
            <span>{{item.text}}</span>
          </el-menu-item>
        </el-menu>
        <section class="menu2List">
          <el-row>
            <el-col :span="24" v-for="o in 11" :key="o" :offset="0">
              <el-card :body-style="{ padding: '14px'}">
                <img
                  src="http://pic1.quanmingwang.com/meal/meal_x2tvWvAmjA_20190426_!!90783.jpg"
                  class="image"
                />
                <div class="menu2LiDesc">
                  <span>现代简约XDJY-YX-1</span>
                  <span>
                    关注
                    <i>80</i>人
                  </span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </section>
      </section>
    </div>
    <div v-show="num!=0" class="others">
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in oBanner" :key="item.src">
          <img :src="item.src" alt style="width:100%" />
        </el-carousel-item>
      </el-carousel>
      <div class="othersImgWrap">
        <nav class="othersTitle">
          <li>
            <img src="http://pic.quanmingwang.com/shop/icon/RW0S32WMDs_20180328_!!81820.png" alt="">
            <span>瓷砖</span>
          </li>
          <li>
            <img src="http://pic.quanmingwang.com/shop/icon/rvuaQNo3Tb_20180328_!!86356.png" alt="">
            <span>地板</span>
          </li>
          <li>
            <img src="http://pic.quanmingwang.com/shop/icon/Hv2kWCbM9s_20180328_!!65015.png" alt="">
            <span>壁纸</span>
          </li>
          <li>
            <img src="http://pic.quanmingwang.com/shop/icon/gePNDbQUq2_20180328_!!13389.png" alt="">
            <span>墙布</span>
          </li>
        </nav>
        <div class="oTitle1">
          <h2>品质瓷砖</h2>
          <span>高品质 低价位</span>
        </div>
        <div class="otherImg">
          <figure>
            <img src="http://pic1.quanmingwang.com/shop/Zp84DJj6ib_20180611_!!74077.jpg" alt="">
            <figcaption>
              <p>精工品质 全球信赖</p>
              <p>品质生活美学 匠于心 精于艺</p>
            </figcaption>
          </figure>
          <figure>
            <img src="http://pic1.quanmingwang.com/shop/Zp84DJj6ib_20180611_!!74077.jpg" alt="">
            <figcaption>
              <p>精工品质 全球信赖</p>
              <p>品质生活美学 匠于心 精于艺</p>
            </figcaption>
          </figure>
          <figure>
            <img src="http://pic1.quanmingwang.com/shop/Zp84DJj6ib_20180611_!!74077.jpg" alt="">
            <figcaption>
              <p>精工品质 全球信赖</p>
              <p>品质生活美学 匠于心 精于艺</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/base.css";
export default {
  props: ["num"],
  data() {
    return {
      activeIndex3: "1",
      mark: 0,
      lunboShow: {
        // transform: translateX(0)
        left: 0
      },
      menu2Style: {
        position: "relative",
        top: 0
      },
      menu2: [
        {
          index: "1",
          text: "现代"
        },
        {
          index: "2",
          text: "中式"
        },
        {
          index: "3",
          text: "欧式"
        },
        {
          index: "4",
          text: "美式"
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
      lunboList: [
        "http://pic1.quanmingwang.com/shop/snINFwEgIo_20180609_!!87493.jpg",
        "http://pic1.quanmingwang.com/shop/fUCVIrrlrY_20180609_!!55691.jpg",
        "http://pic1.quanmingwang.com/shop/VLvxasIRbl_20180609_!!60844.jpg",
        "http://pic1.quanmingwang.com/shop/cZlRDl3P3Y_20190212_!!83184.jpg",
        "http://pic1.quanmingwang.com/shop/snINFwEgIo_20180609_!!87493.jpg",
        "http://pic1.quanmingwang.com/shop/fUCVIrrlrY_20180609_!!55691.jpg",
        "http://pic1.quanmingwang.com/shop/VLvxasIRbl_20180609_!!60844.jpg",
        "http://pic1.quanmingwang.com/shop/cZlRDl3P3Y_20190212_!!83184.jpg"
      ],
      oBanner: [
        {
          src:
            "http://pic1.quanmingwang.com/shop/aQYup3btEZ_20180410_!!72540.png"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/xHAaMqQGyO_20180409_!!35090.png"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/AxzTim5wss_20180611_!!40083.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/MfNzExFxWR_20180409_!!72319.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/OqAKdhdr95_20180409_!!68227.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/HYbUtg2hoR_20180409_!!77346.png"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/mcspwPbgtq_20180611_!!72952.jpg"
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/0YVPalliyJ_20180611_!!37965.jpg"
        }
      ]
    };
  },
  methods: {
    autPlay() {
      this.mark++;
      if (this.mark === 5) {
        this.mark = 0;
      }
      let num = this.mark * 114;
      this.lunboShow.left = "-" + num + "px";
    },
    play() {
      setInterval(this.autPlay, 3000);
    },
    menu2List(idx) {
      let s = 3700;
      if (idx == 1) {
        s = 3938;
      } else if (idx == 2) {
        s = 4407;
      } else if (idx == 3) {
        s = 5112;
      }
      document.body.scrollTop = s;
    },
    handleScroll(e) {
      var scrollY =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollY); //3700 3938  4407  5112
      if (scrollY >= 3700) {
        this.menu2Style.position = "fixed";
        this.menu2Style.top = "45px";
      } else {
        this.menu2Style.position = "relative";
        this.menu2Style.top = "0";
      }
    }
  },
   async created() {
    this.play();
    let {data} = await this.$axios.get("http://10.3.136.139:1910");
    console.log(data);
    
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
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
.Recommend {
  .bannerWrap {
    .el-carousel {
      height: vw(252) !important;
    }
    .el-carousel__item {
      height: vw(252) !important;
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
      height: vw(252) !important;
    }
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
        height: vw(74);
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
      &:nth-of-type(6) {
        img {
          border-right: 0;
        }
      }
    }
  }
  .navlist3 {
    width: 100%;
    margin-top: vw(16);
    height: vw(468);
    background-color: #f0f0f0;
    .rTitle {
      img {
        display: block;
        width: 100%;
      }
    }
    .rMain {
      width: vw(714);
      height: vw(358);
      margin: vw(10) auto;
      .rMainLeft {
        width: vw(358);
        height: vw(358);
        float: left;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .rMainRight {
        width: vw(356);
        height: 100%;
        background-color: #e1e1e1;
        float: left;
        nav {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          flex-wrap: wrap;
          li {
            width: vw(176);
            height: vw(178);
            img {
              width: 100%;
              height: 100%;
            }
            &:nth-of-type(1) {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .navlist4 {
    width: vw(714);
    height: 100%;
    background-color: #f0f0f0;
    margin: 0 auto;
    .nav4title1 {
      width: 100%;
      height: vw(130);
    }
    .nav4title2 {
      width: 100%;
      height: vw(50);
    }
    .el-card {
      width: vw(348.5);
      margin-top: vw(18);
    }
    .el-card__body {
      span {
        font-size: 14px;
        color: #e8ac44;
      }
      .nav4desc {
        display: block;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #979797;
      }
    }
    .el-row {
      margin-bottom: vw(18);
    }
    .hotgoods {
      margin-top: vw(15);
      padding-top: vw(82);
      width: 100%;
      height: vw(272);
      background-image: url(http://pic1.quanmingwang.com/t/t_B1b73ZVwgN_21952.png);
      background-size: 100% auto;
      .lunbo {
        width: vw(680);
        height: vw(170);
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        .lunboImgWrap {
          width: vw(2760);
          height: vw(170);
          position: absolute;
          top: 0;
          left: 0;
          transition: 0.5s;
        }
        .lunboImg {
          width: vw(220);
          margin-right: vw(10);
          float: left;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  .menu2 {
    ul {
      width: 100% !important;
      height: vw(80) !important;
      position: relative;
      left: 0;
      right: 0;
      z-index: 99;
      li {
        width: 25%;
        height: vw(80) !important;
        span {
          display: block;
          line-height: vw(77);
          width: vw(60);
          margin: 0 auto;
        }
      }
      .is-active {
        font-weight: 700;
        border: 0 !important;
        span {
          border-bottom: 3px solid #d42d25;
        }
      }
    }
    .menu2List {
      width: vw(714);
      margin: 0 auto;
      background-color: #f2f2f2;
      .menu2LiDesc {
        height: vw(60);
        line-height: vw(90);
        width: 100%;
        span {
          font-size: vw(28);
          color: #323232;
          &:nth-of-type(1) {
            font-weight: 700;
          }
          &:nth-of-type(2) {
            display: block;
            float: right;
            i {
              color: #d42d25;
            }
          }
        }
      }
      .el-col {
        margin-bottom: vw(18);
      }
    }
  }
}
.others {
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
  .othersImgWrap{
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    .othersTitle{
      width: 100%;
      height: vw(228);
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-top: vw(25);
      padding-bottom: vw(15);
      li{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 25%;
        img{
          width: vw(130);
        }
        span{
          font-size: 14px;
        }
      }
    }
    .oTitle1{
      width: 100%;
      height: vw(108);
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-bottom: vw(10);
      h2{
        display: inline-block;
        font-weight: 600;
        font-size: vw(30);
        color: #323232;
        position: relative;
        &:before{
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
        &:after{
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
      span{
        font-size: vw(22);
      }
    }
    .otherImg{
      figure{
        margin-bottom: vw(10);
        // margin-top: vw(10);
        img{
          height: vw(376);
        }
        figcaption{
          p:nth-of-type(1){
            padding-top: vw(16);
            padding-left: vw(20);
            font-size: vw(26);
            font-weight: bold;
          }
          p:nth-of-type(2){
            padding-top: vw(10);
            padding-left: vw(70);
            color: #55afb5;
            font-size: vw(22);
            position: relative;
          }
          p:nth-of-type(2):before{
            content: "";
            display: inline-block;
            position: absolute;
            width: vw(32);
            height: vw(32);
            // top: vw(5);
            left: vw(20);
            background: url(http://static.quanmingwang.com/mobile/layouts/img/tuijian.png) no-repeat;
            background-size: 100%;
          }
        }
      }
    }
  }
}
</style>