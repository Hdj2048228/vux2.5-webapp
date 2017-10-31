<template>
  <view-box class="PayZhifubao" bodyPaddingBottom="0" bodyPaddingTop="0">

    <x-header title="支付方式"
              :left-options="{showBack:true,backText:'返回'}"
              :right-options="{showMore: true}"
              @on-click-more="menusFlag = true">
    </x-header>

    <box gap="10px 10px" class="pay_zhifubao" v-html="this.formStr">
      <x-button plain action-type="button" style="display: none"></x-button>
    </box>

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
    ViewBox, XHeader, TransferDom, Actionsheet, Panel, Box, XButton
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'AliPay',
    components: {
      ViewBox, XHeader, TransferDom, Actionsheet, Panel, Box, XButton
    },
    data () {
      return {
        formStr: null
      }
    },
    computed: {
      ...mapState([
        'menus'
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
      if (typeof this.$route.params.formStr !== 'undefined') {
        this.formStr = this.$route.params.formStr;
      }
    },
    mounted(){
      this.$nextTick(() => {
        if (window.location.href.indexOf('total_amount') !== -1) {
          this.formStr = `
            <a href="javascript:;" class="weui-btn weui-btn_default weui-btn_plain-default" onclick="backHome()">
            支付已完成，回到首页
            </a>
          `
        } else if (typeof document.forms['_alipaysubmit_'] === 'undefined') {
          console.log('submit is a undefined');
        } else {
          document.forms['_alipaysubmit_'].submit();
        }

        window.backHome = function () {
          app.$router.push('home');
        }
      });
    },
    methods: {
      ...mapMutations(['MenusClose'])
    }
  }
</script>

<style lang="less">
  .PayZhifubao {
    background-color: #EFEFF4;
    .pay_zhifubao {
      border-color: rgb(204, 204, 204);
    }
  }
</style>
