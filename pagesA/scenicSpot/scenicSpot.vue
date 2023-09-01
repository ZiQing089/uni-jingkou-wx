<template>
	<view class="scenic-spot page-container">
		<NavBar :title="'美丽景点'" :use-bg="true" />
		<view class="content">
			<template v-if="toneList.length === 0">
				<view class="noData"></view>
			</template>
			<template v-else>
				<grid-view :cross-axis-gap="6" :main-axis-gap="6" type="masonry">
					<view v-for="(item, index) in toneList" :key="index" class="item" @click="toDetail(item)">
						<view class="img">
							<van-image
							  width="100%"
							  height="100%"
							  fit="cover"
							  radius="12rpx 12rpx 0 0"
							  :src="item.pics[0]"
							/>
						</view>
						<view class="title">
							{{ item.name }}
						</view>
						<view class="text">
							{{ item.introduce }}
						</view>
						<view class="like">
							<view class="left">
								<image src="../../static/img/jingkou/review.png" class="img-icon" mode="scaleToFill"></image>
								<span>{{ item.viewCount }}</span>
							</view>
							<view class="right">
								<icon class="iconfont">&#xe647;</icon>
							</view>
						</view>
					</view>
				</grid-view>
			</template>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getScenicSpotsList } from '@/api/jingkou.js'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				bgHeight: '',
				title: '',
				toneList: []
			}
		},
		onLoad(option) {
			this.title = option.title
		},
		onShow() {
			this.init()
		},
		methods: {
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getScenicSpotsList().then(res => {
					uni.hideLoading()
					this.toneList = res.data
					console.log(res)
				})
			},
			// 跳转详情
			toDetail(item) {
				uni.navigateTo({
					url: `/pagesA/scenicSpot/detail?data=${encodeURIComponent(JSON.stringify(item))}`
				})
			}
		}
	}
</script>

<style>
page {
	background-color: #F6F6F6;
}
</style>

<style lang="scss" scoped>
.scenic-spot {
	.content {
		padding: 0 12rpx;
		.noData {
			width: 374rpx;
			height: 314rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/nodatapg.png') no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
		}
		.item {
			width: 358rpx;
			margin-top: 12rpx;
			background: #FFFFFF;
			border-radius: 12rpx;
			margin-bottom: 12rpx;
			.img {
				height: 268rpx;
			}
			.title {
				height: 40rpx;
				font-size: 28rpx;
				font-weight: bold;
				color: #333333;
				line-height: 40rpx;
				letter-spacing: 1px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin: 20rpx 0 12rpx 18rpx;
			}
			.text {
				margin: 0 18rpx 20rpx 18rpx;
				font-size: 28rpx;
				color: #666666;
				line-height: 44rpx;
				letter-spacing: 1px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			.like {
				margin: 0 18rpx;
				height: 62rpx;
				line-height: 62rpx;
				box-sizing: border-box;
				border-top: 2rpx solid #F6F6F6;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left {
					display: flex;
					align-items: center;
					span {
						font-size: 24rpx;
						color: #666666;
						letter-spacing: 1px;
					}
					.img-icon {
						width: 32rpx;
						height: 32rpx;
						margin-right: 12rpx;
					}
				}
				.right {
					.iconfont {
						font-size: 20rpx;
						color: #B94333;
					}
				}
			}
		}
		.item:first-child {
			.img {
				height: 202rpx;
			}
		}
	}
}
</style>