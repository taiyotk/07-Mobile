import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "./screens/RegisterScreen";
import ListScreen from "./screens/ListScreen";
import LoginScreen from "./screens/LoginScreen";
import FormScreen from "./screens/FormScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <HomeScreen name="Home" component={HomeScreen} options={{title: "Tela Inicial"}}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{title: "Cadastro"}}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{title: "Login"}}/>
                <Stack.Screen name="ListScreen" component={ListScreen} options={{title: "Lista de aluguéis"}}/>
                <Stack.Screen name="Form" component={FormScreen} options={{title: "Formulário para aluguel"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
