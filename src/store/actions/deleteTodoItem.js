import {todoDocRef} from "@/middleware/bindings";
import {deleteDoc} from "firebase/firestore";

// eslint-disable-next-line no-unused-vars
export default async ({commit}, todoItem) => {
    try {
        console.log("[ deleteTodoItem ]:", todoItem)
        await deleteDoc(todoDocRef(todoItem.id))
    } catch (e) {
        console.log("FAILED [ deleteTodoItem ]:", e)
        alert('Something went wrong! Please try later...')
    }
   }
