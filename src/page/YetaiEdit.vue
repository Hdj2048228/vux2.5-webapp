<template>
  <div :id="name">
    <group>
      <x-input title="业态名字" placeholder="请输入"></x-input>
      <x-input title="业态顺序号" placeholder="请输入"></x-input>
      <uploader
        title="业态配图"
        :max="1"
        :images="images"
        :handle-click="false"
        :show-header="true"
        upload-url="uploadUrl"
        name="img"
        :params="params"
        size="small"
        @preview="previewMethod"
        @add-image="addImageMethod"
        @remove-image="removeImageMethod"
      ></uploader>
      <x-input title="说明" placeholder="请输入"></x-input>


    </group>
    <div style="padding-left: 30px;padding-right: 30px;padding-top: 30px;height: 60px;">
      <x-button style="float: left" mini  type="warn">取消</x-button>
      <x-button mini type="primary" style="float: right">确定</x-button>
    </div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, XInput, Group, XButton, Cell } from 'vux'
  import Uploader from 'vux-uploader'

  export default {
    name: 'yetai-edit',
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      Flexbox,
      FlexboxItem,
      Uploader
    },
    data() {
      return {
        name: 'yetai-edit',
        images:[],
        params:{},
      }
    },
    methods: {
      previewMethod(){},
      addImageMethod(){},
      removeImageMethod(){}
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .weui-btn + .weui-btn{
    margin-top: 0px;
  }
</style>
