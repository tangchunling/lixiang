<template>
	<div>
		<headNav></headNav>
		<swiper :list="imgList" auto dots-class="custom-bottom" dots-position="center" loop></swiper>
		<div class="index-content weui-cells">
			<div class="weui-cell" @click="goDetail(item.productId)" v-for="item in list">
				<div class="weui-cell__hd">
					<img :src="'http://img.imaqu.com/joyli' + item.picture + '_200x200.jpg'" width="90"/>
				</div>
				<div class="weui-cell__bd">
					<div class="product-name">
						{{item.title}}
					</div>
					<div class="product-dec">
						{{item.subTitle}}
					</div>
					<div class="product-num">
						<span>首付<strong>{{item.paymentDeposit}}</strong></span> | 
						<span>月供{{item.paymentEach}}元</span>
					</div>
					<div class="product-remark">指导价{{item.price}}万起</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { LXAjax } from '@/assets/js/utils';
import headNav from '@/components/headNav';
import { Swiper } from 'vux';


const getters = mapGetters([
	'login',
]);

const actions = mapActions([
]);

export default {
	name: 'app',
	data(){
		return {
			imgList: [],
			list: [],
		};
	},
	computed: {
		...getters,
	},
	components: {headNav, Swiper},
	methods: {
		goDetail(id){
			this.$router.push('/detail?productId='+id);
		},
		getData(){
			this.$vux.loading.show();
			LXAjax('get', 'api/index')
			.done(res => {
				this.imgList = res.adList.map(el => {
					el.url = el.imgLink;
					el.img = el.imgUrl;
					el.title = '';
					return el;
				});
				this.list = res.productList || [];
			})
			.error(err => {
				console.log(err);
			})
			.always(res => {
				this.$vux.loading.hide();
			});
		},
		...actions,
	},
	mounted(){
		this.getData();
		this.$wechat.config({
			debug: false,
			appId: '', // 和获取Ticke的必须一样------必填，公众号的唯一标识
			timestamp:'', // 必填，生成签名的时间戳
			nonceStr: '', // 必填，生成签名的随机串
			signature: '',// 必填，签名，见附录1
			// 需要分享的列表项:发送给朋友，分享到朋友圈，分享到QQ，分享到QQ空间
			jsApiList: [
				'onMenuShareAppMessage','onMenuShareTimeline'
			]
		});
		// 处理验证失败的信息
		this.$wechat.error(function (res) {
			// alert(res);
		});
		// 处理验证成功的信息
		this.$wechat.ready(function () {
			// alert(window.location.href.split('#')[0]);
			// 分享到朋友圈
			this.$wechat.onMenuShareTimeline({
				title: '标题', // 分享标题
				link: window.location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl: '', // 分享图标
				success: function (res) {
					// 用户确认分享后执行的回调函数
					// logUtil.printLog("分享到朋友圈成功返回的信息为:",res);
					// _this.showMsg("分享成功!")
				},
				cancel: function (res) {
					// alert(res);
					// 用户取消分享后执行的回调函数
					// logUtil.printLog("取消分享到朋友圈返回的信息为:",res);
				}
			});
			// 分享给朋友
			this.$wechat.onMenuShareAppMessage({
				title: '', // 分享标题
				desc: '', // 分享描述
				link: window.location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl: '', // 分享图标
				type: '', // 分享类型,music、video或link，不填默认为link
				dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				success: function (res) {
					// 用户确认分享后执行的回调函数
					// logUtil.printLog("分享给朋友成功返回的信息为:",res);
				},
				cancel: function (res) {
					// 用户取消分享后执行的回调函数
					// logUtil.printLog("取消分享给朋友返回的信息为:",res);
				}
			});
		});
	}
};
</script>
<style lang="less" scoped>
	.weui-cell__hd img{
		margin-right: 10px;
	}
	.product-name{
		font-size: 16px;
		margin-bottom: 4px;
	}
	.product-dec{
		font-size: 14px;
	}
	.product-num{
		color: #e47100;
		font-size: 14px;
		margin-top: 14px;
	}
	.product-num span strong{
		font-size: 16px;
	}
	.product-remark{
		font-size: 12px;
		color: #aaa;
		margin-top: 4px;
	}
	.weui-cells{
		margin-top: 0;
		.weui-cell{
			padding-top: 20px;
			padding-bottom: 20px;
		}
	}
</style>