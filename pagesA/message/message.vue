<template>
	<view class="page-container message">
		<NavBar :title="'公告信息'" :use-bg="true" :border="true" />
		<view class="content">
			<template v-if="list.length === 0">
				<view class="noData"></view>
			</template>
			<template v-else>
				<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
					<view class="header">
						{{ item.title }}
					</view>
					<view class="time">
						{{ item.createTime | formatDate }}
					</view>
					<view class="nav">
						查看<icon class="iconfont">&#xe647;</icon>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getMessage } from '@/api/message.js'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				list: []
			}
		},
		onShow() {
			this.init()
		},
		methods: {
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getMessage().then(res => {
					uni.hideLoading()
					this.list = res.data
				})
			},
			// 去详情页
			toDetail(item) {
				uni.navigateTo({
					url: `/pagesA/message/detail?data=${encodeURIComponent(JSON.stringify(item))}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.message {
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
			position: relative;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/ggxxbg.png') no-repeat;
			background-size: 100% 100%;
			padding: 40rpx 32rpx;
			box-sizing: border-box;
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
