<template>
	<div class="head">
		<img src="../assets/images/grzx_jt2.png" alt="" @click="back">
		<span>{{title}}</span>
	</div>
</template>
<script>
	export default {
		name: 'headTop',
		data(){
			return {};
		},
		props: {
			title: '',
		},
		methods: {
			back(){
				this.$router.back();
			}
		}
	};
</script>
<style scoped lang="less">
	.head{
		height: 30px;
		line-height: 30px;
		text-align: center;
		padding: 10px;
		background-color: #fff;
		img{
			float: left;
			width: 12px;
			vertical-align: middle;
			margin-top: 6px;
		}
	}
</style>