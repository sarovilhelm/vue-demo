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
import {mapActions, mapGetters, mapMutations} from "vuex"


export default {
    name: 'App',
    computed: {
        ...mapGetters({
            completedTodos: 'getCompletedTodos',
            pendingTodos: 'getPendingTodos',
            doesTodosSubExist: 'todosSubExists',
        }),
    },
    components: {
        TodosList,
        TodoFormComponent
    },
    methods: {
        ...mapActions(['addNewTodoItem', 'watchTodos', 'snapshotUnsubscribe']),
        ...mapMutations(['DESTROY_TODOS']),
    },
    async created() {
        //check if the 'todosSubscription' already exists!
        console.log('this.doesTodosSubExist', this.doesTodosSubExist)
        if (!this.doesTodosSubExist) this.watchTodos()
    },
    destroyed() {
        this.DESTROY_TODOS()
        this.snapshotUnsubscribe()
    }
}


</script>

<style>

</style>
