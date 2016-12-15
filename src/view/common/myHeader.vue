<template>
  <div class="myHeader">
  	<div class="g-tit">
        <a class="l"></a>
        <a class="c"><em>{{title}}</em></a>
        <a class="r" href="javascript:;"><i class="iconfont icon-gouwuche"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  props:['title']
}
</script>

<style scoped>
  .myHeader{
      width: 100%;
      height: 44px;
      background-color: #f90;
  }
</style>
