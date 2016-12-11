<template>
  <div class="myMenu on">
    <ul class="nav">
      <li><router-link to="/home"><i class="iconfont icon-shouye"></i> <em>首页</em></router-link></li>
      <li><router-link to="/product"><i class="iconfont icon-jushoucang"></i> <em>产品</em></router-link></li>
      <li><router-link to="/detail"><i class="iconfont icon-wodedingdan"></i> <em>详情</em></router-link></li>
      <li><router-link to="/user"><i class="iconfont icon-wodejuhuasuan"></i> <em>我的</em></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:"myMenu",
  data(){
    return{
        show:true
    }
  }
}
</script>

<style scoped>
  .myMenu{
    background-color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: 90;
    -webkit-transform: translate3d(0,100%,0);
    transform: translate3d(0,100%,0);
    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.3);
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }
  .myMenu.on{
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);

    -webkit-transition: .3s;
    transition: .3s;
  }
  .nav{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    position: relative;
  }
  .nav ul{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    position: relative;
  }
  .nav li{
    word-wrap: break-word;
    word-break: break-all;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 50px;
    text-align: center;
  }
  .nav i[class^="icon"]{
    vertical-align: middle;
    height: 25px;
    display: inline-block;
    width: 25px;
    font-size: 22.5px;
    color: #f90;
    margin-top: 4.5px;
  }
  .nav em{
    display: block;
    font-size: 12px;
    color: #333;
    margin-top: 2px;
  }
</style>