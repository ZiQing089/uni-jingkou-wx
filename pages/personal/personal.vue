<template>
	<view class="page-container personal">
		<view class="personal-header">
			<NavBar :title="'个人资料'" :use-transparent="true" />
		</view>
		<view class="avatar-box">
			<button class="avatar" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
				<van-image
				  round
				  width="100%"
				  height="100%"
				  fit="cover"
				  :src="form.iconUrl ? form.iconUrl : avatar"
				/>
			</button>
			<view class="avatar-tips">
				点击可以更改您的头像
			</view>
		</view>
		<view class="content">
			<view class="item">
				<span class="label">昵称：</span>
				<span class="val"><input type="nickname" :value="form.nickname" @blur="bindblur" placeholder="请输入昵称" /></span>
			</view>
			<view class="item">
				<span class="label">电话：</span>
				<span class="val">{{ form.phone }}</span>
			</view>
			<view class="tips">
				暂不支持修改手机号
			</view>
			<view class="btn-border" @click="safe">
				<view class="btn">
					保存
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { userInfo } from '@/api/login.js'
	import * as API from '@/config.js'
	import { getToken } from '@/utils/auth'
	import { changeInfo } from '@/api/personal.js'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				token: getToken(),
				uploadAPI: API.host + '/api/file/pc/upload',
				form: {
					nickname: '张三',
					iconUrl: '',
					phone: '15656567759'
				}
			}
		},
		onShow() {
			this.getUserInfo()
		},
		methods: {
			bindblur(e) {
				this.form.nickname = e.detail.value
			},
			// 获取用户信息
			getUserInfo() {
				const self = this
				self.$store.dispatch('user/userInfo', {}).then(res => {
					this.form.nickname = res.data.nickname
					this.form.phone = res.data.phone
					this.form.iconUrl = res.data.iconUrl
				})
			},
			// 获取微信头像
			onChooseAvatar(e) {
				const self = this;
				const { avatarUrl } = e.detail;
				uni.showLoading({title: '加载中'});
				uni.uploadFile({
					url: self.uploadAPI,
					filePath: avatarUrl,
					name: 'file',
					header: { 'token': self.token },
					success(res) {// 注意：这里返回的uploadFileRes.data 为JSON 需要自己去转换
						let data = JSON.parse(res.data);
						self.form.iconUrl = data.data;
					},
					fail: (error) => {
						uni.showToast({title: error,duration: 2000});
					},
					complete: () => {
						uni.hideLoading();
					},
				})
			},
			safe() {
				changeInfo(this.form).then(res => {
					if(res.success) {
						uni.showToast({
							title: res.message,
							icon: 'success',
							duration: 2000
						})
						uni.navigateBack()
					} else {
						uni.showToast({
							title: res.message,
							icon: 'error',
							duration: 2000
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.personal {
	.personal-header {
		height: 240rpx;
		background: linear-gradient(180deg, #FABFB1 0%, rgba(255,255,255,0.8) 100%, #FFFFFF 100%);
	}
	.avatar-box {
		.avatar {
			width: 180rpx;
			height: 180rpx;
			border-radius: 100%;
			margin: 0 auto;
			padding: 0;
		}
		.avatar-tips {
			text-align: center;
			margin-top: 14rpx;
			margin-bottom: 48rpx;
			font-size: 24rpx;
			color: #999999;
			line-height: 36rpx;
		}
	}
	.content {
		padding: 0 32rpx;
		.item {
			display: flex;
			align-items: center;
			height: 76rpx;
			border-bottom: 2rpx solid #f6f6f6;
			margin-bottom: 36rpx;
			.label {
				font-size: 28rpx;
				color: #333333;
				line-height: 44rpx;
				letter-spacing: 1px;
			}
			.val {
				font-size: 28rpx;
				font-weight: bold;
				margin-left: 20rpx;
				color: #000000;
				line-height: 44rpx;
				letter-spacing: 1px;
			}
		}
		.tips {
			font-size: 24rpx;
			color: #999999;
			line-height: 36rpx;
		}
		.btn-border {
			position: fixed;
			left: 24rpx;
			right: 24rpx;
			bottom: 100rpx;
			border-radius: 44rpx;
			border: 2rpx solid #B94333;
			.btn {
				margin: 4rpx;
				font-size: 32rpx;
				color: #FFFFFF;
				line-height: 80rpx;
				height: 80rpx;
				text-align: center;
				background: #B94333;
				border-radius: 44rpx;
			}
		}
	}
}
</style>
