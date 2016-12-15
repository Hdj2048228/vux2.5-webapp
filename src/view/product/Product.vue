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
  components:{ BScroll },
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

<style lang="sass" scoped>
  /* @import 'product.css'; */
  .item {
      min-height: 65px;
      padding: 10px 15px;
      background-color: #fff;
      position: relative;
      &:before {
        position: absolute;
        left: 0;
        right: 0;
        top: -1px;
        border-top: 1px solid #f1f1f1;
        content: "";
    }
    .prop {
        width: 100%;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
    }
    .media {
        width: 60px;
        height: 60px;
        line-height: 60px;
        margin-right: .8rem;
        text-align: center;
        position: relative;
        z-index: 2;
        float: left;
        margin-right: 10px;
        img {
            width: 100%;
            max-height: 100%;
            border-radius: inherit;
        }
    }
    .content {
        overflow: hidden;
    }
  }
</style>