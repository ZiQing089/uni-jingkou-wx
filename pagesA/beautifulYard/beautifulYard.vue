<template>
	<view class="page-container beautiful-yard">
		<NavBar :title="'美丽庭院'" :use-bg="true" />
		<view class="hot-nav">
			<view v-for="(item, index) in hotNav" :key="index" :class="item.active ? 'nav-item active' : 'nav-item'" @click="changeHotNav(item, index)">
				<span>{{ item.title }}</span>
			</view>
		</view>
		<view v-if="show === 0" class="show-content">
			<view v-for="(item, index) in list" :key="index" class="show-item">
				<view class="name">
					户主：{{ item.name }}
				</view>
				<view class="banner">
					<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500"
						indicator-active-color="#FFFFFF" indicator-color="rgba(255, 255, 255, 0.58)">
						<swiper-item v-for="(e, i) in item.swiperList" :key="i">
							<van-image width="100%" height="100%" fit="cover"
								:src="e" />
						</swiper-item>
					</swiper>
				</view>
				<view class="bottom">
					<view class="left" @click="addlike">
						<icon v-if="item.islike" class="iconfont">&#xe659;</icon><icon v-else class="iconfont islike">&#xe65b;</icon>{{ item.like }}
					</view>
					<view class="right">
						<icon class="iconfont">&#xe65a;</icon>转发
					</view>
				</view>
			</view>
			<view class="add" @click="addShow">
				<van-icon name="plus" color="white" size="40px" />
			</view>
		</view>
		<view v-if="show === 1" class="content">
			<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="title">
					{{ item.title }}
				</view>
				<view class="time">
					上传时间：{{ item.time }}
				</view>
				<view class="name">
					上传人：{{ item.name }}
				</view>
				<view class="nav">
					查看<icon class="iconfont">&#xe647;</icon>
				</view>
				<view v-if="item.status === '待审核' || item.status === '待处理'" class="status warning">
					{{ item.status }}
				</view>
				<view v-else-if="item.status === '已驳回'" class="status error">
					{{ item.status }}
				</view>
				<view v-else class="status">
					{{ item.status }}
				</view>
				<view class="add" @click="addNet">
					<van-icon name="plus" color="white" size="40px" />
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
				show: 0,
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
				list: [
					{
						title: '村口的垃圾堆需要处理',
						time: '2022-02-02',
						name: '广工',
						islike: true,
						like: '2232',
						swiperList: [
							'https://files.zz-tech.cn/app-files/images/banner1.png',
							'https://files.zz-tech.cn/app-files/images/banner2.png',
							'https://files.zz-tech.cn/app-files/images/banner3.png'
						],
						status: '待审核'
					},
					{
						title: '村口的垃圾堆需要处理',
						time: '2022-02-02',
						name: '广工',
						islike: true,
						like: '2232',
						status: '待处理',
						swiperList: [
							'https://files.zz-tech.cn/app-files/images/banner1.png',
							'https://files.zz-tech.cn/app-files/images/banner2.png',
							'https://files.zz-tech.cn/app-files/images/banner3.png'
						]
					},
					{
						title: '村口的垃圾堆需要处理',
						time: '2022-02-02',
						name: '广工',
						islike: false,
						like: '2232',
						status: '已驳回',
						swiperList: [
							'https://files.zz-tech.cn/app-files/images/banner1.png',
							'https://files.zz-tech.cn/app-files/images/banner2.png',
							'https://files.zz-tech.cn/app-files/images/banner3.png'
						]
					},
					{
						title: '村口的垃圾堆需要处理',
						time: '2022-02-02',
						name: '广工',
						islike: false,
						like: '2232',
						swiperList: [
							'https://files.zz-tech.cn/app-files/images/banner1.png',
							'https://files.zz-tech.cn/app-files/images/banner2.png',
							'https://files.zz-tech.cn/app-files/images/banner3.png'
						],
						status: '已处理'
					}
				]
			}
		},
		methods: {
			// tab切换
			changeHotNav(e, i) {
				this.show = i
				this.hotNav.forEach((item, index) => {
					item.active = false
				})
				e.active = !e.active
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
			addlike() {
				console.log('你好')
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
.beautiful-yard {
	.hot-nav {
		display: flex;
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
			padding: 40rpx 32rpx;
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
		border-top: 4rpx solid #F6F6F6;
		.show-item {
			border-bottom: 12rpx solid #F6F6F6;
			padding: 32rpx 24rpx 27rpx;
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
				.left, .right {
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
