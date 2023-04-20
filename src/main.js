import Vue from 'vue'
import App from './App.vue'
import store from './store';
import vuetify from './plugins/vuetify'
import router from './router';
import AuthGuard from "@nerd305/firebase-vuetify-auth"
import VueX from './store/index'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyByYEbVMFKcyALsS0tGre4-cHIE9LHUX5Q",
//   authDomain: "vue-demo-c14c7.firebaseapp.com",
//   projectId: "vue-demo-c14c7",
//   storageBucket: "vue-demo-c14c7.appspot.com",
//   messagingSenderId: "771887232308",
//   appId: "1:771887232308:web:8f99d16bb7fa987584a161",
//   measurementId: "G-EL2HTV2029"
// };
//
// // Initialize Firebase
// initializeApp(firebaseConfig);

import app from "@/middleware/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"

Vue.config.productionTip = false

const authGuardSettings = {
  debug: true, // enable debug messages in console log
  session: "local", // session persistance

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
  registration: false, // allow new user registrations
}


Vue.use(AuthGuard, authGuardSettings)

// firebase.auth().onAuthStateChanged(() => {
//   if (!app) {
//     /* eslint-disable no-new */
//     app = new Vue({
//       router,
//       store,
//       vuetify,
//       render: h => h(App)
//     }).$mount('#app');
//   }
// });

// reload VUE app on Firebase auth state change
onAuthStateChanged(getAuth(app), () => {
  new Vue({
    router,
    vuetify,
    store,
    render: (h) => h(App),
  }).$mount("#app")
})

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')
