<template>
  <div align="center">
    <el-table
      ref="singleTable"
      :data="goodsSort"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="max-width:80vw;margin-bottom:20px"
      align="center"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column property="sort" label="商品分类"></el-table-column>
      <el-table-column property="grade" label="级别"></el-table-column>
      <el-table-column property="quantity" label="数量"></el-table-column>
      <el-table-column property="date" label="添加时间"></el-table-column>
      <el-table-column label>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="delGoods(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination page-size="10" background layout="prev, pager, next" :total="10"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsSort: [
        {
          sort: "墙地材料",
          grade: "一级",
          quantity: "10000",
          date: "2010-11-11"
        },
        {
          sort: "卫浴用品",
          grade: "一级",
          quantity: "10000",
          date: "2010-11-11"
        },
        {
          sort: "灯饰照明",
          grade: "一级",
          quantity: "10000",
          date: "2010-11-11"
        },
        {
          sort: "门/配件/五金",
          grade: "一级",
          quantity: "10000",
          date: "2010-11-11"
        },
        {
          sort: "客厅",
          grade: "一级",
          quantity: "10000",
          date: "2010-11-11"
        },
        {
          sort: "卧室",
          grade: "一级",
          quantity: "10000",
          date: "2010-11-11"
        },
        {
          sort: "餐厅",
          grade: "一级",
          quantity: "10000",
          date: "2010-11-11"
        },
        {
          sort: "书房",
          grade: "一级",
          quantity: "10000",
          date: "2010-11-11"
        },
        {
          sort: "儿童房",
          grade: "一级",
          quantity: "10000",
          date: "2010-11-11"
        }
      ],
      currentRow: null
    };
  },

  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
};
</script>

<style>
</style>