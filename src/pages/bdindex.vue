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
		<div class="rule">
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
		<!-- <div v-transfer-dom>
			<x-dialog v-model="showToast" class="dialog-demo">
				<div style="padding:15px;">
					<p></p>
				</div>
				<div @click="showToast=false">
					<span class="vux-close"></span>
				</div>
			</x-dialog>
		</div> -->
	</div>
</template>
<script>
	export default {
		name: 'app',
		data(){
			return {
				showToast: true,
			};
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
</style>