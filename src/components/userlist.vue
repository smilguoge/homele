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
      <span>{{realname}}</span>
    </el-header>
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="realname"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="idType"
        label="身份证">
      </el-table-column>
    </el-table>


</el-container>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data() {
      return {tableData: []
}},
created(){
this.$store.dispatch('GET_USERLIST').then(()=>{
  //console.log(this.$store.state.userlist)
 this.tableData=this.$store.state.userlist
})
},
 computed: {
   ...mapState({
     realname:state=>state.userinfo.realname,
     age:state=>state.userinfo.idType
   })
    },



        }
</script>

<style>
</style>
