<template>
	<view class="page-container space">
		<NavBar :title="title" :use-bg="true" :border="true" />
		<view class="content">
			<template v-if="list.length === 0">
				<view class="noData"></view>
			</template>
			<template v-else>
				<view v-for="(item, index) in list" :key="index" class="item" @click.prevent.stop="toDetail(item)">
					<view class="img">
						<van-image
						  width="100%"
						  height="100%"
						  fit="cover"
						  radius="4"
						  :src="item.pics"
						/>
					</view>
					<view class="title">
						{{ item.name }}
					</view>
					<view class="text">
						{{ item.description }}
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
				<van-divider v-if="isNoMore" contentPosition="center">没有更多了！</van-divider>
			</template>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getSpaceList } from "@/api/convenient.js"
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				bgHeight: '',
				title: '邻里空间',
				isLoadMore:false,
				currentPage: 1,
				pageSize: 10,
				isNoMore: false,
				conditions: [],
				list: []
			}
		},
		onLoad(option) {
			this.title = option.title
		},
		onShow() {
			this.list = []
			this.init()
		},
		onReachBottom() {
			if(!this.isLoadMore && !this.isNoMore){  //此处判断，上锁，防止重复请求
				this.isLoadMore = true
				this.currentPage += 1  //每次上拉请求新的一页
				this.init()
			}
		},
		methods: {
			// 初始化页面
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getSpaceList({currentPage: this.currentPage, pageSize: this.pageSize, conditions: this.conditions}).then(res => {
					uni.hideLoading()
					if(res.success && res.data.list.length !== 0) {
						this.isLoadMore = false
						this.list = this.list.concat(res.data.list)
						if(res.data.list.length < this.pageSize) {
							this.isNoMore = true
						}
					}
				})
			},
			// 跳转详情
			toDetail(item) {
				uni.navigateTo({
					url: `/pagesA/space/spaceDetail?data=${encodeURIComponent(JSON.stringify(item))}`
				})
			},
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
.space {
	// height: 100vh;
	padding-bottom: 98rpx;
	.content {
		.noData {
			width: 374rpx;
			height: 314rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/nodatapg.png') no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
		}
		.item {
			padding: 24rpx 24rpx 0;
			background: #ffffff;
			border-bottom: 12rpx solid #F6F6F6;
			.img {
				height: 394rpx;
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
