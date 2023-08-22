import request from '@/utils/request.js'

// 获取周边饭店
export function getRestaurantList(data) {
	return request({
		url: '/api/periphery/getRestaurantList',
		method: 'POST',
		data
	})
}

// 获取特产介绍
export function getSpecialityList() {
	return request({
		url: '/api/periphery/getSpecialityList',
		method: 'GET'
	})
}

// 点赞
export function addlike(data) {
	return request({
		url: '/api/periphery/addLike',
		method: 'GET',
		data: { ...data }
	})
}

// 获取景点列表
export function getScenicSpotsList() {
	return request({
		url: '/api/periphery/getScenicSpotsList',
		method: 'GET'
	})
}

// 获取景点详情
export function getScenicSpotsDetail(data) {
	return request({
		url: '/api/periphery/getScenicSpotsDetail',
		method: 'GET',
		data: { ...data }
	})
}

// 获取住宿列表
export function getHomestayList(data) {
	return request({
		url: '/api/periphery/getHomestayList',
		method: 'POST',
		data
	})
}

// 获取休闲娱乐列表
export function getRecreationList(data) {
	return request({
		url: '/api/periphery/getRecreationList',
		method: 'POST',
		data
	})
}

// 获取周边服务
export function getServier(data) {
	return request({
		url: '/api/periphery/getPeripheryList',
		method: 'POST',
		data
	})
}