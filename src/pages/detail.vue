<template>
	<div>
		<headNav></headNav>
		<div v-if="carInfo === ''">请选择商品</div>
		<template v-else>
			<swiper :list="imgList" auto height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
			<div class="block">
				<div class="pro-name">{{carInfo.title}}</div>
				<div class="pro-dec">{{carInfo.subTitle}}</div>
				<div class="pro-remark">
					<span>指导价{{carInfo.price}}万起</span>
					<span>已售：{{carInfo.sales}}辆</span>
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
							<span>{{carInfo.paymentDeposit}}</span>
						</div>
					</div>
					<div class="weui-flex__item">
						<div class="flex-content">
							<label>月供</label>
							<span>{{carInfo.paymentEach}}</span>
						</div>
					</div>
					<div class="weui-flex__item">
						<div class="flex-content">
							<label>期数</label>
							<span>{{carInfo.paymentTerm}}</span>
						</div>
					</div>
				</div>
				<ul class="list">
					<li>
						.
						<span class="tag" v-for="item in carInfo.paymentTags">{{item}}</span>
					</li>
					<li>
						. {{carInfo.paymentRemark}}
					</li>
				</ul>
				<div class="title after">
					<img src="../assets/images/xq_jt.png" alt=""><span>一年后</span>
				</div>
				<ul class="list">
					<li>
						.
						<span class="red">尾款购车{{carInfo.paymentTail}}元</span>
					</li>
					<li>
						. 尾款也可分期{{carInfo.paymentTerm}}*{{carInfo.paymentEach}}元
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
			<tab :line-width="1" custom-bar-width="60px" v-model="index">
				<tab-item>车辆信息</tab-item>
				<tab-item>购车说明</tab-item>
			</tab>
			<div class="line"></div>
			<div class="block" v-html="carInfo.desc" v-if="index === 0"></div>
			<div class="block" v-html="carInfo.paymentRemark" v-if="index === 1">
			</div>
			<!-- <div class="block">
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
			</div> -->
			<div class="height"></div>
			<div class="detail-foot">
				<a href="tel:400123456">
					<img src="" alt="">
					<span>400-123-1234</span>
				</a>
				<a @click="goSubscribe">预约到店</a>
			</div>
		</template>
	</div>
</template>
<script>
	import headNav from '@/components/headNav';
	import { Swiper, Tab, TabItem, Cell, Group } from 'vux';
	import { LXAjax } from '@/assets/js/utils';

	export default {
		data(){
			return {
				imgList: [],
				productId: '',
				carInfo: '',
				index: 0,
			};
		},
		methods: {
			getDetail(){
				let api = 'api/buy/detail?productId=' + this.productId;
				LXAjax('get', api)
				.done(res => {
					this.imgList = res.carInfo.images.map(el => {
						let obj = {};
						obj.url = '';
						obj.img = 'http://img.imaqu.com' + el;
						obj.title = '';
						return obj;
					});
					res.carInfo.paymentTags = res.carInfo.paymentTags.split(',');
					this.carInfo = res.carInfo;
				})
				.error(err => {
					console.log(err);
				});
			},
			goSubscribe(){
				this.$router.push('/subscribe?productId=' + this.productId);
			}
		},
		components: {headNav, Swiper, Tab, TabItem, Cell, Group},
		mounted(){
			this.productId = Number(this.$route.query.productId);
			this.getDetail();
		}
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
				margin-right: 4px;
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