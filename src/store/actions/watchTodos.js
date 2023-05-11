import {todosRef, getCurrentUser} from "@/middleware/bindings";
import {onSnapshot, query} from "firebase/firestore";

export default ({commit, dispatch}) => {
    const currUser = getCurrentUser()
    if (currUser) {
        console.log('currUser found [ watchTodos ]', currUser)
        const collectionRef = todosRef()
        const queryAllDocsFromTodos = query(collectionRef)
        const unsubscribe = onSnapshot(queryAllDocsFromTodos, (doc) => {
            console.log("[ watchTodos ] real time data available")
            doc.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log('[ watchTodos ] new data available: ', {id: change.doc.id, ...change.doc.data()})
                    commit("NEW_TODO_FROM_FIRESTORE", {id: change.doc.id, ...change.doc.data()})
                }
                if (change.type === "modified") {
                    console.log('[ watchTodos ] data updated: ', {id: change.doc.id, ...change.doc.data()})
                    commit("UPDATE_TODO", {id: change.doc.id, ...change.doc.data()})
                }
                if (change.type === "removed") {
                    console.log('[ watchTodos ] data updated: ', {id: change.doc.id, ...change.doc.data()})
                    commit("DELETE_TODO", {id: change.doc.id})
                }
            })
        })
        commit("ADD_SUBSCRIPTION", {todosSubscription: unsubscribe}, {root: true})
    } else {
        console.log('no currUser in [ watchTodos ]...')
        commit("DESTROY_TODOS")
        dispatch('snapshotUnsubscribe')
    }
}
