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
        <i class="iconfont iconleimupinleifenleileibie" @click="sortjump"></i>
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#f0f0f0"
        text-color="#323232"
        active-text-color="#e0641a"
      >
        <el-menu-item
          :index="item.name"
          v-for="item in menu"
          :key="item.text"
          @click="getNum(item.name)"
        >{{item.text}}</el-menu-item>
      </el-menu>
      <!-- <nav>
        <li v-for="(item,idx) in menu" v-bind:class="{active:idx===activeIndex}" v-on:click="changeIndex(idx)" :key="item.text">
                <a href="#">{{item.text}}</a></li>
      </nav>-->
    </header>
    <main v-if="num==0">
      <div class="Recommend">
        <section class="bannerWrap">
          <el-carousel trigger="click">
            <el-carousel-item v-for="item in mainbanner" :key="item.index">
              <img :src="item.imgsrc" alt style="width:100%" />
            </el-carousel-item>
          </el-carousel>
        </section>
        <!-- 选择 -->
        <nav class="navlist1" v-if="ten_class.length!=0">
          <li v-for="item in ten_class" :key="item.index" @click="choose(item.index)">
            <img :src="item.imgsrc" alt />
            {{item.title}}
          </li>
        </nav>
        <nav class="navlist2">
          <li v-for="item in navlist2" :key="item.num" @click="getNum(item.num)">
            <img :src="item.src" alt />
          </li>
        </nav>
        <!-- 今日推荐 -->
        <section class="navlist3">
          <div class="rTitle">
            <img :src="todayRecommended.title.imgsrc" alt />
          </div>
          <div class="rMain">
            <div class="rMainLeft">
              <img v-if="todayRecommended.title.imgsrc" :src="todayRecommended.leftPIc.imgsrc" alt />
            </div>
            <div class="rMainRight">
              <nav class="rnavlist">
                <li>
                  <img
                    v-if="todayRecommended.title.imgsrc"
                    :src="todayRecommended.rightPicTop.imgsrc"
                    alt
                  />
                </li>
                <li>
                  <img
                    v-if="todayRecommended.title.imgsrc"
                    :src="todayRecommended.rightPicDown[0].imgsrc"
                    alt
                  />
                </li>
                <li>
                  <img
                    v-if="todayRecommended.title.imgsrc"
                    :src="todayRecommended.rightPicDown[1].imgsrc"
                    alt
                  />
                </li>
              </nav>
            </div>
          </div>
        </section>
        <!-- 新品上市 -->
        <section class="navlist3" v-if="newshoppinp.title.imgsrc">
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
        <section class="navlist4" lazy>
          <div class="nav4title1">
            <img :src="equipped.titleSrc" alt />
          </div>
          <!-- 新中式 -->
          <div class="nav4title2" lazy>
            <img :src="equipped.Chinese.title.imgsrc" alt />
          </div>
          <div class="equippedWrap">
            <figure v-for="(o,idx) in equipped.Chinese.main" :key="idx">
              <div class="equippedImg">
                <img :src="o.imgsrc" />
              </div>
              <figcaption>
                <span>{{o.title}}</span>
                <p class="nav4desc">{{o.desc}}</p>
              </figcaption>
            </figure>
          </div>
          <!-- 美式 -->
          <div class="nav4title2" lazy>
            <img :src="equipped.America.title.imgsrc" alt />
          </div>
          <div class="equippedWrap">
            <figure v-for="(o,idx) in equipped.America.main" :key="idx">
              <div class="equippedImg">
                <img :src="o.imgsrc" />
              </div>
              <figcaption>
                <span>{{o.title}}</span>
                <p class="nav4desc">{{o.desc}}</p>
              </figcaption>
            </figure>
          </div>
          <!-- 欧式 -->
          <div class="nav4title2" lazy>
            <img :src="equipped.Europe.title.imgsrc" alt />
          </div>
          <div class="equippedWrap">
            <figure v-for="(o,idx) in equipped.Europe.main" :key="idx">
              <div class="equippedImg">
                <img :src="o.imgsrc" />
              </div>
              <figcaption>
                <span>{{o.title}}</span>
                <p class="nav4desc">{{o.desc}}</p>
              </figcaption>
            </figure>
          </div>
          <!-- 热卖单品 -->
          <div class="hotgoods" lazy>
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
                <el-card :body-style="{ padding: '14px'}" lazy>
                  <img :src="item.imgsrc" class="image" />
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
    </main>
    <main v-if="num!=0">
      <menulist :showMSg="showMSg" />
    </main>
    <section id="footernav">
      <footernav />
    </section>
  </div>
</template>
<script>
// import axios from "axios";
import menulist from "./Menu.vue";
import footernav from "../pages/footernav.vue";
export default {
  data() {
    return {
      activeIndex: "0",
      num: 0,
      showMSg: [],
      imgString: "http://localhost:1910/img/",
      // activeIndex2: "/home",
      menu: [
        {
          name: "0",
          path: "/home",
          text: "推荐"
        },
        {
          name: "1",
          path: "/menu",
          text: "墙地材料"
        },
        {
          name: "2",
          path: "/cart",
          text: "卫浴用品"
        },
        {
          name: "3",
          path: "/mine",
          text: "灯饰照明"
        },
        {
          name: "4",
          path: "/mine",
          text: "厨房用品"
        },
        {
          name: "5",
          path: "/mine",
          text: "门/配件/五金"
        },
        {
          name: "6",
          path: "/mine",
          text: "客厅"
        },
        {
          name: "7",
          path: "/mine",
          text: "卧室"
        },
        {
          name: "8",
          path: "/mine",
          text: "餐厅"
        },
        {
          name: "9",
          path: "/mine",
          text: "书房"
        },
        {
          name: "10",
          path: "/mine",
          text: "儿童房"
        },
        {
          name: "11",
          path: "/mine",
          text: "红木馆"
        }
      ],
      // 推荐页
      activeIndex3: "1",
      mark: 0,
      index: "1",
      lunboShow: {
        // transform: translateX(0)
        left: 0
      },
      menu2Style: {
        position: "relative",
        top: 0
      },
      mainbanner: [], //轮播图
      ten_class: [], //选择
      navlist2: [
        //瓷砖
        {
          src:"http://pic1.quanmingwang.com/shop/DJ54V7Ajbv_20180329_!!85699.jpg",
          num:1
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/s8nkNzU0Mc_20180329_!!89315.jpg",
          num:5
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/9VqPNQhbvk_20180329_!!79269.jpg",
          num:6
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/1OHyOqaKg3_20180329_!!76066.jpg",
          num:7
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/3rpwFyMngd_20180416_!!10252.jpg",
          num:2
        },
        {
          src:
            "http://pic1.quanmingwang.com/shop/iDh9o4H5GX_20180329_!!65102.jpg",
          num:3
        }
      ],
      todayRecommended: {}, //今日推荐
      newshoppinp: {}, //今日上市
      equipped: {}, //美家整装
      hotBanner: [], //热卖单品轮播图
      style: [], //楼层style
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
      ]
    };
  },
  watch:{
    num(newVal,oldVal){
      if(newVal!=0&&newVal!=oldVal){
        this.getMenu(newVal);
      }
    }
  },
  methods: {
    sortjump() {
      this.$router.push("/Sort");
    },
    getNum(idx) {
      this.num = idx;
      this.activeIndex=idx.toString();
    },
    choose(idx){
      if(idx=="1"){
        this.getNum(6);
      }else if(idx=="2"){
        this.getNum(7);
      }else if(idx=="3"){
        this.getNum(8);
      }else if(idx=="4"){
        this.getNum(10);
      }else if(idx=="5"){
        this.getNum(0);
      }else if(idx=="7"){
        this.getNum(11);
      }
    },
    getmsgSrc(o, name) {
      if (name == "list") {
        for (let i in o) {
          for (let j in o[i].goodslist) {
            o[i].goodslist[j].imgsrc =
              this.imgString + o[i].goodslist[j].imgsrc;
          }
        }
      } else {
        for (let key in o) {
          o[key].imgsrc = this.imgString + o[key].imgsrc;
        }
      }

      if (name == "bannerlunbo") {
        this.showMSg.bannerlunbo = o;
      } else if (name == "sors") {
        this.showMSg.sors = o;
      } else if (name == "list") {
        this.showMSg.list = o;
      }
    },
    async getMenu(index) {
      let {
        data: { data }
      } = await this.$axios.get("http://localhost:1910/home/fenye", {
        params: { index }
      });
      this.showMSg = data[0];
      this.getmsgSrc(this.showMSg.bannerlunbo, "bannerlunbo");
      this.getmsgSrc(this.showMSg.sors, "sors");
      this.getmsgSrc(this.showMSg.list, "list");
      // console.log("数据："+this.showMSg);
      // console.log(this.showMSg);
    },
    // 推荐页
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
    getImgSrc(o, name) {
      if (name == "todayRecommended" || name == "newshoppinp") {
        for (let key in o) {
          if (key == "rightPicDown") {
            for (let idx in o[key]) {
              o[key][idx].imgsrc = this.imgString + o[key][idx].imgsrc;
            }
          } else {
            o[key].imgsrc = this.imgString + o[key].imgsrc;
          }
        }
      } else if (name == "equipped") {
        for (let key in o) {
          if (key == "titleSrc") {
            o[key] = this.imgString + o[key];
          } else {
            for (let i in o[key]) {
              if (i == "title") {
                o[key][i].imgsrc = this.imgString + o[key][i].imgsrc;
              } else {
                for (let m in o[key][i]) {
                  o[key][i][m].imgsrc = this.imgString + o[key][i][m].imgsrc;
                }
              }
            }
          }
        }
      } else {
        for (let key in o) {
          o[key].imgsrc = this.imgString + o[key].imgsrc;
        }
      }

      if (name == "mainbanner") {
        this.mainbanner = o;
      } else if (name == "ten_class") {
        this.ten_class = o;
      } else if (name == "todayRecommended") {
        this.todayRecommended = o;
      } else if (name == "newshoppinp") {
        this.newshoppinp = o;
      } else if (name == "equipped") {
        this.equipped = o;
      } else if (name == "hotBanner") {
        this.hotBanner = o;
      } else if (name == "style") {
        this.style = o;
      }
    }
  },
  async created() {
    // this.activeIndex = this.$route.num;
    try {
      //  推荐页
      this.play();
      let {
        data: { data }
      } = await this.$axios.get("http://localhost:1910/home");
      let m = data[0].mainbanner; //轮播图
      let t = data[0].ten_class; //选择
      let d = data[0].todayRecommended;
      let n = data[0].newshoppinp;
      let e = data[0].equipped;
      let h = data[0].hotBanner;
      let s = data[0].style;
      this.getImgSrc(m, "mainbanner");
      this.getImgSrc(t, "ten_class");
      this.getImgSrc(d, "todayRecommended");
      this.getImgSrc(n, "newshoppinp");
      this.getImgSrc(e, "equipped");
      this.getImgSrc(h, "hotBanner");
      this.getImgSrc(s, "style");
    } catch (error) {
      console.log(error);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },

  components: {
    menulist,
    footernav
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
header,
main {
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
      width: vw(179);
      text-decoration: none;
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
      min-width: vw(148);
      flex-shrink: 0;
      line-height: vw(82) !important;
      height: vw(82) !important;
    }
    .is-active {
      background-color: #e0641a !important;
      color: #fff !important;
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
  margin-bottom: vw(110);
  background-color: #f2f2f2;
  .Recommend {
    height: 100%;
    overflow: auto;
    .bannerWrap {
      .el-carousel {
        height: vw(300) !important;
      }
      .el-carousel__item {
        height: vw(300) !important;
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
      .equippedWrap {
        width: 100%;
        margin-top: vw(18);
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        figure {
          width: vw(348);
          height: vw(320);
          margin-bottom: vw(18);
          .equippedImg {
            width: 100%;
            height: vw(228);
          }
          figcaption {
            span {
              display: block !important;
              width: vw(312) !important;
              font-size: 14px;
              color: #e8ac44;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-bottom: vw(10);
            }
            p {
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

      .el-col {
        width: vw(348) !important;
        height: vw(320) !important;
        margin-bottom: vw(18) !important;
      }
      .el-card {
        width: vw(348.5);
        margin-top: vw(18);
      }
      .el-card__body {
        span {
          display: block !important;
          width: vw(312) !important;
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
}
</style>