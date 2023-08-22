import request from '@/utils/request.js'

// 获取垃圾分类
export function getList(data) {
	return request({
		url: '/api/content/getWasteItem',
		method: 'POST',
		data
	})
}

// 获取邻里空间
export function getSpaceList(data) {
	return request({
		url: '/api/neighbor/getPublicZoneList',
		method: 'POST',
		data
	})
}

// 获取邻里活动
export function getActivitiesList(data) {
	return request({
		url: '/api/neighbor/getActivitiesPaged',
		method: 'POST',
		data
	})
}

// 获取邻里互助
export function getHelpList(data) {
	return request({
		url: '/api/neighbor/getNeighborHelpsPaged',
		method: 'POST',
		data
	})
}