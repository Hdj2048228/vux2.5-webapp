<template>
  <view-box class="locationForm" bodyPaddingTop="0" bodyPaddingBottom="0">
    <x-header :title="gTitle" :left-options="{'showBack':true,'backText':'返回'}">
      <x-icon slot="right" @click="onSave" type="android-checkbox-outline" size="24" style="fill:#fff"></x-icon>
    </x-header>

    <group class="vux-group" label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="收货人" v-model="address.name"></x-input>
      <x-input title="手机号" v-model="address.phone"></x-input>

      <x-address title="省市区" v-model="address.addressValue" :list="addressData" raw-value value-text-align="left"></x-address>
      <x-textarea title="详细地址" v-model="address.addressInfo" :show-counter="false" :rows="3" placeholder="街道/门牌号"></x-textarea>
    </group>

  </view-box>
</template>

<script>
  import {
    ViewBox, XHeader, Group, Cell, XInput, XAddress, XTextarea, Toast, ChinaAddressData, Value2nameFilter
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'locationForm',
    components: {
      ViewBox, XHeader, Group, Cell, XInput, XAddress, XTextarea, Toast
    },
    data () {
      return {
        gTitle: '添加地址',
        addressData: ChinaAddressData,
        address: {
          name: '张三',
          phone: '13800138000',
          addressValue: ['浙江省', '杭州市', '西湖区'],
          addressInfo: '文一西路522号1幢2单元501'
        }
      }
    },
    computed:{

    },
    created(){

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
          this.$store.dispatch('setAddress',{
            name:this.address.name,
            phone:this.address.phone,
            addressValue:Value2nameFilter(this.address.addressValue,ChinaAddressData),//? 编号对应城市
            addressInfo:this.address.addressInfo
          });

          this.$vux.toast.show({
            text: '保存成功！'
          });

          setTimeout(() => {
            this.$vux.toast.hide();
            this.go('location');
          }, 1000);
        }
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
    .vux-header-right{
      position: absolute;
      top:10px;
    }
  }
  .vux-popup-dialog{
    z-index: 1000!important;
  }
</style>
