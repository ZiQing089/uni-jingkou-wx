<template>
	<view class="page-container activity">
		<NavBar :title="title" :use-bg="true" :border="true" />
		<view class="content">
			<view v-for="(item, index) in list" :key="index" class="card">
				<view class="top">
					<view class="title">
						{{ item.name }}
					</view>
					<view class="tips">
						{{ item.type.description }}
					</view>
				</view>
				<view class="address">
					<span class="key">活动地点：</span><span>{{ item.address }}</span>
				</view>
				<view class="time">
					<span class="key">活动时间：</span><span>{{ item.time | formatDate }}</span>
				</view>
				<view class="introduce">
					<span class="key">活动介绍：</span><span class="val">{{ item.description }}</span>
				</view>
			</view>
			<van-divider v-if="isNoMore" contentPosition="center">没有更多了！</van-divider>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getActivitiesList } from "@/api/convenient.js"
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
				getActivitiesList({currentPage: this.currentPage, pageSize: this.pageSize, conditions: this.conditions}).then(res => {
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
			}
		}
	}
</script>

<style lang="scss" scoped>
.activity {
	padding-bottom: 98rpx;
	.content {
		padding: 32rpx 24rpx;
		.card {
			border-radius: 12rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/lihdbg.png') no-repeat;
			background-size: 100%;
			margin-bottom: 24rpx;
			height: 305rpx;
			box-sizing: border-box;
			padding: 40rpx 32rpx;
			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title {
					height: 40rpx;
					font-size: 28rpx;
					color: #000000;
					line-height: 40rpx;
					letter-spacing: 1px;
				}
				.tips {
					width: 128rpx;
					height: 46rpx;
					line-height: 46rpx;
					background: #E6F8E4;
					font-size: 24rpx;
					text-align: center;
					color: #3DB62F;
					border-radius: 4rpx;
				}
			}
			.address, .time, .introduce {
				display: flex;
				height: 36rpx;
				font-size: 24rpx;
				color: #666666;
				line-height: 36rpx;
				margin-top: 24rpx;
				.key {
					width: 120rpx;
				}
				.val {
					width: 490rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
	}
}
</style>
