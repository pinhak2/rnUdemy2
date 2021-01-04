import React, {useEffect, useMemo, useState, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.btnTxt}> Novo Nome</Text>

      <FontAwesome name="home" size={45} color="#11118C" />
      <Feather name="user" size={45} color="#54A300" />
      <FontAwesome name="gift" size={45} color="#F0F" />

      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome name="youtube" size={45} color="#FFF" />
        <Text style={styles.btnTxt}>Acessar Canal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnYoutube: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: "#FF0000",
    borderRadius: 5
  },

  btnTxt:{
    paddingLeft: 10,
    color: "#FFF"
  }
});
