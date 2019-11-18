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
          v-for="(item,idx) in menu"
          :key="item.text"
          @click="getNum(idx)"
        >{{item.text}}</el-menu-item>
      </el-menu>
      <!-- <nav>
        <li v-for="(item,idx) in menu" v-bind:class="{active:idx===activeIndex}" v-on:click="changeIndex(idx)" :key="item.text">
                <a href="#">{{item.text}}</a></li>
      </nav>-->
    </header>
    <main>
      <menulist :num="num" />
    </main>
    <section id="footernav">
      <footernav />
    </section>
    <!-- <footer>
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
    </footer>-->
  </div>
</template>
<script>
// import axios from "axios";
import menulist from "./Menu.vue";
import footernav from "../pages/footernav.vue";
export default {
  data() {
    return {
      activeIndex: "2",
      num: 1,
      showMSg:[],
      imgString:"http://localhost:1910/img/",
      // activeIndex2: "/home",
      menu: [
        {
          name: "1",
          path: "/home",
          text: "推荐"
        },
        {
          name: "2",
          path: "/menu",
          text: "墙地材料"
        },
        {
          name: "3",
          path: "/cart",
          text: "卫浴用品"
        },
        {
          name: "4",
          path: "/mine",
          text: "灯饰照明"
        },
        {
          name: "5",
          path: "/mine",
          text: "厨房用品"
        },
        {
          name: "6",
          path: "/mine",
          text: "门/配件/五金"
        },
        {
          name: "7",
          path: "/mine",
          text: "客厅"
        },
        {
          name: "8",
          path: "/mine",
          text: "卧室"
        },
        {
          name: "9",
          path: "/mine",
          text: "餐厅"
        },
        {
          name: "10",
          path: "/mine",
          text: "书房"
        },
        {
          name: "11",
          path: "/mine",
          text: "儿童房"
        },
        {
          name: "12",
          path: "/mine",
          text: "红木馆"
        }
      ]
      // footernav: [
      //   {
      //     name: "home",
      //     path: "/home",
      //     text: "首页",
      //     icon: "iconfont iconshouye"
      //   },
      //   {
      //     name: "sort",
      //     path: "/sort",
      //     text: "分类",
      //     icon: "iconfont iconleimupinleifenleileibie"
      //   },
      //   {
      //     name: "hezuo",
      //     path: "/hezuo",
      //     text: "商务合作",
      //     icon: "iconfont iconhezuo"
      //   },
      //   {
      //     name: "cart",
      //     path: "/cart",
      //     text: "购物车",
      //     icon: "iconfont icongouwuche"
      //   },
      //   {
      //     name: "login",
      //     path: "/login",
      //     text: "我的",
      //     icon: "iconfont iconwode"
      //   }
      // ]
    };
  },
  methods: {
    sortjump() {
      this.$router.push("/Sort");
    },

    getNum(idx) {
      this.num = idx;
      // if(this.num!=0){
      //   let {data:{data}} = await this.$axios.get("http://localhost:1910/home/fenye?index=1");
      //   console.log("数据："+data);
      // }
      console.log("num"+this.num);
    },
    getimgSrc(o,name){
      if(name=="list"){
        for(let i in o){
          for(let j in o[i].goodslist){
            o[i].goodslist[j].imgsrc=this.imgString+o[i].goodslist[j].imgsrc;
          }
        }
      }else{
        for(let key in o){
          o[key].imgsrc=this.imgString+o[key].imgsrc;
        }
      }
      
      if(name=="bannerlunbo"){
        this.showMSg.bannerlunbo=o;
      }else if(name=="sors"){
        this.showMSg.sors=o;
      }else if(name=="list"){
        this.showMSg.list=o;
      }
    },
    async getMenu(){
      let {data:{data}} = await this.$axios.get("http://localhost:1910/home/fenye?index=1");
      this.showMSg=data[0];
      this.getimgSrc(this.showMSg.bannerlunbo,"bannerlunbo");
      this.getimgSrc(this.showMSg.sors,"sors");
      this.getimgSrc(this.showMSg.list,"list");
      // console.log("数据："+this.showMSg);
      console.log(this.showMSg);
      
    }
  },
  created() {
    // this.activeIndex = this.$route.num;
    // this.getMenu();
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
}

// footer {
//   display: flex;
//   height: vw(100);
//   width: 100%;
//   justify-content: space-around;
//   align-items: center;
//   background-color: #fff;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   ul {
//     width: 100%;
//   }
//   li {
//     width: 20%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     font-size: vw(22);
//     color: #4d4d4d;
//     i {
//       height: vw(46);
//     }
//   }
// }
</style>