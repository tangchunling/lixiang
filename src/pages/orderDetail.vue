<template>
	<div>
		<headTop title="订单详情"></headTop>
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
					<span>订金支付</span>
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
					<div class="item" style="padding-right: 10px;" v-if="orderDetail.orderStatus >= 2">
						<div class="left">
							<img src="../assets/images/yy_xz1.png" alt="">
						</div>
						<div class="right">
							<img src="../assets/images/xq_jt1.jpg" alt="">
						</div>
					</div>
					<div class="item" style="padding-right: 10px;" v-else>
						<div class="left">
							<img src="../assets/images/yy_wxz1.png" alt="">
						</div>
						<div class="right">
							<img src="../assets/images/xq_jt2.jpg" alt="">
						</div>
					</div>
				</div>
				<div class="weui-flex__item">
					<div class="item" style="margin-left: -10px;padding-right: 14px;" v-if="orderDetail.orderStatus >= 3">
						<div class="left">
							<img src="../assets/images/yy_xz1.png" alt="">
						</div>
						<div class="right">
							<img src="../assets/images/xq_jt1.jpg" alt="">
						</div>
					</div>
					<div class="item" style="margin-left: -10px;padding-right: 14px;" v-else>
						<div class="left">
							<img src="../assets/images/yy_wxz1.png" alt="">
						</div>
						<div class="right">
							<img src="../assets/images/xq_jt2.jpg" alt="">
						</div>
					</div>
				</div>
				<div class="weui-flex__item">
					<div class="item" style="margin-left: -14px;padding-right: 18px;" v-if="orderDetail.orderStatus >= 4">
						<div class="left">
							<img src="../assets/images/yy_xz1.png" alt="">
						</div>
						<div class="right">
							<img src="../assets/images/xq_jt1.jpg" alt="">
						</div>
					</div>
					<div class="item" style="margin-left: -14px;padding-right: 18px;" v-else>
						<div class="left">
							<img src="../assets/images/yy_wxz1.png" alt="">
						</div>
						<div class="right">
							<img src="../assets/images/xq_jt2.jpg" alt="">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="line"></div>
		<div class="block hetong">
			<div class="list">
				<label>合同编号: </label>
				<span>{{orderDetail.contractNo}}</span>
			</div>
			<div class="list">
				<label>合同状态: </label>
				<span class="green" v-if="orderDetail.contractStatus == 0"></span>
				<span class="green" v-if="orderDetail.contractStatus == 1">有效</span>
				<span class="green" v-if="orderDetail.contractStatus == 2">失效</span>
				<span class="green" v-if="orderDetail.contractStatus == 3">完成</span>
			</div>
		</div>
		<tab :line-width="1" custom-bar-width="60px" bar-active-color="#2487c0" v-model="index">
			<tab-item>合同信息</tab-item>
			<tab-item>到店提车</tab-item>
		</tab>
		<div class="block" v-if="index === 0">
			<div class='infolist'>
				<p>用户信息：{{orderDetail.buyName}}</p>
			</div>
			<div class="infolist">
				<p>购车费用项</p>
				<p>首付：{{orderDetail.orderFirstAmount}}</p>
				<p>月供费用：{{orderDetail.paymentEach}}</p>
				<p>剩余期数{{orderDetail.paymentTerm}}，还款日期{{orderDetail.orderFirstAmount}}</p>
				<p>总月供应付：{{orderDetail.orderFirstAmount}}</p>
			</div>
			<div class="infolist">
				<p>用户已付</p>
				<p>订金：{{orderDetail.orderFirstAmount}}</p>
				<p>订金支付时间：{{orderDetail.orderFirstAmount}}</p>
				<p>优惠活动：{{orderDetail.couponName}}</p>
				<p>优惠金额：{{orderDetail.couponMoney}}</p>
				<p>首付应付：{{orderDetail.orderFirstActualAmount}}</p>
				<p>首付应付时间：{{orderDetail.orderFirstPayTime}}</p>
			</div>
		</div>
		<div class="block" v-if="index === 1">
			<div class='infolist' v-if="orderDetail.carStatus === 1">
				<p>车已到店</p>
				<p>到店提车时间：{{orderDetail.mentionTime}}</p>
			</div>
			<div class='infolist' v-if="orderDetail.carStatus === 0">
				<p>车未到店</p>
				<p>预约到店自提时间：{{orderDetail.mentionReservationTime}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	import { XHeader, Tab, TabItem, dateFormat } from 'vux';
	import { LXAjax } from '@/assets/js/utils';
	import headTop from '@/components/headTop';
	import { WEIXIN_LOGIN_URL, ORDER } from '@/assets/js/const';

	export default {
		name: 'orderDetail',
		data(){
			return {
				index: 0,
				orderId: '',
				orderDetail: '',
			};
		},
		components: { XHeader, Tab, TabItem, headTop },
		methods: {
			getData(){
				LXAjax('post', 'api/user/core/orderDetail', {
					orderId: this.orderId,
				})
				.done(res => {
					res.orderInfo.orderFirstPayTime = dateFormat(res.orderInfo.orderFirstPayTime, 'YYYY-MM-DD');
					res.orderInfo.mentionTime = dateFormat(res.orderInfo.mentionTime, 'YYYY-MM-DD');
					res.orderInfo.mentionReservationTime = dateFormat(res.orderInfo.mentionReservationTime, 'YYYY-MM-DD');
					this.orderDetail = res.orderInfo;
				})
				.fail(res => {
					if(res.flag == -1){
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
	.infolist{
		font-size: 12px;
		padding: 10px 20px;
	}
</style>