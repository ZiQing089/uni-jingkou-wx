import { userInfo, userLogin } from '@/api/login.js'
import { getToken, setToken, removeToken } from '@/utils/auth'
import avatar from "@/static/img/mine/avatarwx.png"
const getDefaultState = () => {
  return {
	token: '',
	user: '',
	avatar: avatar,
	idCard: '',
	weChartName: '',
	mobile: '',
	mapCenter:{
		shanqian: {
			Long: '121.588323',
			Lat: '29.136859',
			scale: 16.5
		},
		shangwang: {
			Long: '120.742127',
			Lat: '29.942235',
			scale: 15.7
		}
	}
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
	SET_USER: (state, user) => {
		console.log(user, 'user')
	    state.user = user
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
				commit('SET_MOBILE', response.data.phone)
				commit('SET_USER', response.data.name)
				commit('SET_IDCARD', response.data.idCard)
				commit('SET_WECHART', response.data.nickname)
				commit('SET_AVATAR', response.data.iconUrl)
				resolve(response)
			}).catch(error => {
				reject(error)
			})
		})
	},
	setToken({ commit }, token) {
		commit('SET_TOKEN', token)
	},
	setUserName({ commit }, user) {
		commit('SET_USER', user)
	},
	setIdCard({ commit }, idCard) {
		commit('SET_IDCARD', idCard)
	},
	setAvatar({ commit }, avatar) {
		commit('SET_AVATAR', avatar)
	},
	setMobile({ commit }, mobile) {
		commit('SET_MOBILE', mobile)
	}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
