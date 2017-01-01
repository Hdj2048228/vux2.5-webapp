<template>
  <div class="user" id="user">
    <div class="user-wrap">
      <div class="item title">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont">&#xe659;</i>立即登录</a>
        <a class="grow btn" href="javascript:;"><i class="iconfont">&#xe65f;</i></a>
      </div>
      <div class="box-tit item title" @click="toggle($event)">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont">&#xe655;</i>功能大全</a>
        <a class="grow btn" href="javascript:;"><i class="icon iconfont">{{show ?'&#xe65e;':'&#xe65f;'}}</i></a>
      </div>
      <div class="box-wrap" v-show="show">
        <a class="box-item" href="javascript:;">
          <i class="icon iconfont t-lightblue">&#xe657;</i>
          <em>资金管理</em>
        </a>
        <a class="box-item" href="javascript:;">
          <i class="icon iconfont t-lightgreen">&#xe657;</i>
          <em>收支明细</em>
        </a>
        <a class="box-item" href="javascript:;">
          <i class="icon iconfont t-indigo">&#xe657;</i>
          <em>统计报表</em>
        </a>
        <a class="box-item" href="javascript:;">
          <i class="icon iconfont t-red">&#xe657;</i>
          <em>财务管理</em>
        </a>
        <a class="box-item" href="javascript:;">
          <i class="icon iconfont t-lightyellow">&#xe657;</i>
          <em>系统设置</em>
        </a>
        <a class="box-item" href="javascript:;">
          <i class="icon iconfont t-pink">&#xe657;</i>
          <em>收益统计</em>
        </a>
      </div>
      <div class="item title">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont t-red">&#xe63f;</i>购物车</a>
        <a class="grow btn" href="javascript:;"><i class="icon iconfont">&#xe65f;</i></a>
      </div>
      <div class="item title">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont t-purple">&#xe65a;</i>立即充值</a>
        <a class="grow btn" href="javascript:;"><i class="icon iconfont">&#xe65f;</i></a>
      </div>
      <div class="item title">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont t-lightgreen">&#xe64c;</i>联系客服</a>
        <a class="grow btn" href="javascript:;"><i class="icon iconfont">&#xe65f;</i></a>
      </div>
      <div class="item title">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont t-blue">&#xe656;</i>意见反馈</a>
        <a class="grow btn" href="javascript:;"><i class="icon iconfont">&#xe65f;</i></a>
      </div>
      <div class="item title">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont t-green">&#xe63a;</i>技术支持</a>
        <a class="grow btn" href="javascript:;"><i class="icon iconfont">&#xe65f;</i></a>
      </div>
      <div class="item title">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont">&#xe659;</i>账户管理</a>
        <a class="grow btn" href="javascript:;"><i class="iconfont">&#xe65f;</i></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      title: '用户中心',
      show: false
    }
  },
  mounted() {
    this.$parent.title = this.title;
    this.$nextTick(function() {
      _scroll.refresh();
    });
  },
  methods: {
    toggle(event) {
      if (!event._constructed) return;
      this.show = !this.show;
      this.$nextTick(function() {
        _scroll.refresh();
      });
    }
  }
}
</script>
<style lang="sass" scoped>
// @import 'user.css';
.app-view {
  background-color: #f1f1f1;
}

.item {
  border-bottom: 1px solid #f1f1f1;
}

.item.title {
  display: -webkit-flex;
  display: flex;
  .grow {
    line-height: 40px;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    color: #333;
  }
  .tit {
    -webkit-flex-grow: 9;
    flex-grow: 9;
    text-indent: 5px;
    .icon {
      padding-right: 5px;
    }
  }
  .btn {
    text-align: center;
  }
  .icon {
    display: inline-block;
    text-align: center;
    font-size: 18px;
    color: #333;
  }
}

.user-login {
  background-color: #fff;
}


.box-wrap {
  -webkit-transition: height.3s;
  transition: height .3s;

  display: -webkit-flex;
  display: flex;

  flex-wrap:-webkit-wrap;
  flex-wrap:wrap;
  .box-item{
    width: 33%;
    padding-top: 10px;
    text-align: center;
    color: #f90;

    -webkit-flex-grow: 1;
    flex-grow: 1;
  }
  em {
    display: block;
    font-size: 13px;
    color: #666;
    height: 30px;
    line-height: 30px;
  }
  .icon {
    height: 70px;
    width: 70px;
    display: block;
    margin: 0 auto;
    font-size: 40px;
    line-height: 70px;
  }
}
</style>
