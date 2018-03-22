/**
 * Created by saturn on 2017/8/8.
 */

import * as axios from '../axios/';
import * as types from '../type/';

// 数据源
const state = {
  pulldownConfig: {
    content: '下拉刷新',
    height: 60,
    autoRefresh: false,
    downContent: '下拉刷新',
    upContent: '松手刷新',
    loadingContent: '刷新中...',
    clsPrefix: 'xs-plugin-pulldown-'
  },
  pullupConfig: {
    content: '上拉刷新',
    pullUpHeight: 60,
    height: 40,
    autoRefresh: false,
    downContent: '松开加载',
    upContent: '上拉加载更多',
    loadingContent: '加载中...',
    clsPrefix: 'xs-plugin-pullup-'
  },
  homeList: [
    {
      title: 'homeHeader', contents: [
        {
          title: '扫一扫提货', icon: '../assets/icon-buy.png',
        }, {
          title: '发货配送', icon: '../assets/icon-buy.png',
        }, {
          title: '订单查询', icon: '../assets/icon-buy.png',
        }
      ]
    }, {
      title: '商铺配置', contents: [
        {
          title: '人员配置', icon: '../assets/icon-buy.png',
        }, {
          title: '商品设置', icon: '../assets/icon-buy.png',
        }, {
          title: '分类设置', icon: '../assets/icon-buy.png',
        }, {
          title: '库存设置', icon: '../assets/icon-buy.png',
        }, {
          title: '结算统计', icon: '../assets/icon-buy.png',
        }, {
          title: '商铺设置', icon: '../assets/icon-buy.png',
        }
      ]
    }, {
      title: '发现配置', contents: [
        {
          title: '团购设置', icon: '../assets/icon-buy.png',
        }, {
          title: '主题设置', icon: '../assets/icon-buy.png',
        }
      ]
    }, {
      title: '商城配置', contents: [
        {
          title: 'Banner设置', icon: '../assets/icon-buy.png', link: '/banner'
        }, {
          title: '推荐商品设置', icon: '../assets/icon-buy.png', link: '/recommendProduct'
        }, {
          title: '热门商品设置', icon: '../assets/icon-buy.png',
        }, {
          title: '推荐业态设置', icon: '../assets/icon-buy.png',
        }, {
          title: '热门商铺设置', icon: '../assets/icon-buy.png',
        }, {
          title: '主题设置', icon: '../assets/icon-buy.png',
        }
      ]
    },
    {
      title: '基础数据设置', contents: [
        {
          title: '业态设置', icon: '../assets/icon-buy.png', link: '/yetai'
        }, {
          title: '分类设置', icon: '../assets/icon-buy.png', link: '/category'
        }
      ]
    }
  ],
  banners: [{key: '首页', value: '首页'}, {key: '主题页', value: '主题页'}, {key: '团购页', value: '团购页'}, {
    key: '商铺页',
    value: '商铺页'
  }],
  focus_list: [
    /*{
      title: '',
      url: 'javascript:;',
      img: 'https://static.vux.li/demo/1.jpg'
    }*/
  ],
  marquee_list: [
    '智能商城'
  ],
  goods_list: [
    /*{
      title: '',
      desc: '',
      src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
      params: [],
      url: {
        path: '/car',
        replace: false
      }
    }*/
  ]
};

const getters = {
  homeList: state => state.homeList,
  focus_list: state => state.focus_list,
  marquee_list: state => state.marquee_list,
  goods_list: state => state.goods_list,
  banners: state => state.banners,
  pullupConfig: state => state.pullupConfig,
  pulldownConfig: state => state.pulldownConfig,

};

const actions = {
  home_focus({commit}) {
    axios.getHomeFocus(payload => {
      commit(types.Home_Focus_List, payload);
    })
  },
  home_marquee({commit}) {
    axios.getHomeMarquee().then(payload => {
      commit(types.Home_Marquee_List, payload);
    });
  },
  home_goods({commit}) {
    axios.getHomeGoods(payload => {
      commit(types.Home_Goods_List, payload);
    });
  }
};

const mutations = {
  [types.Home_Focus_List](state, payload) {
    state.focus_list = payload;
  },
  [types.Home_Marquee_List](state, payload) {
    state.marquee_list = payload;
  },
  [types.Home_Goods_List](state, payload) {
    state.goods_list = payload;
    state.goods_list['params'] = [{
      label: '',
      value: ''
    }];
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
