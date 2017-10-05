<template>
	<div class="subscribe">
		<x-header></x-header>
		<div class="product-content">
			<div class="weui-cells__title"></div>
			<div class="weui-cells">
				<div class="weui-cell">
					<div class="weui-cell__hd">
						<img src="http://img1.imgtn.bdimg.com/it/u=276042509,582481544&fm=27&gp=0.jpg" width="60" height="60"/>
					</div>
					<div class="weui-cell__bd">
						<div class="product-name">
							车名车名
						</div>
						<div class="product-dec">
							车名车名
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page-bd">
			<div class="weui-cells__title"></div>
			<div class="weui-cells">
				<div class="weui-cell">
					<div class="weui-cell__hd">
						<label class="weui-label">姓名</label>
					</div>
					<div class="weui-cell__bd">
						<input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入">
					</div>
					<div class="weui-cell__ft">
						<input type="radio" name="sex">先生
						<input type="radio" name="sex">女士
					</div>
				</div>
				<div class="weui-cell">
					<div class="weui-cell__hd">
						<label class="weui-label">手机号</label>
					</div>
					<div class="weui-cell__bd">
						<input class="weui-input" type="tel" pattern="[0-9]*" placeholder="请输入手机号">
					</div>
				</div>
				<div class="weui-cell weui-cell_select weui-cell_select-after">
					<div class="weui-cell__hd">
						<label class="weui-label">预约时间</label>
					</div>
					<div class="weui-cell__bd">
					</div>
				</div>
				<div class="weui-cell weui-cell_select weui-cell_select-after">
					<div class="weui-cell__hd">
						<label class="weui-label">预约门店</label>
					</div>
					<div class="weui-cell__bd">
					</div>
				</div>
			</div>
			<div class="weui-btn-area">
				<a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">确定预约</a>
			</div>
		</div>
	</div>
</template>
<script>
	import { XHeader } from 'vux'
	export default {
		data(){
			return {};
		},
		components: { XHeader },
	}
</script>
<style scoped lang="less">
	.subscribe{
		background: #f4f4f4;
		.product-content{
			background: #fff;
			img{
				margin-right: 10px;
			}
			.product-name{
				font-size: 13px;
			}
			.product-dec{
				font-size: 12px;
			}
		}
	}
	.page-bd{
		.weui-cells{
			font-size: 12px;
			.weui-label{
				width: 70px;
			}
			.weui-cell_select{
				padding: 10px 15px;
			}
		}
		.weui-btn-area a{
			font-size: 14px;
			background: #2487c0;
		}
	}
</style>