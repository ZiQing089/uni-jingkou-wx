<template>
	<view class="page-container space-detail">
		<NavBar :title="'邻里空间'" :border="true" />
		<view class="content">
			<view class="top">
				<view class="img">
					<van-image
					  width="100%"
					  height="100%"
					  fit="cover"
					  :src="detail.pics"
					/>
				</view>
				<view class="info">
					<view class="title">
						{{ detail.name }}
					</view>
					<view class="phone" @click="takePhone(detail)">
						<view class="left">
							<icon class="iconfont">&#xe649;</icon>{{ detail.phone }}
						</view>
						<view class="right">
							<icon class="iconfont">&#xe647;</icon>
						</view>
					</view>
					<view class="address" @click="navigation(detail)">
						<view class="left">
							<icon class="iconfont">&#xe648;</icon>{{ detail.address }}
						</view>
						<view class="right">
							<icon class="iconfont">&#xe647;</icon>
						</view>
					</view>
				</view>
			</view>
			<view class="bottom">
				{{ detail.description }}
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
				detail: {}
			}
		},
		onLoad(option) {
			this.detail = JSON.parse(decodeURIComponent(option.data))
		},
		methods: {
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

<style lang="scss" scoped>
.space-detail {
	.content {
		.top {
			border-bottom: 12rpx solid #F6F6F6;
			.img {
				height: 422rpx;
				margin-top: 4rpx;
			}
			.info {
				padding: 0 24rpx;
				.title {
					height: 66rpx;
					font-size: 44rpx;
					font-weight: bold;
					color: #333333;
					line-height: 66rpx;
					letter-spacing: 1px;
					margin-top: 40rpx;
					margin-bottom: 12rpx;
				}
				.phone, .address {
					display: flex;
					justify-content: space-between;
					align-items: center;
					height: 92rpx;
					font-size: 24rpx;
					color: #000000;
					line-height: 92rpx;
					box-sizing: border-box;
					padding-left: 18rpx;
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
							margin-right: 12rpx;
						}
					}
				}
				.phone {
					border-bottom: 2rpx solid #F6F6F6;
				}
			}
		}
		.bottom {
			padding: 24rpx;
			font-size: 28rpx;
			color: #666666;
			line-height: 44rpx;
			letter-spacing: 1px;
		}
	}
}
</style>
