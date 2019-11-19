<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="3" :sm="6" :md="8" :lg="9" :xl="11">
        <img src="../img/back.png" class="back" @click="bb" />
      </el-col>
      <el-col :xs="16" :sm="6" :md="4" :lg="3" :xl="1">
        <el-input placeholder="搜索商家、品类或商圈" prefix-icon="el-icon-search" v-model="input"></el-input>
      </el-col>

      <el-col :xs="3" :sm="6" :md="4" :lg="3" :xl="1">
        <img src="../img/select.png" class="select" />
      </el-col>
    </el-row>
    <el-row :gutter="18">
      <el-col
        :span="3.5"
        v-for="(item,index) in list"
        :key="index"
        @click.native="changeIndex(index)"
        v-bind:class="{active:index==activeIndex}"
      >
        <div class="grid-content bg-purple">{{item.text}}</div>
      </el-col>
      <el-col :span="3">
        <img src="../img/shaixuan1.png" class="shaixuan" />
      </el-col>
    </el-row>
    <!-- <el-menu :default-active="activeIndex" mode="horizontal" class="caidan">
      <el-menu-item :index="item.name" v-for="item in list" :key="item.name">{{item.text}}</el-menu-item>
    </el-menu>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      list: [
        { name: "1", text: "全部" },
        { name: "2", text: "精品" },
        { name: "3", text: "高品质" },
        { name: "4", text: "热卖" },
        { name: "5", text: "特价" },
        { name: "6", text: "筛选" }
      ],input:""
    };
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index;
      console.log(this.activeIndex, "aa");
    },
    bb() {
      this.$router.push("/Sort");
    }
  }
};
</script>
<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
.back {
  margin-top: vw(10);
  width: vw(60);
  height: vw(60);
}
.select {
  margin-left: vw(20);
  width: vw(80);
  height: vw(80);
}
.el-row {
  margin-bottom: vw(20);

  &:last-child {
    margin-bottom: 0;
  }
}

.shaixuan {
  width: vw(50);
  height: vw(50);
  margin-top: vw(-6);
  margin-left: vw(20);
}
.active {
  color: #d22817;
}
</style>