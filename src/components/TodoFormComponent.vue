<template>
	<v-container>
		<v-text-field
			v-model="newTodoItem"
			hide-details
			label="Add a todo"
			placeholder="Type..."
			filled
			rounded
			dense
			single-line
			append-icon="mdi-file-plus"
			class="shrink"
			@keydown.enter="addNewTodoItemHandler(newTodoItem)"
			>Def
		</v-text-field>
		<v-btn @click="addNewTodoItemHandler">Submit</v-btn>
		<v-divider />
	</v-container>
</template>

<script>
import { mapActions } from "vuex"

export default {
	name: "TodoFormComponent",
	data: () => ({ newTodoItem: "" }),
	methods: {
		...mapActions(["addNewTodoItem"]),
		async addNewTodoItemHandler() {
			await this.addNewTodoItem(this.newTodoItem)
			this.newTodoItem = ""
		}
	}
}
</script>

<style scoped>
.input {
	border: 2px solid black;
}
</style>
