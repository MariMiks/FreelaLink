import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    button:{
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.colors.lightCyan,
        borderRadius: 40,
    },
    textButton:{
        color: themes.colors.bgScreen,
        fontWeight: 'bold',
        fontSize: 16
    },
})