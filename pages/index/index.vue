<template>
	<view class="page-container index">
		<view class="header">
			<view class="title-bg">
				<view class="menu-title" :style="{ paddingTop: menuButtonTop, height: menuButtonHeight, lineHeight: menuButtonHeight }">
					<view class="text">{{ title }}</view>
				</view>
			</view>
			<view class="banner">
				<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500"
					indicator-active-color="#FFFFFF" indicator-color="rgba(255, 255, 255, 0.58)">
					<swiper-item v-for="(item, index) in swiperList" :key="index">
						<van-image width="100%" height="100%" fit="cover"
							:src="item" />
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="top-bg">
			<view class="nav-box">
				<template v-for="(item, index) in navList">
					<view :key="index" class="item" @click="navTo(item)">
						<view class="img-box">
							<view class="img">
								<image
								  :src="item.bg"
								  mode="aspectFit"
								  style="width: 100%; height: 100%;"
								/>
							</view>
						</view>
						<view class="text">{{ item.title }}</view>
					</view>
				</template>
			</view>
			<view class="message-box">
				<view class="inside-border">
					<view class="top">
						<view class="left">
							<span class="time" style="margin-right: 16rpx;">{{ time | formatDate }}</span><span class="time">{{ week[weekIndex] }}</span>
						</view>
						<view class="right">
							<span class="weather">多云</span><span class="weather">12~16</span>
						</view>
					</view>
					<view class="center-line"></view>
					<view class="bottom" @click="toMessage">
						<view class="souce">
							<image
							  src="/static/img/index/souce.png"
							  mode="aspectFit"
							  style="width: 68rpx; height: 68rpx;"
							/>
						</view>
						<view class="list">
							<view v-for="(item, index) in messageList" :key="index" class="item">
								{{ item.title }}
							</view>
						</view>
						<van-icon name="arrow" size="18px" />
					</view>
				</view>
			</view>
		</view>
		<view class="see">
			<view class="main-title">
				<image src="../../static/img/index/title-icon.png" class="img-icon" mode="scaleToFill"></image>
				看一看
			</view>
			<view class="out-side-border">
				<view class="in-side-border">
					<view v-for="(item, index) in seeList.slice(0, 3)" :key="index" class="see-item">
						<view class="left">
							<van-image width="100%" height="100%" fit="cover"
								:src="item.img" />
						</view>
						<view class="right">
							<view class="title">
								{{ item.title }}
							</view>
							<view class="text">
								{{ item.info }}
							</view>
							<view class="btn">
								查看详情<icon class="iconfont">&#xe647;</icon>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="more">
				<image src="../../static/img/index/more.png" class="more-icon" mode="scaleToFill"></image>
			</view>
		</view>
		<view class="blow">
			<view class="main-title">
				<image src="../../static/img/index/title-icon.png" class="img-icon" mode="scaleToFill"></image>
				品一品
			</view>
			<view class="out-side-border">
				<view class="in-side-border">
					<view  v-for="(item, index) in blowList.slice(0, 1)" :key="index" class="blow-item">
						<view class="blow-img">
							<van-image width="100%" height="100%" radius="4" fit="cover"
								:src="item.img" />
						</view>
						<view class="blow-info">
							<view class="title">
								{{ item.title }}
							</view>
							<view class="like-num">
								<icon v-if="item.like" class="iconfont islike">&#xe65b;</icon>
								<icon v-else class="iconfont">&#xe659;</icon>
								{{ item.likeNum }}
							</view>
						</view>
						<view class="blow-text">
							{{ item.info }}
						</view>
					</view>
				</view>
			</view>
			<view class="more">
				<image src="../../static/img/index/more.png" class="more-icon" mode="scaleToFill"></image>
			</view>
		</view>
		<view class="live">
			<view class="main-title">
				<image src="../../static/img/index/title-icon.png" class="img-icon" mode="scaleToFill"></image>
				住一住
			</view>
			<view class="out-side-border">
				<view class="in-side-border">
					<view v-for="(item, index) in liveList.slice(0, 1)" :key="index" class="live-item">
						<view class="live-img">
							<van-image width="100%" height="100%" radius="4" fit="cover"
								:src="item.img" />
						</view>
					</view>
				</view>
			</view>
			<view class="more">
				<image src="../../static/img/index/more.png" class="more-icon" mode="scaleToFill"></image>
			</view>
		</view>
		<view class="stroll">
			<view class="main-title">
				<image src="../../static/img/index/title-icon.png" class="img-icon" mode="scaleToFill"></image>
				逛一逛
			</view>
			<view class="out-side-border">
				<view class="in-side-border">
					<view v-for="(item, index) in strollList.slice(0, 1)" :key="index" class="stroll-item">
						<view class="name">
							户主：{{ item.name }}
						</view>
						<view class="stroll-img">
							<van-image width="100%" height="100%" radius="4" fit="cover"
								:src="item.img" />
						</view>
						<view class="stroll-info">
							<view class="left">
								<icon v-if="item.like" class="iconfont islike">&#xe65b;</icon>
								<icon v-else class="iconfont">&#xe659;</icon>
								{{ item.likeNum }}
							</view>
							<view class="right">
								<icon class="iconfont">&#xe65a;</icon>
								转发
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="more">
				<image src="../../static/img/index/more.png" class="more-icon" mode="scaleToFill"></image>
			</view>
		</view>
		<van-tabbar :active="active" inactive-color="#7C7C7C" :placeholder="true" active-color="#B94333" @change="tabbarChange">
		 <van-tabbar-item>
		    <image
		      slot="icon"
		      src="/static/img/common/index-normal.png"
		      mode="aspectFit"
		      style="width: 40rpx; height: 40rpx;"
		    />
		    <image
		      slot="icon-active"
		      src="/static/img/common/index-active.png"
		      mode="aspectFit"
		      style="width: 40rpx; height: 40rpx;"
		    />
		    首页
		  </van-tabbar-item>
		  <van-tabbar-item>
			  <image
			    slot="icon"
			    src="/static/img/common/mine-normal.png"
			    mode="aspectFit"
			    style="width: 40rpx; height: 40rpx;"
			  />
			  <image
			    slot="icon-active"
			    src="/static/img/common/mine-active.png"
			    mode="aspectFit"
			    style="width: 40rpx; height: 40rpx;"
			  />
			  我的
		  </van-tabbar-item>
		</van-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '泾口未来乡村',
				token: '',
				time: '',
				show: 0,
				week: {
					0: '周日',
					1: '周一',
					2: '周二',
					3: '周三',
					4: '周四',
					5: '周五',
					6: '周六'
				},
				weekIndex: '',
				active: 0,
				menuButtonTop: '',
				menuButtonHeight: '',
				menuButtonRight: '',
				blowList: [
					{
						title: '志愿者活动',
						info: '在清明节，志愿者们一起带着清明粿一同前往看望70岁以上往看望70岁往看望70岁往看望70岁的老人......',
						img: '',
						like: false,
						likeNum: 2345
					},
					{
						title: '志愿者活动',
						info: '在清明节，志愿者们一起带着清明粿一同前往看望70岁往看望70岁往看望70岁往看望70岁以上的老人......',
						img: '',
						like: false,
						likeNum: 2345
					}
				],
				liveList: [
					{
						img: ''
					},
					{
						img: ''
					}
				],
				strollList: [
					{
						img: '',
						name: '张三',
						likeNum: 2345,
						like: false
					},
					{
						img: '',
						name: '李四',
						likeNum: 2345,
						like: false
					}
				],
				seeList: [
					{
						title: '志愿者活动',
						info: '在清明节，志愿者们一起带着清明粿一同前往看望70岁以上的老人......',
						img: ''
					},
					{
						title: '邻里活动',
						info: '为丰富社区居民的文化生活，增强邻里之间的互动，积极倡导健...',
						img: ''
					},
					{
						title: '邻里活动',
						info: '为丰富社区居民的文化生活，增强邻里之间的互动，积极倡导健...',
						img: ''
					},
					{
						title: '邻里活动',
						info: '为丰富社区居民的文化生活，增强邻里之间的互动，积极倡导健...',
						img: ''
					}
				],
				activityList: [
					{
						title: '叫你活动',
						info: '在清明节，志愿者们一起带着清明粿一同前往看望70岁以上的老人......',
						img: ''
					},
					{
						title: '叫你崩铁',
						info: '为丰富社区居民的文化生活，增强邻里之间的互动，积极倡导健...',
						img: ''
					}
				],
				messageList: [
					{
						title: '特色沿河餐厅即将开业，请大家尽情期待！'
					},
					{
						title: '“十碗头”体验馆已对外开放，游客可前家具风口浪尖螺丝刀'
					}
				],
				swiperList: [
					'https://files.zz-tech.cn/app-files/images/banner1.png',
					'https://files.zz-tech.cn/app-files/images/banner2.png',
					'https://files.zz-tech.cn/app-files/images/banner3.png'
				],
				navList: [
					{
						title: '泾口游',
						path: '/pages/jingkou/jingkou',
						bg: '../../static/img/index/nav0.png',
					},
					{
						title: '周边服务',
						path: '/pagesA/periphery/periphery',
						bg: '../../static/img/index/nav1.png',
					},
					{
						title: '旅游地图',
						path: '/pagesA/map/map',
						bg: '../../static/img/index/nav2.png',
					},
					{
						title: '美丽庭院',
						path: '/pagesA/beautifulYard/beautifulYard',
						bg: '../../static/img/index/nav3.png',
					},
					{
						title: '便民服务',
						path: '/pages/convenient/convenient',
						bg: '../../static/img/index/nav4.png',
					},
					{
						title: '文化振兴',
						path: '/pages/promote/promote',
						bg: '../../static/img/index/nav5.png',
					},
					{
						title: '健康中心',
						path: '/pages/healthCenter/healthCenter',
						bg: '../../static/img/index/nav6.png',
					},
					{
						title: '乡村治理',
						path: '/pages/village/village',
						bg: '../../static/img/index/nav7.png',
					}
				]
			}
		},
		onLoad() {
			console.log(new Date().getDay())
		},
		onShow() {
			// this.token = getToken()
			// 获取胶囊位置
			const { top, height, width } = wx.getMenuButtonBoundingClientRect();
			this.menuButtonTop = top + 'px'
			this.menuButtonHeight = height + 'px'
			this.menuButtonRight = width + 70 + 'px'
			this.time = new Date()
			this.weekIndex = this.time.getDay()
			// if (this.token) {
			// 	this.getUserInfo()
			// }
		},
		methods: {
			tabbarChange(event) {
				this.active = event.detail
				switch (this.active) {
					case 1:
						uni.redirectTo({
							url: "/pages/mine/mine"
						})
						break;
					case 2:
						uni.redirectTo({
							url: "/pages/map/map"
						})
						break;
					default:
						uni.redirectTo({
							url: "/pages/index/index"
						})
						break;
				}
			},
			// 金刚区跳转
			navTo(item) {
				uni.navigateTo({
					url: `${item.path}?title=${item.title}`
				})
				// if (this.token) {
				// 	uni.navigateTo({
				// 		url: `${item.path}?title=${item.title}`
				// 	})
				// } else {
				// 	uni.navigateTo({
				// 		url: '/pages/login/login'
				// 	})
				// }
			},
			// 跳转消息页面
			toMessage() {
				uni.navigateTo({
					url: '/pagesA/message/message'
				})
			},
			// 热门切换
			changeHotNav(e, i) {
				this.show = i
				this.hotNav.forEach((item, index) => {
					item.active = false
				})
				e.active = !e.active
			},
			// 去详情页
			toDetail() {
				console.log('nice')
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
.index {
	.header {
		position: relative;
		height: 562rpx;
		z-index: 19;
		background-color: #ffffff;
		.title-bg {
			height: 264rpx;
			background: url('../../static/img/index/index-bg.png') no-repeat;
			background-size: 100%;
			.menu-title {
				display: flex;
				align-items: center;
				.text {
					margin-left: 24rpx;
					height: 60rpx;
					font-size: 40rpx;
					font-weight: bold;
					color: #000000;
					line-height: 60rpx;
					letter-spacing: 1px;
				}
			}
		}
		.banner {
			width: 100%;
			height: 380rpx;
			position: absolute;
			bottom: 0;
			.swiper {
				height: 100%;
				-webkit-transform: translateY(0);
				margin: 0 24rpx;
				background-color: #000000;
				border-radius: 12rpx;
				overflow: hidden;
			}
		}
	}
	.top-bg {
		background-color: #ffffff;
		padding-bottom: 40rpx;
		margin-bottom: 12rpx;
		.nav-box {
			height: 364rpx;
			padding: 36rpx 66rpx 40rpx 68rpx;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;
			.item {
				width: 88rpx;
				margin-right: 88rpx;
				.img-box {
					width: 88rpx;
					height: 88rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					.img {
						width: 80rpx;
						height: 80rpx;
					}
				}
				.text {
					margin-top: 8rpx;
					font-size: 22rpx;
					color: #333333;
					text-align: center;
					line-height: 34rpx;
				}
			}
			.item:nth-child(4n) {
				margin-right: 0;
			}
		}
		.message-box {
			height: 204rpx;
			margin: 0 24rpx;
			border-radius: 12rpx;
			display: flex;
			box-sizing: border-box;
			align-items: center;
			background-color: #ffffff;
			border: 2rpx solid #A3A3A3;
			.inside-border {
				width: 100%;
				height: 192rpx;
				margin: 0 6rpx;
				border-radius: 8rpx;
				box-sizing: border-box;
				border: 1rpx solid #C9C9C9;
				.top {
					height: 68rpx;
					padding: 0 26rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.left {
						.time {
							font-size: 28rpx;
							font-weight: bold;
							color: #000000;
						}
					}
					.right {
						.weather {
							font-size: 28rpx;
							font-weight: bold;
							color: #000000;
						}
					}
				}
				.center-line {
					height: 4rpx;
					box-sizing: border-box;
					border: 1rpx solid #C9C9C9;
				}
				.bottom {
					height: 120rpx;
					display: flex;
					align-items: center;
					cursor: pointer;
					padding: 0 26rpx;
					justify-content: space-between;
					.list {
						width: 456rpx;
						height: 80rpx;
						.item {
							width: 100%;
							height: 36rpx;
							margin-bottom: 8rpx;
							font-size: 24rpx;
							color: #333333;
							line-height: 36rpx;
							text-decoration: underline;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
						.item:last-child {
							margin-bottom: 0;
						}
					}
				}
			}
		}
	}
	.see, .blow, .stroll, .live {
		margin-bottom: 12rpx;
		padding: 41rpx 24rpx 37rpx;
		background-color: #ffffff;
		.main-title {
			display: flex;
			align-items: center;
			height: 48rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #000000;
			margin-bottom: 24rpx;
			line-height: 48rpx;
			.img-icon {
				width: 30rpx;
				height: 30rpx;
				margin-right: 12rpx;
			}
		}
		.more {
			text-align: center;
			margin-top: 39rpx;
			.more-icon {
				width: 464rpx;
				height: 24rpx;
			}
		}
		.out-side-border {
			border-radius: 12rpx;
			border: 2rpx solid #A3A3A3;
			.in-side-border {
				margin: 8rpx;
				border-radius: 8rpx;
				border: 1rpx solid #C9C9C9;
				padding: 32rpx 24rpx 32rpx;
				.see-item {
					display: flex;
					justify-content: space-between;
					margin-bottom: 20rpx;
					padding-bottom: 20rpx;
					border-bottom: 2rpx solid #F0F0F2;
					.left {
						width: 260rpx;
						height: 194rpx;
						margin-right: 22rpx;
					}
					.right {
						width: calc(100% - 282rpx);
						.title {
							font-size: 28rpx;
							margin-bottom: 4rpx;
							font-weight: bold;
							color: #000000;
							line-height: 44rpx;
							letter-spacing: 1px;
						}
						.text {
							font-size: 28rpx;
							color: #666666;
							line-height: 44rpx;
							letter-spacing: 1px;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
						}
					   .btn {
						   text-align: right;
						   font-size: 24rpx;
						   color: #B94333;
						   line-height: 36rpx;
						   .iconfont  {
							   font-size: 20rpx;
							   margin-left: 12rpx;
						   }
					   }
					}
				}
				.see-item:nth-child(3n) {
					border-bottom: none;
					margin-bottom: 0;
				}
				.blow-item {
					.blow-img {
						height: 358rpx;
						background: #DCDCDC;
						border-radius: 8rpx;
					}
					.blow-info {
						margin: 24rpx 0 12rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.title {
							font-size: 28rpx;
							font-weight: bold;
							color: #000000;
							line-height: 44rpx;
							letter-spacing: 1px;
						}
						.like-num {
							display: flex;
							font-size: 24rpx;
							color: #666666;
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
					.blow-text {
						font-size: 28rpx;
						color: #666666;
						line-height: 44rpx;
						letter-spacing: 1px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
					}
				}
				.live-item {
					.live-img {
						height: 358rpx;
						background: #DCDCDC;
						border-radius: 8rpx;
					}
				}
				.stroll-item {
					.name {
						font-size: 28rpx;
						color: #000000;
						line-height: 40rpx;
						letter-spacing: 1px;
						margin-bottom: 24rpx;
					}
					.stroll-img {
						height: 358rpx;
						background: #DCDCDC;
						border-radius: 8rpx;
					}
					.stroll-info {
						margin-top: 32rpx;
						display: flex;
						justify-content: space-between;
						.left, .right {
							display: flex;
							font-size: 24rpx;
							color: #666666;
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
				}
			}
		}
	}
}
</style>
