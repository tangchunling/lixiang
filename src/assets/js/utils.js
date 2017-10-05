import axios from 'axios';

/**
 * 判断是否是微信浏览器
 * @author dachun <tangchunling@freshfirst.cn>
 * @date   2017-09-28
 * @return {[type]}   [description]
 */
export const isWeixin = () => {
	const ua = window.navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) === 'micromessenger'){
		return true;
	}
	else{
		return false;
	}
};
/**
 * 封装请求
 * @author dachun <tangchunling@freshfirst.cn>
 * @date   2017-09-28
 * @param  {String}   method [description]
 * @param  {String}   api    [description]
 * @param  {Object}   data   [description]
 * @return {[type]}          [description]
 */
export const LXAjax = (method = 'post', api = '', data = {}) => {
	let httpError = () => {};
	let done = () => {};
	let fail = () => {};
	let error = () => {};
	let always = () => {};

	api = 'https://some-domain.com/api/' + api;

	let $http = null;
	if(method === 'get'){
		$http = axios.get(api, data);
	}
	else{
		$http = axios.post(api, data);
	}
	if($http === null){
		$http = axios.post(api, data);
	}

	$http.then(res => {
		if(res.status == 200){
			done(res.data);
		}
		else{
			error(res.data);
		}
		always(res.data);
	})
	.catch(err => {
		httpError(err);
	});

	return {
		done(cb = function(){}){
			done = cb;
			return this;
		},
		fail(cb){
			fail = cb;
			return this;
		},
		notOK(cb){
			error = cb;
			return this;
		},
		error(cb){
			httpError = cb;
			return this;
		},
		always(cb){
			always = cb;
			return this;
		},
	};
};