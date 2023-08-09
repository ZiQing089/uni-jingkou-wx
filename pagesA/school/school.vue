<template>
	<view class="page-container school">
		<NavBar :title="'文化学堂'" :use-bg="true" />
		<view class="hot-nav">
			<view v-for="(item, index) in hotNav" :key="index" :class="item.active ? 'nav-item active' : 'nav-item'" @click="changeHotNav(item, index)">
				<span>{{ item.title }}</span>
			</view>
		</view>
		<view class="content">
			<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="header">
					<view class="title">
						{{ item.title }}
					</view>
					<view class="enroll">
						({{ item.enroll }}人已报名)
					</view>
				</view>
				<view class="time">
					开课时间：{{ item.time }}
				</view>
				<view class="address">
					课程地点：{{ item.address }}
				</view>
				<view class="enroll-time">
					截止时间：{{ item.address }}
				</view>
				<view class="people-num">
					计划人数：{{ item.people }}
				</view>
				<view v-if="item.status === '报名中'" :class="item.isman ? 'btn ybm' : 'btn'">
					{{ item.isman ? '已报名' : '立即报名' }}
				</view>
				<view v-if="item.status === '已报满'" :class="item.isman ? 'btn ybm' : 'btn ybman'">
					{{ item.isman ? '已报名' : '立即报名' }}
				</view>
				<view v-if="item.status === '已结束'" class="nav">
					查看<icon class="iconfont">&#xe647;</icon>
				</view>
				<view v-if="item.status === '已结束'" class="status warning">
					{{ item.status }}
				</view>
				<view v-else-if="item.status === '已报满'" class="status error">
					{{ item.status }}
				</view>
				<view v-else class="status">
					{{ item.status }}
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
				show: 0,
				hotNav: [
					{
						title: '报名中',
						active: true
					},
					{
						title: '已结束',
						active: false
					}
				],
				list: [
					{
						status: '报名中',
						title: '老年人课堂',
						enroll: '12',
						isman: false,
						time: '2022-02-02',
						address: '老年活动中心',
						time1: '2023-7-30 18:00:00',
						time2: '2023-8-1 9:00:00',
						people: '20',
						content: '广工很色广工很色广工很色广工很色广工很色广工很色广工很色'
					},
					{
						status: '报名中',
						title: '老年人课堂',
						enroll: '12',
						isman: true,
						time: '2022-02-02',
						address: '老年活动中心',
						time1: '2023-7-30 18:00:00',
						time2: '2023-8-1 9:00:00',
						people: '20',
						content: '广工很色广工很色广工很色广工很色广工很色广工很色广工很色'
					},
					{
						status: '已报满',
						title: '老年人课堂',
						enroll: '12',
						time: '2022-02-02',
						isman: true,
						address: '老年活动中心',
						time1: '2023-7-30 18:00:00',
						time2: '2023-8-1 9:00:00',
						people: '20',
						content: '广工很色广工很色广工很色广工很色广工很色广工很色广工很色'
					},
					{
						status: '已报满',
						title: '老年人课堂',
						enroll: '12',
						time: '2022-02-02',
						isman: false,
						address: '老年活动中心',
						time1: '2023-7-30 18:00:00',
						time2: '2023-8-1 9:00:00',
						people: '20',
						content: '广工很色广工很色广工很色广工很色广工很色广工很色广工很色'
					},
					{
						status: '已结束',
						title: '老年人课堂',
						enroll: '12',
						time: '2022-02-02',
						isman: true,
						address: '老年活动中心',
						time1: '2023-7-30 18:00:00',
						time2: '2023-8-1 9:00:00',
						people: '20',
						content: '广工很色广工很色广工很色广工很色广工很色广工很色广工很色'
					},
					{
						status: '已结束',
						title: '老年人课堂',
						enroll: '12',
						time: '2022-02-02',
						isman: false,
						address: '老年活动中心',
						time1: '2023-7-30 18:00:00',
						time2: '2023-8-1 9:00:00',
						people: '20',
						content: '广工很色广工很色广工很色广工很色广工很色广工很色广工很色'
					}
				]
			}
		},
		methods: {
			// tab切换
			changeHotNav(e, i) {
				this.show = i
				this.hotNav.forEach((item, index) => {
					item.active = false
				})
				e.active = !e.active
			},
			enroll() {
				console.log('你好')
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
		border-top: 4rpx solid #F6F6F6;
		padding: 32rpx 24rpx 90rpx;
		.item {
			border-radius: 12rpx;
			padding: 40rpx 32rpx;
			margin-bottom: 24rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/whxtbg.png') no-repeat;
			background-size: 100%;
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
				bottom: 40rpx;
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
				bottom: 40rpx;
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
