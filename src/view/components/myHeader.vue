<template>
  <div class="myHeader">
  	<div class="items">
        <a class="item"></a>
        <a class="item title">{{title}}</a>
        <a class="item" href="javascript:;"><i class="icon iconfont">&#xe63f;</i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  props:['title']
}
</script>

<style lang="sass" scoped>
  .myHeader{
      width: 100%;
      height: 44px;
      background-color: #f90;
  }
  .items{
    display: -webkit-flex;
    display: flex;

    justify-content: center;
    align-items: center;

    .item{
      line-height: 44px;
      text-align: center;
      flex-grow: 1;
      color:#fff;
    }
    .item.title{
      flex-grow: 5;
    }
    .icon{
      font-size: 20px;
    }
  }
</style>