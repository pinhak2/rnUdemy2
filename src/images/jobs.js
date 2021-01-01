import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Jobs extends Component {
  render() {
    let img = 'https://sujeitoprogramador.com/steve.png';
    return (
      <View>
      <Image
        source={{uri: img}}
        style={{width: this.props.width, height: this.props.height}}
      />
      <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default Jobs;
