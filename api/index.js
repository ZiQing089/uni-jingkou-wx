import request from '@/utils/request.js'

// 获取轮播
export function getBannerList() {
	return request({
		url: '/api/banner/getBannerList',
		method: 'GET'
	})
}

// 获取天气
export function getWeater(data) {
	return request({
		url: '/api/common/getWeather',
		method: 'GET',
		data: { ...data }
	})
}