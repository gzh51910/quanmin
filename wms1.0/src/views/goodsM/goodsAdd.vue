<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="商品编号" prop="id">
        <el-input v-model.number="ruleForm.id" style="max-width:500px"></el-input>
      </el-form-item>
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name" style="max-width:500px"></el-input>
      </el-form-item>

      <el-form
        :inline="true"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        style="margin-left:20px"
      >
        <el-form-item label="商品价格" prop="goodsPrice">
          <el-input v-model="ruleForm.goodsPrice"></el-input>
        </el-form-item>
        <el-form-item label="销售价格" style="margin-left:10px" prop="sellingPrice">
          <el-input v-model="ruleForm.sellingPrice"></el-input>
        </el-form-item>
      </el-form>

      <el-upload drag action="https://" style="margin-left:150px">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">图片上传</div>
      </el-upload>

      <el-form-item label="上架" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="服务保证" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="无忧退货" name="type"></el-checkbox>
          <el-checkbox label="快速退款" name="type"></el-checkbox>
          <el-checkbox label="免费包邮" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="优惠方式" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="无优惠"></el-radio>
          <el-radio label="特惠促销"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="商品描述" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc" style="max-width:500px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        id: "",
        name: "",
        goodsPrice: "",
        sellingPrice: "",
        // delivery: false,
        type: [],
        // resource: "",
        desc: ""
      },
      rules: {
        id: [
          { required: true, message: "商品编号不能为空" },
          { type: "number", message: "商品编号必须为纯数字" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符"}
        ],
        name: [
          { required: true, message: "请输入商品名称" },
          { min: 1, max: 10, message: "长度不能超过10个字符" }
        ],
        // type: [
        //   {
        //     type: "array",
        //     required: true,
        //     message: "请至少选择一个活动性质",
        //     trigger: "change"
        //   }
        // ],
        // resource: [
        //   { required: true, message: "请选择优惠方式", trigger: "change" }
        // ],
        goodsPrice: [
          { required: true, message: "请输入商品价格" }
          // { type: "number", message: "请输入正确的价格" }
        ],
        sellingPrice: [
          { required: true, message: "请输入销售价格" }
          // { type: "number", message: "请输入正确的价格" }
        ],
        desc: [{ required: true, message: "请填写商品描述" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("添加成功!");
          console.log(this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
</style>