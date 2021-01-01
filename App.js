import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Jobs from './src/images/jobs';
import Skeedoo from './src/images/skeedo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Matheus',
    };
    this.enter = this.enter.bind(this);
  }

  enter(name){
    this.setState({
      name: name,
    });
  }

  render() {
    let nome = 'Matheus';

    return (
      <View style={{marginTop: 20}}>

        <Button title="Entrar" color='#FF0FF0' onPress={() => this.enter('João Silva') }/>    
        <Button title="Entrar" onPress={() => this.enter('Jeremias') }/>    
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
          Teste {this.state.name}
        </Text>
        <Jobs width={500} height={200} name={'Stevão Jobs'} />
        <Skeedoo />
      </View>
    );
  }
}

export default App;
