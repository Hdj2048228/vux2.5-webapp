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
import myHeader from './components/myHeader/myHeader.vue';
import myFooter from './components/myFooter/myFooter.vue';
import myMenu from './components/myMenu/myMenu.vue';

export default {
  name: "app",
  components: {
    myFooter,
    myMenu,
    myHeader
  },
  data(){
    return{
      title:''
    }
  }
}
</script>