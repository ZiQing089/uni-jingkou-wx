<template>
	<view class="page-container qinglian-detail">
		<NavBar :title="title" :border="true" />
		<view class="title">
			{{ detail.title }}
		</view>
		<view class="info">
			<view class="time">
				发布时间：{{ detail.createTime | formatDate }}
			</view>
			<view class="num">
				<icon class="iconfont">&#xe65c;</icon>
				{{ detail.view ? detail.view : 0 }}
			</view>
		</view>
		<view class="content">
			<view v-for="(item, index) in detail.files" :key="index" class="img">
				<van-image width="100%" height="100%" radius="4" fit="cover"
					:src="item" />
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
				show: false,
				title: '',
				detail: {}
			}
		},
		onLoad(option) {
			this.title = option.title
			this.detail = JSON.parse(decodeURIComponent(option.data))
			console.log(option)
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.qinglian-detail {
	.title {
		font-size: 44rpx;
		font-weight: bold;
		color: #333333;
		line-height: 66rpx;
		letter-spacing: 1px;
		padding: 46rpx 50rpx 0;
	}
	.info {
		margin-top: 40rpx;
		padding: 0 148rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.time {
			font-size: 26rpx;
			color: #999999;
			line-height: 44rpx;
			letter-spacing: 1px;
		}
		.num {
			display: flex;
			font-size: 26rpx;
			color: #999999;
			line-height: 44rpx;
			letter-spacing: 1px;
			.iconfont {
				display: flex;
				align-items: center;
				margin-right: 12rpx;
				font-size: 32rpx;
			}
		}
	}
	.content {
		padding: 32rpx 24rpx 90rpx;
		.img {
			height: 434rpx;
			background: #F6F6F6;
			border-radius: 8rpx;
			margin-bottom: 32rpx;
		}
	}
}
</style>
