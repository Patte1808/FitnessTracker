var alt = require('../lib/alt');

class WorkoutActions {
	updateWorkout(id, text) {
		return { id, text }
	}

	changeTab(tabName) {
		return tabName 
	}
}

module.exports = alt.createActions(WorkoutActions);