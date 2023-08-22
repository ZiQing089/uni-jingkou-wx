import request from '@/utils/request.js'

// 获取党建活动
export function getPartyBuilding(data) {
	return request({
		url: '/api/governance/getPartyBuildingsPaged',
		method: 'POST',
		data
	})
}

// 获取清廉信息
export function getPublic(data) {
	return request({
		url: '/api/governance/getPublicFilePaged',
		method: 'POST',
		data
	})
}

// 获取党员信息
export function getPartyMember(data) {
	return request({
		url: '/api/governance/getAllPartMembers',
		method: 'POST',
		data
	})
}

// 点击增加浏览次数
export function viewAdd(id) {
	return request({
		url: `/api/governance/addViewForPublicFile?id=${id}`,
		method: 'PUT'
	})
}