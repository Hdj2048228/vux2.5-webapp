<template>
  <div class="myHeader">
  	<div class="nav-items">
        <a class="nav-item"></a>
        <a class="nav-item title">{{title}}</a>
        <a class="nav-item" href="javascript:;"><i class="icon iconfont">&#xe63f;</i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  props:['title'],
  data(){
    return{}
  },
  mounted(){},
  methods:{}
}
</script>

<style lang="sass" scoped>
  .myHeader{
      width: 100%;
      height: 42px;
      background-color: #f90;
  }
  .nav-items{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;

    .nav-item{
      line-height: 42px;
      text-align: center;
      -webkit-flex-grow: 1;
      flex-grow: 1;
      color:#fff;
    }
    .nav-item.title{
      -webkit-flex-grow: 5;
      flex-grow: 5;
    }
    .icon{
      font-size: 20px;
    }
  }
</style>