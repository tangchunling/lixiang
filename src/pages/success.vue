<template>
	<div class="success">
		<x-header></x-header>
		<img src="../assets/images/yy_cgts.png" alt="">
		<h1>预约成功</h1>
		<p>稍后会有销售人员联系您<br>请注意接听电话</p>
	</div>
</template>
<script>
	import { XHeader } from 'vux';
	export default {
		data(){
			return {};
		},
		components: { XHeader },
	};
</script>
<style scoped lang="less">
	.success{
		background: #fff;
		text-align: center;
		img{
			width: 60px;
			margin-top: 100px;
		}
		h1{
			font-size: 16px;
			font-weight: 400;
			margin: 10px 0;
		}
		p{
			font-size: 14px;
			color: #666;
		}
	}
</style>