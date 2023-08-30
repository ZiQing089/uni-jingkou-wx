<template>
	<view class="page-container command">
		<NavBar :title="'健康知识'" :border="true" :use-bg="true" />
		<view class="content">
			<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="left">
					<van-image width="100%" height="100%" radius="4" fit="cover"
						:src="item.pics[0]" />
				</view>
				<view class="right">
					<view class="title">
						{{ item.title }}
					</view>
					<view class="info">
						{{ item.description }}
					</view>
					<view class="nav">
						查看详情<icon class="iconfont">&#xe647;</icon>
					</view>
				</view>
			</view>
			<van-divider v-if="isNoMore" contentPosition="center">没有更多了！</van-divider>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getList } from "@/api/health.js"
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				isLoadMore:false,
				currentPage: 1,
				pageSize: 10,
				isNoMore: false,
				conditions: [],
				list: []
			}
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
			// 初始化列表页
			init() {
				getList({currentPage: this.currentPage, pageSize: this.pageSize, conditions: this.conditions}).then(res => {
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
			toDetail(item) {
				uni.navigateTo({
					url: `/pagesA/command/detail?data=${encodeURIComponent(JSON.stringify(item))}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.command {
	.content {
		padding: 32rpx 24rpx 90rpx;
		.item {
			border-radius: 12rpx;
			padding: 40rpx 32rpx;
			margin-bottom: 24rpx;
			box-sizing: border-box;
			height: 276rpx;
			background-color: #F6F6F6;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/whdabg.png') no-repeat;
			background-size: 100% 100%;
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
				.title {
					font-size: 28rpx;
					color: #000000;
					line-height: 40rpx;
					letter-spacing: 1px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
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
	}
}
</style>
