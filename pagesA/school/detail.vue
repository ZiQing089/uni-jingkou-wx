<template>
	<view class="page-container school-detail">
		<NavBar :title="'文化学堂'" :border="true" />
		<view class="top">
			<icon v-if="detail.status.description === '报名中'" class="iconfont">&#xe666;</icon>
			<icon v-if="detail.status.description === '已结束'" class="iconfont end-icon">&#xe665;</icon>
			<icon v-if="detail.status.description === '已报满'" class="iconfont finish-icon">&#xe664;</icon>
			<view class="title">
				{{ detail.name }}
			</view>
			<view class="val">
				开课时间：{{ detail.startTime | formatMin }}
			</view>
			<view class="val">
				截止时间：{{ detail.signUpEndTime | formatMin }}
			</view>
			<view class="val">
				课程地点：{{ detail.address }}
			</view>
			<view class="val">
				计划人数：{{ detail.totalCount }}
			</view>
			<view class="val" style="margin: 0; color: #B94333;">
				参加人数：{{ detail.signUpCount }}
			</view>
		</view>
		<view class="bottom">
			{{ detail.introduce }}
		</view>
		<view class="btn-box">
			<view v-if="detail.status.description === '报名中'" :class="detail.signUp ? 'btn-border enroll' : 'btn-border'" @click="!detail.signUp && enroll(detail.id)">
				<view :class="detail.signUp ? 'btn enroll' : 'btn'">
					{{ detail.signUp ? '已报名' : '立即报名' }}
				</view>
			</view>
			<view v-if="detail.status.description === '已报满'" :class="detail.signUp ? 'btn-border enroll' : 'btn-border finish'">
				<view :class="detail.signUp ? 'btn enroll' : 'btn finish'">
					{{ detail.signUp ? '已报名' : '立即报名' }}
				</view>
			</view>
			<view v-if="detail.status.description === '已结束'" class="btn-border finish">
				<view class="btn finish">
					已结束
				</view>
			</view>
			<van-toast id="van-toast" />
		</view>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import Toast from '@/wxcomponents/vant/dist/toast/toast'
	import { signUp } from '@/api/promote.js'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				detail: {}
			}
		},
		onLoad(option) {
			this.detail = JSON.parse(decodeURIComponent(option.data))
		},
		methods: {
			// 报名
			enroll(id) {
				console.log(id)
				signUp({ id: id }).then(res => {
					Toast('报名成功！可在“我的-我的报名”中进行管理');
					setTimeout(() => {
						uni.navigateBack()
					}, 2000)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.school-detail {
	.top {
		padding: 40rpx 24rpx;
		border-bottom: 12rpx solid #F6F6F6;
		position: relative;
		.title {
			font-size: 44rpx;
			font-weight: bold;
			color: #333333;
			line-height: 66rpx;
			letter-spacing: 1px;
			margin-bottom: 40rpx;
		}
		.val {
			font-size: 26rpx;
			margin-bottom: 12rpx;
			color: #000000;
			line-height: 44rpx;
			letter-spacing: 1px;
		}
		.iconfont {
			position: absolute;
			font-size: 120rpx;
			color: #3DB62F;
			top: 40rpx;
			right: 40rpx;
		}
		.finish-icon {
			color: #F4474B;
		}
		.end-icon {
			color: #999999;
		}
	}
	.bottom {
		padding: 32rpx 24rpx 198rpx;
		font-size: 28rpx;
		color: #666666;
		line-height: 44rpx;
		letter-spacing: 1px;
	}
	.btn-box {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 4rpx 28rpx 0;
		height: 166rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -4rpx 12rpx 0rpx rgba(0,0,0,0.05);
		.btn-border {
			border-radius: 44rpx;
			border: 2rpx solid #B94333;
			.btn {
				background: #B94333;
				height: 72rpx;
				line-height: 72rpx;
				font-size: 32rpx;
				color: #FFFFFF;
				text-align: center;
				border-radius: 44rpx;
				margin: 4rpx;
			}
			.finish {
				background: #DEDEDE;
				color: #999999;
			}
			.enroll {
				background: #9B7A76;
			}
		}
		.finish {
			border: 2rpx solid #DEDEDE;
		}
		.enroll {
			border: 2rpx solid #9B7A76;
		}
	}
}
</style>
