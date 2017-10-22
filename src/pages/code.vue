<template>
	<div class="code">
		<x-header title="我的二维码"></x-header>
		<div class="line"></div>
		<div class="code-content">
			<div class="header">
				<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1517493529,2056196770&fm=27&gp=0.jpg" alt="头像">
				<div class="name">
					<p>名字名字</p>
					<span>浙江</span>
					<span>杭州</span>
				</div>
			</div>
			<div class="code-img">
				<img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1062989499,1682648318&fm=58" alt="二维码">
			</div>
			<p>扫描上面的二维码图案，<br>关注里享出行即可获得超值优惠券</p>
		</div>
	</div>
</template>
<script>
import { XHeader } from 'vux';
import { LXAjax } from '@/assets/js/utils';

export default {
	name: 'code',
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