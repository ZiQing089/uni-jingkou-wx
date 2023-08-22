import request from '@/utils/request.js'

// 添加美丽庭院
export function addYard(data) {
	return request({
		url: '/api/appearance/addBeautyHome',
		method: 'POST',
		data
	})
}

// 添加整改信息
export function addRectify(data) {
	return request({
		url: '/api/appearance/addRemediation',
		method: 'POST',
		data
	})
}

// 获取秀出来列表
export function getShowlist(data) {
	return request({
		url: '/api/appearance/getBeautyHomePaged',
		method: 'POST',
		data
	})
}

// 获取整出来列表
export function getremediationList(data) {
	return request({
		url: '/api/appearance/getRemediationPaged',
		method: 'POST',
		data
	})
}

// 点赞
export function addLike(id) {
	return request({
		url: `/api/appearance/likeOrUnlikeBeautyHome?id=${id}`,
		method: 'POST'
	})
}

// 取消上传整改
export function cancel(id) {
	return request({
		url: `/api/appearance/cancelAddRemediation?id=${id}`,
		method: 'DELETE'
	})
}

// 取消上传美丽庭院
export function cancelShow(id) {
	return request({
		url: `/api/appearance/cancelAddBeautyHome?id=${id}`,
		method: 'DELETE'
	})
}