import {todosRef} from "@/middleware/bindings";
import {addDoc} from "firebase/firestore";

// eslint-disable-next-line no-unused-vars
export default async ({commit}, newTodoItem) => {
    console.log("[ addNewTodo ]:", newTodoItem)
    try {
        const res = await addDoc(todosRef(), {
            task_name: newTodoItem,
            completed: false
        })
        console.log("[ addNewTodo ] Success :", res)

    } catch (e) {
        console.log("FAILED [ addNewTodo ]:", e)
        alert('Something went wrong! Please try later...')
    }
}
