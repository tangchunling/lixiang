<template>
	<div>
		<div class="weui-cells title">
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<img src="../assets/images/grzx_grzx_50x50.png" alt="">
				</div>
				<div class="weui-cell__bd">
					我的个人中心
				</div>
			</div>
		</div>
		<div class="line"></div>
		<div class="weui-cells">
			<div class="weui-cell weui-cell_select weui-cell_select-after" @click="goOrder">
				<div class="weui-cell__hd">
					<img src="../assets/images/grzx_wddd_50x50.png" alt="">
				</div>
				<div class="weui-cell__bd">
					我的订单
				</div>
				<div class="weui-cell__ft"></div>
			</div>
			<div class="weui-cell weui-cell_select weui-cell_select-after">
				<div class="weui-cell__hd">
					<img src="../assets/images/grzx_wdbd_50x50.png" alt="">
				</div>
				<div class="weui-cell__bd">
					我的巴迪
				</div>
				<div class="weui-cell__ft"></div>
			</div>
			<div class="weui-cell weui-cell_select weui-cell_select-after" @click="goCode">
				<div class="weui-cell__hd">
					<img src="../assets/images/grzx_wdewm_50x50.png" alt="">
				</div>
				<div class="weui-cell__bd">
					我的二维码
				</div>
				<div class="weui-cell__ft"></div>
			</div>
			<div class="weui-cell weui-cell_select weui-cell_select-after" @click="goCard">
				<div class="weui-cell__hd">
					<img src="../assets/images/grzx_wdcl_50x50.png" alt="">
				</div>
				<div class="weui-cell__bd">
					我的车辆
				</div>
				<div class="weui-cell__ft"></div>
			</div>
			<div class="weui-cell weui-cell_select weui-cell_select-after" @click="goCoupon">
				<div class="weui-cell__hd">
					<img src="../assets/images/grzx_wdyhq_50x50.png" alt="">
				</div>
				<div class="weui-cell__bd">
					我的优惠券
				</div>
				<div class="weui-cell__ft"></div>
			</div>
		</div>
	</div>
</template>
<script>
import { LXAjax } from '@/assets/js/utils';

export default {
	name: 'persoanl',
	data(){
		return {
		};
	},
	components: {},
	methods: {
		goOrder(){
			this.$router.push('/order');
		},
		goCode(){
			this.$router.push('/code');
		},
		goCard(){
			this.$router.push('/card');
		},
		goCoupon(){
			this.$router.push('/coupon');
		},
	},
	mounted(){
	}
};
</script>
<style lang="less" scoped>
	.line{
		background: #f0f0f0;
		height: 5px;
	}
	.title .weui-cell{
		padding: 15px;
	}
	.weui-cells{
		margin-top: 0;
	}
	.weui-cell_select{
		padding: 10px 15px;
	}
	.weui-cell__hd{
		img{
			width: 25px;
			height: 25px;
			vertical-align: middle;
			margin-right: 10px;
		}
	}
	.weui-cell__bd{
		font-size: 14px;
	}
</style>