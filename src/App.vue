<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from '@/page/Home';
  import OrderBook from '@/page/OrderBook';
  import OrderBooks from '@/page/OrderBooks';
  import Car from '@/page/Car';
  import User from '@/page/User';
  import List from '@/page/List';
  import Search from '@/page/Search';
  import Detail from '@/page/Detail';
  import PayList from '@/page/PayList';
  import Location from '@/page/Location';
  import LocationForm from '@/page/LocationForm';

  export default {
    name: 'app',
    components: {
      Home,
      List,
      Search,
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
    background-color: #EFEFF4;
  }

  body{
    -webkit-box-shadow: 5px 0 20px -5px rgba(0, 0, 0, 0.5), -5px 0 20px -5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 5px 0 20px -5px rgba(0, 0, 0, 0.5), -5px 0 20px -5px rgba(0, 0, 0, 0.5);
    box-shadow: 5px 0 20px -5px rgba(0, 0, 0, 0.5), -5px 0 20px -5px rgba(0, 0, 0, 0.5);
  }

  #app{
    height: 100%;;
    overflow: hidden;
  }

  .weui-tab {
    height: 100%;
    background-color: #EFEFF4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;

    .weui-tab__panel{

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

    .weui-grids{
      background-color: #fff;
    }

    .weui-media-box__hd {
      width: 70px;
      height: 52px;
      line-height: 52px;
    }
  }

  .weui-tabbar {
    max-width: 414px;
    background-color: #fff!important;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    position: fixed!important;
    left: 50%;
    z-index: 99999999!important;
  }

  // 遮罩
  .weui-mask_transparent {
    width: 414px !important;
    left: 50% !important;
    -webkit-transform: translate(-50%, 0) !important;
    -moz-transform: translate(-50%, 0) !important;
    -ms-transform: translate(-50%, 0) !important;
    transform: translate(-50%, 0) !important;
  }

  // actionsheet
  .weui-actionsheet {
    width: 414px !important;
    left: 50% !important;
    -webkit-transform: translate(-50%, 100%) !important;
    -moz-transform: translate(-50%, 100%) !important;
    -ms-transform: translate(-50%, 100%) !important;
    transform: translate(-50%, 100%) !important;
  }

  // actionsheet
  .weui-actionsheet_toggle {
    -webkit-transform: translate(-50%, 0) !important;
    -moz-transform: translate(-50%, 0) !important;
    -ms-transform: translate(-50%, 0) !important;
    transform: translate(-50%, 0) !important;
  }
</style>
