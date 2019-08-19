<template>
<div class="login">
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <h1><i class="el-icon-s-tools"></i>登录</h1>
  <el-form-item label="账号" prop="username">
    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
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
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
          ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
          ],

        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this=this;
           //console.log( this.ruleForm.username + this.ruleForm.password);
           this.axios.post('/api/checklogin',{
            username: _this.ruleForm.username,
            password: _this.ruleForm.password
           }).then(reponse=>{
             //console.log('接受后端相应数据',reponse.data[0]);
              if(reponse.data.length){
                _this.$store.commit('SAVE_USERINFO',reponse.data[0]);
                _this.$message({
              message: '恭喜你，登录成功！！！',
              type: 'success'
            });

            this.$router.push('login_index');
              }else{
                _this.$message.error('登录失败！！！');
              }
           })
          }else {
            this.$message("登录失败！");
            return false;
          }
          /*
            insert into users(id,username,password,realname,address,idType) values(2,'user2','123','李雷2','福建龙岩','1234567');
            insert into users(id,username,password,realname,address,idType) values(3,'user3','123','李雷3','福建泉州','1234567');
            insert into users(id,username,password,realname,address,idType) values(4,'user4','123','李雷4','福建宁德','1234567');
            insert into users(id,username,password,realname,address,idType) values(5,'user5','123','李雷5','福建莆田','1234567');



          */
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
html,body,.login{
  height: 100%;
}
.login{display: flex;justify-content: center;align-items: center;}
.el-form{border-radius: 4px;border: 1px solid #ccc;text-align: center;padding-right: 50px;padding-bottom: 10px;}

</style>
