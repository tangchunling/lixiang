<template>
  <div class="code">
    <headTop title="我的二维码"></headTop>
    <div class="line"></div>
    <div class="code-content">
      <div class="header">
        <img :src="data.userLogo" alt="头像">
        <div class="name">
          <p>{{data.userName}}</p>
          <span>{{data.province}}</span>
          <span>{{data.city}}</span>
        </div>
      </div>
      <div class="code-img">
        <img :src="data.qrCodeImg" alt="二维码">
      </div>
      <p>扫描上面的二维码图案，<br>关注里享出行即可获得超值优惠券</p>
    </div>
  </div>
</template>
<script>
  import { XHeader } from 'vux';
  import { LXAjax } from '@/assets/js/utils';
  import { WEIXIN_LOGIN_URL, CODE } from '@/assets/js/const';
  import headTop from '@/components/headTop';

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
    components: { XHeader, headTop },
    methods: {
      getData(){
        LXAjax('get', 'api/user/core/invite')
          .done(res => {
            this.data = res.data;
            // 处理验证成功的信息
            this.$wechat.ready(() => {
              // 分享到朋友圈
              this.$wechat.onMenuShareTimeline({
                title: '里享出行', // 分享标题
                desc: '错过了高补贴时期跑滴滴，赚钱越来越少这一次，里享补贴你租电动汽车跑网约你还要错过吗？', // 分享描述
                link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: res.data.userLogo, // 分享图标
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
                imgUrl: res.data.userLogo, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function (res) {
                },
                cancel: function (res) {
                }
              });
            });
          })
          .fail(res => {
            if(res.flag == -1){
              window.location.href = WEIXIN_LOGIN_URL + '?state=' + CODE;
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
              debug: false,
              appId: res.appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
              timestamp:res.sign.timestamp, // 必填，生成签名的时间戳
              nonceStr: res.sign.nonceStr, // 必填，生成签名的随机串
              signature: res.sign.signature,// 必填，签名，见附录1
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
      this.getData();
      this.getShare();
    }
  };
</script>
<style lang="less" scoped>
  .line{
    height: 10px;
    background: #fafafa;
  }
  .code-content{
    padding: 55px 20px 0;
    .header{
      img{
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      .name{
        display: inline-block;
        span{
          color: #aaa;
          font-size: 12px;
        }
      }
    }
    .code-img{
      text-align: center;
      img{
        width: 60%;
      }
      margin-top: 35px;
    }
    >p{
      margin-top: 30px;
      text-align: center;
      color: #aaa;
      font-size: 12px;
    }
  }
</style>
