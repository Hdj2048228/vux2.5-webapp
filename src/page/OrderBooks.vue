<template>
  <view-box class="books" bodyPaddingBottom="0px" bodyPaddingTop="0">

    <x-header title="全部订单"
              :left-options="{showBack:true,backText:'返回'}"
              :right-options="{showMore: true}"
              @on-click-more="menusFlag = true">
    </x-header>

    <tab bar-active-color="#04BE02" :line-width="1">
      <tab-item @on-item-click="onTab('all')" :selected="isAct==='all'">全部订单</tab-item>
      <tab-item @on-item-click="onTab('pay')" :selected="isAct==='pay'">待支付</tab-item>
      <tab-item @on-item-click="onTab('wait')" :selected="isAct==='wait'">待收货</tab-item>
      <tab-item @on-item-click="onTab('finish')" :selected="isAct==='finish'">已完成</tab-item>
    </tab>

    <div class="formWrap" v-for="(item,index) in common_order_FormList" :key="index">
      <form-preview :header-value="item.totalPrice | currency"
                    :header-label="'付款金额'"
                    :body-items="item.goodsList">
      </form-preview>

      <Tab :line-width="1">
        <TabItem v-if="isAct==='all'" v-for="(el,index) in item.btnMeun" @on-item-click="onNav(item,el,'del')" :key="index">{{ el.text }}</TabItem>
        <TabItem v-if="isAct==='pay'" v-for="(el,index) in item.btnMeun" @on-item-click="onNav(item,el,'del')" :key="index">{{ el.text }}</TabItem>
        <TabItem v-if="isAct==='wait'" v-for="(el,index) in item.btnMeun" @on-item-click="onNav(item,el,'del')" :key="index">{{ el.text }}</TabItem>
        <TabItem v-if="isAct==='finish'" v-for="(el,index) in item.btnMeun" @on-item-click="onNav(item,el,'del')" :key="index">{{ el.text }}</TabItem>

        <TabItem v-if="isAct==='pay'" @on-item-click="onNav(item,{link:'/payList'},'payment')">去支付</TabItem>
        <TabItem v-if="isAct==='wait'" @on-item-click="onNav(item,{link:'/books'},'getGoods')">确认收货</TabItem>
        <TabItem v-if="isAct==='finish'" @on-item-click="onNav(item,{link:'/cart'},'reBuy')">再次购买</TabItem>
      </Tab>
    </div>

    <div transfer-dom>
      <actionsheet show-cancel v-model="menusFlag" :menus="menus"
                   @on-click-menu="MenusClose" :close-on-clicking-menu="true">
      </actionsheet>
    </div>

    <div transfer-dom>
      <confirm v-model="confirmDelete" @on-confirm="confirmDel" @on-cancel="cancelDel">
        <p style="text-align:center;">确定删除吗？</p>
      </confirm>
    </div>

    <div transfer-dom>
      <confirm v-model="confirmTake" @on-confirm="confirmGet" @on-cancel="cancelGet">
        <p style="text-align:center;">确定收货吗？</p>
      </confirm>
    </div>

  </view-box>
</template>

<script>
  import {
    ViewBox, XHeader, FormPreview, TransferDom, Actionsheet, Confirm, Grid, Tab, TabItem
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'books',
    components: {
      ViewBox, XHeader, FormPreview, TransferDom, Actionsheet, Confirm, Grid, Tab, TabItem
    },
    data () {
      return {
        isAct: null,
        confirmDelete: false,
        confirmTake: false
      }
    },
    computed: {
      ...mapState([
        'menus'
      ]),
      ...mapGetters([
        'common_order_FormList'
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
      if (this.$route.query.act !== 'undefined') {
        let act = this.$route.query.act;
        if (act === 'all') {
          this.isAct = 'all';
          this.$store.dispatch('orderFormList', {
            payStatus: '',
            status: null
          });
        }
        if (act === 'pay') {
          this.isAct = 'pay';
          this.$store.dispatch('orderFormList', {
            payStatus: 1,
            status: null
          });
        }
        if (act === 'wait') {
          this.isAct = 'wait';
          this.$store.dispatch('orderFormList', {
            payStatus: null,
            status: 6
          });
        }
        if (act === 'finish') {
          this.isAct = 'finish';
          this.$store.dispatch('orderFormList', {
            payStatus: null,
            status: 7
          });
        }
      }
    },
    watch: {
      '$route': function (to, from) {
        if (to.query.act !== 'undefined') {
          let act = to.query.act;
          if (act === 'all') {
            this.isAct = 'all';
            this.$store.dispatch('orderFormList', {
              payStatus: null,
              status: null
            });
          }
          if (act === 'pay') {
            this.isAct = 'pay';
            this.$store.dispatch('orderFormList', {
              payStatus: 1,
              status: null
            });
          }
          if (act === 'wait') {
            this.isAct = 'wait';
            this.$store.dispatch('orderFormList', {
              payStatus: null,
              status: 6
            });
          }
          if (act === 'finish') {
            this.isAct = 'finish';
            this.$store.dispatch('orderFormList', {
              payStatus: null,
              status: 7
            });
          }
        }
        if (typeof to.query.flag !== 'undefined' && typeof to.query.id !== 'undefined') {
          if (to.query.flag === 'del' && to.query.id.length === 32) {
            this.confirmDelete = true;  // 删除 对话框
          }
        }
        if (typeof to.query.flag !== 'undefined' && typeof to.query.id !== 'undefined') {
          if (to.query.flag === 'getGoods' && to.query.id.length === 32) {
            this.confirmTake = true;    // 收货 对话框
          }
        }
      }
    },
    mounted(){

    },
    methods: {
      ...mapMutations(['MenusClose']),
      onTab(isAct){
        this.$router.replace({
          name: 'books',
          query: {
            act: isAct
          }
        });
      },
      confirmDel(){// 确认删除
        this.$store.dispatch('orderFormDelete', { // 删除订单动作
          orderId: this.$route.query.id
        });
        this.$router.replace({
          name: 'books',
          query: {
            act: this.isAct,
            flag:'del'
          }
        });
      },
      cancelDel(){// 取消删除
        this.$router.replace({
          name: 'books',
          query: {
            act: this.isAct
          }
        });
      },
      onNav(item, el, flag){
        if (el.link === '/books' && flag === 'del') {
          // 删除订单
          this.$router.replace({
            name: 'books',
            query: {
              act: this.isAct,
              flag: flag, //del\payment\getGoods\reBuy
              id: item.id
            }
          });

        } else if (el.link === '/payList' && flag === 'payment') {
          // 去支付
          this.$router.push({
            name: 'payList',
            query: {
              orderNumber: item.orderNum,
            }
          });

        } else if (el.link === '/books' && flag === 'getGoods') {
          // 确认收货
          this.$router.replace({
            name: 'books',
            query: {
              act: this.isAct,
              flag: flag, //del\payment\getGoods\reBuy
              id: item.id
            }
          });

        } else if(el.link ==='/cart' && flag === 'reBuy'){
          // 再次购买
          this.$store.dispatch('orderFormReBuy',{
            orderId:item.id
          });

          this.$router.push({
            name: 'cart',
            query: {
              act: 'books'
            }
          });

        } else {
          // 查看订单
          this.$router.push({
            path: el.link
          });
        }
      },
      confirmGet(){ // 确认收货
        this.$store.dispatch('orderFormConfirm', { // 确认收货动作
          orderId: this.$route.query.id
        });
        this.$router.replace({
          name: 'books',
          query: {
            act: this.isAct,
            flag: 'getGoods'
          }
        });
      },
      cancelGet(){  // 取消确认收货
        this.$router.replace({
          name: 'books',
          query: {
            act: this.isAct
          }
        });
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
    .formWrap {
      .vux-tab-ink-bar {
        background-color: #999 !important;
      }
      .vux-tab-selected {
        color: #333 !important;
      }
    }
  }
</style>
