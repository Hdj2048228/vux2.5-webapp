<template>
  <div class="myHeader">
  	<ul class="wrap">
        <li class="l"></li>
        <li class="c"><em>{{title}}</em></li>
        <li class="r"><a href="javascript:;" class="iconfont icon-gouwuche"></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  props:['title']
}
</script>

<style src="../assets/common.css"></style>
<style scoped>
    .myHeader{
        width: 100%;
        height: 44px;
        background-color: #f90;
    }
</style>
