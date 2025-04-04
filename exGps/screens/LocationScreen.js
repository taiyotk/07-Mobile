import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';

export default function LocationScreen() {
    // Estado para armazenar os dados de localização
    const [location, setLocation] = useState(null);
    // Função para solicitar permissão e obter a localização atual
    const getLocation = async () => {
        // Solicita permissão para acessar a localização em primeiro plano
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Permissão de localização negada');
            return;
        }
        // Se a permissão for concedida, obtém a posição atual do dispositivo
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    };
    // Função para atualizar a localização ao pressionar o botão
    const handleUpdateLocation = () => {
        getLocation(); // Chama a função para atualizar a localização
    };

    return (
        <View style={styles.container}>
            {location ? (
                // Caso a localização já tenha sido obtida, exibe os dados e um botão para atualizar
                <View>
                    <Text style={styles.text}>
                        Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
                    </Text>
                    <Button title="Atualizar Localização" onPress={handleUpdateLocation} />
                </View>
            ) : (
                // Se a localização ainda não foi obtida, exibe um botão para solicitar a localização
                <Button title="Obter Localização" onPress={handleUpdateLocation} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centraliza verticalmente o conteúdo
        alignItems: 'center', // Centraliza horizontalmente o conteúdo
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        marginInline: 10,
    },
});