<template>
	<view class="page-container qinglian">
		<NavBar :title="'清廉泾口'" :use-bg="true" />
		<view class="hot-nav">
			<view v-for="(item, index) in hotNav" :key="index" :class="item.active ? 'nav-item active' : 'nav-item'" @click="changeHotNav(item, index)">
				<span>{{ item.title }}</span>
			</view>
		</view>
		<view class="content">
			<view v-if="item.publicType.key === 'ECONOMY' && active === '三资公开'" v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="header">
					<view class="title">
						{{ item.title }}
					</view>
					<view class="num">
						<icon class="iconfont">&#xe65c;</icon>
						{{ item.view ? item.view : 0 }}
					</view>
				</view>
				<view class="time">
					{{ item.createTime | formatDate }}
				</view>
				<view class="nav">
					查看<icon class="iconfont">&#xe647;</icon>
				</view>
			</view>
			<view v-if="item.publicType.key === 'VILLAGE' && active === '村务公开'" v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="header">
					<view class="title">
						{{ item.title }}
					</view>
					<view class="num">
						<icon class="iconfont">&#xe65c;</icon>
						{{ item.view ? item.view : 0 }}
					</view>
				</view>
				<view class="time">
					{{ item.createTime | formatDate }}
				</view>
				<view class="nav">
					查看<icon class="iconfont">&#xe647;</icon>
				</view>
			</view>
			<view v-if="item.publicType.key === 'PARTY' && active === '党务公开'" v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
				<view class="header">
					<view class="title">
						{{ item.title }}
					</view>
					<view class="num">
						<icon class="iconfont">&#xe65c;</icon>
						{{ item.view ? item.view : 0 }}
					</view>
				</view>
				<view class="time">
					{{ item.createTime | formatDate }}
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
	import { getPublic, viewAdd } from "@/api/village.js"
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
				active: '三资公开',
				isLoadMore:false,
				currentPage: 1,
				pageSize: 500,
				isNoMore: false,
				conditions: [],
				list: []
			}
		},
		onShow() {
			this.init()
		},
		methods: {
			// 初始化页面
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getPublic({currentPage: this.currentPage, pageSize: this.pageSize, conditions: this.conditions}).then(res => {
					uni.hideLoading()
					if(res.success) {
						this.list = res.data.list
					} else {
						// uni.hideLoading()
						uni.showToast({
							title: res.message,
							icon: 'error',
							duration: 2000
						})
					}
				})
			},
			// tab切换
			changeHotNav(e, i) {
				this.show = i
				this.hotNav.forEach((item, index) => {
					item.active = false
				})
				this.active = e.title
				e.active = !e.active
			},
			// 跳转
			toDetail(item) {
				if(item.type === 'PDF') {
					uni.downloadFile({
					      url: item.files[0],
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
					viewAdd(item.id).then(res => {
						console.log(res)
					})
				} else {
					viewAdd(item.id).then(res => {
						console.log(res)
					})
					uni.navigateTo({
						url: `/pagesA/qinglian/detail?title=${this.active}&data=${encodeURIComponent(JSON.stringify(item))}`
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
			padding: 45rpx 32rpx;
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
				bottom: 45rpx;
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
