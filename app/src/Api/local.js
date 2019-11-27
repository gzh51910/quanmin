import axios from 'axios';

// 创建axios实例
// 测试的时候需要改自己的ip地址加端口1910
const baseURL='http://182.92.109.17:1180';
const imgString= `${baseURL}/img/`
const local = axios.create({
    baseURL
});

function get(path,params,config={}){
    return local.get(path,{
        ...config,
        params
    })
}

function post(path,data={},config={}){
    return local.post(path,data,config)
}

export default {
    get,
    post,
    baseURL,
    imgString
}
// 用的时候需要在组件导入
// import {local} from '../Api'
