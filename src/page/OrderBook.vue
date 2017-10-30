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

    <group-title>商品清单</group-title>

    <grid :cols="3" v-if="!isList">
      <grid-item :label="item.num+'x'" v-for="(item,index) in common_goods_list" :key="index">
        <img @click="go('detail',{id:item.id})" slot="icon" :src="item.src">
      </grid-item>
    </grid>

    <grid :cols="3" v-else="isList">
      <grid-item :label="item.num+'x'" v-for="(item,index) in common_order_FormInfo" :key="index">
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
        totalMoney: 0,      //总金额
        logisticsPrice: 0,  //邮费
        status: '待支付',
        isList: false,
        showTabbar: false,
        showContent001: false,
        menusFlag: false
      }
    },
    computed: {
      ...mapGetters([
        'common_goods_list',
        'common_goods_money',
        'common_order_FormInfo',
        'common_address',
        'common_menus'
      ])
    },
    created(){
      if (this.$route.query.src === 'books' && typeof this.$route.query.id !== undefined) {
        if (this.$route.query.id.length === 32) {
          this.isList = true;
          this.$store.dispatch('getAddress');    // 默认地址
          this.$store.dispatch('orderFormInfo', {// 订单详情
            orderId: this.$route.query.id
          });
        }
      }
      if (this.$route.query.src === 'cart') {
        this.isList = false;
        this.$store.dispatch('cartGoodsList');   // 购物车商品列表
        this.$store.dispatch('getAddress');      // 默认地址
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
    },
    methods: {
      onMenusClose (key, value) {
        switch (key) {
          case "menu1":
            this.menusFlag = false;
            this.$router.push({
              name: 'home'
            });
            break;
          case "menu2":
            this.menusFlag = false;
            this.$router.push({
              name: 'cart'
            });
            break;
          case "menu3":
            this.menusFlag = false;
            this.$router.push({
              name: 'user'
            });
            break;
          case "menu4":
            this.menusFlag = false;
            this.$router.push({
              name: 'books',
              query:{
                act:'all'
              }
            });
            break;
          case "menu5":
            this.menusFlag = false;
            this.$router.push({
              name: 'location'
            });
            break;
        }
      },
      onSubmit(){
        if (!this.isList) {
          let data = {
            addrId: 0,
            logisticsPrice: 0,
            price: 0,
            totalPrice: 0,
            orderCartList: []
          };

          this.common_goods_list.forEach(item => {
            data.addrId = this.common_address[0].id;
            data.logisticsPrice = this.logisticsPrice;      // 邮费
            data.price += item.price * item.num;            // 折后金额
            data.totalPrice += (item.price * item.num + this.logisticsPrice); // 折后金额+邮费
            data.orderCartList.push({
              goodsId: item.id,
              num: item.num
            });
          });

          this.$store.dispatch('orderFormSave', data); // 提交到服务器

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
