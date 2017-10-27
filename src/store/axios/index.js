/**
 * Created by saturn on 2017/8/8.
 */

import axios from 'axios';
import Vue from 'vue';
import vueJsonp from 'vue-jsonp'
Vue.use(vueJsonp);

// 接口服务器地址
const baseUrl = 'http://192.168.50.155:8881/api';
// const baseUrl = 'http://i.0t.com.cn';

// 图片服务器地址
const imgSrc = 'http://192.168.50.216/';
// const imgSrc = 'http://183.134.74.90/';

/***********************登录相关********************************/
const getCodeApi = baseUrl + '/v1/sys/';
const signUp_api = baseUrl + '/v1/user/login';
const signIn_api = baseUrl + '/v1/mall/user/register';

/***********************获取产品列表********************************/
const home_get_goods = baseUrl + '/a/shop/goods/list';
const home_get_carouse = baseUrl + '/a/shop/carousel/getCarouselList';
const get_detail = baseUrl + '/a/shop/goods/getInfo';

/***********************购物车********************************/

const goods_get_number = baseUrl + '/a/shop/cart/getCartNum'; // 获取购物车总数量

const cart_goods_list = baseUrl + '/a/shop/cart/getList'; // 获取购物车列表

const goods_remove = baseUrl + '/a/shop/cart/remove'; // 删除购物车产品

const goods_add = baseUrl + '/a/shop/cart/add'; // 加入购物车

const detail_changeChecked = baseUrl + '/a/shop/cart/changeChecked';

/**
 * 001首页焦点图
 * @param callback
 * @returns null
 */
function getHomeFocus(callback) {
  axios.get(home_get_carouse).then(res => {
    if (res.data.code === 200) {
      let data = res.data.data.filter(item => {
        // return item.addata === null && item.picInfo[0];
        return item;
      }).map(item => {
        return {
          title: item.name,
          url: 'detail?id=' + item.id,
          // img: this.imgSrc + item.pathInfo,
          img: 'http://183.134.74.90/group1/M00/00/04/wKgBCVljaDyAbZdsAAITmoNI0yE716.png'//??上线改掉
        }
      });
      callback(data);
    }
  });
}

/**
 * 002首页无缝滚动
 * @returns Promise
 */
function getHomeMarquee() {
  return new Promise((resolve, reject) => {
    Vue.jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then(data => {
      let marquee_list = data.live.filter(item => {
        return item.addata === null && item.picInfo[0];
      }).map(item => {
        return {title: item.title}
      });
      resolve(marquee_list);
    }).catch(err => {
      reject(err);
    });
  });
}

/**
 * 003首页商品列表
 * @param callback
 * @returns null
 */
function getHomeGoods(callback) {
  axios.get(home_get_goods).then(res => {
    if (res.data.code === 200) {
      let data = res.data.data.filter(item => {
        // return item.addata === null && item.picInfo[0];
        return item;
      }).map(item => {
        return {
          id: item.id,
          title: item.goodsName,
          price: item.salePrice,
          // pic: item.productImg,
          pic: 'http://183.134.74.90/group1/M00/00/04/wKgBCVljaDyAbZdsAAITmoNI0yE716.png'//??上线改掉
        }
      });
      callback(data);
    }
  });
}

/**
 * 004获取 商品详情
 * @param id
 * @param callback
 */
function getDetailGoods(id, callback) {
  axios({
    url: get_detail,
    // url: '/static/get_goods_detail.json',
    method: 'post',
    params: {},
    data: {goodsId: id}
  }).then(res => {
    if (res.data.code === 200) {
      let item = res.data.data;
      callback({
        title: item.goodsName,
        desc: item.goodsDesc !== undefined ? item.goodsDesc : '暂无简介',
        info: item.goodsInfo,
        price: item.salePrice,
        pics: [{url: 'http://183.134.74.90/group1/M00/00/04/wKgBCVljaDyAbZdsAAITmoNI0yE716.png'}, {url: 'http://183.134.74.90/group1/M00/00/04/wKgBCVljaDyAbZdsAAITmoNI0yE716.png'}]
        //pics: item.imgList.map(item => item.url.indexOf('http') < 1 ? (imgSrc + item.url) : item.url ) /*补全http*/
      });
    }
  }).catch(err => {
    console.log(err);
  });
}

/**
 * 005获取购物车数量
 * @param id
 * @param callback
 */
function goodsGetNumber(id, callback) {
  axios({
    url: goods_get_number,
    method: 'post',
    params: {},
    data: {goodsId: id}
  }).then(res => {
    if (res.data.code === 200) {
      callback(res.data.data);
    }
  }).catch(err => {
    console.log(err);
  });
}

/**
 * 006购物车清单
 */
function cartGoodsList(callback) {
  axios({
    url: cart_goods_list,
    method: 'post',
    params: {},
    data: {}
  }).then(res => {
    if (res.data.code === 200) {
      let data = res.data.data;
      let arr = data.filter(item => {
        return item.goods !== undefined;
      }).map(item => ({
        "id": item.goodsId,
        "title": item.goods.goodsName,
        "type": "暂无分类",
        "price": item.goods.salePrice,
        "num": item.num,
        "checked": item.checked,
        "desc": "暂无简介",
        //"src": item.goods.productImg,
        "src": item.goods.productImg.indexOf("http") < 1 ? (imgSrc + item.goods.productImg) : item.goods.productImg,
        "url": {
          "path": "/car",
          "replace": false
        }
      }));
      callback(arr);
    }
  }).catch(err => {
    console.log(err);
  });
}

/**
 * 007 增加商品
 * @param id
 * @param callback
 */
function goodsAdd(id, callback) {
  axios({
    url: goods_add,
    method: 'post',
    params: {},
    data: {goodsId: id}
  }).then(res => {
    if (res.data.code === 200) {
      callback(res.data);
    }
  }).catch(err => {
    console.log(err);
  });
}

/**
 * 008 减少商品
 * @param callback
 */
function goodsRemove(item, callback) {
  axios({
    url: goods_remove,
    method: 'post',
    params: {},
    data: {
      goodsId: item.id,
      num: item.num + 1
    }
  }).then(res => {
    if (res.data.code === 200) {
      callback(res.data);
    }
  }).catch(err => {
    console.log(err);
  });
}

/**
 * 009获取 收货地址
 * @param callback
 */
function getAddress(callback) {
  axios({
    url: 'static/address.json',
    method: 'get',
  }).then(res => {
    let arr = res.data.data.map(item => ({
      id: item.id,
      isUsed: item.isUsed == 2,
      name: item.contacts,
      phone: item.phone,
      addrName: item.addrName
    }));
    callback(arr);
  }).catch(err => {
    console.log(err);
  });
}

/**
 * 010修改 收货地址
 * @param address
 * @param callback
 */
function setAddress(address, callback) {
  axios({
    url: 'static/address.json',
    method: 'post',
    data: address,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(res => {
    let data = res.data.success;
    callback(data);
  }).catch(err => {
    console.log(err);
  });
}

/**
 * 样板函数
 * @param uid
 * @param callback
 * @returns {Promise}
 */
function axiosDemo(uid = 123, callback) {
  return new Promise((resolve, reject) => {
    axios({
      url: 'http://3g.163.com/touch/jsonp/sy/recommend/0-9.html',
      method: 'get',
      params: {},    // GET
      data: {},      // POST
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
}


export {
  getHomeFocus,
  getHomeMarquee,
  getHomeGoods,
  getDetailGoods,
  goodsGetNumber,
  cartGoodsList,
  goodsAdd,
  goodsRemove,
  getAddress,
  setAddress
}
