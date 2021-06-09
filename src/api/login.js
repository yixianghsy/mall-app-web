import request from '@/utils/request'
// 注意：导出的是普通成员函数
//登录
export function login(username, password) {
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            username, // username: username
            password
        }
    })
}
//获取用户信息
export function getUserInfo(token) {
    return request({
        url: `/user/info/${token}`,
        method: 'get'
    })
}
export function logout(token) {
    return request({
        url: `/user/logout`,
        method: 'post',
        data: {
            token //token: token
        }
    })
}