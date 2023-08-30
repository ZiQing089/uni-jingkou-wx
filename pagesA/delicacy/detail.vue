<template>
	<view class="page-container delicacy-detail">
		<NavBar :title="'特产介绍'" :border="true" />
		<view class="content">
			<view class="img">
				<van-image
				  width="100%"
				  height="100%"
				  fit="cover"
				  :src="detail.pics[0]"
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
					<icon v-if="detail.like" class="iconfont islike" @click="addlike(detail)">&#xe65b;</icon>
					<icon v-else class="iconfont" @click="addlike(detail)">&#xe65b;</icon>
					<span>{{ detail.likeCount }}</span>
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
	import { addlike } from '@/api/jingkou.js'
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
			addlike(item) {
				uni.showLoading({
					title: '正在加载'
				})
				addlike({ id: item.id }).then(res => {
					uni.hideLoading()
					item.like = !item.like
					if(item.like) {
						item.likeCount ++
					} else {
						item.likeCount --
					}
				}) 
			}
		}
	}
</script>

<style lang="scss" scoped>
.delicacy-detail {
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
			align-items: center;
			padding: 0 138rpx;
			justify-content: space-between;
			.left {
				font-size: 26rpx;
				color: #999999;
				line-height: 44rpx;
				letter-spacing: 1px;
			}
			.right {
				display: flex;
				font-size: 24rpx;
				color: #999999;
				line-height: 36rpx;
				letter-spacing: 4px;
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
