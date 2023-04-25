import {collection} from "firebase/firestore"
import { doc, getFirestore } from "firebase/firestore"
import app from '@/middleware/firebase'
export const db = getFirestore(app)
export const todosRef = () => {
    return collection(db, 'todos')
}

export const todoDocRef = (todoId) => {
    return todoId ? doc(db, `todos/${todoId}`) : null
}
