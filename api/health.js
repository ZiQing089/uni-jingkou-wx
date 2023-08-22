import request from '@/utils/request.js'

// 获取健康知识列表
export function getList(data) {
	return request({
		url: '/api/health/getHealthKnowledgePaged',
		method: 'POST',
		data
	})
}

// 获取健康档案
export function getInfo() {
	return request({
		url: '/api/health/getMyHealthArchive',
		method: 'GET'
	})
}