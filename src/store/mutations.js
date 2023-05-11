import Vue from 'vue';

export default {
    LOGIN(state, key) {
        state.user.accessKey = key;
    },
    //we do not need that as it is not necessary to do this by hand!(realtime updates take care fo this!)
    NEW_TODO(state, todoItem) {
        state.todos.push({
            task_name: todoItem,
            completed: false
        })
    },
    NEW_TODO_FROM_FIRESTORE(state, todoItem) {
        state.todos.push(todoItem)
    },
    DELETE_TODO(state, todoId) {
        const toDeleteIndex = state.todos.findIndex(todoItem => {
            return todoItem.id === todoId
        });

        state.todos.splice(toDeleteIndex, 1);
    },
    UPDATE_TODO(state, todoItemInput) {
        const toUpdateIndex = state.todos.findIndex(todoItem => {
            return todoItem.id === todoItemInput.id
        });
        state.todos[toUpdateIndex].completed = todoItemInput.completed;
        state.todos[toUpdateIndex].task_name = todoItemInput.task_name;
    },
    //we do not need that as it is not necessary to do this by hand!(realtime updates take care fo this!)
    TOGGLE_TODO_STATUS(state, todoItem) {
        todoItem.completed = !todoItem.completed;
    },

    // add firestore snapshot subscription - unsubscribe handle
    ADD_SUBSCRIPTION: (state, subscription) => {
        const key = Object.keys(subscription)[0] // snapshot key
        console.log('key', key)
        const val = Object.values(subscription)[0] // snapshot unsubscribe function

        console.log("[ SNAPSHOT ]: subscribed to: [", key, "]")

        Vue.set(state.snapshots, key, val)
    },
    // make todos array empty
    DESTROY_TODOS: (state) => {
        state.todos = []
    },

}
