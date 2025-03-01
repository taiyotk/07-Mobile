import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function Hello(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cfe3e6',  
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});