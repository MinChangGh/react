import service from "./baseApi";
import qs from 'qs';

export function getbanner(data) {
  return service({
    url: '/getbanner',
    method: 'post',
    data
  })

}

export function findGoods(data) {
  return service({
    url: '/findGoods',
    method: 'post',
    data:qs.stringify(data)
  })

}

export function getList(data) {
  return service({
    url: '/getList',
    method: 'get',
    data
  })

}