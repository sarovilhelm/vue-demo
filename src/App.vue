<template>
	<v-app>
		<v-app-bar app>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>My tasks</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn icon @click="handleLogOut()">
				<v-icon>mdi-logout</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" absolute left temporary>
			<v-list nav dense>
				<v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
					<v-list-item>
						<v-list-item-title>
							<router-link to="/todos">TODOS</router-link>
						</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-container fluid class="grey lighten-5">
			<Navbar />
			<router-view />
			<AuthenticationGuard />
		</v-container>
	</v-app>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"
import Navbar from "@/components/NavbarComponent.vue"

export default {
	name: "App",
	components: {
		Navbar
	},
	data: () => ({
		drawer: false,
		group: null
	}),
	computed: {
		...mapState(["todos"]),
		...mapGetters({
			completedTodos: "getCompletedTodos",
			pendingTodos: "getPendingTodos"
		})
	},
	methods: {
		...mapActions(["logout", "snapshotUnsubscribe"]),
		handleLogOut() {
			this.snapshotUnsubscribe()
			this.logout()
		}
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
