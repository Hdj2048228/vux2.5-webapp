<template>
  <div class="PayList">
    <x-header title="支付方式"
              :left-options="{showBack:true,backText:'返回'}"
              :right-options="{showMore: true}"
              @on-click-more="showMenus = true">
    </x-header>

    <panel :list="[]" :type="'1'"></panel>

    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
        <a href="javascript:void(0);" @click="alipay" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd"><img src="static/img/alipay.png" alt="" class="weui-media-box__thumb"></div>
          <div class="weui-media-box__bd"><h4 class="weui-media-box__title">支付宝支付</h4>
            <p class="weui-media-box__desc">支付宝、支付托</p></div>
        </a>
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd"><img src="static/img/wechat.png" alt="" class="weui-media-box__thumb"></div>
          <div class="weui-media-box__bd"><h4 class="weui-media-box__title">微信支付</h4>
            <p class="weui-media-box__desc">即将开通</p></div>
        </a>
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd"><img src="static/img/visa.png" alt="" class="weui-media-box__thumb"></div>
          <div class="weui-media-box__bd"><h4 class="weui-media-box__title">信用卡</h4>
            <p class="weui-media-box__desc">即将开通</p></div>
        </a>
      </div>
      <div class="weui-panel__ft"></div>
    </div>

    <div transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
  import {
    XHeader,
    TransferDom,
    Actionsheet,
    Panel
  } from 'vux';
  export default {
    name: 'payList',
    components: {
      XHeader,
      TransferDom,
      Actionsheet,
      Panel
    },
    data () {
      return {
        showMenus: false,
        menus: {
          menu1: '购物车',
          menu2: '订单详情'
        }
      }
    },
    mounted(){

    },
    methods: {
      alipay ($event) {
        console.log($event);
      }
    }
  }
</script>

<style lang="less">
  .PayList {
    background-color: #EFEFF4;
    .vux-form-preview {
      margin-top: 10px;
    }
    .weui-cells__title {
      font-size: 12px;
    }
    .weui-grids {
      background-color: #fff;
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
          background-color: cornflowerblue;
          span {
            color: #fff;
          }
        }
      }
    }
  }
</style>
