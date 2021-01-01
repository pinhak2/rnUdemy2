import React, {Component} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

class Main extends React.Component {
  static navigationOptions = {
    headerTitle: 'Inicio',
    headerStyle: {
      backgroundColor: '#5abc',
    },
    headerRight: () => (
      <Button
        onPress={() =>
          alert('This is a button! \n' + 'Testando DidMount: ' + aux2)
        }
        title="Info"
        color="#f00"
      />
    ),
  };

  state = {
    docs: [],
  };

  render() {
    aux = 3;

    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
        <Text>Página Main:</Text>
        {this.state.docs.map(product =>
           <Text key={product._id}>{product.title}</Text>
        )}
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </SafeAreaView>
    );
  }
}

export default Main;
