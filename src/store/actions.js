import watchTodos from "@/store/actions/watchTodos"
import addNewTodoItem from "@/store/actions/addNewTodo"
import deleteTodoItem from "@/store/actions/deleteTodoItem"
import toggleTodoStatus from "@/store/actions/toggleTodoStatus"
import snapshotUnsubscribe from "@/store/actions/snapshotUnsubscribe"
import logout from "@/store/actions/logout"

export default {
	logout,
	watchTodos,
	addNewTodoItem,
	deleteTodoItem,
	toggleTodoStatus,
	snapshotUnsubscribe
}
