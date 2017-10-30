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
				if(res.flag == -2){
					window.location.href = WEIXIN_LOGIN_URL + '?state=' + SHARE;
				}
			})
			.error(err => {
				console.log(err);
			})
			.always(res => {
			});
		},
	},
	mounted(){
		this.getData();
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