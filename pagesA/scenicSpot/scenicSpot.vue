<template>
	<view class="scenic-spot page-container">
		<NavBar :title="title" :use-bg="true" />
		<view class="content">
			<grid-view :cross-axis-gap="6" :main-axis-gap="6" type="masonry">
				<view v-for="(item, index) in toneList" :key="index" class="item" @click="toDetail(item)">
					<view class="img">
						<van-image
						  width="100%"
						  height="100%"
						  fit="cover"
						  radius="12rpx 12rpx 0 0"
						  :src="item.img"
						/>
					</view>
					<view class="title">
						{{ item.title }}
					</view>
					<view class="text">
						{{ item.text }}
					</view>
					<view class="like">
						<view class="left">
							<image src="../../static/img/jingkou/review.png" class="img-icon" mode="scaleToFill"></image>
							<span>{{ item.num }}</span>
						</view>
						<view class="right">
							<icon class="iconfont">&#xe647;</icon>
						</view>
					</view>
				</view>
			</grid-view>
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
				bgHeight: '',
				title: '',
				toneList: [
					{
						img: 'https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684',
						distance: '1.2km',
						title: '麻辣兔头',
						phone: '0575-82049777',
						like: true,
						num: 1232,
						text: '八道陶堰特色美食：咸菜笋片胖头鱼、葱烤鲫1号'
					},
					{
						img: 'https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684',
						distance: '1.2km',
						title: '麻辣兔头',
						phone: '0575-82049777',
						like: false,
						num: 1232,
						text: '八道陶堰特色美食：咸菜笋片胖头鱼、葱烤鲫1号'
					},
					{
						img: 'https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684',
						distance: '1.2km',
						title: '麻辣兔头',
						phone: '0575-82049777',
						like: false,
						num: 1232,
						text: '八道陶堰特色美食：咸菜笋片胖头鱼、葱烤鲫1号'
					},
					{
						img: 'https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684',
						distance: '1.2km',
						title: '麻辣兔头',
						phone: '0575-82049777',
						like: false,
						num: 1232,
						text: '八道陶堰特色美食：咸菜笋片胖头鱼、葱烤鲫1号'
					},
					{
						img: 'https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684',
						distance: '1.2km',
						title: '麻辣兔头',
						phone: '0575-82049777',
						like: true,
						num: 1232,
						text: '八道陶堰特色美食：咸菜笋片胖头鱼、葱烤鲫1号'
					},
					{
						img: 'https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684',
						distance: '1.2km',
						title: '麻辣兔头',
						phone: '0575-82049777',
						like: true,
						num: 1232,
						text: '八道陶堰特色美食：咸菜笋片胖头鱼、葱烤鲫1号'
					}
				]
			}
		},
		onLoad(option) {
			console.log(option)
			this.title = option.title
		},
		onShow() {
			const {
				top,
				height,
				width
			} = wx.getMenuButtonBoundingClientRect();
			this.bgHeight = 46 + top + 'px'
		},
		methods: {
			// 跳转详情
			toDetail() {
				uni.navigateTo({
					url: `/pagesA/scenicSpot/detail`
				})
			}
		}
	}
</script>

<style>
page {
	background-color: #F6F6F6;
}
</style>

<style lang="scss" scoped>
.scenic-spot {
	.content {
		padding: 0 12rpx;
		.item {
			width: 358rpx;
			margin-top: 12rpx;
			background: #FFFFFF;
			border-radius: 12rpx;
			margin-bottom: 12rpx;
			.img {
				height: 268rpx;
			}
			.title {
				height: 40rpx;
				font-size: 28rpx;
				font-weight: bold;
				color: #333333;
				line-height: 40rpx;
				letter-spacing: 1px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin: 20rpx 0 12rpx 18rpx;
			}
			.text {
				margin: 0 18rpx 20rpx 18rpx;
				font-size: 28rpx;
				color: #666666;
				line-height: 44rpx;
				letter-spacing: 1px;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			.like {
				margin: 0 18rpx;
				height: 62rpx;
				line-height: 62rpx;
				box-sizing: border-box;
				border-top: 2rpx solid #F6F6F6;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left {
					display: flex;
					align-items: center;
					span {
						font-size: 24rpx;
						color: #666666;
						letter-spacing: 4px;
					}
					.img-icon {
						width: 32rpx;
						height: 32rpx;
						margin-right: 12rpx;
					}
				}
				.right {
					.iconfont {
						font-size: 20rpx;
						color: #B94333;
					}
				}
			}
		}
		.item:first-child {
			.img {
				height: 202rpx;
			}
		}
	}
}
</style>