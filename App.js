import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#22A'}}>
        <View style={{flex: 3, backgroundColor: 'red'}}>
          <Text>Texto aqui!</Text>
        </View>
        <View style={{flex: 10, backgroundColor: 'green'}}>
          <Text>Texto aqui!</Text>
        </View>
        <View style={{flex: 4, backgroundColor: 'yellow'}}>
          <Text>Texto aqui!</Text>
        </View>
      </View>
    );
  }
}

export default App;
