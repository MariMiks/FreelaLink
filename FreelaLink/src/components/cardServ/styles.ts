import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    card:{
        margin:15,
        padding:15,
        borderRadius:10,
        backgroundColor:themes.colors.lightBlue
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        color:themes.colors.cyan
    },
    tipo:{
        backgroundColor:themes.colors.cyan,
        color:themes.colors.bgScreen,
        borderRadius:10,
        width: 100,
        textAlign: 'center',
        marginTop: 5
    }
})