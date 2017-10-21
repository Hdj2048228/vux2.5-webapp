<template>
  <div class="books" ref="books">
    <x-header title="订单列表"
              :right-options="{showMore: true}"
              @on-click-more="showMenus = true">
      <x-icon slot="overwrite-left" @click="go('home')" type="android-home" size="24" style="fill:#fff;"></x-icon>
    </x-header>

    <tab bar-active-color="#04BE02" :line-width="1">
      <tab-item selected>全部订单</tab-item>
      <tab-item>待支付</tab-item>
      <tab-item>待收货</tab-item>
      <tab-item>已完成</tab-item>
    </tab>

    <form-preview
      :header-value="'2400.00'"
      :header-label="'付款金额'"
      :body-items="list"
      :footer-buttons="buttons1">
    </form-preview>

    <form-preview
      :header-value="'2400.00'"
      :header-label="'付款金额'"
      :body-items="list"
      :footer-buttons="buttons1">
    </form-preview>

    <form-preview
      :header-value="'2400.00'"
      :header-label="'付款金额'"
      :body-items="list"
      :footer-buttons="buttons1">
    </form-preview>

    <div transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
  import {
    XHeader,
    FormPreview,
    TransferDom,
    Actionsheet,
    Grid,
    Tab,
    TabItem
  } from 'vux';
  export default {
    name: 'books',
    components:{
      XHeader,
      FormPreview,
      TransferDom,
      Actionsheet,
      Grid,
      Tab,
      TabItem
    },
    data () {
      return {
        showMenus: false,
        menus: {
          menu1: '购物车',
          menu2: '订单详情'
        },
        list: [{
          label: '订单号',
          value: 'RY17082301727'
        },{
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
          link:'/book?src=books'
        }, {
          style: 'primary',
          text: '再次购买',
          link: '/car'
        }],
      }
    },
    mounted(){
      //console.log(getComputedStyle(this.$refs.books.parentNode,false)['paddingBottom']);
      this.$refs.books.parentNode.style.paddingBottom=0;
    },
    methods: {
    }
  }
</script>

<style lang="less">
  .books{
    background-color: #EFEFF4;
    .vux-form-preview{
      margin-top: 10px;
    }
    .weui-form-preview__hd{
      .weui-form-preview__label{
        font-size: 14px;
      }
      .weui-form-preview__value{
        font-size: 16px;
      }
    }
    .weui-form-preview__btn{
      font-size: 14px;
    }
    .weui-form-preview__btn_primary{
      color: #999;
    }
  }
</style>
