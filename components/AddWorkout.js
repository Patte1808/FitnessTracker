'use strict';
 
var React = require('react-native');
var { Icon, } = require('react-native-icons');
var {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableHighlight,
  NavigatorIOS,
} = React;

var WorkoutActions = require('../actions/WorkoutActions');
var { MKButton, MKColor, MKTextField } = require('react-native-material-kit');
var AddExercise = require('./AddExercise');

var styles = StyleSheet.create({
  button: {
    padding: 8,
    flex: 1,
    margin: 5,
  },
  container: {
    flex: 1,
    padding: 8,
  },
  content: {
    flex:1,
    flexDirection: 'column',
    marginTop: 70,
    alignItems: 'stretch',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: 60,
  },
  textField: {
    height: 28,
  }
});
 
class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <MKTextField
            tintColor={MKColor.Lime}
            textInputStyle={{color: MKColor.Orange}}
            placeholder="Workout name"
            style={styles.textField}
          />
        </View>
      
        <View style={styles.bottom}>
          <MKButton
            backgroundColor={MKColor.Grey}
            shadowRadius={2}
            shadowOffset={{width:0, height:2}}
            shadowOpacity={.7}
            shadowColor="black"
            style={styles.button}
            onPress={() => {
              this.onPressAddExercise();
            }}>
              <Text pointerEvents="none"
              style={{color: 'white', fontWeight: 'bold',}}>
                Add Exercise
              </Text>
          </MKButton>

          <MKButton
            backgroundColor={MKColor.Red}
            shadowRadius={2}
            shadowOffset={{width:0, height:2}}
            shadowOpacity={.7}
            shadowColor="black"
            style={styles.button}
            onPress={() => {
              console.log('hi, raised button!');
            }}>
              <Text pointerEvents="none"
              style={{color: 'white', fontWeight: 'bold',}}>
                Finish
              </Text>
          </MKButton>
        </View>
      </View>
    );
  }

  onPressAddExercise() {
    this.props.navigator.push({
      name: 'AddExerciseView',
      component: AddExercise,
      rightButtonTitle: 'Save', 
      onRightButtonPress: () => {
        this.props.navigator.pop();
      }
    });
  }
}
 
module.exports = Welcome;