'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableHighlight
} = React;

var WorkoutActions = require('../actions/WorkoutActions');
var { MKTextField, MKColor } = require('react-native-material-kit');
 
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
    marginTop: 5,
  }
});

var { MKButton, MKColor, MKTextField } = require('react-native-material-kit');
 
class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <MKTextField
            tintColor={MKColor.Lime}
            textInputStyle={{color: MKColor.Orange}}
            placeholder="Exercise name"
            style={styles.textField}/>

          <MKTextField
            tintColor={MKColor.Lime}
            textInputStyle={{color: MKColor.Orange}}
            placeholder="Repetitions"
            style={styles.textField}
            keyboardType="numeric"/>

          <MKTextField
            tintColor={MKColor.Lime}
            textInputStyle={{color: MKColor.Orange}}
            placeholder="Sätze"
            style={styles.textField}
            keyboardType="numeric"/>
                  
        </View>
      </View>
    );
  }
}
 
module.exports = Welcome;