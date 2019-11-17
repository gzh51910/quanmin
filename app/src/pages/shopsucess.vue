<template>
  <div id="ss">
    <section id="shopselect">
      <shopselect />
    </section>
    <el-row>
      <el-col :span="11" v-for="item in list" :key="item.src">
        <el-card :body-style="{ padding: '0' }">
          <img :src="item.src" class="image" />
          <div style="padding: vw(20);">
            <span class="title">好吃的汉堡</span>
            <div class="bottom clearfix">
              <span class="price">{{ price }}</span>
              <span class="sale">已售20件</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import shopselect from "../pages/shopselect.vue";
export default {
  data() {
    return {
      price: `¥11`,
      list: [
        {
          src:
            "http://pic.quanmingwang.com/shop/pic/common/n5zj1PIack_20190102_!!51207.jpg_520x390.jpg"
        },
        {
          src:
            "http://pic.quanmingwang.com/shop/pic/common/n5zj1PIack_20190102_!!51207.jpg_520x390.jpg"
        },
        {
          src:
            "http://pic.quanmingwang.com/shop/pic/common/n5zj1PIack_20190102_!!51207.jpg_520x390.jpg"
        },
        {
          src:
            "http://pic.quanmingwang.com/shop/pic/common/n5zj1PIack_20190102_!!51207.jpg_520x390.jpg"
        },
        {
          src:
            "http://pic.quanmingwang.com/shop/pic/common/n5zj1PIack_20190102_!!51207.jpg_520x390.jpg"
        },
        {
          src:
            "http://pic.quanmingwang.com/shop/pic/common/n5zj1PIack_20190102_!!51207.jpg_520x390.jpg"
        },
        {
          src:
            "http://pic.quanmingwang.com/shop/pic/common/n5zj1PIack_20190102_!!51207.jpg_520x390.jpg"
        },
        {
          src:
            "http://pic.quanmingwang.com/shop/pic/common/n5zj1PIack_20190102_!!51207.jpg_520x390.jpg"
        },
        {
          src:
            "http://pic.quanmingwang.com/shop/pic/common/n5zj1PIack_20190102_!!51207.jpg_520x390.jpg"
        }
      ],
      list2: [],
      imgstring: "http://localhost:1910/img/"
    };
  },

  components: {
    shopselect
  },
  async created() {
    let {
      data: { data }
    } = await this.$axios.get("http://localhost:1910/goods");
    let m = data.mainbanner;
    this.getImg(m);
    console.log(data);
  },
  methods: {
    getImg(o) {
      for (let key in o) {
        o[key].imgsrc = this.imgstring + o[key].imgsrc;
      }
      this.list2 = o;
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
#ss {
  width: 100%;
  .title {
    font-size: vw(10);
    color: #000;
  }

  .bottom {
    width: 100%;
    border-top: 1px dashed #ccc;
    height: vw(80);
    margin-top: vw(40);
    line-height: vw(20);
    .price {
      line-height: vw(80);
      height: vw(80);
      display: block;
      float: left;
      color: #d22817;
      font-weight: 700;
    }
    .sale {
      line-height: vw(80);
      height: vw(80);
      display: block;
      font-weight: 600;
      float: right;
      font-size: vw(10);
    }
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
}
</style>