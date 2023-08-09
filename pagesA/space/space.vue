<template>
	<view class="page-container space">
		<NavBar :title="title" :use-bg="true" :border="true" />
		<view class="content">
			<view v-for="(item, index) in list" :key="index" class="item" @click.prevent.stop="toDetail">
				<view class="img">
					<van-image
					  width="100%"
					  height="100%"
					  fit="cover"
					  radius="4"
					  :src="item.img"
					/>
				</view>
				<view class="title">
					{{ item.title }}
				</view>
				<view class="text">
					{{ item.info }}
				</view>
				<view class="phone" @click.prevent.stop="takePhone(item)">
					<view class="left">
						<icon class="iconfont">&#xe649;</icon>{{ item.phone }}
					</view>
					<view class="right">
						<icon class="iconfont">&#xe647;</icon>
					</view>
				</view>
				<view class="address" @click.prevent.stop="navigation(item)">
					<view class="left">
						<icon class="iconfont">&#xe648;</icon>{{ item.address }}
					</view>
					<view class="right">
						<icon class="iconfont">&#xe647;</icon>
					</view>
				</view>
				<view class="btn">
					查看详情<icon class="iconfont">&#xe647;</icon>
				</view>
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
				bgHeight: '',
				title: '邻里空间',
				list: [
					{
						img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2F35ccdf0a-0f47-cb25-d9fc-7ef123a02c48%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1687334875&t=448cdaef197d59905b223d78c62f2655',
						title: '老年活动中心',
						info: '中心集休闲、娱乐、健身、文化、学习于一体，突出文化休闲特色，寓教于乐，乐中健...',
						phone: '0575-82049777',
						address: '浙江省绍兴市上虞区泾肖南路30号'
					},
					{
						img: 'https://img0.baidu.com/it/u=1923555384,833149565&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
						title: '老年活动中心',
						info: '中心集休闲、娱乐、健身、文化、学习于一体，突出发地方但是防守打法师德师风水电费水电费文化休闲特色，寓教于乐，乐中健...',
						phone: '0575-82049777',
						address: '浙江省绍兴市上虞区泾肖南路30号'
					}
				]
			}
		},
		onLoad(option) {
			console.log(option)
			this.title = option.title
		},
		onShow() {
			
		},
		methods: {
			// 跳转详情
			toDetail() {
				uni.navigateTo({
					url: '/pagesA/space/spaceDetail'
				})
			},
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
.space {
	// height: 100vh;
	padding-bottom: 98rpx;
	.content {
		.item {
			padding: 24rpx 24rpx 0;
			background: #ffffff;
			border-bottom: 12rpx solid #F6F6F6;
			.img {
				height: 434rpx;
				background: black;
				border-radius: 8rpx;
			}
			.title {
				margin: 24rpx 0 12rpx 12rpx;
				height: 40rpx;
				font-size: 28rpx;
				font-weight: bold;
				color: #333333;
				line-height: 40rpx;
				letter-spacing: 1px;
			}
			.text {
				padding: 0 12rpx;
				font-size: 28rpx;
				color: #666666;
				line-height: 44rpx;
				letter-spacing: 1px;
				margin-bottom: 24rpx;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				text-overflow:ellipsis; 
				overflow:hidden;
			}
			.phone, .address {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 84rpx;
				font-size: 24rpx;
				color: #000000;
				line-height: 84rpx;
				box-sizing: border-box;
				padding-left: 12rpx;
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
				border-top: 2rpx solid #F0F0F2;
				border-bottom: 2rpx solid #F6F6F6;
			}
			.address {
				border-bottom: 2rpx solid #F0F0F2;
			}
			.btn {
				height: 92rpx;
				font-size: 28rpx;
				color: #B94333;
				line-height: 92rpx;
				letter-spacing: 1px;
				text-align: right;
				padding-right: 32rpx;
				.iconfont {
					font-size: 20rpx;
					color: #B94333;
					margin-left: 12rpx;
				}
			}
		}
	}
}
</style>
