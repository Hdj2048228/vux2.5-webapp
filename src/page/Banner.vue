<template>
  <div :id="name" class="vux-1px-t">
    <tab v-model="selectBannerIndex" >
      <tab-item v-for="(banner,index) in banners" :key="index" @on-item-click="onItemClick(banner)">{{banner.value}}</tab-item>
    </tab>
    <swipeout>
      <group title="当前推荐商品">
        <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow" v-for="(item,index) in list" :key="index">
          <div slot="left-menu">
            <swipeout-button @click.native="push(item)" type="primary">查看</swipeout-button>
            <swipeout-button @click.native="del(item,index)" type="warn">删除</swipeout-button>
          </div>
          <div slot="content" class="demo-content ">
            <cell :title="item.title" is-link @click.native="push(item)">
              <img slot="icon" width="20"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
          </div>
        </swipeout-item>
      </group>
    </swipeout>
  </div>
</template>

<script>
  import { Group, Tab, TabItem, Sticky, Divider, Cell,Swipeout,SwipeoutItem,SwipeoutButton, XButton, Swiper, SwiperItem } from 'vux'
  import { mapGetters } from 'vuex'
  export default {
    name: 'banner',
    components: {
      Tab, TabItem, Sticky, Divider, XButton, Swiper,Swipeout,SwipeoutButton,SwiperItem,Group,SwipeoutItem,Cell
    },
    computed: {
      ...mapGetters([
        'banners'
      ])
    },
    data() {
      return {
        name: 'banner',
        selectBanner:{},
        selectBannerIndex: 0,
        // banners:[{key:'首页',value:'首页'},{key:'主题页',value:'主题页'},{key:'团购页',value:'团购页'},{key:'商铺页',value:'商铺页'}],
        list:[
          {title: 'NIKE品牌宣传',id: '0',icon: ''},
          {title: 'NB商铺宣传',id: '1',icon: ''},
          {title: 'NB新品广告',id: '2',icon: ''},
          {title: 'NB团购广告',id: '2',icon: ''}
        ],
      }
    },
    methods: {
      switchTabItem(){

      },
      onItemClick(index){

        console.log(index)
      },
      push(item){
        this.$router.push({path: '/bannerEdit?' + item.id})
      },
      del(item,index){

      },
      onButtonClick (type) {

      },
      handleEvents (type) {
        console.log('event: ', type)
      }
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .demo-content:before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #D9D9D9;
    color: #D9D9D9;
    transform-origin: 0 0;
    transform: scaleY(0.5);
    left: 15px;
  }
</style>
