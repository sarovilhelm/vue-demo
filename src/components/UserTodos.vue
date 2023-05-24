<template>
	<v-container>
		<h1>Todos</h1>
		<todo-form-component />
		<h3>Completed: {{ getCompletedTodos }}</h3>
		<h3>Pending: {{ getPendingTodos }}</h3>
		<todos-list />
	</v-container>
</template>

<script>
import TodosList from "@/components/TodosListComponent.vue"
import TodoFormComponent from "@/components/TodoFormComponent.vue"
import { mapActions, mapGetters, mapMutations } from "vuex"

export default {
	name: "App",
	components: {
		TodosList,
		TodoFormComponent
	},
	computed: {
		...mapGetters(["getCompletedTodos", "getPendingTodos", "todosSubExists"])
	},
	destroyed() {
		this.DESTROY_TODOS()
		this.snapshotUnsubscribe()
	},
	methods: {
		...mapActions(["addNewTodoItem", "watchTodos", "snapshotUnsubscribe"]),
		...mapMutations(["DESTROY_TODOS"])
	},
	// eslint-disable-next-line vue/order-in-components
	async created() {
		//check if the 'todosSubscription' already exists!
		if (!this.todosSubExists) this.watchTodos()
	}
}
</script>

<style></style>
