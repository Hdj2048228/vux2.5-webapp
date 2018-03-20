<template>
  <view-box class="signUp gaofeng" bodyPaddingTop="0" bodyPaddingBottom="0">
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input type="tel" required title="手机号 :" is-type="china-mobile"
               v-model="mobile" placeholder="请输入手机号..."></x-input>
      <!--<x-input type="password" title="密<i class='vux-blank-half'></i><i class='vux-blank-half'></i>码 :"-->
               <!--v-model="passwd" required placeholder="请输入密码(6位以上)"></x-input>-->
      <x-input v-model="code" type="tel" title="验证码:"
               required placeholder="请输入验证码..."></x-input>
      <span class="ui-code" @click="getCode()">{{ codeVal }}</span>
    </group>

    <box gap="10px 10px">
      <x-button plain action-type="button" style="background: #fff;border-color:#ccc" @click.native="login">登录</x-button>
    </box>

  </view-box>
</template>

<script>
  import {
    ViewBox, XHeader, Box, XInput, XButton, Grid, GridItem,
    Group, GroupTitle, Confirm, InlineXNumber, Tabbar, TabbarItem
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  import * as api from '../store/axios/api';
  import * as types  from '../store/type';

  export default {
    name: 'signUp',
    components: {
      ViewBox, XHeader, Box, XInput, XButton, Grid, GridItem,
      Group, GroupTitle, Confirm, InlineXNumber, Tabbar, TabbarItem
    },
    data(){
      return {
        mobile: '',
        passwd: '',
        code: '',
        codeVal: '获取验证码',
        codeFlog: false,
        wait: 60,
      }
    },
    computed: {
      ...mapGetters([
        'cart_goods_list'
      ])
    },
    created(){},
    mounted(){},
    methods: {
      login(){
        // this.$router.push({ path: '/home' });
              let data = 'sss';

        this.$store.commit(types.LOGIN, data.access_token);
        let redirect = decodeURIComponent(this.$route.query.redirect || '/');
        this.$router.push({
          path: '/home'
          // path: redirect
        });

        console.log("home")
        // if (this.mobile!=="" && this.mobile.length ===11) {
        //   this.$http({
        //     url:api.signUp_api,
        //     method:'post',
        //     data:{
        //       /*verifyCode: this.code,*/
        //       userName: this.mobile,
        //       passwd: this.passwd
        //     },
        //     params:{}
        //   }).then(res => {
        //     if (res.data.code === 200) {
        //       let data = JSON.parse(res.data.data);
        //       this.$store.commit(types.LOGIN, data.access_token);
        //       let redirect = decodeURIComponent(this.$route.query.redirect || '/');
        //       this.$router.push({
        //         //path: '/home'
        //         path: redirect
        //       });
        //     }
        //   }).catch(err=>{
        //     console.log(err);
        //   });
        // }else{
        //   this.$vux.toast.show({
        //     type:'cancel',
        //     text:'手机号有误'
        //   });
        // }
      },
      getCode(){
        if (this.codeFlog)return;
        if(this.mobile !=="" && this.mobile.length===11){
          this.$http({
            url:api.getCode_api + this.mobile + '/2/sms',
            method:'post',
            data:{},
            params:{}
          }).then(res => {
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
  .signUp {
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
