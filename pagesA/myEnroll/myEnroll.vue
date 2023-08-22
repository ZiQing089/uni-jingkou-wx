<template>
	<view class="page-container my-enroll">
		<NavBar :title="'我的报名'" :use-bg="true" :border="true" />
		<view class="content">
			<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="inside-border">
					<view class="header">
						<view class="title">
							{{ item.name }}
						</view>
						<view class="enroll">
							({{ item.signUpCount }}人已报名)
						</view>
					</view>
					<view class="time">
						开课时间：{{ item.startTime | formatDate }}
					</view>
					<view class="address">
						课程地点：{{ item.address }}
					</view>
					<view class="enroll-time">
						截止时间：{{ item.signUpEndTime | formatDate  }}
					</view>
					<view class="people-num">
						接纳人数：{{ item.totalCount }}
					</view>
					<view v-if="item.status.description === '已截止'" class="nav">
						查看<icon class="iconfont">&#xe647;</icon>
					</view>
					<view v-if="item.status.description !== '已截止'" class="cancel" @click.native.stop="cancel(item)">
						取消报名
					</view>
					<view v-if="item.status.description === '已截止'" class="status warning">
						{{ item.status.description }}
					</view>
					<view v-else-if="item.status.description === '已报满'" class="status error">
						{{ item.status.description }}
					</view>
					<view v-else class="status">
						{{ item.status.description }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getMySignUp, cancel } from '@/api/promote.js'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				show: 0,
				hotNav: [
					{
						title: '秀出来',
						active: true
					},
					{
						title: '整出来',
						active: false
					}
				],
				list: []
			}
		},
		onShow() {
			this.init()
		},
		methods: {
			// 页面初始化
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getMySignUp().then(res => {
					uni.hideLoading()
					this.list = res.data
				})
			},
			cancel(item) {
				cancel({ id: item.id }).then(res => {
					if(res.success) {
						uni.showToast({
							title: res.message,
							icon: 'success',
							duration: 2000
						})
						this.init()
					}
				})
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
.my-enroll {
	.content {
		border-top: 4rpx solid #F6F6F6;
		padding: 32rpx 24rpx 90rpx;
		.item {
			border-radius: 12rpx;
			padding: 40rpx 32rpx;
			margin-bottom: 24rpx;
			height: 346rpx;
			box-sizing: border-box;
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
				right: 24rpx;
				top: 32rpx;
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
			.nav {
				position: absolute;
				right: 32rpx;
				bottom: 32rpx;
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
			.cancel {
				position: absolute;
				width: 140rpx;
				height: 60rpx;
				right: 24rpx;
				bottom: 32rpx;
				background: #B94333;
				border-radius: 30rpx;
				text-align: center;
				line-height: 60rpx;
				font-size: 24rpx;
				color: #FFFFFF;
				letter-spacing: 1px;
			}
		}
	}
}
</style>
