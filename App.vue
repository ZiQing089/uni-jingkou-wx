<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			restUpDataList(listData) {
				uni.$once('updataList', data => {
					if (data && data.id) {
						listData.forEach(e => {
							console.log(e, '全局')
							if (e.id === data.id) {
								Object.assign(e, data);
							}
						})
					}
				})
			}
		}
	}
</script>

<style>
	@import "/wxcomponents/vant/dist/common/index.wxss";
	@import '~@/static/iconfont/iconfont.css';
	/*每个页面公共css */
</style>
