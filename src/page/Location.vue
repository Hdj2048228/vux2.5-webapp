<template>
  <view-box class="location" bodyPaddingTop="0" bodyPaddingBottom="0">

    <x-header title="设置地址"
              :left-options="{'showBack':true,'backText':'返回'}">
      <x-icon slot="right" @click="go('locationForm',{act:'add'})" type="plus" size="24" style="fill:#fff;position:relative;top:-3px;"></x-icon>
    </x-header>

    <group class="vux-group" :title="'收货地址'">
      <cell :title="'张三 13800138000'" :link="{'path':'/locationForm','query':{'id':'ab123456789012345678901234567890'}}"
            inline-desc='浙江省杭州市西湖区'></cell>
      <cell :title="'张三 13800138000'" :link="{'path':'/locationForm','query':{'id':'123456789012345678901234567890ab'}}"
            inline-desc='浙江省杭州市西湖区'></cell>
    </group>

  </view-box>
</template>

<script>
  import {
    ViewBox,
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
      ViewBox,
      XHeader,
      TransferDom,
      Actionsheet,
      Group,
      Cell,
      Toast
    },
    data () {
      return {}
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
    .weui-cells__title {
      font-size: 12px;
    }
    .vux-cell-bd{
      .vux-label {
        font-size: 16px;
      }
    }
  }
</style>
