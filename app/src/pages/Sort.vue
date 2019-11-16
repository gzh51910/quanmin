<template>
  <div>
    <section id="search">
      <search />
    </section>
    <el-radio-group v-model="tabPosition"></el-radio-group>
    <el-tabs :tab-position="tabPosition" class="leftnav">
      <el-tab-pane label="墙地材料">墙地材料</el-tab-pane>
      <el-tab-pane label="卫浴用品">卫浴用品</el-tab-pane>
      <el-tab-pane label="灯饰照明">灯饰照明</el-tab-pane>
      <el-tab-pane label="厨房用品">厨房用品</el-tab-pane>
      <el-tab-pane label="门/配件/五金">门/配件/五金</el-tab-pane>
      <el-tab-pane label="客厅">客厅</el-tab-pane>
      <el-tab-pane label="卧室">卧室</el-tab-pane>
      <el-tab-pane label="餐厅">餐厅</el-tab-pane>
      <el-tab-pane label="书房">书房</el-tab-pane>
      <el-tab-pane label="儿童房">儿童房</el-tab-pane>
      <el-tab-pane label="红木馆">红木馆</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import search from "../pages/search.vue";
export default {
  components: {
    search
  },
  data() {
    return {
      tabPosition: "left"
    };
  }
};
</script>

<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
.leftnav {
  height: vw(900);
}
.el-tab-pane {
  color: #d32917;
  border-bottom: 2px solid #f5f5f5;
}
</style>