import React, {Component} from 'react';
import {View, StyleSheet, Text, Animated, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      larAnimada: new Animated.Value(150),
      altAnimada: new Animated.Value(35),
      opAnimada: new Animated.Value(0)
    };
    this.carregarGrafico = this.carregarGrafico.bind(this);
  }

  carregarGrafico() {
    Animated.sequence([

      Animated.timing(this.state.opAnimada,{
        toValue:1,
        duration: 400,
        useNativeDriver: false
      }),
      Animated.timing(
        this.state.altAnimada,
        { 
          toValue:300,
          duration:1000,
          useNativeDriver: false
        }
      ),
    ]).start();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: '#4169E1',
          }}>
          <TouchableOpacity onPress={this.carregarGrafico}>
            <Text style={{fontSize: 25, color: 'white'}}>Gerar Grafico</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
            <Text style={{fontSize: 22, textAlign: 'center'}}>Vendas</Text>
          <Animated.View
            style={{
              width: this.state.larAnimada,
              height: this.state.altAnimada,
              backgroundColor: '#FF0000',
              justifyContent: 'center',
              opacity: this.state.opAnimada,
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 22, textAlign: 'center'}}>
              R$150,00
            </Text>
          </Animated.View>
        </View>
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
