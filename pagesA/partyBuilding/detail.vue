<template>
	<view class="page-container partyBuilding-detail">
		<NavBar :title="'党建活动'" :border="true" />
		<view class="title">
			{{ detail.title }}
		</view>
		<view class="info">
			<view class="time">
				发布时间：{{ detail.time | formatDate }}
			</view>
			<view class="address">
				地址： {{ detail.address }}
			</view>
		</view>
		<view class="content">
			{{ detail.content }}
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
			console.log(option)
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.partyBuilding-detail {
	.title {
		font-size: 44rpx;
		font-weight: bold;
		color: #333333;
		line-height: 66rpx;
		text-align: center;
		letter-spacing: 1px;
		padding: 46rpx 50rpx 0;
	}
	.info {
		margin-top: 40rpx;
		padding: 0 84rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.time, .address {
			font-size: 26rpx;
			color: #999999;
			line-height: 44rpx;
			letter-spacing: 1px;
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
