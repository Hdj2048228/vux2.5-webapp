<template>
  <div class="home" id="home">
    <div class="home-wrap">
      <div class="home-items notice yellow">
        <i class="home-item icon iconfont">&#xe64c;</i>
        <a class="home-item" href="javascript:;">新手专享</a>
      </div>
      <div class="home-items slide">
        <my-slide :swipe="swipe">
          <div class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in imgs">
          </div>
        </my-slide>
      </div>
      <div class="home-items">
        <div class="card red" @click="$store.commit('add')">
          <i class="icon iconfont">&#xe655;</i>
          <div class="text">
            <h2>累计交易量</h2>
            <p>100,000,{{ $store.state.count }}元</p>
          </div>
        </div>
        <div class="card deeporange" @click="$store.commit('reduce')">
          <i class="icon iconfont">&#xe659;</i>
          <div class="text">
            <h2>投资人次</h2>
            <p>100,00{{ $store.state.count }}人</p>
          </div>
        </div>
        <div class="card deeppurple" @click="add()">
          <i class="icon iconfont">&#xe685;</i>
          <div class="text">
            <h2>新手专享</h2>
            <p>注册送{{ count }}元红包</p>
          </div>
        </div>
        <div class="card blue" @click="reduce()">
          <i class="icon iconfont">&#xe659;</i>
          <div class="text">
            <h2>注册用户</h2>
            <p>100,00{{ count }}人</p>
          </div>
        </div>
      </div>
      <div class="home-items brand green">
        <i iconfo class="icon iconfont">&#xe64e;</i>
        <div class="home-item">
          <h2 class="gap">金融学堂</h2>
          <p class="gap">理财难题 | 菜鸟必修</p>
        </div>
      </div>
      <div class="home-items">
        <div class="card lightgreen">
          <i class="icon iconfont">&#xe64b;</i>
          <router-link to="/user">
          <div class="text">
            <h2>加息秘籍</h2>
            <p>智能理财,存取灵活</p>
          </div>
          </router-link>
        </div>
        <div class="card purple max">
          <i class="icon iconfont">&#xe63a;</i>
          <router-link to="/user">
          <div class="text">
            <h2>五大特色</h2>
            <h2>保障收益</h2>
          </div>
          </router-link>
        </div>
        <div class="card teal">
          <i class="icon iconfont">&#xe657;</i>
          <router-link to="/user">
          <div class="text">
            <h2>投资理财</h2>
            <p>按日付息,到期还本</p>
          </div>
          </router-link>
        </div>
      </div>
      <div class="reg-wrap">
        <p>
          <input class="inp" type="text" placeholder="请输入姓名">
        </p>
        <p>
          <input class="inp" type="number" placeholder="请输入手机号">
        </p>
        <p><a href="javascript:;" class="sub">立即加入</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import mySlide from '../components/mySlide/mySlide.vue';
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex';

export default {
  name: 'home',
  components: {
    mySlide
  },
  data() {
    return {
      title: 'WebApp',
      swipe: {
        activeIndex: 0
      },
      contacts: [{
        text: 'Page 1'
      }, {
        text: 'Page 2'
      }, {
        text: 'Page 3'
      }, {
        text: 'Page 4'
      }],
      imgs: [
        'http://covteam.u.qiniudn.com/test18.jpg',
        'http://covteam.u.qiniudn.com/test19.jpg',
        'http://covteam.u.qiniudn.com/test20.jpg',
        'http://covteam.u.qiniudn.com/test21.jpg'
      ]
    }
  },
  computed: {
    ...mapState(['count'])
  },
  mounted() {
    this.$parent.title = this.title;
    new this.BScroll('#home', {
      preventDefault: true,
      click: true
    });
  },
  methods: {
    ...mapMutations(['add','reduce']),
    turnTo(index) {
      this.$children.map(swipe => {
        if (swipe.turnTo) {
          swipe.turnTo(index)
        }
      })
    }
  }
}
</script>