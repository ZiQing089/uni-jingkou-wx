<template>
	<view class="page-container record">
		<view class="record-header" :style="{ height: height }">
			<NavBar :title="'健康档案'" :border="true" :use-transparent="true" :is-white="true" />
		</view>
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
					{{ detail.id }}
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
					{{ detail.persan }}
				</view>
			</view>
			<view class="inline">
				<view class="label">
					管理地址：
				</view>
				<view class="val">
					{{ detail.address }}
				</view>
			</view>
			<view class="inline">
				<view class="label">
					所属网络：
				</view>
				<view class="val">
					{{ detail.inter }}
				</view>
			</view>
			<view class="inline">
				<view class="label">
					签约情况：
				</view>
				<view class="val">
					{{ detail.qingkuang }}
				</view>
			</view>
			<view class="inline">
				<view class="label">
					签约医生：
				</view>
				<view class="val">
					{{ detail.doctor }}
				</view>
			</view>
			<view class="inline">
				<view class="label">
					签约团队：
				</view>
				<view class="val">
					{{ detail.team }}
				</view>
			</view>
			<view class="inline">
				<view class="label">
					签约机构：
				</view>
				<view class="val">
					{{ detail.company }}
				</view>
			</view>
			<view class="inline">
				<view class="label">
					签约时间：
				</view>
				<view class="val">
					{{ detail.time | formatDate }}
				</view>
			</view>
			<view class="inline">
				<view class="label">
					联系人：
				</view>
				<view class="val">
					{{ detail.lianxi }}
				</view>
			</view>
			<view class="inline">
				<view class="label">
					联系电话：
				</view>
				<view class="val">
					{{ detail.lianxiphone }}
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
				height: '',
				detail: {
					name: '广工',
					gender: '男',
					age: '31',
					id: '847389579274923',
					phone: '15678884949',
					persan: '100%',
					address: '邯郸茶楼',
					inter: '邯郸村委会',
					qingkuang: '已签约',
					doctor: '叶主任',
					team: '中哲数字部门',
					company: '中哲',
					time: '1690526795927',
					lianxi: '李工',
					lianxiphone: '17899985443'
				}
			}
		},
		onShow() {
			const { top, height, width } = wx.getMenuButtonBoundingClientRect();
			this.height = height + top + 7 + 'px'
		},
		methods: {
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
}
</style>
