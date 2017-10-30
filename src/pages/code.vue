<template>
	<div class="code">
		<x-header title="我的二维码"></x-header>
		<div class="line"></div>
		<div class="code-content">
			<div class="header">
				<img :src="data.userLogo" alt="头像">
				<div class="name">
					<p>{{data.userName}}</p>
					<span>{{data.province}}</span>
					<span>{{data.city}}</span>
				</div>
			</div>
			<div class="code-img">
				<img :src="data.qrCodeImg" alt="二维码">
			</div>
			<p>扫描上面的二维码图案，<br>关注里享出行即可获得超值优惠券</p>
		</div>
	</div>
</template>
<script>
import { XHeader } from 'vux';
import { LXAjax } from '@/assets/js/utils';
import { WEIXIN_LOGIN_URL, CODE } from '@/assets/js/const';

export default {
	name: 'code',
	data(){
		return {
			data: {
				city: '',
				province: '',
				qrCodeImg: '',
				userLogo: '',
				userName: '',
			},
		};
	},
	computed: {
	},
	components: { XHeader },
	methods: {
		getData(){
			LXAjax('get', 'api/user/core/invite')
			.done(res => {
				this.data = res.data;
			})
			.fail(res => {
				if(res.flag == -2){
					window.location.href = WEIXIN_LOGIN_URL + '?state=' + CODE;
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
	.line{
		height: 10px;
		background: #fafafa;
	}
	.code-content{
		padding: 55px 20px 0;
		.header{
			img{
				width: 50px;
				height: 50px;
				margin-right: 10px;
			}
			.name{
				display: inline-block;
				span{
					color: #aaa;
					font-size: 12px;
				}
			}
		}
		.code-img{
			text-align: center;
			img{
				width: 60%;
			}
			margin-top: 35px;
		}
		>p{
			margin-top: 30px;
			text-align: center;
			color: #aaa;
			font-size: 12px;
		}
	}
</style>