<template>
<!-- <p>{{$store.state.userinfo}}</p> -->
<el-container style="height: 500px; border: 1px solid #eee; ">

  <el-aside width="200px">
    <el-menu :default-openeds="['1']"   background-color="#545c64"
  text-color="#fff" router>
      <el-menu-item index="login_index" class="el-h1">vuex系统首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>账号管理</template>
          <el-menu-item index="userlist">账号列表</el-menu-item>
          <el-menu-item index="vipuser">vip账号</el-menu-item>
          <el-menu-item index="password">修改密码</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>


  <el-container>
  <router-view/>
  </el-container>
</el-container>
</template>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

<style>
.el-container{height: 100% !important;}
.el-menu{border-right: 0}
.el-aside{height: 100%;}
.el-aside{background-color: #545c64;height: 100%;}
.el-h1{background-color: #2f322e !important;color: #fff;margin: 0;padding: 1em 0;text-align: center;display: block;
    font-size: 1.1em;line-height: 1.1;
    font-weight: bold;}
.el-header{background-color:#afbece;}
.el-menu-item-group__title{padding-bottom: 0;}
</style>
