<template>
	<view class="page-container recommend-detail">
		<NavBar :title="'我推荐'" :border="true" />
		<view class="banner">
			<van-image
			  width="100%"
			  height="100%"
			  fit="cover"
			  :src="detail.pics[0]"
			/>
		</view>
		<view class="title">
			{{ detail.name }}
		</view>
		<view class="info">
			<view class="left">
				发布时间：{{ detail.createTime | formatDate }}
			</view>
			<view class="num">
				<icon class="iconfont">&#xe65c;</icon>{{ detail.viewCount }}
			</view>
		</view>
		<view class="voteCount">
			共计得票：{{ detail.voteCount }}票
		</view>
		<view class="content">
			{{ detail.introduce }}
		</view>
		<view class="btn-box">
			<view :class="detail.vote ? 'btn-border ytp' : 'btn-border'" @click="!detail.vote && vote()">
				<view :class="detail.vote ? 'btn ytp' : 'btn'">
					{{ detail.vote ? '已投票' : '投票' }}
				</view>
			</view>
		</view>
		<van-dialog
		  use-slot
		  custom-class="dialog"
		  theme="round-button"
		  confirmButtonText="确定投票"
		  :show="show"
		  confirm-button-open-type="getUserInfo"
		  @getuserinfo="confirm"
		>
			<view class="img">
				<van-image
				  width="100%"
				  height="100%"
				  fit="cover"
				  radius="4"
				  src="https://files.zz-tech.cn/app-files/images/jingkou/tanchuangpic.png"
				/>
			</view>
			<icon class="iconfont" @click="close">&#xe667;</icon>
			<view class="affirm">
				请确定是否进行投票
			</view>
			<view class="tips">
				（一经投票无法修改哦）
			</view>
		</van-dialog>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import Dialog from '@/wxcomponents/vant/dist/dialog/dialog'
	import { getMyRecomendDetail, vote } from "@/api/promote.js"
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				show: false,
				detail: {},
				obj: {}
			}
		},
		onLoad(option) {
			this.obj = JSON.parse(decodeURIComponent(option.data))
			this.init()
		},
		methods: {
			// 初始化页面
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getMyRecomendDetail({ id: this.obj.id }).then(res => {
					uni.hideLoading()
					this.detail = res.data
				})
			},
			// 投票
			vote() {
				this.show = true
			},
			confirm() {
				vote({ id: this.obj.id }).then(res => {
					if(res.success) {
						uni.showToast({
							title: res.message,
							icon: 'success',
							duration: 2000
						})
						this.show = false
						setTimeout(() => {
							uni.navigateBack()
						}, 2000)
					} else {
						uni.showToast({
							title: res.message,
							icon: 'error',
							duration: 2000
						})
					}
				})
			},
			close() {
				this.show = false
			}
		}
	}
</script>

<style lang="scss" scoped>
.recommend-detail {
	.dialog {
		position: relative;
		.img {
			width: 330rpx;
			height: 330rpx;
			margin: 80rpx auto 0;
		}
		.iconfont {
			font-size: 44rpx;
			color: #666666;
			position: absolute;
			top: 24rpx;
			right: 24rpx;
		}
		.affirm {
			font-size: 32rpx;
			font-weight: bold;
			color: #631614;
			line-height: 48rpx;
			margin-top: 32rpx;
			text-align: center;
		}
		.tips {
			margin-top: 12rpx;
			font-size: 28rpx;
			color: #444444;
			line-height: 44rpx;
			letter-spacing: 1px;
			text-align: center;
			margin-bottom: 20rpx;
		}
	}	
	.banner {
		width: 100%;
		height: 422rpx;
	}
	.title {
		margin-top: 40rpx;
		padding: 0 60rpx;
		font-size: 44rpx;
		font-weight: bold;
		color: #333333;
		line-height: 66rpx;
		letter-spacing: 1px;
		text-align: center;
	}
	.info {
		display: flex;
		justify-content: space-between;
		padding: 32rpx 148rpx 24rpx;
		.left {
			font-size: 26rpx;
			color: #999999;
			line-height: 44rpx;
			letter-spacing: 1px;
		}
		.num {
			display: flex;
			font-size: 26rpx;
			margin-left: 12rpx;
			color: #999999;
			line-height: 44rpx;
			letter-spacing: 1px;
			.iconfont {
				display: flex;
				align-items: center;
				font-size: 32rpx;
				margin-right: 12rpx;
			}
		}
	}
	.voteCount {
		font-size: 26rpx;
		color: #3DB62F;
		line-height: 44rpx;
		letter-spacing: 1px;
		text-align: center;
	}
	.content {
		padding: 32rpx 24rpx 30rpx;
		font-size: 28rpx;
		color: #666666;
		line-height: 44rpx;
		letter-spacing: 1px;
	}
	.btn-box {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 4rpx 28rpx 0;
		height: 166rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -4rpx 12rpx 0rpx rgba(0,0,0,0.05);
		.btn-border {
			border-radius: 44rpx;
			border: 2rpx solid #B94333;
			.btn {
				background: #B94333;
				height: 72rpx;
				line-height: 72rpx;
				font-size: 32rpx;
				color: #FFFFFF;
				text-align: center;
				border-radius: 44rpx;
				margin: 4rpx;
			}
			.ytp {
				background: #9B7A76;
			}
		}
		.ytp {
			border: 2rpx solid #9B7A76;
		}
	}
}
</style>
