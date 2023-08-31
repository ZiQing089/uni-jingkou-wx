<template>
	<view class="page-container help">
		<NavBar :title="title" :use-bg="true" :border="true" />
		<view class="content">
			<template v-if="list.length === 0">
				<view class="noData"></view>
			</template>
			<template v-else>
				<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
					<view class="img">
						<van-image
						  width="100%"
						  height="100%"
						  fit="cover"
						  radius="4"
						  :src="item.pics[0]"
						/>
					</view>
					<view class="title">
						{{ item.name }}
					</view>
					<view class="info">
						<view class="time">
							时间：{{ item.time | formatDate }}
						</view>
						<view class="address">
							地点：{{ item.address }}
						</view>
					</view>
					<view class="text-box">
						<view class="text">
							{{ item.description }}
						</view>
					</view>
					<view class="bottom">
						<view class="num">
							参与人数：{{ item.number }}人
						</view>
						<view class="btn">
							查看详情<icon class="iconfont">&#xe647;</icon>
						</view>
					</view>
				</view>
				<van-divider v-if="isNoMore" contentPosition="center">没有更多了！</van-divider>
			</template>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getHelpList } from "@/api/convenient.js"
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				bgHeight: '',
				title: '',
				isLoadMore:false,
				currentPage: 1,
				pageSize: 10,
				isNoMore: false,
				conditions: [],
				list: []
			}
		},
		onLoad(option) {
			this.title = option.title
		},
		onShow() {
			this.list = []
			this.init()
		},
		onReachBottom() {
			if(!this.isLoadMore && !this.isNoMore){  //此处判断，上锁，防止重复请求
				this.isLoadMore = true
				this.currentPage += 1  //每次上拉请求新的一页
				this.init()
			}
		},
		methods: {
			// 初始化页面
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getHelpList({currentPage: this.currentPage, pageSize: this.pageSize, conditions: this.conditions}).then(res => {
					uni.hideLoading()
					if(res.success && res.data.list.length !== 0) {
						this.isLoadMore = false
						this.list = this.list.concat(res.data.list)
						if(res.data.list.length < this.pageSize) {
							this.isNoMore = true
						}
					} else {
						// uni.hideLoading()
						uni.showToast({
							title: res.message,
							icon: 'error',
							duration: 2000
						})
					}
				})
			},
			// 去详情页
			toDetail(item) {
				uni.navigateTo({
					url: `/pagesA/help/helpDetail?data=${encodeURIComponent(JSON.stringify(item))}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.help {
	padding-bottom: 98rpx;
	.content {
		.noData {
			width: 374rpx;
			height: 314rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/nodatapg.png') no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
		}
		.item {
			padding: 24rpx 24rpx 0;
			border-bottom: 12rpx solid #F6F6F6;
			.img {
				height: 394rpx;
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
