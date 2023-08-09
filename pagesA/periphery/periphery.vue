<template>
	<view class="page-container periphery">
		<NavBar :title="'周边服务'" :use-bg="true" :border="true" />
		<view class="content">
			<view v-for="(item, index) in list" :key="index" class="item">
				<view class="header">
					<view class="left">
						{{ item.title }}
					</view>
					<view class="right">
						{{ item.number }}
					</view>
				</view>
				<view class="address">
					地址：{{ item.address }}
				</view>
				<view class="nav">
					导航<icon class="iconfont">&#xe647;</icon>
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
						number: '1.3km',
						address: '浙江省绍兴市越城区陶堰镇泾口村3号'
					},
					{
						title: '游客停车场',
						number: '1.3km',
						address: '浙江省绍兴市越城区陶堰镇泾口村3号'
					},
					{
						title: '游客停车场',
						number: '1.3km',
						address: '浙江省绍兴市越城区陶堰镇泾口村3号'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.periphery {
	.content {
		padding: 32rpx 24rpx 90rpx;
		.item {
			border-radius: 12rpx;
			margin-bottom: 24rpx;
			padding: 40rpx 32rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/ggxxbg.png') no-repeat;
			background-size: 100%;
			position: relative;
			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.left {
					font-size: 28rpx;
					color: #000000;
					line-height: 40rpx;
					letter-spacing: 1px;
				}
				.right {
					font-size: 24rpx;
					color: #666666;
					line-height: 36rpx;
				}
			}
			.address {
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
