import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button} from "react-native";
import { api } from "../services/api";

export default function ListaProdutos({ navigation }) {
    const [produto, setProduto] = useState([]);

    async function carregar() {
        const res = await api.get("/");
        setProduto(res.data);
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', carregar);
        return unsubscribe;
    }, [navigation]);

    async function excluir(id) {
        await api.delete(`/${id}`);
        carregar();            
    }

    
}