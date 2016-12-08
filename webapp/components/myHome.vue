<template>
  <div class="home-wrap">
    <my-header :title="title"></my-header>
    <div class="home scroll-box">
      <div class="notice">
        <i class="icon-shengyin"></i>
        <em>新手专享</em>
      </div>
      <div class="banner">
        <img src="../assets/01.jpg" alt="logo">
      </div>
      <div class="menu-wrap">
        <div class="menu-item bg-red">
          <i class="icon-rocketfill"></i>
          <div class="item-in">
            <h2>累计交易量</h2>
            <p>602,130,619元</p>
          </div>
        </div>
        <div class="menu-item bg-deeporange">
          <i class="icon-friendfill"></i>
          <div class="item-in">
            <h2>投资人次</h2>
            <p>110,545人</p>
          </div>
        </div>
        <div class="menu-item bg-deeppurple">
          <i class="icon-sponsorfill"></i>
          <div class="item-in">
            <h2>新手专享</h2>
            <p>注册送99元红包</p>
          </div>
        </div>
        <div class="menu-item bg-blue">
          <i class="icon-friendfill"></i>
          <div class="item-in">
            <h2>注册用户</h2>
            <p>268,603人</p>
          </div>
        </div>
      </div>

      <div class="brand bg-green">
        <i class="icon-service fl"></i>
        <h2 class="fl">金融学堂</h2>
        <p class="fl ml20">理财难题 | 菜鸟必修</p>
      </div>

      <div class="menu-wrap">
        <div push="list2"  class="menu-item bg-lightgreen">
          <i class="icon-rocketfill"></i>
          <div class="item-in">
            <h2>八戒通宝</h2>
            <p>智能理财,存取灵活</p>
          </div>
        </div>
        <div  class="menu-item bg-purple item-max">
          <i class="icon-choicenessfill icon"></i>
          <div class="item-in">
            <h2>五大特色</h2>
            <h2>保障收益</h2>
          </div>
        </div>
        <div push="list2"  class="menu-item bg-teal">
          <i class="icon-sponsorfill"></i>
          <div class="item-in">
            <h2>投资理财</h2>
            <p>按日付息,到期还本</p>
          </div>
        </div>
      </div>

      <div class="reg-wrap">
        <p><input type="text" placeholder="请输入姓名"></p>
        <p><input type="number" placeholder="请输入手机号"></p>
        <p><a href="javascript:;" class="reg-submit">立即加入</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
import myHeader from './myHeader.vue';
export default {
  name: 'home',
  components:{ myHeader },
  data(){
    return{
      title:'八戒宝',
      show:false,
      count:10
    }
  },
  computed: {
    ...mapState(['count'])
  },
  methods:{
    ...mapMutations([
        'add',
        'reduce'
      ]),
    ...mapActions([
        'addPlus'
      ]),
    ...mapActions({
        reducePlus:'reducePlus'
    })
  }
}
</script>

<style scoped>
  .home-wrap{}
  .banner img{
    display: block;
    width: 100%;
    max-height: 100%;
  }
  .notice{
    height: 30px;
    line-height: 30px;
    background-color: #ffc;
  }
  .notice em{
    color: #f96;
  }
  .notice i{
    padding-left: 10px;
    display: inline-block;
    position: relative;
    z-index: 11;
    font-family: "iconfont";
    color: #f99;
    background-color: inherit;
    width: 25px;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
    float: left;
  }
  .menu-wrap{
    overflow:hidden;
  }
  .menu-item{
    float:left;
    width: 47%;
    height: 90px;
    margin-left: 2%;
    margin-top: 2%;
    color: #fff;
  }
  .menu-item i,
  .item-in{
    float:left;
  }
  .menu-item i{
    width: 30%;
    height: 90px;
    line-height: 90px;
    text-align: center;
    font-size: 40px;
  }
  .item-in{
    margin-top: 25px;
  }
  .item-max{
    height: 189px;
    float:right;
    margin-right: 2%;
    text-align: center;
  }
  .item-max .icon,
  .item-max .item-in{
    width: 100%;
  }
  .item-max .item-in{
    margin:0;
  }
  .item-in h2{
    font-size: 18px;
  }
  .item-in p{
    font-size: 12px;
  }
  .item-max .icon{
    font-size: 70px;
  }
  .brand{
    width: 96%;
    height: 60px;
    line-height: 60px;
    margin: 10px auto;
    color: #fff;
    overflow:hidden;
  }
  .brand i{
    width: 50px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 40px;
  }
  .reg-wrap{
    text-align: center;
  }
  .reg-submit,
  .reg-wrap input{
    display: block;
    margin:10px auto;
    width: 70%;
    height: 18px;
    line-height: 18px;
    border-radius: 3px;
    padding:5px 10px;
  }
  .reg-wrap input{
    border:1px solid #F47F16;
    outline: none;
  }
  .reg-wrap input:focus{
    border:1px solid #F23030;
  }
  .reg-submit{
    color: #fff;
    background-color: #F47F16;
  }
</style>
