<template>
<div>
	<div class="head">
		<div class="left">
			<img src="../assets/images/logo.png" alt="" class="logo">
		</div>
		<div class="right" @click="showMask">
			<img src="../assets/images/sy_lb.png" alt="">
		</div>
	</div>
	<div class="side-right" v-if="maskshow">
		<div class="mask" @click="hideMask"></div>
		<div class="side-right-content">
			<ul>
				<li>
					<div @click="goIndex">
						首页
					</div>
					<div>
						信用评估
					</div>
				</li>
				<li>
					<div @click="goOrder">
						我的订单
					</div>
					<div>
						新手指南
					</div>
				</li>
				<li>
					<div>
						关于里享
					</div>
					<div>
						常见问题
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>
<script>
	export default {
		data(){
			return {
				maskshow: false,
			};
		},
		methods: {
			showMask(){
				this.maskshow = true;
			},
			hideMask(){
				this.maskshow = !true;
			},
			goIndex(){
				this.$router.push('/');
				this.hideMask();
			},
			goOrder(){
				this.$router.push('/order');
				this.hideMask();
			}
		}
	};
</script>
<style scoped lang="less">
	.head{
		height: 60px;
		line-height: 60px;
		padding: 0 10px;
		overflow: hidden;
		border-bottom: 1px solid #eee;
		.logo{
			width: 100px;
			vertical-align: middle;
		}
	}
	.head .left{
		float: left;
	}
	.head .right{
		float: right;
		img{
			width: 26px;
			vertical-align: middle;
		}
	}
	.side-right{
		.mask{
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.5);
			z-index: 10;
		}
		.side-right-content{
			background: #fff;
			position: fixed;
			top: 0;
			bottom: 0;
			right: 0;
			width: 210px;
			padding-left: 10px;
			z-index: 99;
			ul li{
				border-bottom: 1px solid #eee;
				list-style: none;
				padding: 10px 0;
				&:last-child{
					border-bottom: none;
				}
				div{
					padding: 10px;
				}
			}
		}
	}
</style>