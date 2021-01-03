import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
        <View style={{width: 100, height: 50, backgroundColor: 'green'}}></View>
        <View style={{ height: 50, backgroundColor: 'red'}}></View>
        <View style={{ height: 50, backgroundColor: 'yellow'}}></View>
      </View>
    );
  }
}

export default App;
