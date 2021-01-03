import React, {Component} from 'react';
import {View, StyleSheet, Text, Animated, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      larAnimada: new Animated.Value(0)
    };

    Animated.timing(
      this.state.larAnimada,
      {
        toValue: 100,
        duration: 9000,
        useNativeDriver: false
      }
    ).start();
  }

  render() {
    let porcentagemAnimate = this.state.larAnimada.interpolate({
      inputRange: [0,100],
      outputRange: ['0%', '100%']
    });
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            backgroundColor: '#4169E1',
            width: porcentagemAnimate,
            height: 25,
          }}>
          </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
