<template>
  <view-box class="book" bodyPaddingBottom="60px" bodyPaddingTop="0">

    <x-header title="删除订单详情"
              :left-options="{showBack:true,backText:'返回'}">
    </x-header>

    <div transfer-dom>
      <confirm v-model="confirmFlag" @on-confirm="confirmDel" @on-cancel="cancelDel">
        <p style="text-align:center;">确定删除吗？</p>
      </confirm>
    </div>

  </view-box>
</template>

<script>
  import {
    ViewBox, XHeader, TransferDom, Confirm
  } from 'vux';

  export default {
    name: 'book',
    components: {
      ViewBox, XHeader, TransferDom, Confirm
    },
    data () {
      return {
        confirmFlag: false
      }
    },
    computed: {},
    created(){
      if (this.$route.query.src === 'books' && typeof this.$route.query.id !== undefined) {
        if (this.$route.query.id.length === 32) {
          this.confirmFlag = true;  // 删除对话框
        }
      }
    },
    mounted(){

    },
    methods: {
      confirmDel(){
        this.$store.dispatch('orderFormDelete', { // 订单详情
          orderId: this.$route.query.id
        });
        this.$router.push({
          name:'books',
          query:{
            act:'all'
          }
        });
      },
      cancelDel(){
        this.$router.push({
          name:'books',
          query:{
            act:'all'
          }
        });
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
