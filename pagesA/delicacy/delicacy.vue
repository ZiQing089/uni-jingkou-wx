<template>
	<view class="delicacy page-container">
		<NavBar :title="'特色美食'" :use-bg="true" />
		<view class="hot-nav">
			<view v-for="(item, index) in hotNav" :key="index" :class="item.active ? 'nav-item active' : 'nav-item'" @click="changeHotNav(item, index)">
				<span>{{ item.title }}</span>
			</view>
		</view>
		<view v-if="show === 0" class="content">
			<view v-for="(item, index) in list" :key="index" class="item">
				<view class="img">
					<van-image
					  width="100%"
					  height="100%"
					  fit="cover"
					  radius="4"
					  :src="item.pic"
					/>
				</view>
				<view class="info">
					<view class="title">
						{{ item.name }}
					</view>
					<view class="distance">
						约{{ Number(item.distance).toFixed(1) }}km
					</view>
				</view>
				<view class="phone" @click="takePhone(item)">
					<view class="left">
						<icon class="iconfont">&#xe649;</icon>{{ item.phone }}
					</view>
					<view class="right">
						<icon class="iconfont">&#xe647;</icon>
					</view>
				</view>
				<view class="address" @click="navigation(item)">
					<view class="left">
						<icon class="iconfont">&#xe648;</icon>{{ item.address }}
					</view>
					<view class="right">
						<icon class="iconfont">&#xe647;</icon>
					</view>
				</view>
			</view>
		</view>
		<view v-if="show === 1" class="other-content">
			<grid-view :cross-axis-gap="6" :main-axis-gap="6" type="masonry">
				<view v-for="(item, index) in toneList" :key="index" class="tone-item" @click="toDetail(item)">
					<view class="img">
						<van-image
						  width="100%"
						  height="100%"
						  fit="cover"
						  radius="12rpx 12rpx 0 0"
						  :src="item.pic"
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
							<icon v-if="item.like" class="iconfont islike" @click.native.stop="addlike(item)">&#xe65b;</icon>
							<icon v-else class="iconfont" @click.native.stop="addlike(item)">&#xe659;</icon>
							<span>{{ item.likeCount }}</span>
						</view>
						<view class="right">
							<icon class="iconfont">&#xe647;</icon>
						</view>
					</view>
				</view>
			</grid-view>
		</view>
		<van-toast id="van-toast" />
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import Toast from '@/wxcomponents/vant/dist/toast/toast';
	import { getRestaurantList, getSpecialityList, addlike } from '@/api/jingkou.js'
	import { mapState } from 'vuex'
	export default {
		components: {
			NavBar
		},
		computed: {
			...mapState({
				lat: (state) => state.user.lat,
				lng: (state) => state.user.lng
			})
		},
		data() {
			return {
				bgHeight: '',
				title: '',
				show: 0,
				list: [],
				toneList: [],
				hotNav: [
					{
						title: '周边饭店',
						active: true
					},
					{
						title: '特色介绍',
						active: false
					}
				]
			}
		},
		onLoad() {
			this.initOne()
			this.initTwo()
		},
		methods: {
			// 热门切换
			changeHotNav(e, i) {
				this.show = i
				this.hotNav.forEach((item, index) => {
					item.active = false
				})
				e.active = !e.active
			},
			initOne() {
				uni.showLoading({
					title: '正在加载'
				})
				getRestaurantList({ lat: this.lat, lng: this.lng, mapType: 'gaode'}).then(res => {
					uni.hideLoading()
					this.list = res.data
				})
			},
			initTwo() {
				uni.showLoading({
					title: '正在加载'
				})
				getSpecialityList().then(res => {
					uni.hideLoading()
					this.toneList = res.data
				})
			},
			// 跳转导航
			navigation(item) {
				wx.openLocation({
					 latitude: parseFloat(item.mapPoint.lat), //目标经纬度
					 longitude: parseFloat(item.mapPoint.lng),
					 scale: 18,
					 name: item.address
				})
			},
			addlike(item) {
				uni.showLoading({
					title: '正在加载'
				})
				addlike({ id: item.id }).then(res => {
					uni.hideLoading()
					this.initTwo()
					console.log(res)
				}) 
			},
			// 联系电话
			takePhone(item) {
				uni.makePhoneCall({
					phoneNumber: item.phone,
					success: (res) => {
						console.log(res)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			// 跳转详情
			toDetail(item) {
				uni.navigateTo({
					url: `/pagesA/delicacy/detail?data=${encodeURIComponent(JSON.stringify(item))}`
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
.delicacy {
	position: relative;
	z-index: 1;
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
	.item {
		background-color: #fff;
		padding: 24rpx 24rpx 0;
		margin-bottom: 12rpx;
		.img {
			height: 394rpx;
			background: #F6F6F6;
			border-radius: 8rpx;
		}
		.phone, .address {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 84rpx;
			font-size: 24rpx;
			color: #000000;
			line-height: 84rpx;
			box-sizing: border-box;
			padding: 0 12rpx;
			.left {
				.iconfont {
					font-size: 28rpx;
					margin-right: 20rpx;
				}
			}
			.right {
				.iconfont {
					font-size: 20rpx;
					color: #B94333;
				}
			}
		}
		.phone {
			border-bottom: 2rpx solid #F6F6F6;
		}
		.info {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 88rpx;
			box-sizing: border-box;
			padding: 0 12rpx;
			border-bottom: 2rpx solid #F6F6F6;
			.title {
				font-size: 28rpx;
				font-weight: bold;
				color: #333333;
				line-height: 40rpx;
				letter-spacing: 1px;
			}
			.distance {
				font-size: 24rpx;
				color: #666666;
				line-height: 36rpx;
			}
		}
	}
	.other-content {
		padding: 0 12rpx 60rpx;
		.tone-item {
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
					font-size: 24rpx;
					color: #666666;
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
				.right {
					display: flex;
					align-items: center;
					.iconfont {
						font-size: 20rpx;
						color: #B94333;
					}
				}
			}
		}
		.tone-item:first-child {
			.img {
				height: 202rpx;
			}
		}
	}
}
</style>