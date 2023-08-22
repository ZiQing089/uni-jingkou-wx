import request from '@/utils/request.js'

// 预登录
export function preLogin(data) {
	return request({
		url: '/api/wechat/preLogin',
		method: 'POST',
		data
	})
}

// 登录
export function userLogin(data) {
	return request({
		url: '/api/wechat/loginByPhone',
		method: 'POST',
		data
	})
}

// 用户信息
export function userInfo() {
	return request({
		url: '/api/wechat/getUserInfo',
		method: 'GET'
	})
}

// 退出登录
export function userLoginOut() {
	return request({
		url: '/api/user/logout',
		method: 'POST'
	})
}