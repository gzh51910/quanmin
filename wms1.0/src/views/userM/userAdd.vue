<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户账号" prop="id">
        <el-input v-model.number="ruleForm.id" style="max-width:500px"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="psw">
        <el-input v-model="ruleForm.psw" style="max-width:500px"></el-input>
      </el-form-item>
      <el-form-item label="用户名称" prop="name">
        <el-input v-model="ruleForm.name" style="max-width:500px"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address" style="max-width:500px"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
          <el-radio label="保密"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注" prop="desc">
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
        psw: "",
        name: "",
        address: "",
        resource: "",
        desc: ""
      },
      rules: {
        id: [
          { required: true, message: "账号id不能为空" },
          { type: "number", message: "账号id必须为纯数字" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符"}
        ],
        psw: [
          { required: true, message: "密码不能为空" },
          { min: 3, max: 15, message: "密码长度在 3 到 15 个字符" }
        ],
        name: [
          { required: true, message: "请输入用户名" },
          { min: 1, max: 10, message: "长度不能超过10个字符" }
        ]
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