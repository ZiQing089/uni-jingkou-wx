<template>
	<view class="page-container partyBuilding">
		<NavBar :title="'党建统领'" :use-bg="true" />
		<view class="hot-nav" :style="{ top: total }">
			<view v-for="(item, index) in hotNav" :key="index" :class="item.active ? 'nav-item active' : 'nav-item'" @click="changeHotNav(item, index)">
				<span>{{ item.title }}</span>
			</view>
		</view>
		<view v-if="show === 0" class="content">
			<template v-if="list.length === 0">
				<view class="noData"></view>
			</template>
			<template v-else>
				<view v-for="(item, index) in list" :key="index" class="item" @click="toDetail(item)">
					<view class="title">
						{{ item.name }}
					</view>
					<view class="time" style="margin-top: 36rpx;">
						时间：{{ item.time | formatDate }}
					</view>
					<view class="address">
						地址：{{ item.address }}
					</view>
					<view class="nav">
						查看<icon class="iconfont">&#xe647;</icon>
					</view>
				</view>
				<van-divider v-if="isNoMore" contentPosition="center">没有更多了！</van-divider>
			</template>
		</view>
		<view v-if="show === 1" class="content-member">
			<template v-if="memberList.length === 0">
				<view class="noData"></view>
			</template>
			<template v-else>
				<view v-for="(item, index) in memberList" :key="index" class="list-item">
					<view class="title">
						{{ index }}
					</view>
					<view class="img-list">
						<view v-for="(e, i) in item" :key="i" class="img-item">
							<view class="img">
								<van-image width="100%" height="100%" radius="4" fit="cover"
									:src="e.pics[0]" /> 
							</view>
							<view class="name">
								{{ e.name }}
							</view>
						</view>
					</view>
				</view>
				<van-divider v-if="isMemberNoMore" contentPosition="center">没有更多了！</van-divider>
			</template>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getPartyBuilding, getPartyMember } from "@/api/village.js"
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				show: 0,
				hotNav: [
					{
						title: '党建活动',
						active: true
					},
					{
						title: '党员风采',
						active: false
					},
				],
				active: '党建活动',
				isLoadMore:false,
				currentPage: 1,
				pageSize: 10,
				isNoMore: false,
				memberCurrentPage: 1,
				memberPageSize: 10,
				conditions: [],
				list: [],
				memberList: {}
			}
		},
		onLoad() {
			// 获取胶囊位置 { top, height, width }
			const { top, height, width } = wx.getMenuButtonBoundingClientRect();
			this.total = top + height + 5 + 'px'
			this.getMemberList()
			this.getList()
		},
		onReachBottom() {
			if(!this.isLoadMore && !this.isNoMore){  //此处判断，上锁，防止重复请求
				this.isLoadMore = true
				this.currentPage += 1  //每次上拉请求新的一页
				this.getList()
			}
		},
		methods: {
			// 获取整出来列表
			getList() {
				getPartyBuilding({currentPage: this.currentPage, pageSize: this.pageSize, conditions: this.conditions}).then(res => {
					if(res.success && res.data.list.length !== 0) {
						this.isLoadMore = false
						this.list = this.list.concat(res.data.list)
						if(res.data.list.length < this.pageSize) {
							this.isNoMore = true
						}
					}
				})
			},
			// 获取党员列表
			getMemberList() {
				getPartyMember({currentPage: this.memberCurrentPage, pageSize: this.memberPageSize, conditions: this.conditions}).then(res => {
					this.memberList = res.data
				}) 
			},
			// tab切换
			changeHotNav(e, i) {
				this.show = i
				this.hotNav.forEach((item, index) => {
					item.active = false
				})
				e.active = !e.active
				this.active = e.title
			},
			toDetail(item) {	
				uni.navigateTo({
					url: `/pagesA/partyBuilding/detail?title=${this.title}&data=${encodeURIComponent(JSON.stringify(item))}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.partyBuilding {
	.hot-nav {
		display: flex;
		position: sticky;
		padding: 0 56rpx;
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
			margin-right: 56rpx;
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
			padding: 45rpx 32rpx;
			margin-bottom: 24rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/mltybg.png') no-repeat;
			background-size: 100% 100%;
			position: relative;
			.title {
				font-size: 28rpx;
				color: #000000;
				line-height: 44rpx;
				letter-spacing: 1px;
			}
			.time, .address {
				margin-top: 12rpx;
				font-size: 24rpx;
				color: #333333;
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
	.content-member {
		.noData {
			width: 374rpx;
			height: 314rpx;
			background: url('https://files.zz-tech.cn/app-files/images/jingkou/nodatapg.png') no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
		}
		.list-item {
			background: #ffffff;
			padding: 32rpx 24rpx;
			border-bottom: 12rpx solid #F6F6F6;
			.title {
				font-size: 44rpx;
				text-align: center;
				font-weight: bold;
				color: #333333;
				line-height: 66rpx;
				letter-spacing: 1px;
			}
			.img-list {
				display: flex;
				flex-wrap: wrap;
				.img-item {
					width: 218rpx;
					margin-right: 24rpx;
					margin-top: 24rpx;
				}
				.img {
					width: 100%;
					height: 290rpx;
				}
				.name {
					margin-top: 12rpx;
					font-size: 28rpx;
					text-align: center;
					color: #000000;
					line-height: 44rpx;
					letter-spacing: 1px;
				}
			}
			.img-item:nth-child(3n) {
				margin-right: 0;
			}
		}
	}
}
</style>
