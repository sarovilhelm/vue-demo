// unsubscribe from firestore snapshot listener
export default ({ state }) => {
	const snapshots = state.snapshots

	console.log("[ SNAPSHOT ]: unsubscribed from (", Object.keys(snapshots).length, ") listeners")

	for (const key in snapshots) {
		if (Object.hasOwn(snapshots, key)) {
			snapshots[key]()
		}
		// delete state.snapshots[key]
	}
	state.snapshots = {}
}
