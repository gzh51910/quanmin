<template>
  <div id="ss">
    <section id="shopselect">
      <shopselect />
    </section>
    <el-row>
      <el-col :span="11" v-for="item in shoplist" :key="item.src">
        <el-card :body-style="{ padding: '0' }">
          <img :src="item.imgsrc" class="image" />
          <div style="padding: vw(20);">
            <P class="title">{{item.name}}</P>
            <P class="desc">{{item.desc}}</P>
            <div class="bottom clearfix">
              <span class="price">{{ item.price }}</span>
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
import { local } from "../Api";
export default {
  data() {
    return {
      shoplist: [],
      list2: [],
      shoplist222: [],
      imgstring: "http://localhost:1910/img/"
    };
  },

  components: {
    shopselect
  },
  async created() {
    let { type } = this.$route.query;
    await this.getdata(type);

    //  let a= data.data.map((ele,index)=>{

    //   }
    // this.shoplist.push()
  },
  methods: {
    async getdata(type, page) {
      let { data } = await local.get("goods", { type, page });
      console.log(data);
      data.data.forEach(ele => {
        this.shoplist.push(ele);
      });
      console.log("shoplist", this.shoplist);
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
#ss {
  margin-left: vw(30);
  width: 100%;
  .title {
    font-size: vw(26);
    color: #000;
  }
  .desc {
    font-size: vw(18);
    color: #000;
    overflow: hidden;
text-overflow:  ellipsis;
display:  -webkit-box;
-webkit-line-clamp:  2;
-webkit-box-orient:  vertical
  }

  .bottom {
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