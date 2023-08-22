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
				console.log('草拟寄')
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
					case 'V0002':
						resolved(res.data)
						break;
					case 'VHA000':
						resolved(res.data)
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
