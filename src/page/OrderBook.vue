<template>
  <view-box class="book" bodyPaddingBottom="60px" bodyPaddingTop="0">

    <x-header title="订单详情"
              :left-options="{showBack:true,backText:'返回'}"
              :right-options="{showMore: true}"
              @on-click-more="menusFlag = true">
    </x-header>

    <group class="status">
      <cell title="订单状态" :value="status" :border-intent="false"></cell>
    </group>

    <group-title v-show="common_address.length > 1">商品清单</group-title>
    <grid :cols="3">
      <grid-item :label="item.num+'x'" v-for="(item,index) in common_goods_list" :key="index">
        <img @click="go('detail',{id:item.id})" slot="icon" :src="item.src">
      </grid-item>
    </grid>

    <group class="dispatch" title="收货地址" v-if="common_address[0].isUsed">
      <cell v-for="(item,index) in common_address" :key="index"
            :title="item.name+' '+item.phone"
            :inline-desc="item.addrName"
            :link="{path:'/location'}"></cell>
    </group>

    <group class="dispatch" title="收货地址" v-if="!common_address[0].isUsed">
      <cell title="选择默认地址" :link="{path:'/location'}"></cell>
    </group>

    <group class="dispatch" :title="'配送'">
      <cell
        is-link
        :title="'支付配送'"
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001">
      </cell>

      <template v-if="showContent001">
        <cell :title="'支付方式'" :value="'在线支付'" :border-intent="false"></cell>
        <cell :title="'快递公司'" :value="'随机'"></cell>
      </template>
    </group>

    <div transfer-dom>
      <actionsheet show-cancel
                   v-model="menusFlag"
                   :menus="common_menus"
                   @on-click-menu="onMenusClose"
                   :close-on-clicking-menu="true">
      </actionsheet>
    </div>

    <tabbar v-if="showTabbar">
      <tabbar-item selected>
        <span slot="label">合计：{{common_goods_money | currency}}</span>
      </tabbar-item>
      <tabbar-item @on-item-click="onSubmit">
        <span slot="label">提交订单</span>
      </tabbar-item>
    </tabbar>

  </view-box>
</template>

<script>
  import {
    ViewBox, XHeader, XSwitch, FormPreview, Toast, TransferDom, Actionsheet,
    Group, GroupTitle, Cell, CellBox, Grid, GridItem, Tab, TabItem, Tabbar, TabbarItem
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'book',
    components: {
      ViewBox, XHeader, XSwitch, FormPreview, Toast, TransferDom, Actionsheet,
      Group, GroupTitle, Cell, CellBox, Grid, GridItem, Tab, TabItem, Tabbar, TabbarItem
    },
    data () {
      return {
        totalMoney: 350,
        status: '待支付',
        showTabbar: false,
        showContent001: false,
        menusFlag: false
      }
    },
    computed: {
      ...mapGetters([
        'common_goods_list',
        'common_goods_money',
        'common_address',
        'common_menus'
      ])
    },
    created(){
      if(this.$route.query.src === 'cart' && typeof this.$route.query.id === undefined){
        this.$store.dispatch('cartGoodsList');
        this.$store.dispatch('getAddress');
      }
    },
    mounted(){
      // 默认的
      this.status = '待支付';

      // 购物车->过来的
      (this.$route.query.src === 'cart') && (this.status = '待提交');

      // 订单列表->过来的
      (this.$route.query.src === 'books') && (this.status = '已支付');

      (this.status === '待支付') && (this.showTabbar = true);
      (this.status === '待提交') && (this.showTabbar = true);
      (this.status === '已支付') && (this.showTabbar = false);

      if(this.$route.query.src === 'books' && typeof this.$route.query.id !== undefined){
        this.$store.dispatch('orderFormInfo',{
          orderId:this.$route.query.id
        });
      }
    },
    methods: {
      onMenusClose (key, value) {
        switch (key) {
          case "menu1":
            this.menusFlag = false;
            this.$router.push({
              name: 'cart'
            });
            break;
          case "menu2":
            this.menusFlag = false;
            this.$router.push({
              name:'books',
              query:{
                act:'all'
              }
            });
            break;
          case "menu3":
            this.menusFlag = false;
            this.$router.push({
              name: 'location'
            });
            break;
        }
      },
      onSubmit(){
        this.$store.dispatch('orderFormSave', {
          "addrId": "470575a8ff124c8785f569356e6a0196",
          "price": 120,
          "logisticsPrice": 0,
          "totalPrice": 120,
          "orderCartList": [{
            "goodsId": "dabe58d6232d4887b03d6c06d796f468",
            "num": 3
          }]
        });

        this.$vux.toast.show({
          text: '提交成功！'
        });

        setTimeout(() => {
          this.$vux.toast.hide();
          this.menusFlag = false;
          this.$router.push({
            name: 'payList',
            query: {params: '123'}
          });
        }, 1000);
      }
    }
  }
</script>

<style lang="less">
  .book {
    .vux-form-preview {
      margin-top: 10px;
    }
    .weui-cells__title {
      font-size: 12px;
    }
    .weui-grid__img {
      width: 100%;
      height: 100%;
    }
    .status {
      .vux-label {
        color: #333;
        font-size: 14px;
      }
      .vux-cell-no-border-intent {
        .weui-cell__ft {
          color: red !important;
          font-size: 13px;
        }
      }
    }
    .dispatch {
      .vux-tap-active {
        .vux-label {
          color: #333;
          font-size: 14px;
        }
      }
      .vux-label,
      .weui-cell__ft {
        color: #888;
        font-size: 13px;
      }
    }
    .weui-tabbar {
      background-color: #fff;
      .weui-tabbar__item {
        &:last-child {
          background-color: #32beff;
          span {
            color: #fff;
          }
        }
      }
    }
  }
</style>
