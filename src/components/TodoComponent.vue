<template>
    <v-container>
        <h1>1</h1>
        <div style="width:250px; margin: 5px auto">
            <div style="display: flex; justify-content: space-between">
                <span :class="{completed: todo.completed}" @click="toggleHandler(todo)">{{ todo.task_name }} || {{todo}}</span>
                <v-btn @click="deleteTodo(todo)">Delete</v-btn>
            </div>
        </div>
    </v-container>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "TodoComponent",
    props: ["todo"],
    methods: {
        ...mapActions({
            deleteTodo: "deleteTodoItem",
            toggleTodoStatus: "toggleTodoStatus"
        }),
        async toggleHandler(todo) {
            await this.toggleTodoStatus(todo)
        }
    }
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>
