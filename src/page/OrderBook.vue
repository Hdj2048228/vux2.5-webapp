<template>
  <view-box class="book" bodyPaddingBottom="60px" bodyPaddingTop="0">

    <x-header title="订单详情"
              :left-options="{showBack:true,backText:'返回'}"
              :right-options="{showMore: true}"
              @on-click-more="menusFlag = true">
    </x-header>
    <group class="status">
      <cell title="订单状态" value="待提交" :border-intent="false"></cell>
    </group>

    <group-title>商品清单</group-title>

    <!-- 待支付 -->
    <grid :cols="3">
      <grid-item :label="item.num+'x'" v-for="(item,index) in common_goods_list" :key="index">
        <img @click="go('detail',{id:item.id})" slot="icon" :src="item.pic">
      </grid-item>
    </grid>

    <!-- 收货地址 -->
    <group class="dispatch" title="收货地址" v-if="addDefault">
      <cell v-for="(item,index) in common_address" :key="index" v-if="item.isUsed"
            :title="item.name+' '+item.phone"
            :inline-desc="item.addrName"
            :link="{path:'/location'}"></cell>
    </group>

    <!-- 没有默认地址，请选择 -->
    <group class="dispatch" title="收货地址" v-else>
      <cell title="选择默认地址" :link="{path:'/location'}"></cell>
    </group>

    <group class="dispatch" :title="'配送'">
      <cell is-link :border-intent="false" :title="'支付配送'"
            :arrow-direction="showCell ? 'up' : 'down'"
            @click.native="showCell = !showCell">
      </cell>

      <template v-if="showCell">
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

    <tabbar>
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
        showCell: false
      }
    },
    computed: {
      ...mapState(['menus']),
      ...mapGetters([
        'common_goods_list',
        'common_goods_money',
        'common_order_FormInfo',
        'common_order_FormNumber',
        'common_address'
      ]),
      menusFlag: {
        get(){
          return this.$store.state.menusFlag;
        },
        set(newValue){
          return this.$store.state.menusFlag = newValue;
        }
      },
      addDefault(){
        let flag = this.$store.getters.common_address.filter(item => {
          return item.isUsed;
        });
        return flag.length > 0;
      }
    },
    created(){
      if (typeof this.$route.query.act !== 'undefined') {
        if (this.$route.query.act === 'cart') {
          this.$store.dispatch('getAddress');      // 默认地址
          this.$store.dispatch('cartGoodsList');   // 购物车商品列表
        }
      }
    },
    mounted(){
    },
    methods: {
      ...mapMutations(['MenusClose']),
      onSubmit(){

        // 数据为空不提交
        if(typeof this.common_goods_list[0] ==='undefined'){
          this.$vux.toast.text('请选择商品！');
          this.$router.push('home');
        }

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

        if (data.orderCartList.length > 0 && data.totalPrice > 0) {

          // 提交到服务器
          this.$store.dispatch('orderFormSave', data).then( data => {
            // console.log('book -> orderFormSave',data);
          });

          this.$vux.toast.show({
            text: '提交成功！'
          });

          setTimeout(() => {
            this.$vux.toast.hide();
            this.menusFlag = false;
            this.$router.push({
              name: 'payList',
              query: {
                orderNumber: this.common_order_FormNumber
              }
            });
          }, 500);
        } else {
          this.$vux.toast.text('请选择商品！');
          this.$router.push('home');
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
