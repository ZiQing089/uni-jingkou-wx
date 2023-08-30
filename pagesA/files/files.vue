<template>
	<view class="page-container files">
		<NavBar :title="'文化档案'" :border="true" :use-bg="true" />
		<view class="content">
			<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="left">
					<van-image width="100%" height="100%" radius="4" fit="cover"
						:src="item.pics[0]" />
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
					<view class="info">
						{{ item.introduce }}
					</view>
					<view class="time">
						<view class="times">
							{{ item.createTime | formatDate }}
						</view>
						<view class="nav">
							查看详情<icon class="iconfont">&#xe647;</icon>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getCultureList } from "@/api/promote.js"
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
				getCultureList().then(res => {
					uni.hideLoading()
					this.list = res.data
				})
			},
			toDetail(item) {
				uni.navigateTo({
					url: `/pagesA/files/detail?data=${encodeURIComponent(JSON.stringify(item))}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.files {
	.content {
		padding: 32rpx 24rpx 90rpx;
		.item {
			border-radius: 12rpx;
			padding: 40rpx 32rpx;
			margin-bottom: 24rpx;
			background-color: #F6F6F6;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/whdabg.png') no-repeat;
			background-size: 100% 100%;
			position: relative;
			height: 274rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			.left {
				width: 260rpx;
				height: 194rpx;
				background: #D8D8D8;
				border-radius: 8rpx;
			}
			.right {
				width: calc(100% - 282rpx);
				.header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.title {
						font-size: 28rpx;
						color: #000000;
						line-height: 40rpx;
						letter-spacing: 1px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
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
				.time {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 22rpx;
					.times {
						font-size: 24rpx;
						color: #666666;
						line-height: 36rpx;
					}
					.nav {
						display: flex;
					    font-size: 24rpx;
						display: flex;
					    color: #B94333;
					    line-height: 36rpx;
					   .iconfont {
						   display: flex;
						   align-items: center;
						   font-size: 20rpx;
						   margin-left: 12rpx;
					   }
					}
				}
			}
		}
	}
}
</style>
