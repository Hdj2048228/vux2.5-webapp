<template>
  <div class="product" id="product">
    <div class="product-items">
      <div class="product-item" v-for="index in 15">
        <div class="media"><img src="../static/img/logo.png"></div>
        <div class="content">
          <div class="prop">第{{index}}期日进斗金</div>
          <div class="prop">按日付息,到期还本</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "product",
    data() {
      return {
        title: '产品列表',
        items: []
      }
    },
    mounted() {
      this.$parent.title = this.title;
      new this.BScroll('#product', {
        preventDefault: true,
        click: true
      });
    },
    methods: {}
  }
</script>