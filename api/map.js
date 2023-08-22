import request from '@/utils/request.js'

// 获取地图景点列表
export function mapList() {
	return request({
		url: '/api/tourismMap/getMapList',
		method: 'GET'
	})
}

