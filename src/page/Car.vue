<template>
  <view-box class="car" bodyPaddingBottom="50px" bodyPaddingTop="0">

    <x-header title="购物车"
              :left-options="{showBack:true,backText:'返回'}"
              :right-options="{showMore: true}"
              @on-click-more="showMenus = true">
    </x-header>

    <grid class="vux-grid-list" v-for="(item,index) in panel_list" @on-item-click="onItemClick(item.id)" :key="index">
        <a href="javascript:;" class="weui-grid" style="width: 50%;">
          <img class="grid-pic" src="http://183.134.74.90/group1/M00/00/04/wKgBCVljaDSASUb0AAQas3XpTfw354.png">
        </a>
        <a href="javascript:;" class="weui-grid" style="width: 50%;">
          <div class="grid-padding">
            <p>烟雾传感器</p>
            <p>型号： {{item.type}}</p>
            <p>价格：{{item.price}}</p>
            <inline-x-number class="weui-num" :min="0" :max="99"
                             @on-change="change(item,index,$event)"
                             v-model="item.num">
            </inline-x-number>
          </div>
        </a>
    </grid>

    <div transfer-dom>
      <confirm v-model="show"
               @on-confirm="onConfirm">
        <p style="text-align:center;">确定删除吗？</p>
      </confirm>
    </div>

    <div transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>

    <tabbar>
      <tabbar-item selected>
        <span slot="label">合计：{{totalMoney | currency}}</span>
      </tabbar-item>
      <tabbar-item @on-item-click="go('book',{src:'car'})">
        <span slot="label">结算</span>
      </tabbar-item>
    </tabbar>

  </view-box>
</template>

<script>
  import {
    ViewBox,
    XHeader,
    Grid,
    GridItem,
    GroupTitle,
    Group,
    Confirm,
    TransferDom,
    Actionsheet,
    InlineXNumber,
    Tabbar,
    TabbarItem
  } from 'vux';
  import {mapState, mapMutations, mapGetters, mapActions} from "vuex";

  export default {
    name: 'car',
    components: {
      ViewBox,
      XHeader,
      Grid,
      GridItem,
      GroupTitle,
      Group,
      Confirm,
      TransferDom,
      Actionsheet,
      InlineXNumber,
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        showMenus: false,
        menus: {
          menu1: '购物车',
          menu2: '订单详情'
        },
        totalMoney: 0,
        itemIndex: 0,
        delIndex: 0,
        show: false,
        panel_type: '5',
        panel_list: [{
          title: '测试标题',
          type: 'RY119',
          price: 50,
          num: 1,
          desc: 'description',
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          url: {
            path: '/car',
            replace: false
          }
        }, {
          title: '测试标题',
          type: 'RY119',
          price: 50,
          num: 1,
          desc: 'description',
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          url: {
            path: '/car',
            replace: false
          }
        }, {
          title: '测试标题',
          type: 'RY119',
          price: 50,
          num: 1,
          desc: 'description',
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          url: {
            path: '/car',
            replace: false
          }
        }, {
          title: '测试标题',
          type: 'RY119',
          price: 50,
          num: 1,
          desc: 'description',
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          url: {
            path: '/car',
            replace: false
          }
        }, {
          title: '测试标题',
          type: 'RY119',
          price: 50,
          num: 1,
          desc: 'description',
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          url: {
            path: '/car',
            replace: false
          }
        }]
      }
    },
    mounted(){

    },
    methods: {
      toggle(index){
        this.curr = index;
      },
      change(item, index, event){// 商品数改变
        this.itemIndex = index;
        item.num = event;
        if (event <= 0) {
          this.show = true;
          this.delIndex = index;
        }
        this.gross();
      },
      delGoods(index){// 删除商品
        this.itemIndex = index;
        this.panel_list.splice(this.itemIndex, 1);
      },
      gross(){// 计算总金额
        this.totalMoney = 0;
        this.panel_list.forEach(item => {
          if (item.price >= 1 && item.num >= 1) {
            this.totalMoney += item.price * item.num;
          }
        });
      },
      onConfirm () {
        this.delGoods(this.delIndex);
      }
    }
  }
</script>

<style lang="less">
  .car {
    .weui-grids {
      padding-bottom: 20px;
      &:after,
      &:before {
        content: normal;
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
    .vux-grid-list {
      background-color: #fff;
      overflow: hidden;
      position: relative;
      &:after {
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
    .weui-num {
      padding: 0;
      &:before {
        border: none;
      }
      .vux-number-selector {
        height: 18px;
        font-size: 16px;
        line-height: 18px;
      }
      .vux-number-input {
        height: 18px;
        font-size: 14px;
      }
      svg {
        width: 14px;
        height: 14px;
      }
    }
    .vux-number-input {
      width: 40px !important;
    }
    .weui-cells__title {
      margin: 0;
      padding: 10px;
      position: relative;
      span {
        padding-left: 10px;
        border-left: 3px solid cornflowerblue;
      }
      &:after {
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
      &:after {
        border-bottom: none;
      }
      &:before {
        content: normal;
      }
      .grid-pic {
        width: 100%;
        display: block;
      }
      .grid-padding {
        padding: 0;
      }
      p {
        line-height: 22px;
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>
