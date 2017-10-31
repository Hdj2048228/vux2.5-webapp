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
      <cell :title="detail_swiper.title" :inlineDesc="detail_swiper.desc | subString(22)"
            :value="detail_swiper.price | currency"></cell>
      <cell-form-preview :list="detail_swiper.params"></cell-form-preview>
    </group>

    <card :header="{title:'商品详情'}">
      <div slot="content" class="card-padding" v-html="detail_swiper.info"></div>
    </card>

    <tabbar>
      <tabbar-item :badge="common_goods_count| toString" selected @on-item-click="addCart">
        <span slot="icon"><img src="../assets/icon-car.png" alt="加入购物车"></span>
        <span slot="label">加入购物车</span>
      </tabbar-item>
      <tabbar-item link="/cart">
        <span slot="icon"><img src="../assets/icon-buy.png" alt="查看购物车"></span>
        <span slot="label">查看购物车</span>
      </tabbar-item>
    </tabbar>

    <div transfer-dom>
      <actionsheet show-cancel
                   v-model="menusFlag"
                   :menus="menus"
                   @on-click-menu="MenusClose"
                   :close-on-clicking-menu="true">
      </actionsheet>
    </div>

  </view-box>
</template>

<script>
  import {
    ViewBox, XHeader, Swiper, SwiperItem, CellFormPreview, Group, Cell, Panel,
    Card, TransferDom, Actionsheet, Scroller, Tab, TabItem, Tabbar, TabbarItem
  } from 'vux';

  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'detail',
    components: {
      ViewBox, XHeader, Swiper, SwiperItem, CellFormPreview, Group, Cell, Panel,
      Card, TransferDom, Actionsheet, Scroller, Tab, TabItem, Tabbar, TabbarItem
    },
    data () {
      return {
        swiperIndex: 0,
        testIndex: 0
      }
    },
    computed: {
      ...mapState([
        'menus'
      ]),
      ...mapGetters([
        'detail_swiper',
        'common_goods_count'
      ]),
      swiper_index: {
        get(){
          return this.swiperIndex;
        },
        set(newValue){
          return this.swiperIndex = newValue;
        }
      },
      menusFlag:{
        get(){
          return this.$store.state.menusFlag;
        },
        set(newValue){
          return this.$store.state.menusFlag = newValue;
        }
      }
    },
    created(){
      if (this.$route.query.id !== undefined) {
        if (this.$route.query.id.length === 32) {
          let id = this.$route.query.id;
          this.$store.dispatch('getDetailGoods', id); // 商品详情
          this.$store.dispatch('goodsGetNumber', id); // 请求购物总数
        }
      }else{
        this.$vux.toast.text('404！');
        this.$router.push('home');
      }
    },
    mounted(){

    },
    methods: {
      ...mapMutations(['MenusClose']),
      swiperChange(){
        console.log("swiperChange");
      },
      addCart(){
        if (this.$route.query.id !== undefined) {
          this.$vux.toast.show({
            text: '加入成功！'
          });
          if (this.$route.query.id.length === 32) {
            let id = this.$route.query.id;
            this.$store.dispatch('goodsAddCart', id);
          }
          setTimeout(() => {
            this.$vux.toast.hide();
          }, 500);
        }
      }
    }
  }
</script>

<style lang="less">
  .detail {
    .weui-tab__panel {
      background-color: #f0f0f0;
    }
    .weui-form-preview__bd {
      font-size: 14px;
      line-height: 1.5;
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
