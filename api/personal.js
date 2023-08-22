import request from '@/utils/request.js'

// 修改用户信息
export function changeInfo(data) {
	return request({
		url: '/api/user/updateUser',
		method: 'PUT',
		data
	})
}