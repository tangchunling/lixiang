<template>
	<div class="order">
		<headTop title="门店列表"></headTop>
		<div class="line"></div>
		<div class="list">
			<div class="item" v-for="item in list">
				<h1>{{item.name}}</h1>
				<p>{{item.cityName}}{{item.countyName}}{{item.address}}</p>
				<p>电话：<a :href="'tel:' + item.linkPhone">{{item.linkPhone}}</a></p>
			</div>
		</div>
	</div>
</template>
<script>
import { XHeader } from 'vux';
import { LXAjax } from '@/assets/js/utils';
import { WEIXIN_LOGIN_URL } from '@/assets/js/const';
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
			LXAjax('get', 'api/shop/list')
			.done(res => {
				this.list = res.shopInfo;
			})
			.fail(res => {
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
	.list{
		.item{
			padding: 10px;
			h1{
				font-size: 16px;
				font-weight: 400;
			}
			p{
				font-size: 14px;
				color: #666;
			}
			border-bottom: 10px solid #f1f2f4;
		}
	}
	.line{
		height: 10px;
		background-color: #f1f2f4;
	}
</style>