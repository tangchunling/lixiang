<template>
	<div>
		<headNav></headNav>
		<swiper :list="imgList" auto height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
		<div class="block">
			<div class="pro-name">车名车名车名</div>
			<div class="pro-dec">车名车名车名</div>
			<div class="pro-remark">
				<span>指导价</span>
				<span>已售：1200辆</span>
			</div>
		</div>
		<div class="line"></div>
		<div class="block detail-num">
			<div class="title">
				<img src="../assets/images/xq_jt.png" alt=""><span>先用一年</span>
			</div>
			<div class="weui-flex">
				<div class="weui-flex__item">
					<div class="flex-content">
						<label>首付</label>
						<span>2.45万</span>
					</div>
				</div>
				<div class="weui-flex__item">
					<div class="flex-content">
						<label>月供</label>
						<span>2.45万</span>
					</div>
				</div>
				<div class="weui-flex__item">
					<div class="flex-content">
						<label>期数</label>
						<span>2.45万</span>
					</div>
				</div>
			</div>
			<ul class="list">
				<li>
					.
					<span class="tag">含购置说</span>
					<span class="tag">送一年保险</span>
				</li>
				<li>
					. 需向门店支付交车服务费6000元
				</li>
			</ul>
			<div class="title after">
				<img src="../assets/images/xq_jt.png" alt=""><span>一年后</span>
			</div>
			<ul class="list">
				<li>
					.
					<span class="red">尾款购车222元</span>
				</li>
				<li>
					. 尾款也可分期24*1200元
				</li>
			</ul>
		</div>
		<div class="line"></div>
		<div class="block">
			<div class="store">
				<span>全部门店</span>
				<span>全部999家门店</span>
			</div>
			<div class="store-name">
				什么什么什么公司
			</div>
			<div class="store-dec">
				杭州滨江啥公司
			</div>
		</div>
		<div class="line"></div>
		<tab :line-width="1" custom-bar-width="60px">
			<tab-item selected>车辆信息</tab-item>
			<tab-item>购车说明</tab-item>
		</tab>
		<div class="line"></div>
		<div class="block">
			<div class="line-title">—— 基本配置 ——</div>
			<group label-width="5em" class="config">
				<cell primary="conten" title="车身结构" value="5门5座" style="font-size: 10px;"></cell>
				<cell primary="conten" title="长/宽/高" value="11/12/12" style="font-size: 10px;"></cell>
				<cell primary="conten" title="发动机" value="11/12/12" style="font-size: 10px;"></cell>
				<cell primary="conten" title="电池" value="11/12/12" style="font-size: 10px;"></cell>
				<cell primary="conten" title="充电" value="11/12/12" style="font-size: 10px;"></cell>
				<cell primary="conten" title="经济性" value="11/12/12" style="font-size: 10px;"></cell>
				<cell primary="conten" title="质保" value="11/12/12" style="font-size: 10px;"></cell>
				<cell primary="conten" title="车辆配色" value="11/12/12" style="font-size: 10px;"></cell>
			</group>
			<div class="line-title">—— 核心技术 ——</div>
			<div class="line-title">—— 车型亮点 ——</div>
		</div>
		<div class="height"></div>
		<div class="detail-foot">
			<a href="tel:400123456">
				<img src="" alt="">
				<span>400-123-1234</span>
			</a>
			<a href="">预约到店</a>
		</div>
	</div>
</template>
<script>
	import headNav from '@/components/headNav';
	import { Swiper, Tab, TabItem, Cell, Group } from 'vux'

	export default {
		data(){
			return {
				imgList: [
					{
						url: '',
						img: 'http://f11.baidu.com/it/u=2881303562,336932824&fm=72',
						title: '',
					},
					{
						url: '',
						img: 'http://img5.imgtn.bdimg.com/it/u=500369747,3965214646&fm=27&gp=0.jpg',
						title: '',
					},
				],
			};
		},
		components: {headNav, Swiper, Tab, TabItem, Cell, Group},
	};
</script>
<style scoped lang="less">
	.block{
		padding: 10px;
	}
	.pro-name{
		font-size: 13px;
	}
	.pro-dec{
		font-size: 12px;
	}
	.pro-remark{
		font-size: 10px;
		color: #aaa;
		margin-top: 12px;
		span:last-child{
			float: right;
		}
	}
	.line{
		height: 10px;
		background: #eee;
	}
	.detail-num{
		.title{
			font-size: 12px;
			padding: 10px 0;
			&.after{
				margin-bottom: -14px;
				margin-top: 14px;
			}
			img{
				width: 10px;
				vertical-align: middle;
				margin-right: 4px;
			}
		}
		.weui-flex{
			background: #eee;
			padding: 14px 0;
			overflow: hidden;
			border-radius: 4px;
		}
		.weui-flex__item{
			border-right: 1px solid #000;
			text-align:center;
			&:last-child{
				border: none;
			}
			label{
				display: block;
				font-size: 10px;
				color: #888;
			}
			span{
				font-size: 13px;
				color: #e47100;
			}
		}
	}
	.list{
		margin-top: 12px;
		li{
			span.tag{
				color: #2487c0;
				display: inline-block;
				padding: 2px 4px;
				border: 1px solid #2487c0;
				border-radius: 4px;
			}
			font-size: 10px;
			color: #888;
			margin-top: 6px;
		}
	}
	.store{
		font-size: 14px;
		span:last-child{
			font-size: 10px;
			color: #888;
			float: right;
		}
	}
	.store-name{
		font-size: 12px;
		margin-top: 10px;
	}
	.store-dec{
		font-size: 10px;
		color: #888;
	}
	.line-title{
		text-align: center;
		font-size: 12px;
		color: #888;
		margin-top: 20px;
	}
	.detail-foot{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		display: -webkit-flex;
		z-index: 9;
		a{
			text-align: center;
			height: 40px;
			line-height: 40px;
			color: #fff;
			font-size: 14px;
		}
		a:first-child{
			flex: 1;
			-webkit-flex: 1;
			background: #e47100;
		}
		a:last-child{
			width: 160px;
			background: #2487c0;
		}
	}
	.height{
		height: 50px;
	}
</style>