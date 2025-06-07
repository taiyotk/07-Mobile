// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import { StyleSheet } from 'react-native';


import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';

export default function FormScreen({ navigation }) {
  const [form, setForm] = useState({
    nomecliente: '',
    NomeCarro: '',
    ValorAluguel: '',
    DataAluguel: ''
  });
  const { addCliente } = useFirebase();

  const handleChange = (field, value) =>
    setForm({ ...form, [field]: value });

  const handleSubmit = async () => {
    try {
      await addCliente(form);
      Alert.alert('Sucesso', 'Aluguel cadastrado!');
      navigation.navigate('ListScreen');
    } catch (error) {
      Alert.alert('Erro', 'Falha no cadastro');
      console.error(error);
    }
  };

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text style={[globalStyles.title, styles.title]}>Cadastro de Aluguel</Text>
      <TextInput
        placeholder="Nome do Cliente"
        style={[globalStyles.input, styles.input]}
        value={form.nomecliente}
        onChangeText={(v) => handleChange('nomecliente', v)}
      />
      <TextInput
        placeholder="Nome do Carro"
        style={[globalStyles.input, styles.input]}
        value={form.NomeCarro}
        onChangeText={(v) => handleChange('NomeCarro', v)}
      />
      <TextInput
        placeholder="Valor do Aluguel"
        style={[globalStyles.input, styles.input]}
        value={form.ValorAluguel}
        onChangeText={(v) => handleChange('ValorAluguel', v)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Data do Aluguel"
        style={[globalStyles.input, styles.input]}
        value={form.DataAluguel}
        onChangeText={(v) => handleChange('DataAluguel', v)}
      />
      <TouchableOpacity
        style={[globalStyles.button, styles.button]}
        onPress={handleSubmit}
      >
        <Text style={[globalStyles.buttonText, styles.buttonText]}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginBottom: 32,
    color: '#333',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    marginBottom: 18,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 14,
    fontSize: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#1976d2',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
