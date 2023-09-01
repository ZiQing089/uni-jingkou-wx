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
					<swiper-item v-for="(item, index) in pics" :key="index">
						<van-image width="100%" height="100%" fit="cover"
							:src="item.pics" />
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
				<view class="top">
					<view class="left">
						<span class="time" style="margin-right: 16rpx;">{{ weather.date }}</span><span class="time">{{ weather.week }}</span>
					</view>
					<view class="right">
						<image
						  v-if="weather.wea_img === 'qing'"
						  src="../../static/img/index/qing.png"
						  mode="aspectFit"
						  class="weather-img"
						/>
						<image
						  v-if="weather.wea_img === 'xue'"
						  src="../../static/img/index/xue.png"
						  mode="aspectFit"
						  class="weather-img"
						/>
						<image
						  v-if="weather.wea_img === 'lei'"
						  src="../../static/img/index/lei.png"
						  mode="aspectFit"
						  class="weather-img"
						/>
						<image
						  v-if="weather.wea_img === 'shachen'"
						  src="../../static/img/index/shachen.png"
						  mode="aspectFit"
						  class="weather-img"
						/>
						<image
						  v-if="weather.wea_img === 'wu'"
						  src="../../static/img/index/wu.png"
						  mode="aspectFit"
						  class="weather-img"
						/>
						<image
						  v-if="weather.wea_img === 'bingbao'"
						  src="../../static/img/index/bingbao.png"
						  mode="aspectFit"
						  class="weather-img"
						/>
						<image
						  v-if="weather.wea_img === 'yun'"
						  src="../../static/img/index/duoyun.png"
						  mode="aspectFit"
						  class="weather-img"
						/>
						<image
						  v-if="weather.wea_img === 'yu'"
						  src="../../static/img/index/yu.png"
						  mode="aspectFit"
						  class="weather-img"
						/>
						<image
						  v-if="weather.wea_img === 'yin'"
						  src="../../static/img/index/yin.png"
						  mode="aspectFit"
						  class="weather-img"
						/>
						<view>
							<span class="weather" style="margin-right: 12rpx;">{{ weather.wea }}</span><span class="weather">{{ weather.tem2 }}~{{ weather.tem1 }}°C</span>
						</view>
					</view>
				</view>
				<view class="bottom" @click="toMessage">
					<view class="souce">
						<image
						  src="https://files.zz-tech.cn/app-files/images/jingkou/souce.png"
						  mode="aspectFit"
						  style="width: 68rpx; height: 68rpx;"
						/>
					</view>
					<view class="list">
						<view v-for="(item, index) in messageList.slice(0, 2)" :key="index" class="item">
							{{ item.title }}
						</view>
					</view>
					<van-icon name="arrow" size="18px" />
				</view>
			</view>
		</view>
		<view class="see">
			<view class="main-title">
				<view class="left">
					<image src="https://files.zz-tech.cn/app-files/images/jingkou/mainIcon.png" class="img-icon" mode="scaleToFill"></image>
					<span>看一看</span>
				</view>
				<view class="right">
					美丽景点
				</view>
			</view>
			<view class="see-box">
				<view v-for="(item, index) in seeList.slice(0, 3)" :key="index" @click="toDetail(item)" class="see-item">
					<view class="left">
						<van-image width="100%" height="100%" fit="cover" radius="4"
							:src="item.pics[0]" />
					</view>
					<view class="right">
						<view class="title">
							{{ item.name }}
						</view>
						<view class="text">
							{{ item.introduce }}
						</view>
						<view class="btn">
							查看详情<icon class="iconfont">&#xe647;</icon>
						</view>
					</view>
				</view>
			</view>
			<view class="more" @click="seeMore('/pagesA/scenicSpot/scenicSpot')">
				<image src="https://files.zz-tech.cn/app-files/images/jingkou/seemore.png" class="more-icon" mode="scaleToFill"></image>
			</view>
		</view>
		<view class="live">
			<view class="main-title">
				<view class="left">
					<image src="https://files.zz-tech.cn/app-files/images/jingkou/mainIcon.png" class="img-icon" mode="scaleToFill"></image>
					<span>住一住</span>
				</view>
				<view class="right">民宿酒店</view>
			</view>
			<view class="live-box">
				<view v-for="(item, index) in liveList.slice(0, 1)" :key="index" class="live-item">
					<view class="live-img">
						<van-image width="100%" height="100%" radius="4" fit="cover"
							:src="item.pics[0]" />
					</view>
				</view>
			</view>
			<view class="more" @click="seeMore('/pagesA/hotel/hotel')">
				<image src="https://files.zz-tech.cn/app-files/images/jingkou/seemore.png" class="more-icon" mode="scaleToFill"></image>
			</view>
		</view>
		<view class="stroll">
			<view class="main-title">
				<view class="left">
					<image src="https://files.zz-tech.cn/app-files/images/jingkou/mainIcon.png" class="img-icon" mode="scaleToFill"></image>
					<span>逛一逛</span>
				</view>
				<view class="right">美丽庭院</view>
			</view>
			<view class="stroll-box">
				<view v-for="(item, index) in strollList.slice(0, 3)" :key="index" class="stroll-item">
					<view class="name">
						户主：{{ item.houseHolder }}
					</view>
					<view class="stroll-img">
						<swiper class="swiper" circular :indicator-dots="true"
							indicator-active-color="#FFFFFF" indicator-color="rgba(255, 255, 255, 0.58)">
							<swiper-item v-for="(e, i) in item.pics" :key="i">
								<van-image width="100%" height="100%" fit="cover" radius="4"
									:src="e" />
							</swiper-item>
						</swiper>
					</view>
					<view class="stroll-info">
						<view class="left">
							<icon v-if="item.liked" class="iconfont islike" @click.native.stop="addtingyuanlike(item)">&#xe65b;</icon>
							<icon v-else class="iconfont" @click.native.stop="addtingyuanlike(item)">&#xe659;</icon>
							{{ item.likeCount }}
						</view>
						<button class="share-btn" type="default" open-type="share">
							<icon class="iconfont">&#xe65a;</icon><span>转发</span>
						</button>
					</view>
				</view>
			</view>
			<view class="more" @click="seeMore('/pagesA/beautifulYard/beautifulYard')">
				<image src="https://files.zz-tech.cn/app-files/images/jingkou/seemore.png" class="more-icon" mode="scaleToFill"></image>
			</view>
		</view>
		<view class="blow">
			<view class="main-title">
				<view class="left">
					<image src="https://files.zz-tech.cn/app-files/images/jingkou/mainIcon.png" class="img-icon" mode="scaleToFill"></image>
					<span>品一品</span>
				</view>
				<view class="right">特色美食</view>
			</view>
		</view>
		<view class="blow-box">
			<grid-view :cross-axis-gap="6" :main-axis-gap="6" type="masonry">
				<view v-for="(item, index) in blowList" :key="index" class="blow-item" @click="toDetail(item)">
					<view class="img">
						<van-image
						  width="100%"
						  height="100%"
						  fit="cover"
						  radius="12rpx 12rpx 0 0"
						  :src="item.pics[0]"
						/>
					</view>
					<view class="title">
						{{ item.name }}
					</view>
					<view class="text">
						{{ item.introduce }}
					</view>
					<view class="like">
						<view class="left">
							<icon v-if="item.like" class="iconfont islike" @click.native.stop="addlike(item)">&#xe65b;</icon>
							<icon v-else class="iconfont" @click.native.stop="addlike(item)">&#xe659;</icon>
							<span>{{ item.likeCount }}</span>
						</view>
						<view class="right">
							<icon class="iconfont">&#xe647;</icon>
						</view>
					</view>
				</view>
			</grid-view>
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
	import { getToken } from '@/utils/auth.js'
	import { userInfo } from '@/api/login.js'
	import { getBannerList, getWeater } from '@/api/index.js'
	import { getShowlist, addLike } from '@/api/beautifulYard.js'
	import { getMessage } from '@/api/message.js'
	import { getScenicSpotsList, getHomestayList, getSpecialityList, addlike } from '@/api/jingkou.js'
	export default {
		data() {
			return {
				title: '泾口未来乡村',
				time: '',
				weekIndex: '',
				menuButtonTop: '',
				menuButtonHeight: '',
				menuButtonRight: '',
				token: getToken(),
				show: 0,
				active: 0,
				weather: {},
				blowList: [],
				liveList: [],
				strollList: [],
				seeList: [],
				pics: [],
				messageList: [],
				navList: [
					{
						title: '泾口游',
						path: '/pages/jingkou/jingkou',
						bg: '../../static/img/index/nav0.png'
					},
					{
						title: '周边服务',
						path: '/pagesA/periphery/periphery',
						bg: '../../static/img/index/nav1.png'
					},
					{
						title: '旅游地图',
						path: '/pagesA/map/map',
						bg: '../../static/img/index/nav2.png'
					},
					{
						title: '美丽庭院',
						path: '/pagesA/beautifulYard/beautifulYard',
						bg: '../../static/img/index/nav3.png'
					},
					{
						title: '便民服务',
						path: '/pages/convenient/convenient',
						bg: '../../static/img/index/nav4.png'
					},
					{
						title: '文化振兴',
						path: '/pages/promote/promote',
						bg: '../../static/img/index/nav5.png'
					},
					{
						title: '健康中心',
						path: '/pages/healthCenter/healthCenter',
						bg: '../../static/img/index/nav6.png'
					},
					{
						title: '乡村治理',
						path: '/pages/village/village',
						bg: '../../static/img/index/nav7.png'
					}
				],
				preImg: [
					{
						url: 'https://files.zz-tech.cn/app-files/images/jingkou/mapditu.jpg'
					},
					{
						url: 'https://files.zz-tech.cn/app-files/images/jingkou/mapluxian.gif'
					},
					{
						url: 'https://files.zz-tech.cn/app-files/images/jingkou/mapyanzi.gif'
					},
					{
						url: 'https://files.zz-tech.cn/app-files/images/jingkou/mapyun.gif'
					}
				]
			}
		},
		onLoad() {
			const self = this
			self.preLoadImg()
		},
		onShow() {
			const self = this
			uni.authorize({
				scope: 'scope.userLocation',
				success() {
					uni.getLocation({
						type: 'wgs84',
						success(res) {
							self.lat = res.latitude
							self.lng = res.longitude
							self.showTwo(res.latitude, res.longitude)
							self.$store.dispatch('user/setLat', res.latitude)
							self.$store.dispatch('user/setLng', res.longitude)
						},
						fail(err) {
							console.log(err)
						}
					})
				}
			})
			const { top, height, width } = wx.getMenuButtonBoundingClientRect(); // 获取胶囊位置
			self.token = getToken() // 获取token
			self.getBannerList() // 轮播
			self.initAll()
			// 获取手机顶部内容
			self.menuButtonTop = top + 'px'
			self.menuButtonHeight = height + 'px'
			self.menuButtonRight = width + 70 + 'px'
			// 获取个人信息
			if (self.token) {
				self.getUserInfo()
			}
		},
		methods: {
			preLoadImg() {
				const self = this
				self.preImg.forEach((item, index) => {
					uni.getImageInfo({
						src: item.url,
						success(res) {
							item.url = res.path
						}
					})
				})
			},
			initAll() {
				this.showOne()
				this.showThree()
				this.showFour()
				this.showFive()
				this.getWeater()
			},
			// 景点
			showOne() {
				getScenicSpotsList().then(res => {
					this.seeList = res.data
				})
			},
			// 住宿
			showTwo(lat, lng) {
				getHomestayList({ lat: lat, lng: lng, mapType: 'gaode'}).then(res => {
					this.liveList = res.data
				})
			},
			// 特产
			showThree() {
				getSpecialityList().then(res => {
					this.blowList = res.data
				})
			},
			// 逛一逛
			showFour() {
				getShowlist({ currentPage: 1, pageSize: 10, conditions: [{
					"column": "status",
					"mode": "eq",
					"value": 'PASS'
				}]}).then(res => {
					this.strollList = res.data.list
				})
			},
			// 公告
			showFive() {
				getMessage().then(res => {
					this.messageList = res.data
				})
			},
			// 天气
			getWeater() {
				getWeater({}).then(res => {
					this.weather = res.data
				})
			},
			// 住宿
			onShareAppMessage(res) {
				return{
				      title:'转发分享',    // 转发标题
				      path: '/pagesA/beautifulYard/beautifulYard',
				      imageUrl:''   
				}
			},
			// 获取轮播
			getBannerList() {
				getBannerList().then(res => {
					this.pics = res.data
				})
			},
			// 获取用户信息
			getUserInfo() {
				const self = this
				self.$store.dispatch('user/userInfo', {}).then(res => {})
			},
			// 更多跳转
			seeMore(path) {
				if (this.token) {
					uni.navigateTo({
						url: path
					})
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			tabbarChange(event) {
				this.active = event.detail
				switch (this.active) {
					case 1:
						uni.redirectTo({
							url: "/pages/mine/mine"
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
				if (this.token) {
					uni.navigateTo({
						url: `${item.path}?title=${item.title}&preImg=${encodeURIComponent(JSON.stringify(this.preImg))}`
					})
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			// 跳转消息页面
			toMessage() {
				if(this.token) {
					uni.navigateTo({
						url: '/pagesA/message/message'
					})
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			// 去详情页
			toDetail(item) {
				if(this.token) {
					uni.navigateTo({
						url: `/pagesA/scenicSpot/detail?data=${encodeURIComponent(JSON.stringify(item))}`
					})
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			addlike(item) {
				if(this.token) {
					addlike({ id: item.id }).then(res => {
						this.showThree()
					}) 
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			addtingyuanlike(item) {
				if(this.token) {
					addLike(item.id).then(res => {
						this.showFour()
					}) 
				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
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
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/indexTop.png') no-repeat;
			background-size: 100% 100%;
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
				// background-color: #000000;
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
			box-sizing: border-box;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/gonggao.png') no-repeat;
			background-size: 100% 100%;
			.top {
				height: 84rpx;
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
					display: flex;
					align-items: center;
					.weather-img {
						width: 40rpx;
						height: 40rpx;
						margin-right: 12rpx;
					}
					.weather {
						font-size: 28rpx;
						font-weight: bold;
						color: #000000;
					}
				}
			}
			.bottom {
				height: 120rpx;
				display: flex;
				align-items: center;
				cursor: pointer;
				padding: 0 32rpx;
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
	.see, .blow, .stroll, .live {
		margin-bottom: 12rpx;
		padding: 41rpx 24rpx 37rpx;
		background-color: #ffffff;
		.main-title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 48rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #000000;
			margin-bottom: 24rpx;
			line-height: 48rpx;
			.left {
				display: flex;
				align-items: center;
				.img-icon {
					width: 30rpx;
					height: 30rpx;
					margin-right: 12rpx;
				}
			}
			.right {
				font-size: 24rpx;
				color: #666666;
				line-height: 36rpx;
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
		.see-box {
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/kan.png') no-repeat;
			background-size: 100% 100%;
		}
		.see-box, .stroll-box, .live-box {
			border-radius: 12rpx;
			box-sizing: border-box;
			padding: 40rpx 32rpx;
			.see-item {
				display: flex;
				justify-content: space-between;
				margin-bottom: 20rpx;
				box-sizing: border-box;
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
				padding-bottom: 0;
			}
			.live-item {
				.live-img {
					height: 358rpx;
					background: #DCDCDC;
					border-radius: 8rpx;
				}
			}
			.stroll-item {
				padding: 40rpx 32rpx 32rpx;
				height: 562rpx;
				box-sizing: border-box;
				margin-bottom: 24rpx;
				background: url('https://files.zz-tech.cn/app-files/images/jingkou/guang.png') no-repeat;
				background-size: 100% 100%;
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
					margin-top: 24rpx;
					.swiper {
						height: 100%;
						-webkit-transform: translateY(0);
						border-radius: 12rpx;
						overflow: hidden;
					}
				}
				.stroll-info {
					margin-top: 32rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.left, .share-btn {
						display: flex;
						font-size: 24rpx;
						color: #666666;
						line-height: 36rpx;
						letter-spacing: 1px;
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
					.share-btn {
						border: none;
						background: none;
						padding: 0;
						margin: 0;
					}
					.share-btn::after {
						border: 0;
					}
				}
			}
		}
		.stroll-box {
			padding: 0;
		}
		.live-box {
			height: 445rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/zhu.png') no-repeat;
			background-size: 100% 100%;
		}
	}
	.blow {
		padding-bottom: 24rpx;
		padding-top: 32rpx;
		margin-bottom: 4rpx;
		.main-title {
			margin-bottom: 0;
		}
	}
	.blow-box {
		padding: 0 12rpx 60rpx;
		.blow-item {
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
					font-size: 24rpx;
					color: #666666;
					letter-spacing: 1px;
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
				.right {
					display: flex;
					align-items: center;
					.iconfont {
						font-size: 20rpx;
						color: #B94333;
					}
				}
			}
		}
		.blow-item:first-child {
			.img {
				height: 202rpx;
			}
		}
	}
}
</style>
