import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({
    containerTop:{
        width:'100%',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        borderBottomWidth:0.5,
        borderColor:themes.colors.cyan,
    },
    containerForm:{
        height:'100%'
    }
})