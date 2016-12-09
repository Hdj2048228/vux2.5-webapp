<template>
  <div class="home">
    <div class="home-wrap scroll">
      <div class="notice">
        <i class="icon-shengyin"></i>
        <em>新手专享</em>
      </div>
      <div class="banner">
        <my-slide :swipe="swipe">
          <div class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in imgs">
          </div>
        </my-slide>
      </div>
      <div class="menu-wrap">
        <div class="menu-item bg-red">
          <i class="iconfont icon-wodedingdan"></i>
          <div class="item-in">
            <h2>累计交易量</h2>
            <p>602,130,619元</p>
          </div>
        </div>
        <div class="menu-item bg-deeporange">
          <i class="iconfont icon-wodejuhuasuan"></i>
          <div class="item-in">
            <h2>投资人次</h2>
            <p>110,545人</p>
          </div>
        </div>
        <div class="menu-item bg-deeppurple">
          <i class="iconfont icon-liwu"></i>
          <div class="item-in">
            <h2>新手专享</h2>
            <p>注册送99元红包</p>
          </div>
        </div>
        <div class="menu-item bg-blue">
          <i class="iconfont icon-wodejuhuasuan"></i>
          <div class="item-in">
            <h2>注册用户</h2>
            <p>268,603人</p>
          </div>
        </div>
      </div>

      <div class="brand bg-green">
        <i class="iconfont icon-shouhuodizhi fl"></i>
        <h2 class="fl">金融学堂</h2>
        <p class="fl ml20">理财难题 | 菜鸟必修</p>
      </div>

      <div class="menu-wrap">
        <div push="list2"  class="menu-item bg-lightgreen">
          <i class="iconfont icon-shezhi"></i>
          <div class="item-in">
            <h2>八戒通宝</h2>
            <p>智能理财,存取灵活</p>
          </div>
        </div>
        <div  class="menu-item bg-purple item-max">
          <i class="iconfont icon-iconfont5 icon"></i>
          <div class="item-in">
            <h2>五大特色</h2>
            <h2>保障收益</h2>
          </div>
        </div>
        <div push="list2"  class="menu-item bg-teal">
          <i class="iconfont icon-wodehongbao"></i>
          <div class="item-in">
            <h2>投资理财</h2>
            <p>按日付息,到期还本</p>
          </div>
        </div>
      </div>

      <div class="reg-wrap">
        <p><input type="text" placeholder="请输入姓名"></p>
        <p><input type="number" placeholder="请输入手机号"></p>
        <p><a href="javascript:;" class="reg-submit">立即加入</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
import mySlide from '../common/mySlide.vue';

export default {
  name: 'home',
  components:{ mySlide },
  data(){
    return{
      title:'WebApp',
      show:false,
      count:10,
      swipe: {
        activeIndex: 0
      },
      contacts: [
        {text: 'Page 1'}, 
        {text: 'Page 2'}, 
        {text: 'Page 3'}, 
        {text: 'Page 4'}
      ],
      imgs:[
        'http://covteam.u.qiniudn.com/test18.jpg',
        'http://covteam.u.qiniudn.com/test19.jpg',
        'http://covteam.u.qiniudn.com/test20.jpg',
        'http://covteam.u.qiniudn.com/test21.jpg'
      ]
    }
  },
  mounted(){
    this.$parent.title=this.title;
  },
  computed: {
    ...mapState(['count'])
  },
  methods:{
    ...mapMutations([
        'add',
        'reduce'
      ]),
    ...mapActions([
        'addPlus'
      ]),
    ...mapActions({
        reducePlus:'reducePlus'
    }),
    turnTo (index) {
      this.$children.map(swipe => {
          if (swipe.turnTo) {
              swipe.turnTo(index)
          }
      })
    }
  }
}
</script>

<style scoped>
  @import 'home.css';
  .home-wrap{}
</style>