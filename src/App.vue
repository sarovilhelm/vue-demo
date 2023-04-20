<template>
    <v-app>
        <v-container fluid class="grey lighten-5">
            <Navbar />
            <router-view />
            <AuthenticationGuard />
        </v-container>
    </v-app>
<!--    <div>-->
<!--        <Navbar />-->
<!--        <router-view />-->
<!--        <AuthenticationGuard />-->
<!--    </div>-->
<!--    <v-app>-->
<!--        <v-container id="app">-->
<!--            <router-link to="/">Home</router-link> |-->
<!--            <router-link to="/about">About</router-link>-->

<!--        </v-container>-->
<!--    </v-app>-->
<!--  <div id="app">-->

<!--  </div>-->
</template>

<script>
import {mapGetters, mapState} from "vuex";
import Navbar from "@/components/NavbarComponent.vue";

export default {
  name: 'App',
    computed: {
      ...mapState(["todos", "ALO"]),
      ...mapGetters({
          completedTodos: 'getCompletedTodos',
          pendingTodos: 'getPendingTodos',
      })
    },
  components: {
      Navbar,
      // TodosList,
      // TodoFormComponent
  },
    created() {
        console.log('this.state', this.todos)
        console.log('......................', this.ALO)
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
