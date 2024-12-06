import React from "react";
import { style } from "./styles";
import { ActivityIndicator, TouchableOpacity, Text, TouchableOpacityProps, TouchableHighlightProps } from 'react-native';

type Props = TouchableHighlightProps & {
    text:string,
    loading?:boolean
}

export function Button({...rest}:Props){
    return(
        <TouchableOpacity style={style.button} {...rest} activeOpacity={0.6}>
            {rest.loading ? <ActivityIndicator /> : <Text style={style.textButton}>{rest.text}</Text>}
        </TouchableOpacity>
    )
}