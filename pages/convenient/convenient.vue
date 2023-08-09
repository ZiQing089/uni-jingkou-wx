<template>
	<view class="page-container convenient">
		<NavBar :title="'便民服务'" :border="true" :use-bg="true" />
		<view class="content">
			<view class="nav-box">
				<view v-for="(item, index) in navList" :key="index" class="nav-item" @click="navTo(item.path, item.title)">
					<van-image
					  width="100%"
					  height="100%"
					  fit="cover"
					  :src="item.bg"
					/>
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
				navList: [
					{
						title: '邻里空间',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/llkj.png',
						path: '/pagesA/space/space'
					},
					{
						title: '邻里活动',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/llhd.png',
						path: '/pagesA/activity/activity'
					},
					{
						title: '邻里互助',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/llhz.png',
						path: '/pagesA/help/help'
					},
					{
						title: '垃圾分类',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/ljfl.png',
						path: '/pagesA/refuse/refuse'
					}
				]
			}
		},
		onShow() {
			
		},
		methods: {
			// 跳转
			navTo(path, title) {
				uni.navigateTo({
					url: `${path}?title=${title}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.convenient {
	.content {
		padding: 32rpx 24rpx;
		.nav-box {
			display: flex;
			flex-wrap: wrap;
			.nav-item {
				width: 340rpx;
				height: 340rpx;
				border-radius: 12rpx;
				box-sizing: border-box;
				margin-right: 22rpx;
				margin-bottom: 24rpx;
			}
			.nav-item:nth-child(2n) {
				margin: 0;
			}
		}
	}
}
</style>
