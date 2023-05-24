import { initializeApp } from "firebase/app"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import { connectAuthEmulator, getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyAwHp5glBHkE24mk2RRoxrW6bo-pcoCpb8",
	authDomain: "aravind-demo.firebaseapp.com",
	projectId: "aravind-demo",
	storageBucket: "aravind-demo.appspot.com",
	messagingSenderId: "28539537807",
	appId: "1:28539537807:web:43f8bd1926ae0f6deae3fa",
	measurementId: "G-Q0966K1LKG"
}

console.log("process.env.VUE_APP_ENVIRONMENT", process.env.VUE_APP_ENVIRONMENT)
const app = initializeApp(firebaseConfig)

if (process.env.VUE_APP_ENVIRONMENT === "local") {
	console.log("setting app to use local firestore emulator")
	connectFirestoreEmulator(getFirestore(app), "localhost", 8090)
	connectAuthEmulator(getAuth(app), "http://localhost:9010")
}

export default app
