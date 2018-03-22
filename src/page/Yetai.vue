<template>
  <div :id="name" class="vux-1px-t">
    <swipeout>
      <group >
        <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow" v-for="(item,index) in list" :key="index">
          <div slot="left-menu">
            <swipeout-button @click.native="push(item)" type="primary">查看</swipeout-button>
            <swipeout-button @click.native="del(item,index)" type="warn">删除</swipeout-button>
          </div>
          <div slot="content" class="demo-content ">
            <cell :title="item.title" is-link @click.native="push(item)">
              <img slot="icon" width="20"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
          </div>
        </swipeout-item>
      </group>
    </swipeout>
  </div>

</template>
<script>
  import {Cell, Group, GroupTitle, Swipeout, SwipeoutItem, SwipeoutButton, XButton} from 'vux'

  export default {
    name: 'yetai',
    components: {
      Cell,
      Group,
      GroupTitle,
      Swipeout,
      SwipeoutItem,
      SwipeoutButton,
      XButton
    },
    data() {
      return {
        name: 'yetai',
        list:[
          {title: '男装',id: '0',icon: ''},
          {title: '餐饮',id: '1',icon: ''},
          {title: '女装',id: '2',icon: ''},
        ],
      }
    },
    methods: {
      push(item){
        this.$router.push({path: '/yetaiEdit?' + item.id})
      },
      del(item,index){

      },
      onButtonClick (type) {

      },
      handleEvents (type) {
        console.log('event: ', type)
      }
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .demo-content:before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #D9D9D9;
    color: #D9D9D9;
    transform-origin: 0 0;
    transform: scaleY(0.5);
    left: 15px;
  }
</style>
