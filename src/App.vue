<template>
    <v-app>
        <v-container fluid class="grey lighten-5">
            <Navbar />
            <router-view />
            <AuthenticationGuard />
        </v-container>
    </v-app>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import Navbar from "@/components/NavbarComponent.vue";

export default {
  name: 'App',
    computed: {
      ...mapState(["todos"]),
      ...mapGetters({
          completedTodos: 'getCompletedTodos',
          pendingTodos: 'getPendingTodos',
      })
    },
  components: {
      Navbar,
  },
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
