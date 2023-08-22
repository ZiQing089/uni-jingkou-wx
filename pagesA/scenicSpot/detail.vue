<template>
	<view class="page-container sceni-spot-detail">
		<NavBar :title="'景点介绍'" :border="true" />
		<view class="content">
			<view class="img">
				<van-image
				  width="100%"
				  height="100%"
				  fit="cover"
				  :src="detail.pic"
				/>
			</view>
			<view class="title">
				{{ detail.name }}
			</view>
			<view class="info">
				<view class="left">
					发布时间：{{ detail.createTime | formatDate }}
				</view>
				<view class="right">
					<image src="../../static/img/jingkou/graySee.png" class="img-icon" mode="scaleToFill"></image>
					{{ detail.viewCount }}
				</view>
			</view>
			<view class="text">
				{{ detail.introduce }}
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getScenicSpotsDetail } from '@/api/jingkou.js'
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
			this.init(this.obj.id)
		},
		methods: {
			init(id) {
				uni.showLoading({
					title: '正在加载'
				})
				getScenicSpotsDetail({ id: id}).then(res => {
					uni.hideLoading()
					this.detail = res.data
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.sceni-spot-detail {
	.content {
		.img {
			height: 422rpx;
		}
		.title {
			height: 66rpx;
			font-size: 44rpx;
			font-weight: bold;
			color: #333333;
			line-height: 66rpx;
			letter-spacing: 1px;
			margin: 40rpx 0;
			text-align: center;
			overflow: hidden;
		}
		.info {
			display: flex;
			justify-content: center;
			.left {
				font-size: 26rpx;
				color: #999999;
				line-height: 44rpx;
				letter-spacing: 1px;
			}
			.right {
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: #999999;
				line-height: 36rpx;
				letter-spacing: 4px;
				.img-icon {
					width: 32rpx;
					height: 32rpx;
					margin-right: 12rpx;
					margin-left: 60rpx;
				}
			}
		}
		.text {
			padding: 32rpx 24rpx 98rpx;
			font-size: 28rpx;
			color: #666666;
			line-height: 44rpx;
			letter-spacing: 1px;
		}
	}
}
</style>
