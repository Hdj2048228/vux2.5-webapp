<template>
  <div class="product" id="product">
    <div class="product-wrap">
      <div class="items">

        <div class="item" v-for="index in 15">
          <div class="media large"><img src="../../assets/img/logo.png"></div>
          <div class="content">
            <div class="prop">第{{index}}期日进斗金</div>
            <div class="prop">按日付息,到期还本</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name:"product",
  components:{  },
  data(){
    return{
        title:'产品列表',
        items:[]
    }
  },
  mounted(){
    this.$parent.title=this.title;
    this.initScroll();
  },
  methods:{
      initScroll(){
        new BScroll(document.getElementById('product'),{});
      }
  }
}
</script>

<style scoped>
  @import 'product.css';

</style>