import React from "react";
import { style } from "./styles";
import { ActivityIndicator, TouchableOpacity, Text, TouchableOpacityProps, TouchableHighlightProps } from 'react-native';

type Props = TouchableHighlightProps & {
    titulo:string,
    periodo:string,
    hora:string,
    local:string,
    tipo:string
}

export function CardServ({...rest}:Props){
    return(
        <TouchableOpacity style={style.card} {...rest} activeOpacity={0.6}>
            <Text style={style.titulo}>{rest.titulo}</Text>
            <Text>Período: {rest.periodo}</Text>
            <Text>Hora: {rest.hora}</Text>
            <Text>Local: {rest.local}</Text>
            <Text style={style.tipo}>{rest.tipo}</Text>
        </TouchableOpacity>
    )
}