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
var { MKButton, MKColor } = require('react-native-material-kit');
 
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
  bottom: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: 60,
  }
});
 
class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>

      
        <View style={styles.bottom}>
          <MKButton
            backgroundColor={MKColor.Grey}
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
}
 
module.exports = Welcome;