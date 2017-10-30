<template>
	<div class="coupon">
		<x-header title="我的优惠券"></x-header>
		<div class="container">
			<div class="list" v-for="item in list" :class="{'disabled': item.status == 0}">
				<div class="left">
					<div class="title">￥<strong>{{item.couponMoney}}</strong>
						<template v-if="item.couponType == 1">优惠券</template>
						<template v-if="item.couponType == 2">赠送券</template>
					</div>
					<p>{{item.couponName}}</p>
					<p>有效期：{{item.startTime}} - {{item.endTime}}</p>
				</div>
				<div class="right" v-if="item.status == 1">
					<img src="../assets/images/wdyhq_ysy1.png" alt="">
				</div>
				<div class="right" v-if="item.status == 0">
					<img src="../assets/images/wdyhq_ysx2.png" alt="">
				</div>
			</div>
		</div>
		<div class="nodata" v-if="list.length === 0">暂无优惠券</div>
	</div>
</template>
<script>
import { XHeader } from 'vux';
import { LXAjax } from '@/assets/js/utils';
import { WEIXIN_LOGIN_URL, COUPON } from '@/assets/js/const';

export default {
	name: 'coupon',
	data(){
		return {
			list: [],
		};
	},
	computed: {
	},
	components: { XHeader },
	methods: {
		getData(){
			LXAjax('get', 'api/myCoupon/detail')
			.done(res => {
				this.list = res.couponInfo;
			})
			.fail(res => {
				if(res.flag == -2){
					window.location.href = WEIXIN_LOGIN_URL + '?state=' + COUPON;
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
		this.getData();
	}
};
</script>
<style lang="less" scoped>
	.coupon{
		height: 100%;
		background: #f4f4f4;
	}
	.container{
		padding: 10px;
		.list{
			display: flex;
			display: -webkit-flex;
			background: url('../assets/images/wdyhq_yhq1.png') no-repeat;
			background-size: 100% 100%;
			border-radius: 4px;
			align-items: center;
			-webkit-align-items: center;
			margin-top: 10px;
			.left{
				padding: 10px;
				flex: 1;
				-webkit-flex: 1;
				color: #fff;
				.title{
					font-size: 14px;
					margin-bottom: 10px;
					strong{
						font-size: 20px;
					}
				}
				p{font-size: 12px;}
			}
			.right{
				text-align: right;
				padding: 0 10px;
				img{
					width: 60px;
				}
			}
			&.disabled{
				background: url('../assets/images/wdyhq_yhq2.png') no-repeat;
				background-size: 100% 100%;
			}
		}
	}
</style>