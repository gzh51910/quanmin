<template>
  <div>
    <div id="detailhead">
      <img src="../img/back.png" alt />
      <ul>
        <li v-for="item in menu" :key="item.name" @click="aa">{{item.text}}</li>
      </ul>
      <img src="../img/more.png" alt />
    </div>
    <div class="lunbo">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <div>
        <img src="../img/platform-service.png" alt />
      </div>
      <div>
        <p>厨卫瓷砖</p>
        <p>
          <span>19</span>
          <span>产品平台编号：3000</span>
        </p>
      </div>
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
  methods: {}
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
#detailhead {
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
</style>