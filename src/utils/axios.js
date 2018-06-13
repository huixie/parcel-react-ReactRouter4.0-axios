/**
 * 使用 引入 import $axios from '@/utils/axios';
 * $axios.get(url)(@param,@success,@failure);
 * $axios.post(url)(@param,@success,@failure);
 *  param:{axios-headers} 为接口指定headers的特定参数
 */

import _ from 'lodash';
import axios from 'axios';
import $Utils from './index'
import { Toast }from 'antd-mobile'

// 配置API接口地址
const root = 'http://dev.fenxianglife.com/njia-cms/';
const dev_host='dev.fenxianglife.com';
const prod_host='prod.fenxianglife.com';
const cur_host = process.env.NODE_ENV==='development'?dev_host:prod_host

/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios(method, url, params, success, failure) {
  let headers={}
  if (params) {
    params = $Utils.filterNull(params);
  }
  if(params.axios-headers){
    headers=params.axios-headers;
    delete params.axios-headers
  }
  axios({
    method,
    url,
    data: method === 'POST' || method === 'PUT' ? JSON.stringify(params) : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    withCredentials: false
  })
    .then((res) => {
      if (res.data.code === 200) {
        if (success) {
          success(res.data);
        }
      } else if (res.data.code === 40003 || res.data.code === 40001) {
        Toast.fail('接口错误请重新与后台联系！');
      } else if (failure) {
        failure(res.data);
      } else {
        Toast.fail(res.data.message || '网络错误');
      }
    })
    .catch((err) => {
      if (err) {
        Message.error(err.message);
      }
    });
}

// 返回在vue模板中的调用接口
export default {
  get: api => (params, success, failure) => apiAxios('GET', api, params, success, failure),
  post: api => (params, success, failure) => apiAxios('POST', api, params, success, failure)
};
