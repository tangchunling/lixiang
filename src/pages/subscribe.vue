<template>
	<div class="subscribe">
		<headTop title="预约试车"></headTop>
		<div class="product-content">
			<div class="weui-cells__title"></div>
			<div class="weui-cells">
				<div class="weui-cell">
					<div class="weui-cell__hd">
						<img :src="'http://img.imaqu.com/joyli' + productDetail.img + '_200x200.jpg'" width="90"/>
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
					<!-- <div class="weui-cell__ft">
						<input type="radio" name="sex" v-model="subscribe.sex" value="0">先生
						<input type="radio" name="sex" v-model="subscribe.sex" value="1">女士
					</div> -->
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
	import { XHeader, Datetime, Group, PopupPicker, base64 } from 'vux';
	import { LXAjax, checkPhone } from '@/assets/js/utils';
	import { WEIXIN_LOGIN_URL, SUBSCRIBE } from '@/assets/js/const';
	import headTop from '@/components/headTop';

	export default {
		data(){
			return {
				subscribe: {
					tel: '',
					name: '',
					date: '',
					sex: 0,
					store: [],
					storeId: '',
				},
				productId: '',
				productDetail: '',
				stores: [[]],
			};
		},
		components: { XHeader, Datetime, Group, PopupPicker, headTop },
		methods: {
			change(date){

			},
			onHide(){},
			onShow(){},
			onChange(val){
				this.stores[0].map(el => {
					if(el.value == val[0]){
						this.subscribe.store = [el.name];
						this.subscribe.storeId = Number(val[0]);
					}
				});
			},
			setSubscribe(){
				if(this.subscribe.name === ''){
					this.$vux.toast.text('请输入姓名', 'top');
					return;
				}
				if(this.subscribe.tel === ''){
					this.$vux.toast.text('请输入电话号码', 'top');
					return;
				}
				if(!checkPhone(this.subscribe.tel)){
					this.$vux.toast.text('请输入正确的电话号码', 'top');
					return;
				}
				if(this.subscribe.date === ''){
					this.$vux.toast.text('请选择预约时间', 'top');
					return;
				}
				if(this.subscribe.storeId === ''){
					this.$vux.toast.text('请选择门店', 'top');
					return;
				}
				let data = {
					carId: this.productId,
					carName: this.productDetail.title,
					carImg: this.productDetail.img,
					clientName: this.subscribe.name,
					clientPhone: this.subscribe.tel,
					reserveDate: new Date(this.subscribe.date),
					shopId: this.subscribe.storeId,
					shopName: this.subscribe.store[0],
					type: 1,
				};
				LXAjax('post', 'api/addReserve', data)
				.done(res => {
					this.$router.push('/success');
				})
				.fail(res => {
					if(res.flag == -1){
						let str = '/subscribe&productId=' + this.productId;
						window.location.href = WEIXIN_LOGIN_URL + '?state=' + base64.encode(str);
					}
					this.$vux.toast.text(res.message, 'top');
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
				LXAjax('get', 'api/shop/list')
				.done(res => {
					this.stores = [res.shopInfo];
					res.shopInfo.map(el => {
						el.value = el.id;
					});
					if(res.shopInfo.length === 1){
						this.subscribe.store = [res.shopInfo[0].name];
						this.subscribe.storeId = Number(res.shopInfo[0].id);
					}
				})
				.error(err => {
					console.log(err);
				});
			},
			getInfo(){
				LXAjax('get', 'api/user/core/myUserInfo')
				.done(res => {
					this.subscribe.tel = res.user.mobile;
					this.subscribe.name = res.user.trueName;
					if(this.subscribe.tel === '' || this.subscribe.tel === null || this.subscribe.tel === undefined){
						this.$router.push('/login');
					}
				})
				.fail(res => {
					if(res.flag == -1){
						let str = '/subscribe&productId=' + this.productId;
						window.location.href = WEIXIN_LOGIN_URL + '?state=' + base64.encode(str);
					}
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
			this.getInfo();
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
				font-size: 16px;
			}
			.product-dec{
				font-size: 14px;
			}
		}
	}
	.page-bd{
		.weui-cells{
			font-size: 14px;
			.weui-label{
				width: 70px;
			}
			.weui-cell_select{
				padding: 10px 15px;
			}
		}
		.weui-btn-area a{
			font-size: 16px;
			background: #2487c0;
		}
	}
	input[type='radio']{
		-webkit-appearance: none;
		appearance: none;
		width: 12px;
		height: 12px;
		background: url(../assets/images/yy_wxz1.png) no-repeat center center;
		background-size: 100%;
		vertical-align: middle;
		margin-right: 2px;
	}
	input[type='radio']:checked{
		background: url(../assets/images/yy_xz1.png) no-repeat center center;
		background-size: 100%;
	}
</style>