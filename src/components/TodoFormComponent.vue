<template>
<div>
    <input type="text" v-model="newTodoItem" />
    <button @click="addNewTodoItemHandler">Submit</button>
</div>
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
        addNewTodoItemHandler() {
            this.addNewTodoItem(this.newTodoItem);
            this.newTodoItem = "";
        }
    }
}
</script>

<style></style>
