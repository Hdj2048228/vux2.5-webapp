<template>
  <view-box class="list" bodyPaddingTop="0" bodyPaddingBottom="60px">

    <x-header title="商品列表"
              :left-options="{showBack:true,backText:'返回'}"
              :right-options="{showMore: true}"
              @on-click-more="menusFlag = true">
    </x-header>

    <grid :rows="2">
      <group-title>
        <span>商品列表</span>
      </group-title>
      <grid-item v-for="(item,index) in goods_list" @on-item-click="go('detail',{id:item.id})" :key="index">
        <img class="grid-pic" :src="item.pic">
        <div class="grid-padding">
          <p>{{item.title}}</p>
          <p>价格：{{item.price | currency}}</p>
          <p v-for="item in goods_list.params">{{item.label}} {{item.value}}</p>
        </div>
      </grid-item>
    </grid>

    <div transfer-dom>
      <actionsheet show-cancel
                   v-model="menusFlag"
                   :menus="common_menus"
                   @on-click-menu="onMenusClose"
                   :close-on-clicking-menu="true">
      </actionsheet>
    </div>

    <tabbar>
      <tabbar-item link="/home">
        <x-icon slot="icon" type="android-home" size="27" style="fill:#999;"></x-icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/list" selected>
        <x-icon slot="icon" type="navicon" size="27" style="fill:#32beff;"></x-icon>
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
    ViewBox, XHeader, TransferDom, Actionsheet,
    Tabbar, TabbarItem, Grid, GridItem, Group, GroupTitle
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'list',
    components: {
      ViewBox, XHeader, TransferDom, Actionsheet,
      Tabbar, TabbarItem, Grid, GridItem, Group, GroupTitle

    },
    data () {
      return {
        searchValue: '',
        focus_index: 0,
        menusFlag: false
      }
    },
    computed: {
      ...mapGetters([
        'goods_list',
        'common_menus'
      ])
    },
    created(){
      this.$store.dispatch('home_goods');
    },
    mounted(){

    },
    methods: {
      /**
       * 更多菜单
       **/
      onMenusClose (key,value) {
        switch (key) {
          case "menu1":
            this.menusFlag = false;
            this.$router.push({
              name: 'home'
            });
            break;
          case "menu2":
            this.menusFlag = false;
            this.$router.push({
              name: 'cart'
            });
            break;
          case "menu3":
            this.menusFlag = false;
            this.$router.push({
              name: 'user'
            });
            break;
          case "menu4":
            this.menusFlag = false;
            this.$router.push({
              name: 'books',
              query:{
                act:'all'
              }
            });
            break;
          case "menu5":
            this.menusFlag = false;
            this.$router.push({
              name: 'location'
            });
            break;
        }
      },
      onSubmit () {
        this.$refs.search.setBlur();
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: '正在搜索'
        })
      }
    }
  }
</script>

<style lang="less">
  .list {
    .top-header {
      padding: 0 40px;
      .logo,
      .search {
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
      .search {
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

  .loading-layer {
    /*padding-bottom: 50px;*/
  }
</style>
