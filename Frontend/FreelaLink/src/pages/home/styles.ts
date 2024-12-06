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
    logo:{
        width:50,
        height:50,
        marginRight:10
    },
    containerMed:{
        height:'100%'
    }
})