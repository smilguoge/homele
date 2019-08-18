<template>
 <footer class="clear">
  <div class="foot-cont clear">
    <div class="foot-left">
      <p class="psty1">© 2019 上海玄霆娱乐信息科技有限公司版权所有</p>
      <p>增值电信业务经营许可证：沪B2-20080046-23</p>
      <p>舞弊监督举报 | 舞弊举报电话：021-61870509 | 内容举报电话：010-59357051</p>
  </div>
    <div class="foot-right">
      <a href="" class="wx-icon">阅文集团官方微信公众号</a>
      <a href="" class="wb-icon">阅文集团官方微博</a>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  data:function(){
    return {}
  },

}
</script>

<style>
footer{background-color: #191e22;color:#fff;}
.foot-cont{
    width: 1220px;
    margin-left: auto;
    margin-right: auto;
}
.foot-left{float: left;}
.foot-right{float:right;margin-top: 35px;}
.wx-icon,.wb-icon{
    display: inline-block;
    width: 44px;
    height: 44px;
    background: url(../images/icons-share.png) no-repeat;
    background-size: 44px 90px;
    font-size: 0;
    line-height: 0;
    color: transparent;
    vertical-align: middle;}
.clear::after{display: block;clear: both;height: 0;content: '';}
.wb-icon{
    background-position: 0 -45px;
    height: 45px;
}
</style>
