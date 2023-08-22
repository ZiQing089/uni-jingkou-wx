<template>
	<view class="page-container map-detail">
		<NavBar :title="'旅游地图'" :border="true" :use-bg="true" />
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
		<view class="content">
			{{ detail.introduce }}
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
				detail: {}
			}
		},
		onLoad(option) {
			this.detail = JSON.parse(decodeURIComponent(option.data))
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.map-detail {
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
	.content {
		padding: 32rpx 24rpx 90rpx;
		font-size: 28rpx;
		color: #666666;
		line-height: 44rpx;
		letter-spacing: 1px;
	}
}
</style>
