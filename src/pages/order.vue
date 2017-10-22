<template>
	<div class="order">
		<x-header title="我的订单"></x-header>
		<div class="list">
			<div class="weui-cells__title">
				<span>等待提车</span>
			</div>
			<div class="index-content weui-cells">
				<div class="weui-cell" @click="goDetail(item.productId)" v-for="item in list">
					<div class="weui-cell__hd">
						<img :src="item.picture" width="90"/>
					</div>
					<div class="weui-cell__bd">
						<div class="product-name">
							{{item.title}}
						</div>
						<div class="product-dec">
							{{item.subTitle}}
						</div>
						<div class="product-remark">指导价{{item.price}}万起</div>
					</div>
				</div>
			</div>
			<div class="btn-list">
				<a href="">查看详情</a>
				<a href="">联系客服</a>
			</div>
		</div>
	</div>
</template>
<script>
import { XHeader } from 'vux';
import { LXAjax } from '@/assets/js/utils';

export default {
	name: 'order',
	data(){
		return {
			imgList: [],
			list: [
				{
					id:1,
					modified:1507046514000,
					paymentDeposit:10000,
					paymentEach:3000,
					paymentRemark:"需向门店支付交车服务费4000元",
					paymentTags:"含购置税,送一年保险",
					paymentTail:10000,
					paymentTerm:12,
					picture:"https://img.souche.com/20170930/jpg/baf964c53f58a461dbd399a5520caf25.jpg",
					price:"23.78",
					productId:"10001",
					props:null,
					propsStr:null,
					saleProps:null,
					salePropsImgs:"",
					salePropsStr:null,
					sales:100,
					spec:null,
					status:1,
					subTitle:"2017款 300TSI 自动两驱丝绸之路",
					title:"大众途观",
					type:"1",
				}
			],
		};
	},
	computed: {
	},
	components: { XHeader },
	methods: {
	},
	mounted(){
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