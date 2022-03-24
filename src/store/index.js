import Vue from 'vue';
import {createStore} from 'vuex';

const store = createStore({
	state: {
		myTodos:[],
		users:null,
		url:'http://localhost:8000/api'
	},
	mutations:{},
	getters:{},
	actions:{}
})

export default store