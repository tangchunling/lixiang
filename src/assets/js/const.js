import { base64 } from 'vux';

export const WEIXIN_LOGIN_URL = 'http://joyli.imaqu.com/api/weixin/index';

// 优惠券
export const COUPON = base64.encode('/coupon');

// 收益
export const MONEY = base64.encode('/money');

// 邀请分享
export const SHARE = base64.encode('/share');

// 订单
export const ORDER = base64.encode('/#/order');

// 订单详情
export const ORDER_DETAIL = base64.encode('/orderDetail');

// 二维码
export const CODE = base64.encode('/code');

// 预约
export const SUBSCRIBE = base64.encode('/subscribe');

// 我的车辆
export const CARD = base64.encode('/card');

export const WEIXIN_IMG_URL = 'http://img.imaqu.com/joyli';


/*export const WEIXIN_IMG_URL = 'https://m.joyliev.com/static/images';*/
