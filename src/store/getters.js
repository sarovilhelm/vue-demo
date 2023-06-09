export default {
	getCompletedTodos(state) {
		return state.todos.filter(todo => todo.completed).length
	},
	getPendingTodos(state) {
		return state.todos.filter(todo => !todo.completed).length
	},
	todosSubExists: state => {
		return state.snapshots.todosSubscription
	}
}
