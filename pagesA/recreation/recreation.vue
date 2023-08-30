<template>
	<view class="recreation page-container">
		<NavBar :title="title" :use-bg="true" />
		<view class="content">
			<view v-for="(item, index) in list" :key="index" class="item">
				<view class="img">
					<van-image
					  width="100%"
					  height="100%"
					  fit="cover"
					  radius="4"
					  :src="item.pics[0]"
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
			<van-divider contentPosition="center">没有更多了！</van-divider>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getRecreationList } from '@/api/jingkou.js'
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
				list: []
			}
		},
		onLoad(option) {
			this.title = option.title
			this.init()
		},
		methods: {
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getRecreationList({ lat: this.lat, lng: this.lng, mapType: 'gaode'}).then(res => {
					uni.hideLoading()
					this.list = res.data
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
.recreation {
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
}
</style>