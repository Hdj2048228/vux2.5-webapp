<template>
  <view-box class="book" bodyPaddingBottom="60px" bodyPaddingTop="0">

    <x-header title="订单详情"
              :left-options="{showBack:true,backText:'返回'}"
              :right-options="{showMore: true}"
              @on-click-more="showMenus = true">
    </x-header>

    <Group class="status">
      <cell :title="'订单状态'" :value="status"></cell>
    </Group>

    <group class="dispatch" :title="'订单信息'">
      <cell :title="'订单号'" :value="'RY17082301728'" :border-intent="false"></cell>
      <cell :title="'生成时间'" :value="'2017-10-19 17:20:40'"></cell>
    </group>

    <group-title>商品清单</group-title>
    <grid :cols="3">
      <grid-item :label="'2X'" v-for="i in 6" :key="i">
        <img slot="icon" src="../assets/logo.png">
      </grid-item>
    </grid>

    <group class="dispatch" :title="'商品金额'">
      <cell :title="'折扣'" :value="'0'" :border-intent="false"></cell>
      <cell :title="'总金额'" :value="totalMoney | currency"></cell>
    </group>

    <group class="dispatch" :title="'配送'">
      <cell
        is-link
        :title="'支付配送'"
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001">
      </cell>

      <template v-if="showContent001">
        <cell :title="'支付方式'" :value="'在线支付'" :border-intent="false"></cell>
        <cell :title="'快递公司'" :value="'随机'"></cell>
      </template>
    </group>

    <div transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>

    <tabbar v-if="showTabbar">
      <tabbar-item selected>
        <span slot="label">合计：{{totalMoney | currency}}</span>
      </tabbar-item>
      <tabbar-item @on-item-click="go('payList')">
        <span slot="label">提交订单</span>
      </tabbar-item>
    </tabbar>

  </view-box>
</template>

<script>
  import {
    ViewBox,
    XHeader,
    FormPreview,
    TransferDom,
    Actionsheet,
    Grid,
    GridItem,
    Group,
    GroupTitle,
    Cell,
    CellBox,
    Tab,
    TabItem,
    Tabbar,
    TabbarItem
  } from 'vux';
  export default {
    name: 'book',
    components: {
      ViewBox,
      XHeader,
      FormPreview,
      TransferDom,
      Actionsheet,
      Cell,
      Group,
      GroupTitle,
      CellBox,
      Grid,
      GridItem,
      Tab,
      TabItem,
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        totalMoney: 350,
        status: '待支付',
        showTabbar: false,
        showContent001: false,
        showMenus: false,
        menus: {
          menu1: '购物车',
          menu2: '订单详情'
        },
        list: [{
          label: '订单号',
          value: 'RY17082301727'
        }, {
          label: '商品',
          value: '电动打蛋机'
        }, {
          label: '标题标题',
          value: '名字名字名字'
        }, {
          label: '标题标题',
          value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
        }],
        buttons1: [{
          style: 'default',
          text: '查看订单',
          link: '/car'
        }, {
          style: 'primary',
          text: '再次购买',
          link: '/car'
        }],
      }
    },
    mounted(){
      // 默认的
      this.status = '待支付';

      // 购物车->过来的
      (this.$route.query.src === 'car') && (this.status = '待提交');

      // 订单列表->过来的
      (this.$route.query.src === 'books') && (this.status = '已支付');

      (this.status === '待支付') && (this.showTabbar = true);
      (this.status === '待提交') && (this.showTabbar = true);
      (this.status === '已支付') && (this.showTabbar = false);
    },
    methods: {}
  }
</script>

<style lang="less">
  .book {
    .vux-form-preview {
      margin-top: 10px;
    }
    .weui-cells__title {
      font-size: 12px;
    }
    .status {
      .weui-cells {
        margin-top: 0;
      }
      .vux-label {
        color: #888;
        font-size: 13px;
      }
      .weui-cell__ft {
        color: red;
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
    .weui-tabbar {
      background-color: #fff;
      .weui-tabbar__item {
        &:last-child {
          background-color: #32beff;
          span {
            color: #fff;
          }
        }
      }
    }
  }
</style>
