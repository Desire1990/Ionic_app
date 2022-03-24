import Vue from 'vue';
import {createStore} from 'vuex';
import userModule from "./modules/users"
import todoModule from "./modules/todos"

const store = createStore({
	modules:{
        users: userModule,
        myTodos:todoModule
	},
})

export default store