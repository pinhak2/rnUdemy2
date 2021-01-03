import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Jobs from './src/images/jobs';
import Skeedoo from './src/images/skeedo';
import Styles from './src/styles/style';

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
      <View style={Styles.a}>

        <Button title="Entrar" color='#FF0FF0' onPress={() => this.enter('João Silva') }/>    
        <Button title="Entrar" onPress={() => this.enter('Jeremias') }/>    
        <Text style={Styles.mainText}>
          Teste {this.state.name}
        </Text>
        <Text  style={[Styles.area, Styles.mainText]}>
          Teste 2 Styles
        </Text>
        <Jobs width={500} height={200} name={'Stevão Jobs'}/>
        <Skeedoo />
      </View>
    );
  }
}

export default App;
