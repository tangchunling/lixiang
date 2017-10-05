
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		login: {
			name: '大春',
			wxChat: 'dachun',
		}
	},
	getters: {
		login: state => state.login,
	}
});