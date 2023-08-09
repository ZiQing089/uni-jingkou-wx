<template>
	<view class="page-container map">
		<NavBar :title="'旅游地图'" :border="true" :use-bg="true" />
		<movable-area scale-area class="movable-area">
			<movable-view :x="x" :y="0" direction="all" scale="true" scale-min="1" scale-max="4" :scale-value="scale" class="movable-view" @change="onChange" @scale="onScale">
				<view style="width: 100vh;height: 100vh; position: relative; z-index: 12;">
					<image style="width: 100%; height: 100%;" src="https://files.zz-tech.cn/app-files/images/jingkou/mapjingkou.jpg" mode="scaleToFill"></image>
					<image src="../../static/1000px.gif"  style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1;" mode="scaleToFill"></image>
					<!-- <view v-for="(item, index) in list" :key="index" :class="item.itemClass" @click="toClick(item)"></view> -->
				</view>
			</movable-view>
		</movable-area>
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
				scale: 1,
				x: 0,
				list: [
					{
						itemClass: 'laoyuchang'
					},
					{
						itemClass: 'canting'
					},
					{
						itemClass: 'youchuanmatou1'
					},
					{
						itemClass: 'youchuanmatou2'
					},
					{
						itemClass: 'huahai1'
					},
					{
						itemClass: 'huahai2'
					},
					{
						itemClass: 'yebaozhongxin'
					},
					{
						itemClass: 'mifenggongfang'
					},
					{
						itemClass: 'luyingjidi'
					},
					{
						itemClass: 'diaoyuqu'
					},
					{
						itemClass: 'liaowangtai'
					},
					{
						itemClass: 'wenhualitang'
					},
					{
						itemClass: 'shucaicaizhai'
					},
					{
						itemClass: 'minsu' 
					},
					{
						itemClass: 'gongfushangdian'
					},
					{
						itemClass: 'jingkouguqiao'
					},
					{
						itemClass: 'wudigumiao'
					},
					{
						itemClass: 'cunwei'
					},
					{
						itemClass: 'qixingyizhan'
					},
					{
						itemClass: 'hulianwangyiyuan'
					},
					{
						itemClass: 'fuwuzhongxin'
					},
					{
						itemClass: 'cunrukoupaifang'
					}
				]
			}
		},
		onShow() {
			let getWindowInfo = uni.getWindowInfo()
			this.x = -getWindowInfo.windowHeight/2/2
		},
		methods: {
			onChange(e) {
				// console.log(e.detail)
			},
			onScale(e) {
				// console.log(e.detail)
			},
			toClick(item) {
				console.log(item.itemClass)
			}
		}
	}
</script>

<style lang="scss" scoped>
.map {
	.movable-area {
		position: relative;
		z-index: 9999;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		.movable-view {
			width: 100vh;
			height: 100vh;
			display: -webkit-flex;
			justify-content: center;
			align-items: center;
			.laoyuchang {
				position: absolute;
				top: 6%;
				left: 53.6%;
				width: 60rpx;
				height: 20rpx;
			}
			.canting {
				position: absolute;
				top: 15%;
				left: 46.4%;
				width: 110rpx;
				height: 20rpx;
			}
			.youchuanmatou1 {
				position: absolute;
				top: 18.9%;
				left: 51.3%;
				width: 80rpx;
				height: 20rpx;
			}
			.youchuanmatou2 {
				position: absolute;
				top: 29.4%;
				left: 50%;
				width: 80rpx;
				height: 20rpx;
			}
			.huahai1 {
				position: absolute;
				top: 31%;
				left: 46.8%;
				width: 40rpx;
				height: 20rpx;
			}
			.huahai2 {
				position: absolute;
				top: 49.8%;
				left: 51.2%;
				width: 40rpx;
				height: 20rpx;
			}
			.yebaozhongxin {
				position: absolute;
				top: 30.9%;
				left: 33.8%;
				width: 180rpx;
				height: 20rpx;
			}
			.mifenggongfang {
				position: absolute;
				top: 34.7%;
				left: 34%;
				width: 80rpx;
				height: 20rpx;
			}
			.luyingjidi {
				position: absolute;
				top: 35%;
				left: 47%;
				width: 85rpx;
				height: 20rpx;
			}
			.diaoyuqu {
				position: absolute;
				top: 42.8%;
				left: 53%;
				width: 65rpx;
				height: 20rpx;
			}
			.liaowangtai {
				position: absolute;
				top: 47.5%;
				left: 50.5%;
				width: 68rpx;
				height: 20rpx;
			}
			.wenhualitang {
				position: absolute;
				top: 53.9%;
				left: 36%;
				width: 80rpx;
				height: 20rpx;
			}
			.shucaicaizhai {
				position: absolute;
				top: 50.9%;
				left: 27.9%;
				width: 120rpx;
				height: 20rpx;
			}
			.minsu {
				position: absolute;
				top: 47.8%;
				left: 39%;
				width: 80rpx;
				height: 20rpx;
			}
			.gongfushangdian {
				position: absolute;
				top: 61.9%;
				left: 45.2%;
				width: 80rpx;
				height: 20rpx;
			}
			.jingkouguqiao {
				position: absolute;
				top: 63%;
				left: 50.9%;
				width: 85rpx;
				height: 20rpx;
			}
			.wudigumiao {
				position: absolute;
				top: 62.5%;
				left: 56.9%;
				width: 85rpx;
				height: 20rpx;
			}
			.cunwei {
				position: absolute;
				top: 54.7%;
				left: 83.9%;
				width: 50rpx;
				height: 20rpx;
			}
			.qixingyizhan {
				position: absolute;
				top: 56.7%;
				left: 83%;
				width: 80rpx;
				height: 20rpx;
			}
			.hulianwangyiyuan {
				position: absolute;
				top: 58.5%;
				left: 82.3%;
				width: 100rpx;
				height: 20rpx;
			}
			.fuwuzhongxin {
				position: absolute;
				top: 60.3%;
				left: 82%;
				width: 115rpx;
				height: 20rpx;
			}
			.cunrukoupaifang {
				position: absolute;
				top: 67.7%;
				left: 87%;
				width: 99rpx;
				height: 20rpx;
			}
		}
	}
}
</style>
