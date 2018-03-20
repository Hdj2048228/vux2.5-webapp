<template>
  <div id="app">
    <view-box ref="viewBox">
      <x-header :title="title()" v-if="!isWeiXin()">
        <div slot="overwrite-left" class="left-arrow" @click="go('-1')"></div>
        <x-icon slot="right" @click="go('signIn')" type="person-add" style="fill:#fff;"></x-icon>
      </x-header>
      <div>
        <transition :name="transitionName" mode="in-out">
          <router-view class="app-view"></router-view>
        </transition>
      </div>
    </view-box>
  </div>
</template>

<script>
  import {
    XHeader,
    ViewBox
  } from 'vux';
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
  import Yetai from '@/page/Yetai';
  import YetaiEdit from '@/page/YetaiEdit';
  import Category from '@/page/Category';
  import CategoryEdit from '@/page/CategoryEdit';
  import RecommendProduct from '@/page/RecommendProduct';
  import RecommendProductEdit from '@/page/RecommendProductEdit';

  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'app',
    components: {
      Home,
      ViewBox,
      Yetai,
      YetaiEdit,
      Category,
      CategoryEdit,
      RecommendProduct,
      RecommendProductEdit,
      XHeader,
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
    data() {
      return {
        transitionName: 'vux-pop-out-enter'
      }
    },
    created() {

    },
    computed: {
      ...mapState({
        route: state => state.route,
        path: state => state.route.path,
        // deviceready: state => state.app.deviceready,
        // demoTop: state => state.vux.demoScrollTop,
        // isLoading: state => state.vux.isLoading,
        // direction: state => state.vux.direction
      })
    },
    watch: {
      '$route'(to, from) {
        const toDepth = to.path.split('/');
        console.log(toDepth + 'toDepth')

        const fromDepth = from.path.split('/');
        if (fromDepth[1] === "book" || fromDepth[1] === "books" || fromDepth[1] === "payList" || fromDepth[1] === "detail" || fromDepth[1] === "list" || fromDepth[1] === "location" || fromDepth[1] === "locationForm") {
          this.transitionName =  'vux-pop-in-enter' // 'slide-right';
        } else {
          this.transitionName = 'vux-pop-out-enter';
        }
      }
    },
    methods: {
      isWeiXin() {
        const ua = window.navigator.userAgent.toLowerCase();
        // console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
          return true;
        } else {
          return false;
        }
      },
      title() {
        console.log(JSON.stringify(this.route.meta.title))
        return this.route.meta.title || this.route.name
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  html, body {
    height: 100%;
    /*max-width: 414px;*/
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

  .vux-search-fixed {
    position: absolute !important;
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
      background-color: rgb(88, 91, 101) !important;
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
    /*width: 414px !important;*/
    left: 50% !important;
    -webkit-transform: translate(-50%, 0) !important;
    -moz-transform: translate(-50%, 0) !important;
    -ms-transform: translate(-50%, 0) !important;
    transform: translate(-50%, 0) !important;
  }

  // 遮罩
  .weui-mask {
    /*width: 414px !important;*/
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
  /*.app-view {*/
  /*position: absolute !important;*/
  /*top: 0;*/
  /*bottom: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*z-index: 999;*/
  /*}*/
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
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
