<template>
	<div>
		<h1>邀请好友跑网约享现金奖励</h1>
		<img src="../assets/images/sy_qb.png" alt="" class="mainimg">
		<div class="list">
			<h2>邀请好友</h2>
			<p>Ta,可获得<strong>1000元</strong>租车优惠券</p>
		</div>
		<div class="list">
			<h2>好友签约</h2>
			<p>您可获得<strong>1000元</strong>及多重现金奖励</p>
		</div>
		<div class="line"></div>
		<div class="rule" @click="showToast=true">
			<span>查看规则</span>
			<img src="../assets/images/grzx_jt1.png" alt="">
		</div>
		<div class="height"></div>
		<div class="footer">
			<a href="javascript: void(0)" @click="goShare">
				<img src="../assets/images/sy_yqhy.png" alt="">
				<span>邀请好友</span>
			</a>
			<a href="javascript: void(0)" @click="goMoney">
				<img src="../assets/images/sy_ckhy.png" alt="">
				<span>查看好友</span>
			</a>
		</div>
		<div>
			<x-dialog v-model="showToast" class="dialog-demo" style="width: 90%;">
				<div class="rule-content">
					<h1>参与方式：</h1>
					<p>1.点击左下方“邀约好友”按钮，根据提示分享活动给好友；</p>
					<p>2.好友通过您分享的活动页关注“里享出行”服务号后，您可通过点击“查看好友”按钮，进入“好友列表”，查看好友签约进度。</p>
					<h1>奖励明细：</h1>
					<p>1.若您的好友状态为已签约，您可获得1000元礼品卡奖励；</p>
					<p>2.若您介绍的朋友邀请新朋友完成签约，您同时可获得300元礼品卡奖励。</p>
					<h1>奖励兑换：</h1>
					<p>1.公众号后台留言联系客服，要求兑换礼品卡；兑换周期：3-5个工作日。</p>
					<h1>Tips：</h1>
					<p>1. 此推荐活动目前只在杭州地区推广。</p>
					<p>2. 通过不正当手段获得奖励，“里享出行”有权撤销获取资格。</p>
					<p>3. 本次活动最终解释权归“理想租车”所有。</p>
				</div>
				<div @click="showToast=false">
					<span class="vux-close"></span>
				</div>
			</x-dialog>
		</div>
	</div>
</template>
<script>
	import { XDialog } from 'vux';

	export default {
		name: 'app',
		data(){
			return {
				showToast: false,
			};
		},
		components: {
			XDialog,
		},
		methods: {
			goShare(){
				this.$router.push('/share');
			},
			goMoney(){
				this.$router.push('/money');
			}
		},
		mounted(){
		}
	};
</script>
<style lang="less" scoped>
	@import '~vux/src/styles/close';
	h1{
		font-size: 24px;
		padding: 40px 0;
		text-align: center;
	}
	.mainimg{
		width: 70%;
		display: block;
		margin: auto;
	}
	.list{
		padding-bottom: 30px;
		text-align: center;
		h2{
			font-size: 20px;
			font-weight: 400;
			margin-bottom: 15px;
		}
		p{
			font-size: 14px;
			strong{
				font-size: 18px;
				color: #e47100;
			}
		}
	}
	.footer{
		position: fixed;
		width: 100%;
		bottom: 0;
		padding: 4px 0;
		background: #169e83;
		a{
			width: 50%;
			float: left;
			display: block;
			text-align: center;
			color: #fff;
			font-size: 14px;
			padding: 10px 0;
			border-right: 1px solid #0c7e67;
			margin-right: -1px;
			img{
				vertical-align: middle;
				width: 24px;
				margin-right: 2px;
			}
		}
	}
	.rule{
		font-size: 14px;
		color: #888;
		text-align: center;
		img{
			width: 8px;
			vertical-align: middle;
			padding: 14px 0;
		}
	}
	.line{
		height: 5px;
		background: #fafafa;
	}
	.height{
		height: 50px;
	}
	.rule-content{
		padding:10px;height: 400px;overflow-y: scroll;
		text-align: left;
		h1{
			font-weight: 400;
			font-size: 14px;
			text-align: left;
			padding: 0;
			margin-top: 10px;
		}
		p{
			font-size: 12px;
			color: #aaa;
		}
	}
	.vux-close {
		margin-top: 8px;
		margin-bottom: 8px;
	}
</style>