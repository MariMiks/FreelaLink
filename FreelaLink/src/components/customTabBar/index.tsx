import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from "./styles";

import { Feather, Entypo } from '@expo/vector-icons';
import { themes } from "../../global/themes";


export default ({ state, navigation }) => {
    const go = (screenName: string) => {
        navigation.navigate(screenName)
    }

    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={() => go("Home")}>
                <Feather
                    name="home"
                    style={{ opacity: state.index === 0 ? 1 : 0.2, color: themes.colors.cyan, fontSize: 30 }}
                />
                <Text>Home</Text>
            </TouchableOpacity >
            <TouchableOpacity style={style.tabItemButtom}>
                <Entypo
                    name="plus"
                    size={40}
                    style={{ color: themes.colors.cyan }}
                    onPress={() => go('criarServ')}
                />
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => go("meusServ")}>
                <Feather 
                    name="briefcase" 
                    style={{ opacity: state.index === 2 ? 1 : 0.2, color: themes.colors.cyan, fontSize: 30 }} 
                />
                <Text>Serviços</Text>
            </TouchableOpacity>
        </View>
    )
}