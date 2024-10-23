import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({
    containerTop:{
        flexDirection: 'row',
        width:'100%',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomWidth:0.5,
        borderColor:themes.colors.cyan,
    },
    tituloTop:{
        width: '100%',
        fontSize:25,
        fontWeight:'bold',
        color:themes.colors.cyan,
        textAlign: 'center'
    },
    back:{
        color:themes.colors.cyan,
        alignSelf: 'center',
        marginLeft: 20
    },
    containerMed:{
        width:'100%',
        padding:20,
        borderBottomWidth:0.5,
        borderColor:themes.colors.cyan,
    },
    tituloMed:{
        width: '100%',
        fontSize:25,
        fontWeight:'bold',
        color:themes.colors.cyan,
    },
    tipo:{
        backgroundColor:themes.colors.cyan,
        color:themes.colors.bgScreen,
        borderRadius:10,
        width: 100,
        textAlign: 'center',
        marginTop: 5
    },
    containerBott:{
        width:'100%',
        padding:20,
        gap:50
    }
})