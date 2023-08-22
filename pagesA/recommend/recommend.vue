<template>
	<view class="page-container recommend">
		<NavBar :title="'我推荐'" :border="true" :use-bg="true" />
		<view class="content">
			<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="top">
					<view class="left">
						<van-image
						  width="100%"
						  height="100%"
						  fit="cover"
						  radius="4"
						  :src="item.pics[0]"
						/>
					</view>
					<view class="right">
						<view class="header">
							<view class="title">
								{{ item.name }}
							</view>
							<view class="num">
								<icon class="iconfont">&#xe65c;</icon>{{ item.viewCount }}
							</view>
						</view>
						<view class="time">
							{{ item.createTime | formatDate }}
						</view>
						<view class="sub-title">
							{{ item.referee }}
						</view>
						<view class="info">
							{{ item.introduce }}
						</view>
					</view>
				</view>
				<view class="bottom">
					共计得票：{{ item.voteCount }}票
				</view>
				<view :class="item.vote ? 'btn ytp' : 'btn'">
					{{ item.vote ? '已投票' : '投票' }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getMyRecomend } from "@/api/promote.js"
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				list: []
			}
		},
		onShow() {
			this.init()
		},
		methods: {
			// 初始化页面
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getMyRecomend().then(res => {
					uni.hideLoading()
					this.list = res.data
				})
			},
			toDetail(item) {
				uni.navigateTo({
					url: `/pagesA/recommend/detail?data=${encodeURIComponent(JSON.stringify(item))}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.recommend {
	.content {
		padding: 32rpx 24rpx 90rpx;
		.item {
			border-radius: 12rpx;
			padding: 40rpx 32rpx 50rpx;
			margin-bottom: 24rpx;
			height: 425rpx;
			box-sizing: border-box;
			background-color: #F6F6F6;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/wtjbg.png') no-repeat;
			background-size: 100%;
			position: relative;
			.top {
				display: flex;
				justify-content: space-between;
				.left {
					width: 260rpx;
					height: 260rpx;
					border-radius: 8rpx;

				}
				.right {
					width: calc(100% - 282rpx);
					.header {
						display: flex;
						justify-content: space-between;
						align-items: center;
						.title {
							font-size: 32rpx;
							font-weight: bold;
							color: #B94333;
							line-height: 48rpx;
						}
						.num {
							display: flex;
							font-size: 24rpx;
							color: #666666;
							line-height: 36rpx;
							letter-spacing: 1px;
							.iconfont {
								display: flex;
								align-items: center;
								font-size: 32rpx;
								margin-right: 12rpx;
							}
						}
					}
					.time {
						margin-top: 12rpx;
						font-size: 24rpx;
						color: #666666;
						line-height: 36rpx;
					}
					.sub-title {
						margin-top: 20rpx;
						font-size: 28rpx;
						color: #000000;
						line-height: 40rpx;
						letter-spacing: 1px;
					}
					.info {
						margin-top: 8rpx;
						font-size: 28rpx;
						color: #666666;
						line-height: 44rpx;
						letter-spacing: 1px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
					}
				}
			}
			.bottom {
				margin-top: 30rpx;
				font-size: 28rpx;
				color: #3DB62F;
				line-height: 40rpx;
				letter-spacing: 1px;
			}
			.btn {
				position: absolute;
				width: 140rpx;
				height: 60rpx;
				right: 32rpx;
				bottom: 45rpx;
				background: #B94333;
				border-radius: 30rpx;
				text-align: center;
				line-height: 60rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				letter-spacing: 1px;
			}
			.ytp {
				background: #9B7A76;
			}
		}
	}
}
</style>
