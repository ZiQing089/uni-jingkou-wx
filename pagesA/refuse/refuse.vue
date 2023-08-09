<template>
	<view class="page-container refuse">
		<NavBar :title="title" :use-bg="true" :border="true" />
		<view class="content">
			<view class="search">
				<van-search :value="value" placeholder="请输入搜索关键词" @search="onSearch" />
			</view>
			<view v-if="!value" class="card-box">
				<template v-for="(item, index) in cardList">
					<view :class="item.active ? 'item active' : 'item'" :key="index" @click="clickCard(item)">
						<view class="text">
							{{ item.text }}
						</view>
					</view>
				</template>
			</view>
			<view class="list">
				<template v-if="value">
					<template v-for="(item, index) in newList">
						<view class="list-item" :key="index">
							<view class="left">
								{{ item.text }}
							</view>
							<view class="right">
								#{{ item.title }}#
							</view>
						</view>
					</template>
				</template>
				<template v-else>
					<template v-for="(item, index) in arrList">
						<view class="list-item" :key="index">
							{{ item.text }}
						</view>
					</template>
				</template>
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
				title: '',
				value: '',
				bgHeight: '',
				newList: [],
				arrList: [{
						text: '磁盘',
						title: '可回收物'
					},
					{
						text: '唱片',
						title: '可回收物'
					},
					{
						text: '充电头',
						title: '可回收物'
					},
					{
						text: '金属容器',
						title: '可回收物'
					},
					{
						text: '玻璃',
						title: '可回收物'
					},
					{
						text: 'U盘',
						title: '可回收物'
					},
					{
						text: '硬盘',
						title: '可回收物'
					},
					{
						text: '网线',
						title: '可回收物'
					},
					{
						text: '光盘',
						title: '可回收物'
					},
					{
						text: '磁带',
						title: '可回收物'
					},
					{
						text: '画板',
						title: '可回收物'
					},
					{
						text: '相框',
						title: '可回收物'
					},
					{
						text: '画框',
						title: '可回收物'
					},
					{
						text: '塑料衣架',
						title: '可回收物'
					},
					{
						text: '塑料挂钩',
						title: '可回收物'
					},
					{
						text: '笔的外壳',
						title: '可回收物'
					},
					{
						text: '塑料文件夹',
						title: '可回收物'
					},
					{
						text: '文件盒',
						title: '可回收物'
					},
					{
						text: '文件套',
						title: '可回收物'
					},
					{
						text: '塑料画笔',
						title: '可回收物'
					},
					{
						text: '乐高',
						title: '可回收物'
					},
					{
						text: '塑料车',
						title: '可回收物'
					},
					{
						text: '海洋球',
						title: '可回收物'
					},
					{
						text: '塑料花架',
						title: '可回收物'
					},
					{
						text: '泡沫填充物',
						title: '可回收物'
					},
					{
						text: '塑料盆',
						title: '可回收物'
					},
					{
						text: '塑料饭盒',
						title: '可回收物'
					},
					{
						text: '塑料杯',
						title: '可回收物'
					},
					{
						text: '塑料玩具',
						title: '可回收物'
					},
					{
						text: '雪花片',
						title: '可回收物'
					},
					{
						text: '纸板',
						title: '可回收物'
					},
					{
						text: '利乐包',
						title: '可回收物'
					},
					{
						text: '不直接接触药品的纸质外包装',
						title: '可回收物'
					},
					{
						text: '塑料收纳箱',
						title: '可回收物'
					},
					{
						text: '塑料容器',
						title: '可回收物'
					},
					{
						text: '废弃报纸',
						title: '可回收物'
					},
					{
						text: '传单',
						title: '可回收物'
					},
					{
						text: '书本杂志',
						title: '可回收物'
					},
					{
						text: '废纸盒',
						title: '可回收物'
					},
					{
						text: '纸箱',
						title: '可回收物'
					}
				],
				cardList: [{
						text: '可回收物',
						active: true,
						arrList: [{
								text: '磁盘',
								title: '可回收物'
							},
							{
								text: '唱片',
								title: '可回收物'
							},
							{
								text: '充电头',
								title: '可回收物'
							},
							{
								text: '金属容器',
								title: '可回收物'
							},
							{
								text: '玻璃',
								title: '可回收物'
							},
							{
								text: 'U盘',
								title: '可回收物'
							},
							{
								text: '硬盘',
								title: '可回收物'
							},
							{
								text: '网线',
								title: '可回收物'
							},
							{
								text: '光盘',
								title: '可回收物'
							},
							{
								text: '磁带',
								title: '可回收物'
							},
							{
								text: '画板',
								title: '可回收物'
							},
							{
								text: '相框',
								title: '可回收物'
							},
							{
								text: '画框',
								title: '可回收物'
							},
							{
								text: '塑料衣架',
								title: '可回收物'
							},
							{
								text: '塑料挂钩',
								title: '可回收物'
							},
							{
								text: '笔的外壳',
								title: '可回收物'
							},
							{
								text: '塑料文件夹',
								title: '可回收物'
							},
							{
								text: '文件盒',
								title: '可回收物'
							},
							{
								text: '文件套',
								title: '可回收物'
							},
							{
								text: '塑料画笔',
								title: '可回收物'
							},
							{
								text: '乐高',
								title: '可回收物'
							},
							{
								text: '塑料车',
								title: '可回收物'
							},
							{
								text: '海洋球',
								title: '可回收物'
							},
							{
								text: '塑料花架',
								title: '可回收物'
							},
							{
								text: '泡沫填充物',
								title: '可回收物'
							},
							{
								text: '塑料盆',
								title: '可回收物'
							},
							{
								text: '塑料饭盒',
								title: '可回收物'
							},
							{
								text: '塑料杯',
								title: '可回收物'
							},
							{
								text: '塑料玩具',
								title: '可回收物'
							},
							{
								text: '雪花片',
								title: '可回收物'
							},
							{
								text: '纸板',
								title: '可回收物'
							},
							{
								text: '利乐包',
								title: '可回收物'
							},
							{
								text: '不直接接触药品的纸质外包装',
								title: '可回收物'
							},
							{
								text: '塑料收纳箱',
								title: '可回收物'
							},
							{
								text: '塑料容器',
								title: '可回收物'
							},
							{
								text: '废弃报纸',
								title: '可回收物'
							},
							{
								text: '传单',
								title: '可回收物'
							},
							{
								text: '书本杂志',
								title: '可回收物'
							},
							{
								text: '废纸盒',
								title: '可回收物'
							},
							{
								text: '纸箱',
								title: '可回收物'
							}
						]
					},
					{
						text: '有害垃圾',
						active: false,
						arrList: [{
								text: '充电电池',
								title: '有害垃圾'
							},
							{
								text: '移动电源',
								title: '有害垃圾'
							},
							{
								text: '废电路板',
								title: '有害垃圾'
							},
							{
								text: '自动变速器油',
								title: '有害垃圾'
							},
							{
								text: '齿轮油',
								title: '有害垃圾'
							},
							{
								text: '废X光片',
								title: '有害垃圾'
							},
							{
								text: 'CT光片',
								title: '有害垃圾'
							},
							{
								text: '铅蓄电池',
								title: '有害垃圾'
							},
							{
								text: '废日光灯管',
								title: '有害垃圾'
							},
							{
								text: '荧光灯管',
								title: '有害垃圾'
							},
							{
								text: '节能灯',
								title: '有害垃圾'
							},
							{
								text: '废发动机油',
								title: '有害垃圾'
							},
							{
								text: '制动器油',
								title: '有害垃圾'
							},
							{
								text: '废硒鼓墨盒及其包装物',
								title: '有害垃圾'
							},
							{
								text: '废杀虫剂',
								title: '有害垃圾'
							},
							{
								text: '消毒剂',
								title: '有害垃圾'
							},
							{
								text: '废清洁剂',
								title: '有害垃圾'
							},
							{
								text: '空调清洗剂',
								title: '有害垃圾'
							},
							{
								text: '废药品及其内包装',
								title: '有害垃圾'
							},
							{
								text: '废含汞温度计',
								title: '有害垃圾'
							},
							{
								text: '含汞血压计',
								title: '有害垃圾'
							},
							{
								text: '废油漆',
								title: '有害垃圾'
							},
							{
								text: '废笔芯',
								title: '有害垃圾'
							}
						],
					},
					{
						text: '厨余垃圾',
						active: false,
						arrList: [{
								text: '枯枝',
								title: '厨余垃圾'
							},
							{
								text: '残花枯草',
								title: '厨余垃圾'
							},
							{
								text: '西瓜',
								title: '厨余垃圾'
							},
							{
								text: '水果果肉',
								title: '厨余垃圾'
							},
							{
								text: '水果果皮',
								title: '厨余垃圾'
							},
							{
								text: '花卉',
								title: '厨余垃圾'
							},
							{
								text: '盆栽植物残枝落叶',
								title: '厨余垃圾'
							},
							{
								text: '宠物饲料',
								title: '厨余垃圾'
							},
							{
								text: '水果',
								title: '厨余垃圾'
							},
							{
								text: '葡萄',
								title: '厨余垃圾'
							},
							{
								text: '桔子',
								title: '厨余垃圾'
							},
							{
								text: '苹果',
								title: '厨余垃圾'
							},
							{
								text: '糖',
								title: '厨余垃圾'
							},
							{
								text: '香料',
								title: '厨余垃圾'
							},
							{
								text: '果酱',
								title: '厨余垃圾'
							},
							{
								text: '番茄酱',
								title: '厨余垃圾'
							},
							{
								text: '调味品',
								title: '厨余垃圾'
							},
							{
								text: '坚果',
								title: '厨余垃圾'
							},
							{
								text: '罐头食品',
								title: '厨余垃圾'
							},
							{
								text: '奶粉',
								title: '厨余垃圾'
							},
							{
								text: '面粉',
								title: '厨余垃圾'
							},
							{
								text: '面包粉',
								title: '厨余垃圾'
							},
							{
								text: '碎骨',
								title: '厨余垃圾'
							},
							{
								text: '茶叶渣',
								title: '厨余垃圾'
							},
							{
								text: '咖啡渣',
								title: '厨余垃圾'
							},
							{
								text: '糕饼',
								title: '厨余垃圾'
							},
							{
								text: '糖果',
								title: '厨余垃圾'
							},
							{
								text: '绿叶菜',
								title: '厨余垃圾'
							},
							{
								text: '根茎蔬菜',
								title: '厨余垃圾'
							},
							{
								text: '菌菇',
								title: '厨余垃圾'
							},
							{
								text: '剩菜剩饭',
								title: '厨余垃圾'
							},
							{
								text: '鱼骨',
								title: '厨余垃圾'
							},
							{
								text: '鱼',
								title: '厨余垃圾'
							},
							{
								text: '鱼鳞',
								title: '厨余垃圾'
							},
							{
								text: '虾',
								title: '厨余垃圾'
							},
							{
								text: '虾壳',
								title: '厨余垃圾'
							},
							{
								text: '鱿鱼',
								title: '厨余垃圾'
							},
							{
								text: '蛋',
								title: '厨余垃圾'
							},
							{
								text: '动物内脏',
								title: '厨余垃圾'
							},
							{
								text: '腊肉',
								title: '厨余垃圾'
							},
							{
								text: '午餐肉',
								title: '厨余垃圾'
							},
							{
								text: '蛋壳',
								title: '厨余垃圾'
							},
							{
								text: '鸡',
								title: '厨余垃圾'
							},
							{
								text: '鸭',
								title: '厨余垃圾'
							},
							{
								text: '猪',
								title: '厨余垃圾'
							},
							{
								text: '牛',
								title: '厨余垃圾'
							},
							{
								text: '羊肉',
								title: '厨余垃圾'
							},
							{
								text: '米',
								title: '厨余垃圾'
							},
							{
								text: '米饭',
								title: '厨余垃圾'
							},
							{
								text: '面',
								title: '厨余垃圾'
							},
							{
								text: '面包',
								title: '厨余垃圾'
							},
							{
								text: '豆类',
								title: '厨余垃圾'
							}
						]
					},
					{
						text: '其他垃圾',
						active: false,
						arrList: [{
								text: '防尘罩',
								title: '其他垃圾'
							},
							{
								text: '地毯',
								title: '其他垃圾'
							},
							{
								text: '踏垫',
								title: '其他垃圾'
							},
							{
								text: '钢丝球',
								title: '其他垃圾'
							},
							{
								text: '碱性电池',
								title: '其他垃圾'
							},
							{
								text: '碳性电池',
								title: '其他垃圾'
							},
							{
								text: '普通塑料购物袋',
								title: '其他垃圾'
							},
							{
								text: 'led灯',
								title: '其他垃圾'
							},
							{
								text: '各类绳子',
								title: '其他垃圾'
							},
							{
								text: '指南针',
								title: '其他垃圾'
							},
							{
								text: '雨伞',
								title: '其他垃圾'
							},
							{
								text: '雨衣',
								title: '其他垃圾'
							},
							{
								text: '火柴',
								title: '其他垃圾'
							},
							{
								text: '蜡烛',
								title: '其他垃圾'
							},
							{
								text: '沙袋',
								title: '其他垃圾'
							},
							{
								text: '拳击手套',
								title: '其他垃圾'
							},
							{
								text: '帐篷',
								title: '其他垃圾'
							},
							{
								text: '睡袋',
								title: '其他垃圾'
							},
							{
								text: '头灯',
								title: '其他垃圾'
							},
							{
								text: '球拍',
								title: '其他垃圾'
							},
							{
								text: '瑜伽垫',
								title: '其他垃圾'
							},
							{
								text: '非金属筷子',
								title: '其他垃圾'
							},
							{
								text: '汤勺',
								title: '其他垃圾'
							},
							{
								text: '碟子',
								title: '其他垃圾'
							},
							{
								text: '烘培用具',
								title: '其他垃圾'
							},
							{
								text: '各类球',
								title: '其他垃圾'
							},
							{
								text: '毛绒玩具',
								title: '其他垃圾'
							},
							{
								text: '枕头',
								title: '其他垃圾'
							},
							{
								text: '干燥剂',
								title: '其他垃圾'
							},
							{
								text: '镜子',
								title: '其他垃圾'
							},
							{
								text: '瓶塞',
								title: '其他垃圾'
							},
							{
								text: '袜子',
								title: '其他垃圾'
							},
							{
								text: '鞋垫',
								title: '其他垃圾'
							},
							{
								text: '帽子',
								title: '其他垃圾'
							},
							{
								text: '手套',
								title: '其他垃圾'
							},
							{
								text: '口罩',
								title: '其他垃圾'
							},
							{
								text: '遮光布',
								title: '其他垃圾'
							},
							{
								text: '桌布',
								title: '其他垃圾'
							},
							{
								text: '餐具',
								title: '其他垃圾'
							},
							{
								text: '杯子',
								title: '其他垃圾'
							},
							{
								text: '棉被',
								title: '其他垃圾'
							},
							{
								text: '内衣裤',
								title: '其他垃圾'
							},
							{
								text: '各类刷子',
								title: '其他垃圾'
							},
							{
								text: '面膜',
								title: '其他垃圾'
							},
							{
								text: '化妆刷',
								title: '其他垃圾'
							},
							{
								text: '化妆棉',
								title: '其他垃圾'
							},
							{
								text: '海绵',
								title: '其他垃圾'
							},
							{
								text: '搓澡巾',
								title: '其他垃圾'
							},
							{
								text: '剃须刀等个护用品',
								title: '其他垃圾'
							},
							{
								text: '浴帽',
								title: '其他垃圾'
							},
							{
								text: '浴球',
								title: '其他垃圾'
							},
							{
								text: '牙线',
								title: '其他垃圾'
							},
							{
								text: '牙膏',
								title: '其他垃圾'
							}
						]
					}
				],
				allList: [{
						text: '磁盘',
						title: '可回收物'
					},
					{
						text: '唱片',
						title: '可回收物'
					},
					{
						text: '充电头',
						title: '可回收物'
					},
					{
						text: '金属容器',
						title: '可回收物'
					},
					{
						text: '玻璃',
						title: '可回收物'
					},
					{
						text: 'U盘',
						title: '可回收物'
					},
					{
						text: '硬盘',
						title: '可回收物'
					},
					{
						text: '网线',
						title: '可回收物'
					},
					{
						text: '光盘',
						title: '可回收物'
					},
					{
						text: '磁带',
						title: '可回收物'
					},
					{
						text: '画板',
						title: '可回收物'
					},
					{
						text: '相框',
						title: '可回收物'
					},
					{
						text: '画框',
						title: '可回收物'
					},
					{
						text: '塑料衣架',
						title: '可回收物'
					},
					{
						text: '塑料挂钩',
						title: '可回收物'
					},
					{
						text: '笔的外壳',
						title: '可回收物'
					},
					{
						text: '塑料文件夹',
						title: '可回收物'
					},
					{
						text: '文件盒',
						title: '可回收物'
					},
					{
						text: '文件套',
						title: '可回收物'
					},
					{
						text: '塑料画笔',
						title: '可回收物'
					},
					{
						text: '乐高',
						title: '可回收物'
					},
					{
						text: '塑料车',
						title: '可回收物'
					},
					{
						text: '海洋球',
						title: '可回收物'
					},
					{
						text: '塑料花架',
						title: '可回收物'
					},
					{
						text: '泡沫填充物',
						title: '可回收物'
					},
					{
						text: '塑料盆',
						title: '可回收物'
					},
					{
						text: '塑料饭盒',
						title: '可回收物'
					},
					{
						text: '塑料杯',
						title: '可回收物'
					},
					{
						text: '塑料玩具',
						title: '可回收物'
					},
					{
						text: '雪花片',
						title: '可回收物'
					},
					{
						text: '纸板',
						title: '可回收物'
					},
					{
						text: '利乐包',
						title: '可回收物'
					},
					{
						text: '不直接接触药品的纸质外包装',
						title: '可回收物'
					},
					{
						text: '塑料收纳箱',
						title: '可回收物'
					},
					{
						text: '塑料容器',
						title: '可回收物'
					},
					{
						text: '废弃报纸',
						title: '可回收物'
					},
					{
						text: '传单',
						title: '可回收物'
					},
					{
						text: '书本杂志',
						title: '可回收物'
					},
					{
						text: '废纸盒',
						title: '可回收物'
					},
					{
						text: '纸箱',
						title: '可回收物'
					},
					{
						text: '充电电池',
						title: '有害垃圾'
					},
					{
						text: '移动电源',
						title: '有害垃圾'
					},
					{
						text: '废电路板',
						title: '有害垃圾'
					},
					{
						text: '自动变速器油',
						title: '有害垃圾'
					},
					{
						text: '齿轮油',
						title: '有害垃圾'
					},
					{
						text: '废X光片',
						title: '有害垃圾'
					},
					{
						text: 'CT光片',
						title: '有害垃圾'
					},
					{
						text: '铅蓄电池',
						title: '有害垃圾'
					},
					{
						text: '废日光灯管',
						title: '有害垃圾'
					},
					{
						text: '荧光灯管',
						title: '有害垃圾'
					},
					{
						text: '节能灯',
						title: '有害垃圾'
					},
					{
						text: '废发动机油',
						title: '有害垃圾'
					},
					{
						text: '制动器油',
						title: '有害垃圾'
					},
					{
						text: '废硒鼓墨盒及其包装物',
						title: '有害垃圾'
					},
					{
						text: '废杀虫剂',
						title: '有害垃圾'
					},
					{
						text: '消毒剂',
						title: '有害垃圾'
					},
					{
						text: '废清洁剂',
						title: '有害垃圾'
					},
					{
						text: '空调清洗剂',
						title: '有害垃圾'
					},
					{
						text: '废药品及其内包装',
						title: '有害垃圾'
					},
					{
						text: '废含汞温度计',
						title: '有害垃圾'
					},
					{
						text: '含汞血压计',
						title: '有害垃圾'
					},
					{
						text: '废油漆',
						title: '有害垃圾'
					},
					{
						text: '废笔芯',
						title: '有害垃圾'
					},
					{
						text: '枯枝',
						title: '厨余垃圾'
					},
					{
						text: '残花枯草',
						title: '厨余垃圾'
					},
					{
						text: '西瓜',
						title: '厨余垃圾'
					},
					{
						text: '水果果肉',
						title: '厨余垃圾'
					},
					{
						text: '水果果皮',
						title: '厨余垃圾'
					},
					{
						text: '花卉',
						title: '厨余垃圾'
					},
					{
						text: '盆栽植物残枝落叶',
						title: '厨余垃圾'
					},
					{
						text: '宠物饲料',
						title: '厨余垃圾'
					},
					{
						text: '水果',
						title: '厨余垃圾'
					},
					{
						text: '葡萄',
						title: '厨余垃圾'
					},
					{
						text: '桔子',
						title: '厨余垃圾'
					},
					{
						text: '苹果',
						title: '厨余垃圾'
					},
					{
						text: '糖',
						title: '厨余垃圾'
					},
					{
						text: '香料',
						title: '厨余垃圾'
					},
					{
						text: '果酱',
						title: '厨余垃圾'
					},
					{
						text: '番茄酱',
						title: '厨余垃圾'
					},
					{
						text: '调味品',
						title: '厨余垃圾'
					},
					{
						text: '坚果',
						title: '厨余垃圾'
					},
					{
						text: '罐头食品',
						title: '厨余垃圾'
					},
					{
						text: '奶粉',
						title: '厨余垃圾'
					},
					{
						text: '面粉',
						title: '厨余垃圾'
					},
					{
						text: '面包粉',
						title: '厨余垃圾'
					},
					{
						text: '碎骨',
						title: '厨余垃圾'
					},
					{
						text: '茶叶渣',
						title: '厨余垃圾'
					},
					{
						text: '咖啡渣',
						title: '厨余垃圾'
					},
					{
						text: '糕饼',
						title: '厨余垃圾'
					},
					{
						text: '糖果',
						title: '厨余垃圾'
					},
					{
						text: '绿叶菜',
						title: '厨余垃圾'
					},
					{
						text: '根茎蔬菜',
						title: '厨余垃圾'
					},
					{
						text: '菌菇',
						title: '厨余垃圾'
					},
					{
						text: '剩菜剩饭',
						title: '厨余垃圾'
					},
					{
						text: '鱼骨',
						title: '厨余垃圾'
					},
					{
						text: '鱼',
						title: '厨余垃圾'
					},
					{
						text: '鱼鳞',
						title: '厨余垃圾'
					},
					{
						text: '虾',
						title: '厨余垃圾'
					},
					{
						text: '虾壳',
						title: '厨余垃圾'
					},
					{
						text: '鱿鱼',
						title: '厨余垃圾'
					},
					{
						text: '蛋',
						title: '厨余垃圾'
					},
					{
						text: '动物内脏',
						title: '厨余垃圾'
					},
					{
						text: '腊肉',
						title: '厨余垃圾'
					},
					{
						text: '午餐肉',
						title: '厨余垃圾'
					},
					{
						text: '蛋壳',
						title: '厨余垃圾'
					},
					{
						text: '鸡',
						title: '厨余垃圾'
					},
					{
						text: '鸭',
						title: '厨余垃圾'
					},
					{
						text: '猪',
						title: '厨余垃圾'
					},
					{
						text: '牛',
						title: '厨余垃圾'
					},
					{
						text: '羊肉',
						title: '厨余垃圾'
					},
					{
						text: '米',
						title: '厨余垃圾'
					},
					{
						text: '米饭',
						title: '厨余垃圾'
					},
					{
						text: '面',
						title: '厨余垃圾'
					},
					{
						text: '面包',
						title: '厨余垃圾'
					},
					{
						text: '豆类',
						title: '厨余垃圾'
					},
					{
						text: '防尘罩',
						title: '其他垃圾'
					},
					{
						text: '地毯',
						title: '其他垃圾'
					},
					{
						text: '踏垫',
						title: '其他垃圾'
					},
					{
						text: '钢丝球',
						title: '其他垃圾'
					},
					{
						text: '碱性电池',
						title: '其他垃圾'
					},
					{
						text: '碳性电池',
						title: '其他垃圾'
					},
					{
						text: '普通塑料购物袋',
						title: '其他垃圾'
					},
					{
						text: 'led灯',
						title: '其他垃圾'
					},
					{
						text: '各类绳子',
						title: '其他垃圾'
					},
					{
						text: '指南针',
						title: '其他垃圾'
					},
					{
						text: '雨伞',
						title: '其他垃圾'
					},
					{
						text: '雨衣',
						title: '其他垃圾'
					},
					{
						text: '火柴',
						title: '其他垃圾'
					},
					{
						text: '蜡烛',
						title: '其他垃圾'
					},
					{
						text: '沙袋',
						title: '其他垃圾'
					},
					{
						text: '拳击手套',
						title: '其他垃圾'
					},
					{
						text: '帐篷',
						title: '其他垃圾'
					},
					{
						text: '睡袋',
						title: '其他垃圾'
					},
					{
						text: '头灯',
						title: '其他垃圾'
					},
					{
						text: '球拍',
						title: '其他垃圾'
					},
					{
						text: '瑜伽垫',
						title: '其他垃圾'
					},
					{
						text: '非金属筷子',
						title: '其他垃圾'
					},
					{
						text: '汤勺',
						title: '其他垃圾'
					},
					{
						text: '碟子',
						title: '其他垃圾'
					},
					{
						text: '烘培用具',
						title: '其他垃圾'
					},
					{
						text: '各类球',
						title: '其他垃圾'
					},
					{
						text: '毛绒玩具',
						title: '其他垃圾'
					},
					{
						text: '枕头',
						title: '其他垃圾'
					},
					{
						text: '干燥剂',
						title: '其他垃圾'
					},
					{
						text: '镜子',
						title: '其他垃圾'
					},
					{
						text: '瓶塞',
						title: '其他垃圾'
					},
					{
						text: '袜子',
						title: '其他垃圾'
					},
					{
						text: '鞋垫',
						title: '其他垃圾'
					},
					{
						text: '帽子',
						title: '其他垃圾'
					},
					{
						text: '手套',
						title: '其他垃圾'
					},
					{
						text: '口罩',
						title: '其他垃圾'
					},
					{
						text: '遮光布',
						title: '其他垃圾'
					},
					{
						text: '桌布',
						title: '其他垃圾'
					},
					{
						text: '餐具',
						title: '其他垃圾'
					},
					{
						text: '杯子',
						title: '其他垃圾'
					},
					{
						text: '棉被',
						title: '其他垃圾'
					},
					{
						text: '内衣裤',
						title: '其他垃圾'
					},
					{
						text: '各类刷子',
						title: '其他垃圾'
					},
					{
						text: '面膜',
						title: '其他垃圾'
					},
					{
						text: '化妆刷',
						title: '其他垃圾'
					},
					{
						text: '化妆棉',
						title: '其他垃圾'
					},
					{
						text: '海绵',
						title: '其他垃圾'
					},
					{
						text: '搓澡巾',
						title: '其他垃圾'
					},
					{
						text: '剃须刀等个护用品',
						title: '其他垃圾'
					},
					{
						text: '浴帽',
						title: '其他垃圾'
					},
					{
						text: '浴球',
						title: '其他垃圾'
					},
					{
						text: '牙线',
						title: '其他垃圾'
					},
					{
						text: '牙膏',
						title: '其他垃圾'
					}
				]
			}
		},
		onLoad(option) {
			console.log(option)
			this.title = option.title
		},
		onShow() {
			const {
				top,
				height,
				width
			} = wx.getMenuButtonBoundingClientRect();
			this.bgHeight = 46 + top + 'px'
		},
		methods: {
			// 点击card
			clickCard(item) {
				console.log(item)
				this.cardList.forEach((e, i) => {
					e.active = false
				})
				item.active = !item.active
				this.arrList = item.arrList
			},
			// 搜索
			onSearch(event) {
				this.value = event.detail
				console.log(this.value, 66)
				if(this.value) {
					const arr = []
					this.allList.map(item => {
						console.log(item.text.includes(event.detail),item.text, 996)
						if(item.text.includes(event.detail)) {
							arr.push(item)
						}
					})
					this.newList = arr
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
				}
		
				.active {
					background: #B94333;
					color: #ffffff;
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