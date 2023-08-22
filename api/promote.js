import request from '@/utils/request.js'

// 获取文化档案
export function getCultureList() {
	return request({
		url: '/api/culture/getCultureArchivesList',
		method: 'GET'
	})
}

// 获取文化档案详情
export function getCultureDetail(data) {
	return request({
		url: '/api/culture/getCultureArchivesDetail',
		method: 'GET',
		data: { ...data }
	})
}

// 获取文化学堂
export function getSchoolList(data) {
	return request({
		url: '/api/culture/getCultureSchoolList',
		method: 'GET',
		data: { ...data }
	})
}

// 文化学堂报名
export function signUp(data) {
	return request({
		url: '/api/culture/signUp',
		method: 'PUT',
		data
	})
}

// 获取我推荐
export function getMyRecomend() {
	return request({
		url: '/api/culture/getRecommendationList',
		method: 'GET'
	})
}

// 获取我推荐详情
export function getMyRecomendDetail(data) {
	return request({
		url: '/api/culture/getRecommendationDetail',
		method: 'GET',
		data: { ...data }
	})
}

// 投票
export function vote(data) {
	return request({
		url: '/api/culture/vote',
		method: 'PUT',
		data
	})
}

// 我的报名
export function getMySignUp() {
	return request({
		url: '/api/culture/getMySignUpList',
		method: 'GET'
	})
}

// 取消报名 
export function cancel(data) {
	return request({
		url: '/api/culture/cancelSignUp',
		method: 'PUT',
		data
	})
}