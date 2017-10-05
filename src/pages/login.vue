<template>
	<div class="login">
		<div class="login-title">
			我要买车
		</div>
		<div class="login-form">
			<div class="number">
				<input type="tel" class="weui-input" placeholder="请输入手机号码">
			</div>
			<div class="code">
				<input type="text" class="weui-input" placeholder="请输入验证码">
				<span>获取验证码</span>
			</div>
		</div>
		<div class="weui-btn-area">
			<a href="" class="weui-btn weui-btn_primary">手机号登录</a>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {};
		}
	};
</script>
<style scoped lang="less">
	.login{
		.login-title{
			padding: 40px 0;
			text-align: center;
		}
		.login-form{
			margin: 1.17647059em 15px 0.3em;
			.number{
				padding: 12px 10px;
			}
			.number,.code{
				background: #eee;
				border-radius: 4px;
				margin-bottom: 14px;
				display: flex;
				display: -webkit-flex;
				-webkit-align-items: center;
				align-items: center;
				.weui-input{
					font-size: 12px;
				}
			}
			.code{
				padding: 11px 10px;
				span{
					font-size: 12px;
					color: #2487c0;
					display: inline-block;
					width: 100px;
					text-align: right;
					border-left: 1px solid #aaa;
				}
			}
		}
		.weui-btn-area{
			margin-top: 30px;
		}
		.weui-btn-area a{
			font-size: 14px;
			background: #2487c0;
		}
	}
</style>