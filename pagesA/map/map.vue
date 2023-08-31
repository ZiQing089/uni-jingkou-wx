<template>
	<view class="page-container map">
		<NavBar :title="'旅游地图'" :border="true" :use-bg="true" />
		<movable-area scale-area class="movable-area">
			<movable-view :x="x" :y="0" direction="all" scale="true" scale-min="1" scale-max="4" :scale-value="scale" class="movable-view" @change="onChange" @scale="onScale">
				<view style="width: 100vh;height: 100vh; position: relative; z-index: 12;">
					<image style="width: 100%; height: 100%;" src="https://files.zz-tech.cn/app-files/images/jingkou/mapditu.jpg" mode="scaleToFill"></image>
					<image src="https://files.zz-tech.cn/app-files/images/jingkou/mapyanzi.gif"  style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 6;" mode="scaleToFill"></image>
					<image src="https://files.zz-tech.cn/app-files/images/jingkou/mapyun.gif"  style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 9;" mode="scaleToFill"></image>
					<image src="https://files.zz-tech.cn/app-files/images/jingkou/mapluxian.gif"  style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 3;" mode="scaleToFill"></image>
					<view v-for="(item, index) in mock" :key="index" :class="item.name ? item.itemClass : ''" @click="toClick(item)">{{ item.name }}</view>
				</view>
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
	import NavBar from "@/components/NavBar.vue"
	import { mapList } from '@/api/map.js'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				scale: 1,
				x: 0,
				mock: [
					{
						itemClass: 'laoyuchang',
						name: '',
						nickName: '老鱼场'
					},
					{
						itemClass: 'canting',
						name: '',
						nickName: '餐厅(食堂)'
					},
					{
						itemClass: 'youchuanmatou1',
						name: '',
						nickName: '游船码头'
					},
					{
						itemClass: 'youchuanmatou2',
						name: '',
						nickName: '游船码头'
					},
					{
						itemClass: 'huahai1',
						name: '',
						nickName: '花海'
						
					},
					{
						itemClass: 'huahai2',
						name: '',
						nickName: '花海'
					},
					{
						itemClass: 'yebaozhongxin',
						name: '',
						nickName: '野保中心-萌宠互动区'
					},
					{
						itemClass: 'mifenggongfang',
						name: '',
						nickName: '蜜蜂工坊'
					},
					{
						itemClass: 'luyingjidi',
						name: '',
						nickName: '露营基地'
					},
					{
						itemClass: 'diaoyuqu',
						name: '',
						nickName: '钓鱼区'
					},
					{
						itemClass: 'liaowangtai',
						name: '',
						nickName: '瞭望台'
					},
					{
						itemClass: 'wenhualitang',
						name: '',
						nickName: '文化礼堂'
					},
					{
						itemClass: 'shucaicaizhai',
						name: '',
						nickName: '蔬菜采摘基地'
					},
					{
						itemClass: 'minsu',
						name: '',
						nickName: '泾口民宿'
					},
					{
						itemClass: 'gongfushangdian',
						name: '',
						nickName: '共富商店'
					},
					{
						itemClass: 'jingkouguqiao',
						name: '',
						nickName: '泾口古桥'
					},
					{
						itemClass: 'wudigumiao',
						name: '',
						nickName: '关帝古庙'
					},
					{
						itemClass: 'cunwei',
						name: '',
						nickName: '村委'
					},
					{
						itemClass: 'qixingyizhan',
						name: '',
						nickName: '骑行驿站'
					},
					{
						itemClass: 'hulianwangyiyuan',
						name: '',
						nickName: '互联网医院'
					},
					{
						itemClass: 'fuwuzhongxin',
						name: '',
						nickName: '服务中心'
					},
					{
						itemClass: 'cunrukoupaifang',
						name: '',
						nickName: '村入口牌坊'
					}
				],
				list: []
			}
		},
		onShow() {
			let getWindowInfo = uni.getWindowInfo()
			this.x = -getWindowInfo.windowHeight/2/2
			this.init()
		},
		methods: {
			init() {
				mapList().then(res => {
					const self = this
					self.list = res.data
					self.mock.forEach((item, index) => {
						self.list.forEach((e, i) => {
							if(item.nickName == e.name) {
								item.name = e.name
								item.introduce = e.introduce
								item.pics = e.pics
							}
						})
					})
				})
			},
			onChange(e) {
				// console.log(e.detail)
			},
			onScale(e) {
				// console.log(e.detail)
			},
			toClick(item) {
				uni.navigateTo({
					url: `/pagesA/map/detail?data=${encodeURIComponent(JSON.stringify(item))}`
				})
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
			.laoyuchang, .canting, .youchuanmatou1, .youchuanmatou2, .huahai1, .huahai2, .yebaozhongxin, .mifenggongfang, .luyingjidi, .diaoyuqu, .liaowangtai, .wenhualitang, .shucaicaizhai, .minsu, .gongfushangdian, .jingkouguqiao, .wudigumiao, .cunwei, .qixingyizhan, .hulianwangyiyuan, .fuwuzhongxin, .cunrukoupaifang {
				position: absolute;
				top: 6%;
				left: 53.6%;
				background: #9E4645;
				box-shadow: 0rpx 2rpx 4rpx 0rpx rgba(0,0,0,0.1);
				border-radius: 15rpx;
				font-size: 16rpx;
				z-index: 20;
				color: #FFFFFF;
				line-height: 24rpx;
				letter-spacing: 2px;
				padding: 2rpx 12rpx;
				box-sizing: border-box;
				border: 1rpx solid #F4EEC3;
			}
			.canting {
				position: absolute;
				top: 15%;
				left: 46.4%;
			}
			.youchuanmatou1 {
				position: absolute;
				top: 18.9%;
				left: 51.3%;
			}
			.youchuanmatou2 {
				position: absolute;
				top: 29.4%;
				left: 50%;
			}
			.huahai1 {
				position: absolute;
				top: 31%;
				left: 46.8%;
			}
			.huahai2 {
				position: absolute;
				top: 49.8%;
				left: 51.2%;
			}
			.yebaozhongxin {
				position: absolute;
				top: 30.9%;
				left: 33.8%;
			}
			.mifenggongfang {
				position: absolute;
				top: 34.7%;
				left: 34%;
			}
			.luyingjidi {
				position: absolute;
				top: 35%;
				left: 47%;
			}
			.diaoyuqu {
				position: absolute;
				top: 42.8%;
				left: 53%;
			}
			.liaowangtai {
				position: absolute;
				top: 47.5%;
				left: 50.5%;
			}
			.wenhualitang {
				position: absolute;
				top: 53.9%;
				left: 36%;
			}
			.shucaicaizhai {
				position: absolute;
				top: 50.9%;
				left: 27.9%;
			}
			.minsu {
				position: absolute;
				top: 47.8%;
				left: 39%;
			}
			.gongfushangdian {
				position: absolute;
				top: 61.9%;
				left: 45.2%;
			}
			.jingkouguqiao {
				position: absolute;
				top: 63%;
				left: 50.9%;
			}
			.wudigumiao {
				position: absolute;
				top: 62.5%;
				left: 56.9%;
			}
			.cunwei {
				position: absolute;
				top: 54.7%;
				left: 83.9%;
			}
			.qixingyizhan {
				position: absolute;
				top: 56.7%;
				left: 83%;
			}
			.hulianwangyiyuan {
				position: absolute;
				top: 58.5%;
				left: 82.3%;
			}
			.fuwuzhongxin {
				position: absolute;
				top: 60.3%;
				left: 82%;
			}
			.cunrukoupaifang {
				position: absolute;
				top: 67.7%;
				left: 87%;
			}
		}
	}
}
</style>
