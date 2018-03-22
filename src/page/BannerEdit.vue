<template>
  <div :id="name">
    <group>
      <selector v-model="banner.index" title="位置类型 " placeholder="请选择" :options="banners"></selector>
      <x-input v-model="banner.code" title="广告编号 " placeholder="请输入"></x-input>
      <x-input v-model="banner.name" title="广告名称 " placeholder="请输入"></x-input>
      <x-input v-model="banner.ownername" title="广告主名称"  placeholder="请输入"></x-input>
      <uploader
        title="广告配图 (图片建议800*600)"
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
      <selector v-model="banner.WindowsType" title="链接类型 " placeholder="请选择" :options="options" @on-change="linkTypeChange"	></selector>
      <x-input  v-model="banner.url"  title="链接地址 "  placeholder="请输入"></x-input>
      <x-input  v-model="banner.orderid" title="顺序号  " placeholder="请输入"></x-input>
      <x-input  v-model="banner.stime"  @focus="showtime(banner.stime)" title="开始时间 "  placeholder="请输入"></x-input>
      <x-input  v-model="banner.etime" title="结束时间 " placeholder="请输入"></x-input>

      <cell style="padding-left: 30px;padding-right: 30px;padding-top: 30px;height: 60px;">
        <x-button slot="title" @click="cancel" mini  type="warn">取消</x-button>
        <x-button mini type="primary" @click="save" style="float: right">确定</x-button>
      </cell>
    </group>
  </div>
</template>

<script>
  // import ColorPicker from 'colorPicker-vue'
  import {Flexbox, FlexboxItem, Selector, XInput, Group, XButton, Cell } from 'vux'
  import Uploader from 'vux-uploader'
  import { mapGetters } from 'vuex'
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
        banner: {index: null,code: '',name: '',ownername: '',imgurl: '',WindowsType: null,url: '',orderid: '',stime: '',etime: ''},
        params:{code: '', name: '', orderid: '', filepath: '', isBackColor: '', BackColor: '#000'},
        options: [{key: '外部页面', value: '外部页面'}, {key: '主题页面', value: '主题页面'},{key: '商铺页面', value: '商铺页面'}, {key: '商品页面', value: '商品页面'}],
      }
    },
    computed: {
      ...mapGetters([
        'banners'
      ])
    },
    watch:{},
    methods: {
      showtime(value){
        this.$vux.datetime.show({
          value: "", // 其他参数同 props
          format: 'YYYY-MM-DD hh:mm',
          onHide () {
            const _this = this
          },
          onShow () {
            const _this = this
          }
        })
      },
      previewMethod(){},
      addImageMethod(){},
      removeImageMethod(){},
      headleChangeColor(){
        console.log(this.params.BackColor + 'back color')
      },
      linkTypeChange(){
        if(this.selectBannerIndex === 0){

        }else
        // this.$router.push({path: '/chooseProduct'})
        console.log(this.banner.WindowsType)
      },
      save() {

      },
      cancel() {

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
