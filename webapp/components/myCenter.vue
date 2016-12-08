<template>
  <div class="myCenter">
    <my-header :title="title"></my-header>
    
    <button @click="show = !show">toggle</button>
    <transition 
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight"
        mode="out-in"
    >
        <p v-if="show">点击按钮后我将被隐藏/显示哦</p>
    </transition>
  </div>
</template>

<script>
import myHeader from './myHeader.vue';
export default {
  name:"myCenter",
  components:{ myHeader },
  data(){
    return{
        title:'个人中心',
        show:true
    }
  }
}
</script>

<style src="../assets/animate.min.css"></style>
<style scoped>
    button{
        padding: 10px 20px;
        margin:20px;
    }
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-active {
      padding-left: 10px;
      opacity: 0;
    }

    .slide-transition{
        transition: all .3s ease;
        transform: translate3d(0, 0, 0);
    }
    .slide-enter,
    .slide-leave{
        transform: translate3d(0, -100%, 0);
    }
</style>