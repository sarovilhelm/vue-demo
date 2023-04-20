<template>
        <v-container>
            <todo v-for="(todo) in todos" :key="todo.id" :todo="todo"/>
        </v-container>
</template>

<script>
import Todo from './TodoComponent.vue';
import {mapGetters, mapState} from "vuex";

export default {
    components: {
        Todo
    },
    computed: {
        ...mapGetters({
            completedTodos: 'getCompletedTodos',
        }),
        ...mapState({
            todos: 'todos'
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
