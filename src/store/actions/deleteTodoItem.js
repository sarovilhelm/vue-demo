import {todoDocRef} from "@/middleware/bindings";
import {deleteDoc} from "firebase/firestore";

// eslint-disable-next-line no-unused-vars
export default ({commit}, todoItem) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            console.log("[ deleteTodoItem ]:", todoItem)
            await deleteDoc(todoDocRef(todoItem.id))
            return resolve()
        } catch (e) {
            console.log("FAILED [ deleteTodoItem ]:", e)
            alert('Something went wrong! Please try later...')
            return reject()
        }
    })
}
