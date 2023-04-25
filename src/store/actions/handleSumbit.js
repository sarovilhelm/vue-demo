//todo delete later
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default async ({commit}, loginData) => {
    const auth = getAuth();
    console.log('loginData', loginData);
    try {
        const response = await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
        commit("LOGIN", response._tokenResponse.idToken);
        return {success: true};
    } catch (err) {
        console.log('3e', err);
        return {err};
    }
}
