import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: themes.colors.bgLogin
    },
    containerTop:{
        width: '100%',
        height: Dimensions.get('window').height/3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width:80,
        height:80
    },
    text:{
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,
        color: themes.colors.dark
    },
    containerMed:{
        width: '100%',
        height: Dimensions.get('window').height/4,
        paddingHorizontal: 37
    },
    containerBott:{
        width: '100%',
        height: Dimensions.get('window').height/3,
        alignItems: 'center',
    },
    textBottom:{
        fontSize: 15,
        color: themes.colors.dark
    }
})