import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../screens/RegisterScreen";
import ListScreen from "../screens/ListScreen";
import LoginScreen from "../screens/LoginScreen";
import FormScreen from "../screens/FormScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Tela Inicial" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Cadastro" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{ title: "Lista de aluguéis" }}
      />
      <Stack.Screen
        name="Form"
        component={FormScreen}
        options={{ title: "Formulário para aluguel" }}
      />
    </Stack.Navigator>
  );
}
