<template>
  <view-box class="signIn" bodyPaddingBottom="50px" bodyPaddingTop="0">

    <x-header title="个人中心">
      <!--<div slot="overwrite-left" class="left-arrow" @click="go('user')"></div>-->
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
               required placeholder="请输入手机验证码..."></x-input>
    </group>

    <box gap="10px 10px">
      <x-button plain style="background: #fff;border-color:#ccc" @click.native="register">注册</x-button>
    </box>


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
        mobile:'13811901660',
        password:'123456',
        userName:'高峰',
        code:'12345',
        menusFlag: false
      }
    },
    computed:{

    },
    created(){

    },
    mounted(){

    },
    methods: {
      register(){
        if (this.userName) {
          this.$http.post('http://192.168.50.230:8883/api/v1/mall/user/register', {
            userName:this.userName,
            password:this.password,
            mobile:this.mobile
          }).then(res => {
            if (res.data.code === 200) {
              let data = JSON.parse(res.data.data);
              console.log(121212,res.data);
            }
          });
        }
      }
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
