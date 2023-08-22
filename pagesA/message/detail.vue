<template>
	<view class="page-container message-detail">
		<NavBar :title="'公告信息'" :use-bg="true" :border="true" />
		<view class="banner-img">
			<van-image
			  width="100%"
			  height="100%"
			  fit="cover"
			  :src="detail.pic
			  "
			/>
		</view>
		<view class="title">
			{{ detail.title }}
		</view>
		<view class="time">
			发布时间：{{ detail.createTime | formatDate }}
		</view>
		<view class="content">
			<rich-text :nodes="detail.message"></rich-text>
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
.message-detail {
	.banner-img {
		width: 100%;
		height: 422rpx;
	}
	.title {
		font-size: 44rpx;
		font-weight: bold;
		color: #333333;
		text-align: center;
		line-height: 66rpx;
		letter-spacing: 1px;
		padding: 46rpx 145rpx 40rpx;
	}
	.time {
		font-size: 26rpx;
		text-align: center;
		color: #999999;
		line-height: 44rpx;
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
