<template>
  <view-box class="location" bodyPaddingTop="0" bodyPaddingBottom="0">

    <x-header title="设置地址">
      <div slot="overwrite-left" class="left-arrow" @click="go('user')"></div>
      <x-icon slot="right" @click="go('locationForm',{act:'add'})" type="plus" style="fill:#fff;"></x-icon>
    </x-header>

    <group v-for="(item,index) in common_address" :key="index" v-if="item.phone">
      <x-switch :title="item.name+'  '+item.phone" prevent-default
                v-model="item.isUsed" @on-click="changeSwitch(item)"></x-switch>
      <cell :inline-desc="item.addrName" :link="{'path':'/locationForm','query':{'id':item.id}}"></cell>
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
    computed:{
      ...mapGetters([
        'common_address'
      ])
    },
    created(){
      this.$store.dispatch('getAddress');
    },
    mounted(){},
    methods: {
      changeSwitch (item,newVal, oldVal) {
        this.$vux.loading.show({
          text: '设置成功！'
        });
        setTimeout(() => {
          this.$vux.loading.hide();
          item.isUsed = !item.isUsed;
        }, 1000)
      }
    }
  }
</script>

<style lang="less">
  .location {
    .weui-cells__title {
      font-size: 12px;
    }
    .weui-cell_switch{
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
