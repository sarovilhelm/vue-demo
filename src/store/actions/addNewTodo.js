import {todosRef} from "@/middleware/bindings";
import {addDoc} from "firebase/firestore";

// eslint-disable-next-line no-unused-vars
export default ({commit}, newTodoItem) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        console.log("[ addNewTodo ]:", newTodoItem)
        try {
            const res = await addDoc(todosRef(), {
                task_name: newTodoItem,
                completed: false
            })
            console.log("[ addNewTodo ] Success :", res)
            return resolve()

        } catch (e) {
            console.log("FAILED [ addNewTodo ]:", e)
            alert('Something went wrong! Please try later...')
            return reject()
        }
    })

}
