import Vue from 'vue'
import Router from 'vue-router'

const index = r => require.ensure([], () => r(require('@/pages/index')), 'index');
const detail = r => require.ensure([], () => r(require('@/pages/detail')), 'detail');
const login = r => require.ensure([], () => r(require('@/pages/login')), 'login');
const subscribe = r => require.ensure([], () => r(require('@/pages/subscribe')), 'subscribe');
const success = r => require.ensure([], () => r(require('@/pages/success')), 'success');
const personal = r => require.ensure([], () => r(require('@/pages/personal')), 'personal');
const order = r => require.ensure([], () => r(require('@/pages/order')), 'order');
const card = r => require.ensure([], () => r(require('@/pages/card')), 'card');
const code = r => require.ensure([], () => r(require('@/pages/code')), 'code');
const coupon = r => require.ensure([], () => r(require('@/pages/coupon')), 'coupon');
const orderDetail = r => require.ensure([], () => r(require('@/pages/orderDetail')), 'orderDetail');
const bdindex = r => require.ensure([], () => r(require('@/pages/bdindex')), 'bdindex');
const money = r => require.ensure([], () => r(require('@/pages/money')), 'money');
const share = r => require.ensure([], () => r(require('@/pages/share')), 'share');
const cardDetail = r => require.ensure([], () => r(require('@/pages/cardDetail')), 'cardDetail');
const storeList = r => require.ensure([], () => r(require('@/pages/storeList')), 'storeList');
// const index = (resolve) => { require(['@/pages/index'], resolve); };
// const detail = (resolve) => { require(['@/pages/detail'], resolve); };
// const login = (resolve) => { require(['@/pages/login'], resolve); };
// const subscribe = (resolve) => { require(['@/pages/subscribe'], resolve); };
// const success = (resolve) => { require(['@/pages/success'], resolve); };
// const personal = (resolve) => { require(['@/pages/personal'], resolve); };
// const order = (resolve) => { require(['@/pages/order'], resolve); };
// const card = (resolve) => { require(['@/pages/card'], resolve); };
// const code = (resolve) => { require(['@/pages/code'], resolve); };
// const coupon = (resolve) => { require(['@/pages/coupon'], resolve); };
// const orderDetail = (resolve) => { require(['@/pages/orderDetail'], resolve); };
// const bdindex = (resolve) => { require(['@/pages/bdindex'], resolve); };
// const money = (resolve) => { require(['@/pages/money'], resolve); };
// const share = (resolve) => { require(['@/pages/share'], resolve); };

Vue.use(Router)

export default new Router({
	// mode: 'history',
	routes: [
		{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/detail',
			name: 'detail',
			component: detail
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/subscribe',
			name: 'subscribe',
			component: subscribe
		},
		{
			path: '/success',
			name: 'success',
			component: success
		},
		{
			path: '/personal',
			name: 'personal',
			component: personal
		},
		{
			path: '/order',
			name: 'order',
			component: order
		},
		{
			path: '/code',
			name: 'code',
			component: code
		},
		{
			path: '/card',
			name: 'card',
			component: card
		},
		{
			path: '/coupon',
			name: 'coupon',
			component: coupon
		},
		{
			path: '/orderDetail',
			name: 'orderDetail',
			component: orderDetail
		},
		{
			path: '/bdindex',
			name: 'bdindex',
			component: bdindex
		},
		{
			path: '/money',
			name: 'money',
			component: money
		},
		{
			path: '/share',
			name: 'share',
			component: share
		},
		{
			path: '/cardDetail',
			name: 'cardDetail',
			component: cardDetail
		},
		{
			path: '/storeList',
			name: 'storeList',
			component: storeList
		}
	],
})
