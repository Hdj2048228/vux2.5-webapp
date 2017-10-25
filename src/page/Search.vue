<template>
  <view-box class="search" :bodyPaddingTop="0" bodyPaddingBottom="0">

    <div class="top-header">
      <div class="logo" @click="go('home')">
        <img src="static/img/logo.png" alt="logo">
      </div>
      <search
        v-model="searchValue"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search">
        <!--一直报错?页面name不能为search-->
      </search>
      <div class="btn-search" @click="onLogin">登录</div>
    </div>

    <grid :rows="2">
      <group-title>
        <span>搜索结果</span>
      </group-title>
      <grid-item v-for="(item,index) in goods_list" @on-item-click="go('detail',{id:item.id})" :key="index">
        <img class="grid-pic" :src="item.pic">
        <div class="grid-padding">
          <p>{{item.title}}</p>
          <p>价格：{{item.price}}</p>
          <p v-for="item in goods_list.params">{{item.label}} {{item.value}}</p>
        </div>
      </grid-item>
    </grid>

  </view-box>
</template>

<script>
  import {
    ViewBox, Search, Grid, GridItem, Group, GroupTitle, Cell
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'search2',
    components: {
      ViewBox, Search, Grid, GridItem, Group, GroupTitle, Cell
    },
    data () {
      return {
        searchValue: ''
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
      onLogin(){
        this.$router.push({
          name: 'signUp'
        });
      },
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

        console.log('search', params);
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
    .top-header {
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
</style>
