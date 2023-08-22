<template>
	<view class="page-container record">
		<view class="record-header" :style="{ height: height }">
			<NavBar :title="'健康档案'" :border="true" :use-transparent="true" :is-white="true" />
		</view>
		<template v-if="!noData">
			<view class="title">
				个人信息
			</view>
			<view class="top">
				<view class="inline" style="margin-top: 0;">
					<view class="label">
						人员姓名：
					</view>
					<view class="val">
						{{ detail.name }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						人员性别：
					</view>
					<view class="val">
						{{ detail.gender }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						人员年龄：
					</view>
					<view class="val">
						{{ detail.age }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						证件号码：
					</view>
					<view class="val">
						{{ detail.idCard }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						手机号码：
					</view>
					<view class="val">
						{{ detail.phone }}
					</view>
				</view>
			</view>
			<view class="title">
				健康信息
			</view>
			<view class="bottom">
				<view class="inline">
					<view class="label">
						档案完善度：
					</view>
					<view class="val">
						{{ detail.percent }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						管理地址：
					</view>
					<view class="val">
						{{ detail.adminAddress }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						所属网络：
					</view>
					<view class="val">
						{{ detail.locationAddress }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						签约情况：
					</view>
					<view class="val">
						{{ detail.signStatus }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						签约医生：
					</view>
					<view class="val">
						{{ detail.signDoctor }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						签约团队：
					</view>
					<view class="val">
						{{ detail.signTeam }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						签约机构：
					</view>
					<view class="val">
						{{ detail.signClinic }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						签约时间：
					</view>
					<view class="val">
						{{ detail.signDate }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						联系人：
					</view>
					<view class="val">
						{{ detail.contact }}
					</view>
				</view>
				<view class="inline">
					<view class="label">
						联系电话：
					</view>
					<view class="val">
						{{ detail.contactPhone }}
					</view>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="no-data">
				<view style="text-align: center;">
					<image src="https://files.zz-tech.cn/app-files/images/jingkou/nodata.png" class="img" mode="scaleToFill"></image>
				</view>
				<view class="text">
					暂无您的健康档案
				</view>
				<view class="text">
					请前往对应的机构完善
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { getInfo } from "@/api/health.js"
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				height: '',
				noData: false,
				detail: {}
			}
		},
		onLoad() {
			const { top, height, width } = wx.getMenuButtonBoundingClientRect();
			this.height = height + top + 7 + 'px'
			this.init()
		},
		methods: {
			// 初始化页面
			init() {
				uni.showLoading({
					title: '正在加载'
				})
				getInfo().then(res => {
					uni.hideLoading()
					if(res.success) {
						this.detail = res.data
					} else {
						this.noData = true
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.record {
	.record-header {
		height: 176rpx;
		background: #B94333;
		box-shadow: 0rpx 2rpx 0rpx 0rpx rgba(0,0,0,0.1);
	}
	.title {
		height: 104rpx;
		padding-left: 24rpx;
		background: #F6F6F6;
		font-size: 32rpx;
		color: #333333;
		line-height: 104rpx;
	}
	.top, .bottom {
		background: #FFFFFF;
		padding: 32rpx 24rpx;
		.inline {
			margin-top: 20rpx;
			display: flex;
			.label {
				font-size: 28rpx;
				color: #000000;
				height: 40rpx;
				line-height: 40rpx;
				letter-spacing: 1px;
				margin-right: 12rpx;
			}
			.val {
				font-size: 28rpx;
				height: 40rpx;
				color: #000000;
				line-height: 40rpx;
				letter-spacing: 1px;
			}
		}
	}
	
	.no-data {
		padding-top: 400rpx;
		.img {
			width: 374rpx;
			height: 288rpx;
			margin: 0 auto 32rpx;
		}
		.text {
			font-size: 28rpx;
			text-align: center;
			color: #999999;
			line-height: 40rpx;
			letter-spacing: 1px;
		}
	}
}
</style>
