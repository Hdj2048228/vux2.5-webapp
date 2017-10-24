/**
 * Created by saturn on 2017/8/8.
 */

import axios from 'axios';
import Vue from 'vue';
import vueJsonp from 'vue-jsonp'
Vue.use(vueJsonp);


/**
 * 首页焦点图
 * @param callback
 * @returns null
 */
function getHomeFocus(callback) {
  axios.get('static/get_home_focus.json').then(res => {
    let data = res.data.data.filter(item => {
      // return item.addata === null && item.picInfo[0];
      return item;
    }).map(item => {
      return {
        title: item.name,
        url: item.url,
        img: item.pathInfo,
      }
    });
    callback(data);
  });
}

/**
 * 首页无缝滚动
 * @param null
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
 * 首页商品列表
 * @param callback
 * @returns null
 */
function getHomeGoods(callback) {
  axios.get('static/get_goods.json').then(res => {
    let data = res.data.data.filter(item => {
      // return item.addata === null && item.picInfo[0];
      return item;
    }).map(item => {
      return {
        id: item.id,
        title: item.goodsName,
        price: item.salePrice,
        pic: item.productImg
      }
    });
    callback(data);
  });
}

/**
 * 获取 商品详情
 * @param uid
 * @param callback
 */
function getDetailGoods(uid, callback) {
  axios({
    url: 'static/get_goods_detail.json',
    method: 'get',
    params: {id: uid}
  }).then(res => {
    let item = res.data.data;
    //console.log(res.data.data);
    callback({
      title: item.goodsName,
      desc: item.goodsDesc,
      info: item.goodsInfo,
      pics: item.imgList
    });
  }).catch(err => {
    console.log(err);
  });
}

/**
 * 获取 收货地址
 * @param callback
 */
function getAddress(callback) {
  axios({
    url: 'static/address.json',
    method: 'get',
  }).then(res => {
    let arr = res.data.data.map(item => ({
      id: item.id,
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
 * 修改 收货地址
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

function axiosDemo(uid = 123, callback) {
  return new Promise((resolve, reject) => {
    axios({
      url: 'http://3g.163.com/touch/jsonp/sy/recommend/0-9.html',
      method: 'get',
      params: {}
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
  getAddress,
  setAddress
}
