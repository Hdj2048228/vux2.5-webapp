<template>
  <div class="detail">
    <x-header title="商品详情"
              :right-options="{showMore: true,link:'/home'}"
              @on-click-more="showMenus = true">
      <x-icon slot="overwrite-left" @click="go('home')" type="android-home" size="24" style="fill:#fff;position:relative;top:-4px;left:-3px;"></x-icon>
    </x-header>

    <swiper :aspect-ratio="272/375" v-model="swiper_index" @on-index-change="swiperChange">
      <swiper-item class="swiper-img" v-for="(item, index) in detail_swiper.pics" :key="index"><img :src="item.url"></swiper-item>
    </swiper>

    <group>
      <cell :title="detail_swiper.title" :inlineDesc="detail_swiper.desc | subString(22)" value="￥1024"></cell>
      <cell-form-preview :list="detail_params"></cell-form-preview>
    </group>

    <card :header="{title:'商品详情'}">
      <div slot="content" class="card-padding">{{detail_swiper.desc}}</div>
    </card>

    <tabbar>
      <tabbar-item :badge="badgeNum" selected @on-item-click="addCar">
        <span slot="icon"><img src="../assets/icon-car.png" alt="加入购物车"></span>
        <span slot="label">加入购物车</span>
      </tabbar-item>
      <tabbar-item link="/car">
        <span slot="icon"><img src="../assets/icon-buy.png" alt="立即购买"></span>
        <span slot="label">立即购买</span>
      </tabbar-item>
    </tabbar>

    <div transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
  import {
    XHeader,Swiper,SwiperItem,CellFormPreview,Group,Cell,Panel,Card,
    TransferDom,Actionsheet,Scroller,Tab,TabItem,Tabbar,TabbarItem
  } from 'vux';

  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'detail',
    components:{
      XHeader,Swiper,SwiperItem,CellFormPreview,Group,Cell,Panel,Card,
      TransferDom,Actionsheet,Scroller,Tab,TabItem,Tabbar,TabbarItem
    },
    data () {
      return {
        index: 0,
        badgeNum: '2',
        showMenus: false,
        menus: {
          menu1: '购物车',
          menu2: '订单详情'
        }
      }
    },
    computed: {
      swiper_index: {
        get(){
          return this.index;
        },
        set(newValue){
          return this.index = newValue;
        }
      },
      detail_swiper(){
        return this.$store.getters.detail_swiper;
      },
      detail_params(){
        return this.$store.getters.detail_params;
      }
    },
    created(){
      this.$store.dispatch('getGoodsDetail',123);
    },
    mounted(){

    },
    methods: {
      swiperChange(){
        console.log("swiperChange");
      },
      addCar(){
        this.badgeNum=(Number(this.badgeNum)+1)+'';
      }
    }
  }
</script>

<style lang="less">
  li{
    list-style: none;
  }
  .weui-tab{
    .detail{
      padding-bottom: 20px;
      position: relative;
      .weui-tabbar{
        background-color: #fff;
      }
    }
  }
  .weui-tab__panel{
    background-color: #f0f0f0;
  }
  .vux-card-content{
    padding: 10px 15px;
    color: #999999;
    font-size: 13px;
    .card-padding{
      line-height: 22px;
    }
  }
  .weui-form-preview__item{
    position: relative;
    /*&::before{
      content: " ";
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-top: 1px solid #D9D9D9;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }*/
  }
  .swiper-img img{
    max-width: 100%;
  }
</style>
