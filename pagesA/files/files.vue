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
							{{ item.title }}
						</view>
						<view class="num">
							<icon class="iconfont">&#xe65c;</icon>{{ item.num }}
						</view>
					</view>
					<view class="info">
						{{ item.content }}
					</view>
					<view class="time">
						{{ item.time | formatDate }}
					</view>
					<view class="nav">
						查看详情<icon class="iconfont">&#xe647;</icon>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				list: [
					{
						title: '泾口大桥',
						num: '1821',
						content: '清代建筑，位于越城区陶堰镇泾口村关帝庙南清代建筑，位于越城区陶堰镇泾口村关帝庙南',
						time: '1690526795927',
						pics: [
							'https://files.zz-tech.cn/app-files/images/banner1.png',
							'https://files.zz-tech.cn/app-files/images/banner2.png',
							'https://files.zz-tech.cn/app-files/images/banner3.png'
						]
					},
					{
						title: '泾口大桥',
						num: '1821',
						content: '清代建筑，位于越城区陶堰镇泾口村关帝庙南清代建筑，位于越城区陶堰镇泾口村关帝庙南',
						time: '1690526795927',
						pics: [
							'https://files.zz-tech.cn/app-files/images/banner1.png',
							'https://files.zz-tech.cn/app-files/images/banner2.png',
							'https://files.zz-tech.cn/app-files/images/banner3.png'
						]
					},
					{
						title: '泾口大桥',
						num: '1821',
						content: '清代建筑，位于越城区陶堰镇泾口村关帝庙南清代建筑，位于越城区陶堰镇泾口村关帝庙南',
						time: '1690526795927',
						pics: [
							'https://files.zz-tech.cn/app-files/images/banner1.png',
							'https://files.zz-tech.cn/app-files/images/banner2.png',
							'https://files.zz-tech.cn/app-files/images/banner3.png'
						]
					}
				]
			}
		},
		onShow() {
		},
		methods: {
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
			background-size: 100%;
			position: relative;
			display: flex;
			justify-content: space-between;
			.nav {
				position: absolute;
				right: 32rpx;
				bottom: 40rpx;
			    height: 36rpx;
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
						letter-spacing: 4px;
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
					margin-top: 22rpx;
					font-size: 24rpx;
					color: #666666;
					line-height: 36rpx;
				}
			}
		}
	}
}
</style>
