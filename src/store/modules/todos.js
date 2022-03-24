import axios from 'axios'
const state = () => ({
    myTodos:[]
}); 
const getters = {
    allTodos(state){
        return state.myTodos;
    },
    todoById(state){
        return (id) => {
            return state.myTodos.find(u => u.id == id);
        }
    }
};
 
const actions = {
    async fetchTodos({commit}){
       var response =  await axios.get('http://localhost:8000/api',);
       commit('saveAllTodos', response.data);
    },
    async addTodo({commit}, payload){
        // since our rest api only support get
        // here we simply update the store state
        commit('addTodo', payload);
    },
    async updateTodo({commit}, payload){
         // since our rest api only support get
        // here we simply update the store state
        commit('updateTodo', payload);
    },
    async deleteTodo({commit}, id){
         // since our rest api only support get
        // here we simply update the store state
        commit('deleteTodo', id);
    }
};
 
 
const mutations = {
    saveAllTodos(state, payload){
        state.myTodos = payload;
    },
    addTodo(state,payload){
    // this line of code is fake , when we have save no nedd to write this line
        payload.id = (state.myTodos.length + 1);
        state.myTodos.unshift(payload);
    },
    updateTodo(state, payload){
        let filteredtodos = state.myTodos.filter(u => u.id !== payload.id);
        filteredtodos.unshift(payload);
        state.myTodos = filteredtodos;
    },
    deleteTodo(state, id){
        state.myTodos = state.myTodos.filter(u => u.id !== id);
    }
};
 
export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}