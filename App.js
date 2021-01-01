import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'; 
import Jobs from './src/images/jobs';
import Skeedoo from './src/images/skeedo';

class App extends Component{
  render(){

    let nome = 'Matheus';
    
    return(
      <View>
        <Text>Olá Mundo!!!!</Text>
        <Text>Meu Primeiro App</Text>    
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
          Sujeito Programador
        </Text>
        <Jobs />
        <Skeedoo />

        <Text style={{ fontSize: 30 }}> {nome} </Text>

      </View>
    );
  }
}

export default App;