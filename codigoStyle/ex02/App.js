import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Box from "./components/Box/Box.js";

// flexbox
export default function App() {
  return (
    <View style={Styles.container}>
      <Box nome="Caixa 1"/>
      <Box nome="Caixa 2"/>
      <Box nome="Caixa 3"/>
    </View>
    
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#bec7d1',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    
  }
})