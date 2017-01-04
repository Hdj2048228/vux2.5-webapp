<template>
  <div class="home" id="home">
    <div class="home-wrap">
      <div class="items notice yellow">
        <i class="item icon iconfont">&#xe64c;</i>
        <a class="item" href="javascript:;">新手专享</a>
      </div>
      <div class="items slide">
        <my-slide :swipe="swipe">
          <div class="rd-swipe-item" :style="{ 'background-image': `url(${img})` }" v-for="(img, index) in imgs">
          </div>
        </my-slide>
      </div>
      <div class="items">
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
      <div class="items brand green">
        <i iconfo class="icon iconfont">&#xe64e;</i>
        <div class="item">
          <h2 class="gap">金融学堂</h2>
          <p class="gap">理财难题 | 菜鸟必修</p>
        </div>
      </div>
      <div class="items">
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
import mySlide from './components/mySlide.vue';
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
<style lang="sass" scoped>
.home-wrap {
  background-color: #fff;
  padding-bottom: 10px;
}
.items{
  overflow: hidden;
  a{
    color:#fff;
  }
  .item{
    line-height: 30px;
  }
}
.notice{
  width: 100%;
  height: 30px;
  overflow:hidden;
  .item{
    color: #f96;
  }
  .item.icon{
    padding-left: 10px;
  }
}

.card {
  float:left;
  width: 47%;
  height: 90px;
  color: #fff;
  margin: 2% 0 0 2%;
  overflow:hidden;
  .icon {
    float:left;
    width: 30%;
    height: 90px;
    line-height: 90px;
    text-align: center;
    font-size: 40px;
  }
  .text {
    margin-top: 25px;
    overflow:hidden;
    h2 {
      font-size: 18px;
    }
    p{
      font-size: 12px;
    }
  }
  &.max {
    height: 189px;
    float:right;
    margin-right: 2%;
    text-align: center;
    .icon,
    .text {
      width: 100%;
    }
    .text {
      margin: 0;
    }
    .icon {
      font-size: 70px;
    }
  }
}

.brand {
  width: 96%;
  height: 60px;
  margin: 10px auto;
  color: #fff;
  overflow: hidden;
  .item{
    margin-top:12px;
  }
  .icon{
    float:left;
    width: 50px;
    line-height: 60px;
    text-align: center;
    font-size: 40px;
  }
  .gap{
    display:inline-block;
    font-size: 16px;
  }
}

.reg-wrap {
  text-align: center;
  .inp,
  .sub {
    display: block;
    margin: 10px auto;
    width: 70%;
    height: 18px;
    line-height: 18px;
    border-radius: 3px;
    padding: 5px 10px;
  }
  .inp {
    border: 1px solid #F47F16;
    outline: none;
  }
  .inp:focus {
    border: 1px solid #F23030;
  }
  .sub {
    color: #fff;
    background-color: #F47F16;
  }
}
</style>