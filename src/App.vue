<template>
  <div id="app">
      <h1>Todos</h1>
      <h3>Completed: {{completedTodos}}</h3>
      <h3>Pending: {{pendingTodos}}</h3>
      <todos-list/>
      <todo-form-component />
  </div>
</template>

<script>
import TodosList from './components/TodosListComponent.vue'
import TodoFormComponent from "@/components/TodoFormComponent.vue";
import {mapGetters} from "vuex";

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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
