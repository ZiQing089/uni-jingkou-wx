<template>
	<view class="page-container activity">
		<NavBar :title="title" :use-bg="true" :border="true" />
		<view class="content">
			<view v-for="(item, index) in list" :key="index" class="card" @click="toDetail(item)">
				<view class="top">
					<view class="title">
						{{ item.title }}
					</view>
					<view class="tips">
						{{ item.tips }}
					</view>
				</view>
				<view class="address">
					<span class="key">活动地点：</span><span>{{ item.address }}</span>
				</view>
				<view class="time">
					<span class="key">活动时间：</span><span>{{ item.time }}</span>
				</view>
				<view class="introduce">
					<span class="key">活动介绍：</span><span class="val">{{ item.introduce }}</span>
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
				title: '',
				list: [
					{
						title: '泾口文化宣传',
						address: '体育场3楼篮球馆',
						time: '2023-04-26',
						introduce: '大家锻炼起来，踊跃报名篮球赛！',
						tips: '习俗文化'
					},
					{
						title: '泾口文化宣传',
						address: '体育场3楼篮球馆',
						time: '2023-04-26',
						introduce: '大家锻炼起来，踊跃报名篮球赛！锻炼起来，踊跃报锻炼起来，踊跃报锻炼起来，踊跃报锻炼起来，踊跃报',
						tips: '习俗文化'
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
			// 跳转详情页
			toDetail(item) {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.activity {
	padding-bottom: 98rpx;
	.content {
		padding: 32rpx 24rpx;
		.card {
			border-radius: 12rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/lihdbg.png') no-repeat;
			background-size: 100%;
			margin-bottom: 24rpx;
			padding: 40rpx 32rpx;
			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title {
					height: 40rpx;
					font-size: 28rpx;
					color: #000000;
					line-height: 40rpx;
					letter-spacing: 1px;
				}
				.tips {
					width: 128rpx;
					height: 46rpx;
					line-height: 46rpx;
					background: #E6F8E4;
					font-size: 24rpx;
					text-align: center;
					color: #3DB62F;
					border-radius: 4rpx;
				}
			}
			.address, .time, .introduce {
				display: flex;
				height: 36rpx;
				font-size: 24rpx;
				color: #666666;
				line-height: 36rpx;
				margin-top: 24rpx;
				.key {
					width: 120rpx;
				}
				.val {
					width: 490rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
	}
}
</style>
