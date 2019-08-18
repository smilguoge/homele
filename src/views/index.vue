<template>
<div class="index">
  <headerlink></headerlink>
 <router-link to='/login'>注册</router-link>
  <footerlink></footerlink>
</div>
</template>

<script>
import footerlink from '../components/footer.vue'
import headerlink from '../components/header.vue'
export default {
  name: 'App',
  data:function(){
    return {}},
  components:{headerlink,footerlink}
}
</script>

<style>
.index{
    font-size: 14px;
    font-family: Lato,'Helvetica Neue','PingFang SC','Myriad Pro','Hiragino Sans GB','microsoft yahei';
    line-height: 1.5;
}
body{margin: 0;}
.login-1{
  height: 200px;
  text-align: center;
  display: block;
}
</style>
