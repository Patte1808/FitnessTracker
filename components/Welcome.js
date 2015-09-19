'use strict';
 
var React = require('react-native');
var { Icon, } = require('react-native-icons');
var {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableHighlight
} = React;

var WorkoutActions = require('../actions/WorkoutActions');
var { MKColor, MKButton } = require('react-native-material-kit');

var AddWorkout = require('./AddWorkout');
 
var styles = StyleSheet.create({
  button: {
    margin: 80
  }
});
 
class Welcome extends React.Component {

    render() {
        return (
              <MKButton
                backgroundColor={MKColor.Grey}
                shadowRadius={2}
                shadowOffset={{width:0, height:2}}
                shadowOpacity={.7}
                shadowColor="black"
                style={styles.button}
                onPress={() => {
                  this.onPressAddWorkout();
                }}>
                <Text pointerEvents="none"
                      style={{color: 'white', fontWeight: 'bold',}}>
                  Add Workout
                </Text>
              </MKButton>
        );
    }

    onPressAddWorkout() {
      this.props.navigator.push({
        name: 'AddWorkoutView',
        component: AddWorkout
      });
    }
}
 
module.exports = Welcome;