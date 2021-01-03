import React, {useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');


 

  //Component DidMount
  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if (nomeStorage !== null) {
        setNome(nomeStorage);
      }
    }

    getStorage();

    //return() => {};
  }, []);


    //Component DidUpdate
  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome);
    }
    saveStorage();
  }, [nome]);

  function alteraNome() {
    setNome(input);
  }


  const letrasNome =  useMemo(() => {
    console.log('Mudou letra');
    return nome.length;
  },[nome]);
 

 

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Seu nome..."
        value={input}
        onChangeText={(texto) => setInput(texto)}
      />

      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnTxt}> Altera Nome</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.texto}>Tem {letrasNome} letras</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  texto: {
    color: '#000',
    fontSize: 35,
  },
  btn: {
    backgroundColor: '#222',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#FFF',
  },
});
