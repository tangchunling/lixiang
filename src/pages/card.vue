<template>
	<div class="order">
		<headTop title="我的车辆"></headTop>
		<div class="list">
			<div class="index-content weui-cells">
				<div class="weui-cell" @click="goDetail(item.productId)" v-for="item in list">
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
						<div class="product-num">
							<span>首付<strong>{{item.orderFirstAmount}}</strong></span> | 
							<span>月供{{item.paymentEach}}元</span>
						</div>
						<div class="product-remark">指导价{{item.productPrice}}万起</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { XHeader } from 'vux';
import { LXAjax } from '@/assets/js/utils';
import { WEIXIN_LOGIN_URL, CARD } from '@/assets/js/const';
import headTop from '@/components/headTop';

export default {
	name: 'card',
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
			LXAjax('get', 'api/user/core/carList')
			.done(res => {
				this.list = res.carList;
			})
			.fail(res => {
				if(res.flag == -1){
					window.location.href = WEIXIN_LOGIN_URL + '?state=' + CARD;
				}
			})
			.error(err => {
				console.log(err);
			})
			.always(res => {
			});
		},
		goDetail(id, productId){
			this.$router.push('/cardDetail?productId=' + productId);
		}
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
		.weui-cells{
			background: #fff;
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
		margin-top: 4px;
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