<template>
  <div class="FloorNavigation">
    <div class="CenterFixed">
      <ul>
        <li style="line-height: 36px;">导航</li>
        <li
          v-for="(item,index) in FixedNavigation"
          v-html="item"
          @click="rightFixed(index)"
          :class="FixedR(index)"
          v-bind:key="index"
        ></li>
        <li class="goTop" @click="goTop">返回顶部</li>
      </ul>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  props: ["FixedNavigation"],
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("scroll", this.myScroll);
  },
  //解决其他页面未使用报错的bug
  destroyed() {
    window.removeEventListener("scroll", this.myScroll);
  },
  methods: {
    rightFixed(index) {
      console.log(index);
      let topVal = $(".rightFixed" + index).offset().top - 50;
      $("body,html").animate({ scrollTop: topVal }, 1000);
    },
    goTop() {
      $("body,html").animate({ scrollTop: 0 }, 1000);
    },
    FixedR(index) {
      return "rFixed_" + index;
    },
    myScroll() {
      this.bodyScroll = $(window).scrollTop();
      // console.log(this.bodyScroll);
      let fixedLi = $(".FloorNavigation ul li");
      let goTopButton = $(".goTop");
      let right_0 = $(".rightFixed0").offset().top,
        right_1 = $(".rightFixed1").offset().top,
        right_2 = $(".rightFixed2").offset().top,
        right_3 = $(".rightFixed3").offset().top,
        right_4 = $(".rightFixed4").offset().top,
        right_5 = $(".rightFixed5").offset().top;
      if (this.bodyScroll <= right_1 - 100) {
        goTopButton.fadeOut(300).css("display", "none");
      } else {
        goTopButton.fadeIn(300).css("display", "block");
      }
      if (this.bodyScroll >= right_0 - 100) {
        fixedLi
          .eq(1)
          .addClass("fixedLiActive")
          .siblings()
          .removeClass("fixedLiActive");
      }
      if (this.bodyScroll >= right_1 - 100) {
        fixedLi
          .eq(2)
          .addClass("fixedLiActive")
          .siblings()
          .removeClass("fixedLiActive");
      }
      if (this.bodyScroll >= right_2 - 100) {
        fixedLi
          .eq(3)
          .addClass("fixedLiActive")
          .siblings()
          .removeClass("fixedLiActive");
      }
      if (this.bodyScroll >= right_3 - 100) {
        fixedLi
          .eq(4)
          .addClass("fixedLiActive")
          .siblings()
          .removeClass("fixedLiActive");
      }
      if (this.bodyScroll >= right_4 - 100) {
        fixedLi
          .eq(5)
          .addClass("fixedLiActive")
          .siblings()
          .removeClass("fixedLiActive");
      }
      if (this.bodyScroll >= right_5 - 100) {
        fixedLi
          .eq(6)
          .addClass("fixedLiActive")
          .siblings()
          .removeClass("fixedLiActive");
      }
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.FloorNavigation {
  width: 38px;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 40px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  .CenterFixed {
    ul {
      width: 38px;
      span {
        display: block;
        width: 38px;
        height: 38px;
        background: #93abc2;
        text-align: center;
        margin-top: 5px;
        color: white;
        line-height: 38px;
      }
      li {
        width: 44px;
        height: 44px;
        padding: 5px;
        background: #93abc2;
        text-align: center;
        margin-top: 1px;
        color: white;
        word-wrap: break-word;
        line-height: 18px;
        overflow: hidden;
        cursor: pointer;
      }
    }
    li:hover {
      background-color: #505f6e;
    }
    li:first-child {
      background-color: #f9a101;
      cursor: text;
    }
    li:first-child:hover {
      background-color: #f9a101;
    }
    li:last-child {
      background-color: #a7a8a8;
    }
    li:last-child:hover {
      background-color: #a7a8a8;
    }
  }
}
.fixedLiActive {
  background-color: #505f6e !important;
}
.goTop {
  display: none;
}
</style>
