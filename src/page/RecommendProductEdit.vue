<template>
  <div :id="name">
    <group>

      <x-input v-model="product.name" title="商品名称  " placeholder="请输入"></x-input>
      <x-input v-model="product.Oprice" title="原价格   " placeholder="请输入"></x-input>
      <x-input v-model="product.orderid" title="推荐标题 "  placeholder="请输入"></x-input>
      <x-input v-model="product.sellpoint" title="卖点介绍 "  placeholder="请输入"></x-input>
      <uploader
        title="商品配图"
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
      <selector v-model="params.isBackColor" title="显示类型 " :options="typeOptions"></selector>
      <x-input v-model="params.BackColor" @click.native="showColorPicker" title=""  placeholder="请输入">
        <span slot="label">
          背景色值
          <color-picker  style="z-index: 9999;width: 50px;" ref="colors" v-model="params.BackColor" :value="params.BackColor" @change="headleChangeColor"> 背景色值 </color-picker>

        </span>
      </x-input>

      <!--<radio title="商品标签" :options="tagOptions" v-model="product.Orderid"></radio>-->

      <cell title="商品标签"  v-model="product.Orderid" placeholder="请输入">
        <span v-for="(item,index) in tagOptions" >
           <input type="radio" :id='item.key':value="item.key" /><label :for="item.key">{{item.value}}</label>
        </span>
      </cell>
      <x-input title="顺序号" v-model="product.Orderid" placeholder="请输入"></x-input>
      <selector v-model="product.saleflag" title="是否上架" :options="options"></selector>

      <cell style="padding-left: 30px;padding-right: 30px;padding-top: 30px;height: 60px;">
        <x-button slot="title" mini  type="warn">取消</x-button>
        <x-button mini type="primary" style="float: right">确定</x-button>
      </cell>
    </group>

  </div>
</template>

<script>
  // import ColorPicker from 'colorPicker-vue'
  import {Flexbox, FlexboxItem, Selector, XInput, Group, XButton, Radio,Cell } from 'vux'
  import Uploader from 'vux-uploader'
  import ColorPicker from '../plugins/vue-color-picker/colorPicker'
  export default {
    components: {
      Radio,
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
        name: 're-pro-edit',
        images:[],
        product:{ name: '', Oprice:'', sellpoint:'', orderid: '', imageurl: '', showtype: '', isBackColor: '', BackColor: '#000', saleflag:'0'},
        params: {},
        typeOptions: [{key: '0', value: '每行2个'}, {key: '1', value: '每行1个'}],
        options: [{key: '0', value: '是'}, {key: '1', value: '否'}],
        tagOptions: [{key: 'newflag', value: '新品'}, {key: 'groupflag', value: '优惠'}, {key: 'discountflag', value: '团购'}],

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
