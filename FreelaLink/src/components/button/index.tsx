import React from "react";
import { style } from "./styles";
import { ActivityIndicator, TouchableOpacity, Text, TouchableHighlightProps } from 'react-native';

type Props = TouchableHighlightProps & {
    text:string,
    loading?:boolean
}

export function Button({...rest}:Props){
    return(
        <TouchableOpacity style={style.button}>
            {rest.loading ? <ActivityIndicator /> : <Text style={style.textButton}>{rest.text}</Text>}
        </TouchableOpacity>
    )
}