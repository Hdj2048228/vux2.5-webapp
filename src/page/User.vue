<template>
  <view-box class="user" bodyPaddingBottom="60px" bodyPaddingTop="0">

    <x-header title="个人中心"
              :right-options="{showMore: true}"
              @on-click-more="showMenus = true">
      <x-icon slot="overwrite-left" @click="go('home')" type="android-home" size="24" style="fill:#fff;"></x-icon>
    </x-header>

    <card :header="{title:'我的订单'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r" @click="go('books',{act:'pay'})">
          <x-icon slot="overwrite-left" type="card" size="24" style="fill:#666;"></x-icon>
          <p>待付款</p>
        </div>
        <div class="vux-1px-r" @click="go('books',{act:'wait'})">
          <x-icon slot="overwrite-left" type="android-plane" size="24" style="fill:#666;"></x-icon>
          <p>待收货</p>
        </div>
        <div @click="go('books',{act:'all'})">
          <x-icon slot="overwrite-left" type="ios-paper-outline" size="24" style="fill:#666;"></x-icon>
          <p>全部订单</p>
        </div>
      </div>
    </card>

    <card :header="{title:'我的钱包'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>0</span>
          <p>余额</p>
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <p>积分</p>
        </div>
        <div @click="go('car')">
          <span>12</span>
          <p>购物车</p>
        </div>
      </div>
    </card>

    <group class="setting" :title="'设置'">
      <cell is-link link="/location">
        <div slot="title">
          <span>设置地址</span>
        </div>
      </cell>
      <cell :title="'接收通知'" :value="'已开启'"></cell>
    </group>

    <group class="dispatch" :title="'配送'">
      <cell
        is-link
        :title="'支付配送'"
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001"></cell>

      <template v-if="showContent001">
        <cell :title="'支付方式'" :value="'在线支付'" :border-intent="false"></cell>
        <cell :title="'快递公司'" :value="'随机'"></cell>
      </template>
    </group>

    <tabbar>
      <tabbar-item link="/home">
        <x-icon slot="icon" type="android-home" size="27" style="fill:#999;"></x-icon>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/list">
        <x-icon slot="icon" type="navicon" size="27" style="fill:#999;"></x-icon>
        <span slot="label">列表</span>
      </tabbar-item>
      <tabbar-item link="/car">
        <x-icon slot="icon" type="ios-cart" size="27" style="fill:#999;"></x-icon>
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/user" selected>
        <x-icon slot="icon" type="person" size="27" style="fill:#09bb07;"></x-icon>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>

    <div transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>

  </view-box>
</template>

<script>
  import {
    ViewBox, TransferDom, Actionsheet, XHeader, Card, Tabbar, TabbarItem, GroupTitle, Group, Cell, CellBox
  } from 'vux';
  export default {
    name: 'user',
    components: {
      ViewBox, TransferDom, Actionsheet, XHeader, Card, Tabbar, TabbarItem, GroupTitle, Group, Cell, CellBox
    },
    data () {
      return {
        msg: 'Hello User',
        showContent001: false,
        showMenus: false,
        menus: {
          menu1: '购物车',
          menu2: '订单详情'
        }
      }
    },
    mounted(){
    },
    methods: {}
  }
</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';

  .user {
    .card-demo-flex {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      .vux-1px-l {
        &:before {
          content: normal;
        }
      }
      & > div {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        font-size: 12px;
        p {
          color: #666;
        }
      }
      span {
        color: #f74c31;
      }
    }
    .setting {
      .vux-label {
        color: #333;
        font-size: 14px;
      }
      .weui-cell__ft {
        font-size: 13px;
      }
    }
    .dispatch {
      .vux-tap-active {
        .vux-label {
          color: #333;
          font-size: 14px;
        }
      }
      .vux-label,
      .weui-cell__ft {
        color: #888;
        font-size: 13px;
      }
    }
    .card-demo-content01 {
      padding: 10px 0;
    }
  }
</style>
