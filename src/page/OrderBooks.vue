<template>
  <view-box class="books" bodyPaddingBottom="0px" bodyPaddingTop="0">

    <x-header title="全部订单"
              :left-options="{showBack:true,backText:'返回'}"
              :right-options="{showMore: true}"
              @on-click-more="menusFlag = true">
    </x-header>

    <tab bar-active-color="#04BE02" :line-width="1">
      <tab-item @on-item-click="itemClick('all')" selected>全部订单</tab-item>
      <tab-item @on-item-click="itemClick('pay')">待支付</tab-item>
      <tab-item @on-item-click="itemClick('wait')">待收货</tab-item>
      <tab-item @on-item-click="itemClick('finish')">已完成</tab-item>
    </tab>

    <form-preview
      v-for="(item,index) in common_order_FormList"
      :header-value="item.totalPrice | currency"
      :header-label="'付款金额'"
      :body-items="item.goodsList"
      :footer-buttons="item.buttonsMeun">
    </form-preview>

    <div transfer-dom>
      <actionsheet show-cancel
                   v-model="menusFlag"
                   :menus="common_menus"
                   @on-click-menu="onMenusClose"
                   :close-on-clicking-menu="true">
      </actionsheet>
    </div>

  </view-box>
</template>

<script>
  import {
    ViewBox, XHeader, FormPreview, TransferDom, Actionsheet, Grid, Tab, TabItem
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'books',
    components: {
      ViewBox, XHeader, FormPreview, TransferDom, Actionsheet, Grid, Tab, TabItem
    },
    data () {
      return {
        menusFlag: false,
        list: [{
          label: '11',
          value: '22'
        }],
        buttons1: [{
          style: 'default',
          text: '查看订单',
          link: '/book?src=books'
        }, {
          style: 'primary',
          text: '再次购买',
          link: '/cart'
        }],
      }
    },
    computed: {
      ...mapGetters([
        'common_order_FormList',
        'common_menus'
      ])
    },
    created(){
      if (this.$route.query.act !== 'undefined') {
        let act = this.$route.query.act;
        if (act === 'all') {
          this.$store.dispatch('orderFormList', {
            payStatus: null,
            status: null
          });
        }
        if (act === 'pay') {
          this.$store.dispatch('orderFormList', {
            payStatus: 1,
            status: null
          });
        }
        if (act === 'wait') {
          this.$store.dispatch('orderFormList', {
            payStatus: null,
            status: 6
          });
        }
        if (act === 'finish') {
          this.$store.dispatch('orderFormList', {
            payStatus: null,
            status: 7
          });
        }
      }
    },
    mounted(){

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
      itemClick(act){
        if (act === 'all') {
          this.$store.dispatch('orderFormList', {
            payStatus: null,
            status: null
          });
        }
        if (act === 'pay') {
          this.$store.dispatch('orderFormList', {
            payStatus: 1,
            status: null
          });
        }
        if (act === 'wait') {
          this.$store.dispatch('orderFormList', {
            payStatus: null,
            status: 6
          });
        }
        if (act === 'finish') {
          this.$store.dispatch('orderFormList', {
            payStatus: null,
            status: 7
          });
        }
      }
    }
  }
</script>

<style lang="less">
  .books {
    .vux-form-preview {
      margin-top: 10px;
    }
    .weui-form-preview__hd {
      .weui-form-preview__label {
        font-size: 14px;
      }
      .weui-form-preview__value {
        font-size: 16px;
      }
    }
    .weui-form-preview__btn {
      font-size: 14px;
    }
    .weui-form-preview__btn_primary {
      color: #999;
    }
  }
</style>
