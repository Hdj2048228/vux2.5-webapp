<template>
  <view-box class="signIn" bodyPaddingBottom="50px" bodyPaddingTop="0">

    <x-header title="个人中心">
      <!--<div slot="overwrite-left" class="left-arrow" @click="go('user')"></div>-->
      <x-icon slot="right" @click="go('signUp')" type="log-in" style="fill:#fff;"></x-icon>
    </x-header>

    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="收货人:" v-model="value1" required is-type="china-name" placeholder="请输入真实姓名..."></x-input>
      <x-input type="tel" title="手机号:" v-model="value2" required is-type="china-mobile" placeholder="请输入手机号..."></x-input>
      <x-input type="tel" title="密<i class='vux-blank-half'></i><i class='vux-blank-half'></i>码:" required v-model="value3" placeholder="请输入密码(6位以上)...">
      </x-input>
      <x-input type="tel" title="验证码:" v-model="value4" required placeholder="请输入手机验证码..."></x-input>
    </group>

    <box gap="10px 10px">
      <x-button plain style="background: #fff;border-color:#ccc">注册</x-button>
    </box>

    <div transfer-dom>
      <actionsheet :menus="common_menus" v-model="menusFlag" show-cancel></actionsheet>
    </div>

  </view-box>
</template>

<script>
  import {
    ViewBox,XHeader,Box,XInput,XButton,Grid,GridItem,GroupTitle,Group,Confirm,
    TransferDom,Actionsheet,InlineXNumber,Tabbar,TabbarItem
  } from 'vux';
  import {
    mapState,mapMutations,mapGetters,mapActions
  } from "vuex";

  export default {
    name: 'signIn',
    components: {
      ViewBox,XHeader,Box,XInput,XButton,Grid,GridItem,GroupTitle,Group,Confirm,
      TransferDom,Actionsheet,InlineXNumber,Tabbar,TabbarItem
    },
    data(){
      return{
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        menusFlag: false
      }
    },
    computed:{
      ...mapGetters([
        'common_menus'
      ])
    },
    created(){
      console.log('cart created....');
    },
    mounted(){

    },
    methods: {

    }
  }
</script>

<style lang="less">
  .signIn {
    .weui-input,
    .weui-label{
      font-size: 14px;
    }
  }
</style>
