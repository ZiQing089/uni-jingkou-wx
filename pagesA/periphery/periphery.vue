<template>
	<view class="page-container periphery">
		<NavBar :title="'周边服务'" :use-bg="true" :border="true" />
		<view class="content">
			<template v-if="list.length === 0">
				<view class="noData"></view>
			</template>
			<template v-else>
				<view v-for="(item, index) in list" :key="index" class="item" @click="navigation(item)">
					<view class="header">
						<view class="left">
							{{ item.name }}
						</view>
						<view class="right">
							约{{ Number(item.distance).toFixed(1) }}km
						</view>
					</view>
					<view class="address">
						地址：{{ item.address }}
					</view>
					<view class="nav">
						导航<icon class="iconfont">&#xe647;</icon>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getServier } from '@/api/jingkou.js'
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
				list: []
			}
		},
		onShow() {
			this.init()
		},
		methods: {
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getServier({ lat: this.lat, lng: this.lng, mapType: 'gaode'}).then(res => {
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
			}
		}
	}
</script>

<style lang="scss">
.periphery {
	.content {
		padding: 32rpx 24rpx 90rpx;
		.noData {
			width: 374rpx;
			height: 314rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/nodatapg.png') no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
		}
		.item {
			border-radius: 12rpx;
			margin-bottom: 24rpx;
			padding: 40rpx 32rpx;
			box-sizing: border-box;
			height: 178rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/ggxxbg.png') no-repeat;
			background-size: 100% 100%;
			position: relative;
			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left {
					font-size: 28rpx;
					color: #000000;
					line-height: 40rpx;
					letter-spacing: 1px;
				}
				.right {
					font-size: 24rpx;
					color: #666666;
					line-height: 36rpx;
				}
			}
			.address {
				font-size: 24rpx;
				color: #666666;
				line-height: 36rpx;
				margin-top: 20rpx;
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
	}
}
</style>
