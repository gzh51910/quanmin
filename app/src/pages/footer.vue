<template>
  <footer>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#f0f0f0"
      text-color="#323232"
      active-text-color="#d22817"
      router
    >
      <el-menu-item :index="item.path" v-for="item in footernav" :key="item.name">
        <i :class="item.icon"></i>
        {{item.text}}
      </el-menu-item>
    </el-menu>
  </footer>
</template>
<script>
export default {};
</script>

<style lang="">
</style>