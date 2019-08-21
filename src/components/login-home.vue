<template>
<el-container>
      <el-header style="text-align: right; font-size: 12px;vertical-align: middle;line-height: 60px;">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <span>{{$store.state.userinfo.realname}}</span> -->
      <span>{{username}}</span>
    </el-header>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>用户信息</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>
  <div class="text item">
   用户名：{{username}}<br>
   姓名：{{userinfo.realname}}<br>
   地址：{{address}}<br>
   年龄：{{age}}<br>
  </div>
</el-card>


</el-container>
</template>

<script>

import { mapState } from 'vuex'
export default {
  data:function(){
    return {}
  },
  computed:{
      username (){
        return this.$store.state.userinfo.username
      },
      userinfo(){
        return this.$store.state.userinfo
      },
      ...mapState({
        address(state){
          return state.userinfo.address
        },
        age: 'age',
    

      })

  }

}
</script>

<style>
</style>
