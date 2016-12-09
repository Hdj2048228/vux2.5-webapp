<template>
  <div class="user">
    <div class="user-wrap">
      <button class="btn" @click="show = !show">toggle</button>
      <transition 
          name="custom-classes-transition"
          enter-active-class="animated bounceInRight"
          leave-active-class="animated bounceOutLeft"
          mode="out-in"
      >
          <p class="box" v-if="show">animate.css</p>
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
  .btn{
    padding: 10px 20px;
  }
  .box{
    margin-top: 20px;
    font-size: 30px;
  }
</style>