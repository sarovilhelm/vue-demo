<template>
    <v-container>
        <v-text-field hide-details
                      @keydown.enter="addNewTodoItemHandler(newTodoItem)"
                      v-model="newTodoItem"
                      label="Add a todo"
                      placeholder="Type..."
                      filled
                      rounded
                      dense
                      single-line
                      append-icon="mdi-file-plus" class="shrink">Def
        </v-text-field>
        <v-btn @click="addNewTodoItemHandler">Submit</v-btn>
        <v-divider></v-divider>
    </v-container>
  <!--    <input  v-model="newTodoItem" />-->
  <!--    <button @click="addNewTodoItemHandler">Submit</button>-->
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "TodoFormComponent",
    data() {
        return {
            newTodoItem: ""
        }
    },
    methods: {
        ...mapActions(['addNewTodoItem']),
        async addNewTodoItemHandler() {
            await this.addNewTodoItem(this.newTodoItem);
            this.newTodoItem = "";
        }
    }
}
</script>

<style scoped>
.input {
    border: 2px solid black;
}
</style>
