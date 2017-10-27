<template>
  <view-box class="cart" bodyPaddingBottom="50px" bodyPaddingTop="0">

    <x-header title="购物车"
              :left-options="{showBack:true,backText:'返回'}"
              :right-options="{showMore: true}"
              @on-click-more="menusFlag = true">
    </x-header>

    <grid class="vux-grid-list"
          v-for="(item,index) in cart_goods_list"
          @on-item-click="onItemClick(item.id)"
          :key="index">
        <a href="javascript:;" class="weui-grid" style="width: 50%;">
          <img class="grid-pic" :src="item.src">
        </a>
        <a href="javascript:;" class="weui-grid" style="width: 50%;">
          <div class="grid-padding">
            <p>烟雾传感器</p>
            <p>型号： {{item.type}}</p>
            <p>价格：{{item.price}}</p>
            <inline-x-number class="weui-num"
                             v-model="item.num" :min="0" :max="99"
                             @on-change="changeNumber(item,index,$event)">
            </inline-x-number>
          </div>
        </a>
    </grid>

    <div transfer-dom>
      <actionsheet show-cancel
                   v-model="menusFlag"
                   :menus="common_menus"
                   @on-click-menu="onMenusClose"
                   :close-on-clicking-menu="true">
      </actionsheet>
    </div>

    <div transfer-dom>
      <confirm v-model="confirmFlag" @on-confirm="onConfirm">
        <p style="text-align:center;">确定删除吗？</p>
      </confirm>
    </div>

    <tabbar>
      <tabbar-item selected>
        <span slot="label">合计：{{totalMoney | currency}}</span>
      </tabbar-item>
      <tabbar-item @on-item-click="onSubmit">
        <span slot="label">开始结算</span>
      </tabbar-item>
    </tabbar>

  </view-box>
</template>

<script>
  import {
    ViewBox,XHeader,Grid,GridItem,GroupTitle,Group,Confirm,
    TransferDom,Actionsheet,InlineXNumber,Tabbar,TabbarItem
  } from 'vux';
  import {
    mapState,mapMutations,mapGetters,mapActions
  } from "vuex";

  export default {
    name: 'cart',
    components: {
      ViewBox,XHeader,Grid,GridItem,GroupTitle,Group,Confirm,
      TransferDom,Actionsheet,InlineXNumber,Tabbar,TabbarItem
    },
    data(){
      return{
        totalMoney: 0,
        itemIndex: 0,
        delIndex: 0,
        panel_type: '5',
        confirmFlag: false,
        menusFlag: false
      }
    },
    computed:{
      ...mapGetters([
        'cart_goods_list',
        'common_menus'
      ])
    },
    created(){
      this.$store.dispatch('cart_goods_list');
    },
    mounted(){
      console.log(222,this.$store.state.vue_token);
      console.log(333,this.$store.state.Cart.goods_list);
    },
    methods: {
      /**
       * 更多菜单
       **/
      onMenusClose (key,value) {
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

      /**
       * 删除商品
       */
      onConfirm () {
        this.delGoods(this.delIndex);
      },

      /**
       * 提交订单
       */
      onSubmit(){
        this.$vux.loading.show({
          text: '生成订单...'
        });
        setTimeout(() => {
          this.$vux.loading.hide();
          this.showMenus = false;
          this.$router.push({
            name:'book',
            query:{src:'cart'}
          });
        }, 1000);
      },

      /**
       * 改变商品数
       * @param item
       * @param index
       * @param number
       */
      changeNumber(item, index, number){
        this.itemIndex = index;
        item.num = number;
        if (number <= 0) {
          this.confirmFlag = true;
          this.delIndex = index;
        }
        this.gross();
      },

      /**
       * 删除商品
       * @param index
       */
      delGoods(index){
        this.itemIndex = index;
        this.cart_goods_list.splice(this.itemIndex, 1);
      },

      /**
       * 计算总金额
       */
      gross(){
        this.totalMoney = 0;
        this.cart_goods_list.forEach(item => {
          if (item.price >= 1 && item.num >= 1) {
            this.totalMoney += item.price * item.num;
          }
        });
      }
    }
  }
</script>

<style lang="less">
  .cart {
    .weui-grids {
      padding-bottom: 20px;
      &:after,
      &:before {
        content: normal;
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
    .vux-grid-list {
      background-color: #fff;
      overflow: hidden;
      position: relative;
      &:after {
        content: " ";
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #D9D9D9;
        color: #D9D9D9;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
    }
    .weui-num {
      padding: 0;
      &:before {
        border: none;
      }
      .vux-number-selector {
        height: 18px;
        font-size: 16px;
        line-height: 18px;
      }
      .vux-number-input {
        height: 18px;
        font-size: 14px;
      }
      svg {
        width: 14px;
        height: 14px;
      }
    }
    .vux-number-input {
      width: 40px !important;
    }
    .weui-cells__title {
      margin: 0;
      padding: 10px;
      position: relative;
      span {
        padding-left: 10px;
        border-left: 3px solid cornflowerblue;
      }
      &:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #D9D9D9;
        color: #D9D9D9;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
    }
    .weui-grid {
      &:after {
        border-bottom: none;
      }
      &:before {
        content: normal;
      }
      .grid-pic {
        max-width: 120px;
        max-height: 120px;
        display: block;
      }
      .grid-padding {
        padding: 0;
      }
      p {
        line-height: 22px;
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>
