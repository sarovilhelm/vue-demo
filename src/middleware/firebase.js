import { initializeApp } from "firebase/app"
// import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
// import { connectAuthEmulator, getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyByYEbVMFKcyALsS0tGre4-cHIE9LHUX5Q",
    authDomain: "vue-demo-c14c7.firebaseapp.com",
    projectId: "vue-demo-c14c7",
    storageBucket: "vue-demo-c14c7.appspot.com",
    messagingSenderId: "771887232308",
    appId: "1:771887232308:web:8f99d16bb7fa987584a161",
    measurementId: "G-EL2HTV2029"
}

const app = initializeApp(firebaseConfig)

export default app
