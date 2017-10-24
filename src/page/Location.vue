<template>
  <view-box class="location" bodyPaddingTop="0" bodyPaddingBottom="0">

    <x-header title="设置地址">
      <div slot="overwrite-left" class="left-arrow" @click="go('user')"></div>
      <x-icon slot="right" @click="go('locationForm',{act:'add'})" type="plus" style="fill:#fff;"></x-icon>
    </x-header>

    <group class="vux-group" :title="'收货地址'">
      <cell v-for="(item,index) in common_address"
            :key="index"
            :title="item.name+'  '+item.phone"
            :inline-desc="item.addrName"
            :link="{'path':'/locationForm','query':{'id':item.id}}">
      </cell>
    </group>

  </view-box>
</template>

<script>
  import {
    ViewBox, XHeader, TransferDom, Actionsheet, Group, Cell, Toast
  } from 'vux';
  import {
    mapState, mapMutations, mapGetters, mapActions
  } from "vuex";

  export default {
    name: 'location',
    components: {
      ViewBox, XHeader, TransferDom, Actionsheet, Group, Cell, Toast
    },
    data () {
      return {

      }
    },
    computed:{
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
      onClickBack(){
      }
    }
  }
</script>

<style lang="less">
  .location {
    .weui-cells__title {
      font-size: 12px;
    }
    .vux-cell-bd {
      .vux-label {
        font-size: 16px;
      }
    }
  }
</style>
