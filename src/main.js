import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import vuetify from "@/plugins/vuetify"
import router from "./router"
import AuthGuard from "@nerd305/firebase-vuetify-auth"
import VueX from "./store/index"
import app from "@/middleware/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"

Vue.config.productionTip = false

const authGuardSettings = {
	debug: true, // enable debug messages in console log
	session: "local", // session persistence

	router, // routes
	firebase: app, // pass on firebase middleware app init
	store: VueX,

	saml: false, // allow authentication with SAML
	saml_text: "Login with OKTA", // text for large login button
	saml_provider_id: "saml.okta", // firebase provider ID for SAML

	email: true, // allow authentication with email
	phone: true, // allow authentication with phone
	google: true, // allow authentication with gmail account
	facebook: true, // allow authentication with facebook account

	verification: false, // require user email to be verified before granting access
	registration: false // allow new user registrations
}

Vue.use(AuthGuard, authGuardSettings)
// reload VUE app on Firebase auth state change
onAuthStateChanged(getAuth(app), () => {
	new Vue({
		router,
		vuetify,
		store,
		render: h => h(App)
	}).$mount("#app")
})
