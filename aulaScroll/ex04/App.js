import React, { useState } from 'react';
import { StyleSheet, 
  Text, 
  ScrollView, 
  KeyboardAvoidingView, 
  TextInput, 
  Button } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollcontainer}>
        <Text style={styles.title}>Formulário</Text>
        {Array.from({length: 10}).map((_, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={`Campo ${index + 1}`}
            value={input}
            onChangeText={setInput}
          />
        ))}
        <Button title='Enviar' onPress={() => alert('Dados enviados!')} />
      </ScrollView>
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollcontainer:{
    padding: 10,
  },
  title:{
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
    backgroundColor: '#bab7af',
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#141414',
  }
});
