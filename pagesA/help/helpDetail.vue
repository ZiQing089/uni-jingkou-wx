<template>
	<view class="page-container help-detail">
		<NavBar :title="'邻里互助'" :border="true" />
		<view class="content">
			<view class="banner">
				<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500"
					indicator-active-color="#FFFFFF" indicator-color="rgba(255, 255, 255, 0.58)">
					<swiper-item v-for="(item, index) in detail.swiperList" :key="index">
						<van-image width="100%" height="100%" fit="cover"
							:src="item" />
					</swiper-item>
				</swiper>
			</view>
			<view class="title">
				{{ detail.title }}
			</view>
			<view class="info">
				<view class="time">
					时间：{{ detail.time }}
				</view>
				<view class="address">
					地点：{{ detail.address }}
				</view>
			</view>
			<view class="num">
				参与人数：{{ detail.num }}人
			</view>
			<view class="text">
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
					title: '慰问老人',
					time: '2023-04-05',
					num: 3,
					address: '养老中心',
					text: '叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你叫你',
					swiperList: ['https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684', 'https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684']
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.help-detail {
	.content {
		.banner {
			width: 100%;
			height: 464rpx;
			.swiper {
				height: 100%;
				-webkit-transform: translateY(0);
				background-color: #000000;
				overflow: hidden;
			}
		}
		.title {
			margin: 46rpx 0 32rpx;
			text-align: center;
			height: 66rpx;
			font-size: 44rpx;
			font-weight: bold;
			color: #333333;
			line-height: 66rpx;
			letter-spacing: 1px;
		}
		.info {
			display: flex;
			justify-content: center;
			margin-bottom: 24rpx;
			.time, .address {
				height: 36rpx;
				font-size: 24rpx;
				color: #999999;
				line-height: 36rpx;
			}
			.address {
				margin-left: 50rpx;
			}
		}
		.num {
			height: 36rpx;
			font-size: 24rpx;
			color: #666666;
			line-height: 36rpx;
			text-align: center;
			margin-bottom: 32rpx;
		}
		.text {
			padding: 0 24rpx 98rpx;
			font-size: 28rpx;
			color: #666666;
			line-height: 44rpx;
			letter-spacing: 1px;
		}
	}
}
</style>
