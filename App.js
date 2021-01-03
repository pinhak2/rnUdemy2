import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      larAnimada: new Animated.Value(150),
      altAnimada: new Animated.Value(35),
    };

    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.larAnimada, {
          toValue: 200,
          duration: 700,
          useNativeDriver: false,
        }),

        Animated.timing(this.state.larAnimada, {
          toValue: 150,
          duration: 700,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: this.state.larAnimada,
            height: this.state.altAnimada,
            backgroundColor: '#4169E1',
            justifyContent: 'center',
            borderRadius: 25,
          }}>
          <Text style={{ color: '#FFFFFF', fontSize: 22, textAlign: 'center' }}>
            Carregando...
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
