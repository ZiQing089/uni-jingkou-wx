<template>
	<view class="page-container help">
		<NavBar :title="title" :use-bg="true" :border="true" />
		<view class="content">
			<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="img">
					<van-image
					  width="100%"
					  height="100%"
					  fit="cover"
					  radius="4"
					  :src="item.img"
					/>
				</view>
				<view class="title">
					{{ item.title }}
				</view>
				<view class="info">
					<view class="time">
						时间：{{ item.time }}
					</view>
					<view class="address">
						地点：{{ item.address }}
					</view>
				</view>
				<view class="text-box">
					<view class="text">
						{{ item.info }}
					</view>
				</view>
				<view class="bottom">
					<view class="num">
						参与人数：{{ item.num }}人
					</view>
					<view class="btn">
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
				bgHeight: '',
				title: '',
				list: [
					{
						title: '慰问老人',
						img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2F35ccdf0a-0f47-cb25-d9fc-7ef123a02c48%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1687334875&t=448cdaef197d59905b223d78c62f2655',
						address: '老年活动中心',
						time: '2023-04-05',
						num: 3,
						info: '中心集休闲、娱乐、健身、文化、学习于一体，突出文化休闲特色，寓教于乐，乐中健...'
					},
					{
						title: '慰问老人',
						img: 'https://img0.baidu.com/it/u=1923555384,833149565&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
						address: '老年活动中心',
						time: '2023-04-05',
						num: 9,
						info: '中心集休闲、娱乐、健身、文化、学习于一体，突出发地方但是防守打法师德师风水电费水电费文化休闲特色，寓教于乐，乐中健...'
					}
				]
			}
		},
		onLoad(option) {
			console.log(option)
			this.title = option.title
		},
		onShow() {
		},
		methods: {
			// 去详情页
			toDetail(item) {
				uni.navigateTo({
					url: '/pagesA/help/helpDetail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.help {
	padding-bottom: 98rpx;
	.content {
		.item {
			padding: 24rpx 24rpx 0;
			border-bottom: 12rpx solid #F6F6F6;
			.img {
				height: 434rpx;
				background: #F6F6F6;
				border-radius: 8rpx;
			}
			.title {
				height: 40rpx;
				font-size: 28rpx;
				font-weight: bold;
				color: #333333;
				line-height: 40rpx;
				letter-spacing: 1px;
				padding-left: 12rpx;
				margin-top: 24rpx;
			}
			.info {
				display: flex;
				padding-left: 12rpx;
				.time, .address {
					height: 36rpx;
					font-size: 24rpx;
					color: #666666;
					line-height: 36rpx;
					margin-top: 12rpx;
				}
				.address {
					margin-left: 32rpx;
				}
			}
			.text-box {
				border-top: 2rpx solid #F0F0F2;
				margin: 24rpx 12rpx 0;
				.text {
					padding-top: 24rpx;
					font-size: 28rpx;
					color: #666666;
					line-height: 44rpx;
					letter-spacing: 1px;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					text-overflow:ellipsis; 
					overflow:hidden;
				}
			}
			.bottom {
				padding: 0 32rpx 0 12rpx;
				display: flex;
				justify-content: space-between;
				.num {
					height: 88rpx;
					font-size: 24rpx;
					color: #B94333;
					line-height: 88rpx;
				}
				.btn {
					height: 88rpx;
					font-size: 28rpx;
					color: #B94333;
					line-height: 88rpx;
					letter-spacing: 1px;
					text-align: right;
					.iconfont {
						font-size: 20rpx;
						color: #B94333;
						margin-left: 12rpx;
					}
				}
			}
		}
	}
}
</style>
