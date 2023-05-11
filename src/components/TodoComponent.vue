<template>
    <v-container>
        <h1>1</h1>
        <div style="width:250px; margin: 5px auto">
            <div style="display: flex; justify-content: space-between">
                <span :class="{completed: todo.completed}" @click="toggleHandler(todo)">{{ todo.task_name }}</span>
                <v-btn @click="deleteTodo(todo)">Delete</v-btn>
            </div>
        </div>
        <v-overlay :value="overlay">
            <v-progress-circular
                indeterminate
                size="64"
            ></v-progress-circular>
        </v-overlay>
    </v-container>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "TodoComponent",
    data: () => ({
        overlay: false,
    }),
    props: ["todo"],
    methods: {
        ...mapActions({
            deleteTodo: "deleteTodoItem",
            toggleTodoStatus: "toggleTodoStatus"
        }),
        async toggleHandler(todo) {
            this.overlay = !this.overlay
            await this.toggleTodoStatus(todo)
            this.overlay = !this.overlay
        }
    }
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>
