import axios from 'axios';

// 创建axios实例
// 测试的时候需要改自己的ip地址加端口1910
const local = axios.create({
    baseURL: 'http://localhost:1910'
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
    post
}
// 用的时候需要在组件导入
// import {local} from '../Api'
