import React, { useState } from "react";
import { style } from "./styles";
import Logo from '../../assets/logo.png';

import { Text, View, Image, Alert} from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons'
import { themes } from "../../global/themes";
import { Input } from "../../components/input";


export default function CriarServ(){
    const [titulo, setTitulo] = useState('')


    return(
        <View style={{ backgroundColor:themes.colors.bgScreen }}>
            <View style={style.containerTop}>
                <Text style={{ fontSize:20, color:themes.colors.cyan, textAlign:'center', fontWeight:'bold' }}>
                    Cadastrar serviço
                </Text>
            </View>
            <View style={style.containerForm}>
                <Input 
                    title='Título'
                    value={titulo}
                    onChangeText={setTitulo}
                />
                <Input 
                    title='Tipo'
                    value={titulo}
                    onChangeText={setTitulo}
                />
                <Input 
                    title='Data inicial'
                    value={titulo}
                    onChangeText={setTitulo}
                />
                <Input 
                    title='Data final'
                    value={titulo}
                    onChangeText={setTitulo}
                />
                <Input 
                    title='Local'
                    value={titulo}
                    onChangeText={setTitulo}
                />
                <Input 
                    title='Descrição'
                    value={titulo}
                    onChangeText={setTitulo}
                />
            </View>
        </View>
    )
}