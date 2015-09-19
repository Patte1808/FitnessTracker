'use strict';
 
var React = require('react-native');
var { Icon, } = require('react-native-icons');
var {
  StyleSheet,
  View,
  Text,
  Component
} = React;
 
var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
  }
});
 
class WorkoutHistory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Welcome to your history!
        </Text>
      </View>
    );
  }
}
 
module.exports = WorkoutHistory;