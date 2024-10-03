import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    titleInput:{
        marginTop: 20,
        marginLeft: 5,
        color: themes.colors.dark,
    },
    boxInput:{
        width: '100%',
        height: 40,
        marginTop: 10,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: themes.colors.bgScreen
    },
    input:{
        width: '90%',
        height: '100%',
        borderRadius: 40,
        paddingLeft: 10,
        paddingRight: 10
    },
})