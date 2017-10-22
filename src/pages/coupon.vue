<template>
	<div class="coupon">
		<x-header title="我的优惠券"></x-header>
		<div class="container">
			<div class="list">
				<div class="left">
					<div class="title">￥<strong>1000</strong>抵用卷</div>
					<p>里享出行，让生活去旅行</p>
					<p>有效期：2017.10.15 - 2017.10.20</p>
				</div>
				<div class="right">
					<img src="../assets/images/wdyhq_ysy1.png" alt="">
				</div>
			</div>
			<div class="list disabled">
				<div class="left">
					<div class="title">￥<strong>1000</strong>抵用卷</div>
					<p>里享出行，让生活去旅行</p>
					<p>有效期：2017.10.15 - 2017.10.20</p>
				</div>
				<div class="right">
					<img src="../assets/images/wdyhq_ysx2.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { XHeader } from 'vux';
import { LXAjax } from '@/assets/js/utils';

export default {
	name: 'coupon',
	data(){
		return {
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