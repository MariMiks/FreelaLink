import React, { useState } from "react";
import { style } from "./styles";
import Logo from '../../assets/logo.png';

import { Text, View, Image, Alert } from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons'
import { themes } from "../../global/themes";
import { NavigationProp, useNavigation } from "@react-navigation/native";


export default function DetailsServ() {
    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <View style={{ backgroundColor: themes.colors.bgScreen }}>
            <View style={style.containerTop}>
                <MaterialIcons name="keyboard-backspace" size={20} style={style.back} onPress={()=>navigation.navigate('BottomRoutes')}/>
                <Text style={style.tituloTop}>Título do Serviço</Text>
            </View>
            <View style={style.containerMed}>
                <Text style={style.tituloMed}>Nome do ofertante</Text>
                <Text style={style.tipo}>Tipo serv</Text>
            </View>
            <View style={style.containerBott}>
                <View style={style.descricao}>
                    <Text style={style.tituloMed}>Descrição do freela</Text>
                    <Text style={{ textAlign: 'justify' }}>Um pouco mais de detalhes sobre o serviço ofertado. Mauris volutpat, sapien ac vehicula sollicitudin, urna ante dictum tortor, in efficitur purus tortor non metus. Pellentesque diam ex, mollis vitae nibh id, accumsan sodales urna. Praesent condimentum</Text>
                </View>
                <View style={style.local}>
                    <Text style={style.tituloMed}>Local</Text>
                    <Text>Período: </Text>
                    <Text>Hora: </Text>
                    <Text>Endereço: </Text>
                </View>
            </View>
        </View>
    )
}