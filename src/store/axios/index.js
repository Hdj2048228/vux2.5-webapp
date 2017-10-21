/**
 * Created by saturn on 2017/8/8.
 */

import axios from 'axios';
import Vue from 'vue';
import vueJsonp from 'vue-jsonp'
Vue.use(vueJsonp);

import * as api from './url';

/**
 * 封装(有参)异步交互
 * @param callback
 * @returns null
 */
function getHomeFocus(callback) {// 幻灯片
  axios.get(api.get_home_focus).then(res => {
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
 * 封装(无参数)异步交互
 * @param null
 * @returns {Promise}
 */
function getHomeMarquee() {// 跑马灯
  return new Promise((resolve, reject) => {
    Vue.jsonp(api.get_home).then(data => {
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
 * 封装(有参)异步交互
 * @param callback
 * @returns null
 */
function getHomeList(callback) { // 商品列表
  axios.get(api.get_goods).then(res => {
    let data = res.data.data.filter(item => {
      // return item.addata === null && item.picInfo[0];
      return item;
    }).map(item => {
      return {
        id:item.id,
        title:item.goodsName,
        price:item.salePrice,
        pic:item.productImg
      }
    });
    callback(data);
  });
}

function getGoodsDetail(uid, callback) { // 商品详情
  axios({
    url: api.get_goods_detail,
    method: 'get',
    params: {id:uid}
  }).then(res => {
    let item = res.data.data;
    callback({
      title:item.goodsName,
      desc:item.goodsDesc,
      info:item.goodsInfo,
      pics:item.imgList
    });
  }).catch(err => {
    console.log(err);
  });
}

function axiosDemo(uid = 123, callback) {
  return new Promise((resolve, reject) => {
    axios({
      url: api.get_home,
      method: 'get',
      params: {}
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
}

function articleSubmit(uid = 123, callback) {
}

export {
  getGoodsDetail,
  getHomeFocus,
  getHomeMarquee,
  getHomeList
}
