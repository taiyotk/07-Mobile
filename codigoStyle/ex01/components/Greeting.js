import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const Greeting = (props) => {
  return (
    <View>
      <Text>Olá {props.nome}, seja bem vindo!</Text>
    </View>
  );
}

export default Greeting;