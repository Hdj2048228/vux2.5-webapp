<template>
  <view-box class="search" :bodyPaddingTop="PaddingTop" bodyPaddingBottom="60px">

    <div class="top-header">
      <div class="logo" @click="go('home')">
        <img src="/static/img/logo.png" alt="logo">
      </div>
      <search
        v-model="searchValue"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search">
        <!--一直报错??-->
      </search>
      <div class="btn-search">搜索</div>
    </div>

    <grid :rows="2">
      <group-title>
        <span>商品列表</span>
      </group-title>
      <grid-item v-for="(item,index) in panel_list" @on-item-click="go('detail',{id:item.id})" :key="index">
        <img class="grid-pic" :src="item.pic">
        <div class="grid-padding">
          <p>{{item.title}}</p>
          <p>价格：{{item.price}}</p>
          <p v-for="item in detail_params">{{item.label}} {{item.value}}</p>
        </div>
      </grid-item>
    </grid>

    <tabbar>
      <tabbar-item link="/home">
        <x-icon slot="icon" type="android-home" size="27" style="fill:#09bb07;"></x-icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/books">
        <x-icon slot="icon" type="clipboard" size="27" style="fill:#999;"></x-icon>
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item link="/car">
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
    ViewBox, Search, Swiper, Marquee, MarqueeItem, Tabbar,
    TabbarItem, Grid, GridItem, GroupTitle, Group, Cell
  } from 'vux';
  import {mapState, mapMutations, mapGetters, mapActions} from "vuex";

  export default {
    name: 'search2',
    components: {
      ViewBox,
      Search,
      Swiper,
      Marquee,
      MarqueeItem,
      Tabbar,
      TabbarItem,
      Grid,
      GridItem,
      GroupTitle,
      Group,
      Cell
    },
    data () {
      return {
        results: [],
        PaddingTop: 0,
        searchValue: ''
      }
    },
    computed: {
      panel_list(){
        return this.$store.getters.panel_list;
      },
      detail_params(){
        return this.$store.getters.detail_params;
      }
    },
    created(){
      this.$store.dispatch('getHomeList');
    },
    mounted(){
    },
    methods: {
      onSubmit (params) {
        this.$refs.search.setBlur();

        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: '正在搜索'
        });

        this.$router.push({
          name: 'search2',
          query: {
            params: params
          }
        });

        console.log('search',params);
      },
      onFocus () {
        this.PaddingTop = '44px';
        console.log('on focus')
      },
      onCancel () {
        this.PaddingTop = '0px';
        console.log('on cancel')
      }
    }
  }
</script>

<style lang="less">
  .search {
    .top-header{
      padding: 0 40px;
      .logo,
      .btn-search{
        text-align: center;
        position: absolute;
      }
      .logo{
        width: 24px;
        height: 24px;
        top:10px;
        left:10px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .btn-search{
        width: 40px;
        height: 28px;
        line-height: 28px;
        top:8px;
        right:5px;
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
        border-left: 3px solid #09bb07;
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

  .loading-layer {
    /*padding-bottom: 50px;*/
  }
</style>
