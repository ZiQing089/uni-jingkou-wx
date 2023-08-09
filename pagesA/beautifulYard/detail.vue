<template>
	<view class="page-container yard-detail">
		<NavBar :title="'美丽庭院'" :border="true" />
		<view class="content">
			<view class="top" style="border: none;">
				<view class="inline" style="border: none;">
					<view class="label">
						整改标题：
					</view>
					<view class="val">
						{{ detail.title }}
					</view>
					<icon v-if="detail.status === '已处理'" class="iconfont">&#xe65f;</icon>
					<icon v-if="detail.status === '待处理'" class="iconfont warning-icon">&#xe65d;</icon>
					<icon v-if="detail.status === '待审核'" class="iconfont warning-icon">&#xe660;</icon>
					<icon v-if="detail.status === '已驳回'" class="iconfont error-icon">&#xe65e;</icon>
				</view>
			</view>
			<view class="info">
				<view class="inline">
					<view class="label">
						上传人员：
					</view>
					<view class="val">
						{{ detail.name }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						上传时间：
					</view>
					<view class="val">
						{{ detail.time | formatDate }}
					</view>
				</view>
				<view class="block">
					<view class="label">
						整改内容：
					</view>
					<view class="val">
						{{ detail.content }}
					</view>
				</view>
				<view class="block">
					<view class="label">
						照片：
					</view>
					<view class="img-box">
						<view v-for="(item, index) in detail.pic" :key="index" class="img">
							<van-image
							  width="100%"
							  height="100%"
							  fit="cover"
							  radius="4"
							  :src="item"
							/>
						</view>
					</view>
				</view>
			</view>
			<view v-if="detail.status === '已处理'" class="success">
				<view class="inline">
					<view class="label">
						整改人员：
					</view>
					<view class="val">
						{{ detail.name }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						整改时间：
					</view>
					<view class="val">
						{{ detail.time | formatDate }}
					</view>
				</view>
				<view class="block">
					<view class="label">
						回复内容：
					</view>
					<view class="val">
						{{ detail.content }}
					</view>
				</view>
				<view class="block">
					<view class="label">
						照片：
					</view>
					<view class="img-box">
						<view v-for="(item, index) in detail.pic" :key="index" class="img">
							<van-image
							  width="100%"
							  height="100%"
							  fit="cover"
							  radius="4"
							  :src="item"
							/>
						</view>
					</view>
				</view>
			</view>
			<view v-if="detail.status === '已驳回'" class="error">
				<view class="block">
					<view class="label">
						驳回原因：
					</view>
					<view class="val">
						{{ detail.content }}
					</view>
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
				detail: {
					status: '待审核',
					title: '村口的垃圾堆需要整理',
					name: '广工',
					time: 1690253914941,
					content: '村口的垃圾堆已经有三天了，夏天快到了，需要尽快处理！',
					pic: [
						'https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684',
						'https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684',
						'https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684'
					]
				}
			}
		},
		onLoad(option) {
			// this.detail = JSON.parse(decodeURIComponent(option.data))
		},
		onShow() {},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.yard-detail {
	.content {
		.top, .info, .success, .error {
			padding: 0 36rpx;
			border-top: 12rpx solid #F6F6F6;
			.inline {
				display: flex;
				position: relative;
				padding: 32rpx 0;
				border-bottom: 2rpx solid #F6F6F6;
				.label {
					font-size: 28rpx;
					color: #666666;
					line-height: 40rpx;
					letter-spacing: 1px;
				}
				.val {
					font-size: 28rpx;
					color: #000000;
					line-height: 40rpx;
					letter-spacing: 1px;
				}
				.iconfont {
					position: absolute;
					font-size: 75rpx;
					color: #3DB62F;
					top: 14rpx;
					right: 29rpx;
				}
				.error-icon {
					color: #F4474B;
				}
				.warning-icon {
					color: #FA7E2A;
				}
			}
			.block {
				.label {
					margin: 32rpx 0 24rpx;
					font-size: 28rpx;
					color: #666666;
					line-height: 40rpx;
					letter-spacing: 1px;
				}
				.val {
					padding: 30rpx 22rpx;
					font-size: 28rpx;
					color: #000000;
					background: #F9F9F9;
					border-radius: 8rpx;
					line-height: 44rpx;
					letter-spacing: 1px;
				}
				.img-box {
					display: flex;
					.img {
						width: 202rpx;
						height: 202rpx;
						margin-bottom: 32rpx;
						margin-right: 36rpx;
					}
					.img:nth-child(3n) {
						margin-right: 0;
					}
				}
			}
		}
		.error, .success {
			padding-bottom: 109rpx;
		}
	}
}
</style>
