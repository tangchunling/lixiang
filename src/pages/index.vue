<template>
	<div>
		<headNav></headNav>
		<swiper :list="imgList" auto height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
		<div class="index-content weui-cells">
			<div class="weui-cell" @click="goDetail">
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
					<div class="product-num">
						<span>首付<strong>3.25</strong>万</span> | 
						<span>月供3250元</span>
					</div>
					<div class="product-remark">指导价</div>
				</div>
			</div>
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
					<div class="product-num">
						<span>首付<strong>3.25</strong>万</span> | 
						<span>月供3250元</span>
					</div>
					<div class="product-remark">指导价</div>
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
			list: [{
		        src: 'http://somedomain.somdomain/x.jpg',
		        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
		        title: '标题一',
		        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
		        url: '/component/cell'
		      }, {
		        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
		        title: '标题二',
		        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
		        url: {
		          path: '/component/radio',
		          replace: false
		        },
		      }],
		};
	},
	computed: {
		...getters,
	},
	components: {headNav, Swiper},
	methods: {
		goDetail(){
			this.$router.push('/detail');
		},
		...actions,
	},
	mounted(){
		// LXAjax('', 'aa', {
		// 	id: 1
		// })
		// .done(res => {
		// 	console.log(res);
		// })
		// .error(err => {
		// 	console.log(err);
		// });
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
			alert(res);
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
					alert(res);
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
<style scoped>
	.weui-cell__hd img{
		margin-right: 10px;
	}
	.product-name{
		font-size: 13px;
	}
	.product-dec{
		font-size: 12px;
	}
	.product-num{
		color: #e47100;
		font-size: 12px;
	}
	.product-num span strong{
		font-size: 16px;
	}
	.product-remark{
		font-size: 10px;
		color: #aaa;
	}
	.weui-cells{
		margin-top: 0;
	}
</style>