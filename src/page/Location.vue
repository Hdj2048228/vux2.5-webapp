<template>
  <div class="location">
    <x-header title="设置地址"
              :left-options="{'showBack':true,'backText':'返回'}">
      <x-icon slot="right" @click="go('locationForm',{act:'add'})" type="plus" size="24" style="fill:#fff;position:relative;top:-3px;"></x-icon>
    </x-header>

    <group :title="'收货地址'">
      <cell :title="'张三 13800138000'" :link="{'path':'/locationForm','query':{'id':'ab123456789012345678901234567890'}}" inline-desc='浙江省杭州市西湖区'></cell>
      <cell :title="'张三 13800138000'" :link="{'path':'/locationForm','query':{'id':'123456789012345678901234567890ab'}}" inline-desc='浙江省杭州市西湖区'></cell>
    </group>

  </div>
</template>

<script>
  import {
    XHeader,
    TransferDom,
    Actionsheet,
    Group,
    Cell,
    Toast
  } from 'vux';
  export default {
    name: 'location',
    components: {
      XHeader,
      TransferDom,
      Actionsheet,
      Group,
      Cell,
      Toast
    },
    data () {
      return {
      }
    },
    mounted(){

    },
    methods: {
      onSubmit(){

      }
    }
  }
</script>

<style lang="less">
  .location {
    background-color: #EFEFF4;
    .vux-form-preview {
      margin-top: 10px;
    }
    .weui-cells__title{
      font-size: 12px;
    }
    .weui-grids{
      background-color: #fff;
    }
    .status {
      .weui-cells {
        margin-top: 0;
      }
      .vux-label{
        color: #888;
        font-size: 13px;
      }
      .weui-cell__ft{
        color: red;
        font-size: 13px;
      }
    }
    .dispatch{
      .vux-tap-active{
        .vux-label{
          color: #333;
          font-size: 14px;
        }
      }
      .vux-label,
      .weui-cell__ft{
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
