<template>
  <div :id="name">
    <scroller :height="height()" lock-x @on-scroll-bottom="onScrollBottom" @on-pulldown-loading="pullDown"	 :use-pulldown="true"	:use-pullup="true" :pulldown-config="pulldownConfig" :pullup-config="pullupConfig"			ref="scrollerBottom" :scroll-bottom-offst="200">
      <group style="padding-bottom: 10px">
        <radio :options="list"></radio>
      </group>
    </scroller>
    <footer class="bottom-div">
    <flexbox>
      <flexbox-item>
        <!--<x-button type="primary" mini>primary</x-button>-->
      </flexbox-item>
      <flexbox-item>
        <x-button type="warn" mini @click="back">返回</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="primary" @click="save" mini>确定</x-button>
      </flexbox-item>

      <flexbox-item>
        <!--<x-button type="primary" mini>primary</x-button>-->
      </flexbox-item>
    </flexbox>
    </footer>
  </div>

</template>

<script>
  import {Scroller, Divider, Spinner, Flexbox, FlexboxItem, XButton, Group, Cell, LoadMore, Radio} from 'vux'
 import { mapGetters } from 'vuex'
  export default {
    name: 'choose-page',
    components: {
      Scroller,
      Divider,
      Spinner,
      XButton,
      Group,
      Cell,
      LoadMore,
      Flexbox,
      FlexboxItem,
      Radio
    },
    data() {
      return {
        name: '选择商品',
        onFetching: false,
        list: [{key: 'NIKE套装', value: 'NIKE套装', icon: ''},
          {key: 'NB套装', value: 'NB套装', icon: ''},
          {key: 'NB994', value: 'NB994', icon: ''},
          {key: 'NB998', value: 'NB998', icon: ''}, {key: 'NIKE套装', value: 'NIKE套装', icon: ''},
          {key: 'NB套装', value: 'NB套装', icon: ''},
          {key: 'NB994', value: 'NB994', icon: ''},
          {key: 'NB998', value: 'NB998', icon: ''}
        ],
      }
    },
    computed: {
      ...mapGetters([
        'pullupConfig',
        'pulldownConfig'
      ])
    },
    methods: {
      height(){
        let height = document.body.clientHeight - 50;
        const ua = window.navigator.userAgent.toLowerCase();
        if (!(ua.match(/MicroMessenger/i) == 'micromessenger')) {
          height -= 46; // 微信端-46 x-header的高度
        }
       return height + 'px';
      },
      onScrollBottom() {
        if (this.onFetching) {
          // do nothing
        } else {
          this.onFetching = true
          setTimeout(() => {
            // this.bottomCount += 10
            this.list =  this.list.concat(  [{key: 'NIKE套装', value: 'NIKE套装', icon: ''},
              {key: 'NB套装', value: 'NB套装', icon: ''},
              {key: 'NB994', value: 'NB994', icon: ''},
              {key: 'NB998', value: 'NB998', icon: ''}, {key: 'NIKE套装', value: 'NIKE套装', icon: ''},
              {key: 'NB套装', value: 'NB套装', icon: ''},
              {key: 'NB994', value: 'NB994', icon: ''},
              {key: 'NB998', value: 'NB998', icon: ''}])
            this.$nextTick(() => {
              this.$refs['scrollerBottom'].reset()
              this.$refs['scrollerBottom'].donePullup()

            })
            this.onFetching = false
          }, 200)
        }
      },
      pullDown(){
        // 用户触发下拉刷新状态，监听该事件以获取加载新数据
        console.log('pulldwo')
        setTimeout(()=>{
          this.list =  [{key: 'NIKE套装', value: 'NIKE套装', icon: ''}]
          this.$nextTick(() => {
            this.$refs['scrollerBottom'].donePullup();
            this.$refs['scrollerBottom'].reset({
              top: 0
            })
          })

        },100)

      },
      back() {
        this.$router.go(-1)
      },
      save() {
        this.$router.go(-1)
      }
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .bottom-div{
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 40px;
    /*padding-top: 5px;*/
  }
</style>
