<template>
  <div>
    <section id="search" style="margin-bottom:20px">
      <search />
    </section>
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane v-for="item in sortList" :key="item._id" :label="item.title">
        <div
          style="padding:15px 0 5px; border-top: 1px solid #E5E5E5;border-bottom: 1px solid #E5E5E5"
        >{{item.title}}</div>
        <el-row>
          <el-col
            :span="8"
            v-for="e in item.datalist"
            :key="e.type"
            align="center"
            @click.native="sortjump(e.type)"
          >
            <el-image
              style="width:75px; height:75px; margin:20px 10px 0"
              :src="e.imgsrc"
              fit="cover"
            ></el-image>
            <span style="font-size: 12px;">{{e.type}}</span>
          </el-col>
        </el-row>
      </el-tab-pane>
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
      tabPosition: "left",
      sortList: [],
      imgString: "http://localhost:1910/img/"
    };
  },
  methods: {
    async getSortList() {
      // 发送请求拿数据
      let { data } = await this.$axios.get("http://localhost:1910/home/sorts");
      this.sortList = data.data;
      for (let i = 0; i < this.sortList.length; i++) {
        for (let j = 0; j < this.sortList[i].datalist.length; j++) {
          this.sortList[i].datalist[
            j
          ].imgsrc = `${this.imgString}${this.sortList[i].datalist[j].imgsrc}`;
        }
      }
    },
    sortjump(type) {
      this.$router.push({
        name: "shopsucess",
        params: { type },
        query: { type }
      });
    }
  },
  created() {
    this.getSortList();
  }
};
</script>

<style lang="scss">
@function vw($px) {
  @return ($px / 750) * 100vw;
}
</style>