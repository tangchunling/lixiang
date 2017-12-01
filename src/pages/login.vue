<template>
  <div class="login">
    <div class="login-title">
      <img src="../assets/images/logo.png" alt="">
    </div>
    <div class="login-form">
      <div class="number">
        <input type="tel" class="weui-input" placeholder="请输入手机号码" v-model="tel">
      </div>
      <div class="code">
        <input type="text" class="weui-input" placeholder="请输入验证码" v-model="code">
        <span @click="sendCode" v-if="isShow">获取验证码</span>
        <span v-if="!isShow">{{wait}}s后重新获取</span>
      </div>
    </div>
    <div class="weui-btn-area">
      <a href="javascript: void(0)" class="weui-btn weui-btn_primary" @click="login">手机号登录</a>
    </div>
  </div>
</template>
<script>
  import { LXAjax, checkPhone } from '@/assets/js/utils';
  import { base64 } from 'vux';
  console.log(base64.encode('/bdindex'))

  export default {
    data(){
      return {
        tel: '',
        wait: 60,
        isShow: true,
        code: '',
        userId: '',
        redirect: '/index',
      };
    },
    methods: {
      time(){
        let $this = this;
        this.isShow = false;
        let interval = window.setInterval(function() {
          if (($this.wait--) <= 0) {
            $this.wait = 60;
            $this.isShow = true;
            window.clearInterval(interval);
          }
        }, 1000);
      },
      sendCode(){
        if(this.tel === ''){
          this.$vux.toast.text('请输入手机号码', 'top');
          return;
        }
        if(!checkPhone(this.tel)){
          this.$vux.toast.text('手机号码不正确', 'top');
          return;
        }
        LXAjax('get', 'api/sendMobile?mobile='+this.tel)
          .done(res => {
            this.time();
            // this.list = res.couponInfo;
          })
          .fail(res => {
            this.$vux.toast.text(res.message, 'top');
          })
          .error(err => {
            console.log(err);
          })
          .always(res => {
          });
      },
      login(){
        if(this.tel === ''){
          this.$vux.toast.text('请输入手机号码', 'top');
          return;
        }
        if(this.code === ''){
          this.$vux.toast.text('请输入验证码', 'top');
          return;
        }
        LXAjax('post', 'api/login?mobile='+this.tel + '&verifyCode=' + this.code + '&openId=' + this.userId)
          .done(res => {
            this.$router.push(this.redirect);
          })
          .fail(res => {
          })
          .error(err => {
            console.log(err);
          })
          .always(res => {
            this.$vux.toast.text(res.message, 'top');
          });
      }
    },
    mounted(){
      this.userId = this.$route.query.openId;
      this.redirect = this.$route.query.redirect || '/index';
    }
  };
</script>
<style scoped lang="less">
  .login{
    .login-title{
      padding: 40px 0;
      text-align: center;
      img{
        width: 100px;
      }
    }
    .login-form{
      margin: 1.17647059em 15px 0.3em;
      .number{
        padding: 12px 10px;
      }
      .number,.code{
        background: #eee;
        border-radius: 4px;
        margin-bottom: 14px;
        display: flex;
        display: -webkit-flex;
        -webkit-align-items: center;
        align-items: center;
        .weui-input{
          font-size: 12px;
        }
      }
      .code{
        padding: 11px 10px;
        span{
          font-size: 12px;
          color: #2487c0;
          display: inline-block;
          width: 114px;
          text-align: right;
          border-left: 1px solid #aaa;
        }
      }
    }
    .weui-btn-area{
      margin-top: 30px;
    }
    .weui-btn-area a{
      font-size: 14px;
      background: #2487c0;
    }
  }
</style>
