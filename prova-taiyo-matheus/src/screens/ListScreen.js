// src/screens/UsersListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function UsersListScreen() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'clientes'));
        const usersList = [];
        querySnapshot.forEach((doc) => {
          usersList.push({ id: doc.id, ...doc.data() });
        });
        setClientes(usersList);
      } catch (error) {
        console.error("Erro ao buscar clientes: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchClientes();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Nome do cliente: {item.NomeCliente}</Text>
            <Text style={styles.itemText}>Nome do carro: {item.NomeCarro}</Text>
            <Text style={styles.itemText}>Data do Aluguel: {item.DataAluguel}</Text>
            <Text style={styles.itemText}>Valor do Aluguel: {item.ValorAluguel}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Nenhum cliente cadastrado.</Text>}
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
  loader: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  itemText: {
    fontSize: 16
  }
});

