<template>
  <view-box class="bookInfo" bodyPaddingBottom="60px" bodyPaddingTop="0">

    <x-header title="订单详情"
              :left-options="{showBack:true,backText:'返回'}"
              :right-options="{showMore: true}"
              @on-click-more="menusFlag = true">
    </x-header>

    <group class="status" v-for="(item,index) in common_order_FormInfo" :key="index" v-if="">
      <cell title="订单状态" :value="item.payStatus" :border-intent="false"></cell>
      <cell title="订单编号" :value="item.orderNum"></cell>
      <cell title="订单时间" :value="item.createDate"></cell>
      <cell title="总金额" :value="item.salePrice | currency"></cell>
    </group>

    <group-title>商品清单</group-title>

    <!-- 已支付 -->
    <grid :cols="3">
      <grid-item :label="'x'+item.number" v-for="(item,index) in common_order_FormInfo" :key="index">
        <img slot="icon" :src="item.pic">
      </grid-item>
    </grid>

    <!-- 订单中的地址 -->
    <group class="dispatch" title="收货地址">
      <cell v-for="(item,index) in common_order_FormInfo" :key="index"
            :title="item.address.contacts+' '+item.address.phone"
            :inline-desc="item.address.addrName+' '+item.address.addrDetail"></cell>
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
                   :menus="menus"
                   @on-click-menu="MenusClose"
                   :close-on-clicking-menu="true">
      </actionsheet>
    </div>

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
    name: 'bookInfo',
    components: {
      ViewBox, XHeader, XSwitch, FormPreview, Toast, TransferDom, Actionsheet,
      Group, GroupTitle, Cell, CellBox, Grid, GridItem, Tab, TabItem, Tabbar, TabbarItem
    },
    data () {
      return {
        totalMoney: 0,      //总金额
        logisticsPrice: 0,  //邮费
        showContent001: false
      }
    },
    computed: {
      ...mapState(['menus']),
      ...mapGetters([
        'common_order_FormInfo'
      ]),
      menusFlag: {
        get(){
          return this.$store.state.menusFlag;
        },
        set(newValue){
          return this.$store.state.menusFlag = newValue;
        }
      }
    },
    created(){
      if (this.$route.query.act === 'books' && typeof this.$route.query.id !== 'undefined') {
        if (this.$route.query.id.length === 32) {
          this.$store.dispatch('orderFormInfo', {// 订单详情
            orderId: this.$route.query.id
          });
        }
      }
    },
    mounted(){

    },
    methods: {
      ...mapMutations(['MenusClose']),
      onSubmit(){
        let data = {
          addrId: 0,
          logisticsPrice: 0,
          price: 0,
          totalPrice: 0,
          orderCartList: []
        };
      }
    }
  }
</script>

<style lang="less">
  .bookInfo {
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
      .weui-cells {
        margin-top: 0 !important;
      }
      .weui-cell__ft,
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
