<template>
	<view class="page-container delicacy-detail">
		<NavBar :title="'特产介绍'" :border="true" />
		<view class="content">
			<view class="img">
				<van-image
				  width="100%"
				  height="100%"
				  fit="cover"
				  :src="detail.img"
				/>
			</view>
			<view class="title">
				{{ detail.title }}
			</view>
			<view class="info">
				<view class="left">
					发布时间：{{ detail.time }}
				</view>
				<view class="right">
					<image src="../../static/img/jingkou/grayNormal.png" class="img-icon" mode="scaleToFill"></image>
					{{ detail.num }}
				</view>
			</view>
			<view class="text">
				{{ detail.text }}
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
					img: 'https://img2.baidu.com/it/u=378814620,2758073542&fm=253&fmt=auto&app=120&f=JPEG?w=1216&h=684',
					title: '老年活动中心',
					phone: '0575-82049777',
					num: '1244',
					time: '2023-04-23',
					address: '浙江省绍兴市上虞区泾肖南路30号',
					text: '老年活动中心集休闲、娱乐、健身、文化、学习于一体，突出文化休动场所。中心一直坚持以为老年人服务为宗旨性化服务赢得了老年朋友的好口碑，也吸引越来越多的人参与进来。2006年，中心被命名为我省首批四星级老年活动中心，被誉为老年人的“温馨家园”。中心内部设计充分体现了浓重的“文化气息、体育色彩”，设有书画室、茶室、健身房等娱乐、教学活动场所。'
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.delicacy-detail {
	.content {
		.img {
			height: 464rpx;
		}
		.title {
			height: 66rpx;
			font-size: 44rpx;
			font-weight: bold;
			color: #333333;
			line-height: 66rpx;
			letter-spacing: 1px;
			margin: 40rpx 0;
			text-align: center;
			overflow: hidden;
		}
		.info {
			display: flex;
			justify-content: center;
			.left {
				font-size: 26rpx;
				color: #999999;
				line-height: 44rpx;
				letter-spacing: 1px;
			}
			.right {
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: #999999;
				line-height: 36rpx;
				letter-spacing: 4px;
				.img-icon {
					width: 32rpx;
					height: 32rpx;
					margin-right: 12rpx;
					margin-left: 60rpx;
				}
			}
		}
		.text {
			padding: 32rpx 24rpx 98rpx;
			font-size: 28rpx;
			color: #666666;
			line-height: 44rpx;
			letter-spacing: 1px;
		}
	}
}
</style>
