import Vue from 'vue'
import Router from 'vue-router'

const index = (resolve) => { require(['@/pages/index'], resolve); };
const detail = (resolve) => { require(['@/pages/detail'], resolve); };
const login = (resolve) => { require(['@/pages/login'], resolve); };
const subscribe = (resolve) => { require(['@/pages/subscribe'], resolve); };
const success = (resolve) => { require(['@/pages/success'], resolve); };
const personal = (resolve) => { require(['@/pages/personal'], resolve); };
const order = (resolve) => { require(['@/pages/order'], resolve); };
const card = (resolve) => { require(['@/pages/card'], resolve); };
const code = (resolve) => { require(['@/pages/code'], resolve); };
const coupon = (resolve) => { require(['@/pages/coupon'], resolve); };

Vue.use(Router)

export default new Router({
	mode: 'history',
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
		}
	],
})
