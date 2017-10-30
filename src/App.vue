<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		name: 'app',
		data(){
			return {};
		},
		mounted(){
			// window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx683519d9156322f9&redirect_uri=http://test.jiuqu1688.com/oAuth?requestType=1&version=1.0&response_type=code&scope=snsapi_userinfo&shopId=shopId#wechat_redirect";
		}
	};
</script>
<style>
	#app,body,html{
		height: 100%;
	}
	.nodata{
		text-align: center;
		padding: 40px 0;
		font-size: 14px;
		color: #aaa;
	}
	.carinfo img{
		width: 100%;
	}
</style>