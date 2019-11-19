<template>
  <div>
    <div id="detailhead">
      <img src="../img/back.png" @click="backshop" />
      <ul>
        <li v-for="item in menu" :key="item.name" @click="aa">{{item.text}}</li>
      </ul>
      <img src="../img/more.png" alt />
    </div>
    <div class="lunbo">
      <!-- 轮播图 -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
      </el-carousel>
      <div>
        <img src="../img/platform-service.png" alt />
      </div>
      <!-- 产品参数 -->
      <div class="product">
        <h2>源图陶瓷室内墙砖 300*800厨卫墙砖现代简约地砖卫生间墙面砖</h2>
        <p class="pricea">
          <span class="priceb">¥19</span>
          <span class="productid">产品平台编号：3000</span>
        </p>
      </div>
      <el-button-group class="sumcar">
        <el-button type="danger" icon="el-icon-shopping-cart-2" @click="add2cart">加入购物车</el-button>
      </el-button-group>
      <h3 class="tuijian">为您推荐</h3>
      <el-row :gutter="20">
        <el-col :xs="8" :sm="6" :md="4" :lg="3">
          <img />
          <h4>陶瓷全国大理石</h4>
          <p>¥49</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      menu: [
        { name: 1, text: "商品" },
        { name: 1, text: "评价" },
        { name: 1, text: "详情" },
        { name: 1, text: "推荐" }
      ]
    };
  },
  methods: {
    backshop() {
      let type =this.type
      this.$router.push({name:"shopsucess",query:{type}});
    }
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
    margin-top: vw(30);
  }

  .pricea {
    margin-top: vw(20);
    .priceb {
      float: left;
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
      float: right;
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