<template>
  <view-box class="signIn" bodyPaddingTop="0" bodyPaddingBottom="0">

    <x-header title="个人中心">
      <x-icon slot="right" @click="go('signUp')" type="log-in" style="fill:#fff;"></x-icon>
    </x-header>

    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input v-model="userName" title="收货人:" is-type="china-name"
               required placeholder="请输入真实姓名..."></x-input>
      <x-input v-model="mobile" type="tel" title="手机号:" is-type="china-mobile"
               required placeholder="请输入手机号..."></x-input>
      <x-input v-model="password" type="tel" title="密<i class='vux-blank-half'></i><i class='vux-blank-half'></i>码:"
               required placeholder="请输入密码(6位以上)..."></x-input>
      <x-input v-model="code" type="tel" title="验证码:"
               required placeholder="请输入验证码..."></x-input>
      <span class="ui-code" @click="getCode()">{{ codeVal }}</span>
    </group>

    <box gap="10px 10px">
      <x-button plain style="background: #fff;border-color:#ccc" @click.native="register">注册</x-button>
    </box>

  </view-box>
</template>

<script>
  import {
    ViewBox, XHeader, Box, XInput, XButton, Group
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";
  import * as api from '../store/axios/api';

  export default {
    name: 'signIn',
    components: {
      ViewBox, XHeader, Box, XInput, XButton, Group
    },
    data(){
      return {
        userName: '',
        mobile: '',
        password: '',
        code: '',
        codeVal: '获取验证码',
        codeFlog: false,
        wait: 60,
      }
    },
    methods: {
      register(){
        if (this.userName === "") {
          this.$vux.toast.show({
            type:'cancel',
            text:'用户名<br>不能为空！'
          });
          return;
        }
        if (this.mobile === "") {
          this.$vux.toast.show({
            type:'cancel',
            text:'手机号<br>不能为空！'
          });
          return;
        }
        if (this.password === "") {
          this.$vux.toast.show({
            type:'cancel',
            text:'密码<br>不能为空！'
          });
          return;
        }
          this.$http.post(api.signIn_api, {
            userName: this.userName,
            mobile: this.mobile,
            password: this.password,
            verifyCode: this.code
          }).then(result => {
            if (result.data.code === 200) {
              this.$vux.toast.show({
                text:'注册成功！' //'登录账号：<br>'+result.data.data.mobile
              });
              this.$router.replace({
                name:'signUp'
              });
            }else if(result.data.code === 505){
              this.$vux.toast.show({
                type:'cancel',
                text:result.data.data.password
              });
            }else if(result.data.code === 500){
              this.$vux.toast.show({
                type:'cancel',
                text:result.data.message
              });
            }
          });
      },
      getCode(){
        if (this.codeFlog)return;
        if(this.mobile !=="" && this.mobile.length===11){
          this.$http.post(api.getCode_api + this.mobile + '/1/sms').then(res => {
            if (res.data.code === 200) {
              this.time();
            }
            if(res.data.code === 500){
              this.$vux.toast.show({
                type:'cancel',
                text:res.data.message
              });
            }
          });
        }else{
          this.$vux.toast.show({
            type:'cancel',
            text:'手机号有误'
          });
        }
      },
      time() {
        if (this.wait === 0) {
          this.codeFlog = false;
          this.codeVal = "获取验证码";
          this.wait = 60;
        } else {
          this.codeFlog = true;
          this.codeVal = "重新发送(" + this.wait + ")";
          this.wait--;
          setTimeout( () =>{
            this.time()
          }, 1000);
        }
      }
    }
  }
</script>

<style lang="less">
  .signIn {
    .weui-input,
    .weui-label {
      font-size: 14px;
    }
    .ui-code{
      line-height: 25px;
      font-size: 12px;
      border:1px solid #ccc;
      padding: 0 5px;
      border-radius: 4px;
      position: absolute;
      right: 45px;
      bottom: 8px;
      z-index: 10;
    }
  }
</style>
