import request from '@/utils/request.js'

// 村名认证
export function postVillager(data) {
	return request({
		url: '/api/user/postVillagerAuthInfo',
		method: 'POST',
		data
	})
}