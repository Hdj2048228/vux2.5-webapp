<template>
  <view-box class="signUp gaofeng" bodyPaddingTop="0" bodyPaddingBottom="0">

    <x-header title="个人中心">
      <div slot="overwrite-left" class="left-arrow" @click="go('home')"></div>
      <x-icon slot="right" @click="go('signIn')" type="person-add" style="fill:#fff;"></x-icon>
    </x-header>

    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input type="tel" v-model="userName" required title="手机号 :"
               is-type="china-mobile" placeholder="请输入手机号..."></x-input>
      <x-input type="password" title="密<i class='vux-blank-half'></i><i class='vux-blank-half'></i>码 :"
               v-model="passwd" required placeholder="请输入密码(6位以上)">
      </x-input>
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
  import * as types  from '../store/type';

  export default {
    name: 'signUp',
    components: {
      ViewBox, XHeader, Box, XInput, XButton, Grid, GridItem,
      Group, GroupTitle, Confirm, InlineXNumber, Tabbar, TabbarItem
    },
    data(){
      return {
        userName: '',
        passwd: ''
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
        if (this.userName) {
          //this.$http.post('http://192.168.50.155:8881/api/v1/user/login', {
          this.$http.post('http://i.0t.com.cn/v1/user/login', {
            userName: this.userName,
            passwd: this.passwd,
            code: 1234,
          }).then(res => {
            if (res.data.code === 200) {
              let data = JSON.parse(res.data.data);
              this.$store.commit(types.LOGIN, data.access_token);
              let redirect = decodeURIComponent(this.$route.query.redirect || '/');
              this.$router.push({
                //path: '/home'
                path: redirect
              });
            }
          });
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
  }
</style>
