<template>
  <div :id="name">
    <group>

      <x-input v-model="params.code" title="分类编号 " placeholder="请输入"></x-input>
      <x-input v-model="params.name" title="分类名称 " placeholder="请输入"></x-input>
      <x-input v-model="params.orderid" title="顺序号  "  placeholder="请输入">
      </x-input>
      <selector v-model="params.isBackColor" title="是否显示背景" :options="options"></selector>
      <x-input v-model="params.BackColor" @click.native="showColorPicker" title=""  placeholder="请输入">
        <span slot="label">
          背景色值
          <color-picker  style="z-index: 9999;width: 50px;" ref="colors" v-model="params.BackColor" :value="params.BackColor" @change="headleChangeColor"> 背景色值 </color-picker>

        </span>
      </x-input>

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

      <cell style="padding-left: 30px;padding-right: 30px;padding-top: 30px;height: 60px;">
        <x-button slot="title" mini  type="warn">取消</x-button>
        <x-button mini type="primary" style="float: right">确定</x-button>
      </cell>
    </group>

  </div>
</template>

<script>
  // import ColorPicker from 'colorPicker-vue'
  import {Flexbox, FlexboxItem, Selector, XInput, Group, XButton, Cell } from 'vux'
  import Uploader from 'vux-uploader'
  import ColorPicker from '../plugins/vue-color-picker/colorPicker'
  export default {
    name: 'category-edit',
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      Selector,
      ColorPicker,
      Flexbox,
      FlexboxItem,
      Uploader
    },
    data() {
      return {
        name: 'category-edit',
        images:[],
        params:{code: '', name: '', orderid: '', filepath: '', isBackColor: '', BackColor: '#000'},
        options: [{key: '0', value: '是'}, {key: '1', value: '否'}],
      }
    },
    methods: {
      showColorPicker(){
        // let index = this.$refs['colors'].$refs['colorPickerShow'];
        let index = this.$refs['colors'];
        // index.triggerHtml5Color()
        // index.triggerColorPanel()
        index.openStatus = !index.disabled
        // index = true;
        // console.log(index)

        // index.click();
      },
      previewMethod(){},
      addImageMethod(){},
      removeImageMethod(){},
      headleChangeColor(){
        console.log(this.params.BackColor + 'back color')
      }

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
