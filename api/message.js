import request from '@/utils/request.js'

// 获取公告
export function getMessage() {
	return request({
		url: '/api/message/getAnnouncementList',
		method: 'GET'
	})
}