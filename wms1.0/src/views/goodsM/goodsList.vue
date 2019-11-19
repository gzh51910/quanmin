<template>
  <div>
    <div v-for="(item,index) in sortList" :key="item" ref="menuItem">
      <el-button
        type="info"
        plain
        size="mini"
        style="float: left"
        @click="changeSort(index)"
      >{{item}}</el-button>
    </div>
    <div v-loading="loading">
      <!-- 表格 -->
      <el-table ref="multipleTable" :data="goodsList" style="max-width:80vw;margin-bottom:10px">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="id" label="商品编号"></el-table-column>
        <el-table-column label="商品图片">
          <template slot-scope="scope">
            <img :src="scope.row.imgsrc" alt style="width: 50px;height: 50px" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="商品名称"></el-table-column>
        <el-table-column prop="price" label="商品价格"></el-table-column>
        <el-table-column prop="type" label="商品类别"></el-table-column>
        <el-table-column prop="level" label="商品品质"></el-table-column>
        <el-table-column prop="desc" label="描述"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button size="mini" type="danger" @click="delGoods(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div style="text-align:center">
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="getGoodsList"
          :total="100"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      sortList: [
        "瓷砖",
        "壁纸",
        "地板",
        "墙布",
        "马桶",
        "浴室柜",
        "花洒",
        "智能马桶",
        "龙头",
        "吊灯",
        "吸顶灯",
        "台灯",
        "油烟机",
        "洗碗机"
      ],
      goodsList: [],
      type: "地板"
    };
  },
  methods: {
    delGoods(row) {
      this.$confirm(`确定删除${row.name}吗?`, "提示", {
        type: "warning"
      }).then(() => {
        let id = row.id;
        console.log(id);

        //删除数据
        this.$axios.delete(`http://localhost:1910/goods/${id}`).then(res => {
          if (res.status) {
            this.getGoodsList();
            console.log(11);
          }
        });
      });
    },
    async getGoodsList(page = 1, type) {
      this.loading = true;
      // 发送请求拿数据
      type = this.type;
      let { data } = await this.$axios.get("http://localhost:1910/goods", {
        params: { page, pagesize: 6, type }
      });
      // console.log(data);
      this.goodsList = data.data;
      this.loading = false;
    },
    changeSort(index) {
      this.type = this.$refs.menuItem[index].innerText;
      this.getGoodsList();
    }
  },
  created() {
    this.getGoodsList();
  }
};
</script>

<style>
</style>