<template>
  <div class="user" id="user">
    <div class="user-wrap">
      <div class="user-item title">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont">&#xe659;</i>立即登录</a>
        <a class="grow btn" href="javascript:;"><i class="iconfont">&#xe65f;</i></a>
      </div>
      <div class="box">
        <div class="user-item title" @click="toggle($event)">
          <a class="grow tit" href="javascript:;"><i class="icon iconfont">&#xe655;</i>功能大全</a>
          <a class="grow btn" href="javascript:;"><i class="icon iconfont">{{show ?'&#xe65e;':'&#xe65f;'}}</i></a>
        </div>
        <div class="user-item-wrap" v-show="show">
          <a class="btn" href="javascript:;">
            <i class="icon iconfont t-lightblue">&#xe657;</i>
            <em class="txt">资金管理</em>
          </a>
          <a class="btn" href="javascript:;">
            <i class="icon iconfont t-lightgreen">&#xe657;</i>
            <em class="txt">收支明细</em>
          </a>
          <a class="btn" href="javascript:;">
            <i class="icon iconfont t-indigo">&#xe657;</i>
            <em class="txt">统计报表</em>
          </a>
          <a class="btn" href="javascript:;">
            <i class="icon iconfont t-red">&#xe657;</i>
            <em class="txt">财务管理</em>
          </a>
          <a class="btn" href="javascript:;">
            <i class="icon iconfont t-lightyellow">&#xe657;</i>
            <em class="txt">系统设置</em>
          </a>
          <a class="btn" href="javascript:;">
            <i class="icon iconfont t-pink">&#xe657;</i>
            <em class="txt">收益统计</em>
          </a>
        </div>
      </div>
      <div class="box">
        <div class="user-item title" @click="toggle($event)">
          <a class="grow tit" href="javascript:;"><i class="icon iconfont t-red">&#xe63f;</i>购物车</a>
          <a class="grow btn" href="javascript:;"><i class="icon iconfont">&#xe65f;</i></a>
        </div>
        <div class="user-item-wrap" v-show="show">
          <a class="btn" href="javascript:;">
            <i class="icon iconfont t-lightblue">&#xe685;</i>
            <em class="txt">资金管理</em>
          </a>
          <a class="btn" href="javascript:;">
            <i class="icon iconfont t-lightgreen">&#xe685;</i>
            <em class="txt">收支明细</em>
          </a>
          <a class="btn" href="javascript:;">
            <i class="icon iconfont t-indigo">&#xe685;</i>
            <em class="txt">统计报表</em>
          </a>
          <a class="btn" href="javascript:;">
            <i class="icon iconfont t-red">&#xe685;</i>
            <em class="txt">财务管理</em>
          </a>
          <a class="btn" href="javascript:;">
            <i class="icon iconfont t-lightyellow">&#xe685;</i>
            <em class="txt">系统设置</em>
          </a>
          <a class="btn" href="javascript:;">
            <i class="icon iconfont t-pink">&#xe685;</i>
            <em class="txt">收益统计</em>
          </a>
        </div>
      </div>
      <div class="user-item title">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont t-purple">&#xe65a;</i>立即充值</a>
        <a class="grow btn" href="javascript:;"><i class="icon iconfont">&#xe65f;</i></a>
      </div>
      <div class="user-item title">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont t-lightgreen">&#xe64c;</i>联系客服</a>
        <a class="grow btn" href="javascript:;"><i class="icon iconfont">&#xe65f;</i></a>
      </div>
      <div class="user-item title">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont t-blue">&#xe656;</i>意见反馈</a>
        <a class="grow btn" href="javascript:;"><i class="icon iconfont">&#xe65f;</i></a>
      </div>
      <div class="user-item title">
        <a class="grow tit" href="javascript:;"><i class="icon iconfont t-green">&#xe63a;</i>技术支持</a>
        <a class="grow btn" href="javascript:;"><i class="icon iconfont">&#xe65f;</i></a>
      </div>
      <div class="user-item title">
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
      this.initScroll();
    },
    methods: {
      toggle(event) {
        if (!event._constructed) return;
        // this.show = !this.show;
        var info = event.currentTarget.parentNode.children[1];
        if (info.style.display == 'none') {
          info.style.display = 'block'
        } else {
          info.style.display = 'none'
        }
        this.$nextTick(function() {
          user_scroll.refresh();
        });
      },
      initScroll() {
        window.user_scroll = new this.BScroll('#user', {
          preventDefault: true,
          click: true
        });
      }
    }
  }
</script>