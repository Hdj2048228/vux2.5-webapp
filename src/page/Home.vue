<template>
  <view-box class="home" :bodyPaddingTop="0" bodyPaddingBottom="0">
    <card class="home-header" >
      <div slot="content">
        <grid :cols="3"  style="padding-top: 0px;" class="header-bg">
          <grid-item :label="obj.title" v-for="(obj,i) in homeList[0].contents" :key="i" style="color: white">
            <img slot="icon" src="../assets/icon-buy.png" v-if="obj.title">
            <label slot="label"style="color: white">{{obj.title}}</label>
          </grid-item>
        </grid>
      </div>
    </card>
    <div v-for="(item,index) in homeList" :key="item.title" v-if="index > 0">
      <group-title >{{item.title}}</group-title>
      <grid :cols="3"  style="padding-top: 0px;">
        <grid-item :label="obj.title" :link="obj.link" v-for="(obj,i) in item.contents" :key="i">
          <img slot="icon" src="../assets/icon-buy.png" v-if="obj.title">
        </grid-item>
      </grid>
    </div>
  </view-box>
</template>

<script>
  import {
    ViewBox, Card, Grid, GridItem, Group, GroupTitle
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'home',
    components: {
      ViewBox, Card, Grid, GridItem, Group, GroupTitle
    },
    data () {
      return {
        searchValue: 'ss',
        focus_index: 0
      }
    },
    computed: {
      ...mapGetters([
        'homeList',
        'focus_list',
        //'marquee_list',
        'goods_list'
      ])
    },
    created(){
      // this.$store.dispatch('home_focus');
      // this.$store.dispatch('home_marquee');
      // this.$store.dispatch('home_goods');
    },
    mounted(){
    },
    methods: {
      onLogin(){
        this.$router.push({
          name: 'signUp'
        });
      },
      onLogout(){
        this.$store.commit('LOGOUT');
        this.$router.replace({
          path: 'signUp'
        });
      },
      onSubmit (key) {
        this.$refs.search.setBlur();

        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: '正在搜索'
        });

        this.$router.push({
          name: 'search2',
          query: {
            key: key
          }
        });
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      },
      setFocus(){
      },
      setBlur(){
      },
      swiperChange(){
        console.log("swiperChange");
      }
    }
  }
</script>

<style lang="less" scoped>
  /*@import '~vux/src/styles/1px.less';*/
  .home-header > .weui-grids {
    border-top: 0px;
    height: 100px!important;
  }
  .header-bg{
    color: white;
    background-color: rgb(88,91,101);
  }
  .header-bg > .weui-grid__label{
    color: white !important;
  }
  .weui-cells__title{
    color: black !important;
    background-color: white;
    margin-bottom: 0;
    padding-top: 5px;
    padding-bottom: 5px;
  }
</style>
