<template>
  <div id="app">
    <my-header :title="title"></my-header>
    <transition name="bounce" mode="in-out">
      <router-view class="app-view"></router-view>
    </transition>
    <my-menu></my-menu>
  </div>
</template>

<script>
  import myHeader from './components/myHeader.vue';
  import myFooter from './components/myFooter.vue';
  import myMenu from './components/myMenu.vue';
  export default {
    name:"app",
    components: { myFooter, myMenu, myHeader },
    data(){
      return {
          title:''
      }
    },
    methods:{
      
    }
  }
</script>

<style>
  @import './style/font/i.css';
  @import './style/app.css';
  #app{
    height: 100%;
    position: relative;
    
    -webkit-box-shadow: 0px 0px 30px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 30px rgba(0,0,0,0.5);
    overflow:hidden;
  }
  .app-view{
      position: absolute;
      top: 44px;
      bottom: 50px;
      left: 0;
      right:0;
      background-color: #fff;
      z-index: 999;
  }
  .bounce-enter-active {
    animation: bounce-in .3s;
  }
  .bounce-leave-active {
    /* animation: bounce-out 60ms; */
  }
  @keyframes bounce-in {
    0% {
      -webkit-transform: translate3d(100%,0,0);
      transform: translate3d(100%,0,0);
    }
    100% {
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }
  }
  @keyframes bounce-out {
    0% {
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }
    100% {
      -webkit-transform: translate3d(100%,0,0);
      transform: translate3d(-100%,0,0);
    }
  }
</style>