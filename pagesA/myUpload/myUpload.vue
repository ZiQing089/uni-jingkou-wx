<template>
	<view class="page-container my-upload">
		<NavBar :title="'美丽庭院'" :use-bg="true" />
		<view class="hot-nav" :style="{ top: total }">
			<view v-for="(item, index) in hotNav" :key="index" :class="item.active ? 'nav-item active' : 'nav-item'" @click="changeHotNav(item, index)">
				<span>{{ item.title }}</span>
			</view>
		</view>
		<view v-if="show === 0" class="show-content">
			<view v-for="(item, index) in showList" :key="index" class="show-item">
				<view class="inside-border">
					<view class="banner">
						<swiper class="swiper" circular :indicator-dots="true"
							indicator-active-color="#FFFFFF" indicator-color="rgba(255, 255, 255, 0.58)">
							<swiper-item v-for="(e, i) in item.pics" :key="i">
								<view class="img">
									<van-image width="100%" height="100%" fit="cover"
										:src="e" />
										<view v-if="item.status.description === '已驳回'" class="status error">
											{{ item.status.description }}
										</view>
										<view v-else-if="item.status.description === '待审核' || item.status.description === '待处理'" class="status warning">
											{{ item.status.description }}
										</view>
										<view v-else class="status">
											{{ item.status.description }}
										</view>
								</view>
							</swiper-item>
						</swiper>
					</view>
					<view class="name">
						户主：{{ item.houseHolder }}
					</view>
					<view v-if="item.status.description === '已驳回'" class="reject">
						驳回原因：{{ item.reject }}
					</view>
					<view v-if="item.status.description === '待审核'" class="cancel" @click.native.stop="cancelShow(item)">
						取消
					</view>
				</view>
			</view>
		</view>
		<view v-if="show === 1" class="content">
			<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="title">
					{{ item.title }}
				</view>
				<view class="time">
					上传时间：{{ item.createTime | formatDate }}
				</view>
				<view class="name">
					上传人：{{ item.uploader }}
				</view>
				<view v-if="item.status.description !== '待审核'" class="nav">
					查看<icon class="iconfont">&#xe647;</icon>
				</view>
				<view v-if="item.status.description === '待审核'" class="cancel" @click.native.stop="cancel(item)">
					取消
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
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getShowlist, getremediationList, cancel, cancelShow } from '@/api/beautifulYard.js'
	import { userInfo } from '@/api/login.js'
	import { mapState } from 'vuex'
	export default {
		components: {
			NavBar
		},
		computed: {
			...mapState({
				creatorId: (state) => state.user.creatorId
			})
		},
		data() {
			return {
				show: 0,
				total: 0,
				hotNav: [
					{
						title: '秀出来',
						active: true
					},
					{
						title: '整出来',
						active: false
					}
				],
				active: '秀出来',
				isLoadMore:false,
				isNoMore: false,
				currentPage: 1,
				pageSize: 10,
				isShowLoadMore:false,
				isShowNoMore: false,
				showCurrentPage: 1,
				showPageSize: 10,
				conditions: [{
					"column" : "creatorId",
					"mode" : "eq",
					"value" : ""
				}],
				showList: [],
				list: []
			}
		},
		onShow() {
			const { top, height, width } = wx.getMenuButtonBoundingClientRect();
			this.total = top + height + 2 + 7+ 'px'
			this.showList = []
			this.list = []
			this.getList()
			this.getShowList()
		},
		methods: {
			// 获取整出来列表
			getList() {
				this.conditions[0].value = this.creatorId
				uni.showLoading({
					title: '正在加载'
				})
				getremediationList({currentPage: this.currentPage, pageSize: this.pageSize, conditions: this.conditions}).then(res => {
					uni.hideLoading()
					if(res.success && res.data.list.length !== 0) {
						this.isLoadMore = false
						this.list = this.list.concat(res.data.list)
						if(res.data.list.length < this.pageSize) {
							this.isNoMore = true
						}
					}
				})
			},
			// 获取秀出来列表
			getShowList() {
				this.conditions[0].value = this.creatorId
				uni.showLoading({
					title: '正在加载'
				})
				getShowlist({currentPage: this.showCurrentPage, pageSize: this.showPageSize, conditions: this.conditions}).then(res => {
					uni.hideLoading()
					if(res.success && res.data.list.length !== 0) {
						this.isShowLoadMore = false
						this.showList = this.showList.concat(res.data.list)
						if(res.data.list.length < this.pageSize) {
							this.isShowNoMore = true
						}
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
				this.currentPage = 1
				this.showCurrentPage = 1
				this.list = []
				this.showList = []
				this.isShowLoadMore = false
				this.isLoadMore = false
				this.isNoMore = false
				this.isShowNoMore = false
				this.getList()
				this.getShowList()
			},
			cancel(item) {
				cancel(item.id).then(res => {
					if(res.success) {
						uni.showToast({
							title: res.message,
							icon: 'success',
							duration: 2000
						})
						this.list = []
						this.getList()
					}
				})
			},
			cancelShow(item) {
				cancelShow(item.id).then(res => {
					if(res.success) {
						uni.showToast({
							title: res.message,
							icon: 'success',
							duration: 2000
						})
						this.showList = []
						this.getShowList()
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

<style lang="scss" scoped>
.my-upload {
	.hot-nav {
		display: flex;
		position: sticky;
		z-index: 99;
		padding: 0 56rpx;
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
		border-top: 4rpx solid #F6F6F6;
		padding: 32rpx 24rpx 90rpx;
		.item {
			border-radius: 12rpx;
			padding: 45rpx 32rpx;
			margin-bottom: 24rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/mltybg.png') no-repeat;
			background-size: 100%;
			position: relative;
			.title {
				font-size: 28rpx;
				color: #000000;
				line-height: 40rpx;
				letter-spacing: 1px;
			}
			.time, .name {
				margin-top: 24rpx;
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
				right: 40rpx;
				bottom: 45rpx;
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
			.cancel {
				position: absolute;
				width: 140rpx;
				height: 60rpx;
				right: 32rpx;
				bottom: 33rpx;
				background: #B94333;
				border-radius: 30rpx;
				text-align: center;
				line-height: 60rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				letter-spacing: 1px;
			}
		}
	}
	.show-content {
		border-top: 4rpx solid #F6F6F6;
		padding: 32rpx 24rpx 90rpx;
		.show-item {
			border-radius: 12rpx;
			margin-bottom: 24rpx;
			padding: 45rpx 32rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/mysc.png') no-repeat;
			background-size: 100%;
			position: relative;
			.name {
				font-size: 28rpx;
				color: #000000;
				line-height: 40rpx;
				letter-spacing: 1px;
				margin-top: 34rpx;
			}
			.reject {
				font-size: 24rpx;
				margin-top: 12rpx;
				color: #B94333;
				line-height: 36rpx;
				letter-spacing: 1px;
			}
			.banner {
				width: 100%;
				height: 358rpx;
				.swiper {
					height: 100%;
					-webkit-transform: translateY(0);
					background-color: #000000;
					border-radius: 8rpx;
					overflow: hidden;
					.img {
						position: relative;
						width: 100%;
						height: 100%;
						.status {
							position: absolute;
							right: 0;
							top: 0;
							width: 104rpx;
							height: 46rpx;
							text-align: center;
							font-size: 24rpx;
							color: #FFFFFF;
							line-height: 46rpx;
							background: #3DB62F;	
							border-radius: 0rpx 4rpx 0rpx 4rpx;
						}
						.warning {
							background: #FA7E2A;
						}
						.error {
							background: #F4474B;
						}
					}
				}
			}
			.cancel {
				position: absolute;
				width: 140rpx;
				height: 60rpx;
				right: 32rpx;
				bottom: 29rpx;
				background: #B94333;
				border-radius: 30rpx;
				text-align: center;
				line-height: 60rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				letter-spacing: 1px;
			}
		}
	}
}
</style>
