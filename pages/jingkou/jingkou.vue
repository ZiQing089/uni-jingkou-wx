<template>
	<view class="page-container jingkou">
		<NavBar :title="'泾口游'" :border="true" :use-bg="true" />
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
						title: '特色美食',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/tsms.png',
						path: '/pagesA/delicacy/delicacy'
					},
					{
						title: '美丽景点',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/mljd.png',
						path: '/pagesA/scenicSpot/scenicSpot'
					},
					{
						title: '民宿酒店',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/msjd.png',
						path: '/pagesA/hotel/hotel'
					},
					{
						title: '休闲娱乐',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/xxyl.png',
						path: '/pagesA/recreation/recreation'
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
.jingkou {
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
