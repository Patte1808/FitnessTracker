const React = require('react-native');
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
} = React;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  },
});

const NavigationBar = require('react-native-navbar');
var Welcome = require('./components/Welcome');
var AddWorkout = require('./components/AddWorkout');

class fitness_tracker extends React.Component {

  render() {
    return (
      <NavigatorIOS
        ref="nav"
        initialRoute={{
          component: Welcome,
          title: 'Fitness Tracker',
          rightButtonTitle: 'New Workout',
          onRightButtonPress: () => {
            this.refs.nav.navigator.push({
              title: "New Workout",
              component: AddWorkout
            });
          }
        }}
        style={styles.container}/>
    );
  }
}

AppRegistry.registerComponent('fitness_tracker', () => fitness_tracker);