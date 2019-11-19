<template>
  <div>111</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async getGoodsSortList() {
      // 发送请求拿数据
      let { data } = await this.$axios.post(
        "http://localhost:1910/home/sorts",
        {
          type: "地板"
        }
      );
      // this.sortList = data.data;
      console.log(data.data);
    }
  },
  created() {
    this.getGoodsSortList();
  }
};
</script>

<style>
</style>