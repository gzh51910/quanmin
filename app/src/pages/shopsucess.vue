<template>
  <div id="ss">
    <section id="shopselect">
      <shopselect />
    </section>
    <el-row v-infinite-scroll="load">
      <el-col :span="12" v-for="item in shoplist" :key="item.id">
        <el-card :body-style="{ padding: '0' }"
        @click.native="getgoodsdetail(item.id,item.type)">
          <img :src="item.imgsrc" class="image" />
          <div style="padding: vw(20);">
            <P class="title">{{item.name}}</P>
            <P class="desc">{{[item.level]}}{{item.desc}}</P>
            <div class="bottom clearfix">
              <span class="price">{{item.price}}</span>
              <span class="sale">已售0件</span>
            </div>
          </div>
        </el-card>
      </el-col>
    
    </el-row>
  </div>
</template>
<script>
import shopselect from "../pages/shopselect.vue";
import { local } from "../Api";
export default {
  data() {
    return {
      shoplist: [],
      imgstring: "http://localhost:1910/img/",
      page: 0,
    };
  },

  components: {
    shopselect
  },
  
  methods: {
    async getdata(type, page) {
      let { data } = await local.get("goods", { type, page });
      data.data.forEach(ele => {
        this.shoplist.push(ele);
      });
    },
    load() {
      let { type } = this.$route.query;
      this.page++;
      this.getdata(type, this.page);
      console.log(this.page);
    },
    // 跳转商品详情
    getgoodsdetail(id,type){
      this.$router.push({
        name: "goodsdetail",
        params: { id },
        query: { id,type}
      });
    }
  },
  created(){
      // let { type } = this.$route.query;
      console.log(this.$route.query);
      // this.getdata(type)

  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
#ss {
  // margin: vw(30);
  width: 100%;
  .title {
    font-size: vw(30);
    color: #000;
  }
  .desc {
    font-size: vw(20);
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .bottom {
    margin-top: vw(5);
    width: 100%;
    border-top: 1px dashed #ccc;
    height: vw(80);
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