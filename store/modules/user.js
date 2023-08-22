import { userInfo, userLogin, preLogin } from '@/api/login.js'
import { getToken, setToken, removeToken } from '@/utils/auth'
import avatar from "@/static/img/mine/avatarwx.png"
const getDefaultState = () => {
  return {
	token: '',
	user: '',
	creatorId: '',
	avatar: avatar,
	idCard: '',
	weChartName: '',
	lat: '',
	mobile: ''
  }
}

const state = getDefaultState()

const mutations = {
	SET_TOKEN: (state, token) => {
	    state.token = token
	},
	SET_AVATAR: (state, avatar) => {
		state.avatar = avatar
	},
	SET_MOBILE: (state, mobile) => {
	    state.mobile = mobile
	},
	SET_IDCARD: (state, idCard) => {
	    state.idCard = idCard
	},
	SET_CREATORID: (state, creatorId) => {
	    state.creatorId = creatorId
	},
	SET_USER: (state, user) => {
	    state.user = user
	},
	SET_LAT: (state, lat) => {
	    state.lat = lat
	},
	SET_LNG: (state, lng) => {
	    state.lng = lng
	},
	SET_RULE: (state, rule) => {
	    state.rule = rule
	},
	SET_WECHART: (state, weChartName) => {
	    state.weChartName = weChartName
	}
}

const actions = {
	// 登录
	userLogin({ commit }, data) {
		return new Promise((resolve, reject) => {
			userLogin(data).then(response => {
				setToken(response.data.tokenValue)
				commit('SET_TOKEN', response.data.tokenValue)
				resolve(response)
			}).catch(error => {
				reject(error)
			})
		})
	},
	
	// 获取用户信息
	userInfo({ commit, state }) {
		return new Promise((resolve, reject) => {
			userInfo().then(response => {
				console.log(response)
				commit('SET_WECHART', response.data.nickname)
				commit('SET_AVATAR', response.data.iconUrl)
				commit('SET_CREATORID', response.data.id)
				commit('SET_MOBILE', response.data.phone)
				commit('SET_RULE', response.data.userType.key)
				resolve(response)
			}).catch(error => {
				reject(error)
			})
		})
	},
	
	// 预登陆
	preLogin({ commit }, data) {
		return new Promise((resolve, reject) => {
			console.log('预登陆陆')
			preLogin(data).then(response => {
				setToken(response.data.tokenValue)
				commit('SET_TOKEN', response.data.tokenValue)
				resolve(response)
			}).catch(error => {
				reject(error)
			})
		})
	},
	
	setLat({commit}, lat) {
		commit('SET_LAT', lat)
	},
	setLng({commit}, lng) {
		commit('SET_LNG', lng)
	}
	// setToken({ commit }, token) {
	// 	commit('SET_TOKEN', token)
	// },
	// // setCreatorId({ commit }, creatorId) {
	// // 	commit('SET_CREATORID', creatorId)
	// // },
	// setUserName({ commit }, user) {
	// 	commit('SET_USER', user)
	// },
	// setIdCard({ commit }, idCard) {
	// 	commit('SET_IDCARD', idCard)
	// },
	// setAvatar({ commit }, avatar) {
	// 	commit('SET_AVATAR', avatar)
	// },
	// setMobile({ commit }, mobile) {
	// 	commit('SET_MOBILE', mobile)
	// }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
