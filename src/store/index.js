import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                title: 'todo item a',
                completed: false
            },
            {
                title: 'todo item b',
                completed: true
            },
            {
                title: 'todo item c',
                completed: false
            },
        ]
    },
    getters: {
        getCompletedTodos(state) {
            return state.todos.filter(todo => todo.completed).length;
        },
        getPendingTodos(state) {
            return state.todos.filter(todo => !todo.completed).length;
        },
    },
    mutations: {
        NEW_TODO(state, todoItem) {
          state.todos.push({
              title: todoItem,
              completed: false
          })
        },
        DELETE_TODO(state, todoItem) {
          const toDeleteIndex = state.todos.indexOf(todoItem);
            state.todos.splice(toDeleteIndex, 1);
        },
        TOGGLE_TODO_STATUS(state, todoItem) {
            todoItem.completed = !todoItem.completed;
        },
    },
    actions: {
        addNewTodoItem({commit}, newTodoItem) {
            commit("NEW_TODO", newTodoItem);
        },
        deleteTodoItem({commit}, todoItem) {
            commit("DELETE_TODO", todoItem);
        },
        toggleTodoStatus({commit}, todoItem) {
            commit("TOGGLE_TODO_STATUS", todoItem);
        },
    },
})
