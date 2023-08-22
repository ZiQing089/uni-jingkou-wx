<template>
	<view class="page-container health">
		<NavBar :title="'健康中心'" :border="true" :use-bg="true" />
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
			<van-dialog
			  use-slot
			  custom-class="dialog"
			  confirmButtonText="前去认证"
			  cancelButtonText="暂不认证"
			  :show="show"
			  show-cancel-button
			  @confirm="confirm"
			  @cancel="cancel"
			>
				<view class="img">
					<van-image
					  width="100%"
					  height="100%"
					  fit="cover"
					  radius="4"
					  src="https://files.zz-tech.cn/app-files/images/jingkou/renzhengpic.png"
					/>
				</view>
				<icon class="iconfont" @click="close">&#xe667;</icon>
				<view class="tips">
					该功能仅限村民使用，如需使用
					请先进行“村民认证”！
				</view>
			</van-dialog>
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { mapState } from 'vuex'
	export default {
		components: {
			NavBar
		},
		computed: {
			...mapState({
				rule: (state) => state.user.rule
			})
		},
		data() {
			return {
				bgHeight: '',
				show: false,
				navList: [
					{
						title: '健康档案',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/jkda.png',
						path: '/pagesA/record/record'
					},
					{
						title: '健康知识',
						bg: 'https://files.zz-tech.cn/app-files/images/jingkou/jkzs.png',
						path: '/pagesA/command/command'
					}
				]
			}
		},
		onShow() {
		},
		methods: {
			// 跳转
			navTo(path, title) {
				if(this.rule === 'VILLAGER') {
					uni.navigateTo({
						url: `${path}?title=${title}`
					})
				} else {
					if(title === '健康知识') {
						this.show = true
					} else {
						uni.navigateTo({
							url: `${path}?title=${title}`
						})
					}
				}
			},
			confirm() {
				uni.navigateTo({
					url: '/pages/attestation/attestation'
				})
			},
			close() {
				this.show = false
			},
			cancel() {
				this.show = false
			}
		}
	}
</script>

<style lang="scss" scoped>
.health {
	.content {
		padding: 32rpx 24rpx;
		.dialog {
			position: relative;
			.img {
				width: 100%;
				height: 410rpx;
			}
			.iconfont {
				font-size: 44rpx;
				color: #666666;
				position: absolute;
				top: 24rpx;
				right: 24rpx;
			}
			.tips {
				width: 448rpx;
				text-align: center;
				margin: 32rpx auto 40rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: #173355;
				line-height: 48rpx;
			}
		}	
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
