<template>
  <div id="app">
    <my-header :title="title"></my-header>
    <transition name="slide" mode="in-out">
      <router-view class="app-view"></router-view>
    </transition>
    <my-menu></my-menu>
  </div>
</template>
<script>
import myHeader from './components/myHeader.vue';
import myFooter from './components/myFooter.vue';
import myMenu from './components/myMenu.vue';
import BScroll from 'better-scroll';
export default {
  name: "app",
  components: {
    myFooter,
    myMenu,
    myHeader,
    BScroll
  },
  data() {
    return {
      title: ''
    }
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll() {
      new BScroll('.app-view', {
        preventDefault: true,
        click: true
      });
    }
  }
}
</script>
<style lang="sass" scoped>
@import './style/font/i.css';
@import './style/app.css';
#app {
  height: 100%;
  -webkit-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
}

.app-view {
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 999;
}

.slide-enter-active {
  -webkit-animation: slide-in .3s;
  animation: slide-in .3s;
}

.slide-leave-active {
  /* -webkit-animation: slide-out 60ms; */
  /* animation: slide-out 60ms; */
}

@-webkit-keyframes slide-in {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slide-in {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@-webkit-keyframes slide-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes slide-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
