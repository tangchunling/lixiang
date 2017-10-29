<template>
	<div>
		<div class="head">
			<img src="../assets/images/grzx_jt2.png" alt="">
			<span>我的收益</span>
		</div>
		<div class="line"></div>
		<div class="shouyi">
			<div class="list">
				<h1>
					<img src="../assets/images/wdbd_lbx.png" alt="">
					<span>历史总收益</span>
				</h1>
				<p>1300元</p>
			</div>
			<div class="list">
				<h1>
					<img src="../assets/images/wdbd_lbx.png" alt="">
					<span>可提现收益</span>
				</h1>
				<p class="green">1300元</p>
			</div>
		</div>
		<div class="bdtishi">
			1级巴迪完成获得1000元贡献，2级巴迪完成获得300元贡献
		</div>
		<div class="title">
			<img src="../assets/images/wdbd_yx.png" alt="">
			<span>好友状态</span>
		</div>
		<div class="weui-flex weui-flex__title">
			<div class="weui-flex__item">
				我的好友
			</div>
			<div class="weui-flex__item">
				购车状态
			</div>
			<div class="weui-flex__item">
				他的朋友
			</div>
			<div class="weui-flex__item">
				完成签约
			</div>
		</div>
		<div class="weui-flex">
			<div class="weui-flex__item">
				我的好友
			</div>
			<div class="weui-flex__item">
				购车状态
			</div>
			<div class="weui-flex__item">
				他的朋友
			</div>
			<div class="weui-flex__item">
				完成签约
			</div>
		</div>
		<div class="total">
			合计：1级巴迪1000元+2级巴迪300元=1300元
		</div>
	</div>
</template>
<style lang="less" scoped>
	.head{
		height: 30px;
		line-height: 30px;
		text-align: center;
		padding: 10px;
		img{
			float: left;
			width: 12px;
			vertical-align: middle;
			margin-top: 6px;
		}
	}
	.line{
		background: #f4f4f4;
		height: 10px;
	}
	.shouyi .list{
		padding: 30px 10px;
		h1{
			img{
				width: 20px;
				vertical-align: middle;
				margin-right: 6px;
			}
			font-size: 18px;
			font-weight: 400;
		}
		p{
			font-size: 30px;
			margin-top: 15px;
			text-align: right;
			&.green{
				color: #169e83;
			}
		}
	}
	.bdtishi{
		background: #f4f4f4;
		padding: 10px;
		color: #aaa;
		font-size: 12px;
	}
	.title{
		padding: 10px;
		font-size: 14px;
		img{
			margin-right: 5px;
			width: 6px;
			vertical-align: middle;
		}
	}
	.weui-flex{
		text-align: center;
		&.weui-flex__title{
			background: #f4f4f4;
			color: #aaa;
		}
		padding: 10px 0;
		font-size: 12px;
	}
	.total{
		font-size: 12px;
		padding: 10px;
		text-align: right;
	}
</style>