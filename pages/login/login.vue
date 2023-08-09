<template>
	<view class="login-container">
		<NavBar :title="'登录授权'" :leftEmit="true"></NavBar>
		<view class="login-content">
			<view class="img-box">
				<image class="logo" src="../../static/logo/logo.png"></image>
			</view>
			<view class="title">
				{{ name }}
			</view>
			<button v-if="!needPhone" class="btn" @click="preLogin">一键登录</button>
			<button v-if="needPhone" class="btn" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">手机号快捷登录</button>
			<view class="tips">
				<van-checkbox :value="checked" icon-size="25rpx" shape="square" @change="onChange" >我已阅读并同意</van-checkbox><span class="link" @click="toAgreement('/pages/fuwu/fuwu')">《用户服务协议》</span><span class="link" @click="toAgreement('/pages/yinsi/yinsi')">《隐私政策》</span>
			</view>
			<van-toast id="van-toast" />
		</view>
	</view>
</template>

<script>
import NavBar from '@/components/NavBar'
import { preLogin } from '@/api/login.js'
import Toast from '@/wxcomponents/vant/dist/toast/toast'
import { name } from '@/config.js'
import { mapState } from 'vuex'
export default {
	components: {
		NavBar
	},
	computed: {
		...mapState({
			token: (state) => state.user.token
		})
	},
	data() {
		return {
			name: name,
			needPhone: false,
			checked: false
		}
	},
	onShow() {
	},
	methods: {
		// 一键登录
		preLogin() {
			let self = this
			if(self.checked) {
				uni.login({
					success(res) {
						preLogin({ jsCode: res.code }).then(res => {
							console.log(res)
							if(res.data.needPhone) {
								self.needPhone = res.data.needPhone
								Toast('首次登录，请使用手机号登录')
							} else {
								uni.navigateBack()
							}
						})
					}
				})
			} else {
				Toast('请先阅读并勾选用户协议');
			}
		},
		// 登录 绑定手机
		getPhoneNumber(e) {
			const self = this
			const { encryptedData, iv, code } = e.detail
			console.log(e.detail)
			if(encryptedData && iv) {
				if(self.checked) {
					uni.login({
						success: (res) => {
							console.log(res, 'res')
							const loginCode = res.code
							self.$store.dispatch('user/userLogin', {loginCode: loginCode, code: code, encryptData: encryptedData, iv: iv }).then(res => {
								if(res.success) {
									self.$store.dispatch('user/userInfo', {}).then(res => {})
									uni.navigateBack()
								}
							})
						},
						fail: (err) => {
							console.log(err, 'err')
							Toast('登录失败');
						}
					})
				} else {
					Toast('请先阅读并勾选用户协议');
				}
			} else {
				console.log('取消')
			}
		},
		// 登录 绑定手机
		onChange(event) {
			this.checked = event.detail
			console.log(event)
		},
		toAgreement(path) {
			uni.navigateTo({
				url: path
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	.login-container {
		background-color: #FFFFFF;
		height: 100vh;
		.login-content {
			.img-box {
				margin-top: 130rpx;
				text-align: center;
				.logo {
					width: 160rpx;
					height: 160rpx;
				}
			}
			.title {
				font-size: 32rpx;
				font-weight: 400;
				color: #000000;
				line-height: 45rpx;
				text-align: center;
				margin: 42rpx 0 104rpx;
			}
			.btn {
				margin: 0 auto;
				width: 650rpx;
				height: 94rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				background: #387EF7;
				box-shadow: 4rpx 4rpx 12rpx 0rpx rgba(0,0,0,0.1);
				border-radius: 12rpx;
				font-size: 32rpx;
				color: #FFFFFF;
				line-height: 45rpx;
			}
		}
		.tips {
			position: fixed;
			display: flex;
			justify-content: center;
			align-items: center;
			bottom: 90rpx;
			left: 32rpx;
			right: 32rpx;
			text-align: center;
			font-size: 20rpx;
			color: #333333;
			line-height: 28rpx;
			.link {
				color: #2B75DA;
			}
		}
	}
</style>

