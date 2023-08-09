<template>
	<view class="page-container message">
		<NavBar :title="'公告信息'" :use-bg="true" :border="true" />
		<view class="content">
			<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="header">
					{{ item.title }}
				</view>
				<view class="time">
					{{ item.time }}
				</view>
				<view class="nav">
					查看<icon class="iconfont">&#xe647;</icon>
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
				list: [
					{
						title: '游客停车场',
						time: '2023-05-04',
						address: '浙江省绍兴市越城区陶堰镇泾口村3号'
					},
					{
						title: '游客停车场游客停车游客停车场场游客停车场游客停车场',
						time: '2023-05-04',
						address: '浙江省绍兴市越城区陶堰镇泾口村3号'
					},
					{
						title: '游客停车游客停车场场',
						time: '2023-05-04',
						address: '浙江省绍兴市越城区陶堰镇泾口村3号'
					}
				]
			}
		},
		methods: {
			// 去详情页
			toDetail(item) {
				uni.navigateTo({
					url: `/pagesA/message/detail`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.message {
	.content {
		padding: 32rpx 24rpx 90rpx;
		.item {
			border-radius: 12rpx;
			position: relative;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/ggxxbg.png') no-repeat;
			background-size: 100%;
			padding: 40rpx 32rpx;
			margin-bottom: 24rpx;
			.header {
				font-size: 28rpx;
				height: 40rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				color: #000000;
				line-height: 40rpx;
				letter-spacing: 1px;
			}
			.time {
				font-size: 24rpx;
				color: #666666;
				line-height: 36rpx;
				margin-top: 20rpx;
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
}
</style>
