import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaProduto from './src/ListaProdutos';
import FormProduto from './src/FormProduto';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista"   component={ListaProduto} options={{ title: 'Produtos' }} />
        <Stack.Screen name="Form"    component={FormProduto}   options={{ title: 'Novo / Editar Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
