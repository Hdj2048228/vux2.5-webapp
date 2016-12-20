<template>
  <div class="user" id="user">
    <div class="user-wrap">
      <div class="user-login g-tit">
        <a class="btn l" href="javascript:;"><i class="iconfont">&#xe659;</i>立即登录</a>
        <a class="btn r" href="javascript:;">账户管理<i class="iconfont">&#xe65f;</i></a>
      </div>
      <div class="user-box">
        <div class="box-tit g-tit" @click="toggle">
          <a class="btn l" href="javascript:;"><i class="iconfont">&#xe655;</i>功能大全</a>
          <a class="btn r" href="javascript:;"><i class="iconfont">{{show ?'&#xe65e;':'&#xe65f;'}}</i></a>
        </div>
        <div class="box-con" v-show="show">
          <a href="javascript:;">
            <i class="iconfont t-lightblue">&#xe657;</i>
            <em>资金管理</em>
          </a>
          <a href="javascript:;">
            <i class="iconfont t-lightgreen">&#xe657;</i>
            <em>收支明细</em>
          </a>
          <a href="javascript:;">
            <i class="iconfont t-indigo">&#xe657;</i>
            <em>统计报表</em>
          </a>
          <a href="javascript:;">
            <i class="iconfont t-red">&#xe657;</i>
            <em>财务管理</em>
          </a>
          <a href="javascript:;">
            <i class="iconfont t-lightyellow">&#xe657;</i>
            <em>系统设置</em>
          </a>
          <a href="javascript:;">
            <i class="iconfont t-pink">&#xe657;</i>
            <em>收益统计</em>
          </a>
        </div>
      </div>

      <div class="user-btn g-tit">
        <a class="btn l" href="javascript:;"><i class="iconfont t-red">&#xe63f;</i>购物车</a>
        <a class="btn r" href="javascript:;"><i class="iconfont">&#xe65f;</i></a>
      </div>
      <div class="user-btn g-tit">
        <a class="btn l" href="javascript:;"><i class="iconfont t-purple">&#xe65a;</i>立即充值</a>
        <a class="btn r" href="javascript:;"><i class="iconfont">&#xe65f;</i></a>
      </div>
      <div class="user-btn g-tit">
        <a class="btn l" href="javascript:;"><i class="iconfont t-lightgreen">&#xe64c;</i>联系客服</a>
        <a class="btn r" href="javascript:;"><i class="iconfont">&#xe65f;</i></a>
      </div>
      <div class="user-btn g-tit">
        <a class="btn l" href="javascript:;"><i class="iconfont t-blue">&#xe656;</i>意见反馈</a>
        <a class="btn r" href="javascript:;"><i class="iconfont">&#xe65f;</i></a>
      </div>
      <div class="user-btn g-tit">
        <a class="btn l" href="javascript:;"><i class="iconfont t-green">&#xe63a;</i>技术支持</a>
        <a class="btn r" href="javascript:;"><i class="iconfont">&#xe65f;</i></a>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name:"user",
  components:{ BScroll },
  data(){
    return{
        title:'用户中心',
        show:false
    }
  },
  mounted(){
    this.$parent.title=this.title;
    this.initScroll();
  },
  methods:{
    initScroll(){
      new BScroll(document.getElementById('user'), {
          preventDefault:true,
          click:true
      });
    },
    toggle(){
      this.show =! this.show;
      this.$nextTick(function(){
          this.initScroll();
      });
    }
  }
}
</script>

<style lang="sass" scoped>
  // @import 'user.css';
  .app-view{
    background-color: #f1f1f1;
  }
  .g-tit {
    .iconfont{
      display: inline-block;
      text-align: center;
      font-size: 18px;
      color: #333;
    }
    .r,
    .l{
      width: auto;
      font-size: 14px;
      color: #333;
    }
    .l{
      .iconfont{
        padding-right:5px;
      }
    }
    .r{
      .iconfont{
        font-size: 14px;
      }
    }
  }
  .user-login{
    background-color: #fff;
    margin-bottom: 10px;
  }
  .user-box{
    background-color: #fff;
    margin-bottom: 10px;
    .box-tit{
      border-bottom: 1px solid #f1f1f1;
    }
    .box-con{
      -webkit-transition: height.3s;
      transition: height .3s;
      overflow:hidden;
      a{
        float:left;
        width: 33%;
        padding-top: 10px;
        text-align: center;
        color:#f90;
      }
      em{
        display: block;
        font-size: 13px;
        color: #666;
        height: 30px;
        line-height: 30px;
      }
      .iconfont{
        height: 70px;
        width: 70px;
        display: block;
        margin: 0 auto;
        font-size: 40px;
        line-height: 70px;
      }
    }
  }
  .user-btn{
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
  }
</style>