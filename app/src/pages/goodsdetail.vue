<template >
  <div>
    <div id="detailhead">
      <img src="../img/back.png" @click="backshop" />
      <ul>
        <li v-for="item in menu" :key="item">{{item}}</li>
      </ul>
      <img src="../img/more.png" alt />
    </div>
    <div class="lunbo">
      <!-- 轮播图 -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(ele,idx) in banner" :key="idx">
          <img :src="ele" alt />
        </el-carousel-item>
      </el-carousel>
      <div>
        <img src="../img/platform-service.png" alt />
      </div>
      <!-- 产品参数 -->
      <div class="product">
        <h2>{{desc}}</h2>
        <p class="pricea">
          <span class="priceb">{{price}}</span>
          <span class="productid">{{"产品编号"+id}}</span>
        </p>
      </div>
      <el-button-group class="sumcar">
        <el-button type="danger" icon="el-icon-shopping-cart-2" @click="add2cart">加入购物车</el-button>
      </el-button-group>
      <!-- <h3 class="tuijian">为您推荐</h3>
      <el-row :gutter="20">
        <el-col :xs="8" :sm="6" :md="4" :lg="3">
          <img />
          <h4>陶瓷全国大理石</h4>
          <p>¥49</p>
        </el-col>
      </el-row>-->
    </div>
  </div>
</template>
<script>
import { local } from "../Api";
// import {local} from '../Api'
export default {
  data() {
    return {
      activeIndex: "1",
      type: "",
      id: "",
      menu: ["商品", "评价", "详情", "推荐"],
      banner: [],
      desc: "",
      price: "",
      imgsrc: ""
    };
  },
  methods: {
    backshop(type) {
      this.$router.push({ name: "shopsucess", query: { type } });
    },
    // 加入到购物车
    add2cart() {
      console.log(this.id);
      // 判断当前商品是否已经存在购物车;
      let { goodslist } = this.$store.state;
      let current = goodslist.filter(item => item.id === this.id)[0];
      console.log("current", current);
      if (current) {
        this.$store.commit("changeQty", { id: this.id, qty: current.qty + 1 });
      } else {
        let id = this.id;
        let name = this.desc;
        let imgurl = this.imgsrc;
        let price = this.price;

        let goods = {
          id,
          imgurl,
          name,
          price,
          qty: 1
        };
        // console.log(goods);
        this.$store.commit("addtocart", goods);
        // this.$router.push("/cart");
      }
    },
    // 拿数据
    async getdata(id) {
      let { data } = await local.get(`goods/${id}`);
      console.log("getdata", data);
      this.banner = data.data[0].commons;
      this.imgsrc = data.data[0].commons[0];
      this.desc = data.data[0].desc;
      this.price = data.data[0].price;
      this.id = data.data[0].id;
      console.log("getdata", data.data[0].commons);
      console.log(this.id);
    }
  },
  // 渲染
  created() {
    // console.log(this.$route);
    let { type, id } = this.$route.query;
    this.getdata(id);
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
#detailhead {
  height: vw(70);
  margin-top: vw(20);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  img {
    align-self: flex-start;
    width: vw(70);
    height: vw(70);
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    li {
      align-self: flex-start;
      margin: vw(20);
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.product {
  margin-left: vw(30);
  height: vw(200);
  h2 {
    font-size: vw(40);
    margin-top: vw(30);
    overflow: hidden;
    // text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .pricea {
    margin-top: vw(20);
    .priceb {
      font-size: vw(50);
      font-weight: bold;
      display: inline-block;
      color: #d32917;
    }
    .productid {
      color: #666;
      margin-top: vw(15);
      font-size: vw(30);
      display: inline-block;
      margin-right: vw(20);
    }
  }
}
.sumcar {
  margin: vw(20);
  // line-height: vw(40);
}
.tuijian {
  margin-left: vw(20);
  text-align: left;
}
</style>