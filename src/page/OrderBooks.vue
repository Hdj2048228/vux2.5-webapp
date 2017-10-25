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
      :header-value="'2400.00'"
      :header-label="'付款金额'"
      :body-items="list"
      :footer-buttons="buttons1">
    </form-preview>

    <form-preview
      :header-value="'2400.00'"
      :header-label="'付款金额'"
      :body-items="list"
      :footer-buttons="buttons1">
    </form-preview>

    <form-preview
      :header-value="'2400.00'"
      :header-label="'付款金额'"
      :body-items="list"
      :footer-buttons="buttons1">
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
          label: '订单号',
          value: 'RY17082301727'
        }, {
          label: '商品',
          value: '电动打蛋机'
        }, {
          label: '标题标题',
          value: '名字名字名字'
        }, {
          label: '标题标题',
          value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
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
        'common_menus'
      ])
    },
    created(){
      if (this.$route.query.act !== 'undefined') {
        let act = this.$route.query.act;
        if (act === 'all') {
          console.log('route all');
        }
        if (act === 'pay') {
          console.log('route pay');
        }
        if (act === 'wait') {
          console.log('route wait');
        }
        if (act === 'finish') {
          console.log('route finish');
        }
      }
    },
    mounted(){

    },
    methods: {
      onMenusClose (key, value) {
        /*this.$vux.loading.show({
          text: '跳转中...'
        });*/

        /*setTimeout(() => {
          this.$vux.loading.hide();
        }, 1000);*/

        if(key==="menu1"){
          this.menusFlag = false;
          this.$router.push({
            name:'cart'
          });
        }
        if(key==="menu2"){
          this.menusFlag = false;
          this.$router.push({
            name:'books'
          });
        }
      },
      itemClick(act){
        if (act === 'all') {
          console.log('tap all');
        }
        if (act === 'pay') {
          console.log('tap pay');
        }
        if (act === 'wait') {
          console.log('tap wait');
        }
        if (act === 'finish') {
          console.log('tap finish');
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
