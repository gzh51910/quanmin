<template>
  <div>
    <div v-show="num==0" class="Recommend">
      <section class="bannerWrap">
        <el-carousel trigger="click">
          <el-carousel-item v-for="item in mainbanner" :key="item.index">
            <img :src="item.imgsrc" alt style="width:100%" />
          </el-carousel-item>
        </el-carousel>
      </section>
      <!-- 选择 -->
      <nav class="navlist1">
        <li v-for="item in ten_class" :key="item.index">
          <img :src="item.imgsrc" alt />
          {{item.title}}
        </li>
      </nav>
      <nav class="navlist2">
        <li v-for="item in navlist2" :key="item.src">
          <img :src="item.src" alt />
        </li>
      </nav>
      <!-- 今日推荐 -->
      <section class="navlist3">
        <div class="rTitle">
          <img v-if="todayRecommended.title.imgsrc" :src="todayRecommended.title.imgsrc" alt />
        </div>
        <div class="rMain">
          <div class="rMainLeft">
            <img v-if="todayRecommended.title.imgsrc" :src="todayRecommended.leftPIc.imgsrc" alt />
          </div>
          <div class="rMainRight">
            <nav class="rnavlist">
              <li>
                <img v-if="todayRecommended.title.imgsrc" :src="todayRecommended.rightPicTop.imgsrc" alt />
              </li>
              <li>
                <img v-if="todayRecommended.title.imgsrc" :src="todayRecommended.rightPicDown[0].imgsrc" alt />
              </li>
              <li>
                <img v-if="todayRecommended.title.imgsrc" :src="todayRecommended.rightPicDown[1].imgsrc" alt />
              </li>
            </nav>
          </div>
        </div>
      </section>
      <!-- 新品上市 -->
      <section class="navlist3">
        <div class="rTitle">
          <img :src="newshoppinp.title.imgsrc" alt />
        </div>
        <div class="rMain">
          <div class="rMainLeft">
            <img :src="newshoppinp.leftPIc.imgsrc" alt />
          </div>
          <div class="rMainRight">
            <nav class="rnavlist">
              <li>
                <img :src="newshoppinp.rightPicTop.imgsrc" alt />
              </li>
              <li>
                <img :src="newshoppinp.rightPicDown[0].imgsrc" alt />
              </li>
              <li>
                <img :src="newshoppinp.rightPicDown[1].imgsrc" alt />
              </li>
            </nav>
          </div>
        </div>
      </section>
      <!-- 美家整装 -->
      <section class="navlist4">
        <div class="nav4title1">
          <img :src="equipped.titleSrc" alt />
        </div>
        <!-- 新中式 -->
        <div class="nav4title2">
          <img :src="equipped.Chinese.title.imgsrc" alt />
        </div>
        <div class="equippedWrap">
          <figure v-for="(o,idx) in equipped.Chinese.main" :key="idx">
            <div class="equippedImg"><img :src="o.imgsrc"/></div>
            <figcaption>
              <span>{{o.title}}</span>
              <p class="nav4desc">{{o.desc}}</p>
            </figcaption>
          </figure>
        </div>
        <!-- 美式 -->
        <div class="nav4title2">
          <img :src="equipped.America.title.imgsrc" alt />
        </div>
        <div class="equippedWrap">
          <figure v-for="(o,idx) in equipped.America.main" :key="idx">
            <div class="equippedImg"><img :src="o.imgsrc"/></div>
            <figcaption>
              <span>{{o.title}}</span>
              <p class="nav4desc">{{o.desc}}</p>
            </figcaption>
          </figure>
        </div>
        <!-- 欧式 -->
        <div class="nav4title2">
          <img :src="equipped.Europe.title.imgsrc" alt />
        </div>
        <div class="equippedWrap">
          <figure v-for="(o,idx) in equipped.Europe.main" :key="idx">
            <div class="equippedImg"><img :src="o.imgsrc"/></div>
            <figcaption>
              <span>{{o.title}}</span>
              <p class="nav4desc">{{o.desc}}</p>
            </figcaption>
          </figure>
        </div>
        <!-- 热卖单品 -->
        <div class="hotgoods">
          <div class="lunbo">
            <div class="lunboImgWrap" :style="lunboShow">
              <div class="lunboImg" v-for="item in hotBanner" :key="item.index">
                <img :src="item.imgsrc" alt />
                <!-- <img src="http://pic1.quanmingwang.com/shop/snINFwEgIo_20180609_!!87493.jpg" alt /> -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="navlist4">
        <div class="nav4title1">
          <img :src="equipped.titleSrc" alt />
        </div>
        <!-- 新中式 -->
        <div class="nav4title2">
          <img :src="equipped.Chinese.title.imgsrc" alt />
        </div>
        <div class="equippedWrap">
          <figure v-for="(o,idx) in equipped.Chinese.main" :key="idx">
            <div class="equippedImg"><img :src="o.imgsrc"/></div>
            <figcaption>
              <span>{{o.title}}</span>
              <p class="nav4desc">{{o.desc}}</p>
            </figcaption>
          </figure>
        </div>
        <!-- 美式 -->
        <div class="nav4title2">
          <img :src="equipped.America.title.imgsrc" alt />
        </div>
        <div class="equippedWrap">
          <figure v-for="(o,idx) in equipped.America.main" :key="idx">
            <div class="equippedImg"><img :src="o.imgsrc"/></div>
            <figcaption>
              <span>{{o.title}}</span>
              <p class="nav4desc">{{o.desc}}</p>
            </figcaption>
          </figure>
        </div>
        <!-- 欧式 -->
        <div class="nav4title2">
          <img :src="equipped.Europe.title.imgsrc" alt />
        </div>
        <div class="equippedWrap">
          <figure v-for="(o,idx) in equipped.Europe.main" :key="idx">
            <div class="equippedImg"><img :src="o.imgsrc"/></div>
            <figcaption>
              <span>{{o.title}}</span>
              <p class="nav4desc">{{o.desc}}</p>
            </figcaption>
          </figure>
        </div>
      </section>
      <!-- 楼层style -->
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
            <el-col :span="24" v-for="(item,idx) in style" :key="idx" :offset="0">
              <el-card :body-style="{ padding: '14px'}">
                <img
                  :src="item.imgsrc"
                  class="image"
                />
                <div class="menu2LiDesc">
                  <span>{{item.title}}</span>
                  <span>
                    关注
                    <i>{{item.num}}</i>人
                  </span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </section>
      </section>
    </div>
    {{num}}
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
// import {local} from '../Api'
export default {
  props: ["num"],
  
  data() {
    return {
      imgString:"http://localhost:1910/img/",
      activeIndex3: "1",
      mark: 0,
      index:"1",
      lunboShow: {
        // transform: translateX(0)
        left: 0
      },
      menu2Style: {
        position: "relative",
        top: 0
      },
      mainbanner:[],        //轮播图
      ten_class:[],         //选择
      navlist2: [         //瓷砖
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
      todayRecommended:{},  //今日推荐
      newshoppinp:{},     //今日上市
      equipped:{},        //美家整装
      hotBanner:[],       //热卖单品轮播图
      style:[],           //楼层style

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
  watch:{
    num:val=>{
      // console.log("新："+newVal+"旧："+oldVal);
      console.log("num"+this.num);
    }
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
    },
    getImgSrc(o,name){
      if(name=="todayRecommended"||name=="newshoppinp"){
        for(let key in o){
          if(key=="rightPicDown"){
            for(let idx in o[key]){
              o[key][idx].imgsrc=this.imgString+o[key][idx].imgsrc;
            }
          }else{
            o[key].imgsrc=this.imgString+o[key].imgsrc;
          }
        }
      }
      else if(name=="equipped"){
        for(let key in o){
          if(key=="titleSrc"){
            o[key]=this.imgString+o[key];
          }else{
            for(let i in o[key]){
              if(i=="title"){
                o[key][i].imgsrc = this.imgString+o[key][i].imgsrc;
              }else{
                for(let m in o[key][i]){
                  o[key][i][m].imgsrc = this.imgString+o[key][i][m].imgsrc;
                }
              }
            }
          }
        }
      }
      else{
        for(let key in o){
          o[key].imgsrc=this.imgString+o[key].imgsrc;
        }
      }
      
      if(name=="mainbanner"){
        this.mainbanner=o;
      }else if(name=="ten_class"){
        this.ten_class=o;
      }else if(name=="todayRecommended"){
        this.todayRecommended=o;
      }else if(name=="newshoppinp"){
        this.newshoppinp=o;
      }else if(name=="equipped"){
        this.equipped=o;
      }else if(name=="hotBanner"){
        this.hotBanner=o;
      }else if(name=="style"){
        this.style=o;
      }
    }
  },
   async created() {
    //  推荐页
    this.play();
      let {data:{data}} = await this.$axios.get("http://localhost:1910/home");
      let m = data[0].mainbanner;    //轮播图
      let t = data[0].ten_class;    //选择
      let d = data[0].todayRecommended;
      let n = data[0].newshoppinp;
      let e = data[0].equipped;
      let h = data[0].hotBanner;
      let s = data[0].style;
      this.getImgSrc(m,"mainbanner");
      this.getImgSrc(t,"ten_class");
      this.getImgSrc(d,"todayRecommended");
      this.getImgSrc(n,"newshoppinp");
      this.getImgSrc(e,"equipped");
      this.getImgSrc(h,"hotBanner");
      this.getImgSrc(s,"style");
    
    
    // let {data:{data2:data}} = await this.$axios.get("http://localhost:1910/fenye?index:1");
    // console.log(data2);
    
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
      width: 100%;
      height: vw(88);
    }
    .rMain {
      width: vw(714);
      height: vw(358);
      margin: vw(10) auto;
      .rMainLeft {
        width: vw(358);
        height: vw(358);
        float: left;
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
    .equippedWrap{
      width: 100%;
      margin-top: vw(18);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      figure{
        width: vw(348);
        height: vw(320);
        margin-bottom: vw(18);
        .equippedImg{
          width: 100%;
          height: vw(228);
        }
        figcaption{
          span {
            display: block!important;
            width: vw(312)!important;
            font-size: 14px;
            color: #e8ac44;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: vw(10);
          }
          p{
            display: block;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #979797;
          }
        }
      }
    }

    .el-col{
      width: vw(348)!important;
      height: vw(320)!important;
      margin-bottom: vw(18)!important;
    }
    .el-card {
      width: vw(348.5);
      margin-top: vw(18);
    }
    .el-card__body {
      span {
        display: block!important;
        width: vw(312)!important;
        font-size: 14px;
        color: #e8ac44;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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