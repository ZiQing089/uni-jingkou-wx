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
					  :src="detail.img"
					/>
				</view>
				<view class="info">
					<view class="title">
						{{ detail.title }}
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
				{{ detail.text }}
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
				detail: {
					img: 'https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684',
					title: '老年活动中心',
					phone: '0575-82049777',
					address: '浙江省绍兴市上虞区泾肖南路30号',
					text: '老年活动中心集休闲、娱乐、健身、文化、学习于一体，突出文化休动场所。中心一直坚持以为老年人服务为宗旨性化服务赢得了老年朋友的好口碑，也吸引越来越多的人参与进来。2006年，中心被命名为我省首批四星级老年活动中心，被誉为老年人的“温馨家园”。中心内部设计充分体现了浓重的“文化气息、体育色彩”，设有书画室、茶室、健身房等娱乐、教学活动场所。'
				}
			}
		},
		methods: {
			// 跳转导航
			navigation(item) {
				wx.openLocation({
					 latitude: parseFloat(item.point.lat), //目标经纬度
					 longitude: parseFloat(item.point.lng),
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
				height: 464rpx;
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
