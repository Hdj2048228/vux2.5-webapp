<template>
  <view-box class="location" bodyPaddingTop="0" bodyPaddingBottom="0">

    <x-header title="设置地址" :left-options="{showBack:true,backText:'返回'}">
      <x-icon slot="right" @click="createAddress" type="plus" style="fill:#fff;"></x-icon>
    </x-header>

    <group v-for="(item,index) in common_address" :key="index" v-if="item.phone">
      <x-switch :title="item.name+'  '+item.phone" prevent-default
                v-model="item.isUsed" @on-click="changeSwitch(item)"></x-switch>
      <cell :title="item.addrName" :inline-desc="item.addrDetail" :link="{path:'/locationForm',query:{id:item.id}}"></cell>
    </group>

  </view-box>
</template>

<script>
  import {
    ViewBox, XHeader, XSwitch, TransferDom, Actionsheet, Group, GroupTitle, Cell, Toast
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'location',
    components: {
      ViewBox, XHeader, XSwitch, TransferDom, Actionsheet, Group, GroupTitle, Cell, Toast
    },
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'common_address'
      ])
    },
    created(){
      this.$store.dispatch('getAddress');
    },
    mounted(){
    },
    methods: {
      changeSwitch (item, newVal, oldVal) {
        if (item.id !== undefined && item.id.length === 32) {
          this.common_address.forEach((item, index) => {
            item.isUsed = false;
          });
          item.isUsed = true;
          this.$store.dispatch('selectAddress', item.id);
        }

        /*
         this.$vux.loading.show({
         text: '设置成功！'
         });
         setTimeout(() => {
         this.$vux.loading.hide();
         item.isUsed = !item.isUsed;
         }, 1000);
         */
      },
      createAddress(){
        this.$router.replace({
          name:'locationForm',
          query:{act:'add'}
        })
      }
    }
  }
</script>

<style lang="less">
  .location {
    .weui-cells__title {
      font-size: 12px;
    }
    .weui-cell_switch {
      .weui-label {
        font-size: 16px;
      }
    }
    .vux-cell-bd {
      .vux-label {
        font-size: 16px;
      }
    }
  }
</style>
