import {todoDocRef} from "@/middleware/bindings";
import {updateDoc} from "firebase/firestore";

// eslint-disable-next-line no-unused-vars
export default async ({commit}, todoItem) => {
    try {
        console.log("[ toggleTodoStatus ]:", todoItem)
        const docRef = todoDocRef(todoItem.id)

        await updateDoc(docRef, {
            completed: !todoItem.completed,
        })
    } catch (e) {
        console.log("FAILED [ toggleTodoStatus ]:", e)
        alert('Something went wrong! Please try later...')
    }

}
