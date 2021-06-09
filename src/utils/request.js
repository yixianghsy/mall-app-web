import axios from 'axios'
import { Loading, Message } from 'element-ui';

const request = axios.create({
    // /db.json >  通过 axios > /dev-api/db.json >  通过 代理转发（vue.config.js）》 http://localhost:8001/db.json
    // baseURL: '/dev-api', 
    baseURL: process.env.VUE_APP_BASE_API, 
    // baseURL: '/',
    timeout: 5000 // 请求超时，5000毫秒
})

export default request // 导出自定义创建 axios 对象