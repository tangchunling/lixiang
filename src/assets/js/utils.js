import axios from 'axios';

const isDev = process.env.NODE_ENV === 'production';

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

	if(isDev){
		api = 'http://joyli.imaqu.com' + api;
	}

	let $http = null;
	if(method === 'get'){
		$http = axios.get(api, data, {withCredentials:true});
	}
	else{
		$http = axios.post(api, data, {withCredentials:true});
	}
	if($http === null){
		$http = axios.post(api, data, {withCredentials:true});
	}

	$http.then(res => {
		console.log(res);
		if(res.status == 200){
			if(res.data.flag === 1){
				done(res.data);
			}
			else{
				fail(res.data);
			}
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