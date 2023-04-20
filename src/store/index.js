import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {getDocs, onSnapshot} from "firebase/firestore"
import {getAllDocumentsQuery, setDocInTodos, todosCollectionRef, updateTodoStatus} from "@/middleware/bindings"

export default new Vuex.Store({
    state: {
        user: {},
        todos: [],
        ALO: 'GAGO',
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
        SET_TODOS(state, todos) {
            state.todos = todos;
        },
        LOGIN(state, key) {
            state.user.accessKey = key;
        },
        NEW_TODO(state, todoItem) {
          state.todos.push({
              task_name: todoItem,
              completed: false
          })
        },
        NEW_TODO_FROM_FIRESTORE(state, todoItem) {
            console.log('todoitem in NEW_TODO_FROM_FIRESTORE', todoItem)
          state.todos.push(todoItem)
        },
        DELETE_TODO(state, todoItem) {
          const toDeleteIndex = state.todos.indexOf(todoItem);
            state.todos.splice(toDeleteIndex, 1);
        },
        UPDATE_TODO(state, todoItem, todoId) {
          const toUpdateIndex = state.todos.findIndex(todoItem => todoItem.id = todoId);
            console.log('data ---> ', state.todos, toUpdateIndex)
            state.todos[toUpdateIndex] = {
                completed: todoItem.completed,
                task_name: todoItem.task_name
            }
        },
        TOGGLE_TODO_STATUS(state, todoItem) {
            console.log('bf', todoItem)
            todoItem.completed = !todoItem.completed;
            console.log('af', todoItem)
        },
    },
    actions: {
        watchTodos({commit}) {
            const queryAllDocsFromTodos = getAllDocumentsQuery('todos')
            onSnapshot(queryAllDocsFromTodos, (doc) => {
                console.log("Current data: ", doc);
                console.log('docchanges', doc.docChanges().forEach((change) => {
                        console.log('!AAA', change.type)
                        if (change.type === "added") {
                            console.log("New todo entity! -> : ", change.doc.data(), change.doc.id);
                            console.log('adding new todo item via COMMIT', {id: change.doc.id, ...change.doc.data()})
                            commit("NEW_TODO_FROM_FIRESTORE", {id: change.doc.id, ...change.doc.data()})
                        }
                        if (change.type === "modified") {
                            console.log("Modified todo entity! -> : ", change.doc.data(), change.doc.id);
                            console.log('updating a new todo item via method/action', {id: change.doc.id, ...change.doc.data()})
                            commit("UPDATE_TODO", change.doc.id, change.doc.data())
                        }
                        if (change.type === "removed") {
                            console.log("Removed todo entity! -> : ", change.doc.data(), change.doc.id);
                        }
                    })
                )
            });
        },
        async syncTodoList({commit}) {
            const todoCollection = todosCollectionRef()
            let allTodos = await getDocs(todoCollection)
            const documents = [];

            console.log('allTodos.docs', allTodos.docs[0])

            let counter=0;
            allTodos.forEach((todo)=>{
                counter++
                let id = todo.id;
                let {task_name, completed} = todo.data();

                documents.push({ task_name, id, completed });
            })
            console.log('COUNTER', counter)
            console.log('allTodos HEREEEE', documents)
            commit('SET_TODOS', documents)
            return true;
        },
        async handleSubmit({commit}, loginData) {
            const auth = getAuth();
            console.log('loginData', loginData);
            try {
                const response = await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
                console.log('response', response);
                commit("LOGIN", response._tokenResponse.idToken);
                return {success: true};
            } catch (err) {
                console.log('3e', err);
                return {err};
            }
            // const response = await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
            // console.log('response', response);
            // console.log('response._tokenResponse')
                // .then(user => {
                //     console.log('IN LOGIN user.data', user)
                //     commit("LOGIN", user._tokenResponse.idToken);
                //     return {success: true};
                // }, err => {
                //     console.log('AAAAAAAAAA err', err)
                //     return {err};
                // })
        },
        // eslint-disable-next-line no-unused-vars
        async addNewTodoItem({commit}, newTodoItem) {
            console.log('WORKK IN addNewTodoItem', newTodoItem)
            await setDocInTodos(newTodoItem)
            // commit("NEW_TODO", newTodoItem)

        },
        deleteTodoItem({commit}, todoItem) {
            commit("DELETE_TODO", todoItem);
        },
        // eslint-disable-next-line no-unused-vars
        async toggleTodoStatus({commit}, todoItem) {
            console.log('todoItem !@#$$!##!###! =------_>', todoItem, todoItem.completed)
            await updateTodoStatus(todoItem.id, todoItem.completed)
            // commit("TOGGLE_TODO_STATUS", todoItem);
        },
    },
})
