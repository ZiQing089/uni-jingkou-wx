<template>
	<view class="page-container set-up">
		<NavBar :title="'设置'" :border="true" />
		<view class="content">
			<view class="item">
				<view class="name">
					版本号
				</view>
				<view class="val">
					v{{ version }}
				</view>
			</view>
		</view>
		<view class="btn-border" @click="logout">
			<view class="btn">
				退出登录
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { userLoginOut } from "@/api/login.js"
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				version: ''
			}
		},
		onLoad() {
			const self = this
		    const accountInfo = wx.getAccountInfoSync()
			self.version = accountInfo.miniProgram.version
		},
		methods: {
			logout() {
				userLoginOut().then(res => {
					console.log(res)
					if(res.success) {
						uni.showToast({
							title: res.message,
							icon: 'usccess',
							duration: 2000
						})
						uni.redirectTo({
							url: '/pages/index/index'
						})
					}
				})
			}
		}
	}
</script>
<style lang="scss">
	page {
		background-color: #F6F6F6;
	}
</style>

<style lang="scss" scoped>
.set-up {
	.content {
		.item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 116rpx;
			background-color: #FFFFFF;
			padding: 0 32rpx;
			.name {
				font-size: 28rpx;
				color: #333333;
				line-height: 44rpx;
				letter-spacing: 1px;
			}
			.val {
				font-size: 24rpx;
				color: #666666;
				line-height: 36rpx;
			}
		}
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
</style>
