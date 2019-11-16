<template>
  <div>
    <section id="search">
      <search />
    </section>

    <!-- <div id="kk"> -->
    <main id="sort_main">
      <section class="floor-nav" id="floorNavList">
        <!-- 左侧楼层 -->
        <ul class="nav-list">
          <li
            class="nav-list-item"
            ref
            v-for="(item, index) in floorNav"
            :key="item.id"
            @click="setFloorNavMountClick(index)"
          >{{ item.name }}</li>
        </ul>
      </section>
      <!-- 右侧的内容区域 -->
      <section class="floor-item" v-for="item in floorList" :key="item.id">
        <div class="floor-item-box">
          <h4>{{ item.name }}</h4>
        </div>
        <el-row :gutter="20">
          <el-col :span="3">
            <img src alt />
            <div>
              <span>shui</span>
            </div>
          </el-col>
        </el-row>
      </section>
    </main>
    <!-- </div> -->
  </div>
</template>

<script>
import search from "../pages/search.vue";
var TIMER = null;
export default {
  components: {
    search
  },
  name: "home",
  data() {
    return {
      floorNav: [
        // 自定义左侧楼层数
        { id: 1, name: "墙地材料" },
        { id: 2, name: "卫浴用品" },
        { id: 3, name: "灯饰照明" },
        { id: 4, name: "厨房用品" },
        { id: 5, name: "门/配件/五金" },
        { id: 6, name: "客厅" },
        { id: 7, name: "卧室" },
        { id: 8, name: "餐厅" },
        { id: 9, name: "书房" },
        { id: 10, name: "儿童房" },
        { id: 11, name: "红木馆" }
      ],
      floorList: [
        // 自定义右侧的楼层内容区域
        { id: 1, name: "墙地材料" },
        { id: 2, name: "卫浴用品" },
        { id: 3, name: "灯饰照明" },
        { id: 4, name: "厨房用品" },
        { id: 5, name: "门/配件/五金" },
        { id: 6, name: "客厅" },
        { id: 7, name: "卧室" },
        { id: 8, name: "餐厅" },
        { id: 9, name: "书房" },
        { id: 10, name: "儿童房" },
        { id: 11, name: "红木馆" }
      ],
      floorIndex: 1
    };
  },

  methods: {
    /**
     * 设置楼层导航事件驱动方法
     * @params Number index  楼层下标
     */
    // 点击楼层事件
    setFloorNavMountClick(index) {
      var _this = this;
      console.log(this);

      let floor_item = document.getElementsByClassName("floor-item"),
        floor_offsetTop = floor_item[index].offsetTop - floor_item[0].offsetTop,
        window_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop,
        timer = {
          step: 50,
          times: 5,
          FLOOR_OFFSETTOP: floor_offsetTop
        };

      if (window_scrollTop > floor_offsetTop) {
        _this.setFloorScrollArrowUp(timer);
      } else if (window_scrollTop == floor_offsetTop) {
        return false;
      } else {
        _this.setFloorScrollArrowDown(timer);
      }
    },
    /**
     * 设置楼层向上滚动
     * @params Object timer 定时器配置
     */
    setFloorScrollArrowUp(timer) {
      var _this = this;
      clearInterval(TIMER);
      TIMER = setInterval(() => {
        const window_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (window_scrollTop <= timer.FLOOR_OFFSETTOP) {
          document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP;
          document.body.scrollTop = timer.FLOOR_OFFSETTOP;
          clearInterval(TIMER);
        } else {
          document.documentElement.scrollTop = window_scrollTop - timer.step;
          document.body.scrollTop = window_scrollTop - timer.step;
        }
      }, timer.times);
    },
    /**
     * 设置楼层向下滚动
     * @params Object timer 定时器配置
     */
    setFloorScrollArrowDown(timer) {
      var _this = this;
      clearInterval(TIMER);
      TIMER = setInterval(() => {
        const window_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (window_scrollTop >= timer.FLOOR_OFFSETTOP) {
          document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP;
          document.body.scrollTop = timer.FLOOR_OFFSETTOP;
          clearInterval(TIMER);
        } else {
          document.documentElement.scrollTop = window_scrollTop + timer.step;
          document.body.scrollTop = window_scrollTop - timer.step;
        }
      }, timer.times);
    },
    /**
     * 监听窗口滚动楼层导航动态定位
     */
    floorSrcollAddEventListener() {
      var _this = this;
      let nav_item = document
          .getElementById("floorNavList")
          .getElementsByClassName("nav-list-item"),
        floor_item = document.getElementsByClassName("floor-item");
      nav_item[0].className = "nav-list-item active";
      window.onscroll = function() {
        const window_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        for (let i = 0, len = floor_item.length; i < len; i++) {
          const floor_offsetTop =
            floor_item[i].offsetTop - floor_item[0].offsetTop;
          if (window_scrollTop >= floor_offsetTop) {
            for (let n = 0, len = nav_item.length; n < len; n++) {
              nav_item[n].className =
                "nav-list-item " + (i === n ? "active" : "");
            }
          }
        }
      };
    },
    /**
     * 页面初始化
     */
    initPage() {
      var _this = this;
      _this.floorSrcollAddEventListener();
    }
  },
  mounted() {
    this.initPage();
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
.floor-nav {
  position: fixed;
  top: vw(120);
  left: vw(0);
}
.floor-nav .nav-list {
  width: vw(200);
  display: inline-block;
  text-align: center;
  background-color: #f5f5f5;
  padding: vw(0);
  // padding: 5px 15px;
}
.floor-nav .nav-list .nav-list-item {
  display: inline-block;
  width: 100%;
  height: 100%;
  line-height: vw(100);
  vertical-align: middle;
  align-self: center;
  border-bottom: 1px solid #fff;

  cursor: pointer;
}
.floor-nav .nav-list .nav-list-item.active,
.floor-nav .nav-list .nav-list-item:hover {
  color: #d32917;
  border-left: 3px solid #d32917;
  background-color: white;
}
h4 {
  text-align: left;
  border-bottom: 1px solid #f5f5f5;
}
.floor-item {
  //   margin-top: vw(73);
  margin-left: vw(200);
  min-height: vw(800);
  text-align: center;
  background-color: white;
  color: #555;
}
#search {
  height: vw(105);
  // overflow: hidden;
  position: fixed;
  top: vw(0);
  width: 100%;
  background: rgb(255, 255, 255);
}
#sort_main {
  // overflow: auto;
  background: none;
}
// #kk {
//   margin-top: vw(10);
//   // overflow: hidden;
// }
</style>





