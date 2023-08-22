<template>
	<view class="page-container refuse">
		<NavBar :title="'垃圾分类'" :use-bg="true" :border="true" />
		<view class="content">
			<view class="search">
				<van-search :value="value" placeholder="请输入搜索关键词" @search="onSearch" />
			</view>
			<view v-if="!value" class="card-box">
				<template v-for="(item, index) in cardList">
					<view :class="item.active ? 'item active' : 'item'" :key="index" @click="clickCard(item)">
						<view :class="item.active ? 'text active-text' : 'text'">
							{{ item.text }}
						</view>
					</view>
				</template>
			</view>
			<view class="list">
				<template v-if="value">
					<template v-for="(item, index) in list">
						<view class="list-item" :key="index">
							<view class="left">
								{{ item.name }}
							</view>
							<view class="right">
								#{{ item.type.description }}#
							</view>
						</view>
					</template>
				</template>
				<template v-else>
					<template v-for="(item, index) in list">
						<view class="list-item" :key="index">
							{{ item.name }}
						</view>
					</template>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getList } from "@/api/convenient.js"
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				value: '',
				list: [],
				cardList: [
					{
						text: '可回收物',
						active: true
					},
					{
						text: '有害垃圾',
						active: false
					},
					{
						text: '厨余垃圾',
						active: false
					},
					{
						text: '其它垃圾',
						active: false
					}
				],
				obj: {
					'可回收垃圾': 'RECYCLABLE',
					'有害垃圾': 'HARMFUL',
					'厨余垃圾': 'KITCHEN',
					'其它垃圾': 'OTHER'
				}
			}
		},
		onLoad() {
			const {
				top,
				height,
				width
			} = wx.getMenuButtonBoundingClientRect();
			this.bgHeight = 46 + top + 'px'
			this.init(this.obj['可回收垃圾'], '')
		},
		methods: {
			init(type, name) {
				getList({ type: type, name: name }).then(res => {
					this.list = res.data
				})
			},
			// 点击card
			clickCard(item) {
				this.cardList.forEach((e, i) => {
					e.active = false
				})
				item.active = !item.active
				this.init(this.obj[item.text], '')
			},
			// 搜索
			onSearch(event) {
				this.value = event.detail
				if(this.value) {
					this.init(null, this.value)
				} else {
					this.init(this.obj['可回收垃圾'], this.value)
					this.cardList.forEach((e, i) => {
						e.active = false
					})
					this.cardList[0].active = true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.refuse {
		padding-bottom: 98rpx;
		.content {
			padding: 0rpx 24rpx;
		
			.card-box {
				margin-top: 40rpx;
				display: flex;
		
				.item {
					flex: 1;
					height: 92rpx;
					background: #ffffff;
					border-radius: 8rpx;
					margin-right: 20rpx;
					color: #666666;
					border: 1rpx solid #666666;
					.text {
						text-align: center;
						font-size: 28rpx;
						line-height: 92rpx;
						letter-spacing: 1rpx;
					}
					.active-text {
						color: #FFFFFF;
					}
				}
		
				.active {
					background: #B94333;
					color: #ffffff;
					border-color: transparent;
				}
		
				.item:last-child {
					margin-right: 0;
				}
			}
		
			.list {
				margin-top: 40rpx;
		
				.list-item {
					display: flex;
					height: 80rpx;
					line-height: 80rpx;
					padding: 0 60rpx;
					box-sizing: border-box;
					background: #F9F9F9;
					border-radius: 4rpx;
					font-size: 24rpx;
					color: #666666;
					justify-content: center;
					margin-bottom: 20rpx;
		
					.left {
						flex: 1;
						text-align: left;
					}
		
					.right {
						flex: .7;
						font-size: 24rpx;
						color: #B94333;
						text-align: right;
					}
				}
			}
		}
		/deep/ .van-search {
			padding: 14rpx 0 0;
		}
		
		/deep/ .van-search__content {
			background: #F9F9F9;
			border-radius: 12rpx;
		}
	}
</style>