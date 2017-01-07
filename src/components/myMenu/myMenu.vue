<template>
  <div class="myMenu" ref="myMenu">
    <div class="menu">
      <router-link class="btn" to="/home">
        <i class="icon iconfont">&#xe64f;</i>
        <em class="txt">首页</em>
      </router-link>
      <router-link class="btn" to="/product">
        <i class="icon iconfont">&#xe643;</i>
        <em class="txt">产品</em>
      </router-link>
      <router-link class="btn" to="/detail">
        <i class="icon iconfont">&#xe655;</i>
        <em class="txt">详情</em>
      </router-link>
      <router-link class="btn" to="/user">
        <i class="icon iconfont">&#xe659;</i>
        <em class="txt">我的</em>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "myMenu",
  data() {
    return {
      show: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.$refs.myMenu.className = "myMenu on";
    }, 500);
  }
}
</script>
<style lang="sass" scoped>
.myMenu {
  background-color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  z-index: 999;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  &.on {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: .3s;
    transition: .3s;
  }
}

.menu {
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  box-align: center;
  -webkit-align-items: center;
  align-items: center;
  .btn {
    -webkit-flex: 1;
    flex: 1;
    height: 56px;
    text-align: center;
  }
  .icon,
  .txt {
    display: inline-block;
    color: #333;
    height: 25px;
    width: 100%;
  }
  .txt {
    font-size: 12px;
    margin-top: 2px;
  }
  .icon {
    vertical-align: middle;
    font-size: 22px;
    margin-top: 4px;
  }
  .router-link-active {
    .icon,
    .txt {
      color: #f90;
    }
  }
}
</style>
