<template>
  <div class="product">
    <iscroll-lite class="scroll-view">
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
    </iscroll-lite>
  </div>
</template>

<script>
import IscrollLite from 'vue-iscroll-lite';
export default {
  name:"product",
  components:{ IscrollLite },
  data(){
    return{
        title:'产品列表',
        items:[]
    }
  },
  mounted(){
    this.$parent.title=this.title;
  }
}
</script>

<style scoped>
  @import 'product.css';

</style>