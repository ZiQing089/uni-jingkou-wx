<template>
	<view class="page-container beautiful-yard">
		<NavBar :title="'美丽庭院'" :use-bg="true" />
		<view class="hot-nav" :style="{ top: total }">
			<view v-for="(item, index) in hotNav" :key="index" :class="item.active ? 'nav-item active' : 'nav-item'" @click="changeHotNav(item, index)">
				<span>{{ item.title }}</span>
			</view>
		</view>
		<view v-if="show === 0" class="show-content">
			<template v-if="noDataShowList.length === 0">
				<view class="noData"></view>
			</template>
			<template v-else>
				<view v-for="(item, index) in showList" :key="index" class="show-item">
					<view class="name">
						户主：{{ item.houseHolder }}
					</view>
					<view class="banner">
						<swiper class="swiper" circular :indicator-dots="true"
							indicator-active-color="#FFFFFF" indicator-color="rgba(255, 255, 255, 0.58)">
							<swiper-item v-for="(e, i) in item.pics" :key="i">
								<van-image width="100%" height="100%" fit="cover"
									:src="e" />
							</swiper-item>
						</swiper>
					</view>
					<view class="bottom">
						<view class="left" @click="addlike(item)">
							<icon v-if="item.liked" class="iconfont islike">&#xe65b;</icon><icon v-else class="iconfont">&#xe659;</icon>{{ item.likeCount }}
						</view>
						<button class="share-btn" type="default" open-type="share">
							<icon class="iconfont">&#xe65a;</icon><span>转发</span>
						</button>
					</view>
				</view>
			</template>
			<van-divider v-if="showIsNoMore" contentPosition="center">没有更多了！</van-divider>
			<view v-if="rule === 'VILLAGER'" class="add" @click="addShow">
				<van-icon name="plus" color="white" size="40px" />
			</view>
		</view>
		<view v-if="show === 1" class="content">
			<template v-if="noDataList.length === 0">
				<view class="noData"></view>
			</template>
			<template v-else>
				<view v-for="(item, index) in list" :key="index" class="item-bg" @click="toDetail(item)">
					<view class="item">
						<view class="title">
							{{ item.title }}
						</view>
						<view class="time">
							上传时间：{{ item.createTime | formatDate }}
						</view>
						<view class="name">
							上传人：{{ item.uploader }}
						</view>
						<view class="nav">
							查看<icon class="iconfont">&#xe647;</icon>
						</view>
						<view v-if="item.status.description === '待审核' || item.status.description === '待处理'" class="status warning">
							{{ item.status.description }}
						</view>
						<view v-else-if="item.status.description === '已驳回'" class="status error">
							{{ item.status.description }}
						</view>
						<view v-else class="status">
							{{ item.status.description }}
						</view>
					</view>
				</view>
			</template>
			<van-divider v-if="isNoMore" contentPosition="center">没有更多了！</van-divider>
			<view v-if="rule === 'VILLAGER'" class="add" @click="addNet">
				<van-icon name="plus" color="white" size="40px" />
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getShowlist, getremediationList, addLike } from '@/api/beautifulYard.js'
	import { userInfo } from '@/api/login.js'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				show: 0,
				rule: '',
				hotNav: [
					{
						title: '秀出来',
						active: true,
						currentPage: 1,
						pageSize: 10,
						isLoadMore: false,
						isNoMore: false,
						conditions: [{
							"column": "status",
							"mode": "eq",
							"value": 'PASS'
						}]
					},
					{
						title: '整出来',
						active: false,
						currentPage: 1,
						pageSize: 10,
						isLoadMore: false,
						isNoMore: false,
						conditions: [{
							"column": "status",
							"mode": "in",
							"value": ['WAITING', 'DONE']
						}]
					}
				],
				active: '秀出来',
				total: 0,
				isNoMore: false,
				showIsNoMore: false,
				showList: [],
				list: [],
				noDataShowList: [],
				noDataList: []
			}
		},
		onShow() {
			const { top, height, width } = wx.getMenuButtonBoundingClientRect();
			this.total = top + height + 5 + 'px'
			this.getUserInfo()
			// this.getShowList()
			// this.getList()
		},
		onLoad() {
			const self = this
			self.hotNav.forEach((item, index) => {
				if(item.title === '秀出来') {
					this.getShowList(item)
				} else {
					this.getList(item)
				}
			})
		},
		onReachBottom() {
			this.restData(this.active, this.getShowList, this.getList)
		},
		methods: {
			// 获取用户信息
			getUserInfo() {
				const self = this
				userInfo().then(res => {
					if(res.success) {
						this.rule = res.data.userType.key
					} else {
						uni.showToast({
							title: res.message,
							icon: 'error',
							duration: 2000
						})
					}
				})
			},
			restData(active, fnc1, fnc2) {
				const self = this
				self.hotNav.forEach((item, index) => {
					if(active === '秀出来') {
						if(!item.isLoadMore && !item.isNoMore){  //此处判断，上锁，防止重复请求
							item.isLoadMore = true
							item.currentPage += 1  //每次上拉请求新的一页
							fnc1(item)
						}
					} else {
						if(!item.isLoadMore && !item.isNoMore){  //此处判断，上锁，防止重复请求
							item.isLoadMore = true
							item.currentPage += 1  //每次上拉请求新的一页
							fnc2(item)
						}
					}
				})
			},
			// 获取整出来列表
			getList(item) {
				uni.showLoading({
					title: '加载中'
				})
				getremediationList({currentPage: item.currentPage, pageSize: item.pageSize, conditions: item.conditions}).then(res => {
					if(res.success && res.data.list.length !== 0) {
						uni.hideLoading()
						item.isLoadMore = false
						this.noDataList = res.data.list
						this.list = this.list.concat(res.data.list)
						if(res.data.list.length < this.pageSize) {
							item.isNoMore = true
							this.isNoMore = item.isNoMore
						} 
					} else {
						uni.hideLoading()
					}
				})
			},
			// 获取秀出来列表
			getShowList(item) {
				uni.showLoading({
					title: '加载中'
				})
				getShowlist({currentPage: item.currentPage, pageSize: item.pageSize, conditions: item.conditions}).then(res => {
					if(res.success && res.data.list.length !== 0) {
						uni.hideLoading()
						item.isLoadMore = false
						this.noDataShowList = res.data.list
						this.showList = this.showList.concat(res.data.list)
						console.log(res.data.list.length, item.pageSize)
						if(res.data.list.length < item.pageSize) {
							item.isNoMore = true
							this.showIsNoMore = item.isNoMore
						}
					} else {
						uni.hideLoading()
					}
				}) 
			},
			// tab切换
			changeHotNav(e, i) {
				this.show = i
				this.hotNav.forEach((item, index) => {
					item.active = false
				})
				e.active = !e.active
				this.active = e.title
			},
			addNet() {
				uni.navigateTo({
					url: '/pagesA/beautifulYard/netAdd'
				})
			},
			addShow() {
				uni.navigateTo({
					url: '/pagesA/beautifulYard/showAdd'
				})
			},
			onShareAppMessage(res) {
				return{
				      title:'转发分享',    // 转发标题
				      path: '/pagesA/beautifulYard/beautifulYard',
				      imageUrl:''   
				}
			},
			addlike(item) {
				uni.showLoading({
					title: '正在加载'
				})
				addLike(item.id).then(res => {
					uni.hideLoading()
					item.liked = !item.liked
					if(item.liked) {
						item.likeCount ++
					} else {
						item.likeCount --
					}
				}) 
			},
			toDetail(item) {
				uni.navigateTo({
					url: `/pagesA/beautifulYard/detail?data=${encodeURIComponent(JSON.stringify(item))}`
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
.beautiful-yard {
	.hot-nav {
		display: flex;
		position: sticky;
		padding: 0 56rpx;
		z-index: 99;
		height: 86rpx;
		background-color: #ffffff;
		margin-bottom: 4rpx;
		align-items: center;
		.nav-item {
			height: 48rpx;
			line-height: 48rpx;
			padding-top: 8rpx;
			font-size: 28rpx;
			box-sizing: border-box;
			color: #333333;
			line-height: 42rpx;
			margin-right: 56rpx;
		}
		.active {
			height: 48rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #B94333;
			line-height: 48rpx;
			transform-style: preserve-3d;
			padding: 0;
			position: relative;
		}
		.active::after {
			transform: translateZ(-10px);
			position: absolute;
			content: '';
			height: 8rpx;
			bottom: 4rpx;
			left: 0;
			right: 0;
			z-index: 0;
			background: #F4E3E0;
		}
	}
	.content {
		.noData {
			width: 374rpx;
			height: 314rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/nodatapg.png') no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
		}
		.item-bg {
			background-color: #ffffff;
			padding: 24rpx;
			margin-bottom: 4rpx;
			.item {
				border-radius: 12rpx;
				padding: 40rpx 32rpx;
				height: 240rpx;
				box-sizing: border-box;
				background: url('https://files.zz-tech.cn/app-files/images/jingkou/mltybg.png') no-repeat;
				background-size: 100% 100%;
				position: relative;
				.title {
					font-size: 28rpx;
					color: #000000;
					line-height: 40rpx;
					letter-spacing: 1px;
				}
				.time, .name {
					margin-top: 26rpx;
					font-size: 24rpx;
					color: #333333;
					line-height: 36rpx;
				}
				.status {
					position: absolute;
					right: 32rpx;
					top: 40rpx;
					padding: 6rpx 14rpx;
					font-size: 24rpx;
					color: #3DB62F;
					line-height: 34rpx;
					background: #E6F8E4;
					border-radius: 4rpx;
				}
				.warning {
					background: #FEF4EA;
					color: #FA7E2A;
				}
				.error {
					color: #F4474B;
					background: #FDECEC;
				}
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
			}
		}
		.add {
			width: 120rpx;
			height: 120rpx;
			border-radius: 120rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #B94333;
			box-shadow: 4rpx 4rpx 12rpx 0rpx rgba(0,0,0,0.1);
			position: fixed;
			right: 32rpx;
			bottom: 40rpx;
		}
	}
	.show-content {
		.noData {
			width: 374rpx;
			height: 314rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/nodatapg.png') no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
		}
		.show-item {
			margin-bottom: 12px;
			padding: 32rpx 24rpx 24rpx;
			background-color: #ffffff;
			.name {
				font-size: 28rpx;
				color: #000000;
				line-height: 40rpx;
				letter-spacing: 1px;
			}
			.banner {
				width: 100%;
				height: 394rpx;
				margin-top: 24rpx;
				.swiper {
					height: 100%;
					-webkit-transform: translateY(0);
					background-color: #000000;
					border-radius: 12rpx;
					overflow: hidden;
				}
			}
			.bottom {
				padding: 0 12rpx;
				margin-top: 27rpx;
				display: flex;
				justify-content: space-between;
				.left, .share-btn {
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
					.islike {
						color: #F4474B;
					}
				}
				.share-btn {
					border: none;
					background: none;
					padding: 0;
					margin: 0;
				}
				.share-btn::after {
					border: 0;
				}
			}
		}
		.add {
			width: 120rpx;
			height: 120rpx;
			border-radius: 120rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #B94333;
			box-shadow: 4rpx 4rpx 12rpx 0rpx rgba(0,0,0,0.1);
			position: fixed;
			right: 32rpx;
			bottom: 40rpx;
		}
	}
}
</style>
