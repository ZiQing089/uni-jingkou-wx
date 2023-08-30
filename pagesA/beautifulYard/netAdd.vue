<template>
	<view class="page-container net-add">
		<NavBar :title="'美丽庭院'" :border="true" />
		<view class="content">
			<view class="form-inline">
				<view class="label must">
					整改标题：
				</view>
				<view class="field">
					 <van-field
					    :value="form.title"
					    placeholder="请输入整改标题"
					    :border="false"
					    @change="onblur('title', $event)"
					  />
				</view>
			</view>
			<view class="form-inline">
				<view class="label must">
					上传人员：
				</view>
				<view class="field">
					 <van-field
					    :value="form.uploader"
					    placeholder="请输入上传人员的姓名"
					    :border="false"
					    @change="onblur('uploader', $event)"
					  />
				</view>
			</view>
			<view class="form-block">
				<view class="label must">
					整改内容：
				</view>
				<view class="filed">
					<van-field
					   :value="form.content"
					   type="textarea"
					   placeholder="请输入要咨询的问题....."
					   rows="1"
					   :border="false"
					   @input="onInput"
					 />
				</view>
			</view>
			<view class="form-block">
				<view class="label must">
					照片：
				</view>
				<view class="upload">
					<van-uploader
					:file-list="fileList"
					preview-size="210rpx"
					:max-count="3"
					@delete="del"
					@after-read="afterRead">
					</van-uploader>
					<view class="tips">
						最多可上传三张照片
					</view>
				</view>
			</view>
			<view class="btn-box" @click="submit">
				<view class="btn">
					提交
				</view>
			</view>
			<van-toast id="van-toast" />
		</view>
	</view>
</template>

<script>
	import { addRectify } from '@/api/beautifulYard.js'
	import * as API from '@/config.js'
	import { getToken } from '@/utils/auth'
	import NavBar from "@/components/NavBar.vue"
	import Toast from '@/wxcomponents/vant/dist/toast/toast';
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				form: {
					uploader: '',
					title: '',
					content: '',
					pics: []
				},
				token: getToken(),
				uploadAPI: API.host + '/api/file/pc/upload',
				fileList: []
			}
		},
		methods: {
			onblur(type, event) {
				console.log(event)
				if(type === 'title') {
					this.form.title = event.detail
				} else {
					this.form.uploader = event.detail
				}
			},
			onInput(event) {
				this.form.content = event.detail
			},
			// 上传
			afterRead(event) {
				const self = this
				const { file } = event.detail;
				uni.showLoading({title: '加载中'});
				uni.uploadFile({
				  url: this.uploadAPI,
				  filePath: file.url,
				  name: 'file',
				  header: { 'token': this.token },
				  success(res) {
					let data = JSON.parse(res.data)
					self.form.pics.push(data.data)
					self.fileList.push({ url: data.data })
				  },
				  fail: (error) => {
				  	uni.showToast({title: error,duration: 2000});
				  },
				  complete: () => {
				  	uni.hideLoading();
				  },
				});
			},
			// 删除
			del(event) {
				this.fileList.forEach((item, index) => {
					if(event.detail.index === index) {
						this.fileList.splice(index, 1)
						this.form.pics.splice(index, 1)
					}
				})
			},
			submit() {
				if(this.form.pics.length !== 0 && this.form.uploader && this.form.title && this.form.content ) {
					addRectify(this.form).then(res => {
						Toast('上传成功，请耐心等待审核！可在“我的-我的上传”中进行管理');
						setTimeout(() => {
							uni.navigateBack()
						}, 2000)
					})
				} else {
					Toast('请填写必填项');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.net-add {
	.content {
		padding: 0 36rpx;
		.form-inline {
			display: flex;
			border-bottom: 2rpx solid #F6F6F6;
			align-items: center;
			.label {
				width: 185rpx;
				font-size: 28rpx;
				box-sizing: border-box;
				color: #000000;
				padding: 32rpx 0 32rpx 32rpx;
				line-height: 40rpx;
				letter-spacing: 1px;
			}
			.must {
				position: relative;
			}
			.must::before {
				content: '*';
				position: absolute;
				width: 100%;
				color: #FF3838;
				font-size: 20px;
				left: 0;
				top: 36rpx;
			}
			.field {
				width: calc(100% - 185rpx);
				/deep/ {
					.van-cell {
						padding: 32rpx 0; 
						font-size: 28rpx;
						line-height: 40rpx;
					}
				}
			}
		}
		.form-block {
			.label {
				width: 185rpx;
				font-size: 28rpx;
				box-sizing: border-box;
				color: #000000;
				padding: 32rpx 0 24rpx 32rpx;
				line-height: 40rpx;
				letter-spacing: 1px;
			}
			.must {
				position: relative;
			}
			.must::before {
				content: '*';
				position: absolute;
				width: 100%;
				color: #FF3838;
				font-size: 20px;
				left: 0;
				top: 36rpx;
			}
			.filed {
				/deep/ {
					.van-cell {
						padding: 30rpx 22rpx;
						background: #F9F9F9;
						border-radius: 8rpx;
					}
					.van-field__body--textarea, .van-field__control--textarea {
						height: 132rpx;
					}
				}
			}
			.upload {
				/deep/ {
					.van-uploader {
						width: 100%;
					}
					.van-uploader__upload {
						background-color: #F7EDEC !important;
						margin-bottom: 0rpx;
						border-radius: 8rpx;
					}
					.van-uploader__wrapper {
						display: flex;
						// justify-content: space-around;
					}
					.van-uploader__preview {
						margin: 0 24rpx 0 0;
					}
					.van-uploader__preview:nth-child(3n) {
						margin: 0 0 0 0;
					}
					.van-icon {
						color: #B94333;
					}
				}
				.tips {
					margin-top: 12rpx;
					font-size: 24rpx;
					color: #999999;
					line-height: 36rpx;
				}
			}
		}
		.btn-box {
			position: fixed;
			left: 24rpx;
			right: 24rpx;
			bottom: 90rpx;
			border-radius: 44rpx;
			border: 2rpx solid #B94333;
			.btn {
				height: 80rpx;
				line-height: 80rpx;
				margin: 4rpx;
				text-align: center;
				font-size: 32rpx;
				color: #FFFFFF;
				background: #B94333;
				border-radius: 44rpx;
			}
		}
	}
}
</style>
