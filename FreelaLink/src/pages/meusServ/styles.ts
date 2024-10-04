import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({
    containerTop:{
        flexDirection: 'row',
        alignItems: 'center',
        padding:15,
        borderBottomWidth:0.5,
        borderColor:themes.colors.cyan
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        color:themes.colors.cyan
    }
})