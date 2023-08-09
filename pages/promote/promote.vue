<template>
	<view class="page-container promote">
		<NavBar :title="'文化振兴'" :border="true" :use-bg="true" />
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
						title: '文化档案',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/whda.png',
						path: '/pagesA/files/files'
					},
					{
						title: '文化学堂',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/whxt.png',
						path: '/pagesA/school/school'
					},
					{
						title: '我推荐',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/wtj.png',
						path: '/pagesA/recommend/recommend'
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
.promote {
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
