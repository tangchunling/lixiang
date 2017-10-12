<template>
	<div class="subscribe">
		<x-header></x-header>
		<div class="product-content">
			<div class="weui-cells__title"></div>
			<div class="weui-cells">
				<div class="weui-cell">
					<div class="weui-cell__hd">
						<img :src="productDetail.img" width="60" height="60"/>
					</div>
					<div class="weui-cell__bd">
						<div class="product-name">
							{{productDetail.title}}
						</div>
						<div class="product-dec">
							{{productDetail.subtitle}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page-bd">
			<div class="weui-cells__title"></div>
			<div class="weui-cells">
				<div class="weui-cell">
					<div class="weui-cell__hd">
						<label class="weui-label">姓名</label>
					</div>
					<div class="weui-cell__bd">
						<input class="weui-input" placeholder="请输入" v-model="subscribe.name">
					</div>
					<div class="weui-cell__ft">
						<input type="radio" name="sex" v-model="subscribe.sex" value="0">先生
						<input type="radio" name="sex" v-model="subscribe.sex" value="1">女士
					</div>
				</div>
				<div class="weui-cell">
					<div class="weui-cell__hd">
						<label class="weui-label">手机号</label>
					</div>
					<div class="weui-cell__bd">
						<input class="weui-input" type="tel" pattern="[0-9]*" placeholder="请输入手机号" v-model="subscribe.tel">
					</div>
				</div>
				<datetime v-model="subscribe.date" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" @on-change="change" title="预约时间"></datetime>
				<!-- <div class="weui-cell">
					<div class="weui-cell__hd">
						<label class="weui-label">预约时间</label>
					</div>
					<div class="weui-cell__bd">
					</div>
				</div> -->
				<!-- <div class="weui-cell weui-cell_select weui-cell_select-after">
					<div class="weui-cell__hd">
						<label class="weui-label">预约门店</label>
					</div>
					<div class="weui-cell__bd">
					</div>
				</div> -->
				<popup-picker title="预约门店" :data="stores" v-model="subscribe.store" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
			</div>
			<div class="weui-btn-area">
				<a class="weui-btn weui-btn_primary" href="javascript:" @click="setSubscribe">确定预约</a>
			</div>
		</div>
	</div>
</template>
<script>
	import { XHeader, Datetime, Group, PopupPicker } from 'vux';
	import { LXAjax } from '@/assets/js/utils';

	export default {
		data(){
			return {
				subscribe: {
					tel: '',
					name: '',
					date: '',
					sex: 0,
					store: ['门店'],
				},
				productId: '',
				productDetail: '',
				stores: [[
					{
						name: '门店1',
						value: 1,
					},
					{
						name: '门店2',
						value: 2,
					}
				]],
			};
		},
		components: { XHeader, Datetime, Group, PopupPicker },
		methods: {
			change(date){

			},
			onHide(){},
			onShow(){},
			onChange(){},
			setSubscribe(){
				let data = {

				};
				LXAjax('post', api, data)
				.done(res => {
					this.imgList = res.carInfo.images.map(el => {
						let obj = {};
						obj.url = '';
						obj.img = el;
						obj.title = '';
						return obj;
					});
					res.carInfo.paymentTags = res.carInfo.paymentTags.split('，');
					this.carInfo = res.carInfo;
				})
				.error(err => {
					console.log(err);
				});
			},
			getDetail(){
				let api = 'api/buy/detail?productId=' + this.productId;
				LXAjax('get', api)
				.done(res => {
					let productDetail = {};
					productDetail.title = res.carInfo.title;
					productDetail.subtitle = res.carInfo.subTitle;
					productDetail.img = res.carInfo.picture;
					this.productDetail = productDetail;
				})
				.error(err => {
					console.log(err);
				});
			},
			getStore(){
				LXAjax('get', 'api/reserve/shop/list')
				.done(res => {
					
				})
				.error(err => {
					console.log(err);
				});
			}
		},
		mounted(){
			this.productId = Number(this.$route.query.productId);
			this.getDetail();
			this.getStore();
		}
	}
</script>
<style scoped lang="less">
	.subscribe{
		background: #f4f4f4;
		.product-content{
			background: #fff;
			img{
				margin-right: 10px;
			}
			.product-name{
				font-size: 13px;
			}
			.product-dec{
				font-size: 12px;
			}
		}
	}
	.page-bd{
		.weui-cells{
			font-size: 12px;
			.weui-label{
				width: 70px;
			}
			.weui-cell_select{
				padding: 10px 15px;
			}
		}
		.weui-btn-area a{
			font-size: 14px;
			background: #2487c0;
		}
	}
</style>