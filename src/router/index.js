import Vue from 'vue'
import Router from 'vue-router'

const index = (resolve) => { require(['@/pages/index'], resolve); };
const detail = (resolve) => { require(['@/pages/detail'], resolve); };
const login = (resolve) => { require(['@/pages/login'], resolve); };
const subscribe = (resolve) => { require(['@/pages/subscribe'], resolve); };
const success = (resolve) => { require(['@/pages/success'], resolve); };

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
		}
	],
})
