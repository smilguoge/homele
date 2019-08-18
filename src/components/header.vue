<template>
<div id="ywMnav" class="yw-nav"> <a href="#about" class="yw-nav-a">关于我们</a> <a href="#copyright" class="yw-nav-a">全版权运营</a> <a href="#mobile" class="yw-nav-a">移动产品</a> <a href="#brand" class="yw-nav-a">旗下品牌</a> <a href="#invest" class="yw-nav-a active">投资者关系</a> <a href="#news" class="yw-nav-a">新闻中心</a> <a href="#contact" class="yw-nav-a jsContact">联系我们</a> <a href="https://open.yuewen.com/" class="yw-nav-a hidden-reverse" target="_blank">阅文开放平台</a> </div>

</template>

<script>
export default {
  data:function(){
    return {}
  },

}
</script>

<style>
.yw-nav {
    letter-spacing: -.25em;
    z-index: 1;
    font-size: 0;
    width: 1200px;
    margin: 0 auto;
}
.yw-nav-a {
    display: inline-block;
    height: 34px;
    line-height: 34px;
    padding: 20px 20px 17px;
    letter-spacing: 0;
    font-size: 14px;
    transition: all .25s;
    color: #717678;
    text-decoration: none
}

</style>
