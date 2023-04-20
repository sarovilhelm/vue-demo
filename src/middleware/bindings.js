import { collection, query } from "firebase/firestore"
// eslint-disable-next-line no-unused-vars
import { getFirestore, addDoc, getDoc, doc, updateDoc } from "firebase/firestore"
import app from "@/middleware/firebase"

export const todosCollectionRef = () => {
    return collection(getFirestore(app), "todos")
}

export const getCollection = (collectionName) => {
    return collection(getFirestore(app), collectionName)
}

export const getAllDocumentsQuery = (collectionName) => {
    return query(collection(getFirestore(app), collectionName));

}

export const setDocInTodos = async (todoItemTaskName) => {
    console.log('WOKRING IN [setDocInTodos]', `[${todoItemTaskName}]`, `id-[WITHOUT!}]`)
    const res = await addDoc(todosCollectionRef(), {
        task_name: todoItemTaskName,
        completed: false
    })
    console.log('res of set doc in todos', res)
}

export const updateTodoStatus = async (todoId, isCompleted) => {
    console.log('12345', typeof todoId)
    // const todoQuery = doc(collection(getFirestore(app), "todos"), where("uid", "==", `${todoId}`))
    // const todosDoc = await getDoc(todoQuery)
    // console.log("todosDoc", todosDoc)

    const todoDocRef = doc(getFirestore(app), "todos", todoId);
    console.log("todoDocRef 11111111", todoDocRef);

    // const todoItem = await getDoc(todoDocRef)
    // console.log('todoItem', todoItem)

    const res = await updateDoc(todoDocRef, {
        completed: !isCompleted
    })
    console.log('res in [updateTodoStatus] -> ', res)
}
