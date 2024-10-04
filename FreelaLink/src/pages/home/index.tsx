import React, { useState } from "react";
import { style } from "./styles";
import Logo from '../../assets/logo.png';

import { Text, View, Image} from 'react-native';
import { themes } from "../../global/themes";
import { CardServ } from "../../components/cardServ";
import { NavigationProp, useNavigation } from "@react-navigation/native";


export default function Home(){
    const navigation = useNavigation<NavigationProp<any>>();

    return(
        <View style={{backgroundColor: themes.colors.bgScreen}}>
            <View style={style.containerTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain"/>
                <Text style={{ fontSize:20, color:themes.colors.gray }}>FreelaLink</Text>
            </View>
            <View style={style.containerMed}>
                <CardServ 
                    titulo="Título do serviço"
                    periodo="2 anos"
                    hora="00:00 às 00:00"
                    local="R. dos Serviços, 12 - Centro, SJC-SP"
                    tipo='Tipo'
                    onPress={()=>navigation.navigate('Details')}
                />
            </View>
        </View>
    )
}