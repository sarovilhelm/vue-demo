<template>
    <v-container>
        <h1>Todos</h1>
        <todo-form-component/>
        <h3>Completed: {{ completedTodos }}</h3>
        <h3>Pending: {{ pendingTodos }}</h3>
        <todos-list/>
    </v-container>
</template>

<script>
import TodosList from '@/components/TodosListComponent.vue'
import TodoFormComponent from "@/components/TodoFormComponent.vue"
import {mapActions, mapGetters} from "vuex"


export default {
    name: 'App',
    computed: {
        ...mapGetters({
            completedTodos: 'getCompletedTodos',
            pendingTodos: 'getPendingTodos',
        })
    },
    components: {
        TodosList,
        TodoFormComponent
    },
    methods: {
        ...mapActions(['addNewTodoItem', 'watchTodos']),
    },
    async created() {
        this.watchTodos()
    }
}



</script>

<style>

</style>
