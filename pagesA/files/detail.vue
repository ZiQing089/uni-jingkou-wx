<template>
	<view class="page-container files-detail">
		<NavBar :title="'文化档案'" :border="true" />
		<view class="banner">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500"
				indicator-active-color="#FFFFFF" indicator-color="rgba(255, 255, 255, 0.58)">
				<swiper-item v-for="(e, i) in detail.pics" :key="i">
					<van-image width="100%" height="100%" fit="cover"
						:src="e" />
				</swiper-item>
			</swiper>
		</view>
		<view class="title">
			{{ detail.name }}
		</view>
		<view class="info">
			<view class="time">
				发布时间：{{ detail.createTime | formatDate }}
			</view>
			<view class="num">
				<icon class="iconfont">&#xe65c;</icon>{{ detail.viewCount }}
			</view>
		</view>
		<view class="content">
			{{ detail.introduce }}
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getCultureDetail } from "@/api/promote.js"
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				obj: {},
				detail: {}
			}
		},
		onLoad(option) {
			this.obj = JSON.parse(decodeURIComponent(option.data))
		},
		onShow() {
			this.init()
		},
		methods: {
			// 初始化页面
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getCultureDetail({ id: this.obj.id }).then(res => {
					uni.hideLoading()
					this.detail = res.data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.files-detail {
	.banner {
		width: 100%;
		height: 422rpx;
		.swiper {
			height: 100%;
			-webkit-transform: translateY(0);
			// background-color: #000000;
			overflow: hidden;
		}
	}
	.title {
		margin-top: 46rpx;
		font-size: 44rpx;
		text-align: center;
		font-weight: bold;
		color: #333333;
		line-height: 66rpx;
		letter-spacing: 1px;
	}
	.info {
		margin-top: 40rpx;
		padding: 0 148rpx;
		display: flex;
		justify-content: space-between;
		.time {
			font-size: 26rpx;
			color: #999999;
			line-height: 44rpx;
			letter-spacing: 1px;
		}
		.num {
			display: flex;
			font-size: 26rpx;
			display: flex;
			color: #999999;
			line-height: 44rpx;
			letter-spacing: 1px;
			.iconfont {
				display: flex;
				align-items: center;
				margin-right: 6rpx;
				font-size: 32rpx;
			}
		}
	}
	.content {
		padding: 32rpx 24rpx 90rpx;
		font-size: 28rpx;
		color: #666666;
		line-height: 44rpx;
		letter-spacing: 1px;
	}
}
</style>
