<template>
	<view class="page-container partyBuilding">
		<NavBar :title="'党建统领'" :use-bg="true" />
		<view class="hot-nav">
			<view v-for="(item, index) in hotNav" :key="index" :class="item.active ? 'nav-item active' : 'nav-item'" @click="changeHotNav(item, index)">
				<span>{{ item.title }}</span>
			</view>
		</view>
		<view v-if="show === 0" class="content">
			<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="title">
					{{ item.title }}
				</view>
				<view class="time" style="margin-top: 36rpx;">
					时间：{{ item.time | formatDate }}
				</view>
				<view class="address">
					地址：{{ item.address }}
				</view>
				<view class="nav">
					查看<icon class="iconfont">&#xe647;</icon>
				</view>
			</view>
		</view>
		<view v-if="show === 1" class="content-member">
			<view v-for="(item, index) in list" :key="index" class="list-item">
				<view class="title">
					{{ item.branchType }}
				</view>
				<view class="img-list">
					<view v-for="(e, i) in item.partyMemberList" :key="i" class="img-item">
						<view class="img">
							<van-image width="100%" height="100%" radius="4" fit="cover"
								:src="e.pic" /> 
						</view>
						<view class="name">
							{{ e.name }}
						</view>
					</view>
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
						title: '党建活动',
						active: true
					},
					{
						title: '党员风采',
						active: false
					},
				],
				list: [
					{
						title: '2023年党支开展党员主题教育学习计划',
						time: '1690861108884',
						partyMemberList: [
							{
								name: '广工色',
								pic: ''
							},
							{
								name: '广工唐',
								pic: ''
							},
							{
								name: '广工咦',
								pic: ''
							},
							{
								name: '广工啊',
								pic: ''
							}
						],
						branchType: '第一支部委员会',
						address: '广工茶楼',
						content: '广工很色广工很色广工很色广工很色广工很色广工很色广工很色广工很色广工很色广工很色'
					},
					{
						title: '2023年党支开展党员主题教育学习计划',
						time: '1690861108884',
						address: '广工茶楼',
						partyMemberList: [
							{
								name: '广工1',
								pic: ''
							},
							{
								name: '广工2',
								pic: ''
							},
							{
								name: '广工3',
								pic: ''
							},
							{
								name: '广工4',
								pic: ''
							}
						],
						branchType: '第二支部委员会',
						content: '广工很色广工很色广工很色广工很色广工很色广工很色广工很色广工很色广工很色广工很色'
					}
				],
				title: '',
				detail: {}
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
			toDetail(item) {	
				uni.navigateTo({
					url: `/pagesA/partyBuilding/detail?title=${this.title}&data=${encodeURIComponent(JSON.stringify(item))}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.partyBuilding {
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
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/mltybg.png') no-repeat;
			background-size: 100%;
			position: relative;
			.title {
				font-size: 28rpx;
				color: #000000;
				line-height: 44rpx;
				letter-spacing: 1px;
			}
			.time, .address {
				margin-top: 12rpx;
				font-size: 24rpx;
				color: #333333;
				line-height: 36rpx;
			}
			.nav {
				position: absolute;
				right: 40rpx;
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
		}
	}
	.content-member {
		border-top: 4rpx solid #F6F6F6;
		.list-item {
			background: #ffffff;
			padding: 32rpx 24rpx;
			border-bottom: 12rpx solid #F6F6F6;
			.title {
				font-size: 44rpx;
				text-align: center;
				font-weight: bold;
				color: #333333;
				line-height: 66rpx;
				letter-spacing: 1px;
			}
			.img-list {
				display: flex;
				flex-wrap: wrap;
				.img-item {
					width: 218rpx;
					margin-right: 24rpx;
					margin-top: 24rpx;
				}
				.img {
					width: 100%;
					height: 290rpx;
				}
				.name {
					margin-top: 12rpx;
					font-size: 28rpx;
					text-align: center;
					color: #000000;
					line-height: 44rpx;
					letter-spacing: 1px;
				}
			}
			.img-item:nth-child(3n) {
				margin-right: 0;
			}
		}
	}
}
</style>
