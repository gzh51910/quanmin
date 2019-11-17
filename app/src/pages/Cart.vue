<template>
  <div>
    <div class="cartheader">
      <h1 class="cartitle">购物车</h1>
      <p class="sumup">
        共
        <span class="num">0</span> 件宝贝
      </p>
      <ul class="stepMent">
        <li class="cur">全部宝贝</li>
        <li class="fenqi">分期宝贝</li>
      </ul>
    </div>

    <!-- 购物车 -->
    <div class="page-cart">
      <div v-for="item in goodslist" :key="item.id">
        <el-row :gutter="30">
          <el-col :span="4">
            <img :src="item.imgurl" />
          </el-col>
          <el-col :span="16" class="jisuan">
            <h4>{{item.name}}</h4>
            <p class="price">
              <span>{{item.price}}</span>
              <el-input-number size="mini" v-model="item.qty" @change="changeQty(item.id,$event)"></el-input-number>
            </p>&times;
          </el-col>
          <el-col :span="4" style="text-align:right">
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              size="mini"
              @click="removeItem(item.id)"
            ></el-button>
          </el-col>
        </el-row>
        <!-- 添加分割线 -->
        <el-divider></el-divider>
      </div>
      <el-row :gutter="30">
        <el-col :span="12">
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="clearCart">清空购物车</el-button>
        </el-col>
        <el-col :span="12" class="price" style="text-align:right">
          总计：
          <span>{{totalPrice.toFixed(2)}}</span>
        </el-col>
      </el-row>
    </div>
    <!-- <section class="cartcontain">
      <img src="../img/emptyCart.png" class="emptycar" />
      <p>您还没有添加宝贝,快去看看吧~</p>
    </section>-->
    <section id="footernav">
      <footernav />
    </section>
  </div>
</template>
<script>
import footernav from "../pages/footernav.vue";
export default {
  components: {
    footernav
  },
  data() {
    return { radio: "2" };
  },
  // 计算总价，qty为数量，reduce为累计
  computed: {
    goodslist() {
      return this.$store.state.goodslist;
    },

    totalPrice() {
      return this.goodslist.reduce(
        (prev, item) => prev + item.price * item.qty,
        0
      );
    }
  },
  methods: {
    removeItem(id) {
      this.$store.commit("removeFromCart", id);
    },
    clearCart() {
      this.$store.commit("clearCart");
    },
    changeQty(id, qty) {
      this.$store.commit("changeQty", { id, qty });
    }
    // cartoshop() {
    //   this.$router.push("/goods");
    // }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
.cartheader {
  height: vw(150);
  background: #df443b;
  .cartitle {
    margin-left: vw(50);
    color: white;
    line-height: vw(90);
    height: vw(90);
    font-size: vw(35);
    // color: azure;
  }
  .sumup {
    margin-left: vw(50);
    color: white;
    font-size: vw(33);
    float: left;
  }
  .stepMent {
    float: left;
    font-size: vw(28);
    margin-left: vw(200);
    li {
      float: left;
      color: white;
      margin-right: vw(50);
    }
    .cur {
      color: #df443b;
      background: rgba(255, 255, 255, 0.6);
      border-radius: vw(4);
    }
  }
}
.cartcontain {
  margin-top: vw(200);
  width: vw(600);
  height: vw(600);

  .emptycar {
    width: 100%;
    height: 100%;
    margin-left: vw(70);
  }
}
.page-cart {
  margin-left: vw(20);
  width: vw(700);
  margin-top: vw(40);
  img {
    width: vw(140);
    height: vw(140);
    // width: 100%;
  }

  .jisuan {
    width: vw(400);
    margin-left: vw(60);
    h4 {
      margin-top: 0;
    }
  }
}
</style>