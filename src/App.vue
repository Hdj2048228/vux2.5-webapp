<template>
  <view-box id="app">
    <transition name="slide" mode="in-out">
      <router-view class="app-view"></router-view>
    </transition>
  </view-box>
</template>

<script>
  import {
    XHeader,
    ViewBox,
    Tabbar,
    TabbarItem
  } from 'vux';
  import Home from '@/page/Home';
  import OrderBook from '@/page/OrderBook';
  import OrderBooks from '@/page/OrderBooks';
  import Car from '@/page/Car';
  import User from '@/page/User';
  import Detail from '@/page/Detail';
  import PayList from '@/page/PayList';
  import Location from '@/page/Location';
  import LocationForm from '@/page/LocationForm';

  export default {
    name: 'app',
    components: {
      XHeader, ViewBox, Tabbar, TabbarItem,
      Home,
      User,
      Car,
      Detail,
      PayList,
      OrderBook,
      OrderBooks,
      Location,
      LocationForm
    },
    methods: {}
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  html, body {
    height: 100%;
    max-width: 414px;
    margin: 0 auto;
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  .vux-header {
    background-color: #32beff !important;
    .vux-header-more,
    .vux-header-back,
    .vux-header-left,
    .vux-header-right {
      color: #fff !important;
    }
    .left-arrow:after,
    .left-arrow:before {
      color: #fff !important;
      border-color: #fff !important;
    }
  }

  .weui-tab {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;

    .weui-media-box__hd {
      width: 70px;
      height: 52px;
      line-height: 52px;
    }

    .weui-tabbar {
      max-width: 414px;
      transform: translateX(-50%);
      position: fixed;
      left: 50%;
    }
  }

  .weui-tab__panel {
    background-color: #EFEFF4;
  }

  .weui-mask_transparent {
    width: 414px !important;
    left: 50% !important;
    -webkit-transform: translate(-50%, 0) !important;
    -moz-transform: translate(-50%, 0) !important;
    -ms-transform: translate(-50%, 0) !important;
    transform: translate(-50%, 0) !important;
  }

  .weui-actionsheet {
    width: 414px !important;
    left: 50% !important;
    -webkit-transform: translate(-50%, 100%) !important;
    -moz-transform: translate(-50%, 100%) !important;
    -ms-transform: translate(-50%, 100%) !important;
    transform: translate(-50%, 100%) !important;
  }

  .weui-actionsheet_toggle {
    -webkit-transform: translate(-50%, 0) !important;
    -moz-transform: translate(-50%, 0) !important;
    -ms-transform: translate(-50%, 0) !important;
    transform: translate(-50%, 0) !important;
  }

  .app-view {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 999;
  }

  .slide-enter-active {
    -webkit-animation: slide-in .3s;
    animation: slide-in .3s;
  }

  .slide-leave-active {
    /* -webkit-animation: slide-out 60ms; */
    /* animation: slide-out 60ms; */
  }

  @-webkit-keyframes slide-in {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slide-in {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @-webkit-keyframes slide-out {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes slide-out {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
</style>
