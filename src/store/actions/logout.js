import { getAuth, signOut } from "firebase/auth";

// unsubscribe from firestore snapshot listener
export default () => {
    console.log("[ LOGOUT ]: ")

    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            return resolve()
        }).catch((error) => {
            // An error happened.
            console.log('error in [ LOGOUT ]', error)
            return reject()
        });
    })

}
