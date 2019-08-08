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
// 获取列表
export function getList(data) {
  return service({
    url: '/getList',
    method: 'get',
    data
  })
}
// upload
export function upload(data) {
  return service({
    url: '/upload',
    method: 'post',
    data
  })
}