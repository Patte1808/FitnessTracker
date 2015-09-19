var alt = require('../lib/alt');
var WorkoutActions = require('../actions/WorkoutActions');

class WorkoutStore {
  constructor() {
    this.bindListeners({
      updateWorkout: WorkoutActions.updateWorkout,
      changeTab: WorkoutActions.changeTab,
    });

    this.state = {
      workouts: [{
        text: 'Test123'
      }],
      selectedTab: 'overview',
    };
  }

  updateWorkout(workout) {
    this.setState({ workouts: this.state.workouts.concat(workout) });
  }

  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  }
}

module.exports = alt.createStore(WorkoutStore, 'WorkoutStore');