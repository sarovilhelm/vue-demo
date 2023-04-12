<template>
    <div>
        <todo v-for="(todo, index) in todos" :key="index" :todo="todo"/>
    </div>
</template>

<script>
import Todo from './TodoComponent.vue';
import {mapState} from "vuex";

export default {
    components: {
        Todo
    },
    computed: {
        ...mapState({
            todos: 'todos'
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
