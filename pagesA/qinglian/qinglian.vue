<template>
	<view class="page-container qinglian">
		<NavBar :title="'清廉泾口'" :use-bg="true" />
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
					<view class="num">
						<icon class="iconfont">&#xe65c;</icon>
						{{ item.num }}
					</view>
				</view>
				<view class="time">
					{{ item.time | formatDate }}
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
				hotNav: [
					{
						title: '三资公开',
						active: true
					},
					{
						title: '党务公开',
						active: false
					},
					{
						title: '村务公开',
						active: false
					}
				],
				title: '三资公开',
				list: [
					{
						title: '2023年3月财务公开表2023年3月财2023年3月财务公开表2023年3月财…',
						num: '1821',
						time: '1690861108884',
						file: '.pdf',
						pics: ['', '', '']
					},
					{
						title: '2023年3月财务公开表2023年3月财2023年3月财务公开表2023年3月财…',
						num: '1821',
						time: '1690861108884',
						file: '',
						pics: ['', '', '']
					}
				]
			}
		},
		onShow() {
			console.log(new Date().getTime())
		},
		methods: {
			// tab切换
			changeHotNav(e, i) {
				this.show = i
				this.hotNav.forEach((item, index) => {
					item.active = false
				})
				this.title = e.title
				e.active = !e.active
			},
			// 跳转
			toDetail(item) {
				if(item.file.includes('pdf')) {
					uni.downloadFile({
					      url: item.file,
					      success: function (res) {
					        var filePath = res.tempFilePath;
					        uni.openDocument({
					          filePath: filePath,
					          showMenu: true,
					          success: function (res) {
					            console.log('打开文档成功');
					         }
						  })
						}
					})
				} else {
					uni.navigateTo({
						url: `/pagesA/qinglian/detail?title=${this.title}&data=${encodeURIComponent(JSON.stringify(item))}`
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.qinglian {
	.hot-nav {
		display: flex;
		justify-content: space-between;
		padding: 0 69rpx;
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
			// margin-right: 56rpx;
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
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/qljkbg.png') no-repeat;
			background-size: 100%;
			position: relative;
			.header {
				display: flex;
				justify-content: space-between;
				.title {
					width: 500rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 28rpx;
					color: #000000;
					line-height: 40rpx;
					height: 40rpx;
					letter-spacing: 1px;
				}
				.num {
					display: flex;
					font-size: 24rpx;
					color: #666666;
					line-height: 36rpx;
					letter-spacing: 1px;
					.iconfont {
						display: flex;
						align-items: center;
						margin-right: 12rpx;
					}
				}
			}
			.time {
				font-size: 24rpx;
				margin-top: 20rpx;
				color: #666666;
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
}
</style>
