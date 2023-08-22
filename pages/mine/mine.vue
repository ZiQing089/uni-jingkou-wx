<template>
	<view class="page-container mine">
		<view class="mine-header">
			<view class="mine-detail" @click="toPersonal">
				<view class="left">
					<view class="avatar">
						<van-image
						  round
						  width="100%"
						  height="100%"
						  fit="cover"
						  :src="userInfo.iconUrl"
						/>
					</view>
					<view class="name">
						{{ userInfo.name ? userInfo.name : userInfo.nickname }}
					</view>
					<view class="type">
						{{ userInfo.userType.description }}
					</view>
				</view>
				<view class="right">
					<span style="margin-right: 8rpx;">查看资料</span><van-icon name="arrow" />
				</view>
			</view>
		</view>
		<view class="content">
			<view class="item" @click="navTo('0')">
				<view class="label">
					<image src="~@/static/img/mine/rigster.png" class="icon" mode="scaleToFill"></image>
					<span>村民认证</span>
				</view>
				<van-icon name="arrow" color="#D7D7D7" />
			</view>
			<view class="item" @click="navTo('1')">
				<view class="label">
				   <image src="~@/static/img/mine/sign.png" class="icon" mode="scaleToFill"></image>
					<span>我的报名</span>
				</view>
				<van-icon name="arrow" color="#D7D7D7" />
			</view>
			<view class="item" @click="navTo('2')">
				<view class="label">
					<image src="~@/static/img/mine/upload.png" class="icon" mode="scaleToFill"></image>
					<span>我的上传</span>
				</view>
				<van-icon name="arrow" color="#D7D7D7" />
			</view>
		</view>
		<van-tabbar :active="active" inactive-color="#7C7C7C" :placeholder="true" active-color="#B94333" @change="tabbarChange">
		 <van-tabbar-item>
		    <image
		      slot="icon"
		      src="/static/img/common/index-normal.png"
		      mode="aspectFit"
		      style="width: 40rpx; height: 40rpx;"
		    />
		    <image
		      slot="icon-active"
		      src="/static/img/common/index-active.png"
		      mode="aspectFit"
		      style="width: 40rpx; height: 40rpx;"
		    />
		    首页
		  </van-tabbar-item>
		  <van-tabbar-item>
			  <image
			    slot="icon"
			    src="/static/img/common/mine-normal.png"
			    mode="aspectFit"
			    style="width: 40rpx; height: 40rpx;"
			  />
			  <image
			    slot="icon-active"
			    src="/static/img/common/mine-active.png"
			    mode="aspectFit"
			    style="width: 40rpx; height: 40rpx;"
			  />
			  我的
		  </van-tabbar-item>
		</van-tabbar>
	</view>
</template>

<script>
	import { getToken } from '@/utils/auth.js'
	export default {
		data() {
			return {
				active: 1,
				avatar: '',
				token: getToken(),
				userInfo: {}
			}
		},
		onShow() {
			this.token = getToken()
			this.getUserInfo()
		},
		methods: {
			tabbarChange(event) {
				this.active = event.detail
				switch (this.active) {
					case 1:
						uni.redirectTo({
							url: "/pages/mine/mine"
						})
						break;
					case 2:
						uni.redirectTo({
							url: "/pages/map/map"
						})
						break;
					default:
						uni.redirectTo({
							url: "/pages/index/index"
						})
						break;
				}
			},
			// 获取用户信息
			getUserInfo() {
				const self = this
				self.$store.dispatch('user/userInfo', {}).then(res => {
					this.userInfo = res.data
				})
			},
			// 个人资料页面
			toPersonal() {
				if (this.token) {
					uni.navigateTo({
						url: '/pages/personal/personal'
					})
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			// 跳转
			navTo(n) {
				if (this.token) {
					switch(n) {
						case '0':
							uni.navigateTo({
								url: `/pages/attestation/attestation`
							})
							break;
						case '1':
							uni.navigateTo({
								url: '/pagesA/myEnroll/myEnroll'
							})
							break;
						case '2':
							uni.navigateTo({
								url: '/pagesA/myUpload/myUpload'
							})
							break;
						default:
							break;
					}
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.mine {
	.mine-header {
		height: 302rpx;
		box-sizing: border-box;
		background: url('https://files.zz-tech.cn/app-files/images/jingkou/mine-bg.png') no-repeat;
		background-size: 100%;
		padding: 180rpx 32rpx 0 40rpx;
		.mine-detail {
			display: flex;
			justify-content: space-between;
			.left {
				display: flex;
				align-items: center;
				.avatar {
					width: 90rpx;
					height: 90rpx;
					border-radius: 90rpx;
					margin-right: 24rpx;
				}
				.name {
					margin-right: 20rpx;
					font-size: 40rpx;
					color: #000000;
					line-height: 60rpx;
					letter-spacing: 1px;
				}
				.type {
					width: 80rpx;
					height: 36rpx;
					text-align: center;
					font-size: 24rpx;
					color: #B94333;
					line-height: 36rpx;
					background: #FFFDFE;
					border-radius: 8rpx;
					border: 1rpx solid #DEDEDE;
				}
			}
			.right {
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: #999999;
				line-height: 36rpx;
			}
		}
	}
	.content {
		padding: 0 32rpx 0 40rpx;
		.item {
			margin-bottom: 12rpx;
			height: 116rpx;
			background: #FFFFFF;
			display: flex;
			border-bottom: 2rpx solid #F9F9F9;
			justify-content: space-between;
			align-items: center;
			.label {
				display: flex;
				align-items: center;
				font-size: 28rpx;
				color: #333333;
				line-height: 44rpx;
				letter-spacing: 1px;
				.icon {
					width: 36rpx;
					height: 36rpx;
					margin-right: 32rpx;
				}
			}
		}
	}
}
</style>
