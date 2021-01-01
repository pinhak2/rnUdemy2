import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Jobs extends Component {
  render() {
    let img = 'https://sujeitoprogramador.com/steve.png';
    return <Image source={{uri: img}} style={{width: 300, height: 300}} />;
  }
}

export default Jobs;
