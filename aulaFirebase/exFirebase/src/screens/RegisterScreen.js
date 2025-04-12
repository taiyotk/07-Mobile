// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function RegisterScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [idade, setIdade] = useState('');

    const handleSubmit = async () => {
        if (!nome || !usuario || !senha || !idade) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }
        try {
            await addDoc(collection(db, 'usuarios'), {
                nome,
                usuario,
                senha,
                idade: Number(idade)
            });
            Alert.alert("Sucesso", "Usuário cadastrado!");
            // Limpa os campos
            setNome('');
            setUsuario('');
            setSenha('');
            setIdade('');
            // Navega para a tela de listagem
            navigation.navigate('UsersList');
        } catch (error) {
            Alert.alert("Erro", "Não foi possível cadastrar o usuário.");
            console.error("Erro ao adicionar documento: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Digite o nome" />

            <Text style={styles.label}>Usuário:</Text>
            <TextInput style={styles.input} value={usuario} onChangeText={setUsuario} placeholder="Digite o usuário" />

            <Text style={styles.label}>Senha:</Text>
            <TextInput style={styles.input} value={senha} onChangeText={setSenha} placeholder="Digite a senha" secureTextEntry />

            <Text style={styles.label}>Idade:</Text>
            <TextInput style={styles.input} value={idade} onChangeText={setIdade} placeholder="Digite a idade" keyboardType="numeric" />
            
            <Button title="Cadastrar" onPress={handleSubmit} />
            <Button
                        title="Visualizar Cadastros"
                        onPress={() => navigation.navigate('UsersList')}
                        color="#841584"
                    />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    label: {
        fontSize: 16,
        marginTop: 12
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginTop: 4
    }
});
