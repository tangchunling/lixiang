<template>
	<div>
		<x-header title="订单详情"></x-header>
		<div class="line"></div>
		<!-- <flow>
			<flow-state title="定金支付" is-done></flow-state>
			<flow-line is-done ></flow-line>

			<flow-state title="签订合同" is-done></flow-state>
			<flow-line is-done ></flow-line>

			<flow-state title="等待提车" is-done></flow-state>
			<flow-line is-done ></flow-line>

			<flow-state title="到店提车"></flow-state>
		</flow> -->
		<div class="status">
			<div class="status-title weui-flex">
				<div class="weui-flex__item">
					<span>定金支付</span>
				</div>
				<div class="weui-flex__item">
					<span>签订合同</span>
				</div>
				<div class="weui-flex__item">
					<span>等待提车</span>
				</div>
				<div class="weui-flex__item">
					<span>到店提车</span>
				</div>
			</div>
			<div class="status-img weui-flex">
				<div class="weui-flex__item">
					<div class="item" style="padding-right: 10px;">
						<div class="left">
							<img src="../assets/images/yy_xz1.png" alt="">
						</div>
						<div class="right">
							<img src="../assets/images/xq_jt1.png" alt="">
						</div>
					</div>
				</div>
				<div class="weui-flex__item">
					<div class="item" style="margin-left: -10px;padding-right: 14px;">
						<div class="left">
							<img src="../assets/images/yy_xz1.png" alt="">
						</div>
						<div class="right">
							<img src="../assets/images/xq_jt1.png" alt="">
						</div>
					</div>
				</div>
				<div class="weui-flex__item">
					<div class="item" style="margin-left: -14px;padding-right: 14px;">
						<div class="left">
							<img src="../assets/images/yy_xz1.png" alt="">
						</div>
						<div class="right">
							<img src="../assets/images/xq_jt1.png" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="line"></div>
		<div class="block hetong">
			<div class="list">
				<label>合同编号: </label>
				<span>1111111111111</span>
			</div>
			<div class="list">
				<label>合同状态: </label>
				<span class="green">定金支付成功</span>
			</div>
		</div>
		<tab :line-width="1" custom-bar-width="60px" bar-active-color="#2487c0" v-model="index">
			<tab-item>合同信息</tab-item>
			<tab-item>到店提车</tab-item>
		</tab>
		<div class="block" v-if="index === 0">
		</div>
		<div class="block" v-if="index === 1"></div>
	</div>
</template>
<script>
	import { XHeader, Tab, TabItem } from 'vux';
	import { LXAjax } from '@/assets/js/utils';

	export default {
		name: 'orderDetail',
		data(){
			return {
				index: 0,
				orderId: '',
				orderDetail: '',
			};
		},
		components: { XHeader, Tab, TabItem },
		methods: {
			getData(){
				LXAjax('post', 'api/myOrder/detail', {
					orderId: this.orderId,
				})
				.done(res => {
					this.orderDetail = res.orderInfo;
				})
				.fail(res => {
					if(res.flag == -2){
						window.location.href = WEIXIN_LOGIN_URL + '?state=' + ORDER;
					}
				})
				.error(err => {
					console.log(err);
				})
				.always(res => {
				});
			},
		},
		mounted(){
			this.orderId = Number(this.$route.query.id);
			this.getData();
		}
	}
</script>
<style lang="less" scoped>
	.line{
		height: 10px;
		background: #f4f4f4;
		border-top: 1px solid #aaa;
		border-bottom: 1px solid #aaa;
	}
	.status-title{
		text-align: center;
		font-size: 14px;
	}
	.status{
		padding: 10px 0;
	}
	.status-img img{
		display: inline-block;
	}
	.hetong{
		padding: 10px;
		font-size: 12px;
		border-bottom: 1px dashed #eee;
	}
	.vux-tab .vux-tab-item.vux-tab-selected {
		color: #2487c0;
		border-bottom: 3px solid #2487c0;
	}
	.status-img{
		width: 80%;
		margin: auto;
	}
	.item{
		display: flex;
		display: -webkit-flex;
		.left{
			width: 20px;
			margin: 0 4px;
		}
		img{
			width: 100%;
		}
	}
</style>