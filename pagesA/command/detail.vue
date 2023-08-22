<template>
	<view class="page-container command-detail">
		<NavBar :title="'健康知识'" :border="true" />
		<view class="top">
			<view class="title">
				{{ detail.title }}
			</view>
			<view class="val" style="margin-top: 40rpx;">
				发病部位：{{ detail.affectedArea }}
			</view>
			<view class="val">
				传染性：{{ detail.contagious }}
			</view>
			<view class="val">
				并发症：{{ detail.comorbidity }}
			</view>
			<view class="val">
				多发人群：{{ detail.highRiskPopulation }}
			</view>
		</view>
		<view class="content">
			{{ detail.description }}
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
			console.log(this.detail)
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.command-detail {
	.top {
		padding: 40rpx 24rpx;
		border-bottom: 12rpx solid #F6F6F6;
		.title {
			font-size: 44rpx;
			font-weight: bold;
			color: #333333;
			line-height: 66rpx;
			letter-spacing: 1px;
		}
		.val {
			font-size: 26rpx;
			color: #000000;
			line-height: 44rpx;
			letter-spacing: 1px;
			margin-top: 12rpx;
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
