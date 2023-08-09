import { host } from '../config.js'
import store from '@/store'
import { getToken, removeToken } from '@/utils/auth'
function request(options = {}) {
	options.url = `${host}${options.url}`
	options.header = {
		'token': getToken()
	}
	return new Promise((resolved, rejected) => {
		options.success = res => {
			if (res.data.success) {
				resolved(res.data)
			} else {
				switch (res.data.code){
					case 'P0001':
						removeToken()
						uni.navigateTo({
							url: "/pages/login/login"
						})
						break;
					case 'U0007':
						uni.navigateTo({
							url: "/pages/myInfo/myInfo"
						})
						break;
					default:
						rejected(res.data)
						break;
				}
			}
		}
		options.fail = err => {
			rejected(err)
		}
		uni.request(options);
	})
}
export default request;
