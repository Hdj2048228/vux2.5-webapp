<template>
  <div id="app">
    <transition name="bounce" mode="out-in">
      <router-view class="scroll"></router-view>
    </transition>
    <my-menu></my-menu>
  </div>
</template>

<script>
  import myFooter from './components/myFooter.vue';
  import myMenu from './components/myMenu.vue';
  export default {
    name:"app",
    components: { myFooter, myMenu }
  }
</script>

<style scoped>
    #app{
      height: 100%;
      position: relative;
      overflow:hidden;
    }

    .bounce-enter-active {
      animation: bounce-in .3s;
    }
    .bounce-leave-active {
      animation: bounce-out .1s;
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