<template>
  <view-box class="home" :bodyPaddingTop="0" bodyPaddingBottom="60px">

    <div class="top-header" ref="topHeader">
      <div class="logo">
        <img src="/static/img/logo.png" alt="logo">
      </div>
      <search
        v-model="searchValue"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search">
      </search>
      <div class="btn-search" @click="onLogin" v-if="!$store.state.vue_token">登录</div>
      <div class="btn-search" @click="onLogout" v-if="$store.state.vue_token">退出</div>
    </div>
    <swiper loop auto :list="focus_list" v-model="focus_index" @on-index-change="swiperChange"></swiper>

    <marquee :interval="3000">
      <marquee-item v-for="(item,index) in marquee_list" :key="index">{{item.title}}</marquee-item>
    </marquee>

    <grid :rows="2">
      <group-title>
        <span>商品列表</span>
      </group-title>
      <grid-item v-for="(item,index) in goods_list" :key="index" @on-item-click="go('detail',{id:item.id})">
        <img class="grid-pic" :src="item.pic">
        <div class="grid-padding">
          <p>{{item.title}}</p>
          <p>价格：{{item.price | currency}}</p>
          <p v-for="(item,i) in goods_list.params" :key="i">{{item.label}} {{item.value}}</p>
        </div>
      </grid-item>
    </grid>

    <tabbar>
      <tabbar-item link="/home" selected>
        <x-icon slot="icon" type="android-home" size="27" style="fill:#32beff;"></x-icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/list">
        <x-icon slot="icon" type="navicon" size="27" style="fill:#999;"></x-icon>
        <span slot="label">列表</span>
      </tabbar-item>
      <tabbar-item link="/cart">
        <x-icon slot="icon" type="ios-cart" size="27" style="fill:#999;"></x-icon>
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/user">
        <x-icon slot="icon" type="person" size="27" style="fill:#999;"></x-icon>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>

  </view-box>
</template>

<script>
  import {
    ViewBox, Search, Swiper, Marquee, MarqueeItem, Cell,
    Tabbar, TabbarItem, Grid, GridItem, Group, GroupTitle
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'home',
    components: {
      ViewBox, Search, Swiper, Marquee, MarqueeItem, Cell,
      Tabbar, TabbarItem, Grid, GridItem, Group, GroupTitle
    },
    data () {
      return {
        searchValue: '',
        focus_index: 0
      }
    },
    computed: {
      ...mapGetters([
        'focus_list',
        'marquee_list',
        'goods_list'
      ])
    },
    created(){
      this.$store.dispatch('home_focus');
      this.$store.dispatch('home_marquee');
      this.$store.dispatch('home_goods');
    },
    mounted(){
    },
    methods: {
      onLogin(){
        this.$router.push({
          name: 'signUp'
        });
      },
      onLogout(){
        this.$store.commit('LOGOUT');
        this.$router.replace({
          path: 'signUp'
        });
      },
      onSubmit (key) {
        this.$refs.search.setBlur();

        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: '正在搜索'
        });

        this.$router.push({
          name: 'search2',
          query: {
            key: key
          }
        });
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      },
      setFocus(){
      },
      setBlur(){
      },
      swiperChange(){
        console.log("swiperChange");
      }
    }
  }
</script>

<style lang="less">
  .home {
    .top-header {
      height: 44px;
      padding: 0 40px;
      position: relative;
      .logo,
      .btn-search {
        text-align: center;
        position: absolute;
      }
      .logo {
        width: 24px;
        height: 24px;
        top: 10px;
        left: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .btn-search {
        width: 40px;
        height: 28px;
        line-height: 28px;
        top: 8px;
        right: 5px;
        font-size: 13px;
      }
    }
    .vux-marquee-box {
      li {
        font-size: 14px;
      }
    }
    .weui-cells__title {
      margin: 0;
      padding: 10px;
      position: relative;
      span {
        padding-left: 10px;
        border-left: 3px solid #32beff;
      }
      &::after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #D9D9D9;
        color: #D9D9D9;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
    }
    .weui-grid {
      .grid-pic {
        width: 100%;
        display: block;
      }
      .grid-padding {
        padding: 10px;
      }
      p {
        line-height: 20px;
        font-size: 12px;
        color: #999;
      }
    }
  }

  .vux-marquee {
    li {
      height: 40px;
      line-height: 40px;
      text-indent: 10px;
    }
  }
</style>
