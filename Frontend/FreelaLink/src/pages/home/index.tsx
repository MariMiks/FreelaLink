import React, { useEffect, useState } from "react";
import { style } from "./styles";
import Logo from '../../assets/logo.png';

import { Text, View, Image, ActivityIndicator, FlatList} from 'react-native';
import { themes } from "../../global/themes";
import { CardServ } from "../../components/cardServ";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export interface IListarServico {
    id: number;
    titulo: string;
    descricao: string;
    periodo: string;
    local: string;
    data: string;
    tipo: string;
    id_solicitante: string;
}

export default function Home(){
    const navigation = useNavigation<NavigationProp<any>>();

    const [servicos, setServicos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchServicos = async () => {
            try {
                const response = await fetch('http://192.168.202.36:3001/servico/listarTodos');
                const data = await response.json();
                setServicos(data.data); // Ajuste conforme a estrutura da resposta
            } catch (err) {
                setError('Erro ao carregar serviços');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchServicos();
    }, []);


    if (loading) {
        return <ActivityIndicator size="large" color={themes.colors.cyan} />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return(
        <View style={{backgroundColor: themes.colors.bgScreen}}>
            <View style={style.containerTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain"/>
                <Text style={{ fontSize:20, color:themes.colors.gray }}>FreelaLink</Text>
            </View>
            <View style={style.containerMed}>
            <FlatList
                    data={servicos}
                    keyExtractor={(item: IListarServico) => item.id.toString()} // Supondo que cada serviço tenha um ID único
                    renderItem={({ item }) => (
                        <CardServ
                            titulo={item.titulo}
                            periodo={item.periodo}
                            hora={item.data} // Ajuste conforme necessário
                            local={item.local}
                            tipo={item.tipo} // Ajuste conforme necessário
                            onPress={() => navigation.navigate('Details', { servicoId: item.id })} // Navegar para detalhes do serviço
                        />
                    )}
                />
            </View>
        </View>
    )
}