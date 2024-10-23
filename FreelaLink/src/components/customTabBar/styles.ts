import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    tabArea:{
        flexDirection: "row",
        height: 60,
        justifyContent: 'space-around',
        borderTopWidth:0.5,
        borderColor:themes.colors.cyan
    },
    tabItem:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    tabItemButtom:{
        width:70,
        height:70,
        borderRadius:35,
        alignItems: 'center',
        justifyContent:'center',
        zIndex:1,
        top:-20,
        borderWidth:1,
        borderColor: themes.colors.cyan,
        backgroundColor: themes.colors.bgScreen
    },
    tabIcon: {
        fontSize:32,
        color: themes.colors.cyan
    }
})