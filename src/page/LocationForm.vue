<template>
  <view-box class="locationForm" bodyPaddingTop="0" bodyPaddingBottom="0">
    <x-header :title="gTitle"
              :left-options="{'showBack':true,'backText':'返回'}">
      <x-icon slot="right" @click="onSave" type="android-checkbox-outline" size="24" style="fill:#fff;position:relative;top:-3px;"></x-icon>
    </x-header>

    <group class="vux-group" label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="收货人" v-model="value1"></x-input>
      <x-input title="手机号" v-model="value2"></x-input>

      <x-address title="省市区" v-model="addressValue" raw-value :list="addressData" value-text-align="left"
                 label-align="justify"></x-address>
      <x-textarea title="详细地址" v-model="addressInfo" placeholder="街道/门牌号" :show-counter="false"
                  :rows="3"></x-textarea>
    </group>

    <toast v-model="showToast" @on-hide="onHide">Basic Usage</toast>
  </view-box>
</template>

<script>
  import {
    ViewBox,
    XHeader,
    TransferDom,
    Actionsheet,
    Group,
    XInput,
    XAddress,
    XSwitch,
    XTextarea,
    ChinaAddressData,
    Cell,
    Toast
  } from 'vux';
  export default {
    name: 'locationForm',
    components: {
      ViewBox,
      XHeader,
      TransferDom,
      Actionsheet,
      Group,
      XInput,
      XAddress,
      XSwitch,
      XTextarea,
      Cell,
      Toast
    },
    data () {
      return {
        gTitle: '添加地址',
        showToast: false,
        showMenus: false,
        value1: '张三',
        value2: '13800138000',
        addressData: ChinaAddressData,
        addressValue: ['浙江省', '杭州市', '西湖区'],
        addressInfo: '文一西路522号1幢2单元501'
      }
    },
    mounted(){
      if (typeof this.$route.query.id !== 'undefined') {
        if (this.$route.query.id.length === 32) {
          this.gTitle = '修改地址';
          console.log('修改地址');
        }
      }
      if (this.$route.query.act !== 'undefined') {
        if (this.$route.query.act === 'add') {
          this.gTitle = '添加地址';
          console.log('添加地址');
        }
      }
    },
    methods: {
      onSave(){
        if (1) {
          this.showToast = true;
          console.log('onSave callback');
        }
      },
      onHide(){
        this.go('location');
        console.log('onHide callback');
      }
    }
  }
</script>

<style lang="less">
  .locationForm {
    .weui-input,
    .weui-label,
    .vux-popup-picker-value,
    .weui-textarea {
      font-size: 14px;
      color: #666;
    }
    textarea::placeholder {
      font-size: 14px;
    }
  }
</style>
