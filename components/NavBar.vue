<template>
	<vanSticky>
		<van-nav-bar
			:z-index="99"
			:border="border"
			:custom-style="useTransparent && 'background-color: transparent;' || useBg && 'background-color: #ffffff; background-image: url(https://files.zz-tech.cn/app-files/images/jingkou/navbg.png); background-repeat: no-repeat; background-size: 100% 100%;'">
			<view v-if="showEmit" slot="left" :class="isWhite ? 'isWhite' : ''" style="display: flex; align-items: center;" @click="back">
				<slot name="default">
					<van-icon name="arrow-left" size="28rpx" /><span :class="isWhite ? 'back isWhite' : 'back'">返回</span>
				</slot>
			</view>
			<view slot="title" style="display: flex; justify-content: center; align-items: center;">
				<text :class="isWhite ? 'left-text-style isWhite' : 'left-text-style'">{{ title }}</text>
			</view>
		</van-nav-bar>
	</vanSticky>
</template>

<script>
import vanNavBar from '@/wxcomponents/vant/dist/nav-bar/index'
import vanIcon from '@/wxcomponents/vant/dist/icon/index'
import vanSticky from '@/wxcomponents/vant/dist/sticky/index'
export default {
	components: {
		vanNavBar,
		vanIcon,
		vanSticky
	},
	props: {
		title: { // 标题
			type: String,
			require: true
		},
		border: { // 是否显示边框
			type: Boolean,
			default: false
		},
		normalBg: { // 使用白色底色
			type: Boolean,
			default: false
		},
		useBg: { // 使用背景
			type: Boolean,
			default: false
		},
		useTransparent: { // 背景是否透明
			type: Boolean,
			default: false
		},
		leftEmit: { // 是否点击左侧使用自定义方法
			type: Boolean,
			default: false
		},
		isWhite: {
			type: Boolean,
			default: false
		},
		showEmit: { // 是否显示回退箭头 
			type: Boolean,
			default: true
		},
		upData: {
			type: Object,
			default: () => {}
		}
	},
	methods: {
		clickLeft(e) {
			console.log(111)
			// this.back()
		},
		// 返回上一页
		back() {
			if (getCurrentPages().length > 1) {
				uni.navigateBack({
					delta: 1
				})
				uni.$emit('updataList', this.upData)
			} else {
				uni.redirectTo({
					url: '/pages/index/index'
				})
			}

		}
	}
}
</script>

<style lang="scss" scoped>
.custom-class {
	background: #000000 !important;
}
.left-text-style {
	font-size: 36rpx;
	color: #000000;
	letter-spacing: 1rpx;
	font-weight: 400;
}
.isWhite {
	color: #ffffff !important;
}
.back {
	font-size: 28rpx;
	color: #000000;
	line-height: 40rpx;
	letter-spacing: 1px;
}
/deep/ {
	.van-nav-bar {
		box-shadow: 4rpx 4rpx 12rpx 0rpx rgba(0,0,0,0.05);
		z-index: 2 !important;
	}
}
/deep/ {
	.van-nav-bar__content {
		box-shadow: 4rpx 4rpx 12rpx 0rpx rgba(0,0,0,0.05);
		z-index: 2 !important;
	}
}
</style>
