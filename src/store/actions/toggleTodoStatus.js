import { todoDocRef } from "@/middleware/bindings"
import { updateDoc } from "firebase/firestore"

// eslint-disable-next-line no-unused-vars
export default async ({ commit }, todoItem) => {
	// eslint-disable-next-line no-async-promise-executor
	return new Promise(async (resolve, reject) => {
		try {
			console.log("[ toggleTodoStatus ]:", todoItem)
			const docRef = todoDocRef(todoItem.id)

			await updateDoc(docRef, { completed: !todoItem.completed })
			return resolve()
		} catch (e) {
			console.error("FAILED [ toggleTodoStatus ]:", e)
			/* eslint no-undef: "error"*/
			/* eslint-env browser*/
			alert("Something went wrong! Please try later...")
			return reject()
		}
	})
}
