<template>
  <div class="user">
    <div class="user-wrap">
      <button @click="show = !show">toggle</button>
      <transition 
          name="custom-classes-transition"
          enter-active-class="animated bounceInRight"
          leave-active-class="animated bounceOutLeft"
          mode="out-in"
      >
          <p v-if="show">点击按钮后我将被隐藏/显示哦</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name:"user",
  components:{  },
  data(){
    return{
        title:'用户中心',
        show:true
    }
  },
  mounted(){
    this.$parent.title=this.title;
  }
}
</script>

<style scoped>
  @import '../../assets/css/animate.min.css';
  @import 'user.css';
  .user-wrap{
    padding: 20px;
  }
</style>