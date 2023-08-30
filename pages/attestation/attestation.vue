<template>
	<view class="page-container" :class="showForm ? 'attestation' : 'attestation attestation-status'">
		<template v-if="showForm">
			<view class="attestation-header">
				<NavBar :title="'村民认证'" :use-transparent="true" :is-white="true" />
				<view class="title">
					实名认证
				</view>
				<view class="sub-title">
					请验证您的个人信息
				</view>
				<view class="form">
					<view class="form-title">
						身份信息
					</view>
					<view class="inline">
						<view class="label">
							<view class="icon">*</view><view class="text">村民姓名：</view>
						</view>
						<view class="field">
							<van-field
							   :value="form.name"
							   placeholder="请输入您的姓名"
							   :border="false"
							   @change="onblur('name', $event)"
							 />
						</view>
					</view>
					<view class="inline" style="border: none;">
						<view class="label">
							<view class="icon">*</view><view class="text">证件号码：</view>
						</view>
						<view class="field">
							<van-field
							   :value="form.idCard"
							   placeholder="请输入您的身份证号码"
							   :border="false"
							   @change="onblur('idCard', $event)"
							 />
						</view>
					</view>
				</view>
			</view>
			<view class="btn-border" @click="submit">
				<view class="btn">
					提交
				</view>
			</view>
			<van-toast id="van-toast" />
		</template>
		<template v-if="showSuccess">
			<NavBar :title="'村名认证'" :border="true" />
			<view class="img"></view>
			<view class="tips">
				身份已认证
			</view>
			<view class="name">
				{{ userInfo.name ? userInfo.name : userInfo.nickname }}
			</view>
			<view class="idCard">
				{{ userInfo.idCard }}
			</view>
			<view class="btn-border" @click="finish">
				<view class="btn">
					完成
				</view>
			</view>
		</template>
		<template v-if="showError">
			<NavBar :title="'村名认证'" :border="true" />
			<view class="error-img"></view>
			<view class="error-tips">
				认证未通过，请重新认证
			</view>
			<view class="btn-border" @click="afresh">
				<view class="btn">
					重新验证
				</view>
			</view>
		</template>
	</view>
</template>
<script>
	import NavBar from "@/components/NavBar.vue"
	import { preLogin } from '@/api/login.js'
	import Toast from '@/wxcomponents/vant/dist/toast/toast';
	import { postVillager } from '@/api/attestation.js'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				form: {
					name: '',
					idCard: '',
					idCardPics: []
				},
				userInfo: {},
				showForm: true,
				needPhone: '',
				showSuccess: false,
				showError: false
			}
		},
		onShow() {
			this.getUserInfo()
		},
		methods: {
			// 获取用户信息
			getUserInfo() {
				const self = this
				self.$store.dispatch('user/userInfo', {}).then(res => {
					this.userInfo = res.data
					if(res.data.userType.key === 'VILLAGER') {
						this.showSuccess = true
						this.showForm = false
				
					}
				})
			},
			// 输入框监听
			onblur(t, e) {
				if (t === 'name') {
					this.form.name = e.detail
				} else {
					this.form.idCard = e.detail
				}
			},
			preLogin() {
				let self = this
				uni.login({
					success(res) {
						self.$store.dispatch('user/preLogin', { jsCode: res.code }).then(res => {
							if(res.data.needPhone) {
								self.needPhone = res.data.needPhone
							} else {
								self.$store.dispatch('user/userInfo', {}).then(res => {})
								// uni.navigateBack()
							}
						})
					}
				})
			},
			// 提交
			submit() {
				if (this.form.name && this.form.idCard) {
					postVillager(this.form).then(res => {
						if(res.code === 'V0002') {
							this.showError = true
							this.showForm = false
						} else {
							this.showSuccess = true
							this.showForm = false
							this.preLogin()
							this.getUserInfo()
						}
					})
				} else {
					Toast('请填写必填项');
				}
			},
			// 重新验证
			afresh() {
				this.showError = false
				this.showForm = true
			},
			// 完成
			finish() {
				uni.navigateBack(-1)
			}	
		}
	}
</script>
<style>
	page {
		background-color: #ffffff;
	}
</style>
<style lang="scss" scoped>
.attestation, .attestation-status {
	.attestation-header {
		position: relative;
		background: url('https://files.zz-tech.cn/app-files/images/jingkou/realname-bg.png') no-repeat;
		background-size: 100% 100%;
		height: 420rpx;
		box-sizing: border-box;
		.title {
			padding-left: 30rpx;
			font-size: 50rpx;
			font-weight: bold;
			color: #FFFFFF;
			line-height: 70rpx;
			margin-top: 30rpx;
			letter-spacing: 2px;
		}
		.sub-title {
			padding-left: 30rpx;
			margin-top: 20rpx;
			font-size: 32rpx;
			color: #E0ECFE;
			line-height: 45rpx;
			letter-spacing: 1px;
		}
		.form {
			position: absolute;
			bottom: -238rpx;
			left: 30rpx;
			right: 30rpx;
			height: 292rpx;
			background: #FFFFFF;
			box-shadow: 0rpx 4rpx 12rpx 0rpx rgba(0,0,0,0.05);
			border-radius: 12rpx;
			.form-title {
				padding-left: 26rpx;
				font-size: 28rpx;
				color: #666666;
				height: 82rpx;
				line-height: 82rpx;
				letter-spacing: 1px;
				border-bottom: 2rpx solid #F6F6F6;
			}
			.inline {
				display: flex;
				align-items: center;
				height: 98rpx;
				padding-left: 26rpx;
				border-bottom: 2rpx solid #F6F6F6;
				.label {
					display: flex;
					align-items: center;
					.icon {
						font-size: 48rpx;
						color: #FF3838;
						margin-right: 12rpx;
						padding-top: 10rpx;
						// line-height: 116rpx;
						vertical-align: middle;
					}
					.text {
						font-size: 28rpx;
						// line-height: 116rpx;
						color: #000000;
						line-height: 44rpx;
						letter-spacing: 1px;
					}
				}
				.field {
					width: calc(100% - 216rpx);
					/deep/ {
						.van-cell {
							font-size: 28rpx;
							line-height: 44rpx;
						}
					}
				}
			}
		}
	}
	.btn-border {
		position: fixed;
		left: 24rpx;
		right: 24rpx;
		bottom: 400rpx;
		border-radius: 44rpx;
		border: 2rpx solid #81A4FE;
		.btn {
			margin: 4rpx;
			font-size: 32rpx;
			color: #FFFFFF;
			line-height: 80rpx;
			height: 80rpx;
			text-align: center;
			background: #81A4FE;
			border-radius: 44rpx;
		}
	}
}
.attestation-status {
	.img {
		width: 284rpx;
		margin: 130rpx auto 0;
		height: 246rpx;
		background: url('https://files.zz-tech.cn/app-files/images/jingkou/success.png') no-repeat;
		background-size: 100% 100%;
	}
	.error-img {
		width: 226rpx;
		margin: 202rpx auto 0;
		height: 226rpx;
		background: url('https://files.zz-tech.cn/app-files/images/jingkou/error.png') no-repeat;
		background-size: 100% 100%;
	}
	.error-tips {
		height: 56rpx;
		font-size: 40rpx;
		font-weight: bold;
		margin-top: 44rpx;
		color: #333333;
		line-height: 56rpx;
		text-align: center;
	}
	.tips {
		height: 56rpx;
		font-size: 40rpx;
		font-weight: bold;
		margin-top: 44rpx;
		color: #00A0EB;
		line-height: 56rpx;
		text-align: center;
	}
	.name, .idCard {
		height: 44rpx;
		font-size: 28rpx;
		color: #666666;
		text-align: center;
		line-height: 44rpx;
		letter-spacing: 1px;
		margin-bottom: 12rpx;
	}
	.name {
		margin-top: 88rpx;
	}
}
</style>
