<template>
	<div style="height: 100%;">
		<div class="code">
			<img :src="data.qrCodeImg" alt="">
		</div>
	</div>
</template>
<script>
import { LXAjax } from '@/assets/js/utils';
import { WEIXIN_LOGIN_URL, SHARE } from '@/assets/js/const';

export default {
	name: 'code',
	data(){
		return {
			data: {
				city: '',
				province: '',
				qrCodeImg: '',
				userLogo: '',
				userName: '',
			},
			weixin: '',
		};
	},
	computed: {
	},
	components: {  },
	methods: {
		getData(){
			LXAjax('get', 'api/user/core/invite')
			.done(res => {
				this.data = res.data;
			})
			.fail(res => {
				if(res.flag == -1){
					window.location.href = WEIXIN_LOGIN_URL + '?state=' + SHARE;
				}
			})
			.error(err => {
				console.log(err);
			})
			.always(res => {
			});
		},
		getShare(){
			LXAjax('get', 'api/weixin/sign?url='+window.location.href)
			.done(res => {
				this.$wechat.config({
					debug: true,
					appId: res.data.appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
					timestamp:res.data.timestamp, // 必填，生成签名的时间戳
					nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
					signature: res.data.signature,// 必填，签名，见附录1
					// 需要分享的列表项:发送给朋友，分享到朋友圈，分享到QQ，分享到QQ空间
					jsApiList: [
						'onMenuShareAppMessage','onMenuShareTimeline'
					]
				});
			})
			.fail(res => {
			})
			.error(err => {
				console.log(err);
			})
			.always(res => {
			});
		}
	},
	mounted(){
		let $this = this;
		this.getData();
		this.getShare();
		// 处理验证失败的信息
		this.$wechat.error(function (res) {
			alert(res);
		});
		// 处理验证成功的信息
		this.$wechat.ready(() => {
			// 分享到朋友圈
			this.$wechat.onMenuShareTimeline({
				title: '里享出行', // 分享标题
				desc: '错过了高补贴时期跑滴滴，赚钱越来越少这一次，里享补贴你租电动汽车跑网约你还要错过吗？', // 分享描述
				link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl: $this.data.userLogo, // 分享图标
				success: function (res) {
				},
				cancel: function (res) {
				}
			});
			// 分享给朋友
			this.$wechat.onMenuShareAppMessage({
				title: '里享出行', // 分享标题
				desc: '错过了高补贴时期跑滴滴，赚钱越来越少这一次，里享补贴你租电动汽车跑网约你还要错过吗？', // 分享描述
				link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl: $this.data.userLogo, // 分享图标
				type: '', // 分享类型,music、video或link，不填默认为link
				dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				success: function (res) {
				},
				cancel: function (res) {
				}
			});
		});
	}
};
</script>
<style lang="less" scoped>
	.code{
		height: 100%;
		background: url('../assets/images/codebg.jpg') no-repeat;
		background-size: 100% 100%;
		img{
			position: fixed;
			bottom: 30px;
			left: 36px;
			width: 100px;
		}
	}
</style>