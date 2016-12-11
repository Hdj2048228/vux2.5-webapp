<template>
  <div id="app">
    <my-header :title="title"></my-header>
    <transition name="bounce" mode="out-in">
      <router-view class="app-view"></router-view>
    </transition>
    <my-menu></my-menu>
  </div>
</template>

<script>
  import myHeader from './common/myHeader.vue';
  import myFooter from './common/myFooter.vue';
  import myMenu from './common/myMenu.vue';
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
  @import '../assets/font/i.css';
  @import 'app.css';
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
  }
  .bounce-enter-active {
    animation: bounce-in .3s;
  }
  .bounce-leave-active {
    /*animation: bounce-out .1s;*/
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
</style>