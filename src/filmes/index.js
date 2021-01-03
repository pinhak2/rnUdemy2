import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

 class Filmes extends Component {
 render(){
  return (
    <View>
        <Text style={styles.mainText} >{this.props.data.nome}</Text>
        <Text >{this.props.data.sinopse}</Text>
    </View>
   );
 }
}


const styles = StyleSheet.create({
    area: {
        marginTop: 40,
    },
    mainText:{
        fontSize:25,
        color: '#FF0000',
    }
})


export default Filmes;