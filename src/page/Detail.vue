<template>
  <view-box class="detail" bodyPaddingBottom="60px" bodyPaddingTop="0">

    <x-header title="订单详情"
              :left-options="{showBack:true,backText:'返回'}"
              :right-options="{showMore: true}"
              @on-click-more="menusFlag = true">
    </x-header>

    <swiper :aspect-ratio="272/375" v-model="swiper_index" @on-index-change="swiperChange">
      <swiper-item class="swiper-img" v-for="(item, index) in detail_swiper.pics" :key="index">
        <img :src="item.url">
      </swiper-item>
    </swiper>

    <group class="vux-group">
      <cell :title="detail_swiper.title" :inlineDesc="detail_swiper.desc | subString(22)" value="￥1024"></cell>
      <cell-form-preview :list="detail_swiper.params"></cell-form-preview>
    </group>

    <card :header="{title:'商品详情'}">
      <div slot="content" class="card-padding" v-html="detail_swiper.info"></div>
    </card>

    <tabbar>
      <tabbar-item :badge="badgeNumber" selected @on-item-click="addCar">
        <span slot="icon"><img src="../assets/icon-car.png" alt="加入购物车"></span>
        <span slot="label">加入购物车</span>
      </tabbar-item>
      <tabbar-item link="/car">
        <span slot="icon"><img src="../assets/icon-buy.png" alt="立即购买"></span>
        <span slot="label">立即购买</span>
      </tabbar-item>
    </tabbar>

    <div transfer-dom>
      <actionsheet :menus="common_menus" v-model="menusFlag" show-cancel></actionsheet>
    </div>

  </view-box>
</template>

<script>
  import {
    ViewBox, XHeader, Swiper, SwiperItem, CellFormPreview, Group, Cell, Panel,
    Card,TransferDom, Actionsheet, Scroller, Tab, TabItem, Tabbar, TabbarItem
  } from 'vux';

  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'detail',
    components: {
      ViewBox, XHeader, Swiper, SwiperItem, CellFormPreview, Group, Cell, Panel,
      Card,TransferDom, Actionsheet, Scroller, Tab, TabItem, Tabbar, TabbarItem
    },
    data () {
      return {
        swiperIndex: 0,
        badgeNumber: '0',
        menusFlag: false
      }
    },
    computed: {
      ...mapGetters([
        'detail_swiper',
        'common_menus'
      ]),
      swiper_index: {
        get(){
          return this.swiperIndex;
        },
        set(newValue){
          return this.swiperIndex = newValue;
        }
      }
    },
    created(){
      this.$store.dispatch('detail_goods', 123);

      console.log('detail created...');
    },
    mounted(){

    },
    methods: {
      swiperChange(){
        console.log("swiperChange");
      },
      addCar(){
        this.badgeNumber = (Number(this.badgeNumber) + 1) + '';

        this.$vux.toast.show({
          text: '加入成功！'
        });

        setTimeout(() => {
          this.$vux.toast.hide();
        }, 1000);
      }
    }
  }
</script>

<style lang="less">
  .detail {
    .weui-tab__panel {
      background-color: #f0f0f0;
    }
    .weui-form-preview__bd{
      font-size: 14px;
      line-height:1.5;
    }

    .vux-card-content {
      padding: 10px 15px;
      color: #999999;
      font-size: 13px;
      .card-padding {
        line-height: 22px;
      }
    }

    .swiper-img img {
      max-width: 100%;
    }
  }
</style>
