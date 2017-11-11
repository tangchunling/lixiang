<template>
	<div class="order">
		<headTop title="我的订单"></headTop>
		<div class="list" v-for="item in list">
			<div class="weui-cells__title">
				<span v-if="item.orderStatus == 1">待付款</span>
				<span v-if="item.orderStatus == 2">已付订金</span>
				<span v-if="item.orderStatus == 3">交易成功</span>
				<span v-if="item.orderStatus == 4">已提车</span>
				<span v-if="item.orderStatus == 10">交易完成</span>
			</div>
			<div class="index-content weui-cells">
				<div class="weui-cell" @click="goDetail(item.productId)">
					<div class="weui-cell__hd">
						<img :src="'http://img.imaqu.com/joyli' + item.picUrl + '_200x200.jpg'" width="90"/>
					</div>
					<div class="weui-cell__bd">
						<div class="product-name">
							{{item.productTitle}}
						</div>
						<div class="product-dec">
							{{item.productSubTitle}}
						</div>
						<div class="product-remark">指导价{{item.totalPrice}}万起</div>
					</div>
				</div>
			</div>
			<div class="btn-list">
				<a href="javascript: void(0)" @click="goOrderDetail(item.orderId)">查看详情</a>
				<a href="tel:400123456">联系客服</a>
			</div>
		</div>
	</div>
</template>
<script>
import { XHeader } from 'vux';
import { LXAjax } from '@/assets/js/utils';
import { WEIXIN_LOGIN_URL, ORDER } from '@/assets/js/const';
import headTop from '@/components/headTop';

console.log(ORDER);

export default {
	name: 'order',
	data(){
		return {
			list: [],
		};
	},
	computed: {
	},
	components: { XHeader, headTop },
	methods: {
		getData(){
			LXAjax('get', 'api/user/core/orderList')
			.done(res => {
				this.list = res.orderList;
			})
			.fail(res => {
				if(res.flag == -1){
					// window.location.href = WEIXIN_LOGIN_URL + '?state=' + ORDER;
				}
			})
			.error(err => {
				console.log(err);
			})
			.always(res => {
			});
		},
		goOrderDetail(id){
			this.$router.push('/orderDetail?id='+id);
		},
		goDetail(id){
			this.$router.push('/detail?productId='+id);
		},
	},
	mounted(){
		this.getData();
	}
};
</script>
<style lang="less" scoped>
	.order{
		background: #f4f4f4;
		height: 100%;
		.weui-cells__title{
			background: #fff;
			margin-bottom: 0;
			color: #e47100;
			text-align: right;
			padding: 4px 15px;
		}
		.weui-cells{
			background: #fafafa;
			&:before{
				border-top: none;
			}
			&:after{
				border-bottom: none;
			}
		}
		.btn-list{
			text-align: right;
			font-size: 12px;
			padding: 10px 15px;
			background: #fff;
			a{
				display: inline-block;
				padding: 2px 4px;
				border: 1px solid #aaa;
				border-radius: 4px;
				color: #aaa;
				margin-right: 10px;
			}
		}
	}
	.weui-cell__hd img{
		margin-right: 10px;
	}
	.product-name{
		font-size: 16px;
		margin-bottom: 4px;
	}
	.product-dec{
		font-size: 14px;
	}
	.product-num{
		color: #e47100;
		font-size: 14px;
		margin-top: 14px;
	}
	.product-num span strong{
		font-size: 16px;
	}
	.product-remark{
		font-size: 12px;
		color: #aaa;
		margin-top: 4px;
	}
	.weui-cells{
		margin-top: 0;
	}
	.vux-header .vux-header-title{
		color: #000;
	}
</style>