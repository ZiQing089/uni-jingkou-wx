<template>
	<view class="page-container school">
		<NavBar :title="'文化学堂'" :use-bg="true" :border="true" />
		<view class="hot-nav" :style="{ top: total }">
			<view v-for="(item, index) in hotNav" :key="index" :class="item.active ? 'nav-item active' : 'nav-item'" @click="changeHotNav(item, index)">
				<span>{{ item.title }}</span>
			</view>
		</view>
		<view class="content">
			<template v-if="list.length === 0">
				<view class="noData"></view>
			</template>
			<template v-else>
				<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
					<view class="header">
						<view class="title">
							{{ item.name }}
						</view>
						<view class="enroll">
							({{ item.signUpCount }}人已报名)
						</view>
					</view>
					<view class="time">
						开课时间：{{ item.startTime | formatMin }}
					</view>
					<view class="address">
						课程地点：{{ item.address }}
					</view>
					<view class="enroll-time">
						截止时间：{{ item.signUpEndTime | formatMin }}
					</view>
					<view class="people-num">
						计划人数：{{ item.totalCount }}
					</view>
					<view v-if="item.status.description === '报名中'" :class="item.signUp ? 'btn ybm' : 'btn'">
						{{ item.signUp ? '已报名' : '立即报名' }}
					</view>
					<view v-if="item.status.description === '已报满'" :class="item.signUp ? 'btn ybm' : 'btn ybman'">
						{{ item.signUp ? '已报名' : '立即报名' }}
					</view>
					<view v-if="item.status.description === '已结束'" class="nav">
						查看<icon class="iconfont">&#xe647;</icon>
					</view>
					<view v-if="item.status.description === '已结束'" class="status warning">
						{{ item.status.description }}
					</view>
					<view v-else-if="item.status.description === '已报满'" class="status error">
						{{ item.status.description }}
					</view>
					<view v-else class="status">
						{{ item.status.description }}
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getSchoolList } from "@/api/promote.js"
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				show: 0,
				hotNav: [
					{
						title: '进行中',
						active: true,
						type: 'IN_SIGNUP'
					},
					{
						title: '已截止',
						active: false,
						type: 'SIGNUP_END'
					}
				],
				total: '',
				status: 'IN_SIGNUP',
				list: []
			}
		},
		onShow() {
			const { top, height, width } = wx.getMenuButtonBoundingClientRect();
			this.total = top + height + 5 + 'px'
			this.init()
		},
		methods: {
			// 初始化页面
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getSchoolList({ status: this.status }).then(res => {
					uni.hideLoading()
					this.list = res.data
				})
			},
			// tab切换
			changeHotNav(e, i) {
				this.show = i
				this.hotNav.forEach((item, index) => {
					item.active = false
				})
				e.active = !e.active
				this.status = e.type
				this.init()
			},
			toDetail(item) {
				uni.navigateTo({
					url: `/pagesA/school/detail?data=${encodeURIComponent(JSON.stringify(item))}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.school {
	.hot-nav {
		display: flex;
		padding: 0 56rpx;
		position: sticky;
		height: 86rpx;
		background-color: #ffffff;
		margin-bottom: 4rpx;
		align-items: center;
		.nav-item {
			height: 48rpx;
			line-height: 48rpx;
			padding-top: 8rpx;
			font-size: 28rpx;
			box-sizing: border-box;
			color: #333333;
			line-height: 42rpx;
			margin-right: 56rpx;
		}
		.active {
			height: 48rpx;
			font-size: 32rpx;
			font-weight: bold;
			color: #B94333;
			line-height: 48rpx;
			transform-style: preserve-3d;
			padding: 0;
			position: relative;
		}
		.active::after {
			transform: translateZ(-10px);
			position: absolute;
			content: '';
			height: 8rpx;
			bottom: 4rpx;
			left: 0;
			right: 0;
			z-index: 0;
			background: #F4E3E0;
		}
	}
	.content {
		padding: 32rpx 24rpx 90rpx;
		.noData {
			width: 374rpx;
			height: 314rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/nodatapg.png') no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
		}
		.item {
			border-radius: 12rpx;
			padding: 40rpx 32rpx;
			height: 349rpx;
			box-sizing: border-box;
			margin-bottom: 24rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/whxtbg.png') no-repeat;
			background-size: 100% 100%;
			position: relative;
			.header {
				display: flex;
				align-items: center;
				.title {
					font-size: 28rpx;
					color: #000000;
					line-height: 40rpx;
					margin-right: 20rpx;
					letter-spacing: 1px;
				}
				.enroll {
					font-size: 24rpx;
					color: #B94333;
					line-height: 36rpx;
				}
			}
			.time, .address, .enroll-time, .people-num {
				margin-top: 20rpx;
				font-size: 24rpx;
				color: #333333;
				line-height: 36rpx;
			}
			.status {
				position: absolute;
				right: 32rpx;
				top: 40rpx;
				padding: 6rpx 14rpx;
				font-size: 24rpx;
				color: #3DB62F;
				line-height: 34rpx;
				background: #E6F8E4;
				border-radius: 4rpx;
			}
			.warning {
				background: #DEDEDE;
				color: #999999;
			}
			.error {
				color: #F4474B;
				background: #FDECEC;
			}
			.btn {
				position: absolute;
				width: 140rpx;
				height: 60rpx;
				right: 32rpx;
				bottom: 45rpx;
				background: #B94333;
				border-radius: 30rpx;
				text-align: center;
				line-height: 60rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				letter-spacing: 1px;
			}
			.nav {
				position: absolute;
				right: 32rpx;
				bottom: 45rpx;
			    height: 36rpx;
			    font-size: 24rpx;
				display: flex;
			    color: #B94333;
			    line-height: 36rpx;
			   .iconfont {
				   display: flex;
				   align-items: center;
				   font-size: 20rpx;
				   margin-left: 12rpx;
			   }
			}
			.ybman {
				color: #999999;
				background: #DEDEDE;
			}
			.ybm {
				background: #9B7A76;
			}
		}
	}
}
</style>
