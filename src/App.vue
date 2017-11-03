<template>
  <div id="app">
    <transition :name="transitionName" mode="in-out">
      <!--<keep-alive>-->
        <router-view class="app-view"></router-view>
      <!--</keep-alive>-->
    </transition>
  </div>
</template>

<script>
  import Home from '@/page/Home';
  import Search from '@/page/Search';
  import User from '@/page/User';
  import Cart from '@/page/Cart';
  import Detail from '@/page/Detail';
  import PayList from '@/page/PayList';
  import OrderBook from '@/page/OrderBook';
  import OrderBooks from '@/page/OrderBooks';
  import OrderBookInfo from '@/page/OrderBookInfo';
  import PayZhifubao from '@/page/PayZhifubao';
  import Location from '@/page/Location';
  import LocationForm from '@/page/LocationForm';
  import SignIn from '@/page/signIn';
  import SignUp from '@/page/signUp';

  export default {
    name: 'app',
    components: {
      Home,
      Search,
      User,
      Cart,
      Detail,
      PayList,
      OrderBook,
      OrderBooks,
      OrderBookInfo,
      PayZhifubao,
      Location,
      LocationForm,
      SignIn,
      SignUp
    },
    data(){
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/');
        const fromDepth = from.path.split('/');
        if(fromDepth[1]==="book" || fromDepth[1]==="books" || fromDepth[1]==="payList" || fromDepth[1]==="detail" || fromDepth[1]==="list" || fromDepth[1]==="location" || fromDepth[1]==="locationForm"){
          this.transitionName = 'slide-right';
        }else{
          this.transitionName = 'slide-left';
        }
      }
    },
    methods: {

    }
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

  body {
    -webkit-box-shadow: 5px 0 20px -5px rgba(0, 0, 0, 0.5), -5px 0 20px -5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 5px 0 20px -5px rgba(0, 0, 0, 0.5), -5px 0 20px -5px rgba(0, 0, 0, 0.5);
    box-shadow: 5px 0 20px -5px rgba(0, 0, 0, 0.5), -5px 0 20px -5px rgba(0, 0, 0, 0.5);
  }

  #app {
    height: 100%;;
    overflow: hidden;
    position: relative;
  }

  .vux-search-fixed{
    position: absolute!important;
  }

  .weui-tab {
    height: 100%;
    background-color: #EFEFF4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;

    .weui-tab__panel {

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

    .weui-grids {
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
    background-color: #fff !important;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    position: fixed !important;
    left: 50%;
    z-index: 99999999 !important;
    .weui-bar__item_on {
      .weui-tabbar__label {
        color: #999 !important;
      }
    }
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
  // 遮罩
  .weui-mask{
    width: 414px !important;
    left: 50% !important;
    -webkit-transform: translate(-50%, 0) !important;
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


  // transform
  .app-view {
    position: absolute !important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .slide-left-enter-active {
    -webkit-animation: slide-in .3s;
    animation: slide-in .3s;
  }

  .slide-right-enter-active {
    -webkit-animation: slide-out .3s;
    animation: slide-out .3s;
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

  @keyframes slide-out {
    0% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
</style>
